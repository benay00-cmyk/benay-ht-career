import { createClient } from "@/lib/supabase/server";
import type { AiSessionKind } from "@/types/database";

export async function logAiSession(
  kind: AiSessionKind,
  success: boolean,
  metrics?: {
    hasCv?: boolean;
    atsScore?: number;
    applicationReadiness?: string;
  }
) {
  try {
    const supabase = await createClient();
    await supabase.from("ai_sessions").insert({
      kind,
      success,
      has_cv: metrics?.hasCv ?? null,
      ats_score: metrics?.atsScore ?? null,
      application_readiness: metrics?.applicationReadiness ?? null,
    });
  } catch (err) {
    console.error("[ai_sessions] loglanamadı:", err);
  }
}
