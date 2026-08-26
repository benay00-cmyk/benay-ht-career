import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PhotoFrame } from "@/components/marketing/photo-frame";

const stats = [
  { value: "1000+", label: "CV İncelemesi" },
  { value: "400+", label: "Mülakat" },
];

export function AboutTeaser() {
  return (
    <section className="bg-bg py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <PhotoFrame
          label="Benay Aktaş"
          ratio="aspect-[4/5]"
          className="mx-auto w-full max-w-sm"
        />

        <div className="flex flex-col gap-5">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            Hakkımda
          </span>
          <h2 className="font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            Sadece CV hazırlayan bir danışman değil.
          </h2>
          <p className="max-w-lg text-[16px] leading-relaxed text-ink-muted">
            İK&apos;nın içinden gelen, işe alımdan eğitime, organizasyonel
            gelişimden yapay zekâ yönetimine gerçek saha deneyimini
            teknolojiyle birleştiren bir yaklaşım. Amaç; hem iş arayanlara
            hem İK profesyonellerine gerçek, uygulanabilir değer üretmek.
          </p>

          <div className="mt-2 grid grid-cols-2 gap-4 border-y border-hairline py-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-medium text-navy-deep">
                  {s.value}
                </p>
                <p className="mt-1 text-[12.5px] text-ink-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/hakkimda"
            className="inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-navy-deep hover:text-gold-deep"
          >
            Hikayemin Tamamı
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
