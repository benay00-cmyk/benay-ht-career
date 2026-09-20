import type { Metadata } from "next";
import {
  FileEdit,
  Link2,
  MessagesSquare,
  Search,
  Users2,
  HeartHandshake,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { ModuleTile } from "@/components/marketing/module-tile";
import { AiAssistantTeaser } from "@/components/marketing/ai-assistant-teaser";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { JobSearchSupport } from "@/components/marketing/job-search-support";

export const metadata: Metadata = { title: "İş Arayanlar · Benay HR" };

const otherModules = [
  {
    icon: FileEdit,
    title: "CV",
    description: "Sıfırdan profesyonel CV oluşturma desteği.",
    href: "/egitimler",
    accent: "gold" as const,
  },
  {
    icon: Link2,
    title: "LinkedIn",
    description: "Profilinin doğru kişiler tarafından bulunmasını sağla.",
    href: "/egitimler",
    accent: "green" as const,
  },
  {
    icon: MessagesSquare,
    title: "Mülakat",
    description: "Mülakatlara güvenle hazırlan, doğru soru ve yanıtları öğren.",
    href: "/egitimler",
    accent: "sage" as const,
  },
  {
    icon: Search,
    title: "İş Arama",
    description: "Doğru kanallardan doğru pozisyonlara ulaşma stratejileri.",
    href: "/egitimler",
    accent: "gold" as const,
  },
  {
    icon: Users2,
    title: "Mentörlük",
    description: "Bire bir kariyer ve yetkinlik mentörlüğü ile yol al.",
    href: "/egitimler",
    accent: "green" as const,
  },
  {
    icon: HeartHandshake,
    title: "Süreçte Yanında Olacak Bir Arkadaş",
    description: "Yalnız değilsin; sürecin her adımında birlikte ilerliyoruz.",
    href: "/egitimler",
    accent: "sage" as const,
  },
];

export default function IsArayanlarPage() {
  return (
    <div className="bg-bg">
      <AiAssistantTeaser />

      <div className="border-b border-hairline py-20">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
              İş Arayanlar
            </span>
            <h1 className="mt-3 font-display text-4xl font-medium text-navy-deep sm:text-5xl">
              <span className="block text-xl font-normal text-ink-muted sm:text-2xl">
                İş aramak, sadece ilanlara başvuru yapmak değil.
              </span>
              Kariyerini Şansa Bırakma.
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
              CV&apos;den mülakata, LinkedIn&apos;den kariyer yol haritasına —
              başvuru sürecinin her adımı için tek platform.
            </p>
          </ScrollReveal>
        </Container>
      </div>

      <Container className="py-16">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            İhtiyacın Olan Her Şey
          </h2>
        </ScrollReveal>
        <HorizontalCarousel className="mt-6">
          {otherModules.map((m) => (
            <ModuleTile key={m.title} {...m} />
          ))}
        </HorizontalCarousel>
      </Container>

      <JobSearchSupport />
    </div>
  );
}
