import type { Metadata } from "next";
import { Clock, User } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Card, CardEyebrow, CardTitle } from "@/components/ui/card";
import { LeadRequestForm } from "@/features/leads/components/lead-request-form";
import { courses, digitalProducts } from "@/features/courses/data/courses";

export const metadata: Metadata = { title: "Eğitimler · Benay HR" };

const registrationOptions = [
  ...courses.map((c) => `Eğitim: ${c.title}`),
  ...digitalProducts.map((p) => `Ürün: ${p.title}`),
];

export default function EgitimlerPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            Eğitimler
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            Uygulanabilir, kısa, doğrudan sonuca odaklı
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            Ödeme entegrasyonu yakında eklenecek — şimdilik ön kayıt
            oluşturarak yerinizi ayırtabilirsiniz.
          </p>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {courses.map((c) => (
            <Card key={c.id} className="flex flex-col">
              <div className="flex items-center justify-between">
                <CardEyebrow>{c.category}</CardEyebrow>
                <span className="font-mono text-[13px] text-navy-deep">{c.price}</span>
              </div>
              <CardTitle>{c.title}</CardTitle>
              <p className="mt-2 text-[13.5px] text-ink-muted">{c.audience}</p>

              <ul className="mt-4 flex flex-col gap-2">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-[13px] text-ink">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold-deep" />
                    {o}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-4 border-t border-hairline pt-4 text-[12.5px] text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {c.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="size-3.5" /> {c.instructor}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            Dijital Ürünler
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {digitalProducts.map((p) => (
              <Card key={p.id}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[15px] font-medium text-navy-deep">
                    {p.title}
                  </h3>
                  <span className="shrink-0 font-mono text-[13px] text-navy-deep">
                    {p.price}
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  {p.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            Ön Kayıt / Talep Oluştur
          </h2>
          <p className="mt-2 max-w-lg text-[14px] text-ink-muted">
            İlgilendiğiniz eğitim ya da ürünü seçin, formu doldurun — ödeme
            adımı hazır olduğunda size ulaşılacak.
          </p>
          <div className="mt-6 max-w-xl">
            <LeadRequestForm
              type="egitim"
              contextOptions={registrationOptions}
              submitLabel="Ön Kayıt Oluştur"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
