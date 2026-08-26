import { createClient } from "@/lib/supabase/server";

export async function getLeads() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getLeadStats() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("leads").select("type, status");

  if (error) throw error;

  const byType: Record<string, number> = {};
  const byStatus: Record<string, number> = {};

  for (const lead of data) {
    byType[lead.type] = (byType[lead.type] ?? 0) + 1;
    byStatus[lead.status] = (byStatus[lead.status] ?? 0) + 1;
  }

  return { total: data.length, byType, byStatus };
}

export async function getAiSessionStats() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("ai_sessions").select("kind, success");

  if (error) throw error;

  const total = data.length;
  const successCount = data.filter((s) => s.success).length;
  const byKind: Record<string, number> = {};

  for (const session of data) {
    byKind[session.kind] = (byKind[session.kind] ?? 0) + 1;
  }

  return { total, successCount, failedCount: total - successCount, byKind };
}
