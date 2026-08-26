"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { generalLeadSchema, type GeneralLeadValues } from "@/lib/leads/schema";
import { submitGeneralLead } from "@/lib/leads/submit-lead";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-[12.5px] text-rose-600">{message}</p>;
}

export function LeadRequestForm({
  type,
  contextOptions,
  submitLabel = "Talebi Gönder",
}: {
  type: GeneralLeadValues["type"];
  contextOptions?: string[];
  submitLabel?: string;
}) {
  const [submitted, setSubmitted] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Omit<GeneralLeadValues, "type">>({
    resolver: zodResolver(generalLeadSchema.omit({ type: true })),
    defaultValues: { context: contextOptions?.[0] ?? "Genel Mesaj" },
  });

  async function onSubmit(values: Omit<GeneralLeadValues, "type">) {
    setServerError(null);
    const result = await submitGeneralLead({ ...values, type });

    if (!result.success) {
      setServerError(result.error ?? "Bir hata oluştu.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="flex flex-col items-center gap-3 py-12 text-center">
        <CheckCircle2 className="size-9 text-emerald-600" />
        <h3 className="font-display text-lg font-medium text-navy-deep">
          Talebiniz Alındı
        </h3>
        <p className="max-w-sm text-[13.5px] text-ink-muted">
          En kısa sürede size dönüş yapılacak.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
        {contextOptions ? (
          <div>
            <label className="text-[13.5px] font-medium text-ink">İlgilendiğiniz Konu</label>
            <select
              {...register("context")}
              className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
            >
              {contextOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <FieldError message={errors.context?.message} />
          </div>
        ) : (
          <input type="hidden" {...register("context")} />
        )}

        <div className="grid gap-4 sm:grid-cols-2">
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

        <div>
          <label className="text-[13.5px] font-medium text-ink">Telefon (opsiyonel)</label>
          <input
            {...register("phone")}
            className="mt-2 w-full rounded-(--radius-sm) border border-hairline bg-bg px-3.5 py-2.5 text-[14px] outline-none focus-visible:border-gold-deep"
          />
        </div>

        <div>
          <label className="text-[13.5px] font-medium text-ink">Mesajınız</label>
          <Textarea rows={4} {...register("message")} className="mt-2" />
          <FieldError message={errors.message?.message} />
        </div>

        {serverError && (
          <p role="alert" className="text-[13.5px] text-rose-600">
            {serverError}
          </p>
        )}

        <Button type="submit" variant="gold" disabled={isSubmitting} className="w-fit">
          {isSubmitting && <Loader2 className="size-4 animate-spin" />}
          {submitLabel}
        </Button>
      </form>
    </Card>
  );
}
