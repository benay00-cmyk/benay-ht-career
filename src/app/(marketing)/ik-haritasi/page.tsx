import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { HrMapExplorer } from "@/features/hr-map/components/hr-map-explorer";

export const metadata: Metadata = { title: "İK Haritası · Benay HR" };

export default function IkHaritasiPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            İK Haritası
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            İK kariyerinde neredesin?
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            Seviyeni seç; bu seviyedeki rolleri, geliştirmen gereken
            yetkinlikleri ve önerilen kaynakları gör.
          </p>
        </Container>
      </div>

      <Container className="py-14">
        <HrMapExplorer />
      </Container>
    </div>
  );
}
