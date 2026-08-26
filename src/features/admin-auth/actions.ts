"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { createClient } from "@/lib/supabase/server";

const loginSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  password: z.string().min(1, "Şifre gerekli."),
});

export type LoginValues = z.infer<typeof loginSchema>;
export type ActionResult = { error?: string };

export async function loginAction(values: LoginValues): Promise<ActionResult> {
  const parsed = loginSchema.safeParse(values);

  if (!parsed.success) {
    return { error: "Girdiğiniz bilgileri kontrol edin." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error || !data.user) {
    return { error: "E-posta veya şifre hatalı." };
  }

  if (data.user.email !== process.env.ADMIN_EMAIL) {
    await supabase.auth.signOut();
    return { error: "Bu hesabın admin paneline erişim yetkisi yok." };
  }

  return {};
}

export async function logoutAction(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
