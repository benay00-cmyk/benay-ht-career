import type { Metadata } from "next";
import { Clock, User } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Card, CardEyebrow, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedNotebook } from "@/components/marketing/animated-notebook";
import { LeadRequestForm } from "@/features/leads/components/lead-request-form";
import { courses, digitalProducts, type Course } from "@/features/courses/data/courses";
import { cn } from "@/lib/utils";

const categoryAccent: Record<string, { top: string; bg: string }> = {
  "İş Arama": { top: "before:bg-gold", bg: "bg-gradient-to-br from-gold-soft/80 to-bg" },
  CV: { top: "before:bg-beige", bg: "bg-gradient-to-br from-beige/60 to-bg" },
  Mülakat: { top: "before:bg-sage", bg: "bg-gradient-to-br from-mint/70 to-bg" },
  Kariyer: { top: "before:bg-gold-deep", bg: "bg-gradient-to-br from-gold-soft/60 to-bg" },
  İK: { top: "before:bg-navy-deep", bg: "bg-gradient-to-br from-sage/45 to-bg" },
  "Yapay Zeka + İK": { top: "before:bg-deep-navy", bg: "bg-gradient-to-br from-deep-navy/20 to-bg" },
};

const categorySlug: Record<Course["category"], string> = {
  "İş Arama": "is-arama",
  CV: "cv",
  Mülakat: "mulakat",
  Kariyer: "kariyer",
  İK: "ik",
  "Yapay Zeka + İK": "yapay-zeka-ik",
};

const categoryOrder: Course["category"][] = [
  "İş Arama",
  "CV",
  "Mülakat",
  "Kariyer",
  "İK",
  "Yapay Zeka + İK",
];

export const metadata: Metadata = {
  title: "Eğitimler · Benay HR",
  description:
    "CV, LinkedIn, mülakat, iş arama ve İK kariyeri üzerine kısa, uygulanabilir eğitimler ve dijital ürünler.",
};

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
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
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
        <div className="flex flex-col gap-16">
          {categoryOrder.map((category) => {
            const categoryCourses = courses.filter((c) => c.category === category);
            const categoryProducts = digitalProducts.filter((p) => p.category === category);
            if (categoryCourses.length === 0 && categoryProducts.length === 0) return null;

            return (
              <div key={category} id={categorySlug[category]} className="scroll-mt-24">
                <ScrollReveal>
                  <h2 className="font-display text-xl font-medium text-navy-deep">
                    {category}
                  </h2>
                </ScrollReveal>

                {categoryCourses.length > 0 && (
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {categoryCourses.map((c, i) => (
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
                )}

                {categoryProducts.length > 0 && (
                  <div className={cn("grid gap-4 sm:grid-cols-2", categoryCourses.length > 0 ? "mt-4" : "mt-5")}>
                    {categoryProducts.map((p) => (
                      <ScrollReveal key={p.id}>
                        <Card
                          interactive
                          className={cn(
                            "relative h-full overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-1.5",
                            categoryAccent[p.category]?.top,
                            categoryAccent[p.category]?.bg
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
                      </ScrollReveal>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

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
