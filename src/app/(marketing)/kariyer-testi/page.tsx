import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CareerTestFlow } from "@/features/career-test/components/career-test-flow";

export const metadata: Metadata = { title: "Ücretsiz Kariyer Testi · Benay HR" };

export default function KariyerTestiPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl text-center">
          <ScrollReveal className="flex flex-col items-center">
            <span className="rounded-full bg-mint px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-navy-deep uppercase">
              Ücretsiz Kariyer Testi
            </span>
            <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
              Önce problemini bul.
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              13 soru, 3 dakika. CV&apos;ne bakmadan önce, kariyerinde nerede
              takıldığını gerçek verilerinle keşfet.
            </p>
          </ScrollReveal>
        </Container>
      </div>

      <Container className="max-w-2xl py-14">
        <CareerTestFlow />
      </Container>
    </div>
  );
}
