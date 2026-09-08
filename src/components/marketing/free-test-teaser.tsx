import Link from "next/link";
import { Target } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export function FreeTestTeaser() {
  return (
    <section className="border-y border-hairline bg-surface py-20">
      <Container className="flex flex-col items-center gap-5 text-center">
        <span className="flex size-12 items-center justify-center rounded-full border border-gold/30 bg-gold-soft/40 text-gold-deep">
          <Target className="size-5.5" aria-hidden="true" />
        </span>
        <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
          Ücretsiz Kariyer Testi
        </span>
        <h2 className="max-w-lg font-display text-3xl font-medium text-navy-deep">
          Önce problemini bul.
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-muted">
          Kariyerinde nerede takıldığını birkaç dakikada keşfet — CV&apos;ne
          bakmadan önce, doğru soruları sorarak.
        </p>
        <Link
          href="/kariyer-testi"
          className={buttonVariants({ variant: "gold", size: "lg", className: "mt-2" })}
        >
          Ücretsiz Teste Başla
        </Link>
      </Container>
    </section>
  );
}
