import { createClient } from "@/lib/supabase/server";
import type { AiSessionKind } from "@/types/database";

export async function logAiSession(kind: AiSessionKind, success: boolean) {
  try {
    const supabase = await createClient();
    await supabase.from("ai_sessions").insert({ kind, success });
  } catch (err) {
    console.error("[ai_sessions] loglanamadı:", err);
  }
}
