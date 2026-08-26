import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PromptLibrary } from "@/features/hr-assistant/components/prompt-library";

export const metadata: Metadata = { title: "Prompt Kütüphanesi · Benay HR" };

export default function PromptKutuphanesiPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            Prompt Kütüphanesi
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            İK işlerinde zaman kazandıran hazır promptlar
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            11 kategoride, kopyala-yapıştır kullanabileceğin uygulamaya
            dönük yapay zekâ promptları. Köşeli parantez içindeki alanları
            kendi durumuna göre doldur.
          </p>
        </Container>
      </div>

      <Container className="py-14">
        <PromptLibrary />
      </Container>
    </div>
  );
}
