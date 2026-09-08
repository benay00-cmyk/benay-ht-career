import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { CareerTestFlow } from "@/features/career-test/components/career-test-flow";

export const metadata: Metadata = { title: "Ücretsiz Kariyer Testi · Benay HR" };

export default function KariyerTestiPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl text-center">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            Ücretsiz Kariyer Testi
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            Önce problemini bul.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            13 soru, 3 dakika. CV&apos;ne bakmadan önce, kariyerinde nerede
            takıldığını gerçek verilerinle keşfet.
          </p>
        </Container>
      </div>

      <Container className="max-w-2xl py-14">
        <CareerTestFlow />
      </Container>
    </div>
  );
}
