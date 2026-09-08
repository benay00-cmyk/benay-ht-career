import type { Metadata } from "next";
import { FileWarning, Target, ShieldCheck, MessagesSquare, Compass } from "lucide-react";

import { Container } from "@/components/ui/container";
import { AnalyzerForm } from "@/features/ai-assistant/components/analyzer-form";

export const metadata: Metadata = { title: "AI Kariyer Asistanı · Benay HR" };

const scenarios = [
  { icon: FileWarning, text: "CV'm neden eleniyor?" },
  { icon: Target, text: "Bu ilana başvurmalı mıyım?" },
  { icon: ShieldCheck, text: "CV'm ATS'den geçer mi?" },
  { icon: MessagesSquare, text: "Mülakata nasıl hazırlanmalıyım?" },
  { icon: Compass, text: "Kariyerimde hangi yöne gitmeliyim?" },
];

export default function AiAsistanPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            AI Kariyer Asistanı
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            AI analiz eder. Sen karar verirsin.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            Şirket araştırması, ATS uyumluluk skoru, güçlü/eksik yönler, CV
            önerileri, STAR hikayeleri ve mülakat soruları — tek bir analizde.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {scenarios.map((s) => (
              <span
                key={s.text}
                className="flex items-center gap-2 rounded-(--radius-sm) border border-hairline bg-surface px-3.5 py-2 text-[13px] text-ink"
              >
                <s.icon className="size-3.5 shrink-0 text-gold-deep" aria-hidden="true" />
                {s.text}
              </span>
            ))}
          </div>
        </Container>
      </div>

      <Container className="max-w-2xl py-14">
        <AnalyzerForm />
      </Container>
    </div>
  );
}
