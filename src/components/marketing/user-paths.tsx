import Link from "next/link";
import { ChevronDown, Compass, Target } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MagneticLink } from "@/components/ui/magnetic-link";

export function UserPaths() {
  return (
    <section className="bg-bg py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Nereden Başlamalı?"
            title="Emin değilsen, buradan başla."
            className="mx-auto"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-12 mx-auto max-w-xl">
          <div className="flex flex-col gap-5 rounded-(--radius-lg) border border-hairline bg-surface p-9 text-center transition-[transform,box-shadow] duration-(--motion-normal) ease-(--ease-out) hover:-translate-y-1 hover:shadow-(--shadow-card)">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-gold/30 bg-gold-soft/40 text-2xl">
              🧭
            </span>
            <div className="flex flex-col items-center gap-2">
              <span className="rounded-full bg-mint px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-navy-deep uppercase">
                Ücretsiz
              </span>
              <h3 className="font-display text-xl font-medium text-navy-deep">
                Henüz nerede gelişmem gerektiğinden emin değilim
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-ink-muted">
                Kariyerindeki güçlü ve gelişime açık alanları keşfet.
              </p>
            </div>
            <MagneticLink
              href="/kariyer-testi"
              className={buttonVariants({ variant: "gold", size: "lg", className: "mx-auto w-fit" })}
            >
              Kariyer Testini Çöz
            </MagneticLink>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="max-w-md text-[13.5px] leading-relaxed text-ink-muted">
            Belirli bir ilana başvuruyorsan{" "}
            <strong className="text-ink">doğrudan CV ve başvuru analizine geç.</strong>
          </p>
          <a
            href="#ai-analiz"
            aria-label="Başvurumu ve CV'mi AI ile Analiz Et bölümüne git"
            className="mt-1 flex size-9 items-center justify-center rounded-full border border-gold/30 text-gold-deep transition-colors duration-(--motion-fast) ease-(--ease-out) hover:bg-gold-soft/30"
          >
            <ChevronDown className="size-4 animate-bounce-down" aria-hidden="true" />
          </a>
        </ScrollReveal>

        <div className="mt-8 flex items-center gap-3 text-[13px]">
          <Compass className="size-3.5 text-gold-deep" aria-hidden="true" />
          <Link href="/is-arayanlar" className="text-navy-deep hover:text-gold-deep">
            İş Arayanlar İçin
          </Link>
          <span className="text-hairline">·</span>
          <Target className="size-3.5 text-gold-deep" aria-hidden="true" />
          <Link href="/ik-profesyonelleri" className="text-navy-deep hover:text-gold-deep">
            İK Profesyonelleri İçin
          </Link>
        </div>
      </Container>
    </section>
  );
}
