import type { Metadata } from "next";
import { Library, Map, Users2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ModuleTile } from "@/components/marketing/module-tile";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { RotatingGlobe } from "@/components/marketing/rotating-globe";
import { HrAssistantWidget } from "@/features/hr-assistant/components/hr-assistant-widget";
import { HrCareerSupport } from "@/components/marketing/hr-career-support";

export const metadata: Metadata = {
  title: "İK Profesyonelleri · Benay HR",
  description:
    "İK uzmanları ve İK alanına girmek isteyenler için prompt kütüphanesi, kariyer yol haritası ve yapay zekâ destekli asistan.",
};

const modules = [
  {
    icon: Library,
    title: "Prompt Kütüphanesi",
    description: "11 kategoride, kopyala-yapıştır kullanılabilecek İK promptları.",
    href: "/egitimler#ik-da-yapay-zeka",
    accent: "gold" as const,
  },
  {
    icon: Map,
    title: "İK Haritası",
    description: "Kariyerinde neredesin? Seviyeni seç, yol haritanı gör.",
    href: "/egitimler#ik-kariyer-yol-haritasi",
    accent: "green" as const,
  },
  {
    icon: Users2,
    title: "İK Mentörlüğü",
    description: "Bire bir kariyer ve yetkinlik mentörlüğü talep et.",
    href: "/egitimler#ik-mentorlugu-programi",
    accent: "sage" as const,
  },
];

export default function IkProfesyonelleriPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
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
          </ScrollReveal>
          <ScrollReveal direction="scale" delay={80} className="hidden justify-self-center lg:flex">
            <RotatingGlobe className="size-56" />
          </ScrollReveal>
        </Container>
      </div>

      <Container className="py-16">
        <ScrollReveal>
          <HrAssistantWidget />
        </ScrollReveal>

        <HorizontalCarousel className="mt-6">
          {modules.map((m) => (
            <ModuleTile key={m.title} {...m} />
          ))}
        </HorizontalCarousel>
      </Container>

      <HrCareerSupport />
    </div>
  );
}
