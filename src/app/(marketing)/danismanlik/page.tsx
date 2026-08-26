import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { LeadRequestForm } from "@/features/leads/components/lead-request-form";
import { consultingServices } from "@/features/consulting/data/services";

export const metadata: Metadata = { title: "Danışmanlık · Benay HR" };

const contextOptions = consultingServices.map((s) => s.title);

export default function DanismanlikPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            Danışmanlık
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            CV&apos;den kurumsal İK danışmanlığına
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            İhtiyacınıza en yakın hizmeti seçin, talebinizi oluşturun —
            Benay değerlendirip size dönüş yapsın.
          </p>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {consultingServices.map((s) => (
            <Card key={s.id}>
              <s.icon className="size-5 text-gold-deep" />
              <h3 className="mt-3 font-display text-lg font-medium text-navy-deep">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                {s.longDesc}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-xl">
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            Talep Oluştur
          </h2>
          <p className="mt-2 text-[14px] text-ink-muted">
            Hangi hizmetle ilgilendiğinizi seçin ve kısaca ihtiyacınızı
            anlatın.
          </p>
          <div className="mt-6">
            <LeadRequestForm type="danismanlik" contextOptions={contextOptions} />
          </div>
        </div>
      </Container>
    </div>
  );
}
