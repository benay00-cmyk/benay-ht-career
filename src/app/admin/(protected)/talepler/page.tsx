import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { getLeads } from "@/features/leads/data/queries";
import { LEAD_TYPE_LABELS } from "@/lib/leads/schema";
import { LeadStatusSelect } from "@/features/leads/components/lead-status-select";

export const metadata: Metadata = { title: "Talepler · Benay HR" };

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <div className="py-10">
      <Container>
        <h1 className="font-display text-2xl font-medium text-navy-deep">
          Talepler
        </h1>
        <p className="mt-1 text-[14px] text-ink-muted">
          Danışmanlık, mentörlük, eğitim ve iletişim formlarından gelen tüm
          talepler.
        </p>

        {leads.length === 0 ? (
          <div className="mt-8 rounded-(--radius-lg) border border-dashed border-hairline bg-surface p-12 text-center text-[14px] text-ink-muted">
            Henüz talep yok.
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-(--radius-lg) border border-hairline bg-surface">
            <table className="w-full min-w-[720px] text-left text-[13.5px]">
              <thead>
                <tr className="border-b border-hairline text-[11px] tracking-wide text-ink-muted uppercase">
                  <th className="px-4 py-3 font-medium">Tarih</th>
                  <th className="px-4 py-3 font-medium">Tür</th>
                  <th className="px-4 py-3 font-medium">Ad / E-posta</th>
                  <th className="px-4 py-3 font-medium">Konu</th>
                  <th className="px-4 py-3 font-medium">Mesaj</th>
                  <th className="px-4 py-3 font-medium">Durum</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-hairline last:border-0">
                    <td className="px-4 py-3 whitespace-nowrap text-ink-muted">
                      {new Date(lead.created_at).toLocaleDateString("tr-TR")}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {LEAD_TYPE_LABELS[lead.type]}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-ink">{lead.name}</div>
                      <div className="text-[12.5px] text-ink-muted">{lead.email}</div>
                    </td>
                    <td className="px-4 py-3 max-w-[180px] truncate">{lead.context}</td>
                    <td className="px-4 py-3 max-w-[260px] truncate text-ink-muted">
                      {lead.message}
                    </td>
                    <td className="px-4 py-3">
                      <LeadStatusSelect leadId={lead.id} status={lead.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </div>
  );
}
