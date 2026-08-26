import type { Metadata } from "next";
import { Library, Map, Users2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ModuleTile } from "@/components/marketing/module-tile";
import { HrAssistantWidget } from "@/features/hr-assistant/components/hr-assistant-widget";

export const metadata: Metadata = { title: "İK Profesyonelleri · Benay HR" };

const modules = [
  {
    icon: Library,
    title: "Prompt Kütüphanesi",
    description: "11 kategoride, kopyala-yapıştır kullanılabilecek İK promptları.",
    href: "/ik-profesyonelleri/prompt-kutuphanesi",
  },
  {
    icon: Map,
    title: "İK Haritası",
    description: "Kariyerinde neredesin? Seviyeni seç, yol haritanı gör.",
    href: "/ik-haritasi",
  },
  {
    icon: Users2,
    title: "İK Mentörlüğü",
    description: "Bire bir kariyer ve yetkinlik mentörlüğü talep et.",
    href: "/ik-haritasi",
  },
];

export default function IkProfesyonelleriPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-20">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            İK Profesyonelleri
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-navy-deep sm:text-5xl">
            İK&apos;yı Sadece Öğrenme. İşin İçinden Öğren.
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
            İK uzmanları, yöneticiler ve İK alanına girmek isteyenler için
            pratik kaynaklar, yapay zekâ destekli asistan ve kariyer yol
            haritası.
          </p>
        </Container>
      </div>

      <Container className="py-16">
        <HrAssistantWidget />

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {modules.map((m) => (
            <ModuleTile key={m.title} {...m} />
          ))}
        </div>
      </Container>
    </div>
  );
}
