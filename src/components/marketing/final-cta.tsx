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
        className="animate-blob blob-shape pointer-events-none absolute top-1/2 left-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 bg-gold/15 blur-2xl"
      />
      <ScrollReveal>
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-medium text-surface sm:text-4xl">
            Kendi başına ilerlemek istemiyorsan, birlikte çalışalım.
          </h2>
          <p className="max-w-lg text-[15px] leading-relaxed text-surface/70">
            CV danışmanlığından mülakat simülasyonuna, kurumsal İK
            danışmanlığından kariyer koçluğuna — ihtiyacına en yakın hizmeti
            seç, değerlendirip sana dönüş yapalım.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <MagneticLink
              href="/danismanlik"
              className={buttonVariants({ variant: "gold", size: "lg" })}
            >
              Benay ile Çalış
            </MagneticLink>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-surface hover:text-gold"
            >
              İletişime Geç
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
