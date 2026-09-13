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
        className="animate-blob blob-shape pointer-events-none absolute -top-40 -right-40 size-[680px] bg-gold/50 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob blob-shape pointer-events-none absolute top-1/3 -left-32 size-[480px] bg-sage/60 blur-2xl"
        style={{ animationDelay: "-7s" }}
      />
      <div
        aria-hidden="true"
        className="animate-blob blob-shape pointer-events-none absolute -bottom-32 right-1/4 size-[420px] bg-mint/70 blur-2xl"
        style={{ animationDelay: "-3s" }}
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

        <Parallax speed={0.1} className="relative mx-auto w-full max-w-sm">
          <PhotoFrame
            label="Benay Aktaş"
            className="animate-entrance"
            src="/images/benay-aktas.jpg"
            style={{ animationDelay: "100ms" }}
            reveal
          />
          <div
            className="animate-entrance animate-float absolute -bottom-6 -left-6 flex items-center gap-3 rounded-(--radius-lg) border border-hairline bg-surface px-5 py-3.5 shadow-(--shadow-card)"
            style={{ animationDelay: "500ms" }}
          >
            <span className="font-display text-2xl font-extrabold text-navy-deep">
              1000+
            </span>
            <span className="max-w-[6.5rem] text-[11px] leading-tight text-ink-muted">
              CV incelemesi yapıldı
            </span>
          </div>
        </Parallax>
      </Container>
    </section>
  );
}
