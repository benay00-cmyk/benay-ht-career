import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MentorshipForm } from "@/features/hr-map/components/mentorship-form";

export const metadata: Metadata = { title: "İK Mentörlüğü Talebi · Benay HR" };

export default function MentorlukPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
              İK Mentörlüğü
            </span>
            <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
              Mentörlük Talep Et
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Formu doldur, talebini değerlendirip seninle iletişime
              geçelim.
            </p>
          </ScrollReveal>
        </Container>
      </div>

      <ScrollReveal delay={80}>
        <Container className="max-w-2xl py-14">
          <MentorshipForm />
        </Container>
      </ScrollReveal>
    </div>
  );
}
