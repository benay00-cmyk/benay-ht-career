import type { Metadata } from "next";
import { Clock, User } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Card, CardEyebrow, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { AnimatedNotebook } from "@/components/marketing/animated-notebook";
import { LeadRequestForm } from "@/features/leads/components/lead-request-form";
import { courses, digitalProducts } from "@/features/courses/data/courses";
import { cn } from "@/lib/utils";

const categoryAccent: Record<string, { top: string; bg: string }> = {
  Kariyer: { top: "before:bg-gold", bg: "bg-gradient-to-br from-gold-soft/80 to-bg" },
  İK: { top: "before:bg-navy-deep", bg: "bg-gradient-to-br from-sage/45 to-bg" },
  "Yapay Zeka + İK": { top: "before:bg-deep-navy", bg: "bg-gradient-to-br from-deep-navy/20 to-bg" },
};

const productAccents = ["gold", "green", "sage"] as const;
const productAccentStyle = {
  gold: { top: "before:bg-gold", bg: "bg-gradient-to-br from-gold-soft/80 to-bg" },
  green: { top: "before:bg-navy-deep", bg: "bg-gradient-to-br from-sage/45 to-bg" },
  sage: { top: "before:bg-sage", bg: "bg-gradient-to-br from-mint/70 to-bg" },
};

export const metadata: Metadata = { title: "Eğitimler · Benay HR" };

const registrationOptions = [
  ...courses.map((c) => `Eğitim: ${c.title}`),
  ...digitalProducts.map((p) => `Ürün: ${p.title}`),
];

export default function EgitimlerPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
              Eğitimler
            </span>
            <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
              Uygulanabilir, kısa, doğrudan sonuca odaklı
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Ödeme entegrasyonu yakında eklenecek — şimdilik ön kayıt
              oluşturarak yerinizi ayırtabilirsiniz.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="scale" delay={80} className="hidden justify-self-center lg:flex">
            <AnimatedNotebook className="size-56" />
          </ScrollReveal>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {courses.map((c, i) => (
            <ScrollReveal key={c.id} delay={i * 60}>
              <Card
                interactive
                className={cn(
                  "relative flex h-full flex-col overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-1.5",
                  categoryAccent[c.category]?.top,
                  categoryAccent[c.category]?.bg
                )}
              >
                <div className="flex items-center justify-between">
                  <CardEyebrow>{c.category}</CardEyebrow>
                  <span className="rounded-full bg-gold-soft/50 px-3 py-1 font-mono text-[16px] font-semibold text-gold-deep">
                    {c.price}
                  </span>
                </div>
                <CardTitle>{c.title}</CardTitle>
                <p className="mt-2 text-[13.5px] text-ink-muted">{c.audience}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {c.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-[13px] text-ink">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold-deep" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-4 border-t border-hairline pt-4 text-[12.5px] text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {c.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="size-3.5" /> {c.instructor}
                  </span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16">
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            Dijital Ürünler
          </h2>
          <HorizontalCarousel className="mt-6">
            {digitalProducts.map((p, i) => {
              const accent = productAccentStyle[productAccents[i % productAccents.length]];
              return (
                <Card
                  key={p.id}
                  interactive
                  className={cn(
                    "relative h-full overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-1.5",
                    accent.top,
                    accent.bg
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[15px] font-medium text-navy-deep">
                      {p.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-gold-soft/50 px-3 py-1 font-mono text-[15px] font-semibold text-gold-deep">
                      {p.price}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                    {p.description}
                  </p>
                </Card>
              );
            })}
          </HorizontalCarousel>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            Ön Kayıt / Talep Oluştur
          </h2>
          <p className="mt-2 max-w-lg text-[14px] text-ink-muted">
            İlgilendiğiniz eğitim ya da ürünü seçin, formu doldurun — ödeme
            adımı hazır olduğunda size ulaşılacak.
          </p>
          <div className="mt-6 max-w-xl">
            <LeadRequestForm
              type="egitim"
              contextOptions={registrationOptions}
              submitLabel="Ön Kayıt Oluştur"
            />
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
