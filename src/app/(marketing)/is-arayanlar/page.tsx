import type { Metadata } from "next";
import {
  Map,
  FileEdit,
  Link2,
  MessagesSquare,
  GraduationCap,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { ModuleTile } from "@/components/marketing/module-tile";
import { AiAssistantTeaser } from "@/components/marketing/ai-assistant-teaser";

export const metadata: Metadata = { title: "İş Arayanlar · Benay HR" };

const otherModules = [
  {
    icon: Map,
    title: "Kariyer Yol Haritası",
    description: "Bulunduğun noktadan hedefine giden somut adımlar.",
  },
  {
    icon: FileEdit,
    title: "CV Hazırlama",
    description: "Sıfırdan profesyonel CV oluşturma desteği.",
  },
  {
    icon: Link2,
    title: "LinkedIn Optimizasyonu",
    description: "Profilinin doğru kişiler tarafından bulunmasını sağla.",
  },
  {
    icon: MessagesSquare,
    title: "İş Arama Teknikleri",
    description: "Doğru kanallardan doğru pozisyonlara ulaşma stratejileri.",
  },
  {
    icon: MessagesSquare,
    title: "İletişim Teknikleri",
    description: "Başvuru sürecinde etkili yazışma ve görüşme becerileri.",
  },
  {
    icon: GraduationCap,
    title: "Eğitimler",
    description: "Kariyer gelişimine yönelik uygulamalı eğitimler.",
    href: "/egitimler",
  },
];

export default function IsArayanlarPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-20">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            İş Arayanlar
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-navy-deep sm:text-5xl">
            Kariyerini Şansa Bırakma.
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
            CV&apos;den mülakata, LinkedIn&apos;den kariyer yol haritasına —
            başvuru sürecinin her adımı için tek platform.
          </p>
        </Container>
      </div>

      <Container className="py-16">
        <h2 className="font-display text-2xl font-medium text-navy-deep">
          İhtiyacın Olan Her Şey
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherModules.map((m) => (
            <ModuleTile key={m.title} {...m} />
          ))}
        </div>
      </Container>

      <AiAssistantTeaser />
    </div>
  );
}
