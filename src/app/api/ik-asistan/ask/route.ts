import { NextResponse } from "next/server";

import { askHrQuestion } from "@/lib/ai/anthropic";
import { hrQuestionSchema } from "@/lib/ai/schema";
import { checkRateLimit } from "@/lib/ai/rate-limit";
import { logAiSession } from "@/lib/ai/log-session";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  const { allowed } = checkRateLimit(`hr-question:${ip}`);

  if (!allowed) {
    return NextResponse.json(
      {
        error:
          "Günlük soru hakkınızı doldurdunuz. Lütfen daha sonra tekrar deneyin.",
      },
      { status: 429 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "İstek okunamadı, lütfen tekrar deneyin." },
      { status: 400 }
    );
  }

  const parsed = hrQuestionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Geçersiz istek." },
      { status: 400 }
    );
  }

  try {
    const answer = await askHrQuestion(parsed.data.question);
    await logAiSession("hr_question", true);
    return NextResponse.json({ answer });
  } catch (error) {
    await logAiSession("hr_question", false);

    if (error instanceof Error && error.message === "ANTHROPIC_API_KEY_MISSING") {
      return NextResponse.json(
        {
          error:
            "AI asistan şu anda yapılandırılmamış. Lütfen daha sonra tekrar deneyin.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Yanıt üretilirken bir hata oluştu, lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
