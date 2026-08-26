import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { LeadRequestForm } from "@/features/leads/components/lead-request-form";

export const metadata: Metadata = { title: "İletişim · Benay HR" };

export default function IletisimPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            İletişim
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            Bize ulaşın
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            Sorunuz ya da işbirliği talebiniz için formu doldurun, en kısa
            sürede dönüş yapılacaktır.
          </p>
        </Container>
      </div>

      <Container className="max-w-xl py-14">
        <LeadRequestForm type="iletisim" submitLabel="Mesajı Gönder" />
      </Container>
    </div>
  );
}
