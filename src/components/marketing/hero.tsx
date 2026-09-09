import Link from "next/link";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { Parallax } from "@/components/ui/parallax";
import { PhotoFrame } from "@/components/marketing/photo-frame";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-bg py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -top-24 -right-24 size-[420px] bg-gold-soft/40 blur-3xl"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <span
            className="animate-entrance font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase"
          >
            İK Danışmanlığı · Kariyer Koçluğu · Yapay Zeka Destekli Araçlar
          </span>
          <h1
            className="animate-entrance max-w-xl font-display text-4xl leading-[1.1] font-medium text-navy-deep sm:text-5xl lg:text-[52px]"
            style={{ animationDelay: "60ms" }}
          >
            Kariyerinde Nerede Takıldığını Bul.
          </h1>
          <p
            className="animate-entrance max-w-lg text-[18px] font-medium text-navy-deep"
            style={{ animationDelay: "120ms" }}
          >
            Sonraki adımını öğren.
          </p>
          <p
            className="animate-entrance max-w-lg text-[17px] leading-relaxed text-ink-muted"
            style={{ animationDelay: "160ms" }}
          >
            İş arayanlar ve İK profesyonelleri için gerçek İK deneyimiyle
            güçlendirilmiş kariyer araçları, eğitimler ve danışmanlık.
          </p>
          <div
            className="animate-entrance mt-2 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "220ms" }}
          >
            <MagneticLink
              href="/kariyer-testi"
              className={buttonVariants({ variant: "gold", size: "lg" })}
            >
              Ücretsiz Kariyer Testine Başla
            </MagneticLink>
            <Link
              href="/ai-asistan"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Başvurumu Analiz Et
            </Link>
          </div>
        </div>

        <Parallax speed={0.06} className="mx-auto w-full max-w-sm">
          <PhotoFrame
            label="Benay Aktaş"
            className="animate-entrance"
            src="/images/benay-aktas.jpg"
            style={{ animationDelay: "100ms" }}
          />
        </Parallax>
      </Container>
    </section>
  );
}
