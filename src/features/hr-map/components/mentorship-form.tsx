"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { mentorshipLeadSchema, type MentorshipLeadValues } from "@/lib/leads/schema";
import { submitMentorshipLead } from "@/lib/leads/submit-lead";

const contactOptions: { value: MentorshipLeadValues["preferredContact"]; label: string }[] = [
  { value: "email", label: "E-posta" },
  { value: "telefon", label: "Telefon" },
  { value: "video-gorusme", label: "Video Görüşme" },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-[12.5px] text-rose-600">{message}</p>;
}

export function MentorshipForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Omit<MentorshipLeadValues, "type">>({
    resolver: zodResolver(mentorshipLeadSchema.omit({ type: true })),
    defaultValues: { preferredContact: "email" },
  });

  async function onSubmit(values: Omit<MentorshipLeadValues, "type">) {
    setServerError(null);
    const result = await submitMentorshipLead({ ...values, type: "mentorluk" });

    if (!result.success) {
      setServerError(result.error ?? "Bir hata oluştu.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="flex flex-col items-center gap-3 py-14 text-center">
        <CheckCircle2 className="size-9 text-emerald-600" />
        <h3 className="font-display text-xl font-medium text-navy-deep">
          Talebiniz Alındı
        </h3>
        <p className="max-w-sm text-[14px] text-ink-muted">
          Mentörlük talebiniz Benay&apos;a iletildi. En kısa sürede tercih
          ettiğiniz iletişim kanalından size dönüş yapılacak.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-[13.5px] font-medium text-ink">Ad Soyad</label>
            <input
              {...register("name")}
              className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
            />
            <FieldError message={errors.name?.message} />
          </div>
          <div>
            <label className="text-[13.5px] font-medium text-ink">E-posta</label>
            <input
              type="email"
              {...register("email")}
              className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
            />
            <FieldError message={errors.email?.message} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-[13.5px] font-medium text-ink">Mevcut Pozisyon</label>
            <input
              {...register("currentRole")}
              className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
            />
            <FieldError message={errors.currentRole?.message} />
          </div>
          <div>
            <label className="text-[13.5px] font-medium text-ink">Deneyim</label>
            <input
              placeholder="örn. 3 yıl"
              {...register("experience")}
              className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
            />
            <FieldError message={errors.experience?.message} />
          </div>
        </div>

        <div>
          <label className="text-[13.5px] font-medium text-ink">Hedef Pozisyon</label>
          <input
            {...register("targetRole")}
            className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
          />
          <FieldError message={errors.targetRole?.message} />
        </div>

        <div>
          <label className="text-[13.5px] font-medium text-ink">En Büyük Problemin</label>
          <Textarea rows={3} {...register("biggestChallenge")} className="mt-2" />
          <FieldError message={errors.biggestChallenge?.message} />
        </div>

        <div>
          <label className="text-[13.5px] font-medium text-ink">Beklentin</label>
          <Textarea rows={3} {...register("expectation")} className="mt-2" />
          <FieldError message={errors.expectation?.message} />
        </div>

        <div>
          <label className="text-[13.5px] font-medium text-ink">Görüşme Tercihi</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {contactOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-(--radius-sm) border border-hairline px-3.5 py-2 text-[13.5px] has-checked:border-gold-deep has-checked:bg-gold-soft/40"
              >
                <input type="radio" value={opt.value} {...register("preferredContact")} className="accent-gold-deep" />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {serverError && (
          <p role="alert" className="text-[13.5px] text-rose-600">
            {serverError}
          </p>
        )}

        <Button type="submit" variant="gold" size="lg" disabled={isSubmitting} className="w-fit">
          {isSubmitting && <Loader2 className="size-4 animate-spin" />}
          Talebi Gönder
        </Button>
      </form>
    </Card>
  );
}
