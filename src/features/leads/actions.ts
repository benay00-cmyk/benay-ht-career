"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/session";
import type { LeadStatus } from "@/types/database";

export async function updateLeadStatus(leadId: string, status: LeadStatus) {
  await requireAdmin();

  const supabase = await createClient();
  const { error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", leadId);

  if (error) {
    return { error: "Durum güncellenemedi." };
  }

  revalidatePath("/admin/talepler");
  revalidatePath("/admin");
  return {};
}
