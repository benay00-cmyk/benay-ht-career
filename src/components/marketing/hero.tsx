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
        className="animate-blob blob-shape pointer-events-none absolute -top-32 -right-32 size-[560px] bg-gold-soft/60 blur-2xl"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <span
            className="animate-entrance font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase"
          >
            İK Danışmanlığı · Kariyer Koçluğu · Yapay Zeka Destekli Araçlar
          </span>
          <h1
            className="animate-entrance max-w-xl font-display text-4xl leading-[1.08] font-extrabold text-navy-deep sm:text-5xl lg:text-[56px]"
            style={{ animationDelay: "60ms" }}
          >
            Kariyerinde doğru adımı at.
          </h1>
          <p
            className="animate-entrance max-w-lg text-[17px] leading-relaxed text-ink-muted"
            style={{ animationDelay: "160ms" }}
          >
            İş arıyorsan problemini keşfet. Başvuruyorsan CV&apos;ni ve
            başvurunu güçlendir.
          </p>
          <div
            className="animate-entrance mt-2 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "220ms" }}
          >
            <div className="flex items-center gap-2">
              <MagneticLink
                href="/kariyer-testi"
                className={buttonVariants({ variant: "gold", size: "lg" })}
              >
                Kariyer Testini Çöz
              </MagneticLink>
              <span className="rounded-full bg-mint px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-navy-deep uppercase">
                Ücretsiz
              </span>
            </div>
            <Link
              href="/ai-asistan"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Başvurumu ve CV&apos;mi AI ile Analiz Et
            </Link>
          </div>
        </div>

        <Parallax speed={0.1} className="mx-auto w-full max-w-sm">
          <PhotoFrame
            label="Benay Aktaş"
            className="animate-entrance"
            src="/images/benay-aktas.jpg"
            style={{ animationDelay: "100ms" }}
            reveal
          />
        </Parallax>
      </Container>
    </section>
  );
}
