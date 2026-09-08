import Link from "next/link";
import { Compass, Target } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";

export function UserPaths() {
  return (
    <section className="bg-bg py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="İki Farklı İhtiyaç"
          title="Kariyerinde şu anda neye ihtiyacın var?"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-(--radius-lg) border border-hairline bg-surface p-9">
            <span className="flex size-12 items-center justify-center rounded-full border border-gold/30 bg-gold-soft/40 text-2xl">
              🧭
            </span>
            <div>
              <h3 className="font-display text-xl font-medium text-navy-deep">
                Henüz nerede gelişmem gerektiğinden emin değilim
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
                Kariyerindeki güçlü ve gelişime açık alanları keşfet.
              </p>
            </div>
            <Link
              href="/kariyer-testi"
              className={buttonVariants({ variant: "outline", size: "lg", className: "mt-auto w-fit" })}
            >
              Kariyer Testini Çöz
              <span className="text-[12px] font-normal text-gold-deep">— Ücretsiz</span>
            </Link>
          </div>

          <div className="flex flex-col gap-5 rounded-(--radius-lg) border border-gold/30 bg-navy-deep p-9">
            <span className="flex size-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
              🎯
            </span>
            <div>
              <h3 className="font-display text-xl font-medium text-surface">
                Belirli bir işe başvuruyorum
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-surface/70">
                CV&apos;ni ve başvuracağın iş ilanını işe alım perspektifiyle
                analiz et.
              </p>
            </div>
            <Link
              href="/ai-asistan"
              className={buttonVariants({ variant: "gold", size: "lg", className: "mt-auto w-fit" })}
            >
              Başvurumu Analiz Et
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-[13.5px] text-ink-muted">
          Emin değil misin? <strong className="text-ink">Önce Kariyer Testini çöz.</strong>{" "}
          Belirli bir ilana başvuruyorsan{" "}
          <strong className="text-ink">doğrudan CV ve başvuru analizine geç.</strong>
        </p>

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
