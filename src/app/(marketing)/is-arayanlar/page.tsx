import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Map,
  FileEdit,
  Link2,
  MessagesSquare,
  GraduationCap,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { ModuleTile } from "@/components/marketing/module-tile";

export const metadata: Metadata = { title: "İş Arayanlar · Benay HR" };

const aiCapabilities = [
  "Şirket Araştırması",
  "ATS Skoru",
  "CV-Şirket Uyumu",
  "STAR Hikayeleri",
  "Mülakat Soruları",
  "İşverene Sorulacak Sorular",
];

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
        {/* AI feature block */}
        <div className="rounded-(--radius-lg) border border-gold/30 bg-navy-deep p-9 sm:p-11">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
              <span className="flex size-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-2xl font-medium text-surface sm:text-3xl">
                Kariyer Asistanı: tek analizde beş çıktı
              </h2>
              <ul className="flex flex-wrap gap-2">
                {aiCapabilities.map((c) => (
                  <li
                    key={c}
                    className="rounded-(--radius-sm) border border-surface/15 px-3 py-1 text-[12.5px] text-surface/80"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/ai-asistan"
              className={buttonVariants({
                variant: "gold",
                size: "lg",
                className: "shrink-0",
              })}
            >
              CV&apos;ni Şimdi Analiz Et
            </Link>
          </div>
        </div>

        {/* Other modules */}
        <h2 className="mt-14 font-display text-2xl font-medium text-navy-deep">
          İhtiyacın Olan Her Şey
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherModules.map((m) => (
            <ModuleTile key={m.title} {...m} />
          ))}
        </div>
      </Container>
    </div>
  );
}
