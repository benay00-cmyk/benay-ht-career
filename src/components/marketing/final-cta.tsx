import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-navy-deep py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl font-display text-3xl font-medium text-surface sm:text-4xl">
          Kariyerinde bir sonraki adımını şimdi bul.
        </h2>
        <p className="max-w-lg text-[15px] leading-relaxed text-surface/70">
          Önce ücretsiz kariyer testini yap, sonucunu gör. İstersen AI Kariyer
          Asistanı ile daha derine in, istersen eğitimlerle kendin ilerle,
          istersen Benay ile birlikte çalış.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/kariyer-testi"
            className={buttonVariants({ variant: "gold", size: "lg" })}
          >
            Ücretsiz Kariyer Testine Başla
          </Link>
          <Link
            href="/ai-asistan"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-surface hover:text-gold"
          >
            AI Kariyer Asistanı&apos;nı Keşfet
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
