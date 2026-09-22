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

export const metadata: Metadata = {
  title: "İş Arayanlar · Benay HR",
  description:
    "İş arama sadece ilan bulup başvurmak değildir. CV, LinkedIn, mülakat ve iş arama stratejisinin yanında sürecin psikolojik tarafını da ele alıyoruz.",
};

const otherModules = [
  {
    icon: FileEdit,
    title: "CV",
    description: "Sıfırdan profesyonel CV oluşturma desteği.",
    href: "/egitimler#ats-gecen-cv",
    accent: "gold" as const,
  },
  {
    icon: Link2,
    title: "LinkedIn",
    description: "Profilinin doğru kişiler tarafından bulunmasını sağla.",
    href: "/egitimler#linkedin-profil-optimizasyonu",
    accent: "green" as const,
  },
  {
    icon: MessagesSquare,
    title: "Mülakat",
    description: "Mülakatlara güvenle hazırlan, doğru soru ve yanıtları öğren.",
    href: "/egitimler#mulakat-hazirlik",
    accent: "sage" as const,
  },
  {
    icon: Search,
    title: "İş Arama",
    description: "Doğru kanallardan doğru pozisyonlara ulaşma stratejileri.",
    href: "/egitimler#etkili-is-arama",
    accent: "gold" as const,
  },
  {
    icon: Users2,
    title: "Mentörlük",
    description: "Bire bir kariyer ve yetkinlik mentörlüğü ile yol al.",
    href: "/egitimler#kariyer-mentorlugu",
    accent: "green" as const,
  },
  {
    icon: HeartHandshake,
    title: "Süreçte Yanında Olacak Bir Arkadaş",
    description: "Yalnız değilsin; sürecin her adımında birlikte ilerliyoruz.",
    href: "/danismanlik",
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
              <span className="mt-2 block">Kariyerini Şansa Bırakma.</span>
            </h1>
          </ScrollReveal>
        </Container>
      </div>

      <JobSearchSupport />

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
    </div>
  );
}
