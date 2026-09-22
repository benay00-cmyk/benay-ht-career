import { Container } from "@/components/ui/container";
import { PhotoFrame } from "@/components/marketing/photo-frame";
import { buttonVariants } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";

export function Hero() {
  return (
    <section className="border-b border-hairline bg-bg py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <h1
            className="animate-entrance max-w-xl font-display text-4xl leading-[1.1] font-extrabold text-navy-deep sm:text-5xl lg:text-[52px]"
          >
            İşe alım masasının diğer tarafından iş hayatına bak.
          </h1>
          <p
            className="animate-entrance max-w-lg text-[17px] leading-relaxed text-ink-muted"
            style={{ animationDelay: "80ms" }}
          >
            Bir işe hazırlanırken nerede zorlandığını gör.
          </p>
          <div
            className="animate-entrance mt-2 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "140ms" }}
          >
            <MagneticLink
              href="/kariyer-testi"
              className={buttonVariants({ variant: "gold", size: "lg" })}
            >
              Ücretsiz Kariyer Check-Up
            </MagneticLink>
            <MagneticLink
              href="/hakkimda"
              className={buttonVariants({ variant: "ghost", size: "lg" })}
            >
              Benay&apos;ı Tanı
            </MagneticLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <PhotoFrame
            label="Benay Aktaş"
            className="animate-entrance"
            src="/images/benay-aktas.jpg"
            style={{ animationDelay: "100ms" }}
            reveal
          />
          <div
            className="animate-entrance absolute -bottom-6 -left-6 flex items-center gap-3 rounded-(--radius-lg) border border-hairline bg-surface px-5 py-3.5 shadow-(--shadow-card)"
            style={{ animationDelay: "260ms" }}
          >
            <span className="font-display text-2xl font-extrabold text-navy-deep">
              1000+
            </span>
            <span className="max-w-[6.5rem] text-[11px] leading-tight text-ink-muted">
              CV incelemesi yapıldı
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
