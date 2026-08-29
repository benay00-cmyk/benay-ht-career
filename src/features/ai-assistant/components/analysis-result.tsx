"use client";

import * as React from "react";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Building2,
  Users,
  BarChart3,
  Lightbulb,
  Star,
  HelpCircle,
  FileWarning,
} from "lucide-react";

import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { AnalysisResult as AnalysisResultType } from "@/lib/ai/schema";
import { ScoreBar } from "@/features/ai-assistant/components/score-bar";

const readinessConfig = {
  hazir: { label: "Başvuruya Hazır", icon: CheckCircle2, className: "text-emerald-600" },
  gelistirilmeli: { label: "Geliştirilmeli", icon: AlertTriangle, className: "text-amber-600" },
  hazir_degil: { label: "Henüz Hazır Değil", icon: XCircle, className: "text-rose-600" },
  cv_yok: { label: "Sadece İlan Analiz Edildi", icon: HelpCircle, className: "text-navy" },
} as const;

function TabGroup({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1 rounded-(--radius-sm) border border-hairline bg-bg p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={cn(
            "rounded-(--radius-sm) px-3.5 py-1.5 text-[13px] font-medium transition-colors",
            active === tab.id
              ? "bg-navy-deep text-surface"
              : "text-ink-muted hover:text-ink"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function EmptyNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-(--radius-sm) border border-dashed border-hairline bg-bg px-4 py-6 text-center text-[13.5px] text-ink-muted">
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[14px] leading-relaxed text-ink">
          <span className="mt-2 size-1 shrink-0 rounded-full bg-gold-deep" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function AnalysisResult({ result }: { result: AnalysisResultType }) {
  const [companyTab, setCompanyTab] = React.useState("analiz");

  const readiness = readinessConfig[result.applicationReadiness];
  const hasCv = result.applicationReadiness !== "cv_yok";

  return (
    <div className="flex flex-col gap-6">
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <readiness.icon className={`size-8 shrink-0 ${readiness.className}`} />
          <div>
            <p className="font-display text-lg font-medium text-navy-deep">
              {readiness.label}
            </p>
            <p className="text-[13.5px] text-ink-muted">{result.summary}</p>
          </div>
        </div>
      </Card>

      <div>
        <TabGroup
          active={companyTab}
          onChange={setCompanyTab}
          tabs={[
            { id: "analiz", label: "ATS & CV Skoru" },
            { id: "guclu-zayif", label: "Güçlü & Zayıf" },
            { id: "sirket", label: "Şirket" },
            { id: "mulakat", label: "Mülakat İpuçları" },
          ]}
        />

        <Card className="mt-4">
          {companyTab === "sirket" && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <Building2 className="size-4.5 text-gold-deep" />
                <CardTitle className="mt-0 text-base">Şirket Hakkında</CardTitle>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-[0.1em] text-ink-muted uppercase">Sektör</span>
                <p className="mt-1 text-[14px] text-ink">{result.companySector}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-[0.1em] text-ink-muted uppercase">Kültür</span>
                <p className="mt-1 text-[14px] text-ink">{result.companyCulture}</p>
              </div>
              <div>
                <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-ink-muted uppercase">
                  <FileWarning className="size-3.5" /> Kırmızı Bayraklar
                </span>
                {result.companyRedFlags.length > 0 ? (
                  <div className="mt-2">
                    <List items={result.companyRedFlags} />
                  </div>
                ) : (
                  <p className="mt-1 text-[13.5px] text-ink-muted">Dikkat çeken bir ifade bulunmadı.</p>
                )}
              </div>
            </div>
          )}

          {companyTab === "guclu-zayif" && (
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4.5 text-emerald-600" />
                  <CardTitle className="mt-0 text-base">Güçlü Yönler</CardTitle>
                </div>
                <div className="mt-3">
                  {hasCv ? <List items={result.strengths} /> : <EmptyNote>CV eklenmedi.</EmptyNote>}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <AlertTriangle className="size-4.5 text-amber-600" />
                  <CardTitle className="mt-0 text-base">Zayıf Yönler</CardTitle>
                </div>
                <div className="mt-3">
                  {hasCv ? <List items={result.gaps} /> : <EmptyNote>CV eklenmedi.</EmptyNote>}
                </div>
              </div>
            </div>
          )}

          {companyTab === "analiz" && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2.5">
                <BarChart3 className="size-4.5 text-gold-deep" />
                <CardTitle className="mt-0 text-base">İK Analizi &amp; ATS Skoru</CardTitle>
              </div>
              {hasCv ? (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <ScoreBar label="ATS Uyumluluğu" value={result.atsScore} />
                    <ScoreBar label="İşe Alınma Olasılığı" value={result.hiringLikelihood} />
                  </div>

                  {result.cvSentenceChanges.length > 0 && (
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.1em] text-ink-muted uppercase">
                        CV&apos;de Değiştirilmesi Gereken Cümleler
                      </span>
                      <div className="mt-3 flex flex-col gap-3">
                        {result.cvSentenceChanges.map((change, i) => (
                          <div key={i} className="rounded-(--radius-sm) border border-hairline bg-bg p-4">
                            <p className="text-[13px] text-rose-600 line-through decoration-1">
                              {change.original}
                            </p>
                            <p className="mt-1.5 text-[13.5px] text-emerald-700">{change.suggested}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {result.missingKeywords.length > 0 && (
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.1em] text-ink-muted uppercase">
                        Eksik Anahtar Kelimeler
                      </span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {result.missingKeywords.map((k) => (
                          <span
                            key={k}
                            className="rounded-(--radius-sm) border border-hairline bg-bg px-2.5 py-1 text-[12.5px] text-ink"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <EmptyNote>
                  ATS skoru ve işe alınma olasılığı için CV eklemen gerekir.
                </EmptyNote>
              )}
            </div>
          )}

          {companyTab === "mulakat" && (
            <div className="flex flex-col gap-7">
              <div>
                <div className="flex items-center gap-2.5">
                  <Lightbulb className="size-4.5 text-gold-deep" />
                  <CardTitle className="mt-0 text-base">Mülakat İpuçları</CardTitle>
                </div>
                <div className="mt-4">
                  <List items={result.interviewTips} />
                </div>
              </div>

              <div className="border-t border-hairline pt-6">
                <div className="flex items-center gap-2.5">
                  <Star className="size-4.5 text-gold-deep" />
                  <CardTitle className="mt-0 text-base">Örnek STAR Hikayeleri</CardTitle>
                </div>
                <div className="mt-4">
                  {hasCv && result.starStories.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      {result.starStories.map((story, i) => (
                        <div key={i} className="rounded-(--radius-sm) border border-hairline bg-bg p-4">
                          <div className="grid gap-2.5 sm:grid-cols-2">
                            <div>
                              <span className="font-mono text-[10px] text-gold-deep uppercase">Durum</span>
                              <p className="text-[13.5px] text-ink">{story.situation}</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-gold-deep uppercase">Görev</span>
                              <p className="text-[13.5px] text-ink">{story.task}</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-gold-deep uppercase">Eylem</span>
                              <p className="text-[13.5px] text-ink">{story.action}</p>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-gold-deep uppercase">Sonuç</span>
                              <p className="text-[13.5px] text-ink">{story.result}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <EmptyNote>STAR hikayeleri için CV eklemen gerekir.</EmptyNote>
                  )}
                </div>
              </div>

              <div className="border-t border-hairline pt-6">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="size-4.5 text-gold-deep" />
                  <CardTitle className="mt-0 text-base">Gelebilecek Örnek Sorular</CardTitle>
                </div>
                <div className="mt-3">
                  <List items={result.likelyQuestions} />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <Users className="size-4.5 text-gold-deep" />
                  <CardTitle className="mt-0 text-base">İşverene Sorabileceğin Sorular</CardTitle>
                </div>
                <div className="mt-3">
                  <List items={result.questionsToAskEmployer} />
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>

      <p className="rounded-(--radius-md) border border-hairline bg-surface px-5 py-4 text-[12.5px] leading-relaxed text-ink-muted">
        Bu skorlar tahmini bir uyumluluk analizidir; gerçek ATS sisteminin
        sonucunu garanti etmez. Şirket bilgileri güncel olmayabilir, başvuru
        öncesi doğrulayın. Yapay zeka çıktıları, insan değerlendirmesinin ve
        kendi kararınızın yerini almaz.
      </p>
    </div>
  );
}
