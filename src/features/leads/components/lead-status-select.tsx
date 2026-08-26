"use client";

import * as React from "react";

import { updateLeadStatus } from "@/features/leads/actions";
import { LEAD_STATUS_OPTIONS } from "@/features/leads/constants";
import type { LeadStatus } from "@/types/database";

const STATUS_LABELS: Record<LeadStatus, string> = {
  yeni: "Yeni",
  iletisimde: "İletişimde",
  tamamlandi: "Tamamlandı",
  iptal: "İptal",
};

export function LeadStatusSelect({
  leadId,
  status,
}: {
  leadId: string;
  status: LeadStatus;
}) {
  const [value, setValue] = React.useState(status);
  const [pending, setPending] = React.useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as LeadStatus;
    setValue(next);
    setPending(true);
    await updateLeadStatus(leadId, next);
    setPending(false);
  }

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={pending}
      className="rounded-(--radius-sm) border border-hairline bg-surface px-2.5 py-1.5 text-[12.5px] text-ink outline-none focus-visible:border-gold-deep disabled:opacity-50"
    >
      {LEAD_STATUS_OPTIONS.map((s) => (
        <option key={s} value={s}>
          {STATUS_LABELS[s]}
        </option>
      ))}
    </select>
  );
}
