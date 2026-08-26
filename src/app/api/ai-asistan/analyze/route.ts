import { NextResponse } from "next/server";

import { extractPdfText } from "@/lib/pdf/extract-text";
import { extractDocxText } from "@/lib/pdf/extract-docx";
import { analyzeCv } from "@/lib/ai/anthropic";
import { analyzeRequestSchema } from "@/lib/ai/schema";
import { checkRateLimit } from "@/lib/ai/rate-limit";
import { logAiSession } from "@/lib/ai/log-session";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB

export async function POST(request: Request) {
  const identifier =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  const { allowed } = checkRateLimit(identifier);

  if (!allowed) {
    return NextResponse.json(
      {
        error:
          "Günlük analiz hakkınızı doldurdunuz. Lütfen daha sonra tekrar deneyin.",
      },
      { status: 429 }
    );
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "İstek okunamadı, lütfen tekrar deneyin." },
      { status: 400 }
    );
  }

  const cvFile = formData.get("cv");
  const cvTextRaw = formData.get("cvText");
  const jobDescription = formData.get("jobDescription");

  const parsedRequest = analyzeRequestSchema.safeParse({
    jobDescription: typeof jobDescription === "string" ? jobDescription : "",
    cvText: typeof cvTextRaw === "string" && cvTextRaw.trim() ? cvTextRaw : undefined,
  });

  if (!parsedRequest.success) {
    return NextResponse.json(
      { error: parsedRequest.error.issues[0]?.message ?? "Geçersiz istek." },
      { status: 400 }
    );
  }

  let cvText: string | undefined = parsedRequest.data.cvText;

  if (!cvText && cvFile instanceof File && cvFile.size > 0) {
    if (cvFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "CV dosyası çok büyük. Maksimum dosya boyutu 4 MB." },
        { status: 400 }
      );
    }

    const isPdf = cvFile.type === "application/pdf";
    const isDocx =
      cvFile.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      cvFile.name?.toLowerCase().endsWith(".docx");

    if (!isPdf && !isDocx) {
      return NextResponse.json(
        { error: "CV yalnızca PDF ya da Word (.docx) formatında yüklenebilir." },
        { status: 400 }
      );
    }

    try {
      const buffer = await cvFile.arrayBuffer();
      cvText = isPdf ? await extractPdfText(buffer) : await extractDocxText(buffer);
    } catch {
      return NextResponse.json(
        {
          error:
            "CV dosyası okunamadı. Dosyanın bozuk olmadığından emin olun.",
        },
        { status: 400 }
      );
    }

    if (cvText.length < 50) {
      return NextResponse.json(
        {
          error:
            "CV içeriği okunamadı. Dosyanız taranmış bir görüntü olabilir, lütfen metin tabanlı bir dosya yükleyin ya da metni yapıştırın.",
        },
        { status: 400 }
      );
    }
  }

  try {
    const result = await analyzeCv(parsedRequest.data.jobDescription, cvText);
    await logAiSession("cv_analysis", true);
    return NextResponse.json({ result, hasCv: !!cvText });
  } catch (error) {
    await logAiSession("cv_analysis", false);

    if (error instanceof Error && error.message === "ANTHROPIC_API_KEY_MISSING") {
      return NextResponse.json(
        {
          error:
            "AI analiz servisi şu anda yapılandırılmamış. Lütfen daha sonra tekrar deneyin.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Analiz sırasında bir hata oluştu, lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
