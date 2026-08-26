import type { Metadata } from "next";
import { Inbox, Sparkles, CircleCheck, Clock } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { getAiSessionStats, getLeadStats } from "@/features/leads/data/queries";
import { LEAD_TYPE_LABELS } from "@/lib/leads/schema";

export const metadata: Metadata = { title: "Admin Dashboard · Benay HR" };

export default async function AdminDashboardPage() {
  const [leadStats, aiStats] = await Promise.all([
    getLeadStats(),
    getAiSessionStats(),
  ]);

  const kpis = [
    { label: "Toplam Talep", value: leadStats.total, icon: Inbox },
    { label: "Yeni Talep", value: leadStats.byStatus.yeni ?? 0, icon: Clock },
    { label: "Tamamlanan", value: leadStats.byStatus.tamamlandi ?? 0, icon: CircleCheck },
    { label: "Yapay Zeka Analiz Sayısı", value: aiStats.total, icon: Sparkles },
  ];

  return (
    <div className="py-10">
      <Container>
        <h1 className="font-display text-2xl font-medium text-navy-deep">
          Dashboard
        </h1>
        <p className="mt-1 text-[14px] text-ink-muted">Genel platform görünümü.</p>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <Card key={kpi.label}>
              <div className="flex items-center justify-between">
                <p className="text-[13px] text-ink-muted">{kpi.label}</p>
                <kpi.icon className="size-4 text-gold-deep" />
              </div>
              <p className="mt-2 font-display text-2xl font-medium text-navy-deep">
                {kpi.value}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="font-display text-base font-medium text-navy-deep">
              Talep Türüne Göre Dağılım
            </h2>
            <div className="mt-4 flex flex-col gap-2.5">
              {Object.entries(leadStats.byType).length === 0 && (
                <p className="text-[13.5px] text-ink-muted">Henüz talep yok.</p>
              )}
              {Object.entries(leadStats.byType).map(([type, count]) => (
                <div
                  key={type}
                  className="flex items-center justify-between rounded-(--radius-sm) bg-bg px-3.5 py-2 text-[13.5px]"
                >
                  <span className="text-ink">
                    {LEAD_TYPE_LABELS[type as keyof typeof LEAD_TYPE_LABELS] ?? type}
                  </span>
                  <span className="font-mono text-navy-deep">{count}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="font-display text-base font-medium text-navy-deep">
              Yapay Zeka Kullanımı
            </h2>
            <div className="mt-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between rounded-(--radius-sm) bg-bg px-3.5 py-2 text-[13.5px]">
                <span className="text-ink">Başarılı Analiz</span>
                <span className="font-mono text-navy-deep">{aiStats.successCount}</span>
              </div>
              <div className="flex items-center justify-between rounded-(--radius-sm) bg-bg px-3.5 py-2 text-[13.5px]">
                <span className="text-ink">Hatalı Analiz</span>
                <span className="font-mono text-navy-deep">{aiStats.failedCount}</span>
              </div>
              <div className="flex items-center justify-between rounded-(--radius-sm) bg-bg px-3.5 py-2 text-[13.5px]">
                <span className="text-ink">CV Analizi</span>
                <span className="font-mono text-navy-deep">{aiStats.byKind.cv_analysis ?? 0}</span>
              </div>
              <div className="flex items-center justify-between rounded-(--radius-sm) bg-bg px-3.5 py-2 text-[13.5px]">
                <span className="text-ink">İK Sorusu</span>
                <span className="font-mono text-navy-deep">{aiStats.byKind.hr_question ?? 0}</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
