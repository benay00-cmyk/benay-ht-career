import { GoogleGenAI } from "@google/genai";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * Nano Banana model fallback chain — Google renames/versions this model
 * periodically. Newest/recommended first; older ones only used if the
 * primary model id stops being accepted by the API.
 */
const MODEL_CANDIDATES = [
  "gemini-3.1-flash-image", // "Nano Banana 2" — current recommended generalist
  "gemini-3.1-flash-lite-image", // "Nano Banana 2 Lite" — faster/cheaper fallback
  "gemini-2.5-flash-image", // original "Nano Banana" — legacy fallback
] as const;

export type GenerateImageOptions = {
  /** Text description of the image to generate. */
  prompt: string;
  /** Base file name (no extension) — will be slugified. */
  name: string;
  /** e.g. "1:1", "16:9", "4:5", "9:16". */
  aspectRatio?: string;
  /** e.g. "1K", "2K". */
  imageSize?: string;
  format?: "png" | "webp";
  /** Defaults to public/images/generated. */
  outputDir?: string;
};

export type GenerateImageResult = {
  /** Absolute path on disk. */
  filePath: string;
  /** Path usable directly in next/image `src`, e.g. "/images/generated/xyz.png". */
  publicPath: string;
  /** Which model in the fallback chain actually produced the image. */
  model: string;
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isBillingRequiredError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  // Google's image models currently ship with a hard 0 free-tier quota —
  // this is a billing/plan issue, not a transient rate limit, so retrying
  // with backoff would just waste time for no benefit.
  return /limit:\s*0\b/i.test(message);
}

function isRetryableError(error: unknown): boolean {
  if (isBillingRequiredError(error)) return false;
  const message = error instanceof Error ? error.message : String(error);
  return /429|RESOURCE_EXHAUSTED|rate_limit|quota_exceeded|too_many_requests|503|UNAVAILABLE/i.test(
    message
  );
}

function isModelUnsupportedError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /not found|NOT_FOUND|is not supported|invalid model|INVALID_ARGUMENT.*model/i.test(
    message
  );
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withBackoff<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (!isRetryableError(error) || attempt === retries) throw error;
      await sleep(2 ** attempt * 1000);
    }
  }
  throw lastError;
}

let cachedClient: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY tanımlı değil. .env.local dosyana Google AI Studio'dan aldığın anahtarı ekle."
    );
  }
  if (!cachedClient) {
    cachedClient = new GoogleGenAI({ apiKey });
  }
  return cachedClient;
}

/**
 * Generates a website image via Gemini's Nano Banana image model and saves
 * it under public/images/generated. Tries each model in MODEL_CANDIDATES in
 * order, only falling through to the next one if the current model id is
 * rejected as unsupported — a genuine rate-limit/quota error is surfaced
 * immediately rather than silently degrading to a different model.
 */
export async function generateSiteImage(
  options: GenerateImageOptions
): Promise<GenerateImageResult> {
  const ai = getClient();
  const format = options.format ?? "png";
  const mimeType = format === "webp" ? "image/webp" : "image/png";

  let lastError: unknown;

  for (const model of MODEL_CANDIDATES) {
    try {
      const interaction = await withBackoff(() =>
        ai.interactions.create({
          model,
          input: options.prompt,
          response_format: {
            type: "image",
            mime_type: mimeType,
            ...(options.aspectRatio ? { aspect_ratio: options.aspectRatio } : {}),
            ...(options.imageSize ? { image_size: options.imageSize } : {}),
          },
        } as Parameters<typeof ai.interactions.create>[0])
      );

      const image = (interaction as { output_image?: { data?: string } }).output_image;
      if (!image?.data) {
        throw new Error("Gemini yanıtında görsel verisi bulunamadı.");
      }

      const buffer = Buffer.from(image.data, "base64");
      const outputDir =
        options.outputDir ?? path.join(process.cwd(), "public", "images", "generated");
      await mkdir(outputDir, { recursive: true });

      const slug = slugify(options.name) || "gorsel";
      const fileName = `${slug}.${format}`;
      const filePath = path.join(outputDir, fileName);
      await writeFile(filePath, buffer);

      return {
        filePath,
        publicPath: `/images/generated/${fileName}`,
        model,
      };
    } catch (error) {
      lastError = error;
      if (isBillingRequiredError(error)) {
        throw new Error(
          "Google Gemini görsel üretim modelleri ücretsiz katmanda desteklenmiyor (kota: 0). " +
            "Google AI Studio / Google Cloud hesabında faturalandırmayı (billing) etkinleştirmen gerekiyor: " +
            "https://aistudio.google.com/apikey adresinden API anahtarına bağlı projede billing'i aç."
        );
      }
      if (isModelUnsupportedError(error)) {
        continue; // try next model in the fallback chain
      }
      throw error; // rate-limit/other errors: don't silently switch models
    }
  }

  throw new Error(
    `Görsel üretilemedi — denenen modeller: ${MODEL_CANDIDATES.join(", ")}. Son hata: ${
      lastError instanceof Error ? lastError.message : String(lastError)
    }`
  );
}
