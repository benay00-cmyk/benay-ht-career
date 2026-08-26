import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { MentorshipForm } from "@/features/hr-map/components/mentorship-form";

export const metadata: Metadata = { title: "İK Mentörlüğü Talebi · Benay HR" };

export default function MentorlukPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            İK Mentörlüğü
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            Mentörlük Talep Et
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            Formu doldur, Benay talebini değerlendirsin ve seninle iletişime
            geçsin.
          </p>
        </Container>
      </div>

      <Container className="max-w-2xl py-14">
        <MentorshipForm />
      </Container>
    </div>
  );
}
