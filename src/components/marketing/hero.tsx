import Link from "next/link";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { PhotoFrame } from "@/components/marketing/photo-frame";

export function Hero() {
  return (
    <section className="border-b border-hairline bg-bg py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            İK Danışmanlığı · Kariyer Koçluğu · Yapay Zeka Destekli Araçlar
          </span>
          <h1 className="max-w-xl font-display text-4xl leading-[1.1] font-medium text-navy-deep sm:text-5xl lg:text-[52px]">
            Kariyerinde Nerede Takıldığını Bul.
          </h1>
          <p className="max-w-lg text-[18px] font-medium text-navy-deep">
            Sonraki adımını öğren.
          </p>
          <p className="max-w-lg text-[17px] leading-relaxed text-ink-muted">
            İş arayanlar ve İK profesyonelleri için gerçek İK deneyimiyle
            güçlendirilmiş kariyer araçları, eğitimler ve danışmanlık.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/kariyer-testi"
              className={buttonVariants({ variant: "gold", size: "lg" })}
            >
              Ücretsiz Kariyer Testine Başla
            </Link>
            <Link
              href="/ai-asistan"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Başvurumu Analiz Et
            </Link>
          </div>
        </div>

        <PhotoFrame
          label="Benay Aktaş"
          className="mx-auto w-full max-w-sm"
          src="/images/benay-aktas.jpg"
        />
      </Container>
    </section>
  );
}
