import mammoth from "mammoth";

export async function extractDocxText(buffer: ArrayBuffer): Promise<string> {
  const { value } = await mammoth.extractRawText({
    buffer: Buffer.from(buffer),
  });
  return value.trim();
}
