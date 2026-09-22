import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { LeadRequestForm } from "@/features/leads/components/lead-request-form";
import { ServiceJumpLink } from "@/features/consulting/components/service-jump-link";
import { consultingServices } from "@/features/consulting/data/services";
import { cn } from "@/lib/utils";

const accentStyle = {
  gold: { top: "before:bg-gold", bg: "bg-gradient-to-br from-gold-soft/80 to-bg", chip: "bg-gold text-navy-deep" },
  green: { top: "before:bg-navy-deep", bg: "bg-gradient-to-br from-sage/45 to-bg", chip: "bg-navy-deep text-surface" },
  sage: { top: "before:bg-sage", bg: "bg-gradient-to-br from-mint/70 to-bg", chip: "bg-sage text-navy-deep" },
};

export const metadata: Metadata = {
  title: "Danışmanlık · Benay HR",
  description:
    "CV danışmanlığından mülakat simülasyonuna, kariyer danışmanlığından kurumsal İK eğitimine — ihtiyacına en yakın hizmeti seç.",
};

const contextOptions = consultingServices.map((s) => s.title);
const hashToContext = Object.fromEntries(consultingServices.map((s) => [s.id, s.title]));

export default function DanismanlikPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
              Danışmanlık
            </span>
            <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
              CV&apos;den kurumsal İK danışmanlığına
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              İhtiyacınıza en yakın hizmeti seçin, talebinizi oluşturun —
              değerlendirip size dönüş yapalım.
            </p>
          </ScrollReveal>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {consultingServices.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 60}>
              <Card
                id={s.id}
                interactive
                className={cn(
                  "before:absolute before:inset-x-0 before:top-0 before:h-1.5 relative scroll-mt-24 h-full overflow-hidden",
                  accentStyle[s.accent].top,
                  accentStyle[s.accent].bg
                )}
              >
                <ServiceJumpLink id={s.id} label={s.title} />
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full",
                    accentStyle[s.accent].chip
                  )}
                >
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-display text-lg font-medium text-navy-deep">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                  {s.longDesc}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal id="talep-olustur" className="mt-16 max-w-xl scroll-mt-24">
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            Talep Oluştur
          </h2>
          <p className="mt-2 text-[14px] text-ink-muted">
            Hangi hizmetle ilgilendiğinizi seçin ve kısaca ihtiyacınızı
            anlatın.
          </p>
          <div className="mt-6">
            <LeadRequestForm
              type="danismanlik"
              contextOptions={contextOptions}
              hashToContext={hashToContext}
            />
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
