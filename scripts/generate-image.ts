/**
 * Usage:
 *   npm run generate-image -- --prompt="..." --name="hr-ai-hero" [--aspect-ratio=16:9] [--size=2K] [--format=png|webp]
 */
import { generateSiteImage } from "../src/lib/images/generate-image";

function parseArgs(argv: string[]) {
  const args: Record<string, string> = {};
  for (const arg of argv) {
    const match = arg.match(/^--([^=]+)=(.*)$/);
    if (match) args[match[1]] = match[2].replace(/^["']|["']$/g, "");
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.prompt || !args.name) {
    console.error(
      'Kullanım: npm run generate-image -- --prompt="..." --name="dosya-adi" [--aspect-ratio=16:9] [--size=2K] [--format=png|webp]'
    );
    process.exitCode = 1;
    return;
  }

  console.log(`Görsel üretiliyor: "${args.prompt}"`);

  try {
    const result = await generateSiteImage({
      prompt: args.prompt,
      name: args.name,
      aspectRatio: args["aspect-ratio"],
      imageSize: args.size,
      format: args.format === "webp" ? "webp" : "png",
    });

    console.log(`Görsel üretildi (${result.model})`);
    console.log(`Dosya: ${result.filePath}`);
    console.log(`Public path: ${result.publicPath}`);
  } catch (error) {
    console.error("Görsel üretilemedi:", error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}

main();
