import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

const paths = [
  {
    href: "/is-arayanlar",
    eyebrow: "İş Arıyorum",
    title: "Kariyerimi geliştirmek istiyorum",
    items: [
      "CV analizi ve ATS skoru",
      "İlan–CV uyum kontrolü",
      "Mülakat hazırlığı",
      "LinkedIn optimizasyonu",
      "Kariyer danışmanlığı",
    ],
    cta: "İş Arayanlar İçin",
    featured: false,
  },
  {
    href: "/ik-profesyonelleri",
    eyebrow: "İK Alanındayım",
    title: "İK alanına girmek ya da uzmanlaşmak istiyorum",
    items: [
      "İK kaynakları ve yapay zeka promptları",
      "İK mentörlüğü",
      "Eğitimler",
      "Kariyer yol haritası",
      "İK'ya dair her şey",
    ],
    cta: "İK Profesyonelleri İçin",
    featured: true,
  },
];

export function UserPaths() {
  return (
    <section className="bg-bg py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="İki Yol"
          title="Sen hangi taraftasın?"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {paths.map((path) => (
            <Card
              key={path.href}
              featured={path.featured}
              className="flex flex-col p-9"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] text-gold-deep uppercase">
                {path.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium text-navy-deep">
                {path.title}
              </h3>
              <ul className="mt-6 flex flex-col gap-3">
                {path.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14.5px] text-ink"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-gold-deep"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={path.href}
                className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy-deep hover:text-gold-deep"
              >
                {path.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
