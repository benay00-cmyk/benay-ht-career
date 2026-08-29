import { Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Gürcan",
    role: "Satın Alma Departmanı",
    quote:
      "Asla olmaz diyordum, olmazı oldurdun abla. Hakkını helal et, Bursa'ya gelirsen artık evin var.",
  },
  {
    name: "Cenk",
    role: "Yönetici",
    quote:
      "15 yıllık tecrübeliyim ve yöneticiyim, sizinle konuşunca kendimi unuttuğumu anladım. Sağ olun, sayenizde yeni işime çok kısa bir zamanda ulaştım.",
  },
  {
    name: "Buse",
    role: "Arge Mühendisi",
    quote:
      "Benay Hanım, inanmıyorum, 2. mülakata davet edildim. İlk kez CV'm görüntülendi, onda da davet aldım. Çok teşekkür ederim.",
  },
  {
    name: "Ali",
    role: "Satış Müdürü",
    quote:
      "Ekibimi kaybetme korkum olmasa onlara bile sizi önereceğim. Bu nasıl bir iletişim Benay Hanım. Görüşmede söylediğiniz iki cümleyi söyledim, sözleşme önüme geldi. Başarılarınızın devamını dilerim.",
  },
  {
    name: "Asude",
    role: "İK Uzman Yardımcısı",
    quote:
      "Bir insan kaynakları çalışanı olarak söylüyorum ki başta tedirginliklerim vardı. Sonra sizinle çalışmak çok istedim. Şimdi sayenizde hayalimi yaşıyorum. Sadece İK mentörlüğü değil, yaşam koçluğu yaptınız. Bakış açım değişti. Emeklerinize sağlık.",
  },
  {
    name: "Neslişah",
    role: "Finans Uzmanı",
    quote:
      "Çok çok çok teşekkür ederim. 1,5 ay gibi kısa bir sürede yurtdışından teklif aldım. CV'mi tam 4 firma görüntüledi ve 2 mülakat daveti aldım. Harikasınız.",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-hairline bg-surface py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Sosyal Kanıt"
          title="Danışanlarımız ne diyor?"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-(--radius-lg) border border-hairline bg-bg p-7"
            >
              <Quote className="size-5 text-gold-deep/60" aria-hidden="true" />
              <p className="text-[14.5px] leading-relaxed text-ink-muted italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-2 flex items-center gap-3 border-t border-hairline pt-4">
                <span className="flex size-9 items-center justify-center rounded-full bg-hairline text-[11px] font-medium text-ink-muted">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-[13.5px] font-medium text-ink">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-ink-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
