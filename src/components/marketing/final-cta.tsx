import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MagneticLink } from "@/components/ui/magnetic-link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24">
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute top-1/2 left-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 bg-gold/15 blur-3xl"
      />
      <ScrollReveal>
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-medium text-surface sm:text-4xl">
            Kariyerinde bir sonraki adımını şimdi bul.
          </h2>
          <p className="max-w-lg text-[15px] leading-relaxed text-surface/70">
            Emin değilsen önce ücretsiz kariyer testini yap. Belirli bir ilana
            başvuruyorsan doğrudan CV ve başvuru analizine geç. İstersen
            eğitimlerle kendin ilerle, istersen Benay ile birlikte çalış.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <MagneticLink
              href="/kariyer-testi"
              className={buttonVariants({ variant: "gold", size: "lg" })}
            >
              Ücretsiz Kariyer Testine Başla
            </MagneticLink>
            <Link
              href="/ai-asistan"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-surface hover:text-gold"
            >
              Başvurumu Analiz Et
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
