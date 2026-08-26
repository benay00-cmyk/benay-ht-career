import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { AnalyzerForm } from "@/features/ai-assistant/components/analyzer-form";

export const metadata: Metadata = { title: "Kariyer Asistanı · Benay HR" };

export default function AiAsistanPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            Kariyer Asistanı
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            İlanı yapıştır, istersen CV&apos;ni ekle, sonucu gör.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            Şirket araştırması, ATS uyumluluk skoru, güçlü/eksik yönler, CV
            önerileri, STAR hikayeleri ve mülakat soruları — birkaç saniyede.
          </p>
        </Container>
      </div>

      <Container className="max-w-2xl py-14">
        <AnalyzerForm />
      </Container>
    </div>
  );
}
