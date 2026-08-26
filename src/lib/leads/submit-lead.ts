"use server";

import { createClient } from "@/lib/supabase/server";
import type { GeneralLeadValues, MentorshipLeadValues } from "@/lib/leads/schema";
import { LEAD_TYPE_LABELS, generalLeadSchema, mentorshipLeadSchema } from "@/lib/leads/schema";
import type { LeadType } from "@/types/database";

export type LeadResult = { success: boolean; error?: string };

const CONTACT_LABELS: Record<MentorshipLeadValues["preferredContact"], string> = {
  email: "E-posta",
  telefon: "Telefon",
  "video-gorusme": "Video Görüşme",
};

function formatMentorshipEmail(data: MentorshipLeadValues) {
  return `Yeni mentörlük talebi:

Ad: ${data.name}
E-posta: ${data.email}
Mevcut Pozisyon: ${data.currentRole}
Deneyim: ${data.experience}
Hedef Pozisyon: ${data.targetRole}
En Büyük Problem: ${data.biggestChallenge}
Beklenti: ${data.expectation}
Tercih Edilen İletişim: ${CONTACT_LABELS[data.preferredContact]}`;
}

/**
 * RESEND_API_KEY ve LEAD_NOTIFICATION_EMAIL tanımlıysa Resend üzerinden
 * e-posta bildirimi gönderir. Tanımlı değilse yalnızca sunucu logunda
 * görünür kılar. Her iki durumda da talep ayrıca `leads` tablosuna
 * kalıcı olarak yazılır (bkz. insertLeadRow) — admin panelinden
 * görülebilir olması e-posta bildiriminden bağımsızdır.
 */
async function notifyLead(subject: string, body: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    console.warn(
      "[lead] RESEND_API_KEY / LEAD_NOTIFICATION_EMAIL tanımlı değil, yalnızca e-posta bildirimi atlandı:\n",
      body
    );
    return;
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Benay HR & Career <talep@benayhr.com>",
      to,
      subject,
      text: body,
    }),
  });
}

async function insertLeadRow(row: {
  type: LeadType;
  context: string;
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  extra?: Record<string, unknown> | null;
}) {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("leads").insert(row);
    if (error) {
      console.error("[lead] Supabase'e yazılamadı:", error.message);
    }
  } catch (err) {
    console.error("[lead] Supabase bağlantı hatası:", err);
  }
}

export async function submitMentorshipLead(
  values: MentorshipLeadValues
): Promise<LeadResult> {
  const parsed = mentorshipLeadSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Formu kontrol edip tekrar deneyin." };
  }

  const { data } = parsed;

  await insertLeadRow({
    type: "mentorluk",
    context: `Hedef: ${data.targetRole}`,
    name: data.name,
    email: data.email,
    message: `En Büyük Problem: ${data.biggestChallenge}\n\nBeklenti: ${data.expectation}`,
    extra: {
      currentRole: data.currentRole,
      experience: data.experience,
      targetRole: data.targetRole,
      preferredContact: data.preferredContact,
    },
  });

  try {
    await notifyLead(`Yeni Mentörlük Talebi — ${data.name}`, formatMentorshipEmail(data));
    return { success: true };
  } catch {
    return { success: true };
  }
}

function formatGeneralLeadEmail(data: GeneralLeadValues) {
  return `Yeni talep — ${LEAD_TYPE_LABELS[data.type]}:

İlgilenilen Konu: ${data.context}
Ad: ${data.name}
E-posta: ${data.email}
Telefon: ${data.phone || "belirtilmedi"}
Mesaj: ${data.message}`;
}

export async function submitGeneralLead(
  values: GeneralLeadValues
): Promise<LeadResult> {
  const parsed = generalLeadSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Formu kontrol edip tekrar deneyin.",
    };
  }

  const { data } = parsed;

  await insertLeadRow({
    type: data.type,
    context: data.context,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    message: data.message,
  });

  try {
    await notifyLead(
      `Yeni Talep — ${LEAD_TYPE_LABELS[data.type]} — ${data.name}`,
      formatGeneralLeadEmail(data)
    );
    return { success: true };
  } catch {
    return { success: true };
  }
}
