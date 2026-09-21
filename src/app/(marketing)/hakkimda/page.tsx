import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PhotoFrame } from "@/components/marketing/photo-frame";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Benay Aktaş · Benay HR",
  description:
    "Bir zamanlar iş arayan taraftaydım, şimdi işe alım yapan tarafındayım. Benay Aktaş'ın kariyer yolculuğu ve yaklaşımı.",
};

const stats = [
  { value: "1000+", label: "CV İncelemesi" },
  { value: "400+", label: "Mülakat" },
];

const approach = [
  {
    title: "CV",
    text: "Yalnızca güzel görünmesi için değil, doğru mesajı vermesi için değerlendiriyorum.",
  },
  {
    title: "Mülakat",
    text: "Yalnızca soru-cevap çalışmak için değil, kendinizi doğru konumlandırmanız için hazırlanıyoruz.",
  },
  {
    title: "Kariyer Planı",
    text: "Yalnızca hedef belirlemek olarak değil, o hedefe nasıl ulaşacağınızı netleştirmek olarak ele alıyorum.",
  },
];

export default function HakkimdaPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <ScrollReveal direction="scale">
            <PhotoFrame
              label="Benay Aktaş"
              ratio="aspect-[4/5]"
              className="mx-auto w-full max-w-sm"
              src="/images/benay-aktas.jpg"
              reveal
            />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={80} className="flex flex-col gap-5">
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
              Hakkımda
            </span>
            <h1 className="font-display text-3xl font-medium text-navy-deep sm:text-4xl">
              Benay Aktaş
              <span className="block text-gold-deep">Kariyer &amp; İş Hayatı Danışmanı</span>
            </h1>
            <p className="max-w-lg text-[16px] leading-relaxed text-ink-muted">
              Bir zamanlar ben de uzun süre iş aradım. Bugün ise işe alım
              yapan tarafındayım. İki tarafı da yaşamış olmak, iş hayatına
              bambaşka bir yerden bakmamı sağladı.
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
          </ScrollReveal>
        </Container>
      </div>

      <Container className="max-w-2xl py-16">
        <div className="flex flex-col gap-6 text-[16px] leading-relaxed text-ink-muted">
          <p>
            Kariyer yolculuğum, İnsan Kaynakları alanına duyduğum merakla
            başladı. İktisat eğitimimin ardından İnsan Kaynakları alanında
            yüksek lisansımı tamamladım. Ancak bu yol benim için hiçbir zaman
            düz bir çizgi olmadı.
          </p>
          <p>
            Bu süreçte çok yanlış yaptım. Yanlış kararlar aldım, yanlış
            yöntemler denedim, bazı şeylerin olması için uzun süre bekledim.
            Ama her yanlışım bana neyi farklı yapmam gerektiğini öğretti. Her
            seferinde yeniden öğrendim, geliştim ve şimdi buradayım. Bugün
            bulunduğum noktaya, kusursuz ilerleyerek değil; yanlışlarımdan
            doğruyu çıkararak ulaştım.
          </p>
          <p>
            Profesyonel hayatım boyunca işe alım, bordro, eğitim ve gelişim,
            organizasyonel gelişim ve farklı İK süreçlerinde deneyim
            kazandım. Özellikle işe alım süreçlerinde adayları değerlendiren
            tarafta yer almak, iş hayatına farklı bir perspektiften bakmayı
            öğretti — CV&apos;nin arkasında ne aranır, bir mülakatta gerçekte ne
            değerlendirilir, bir aday neden ilerler ya da neden takılır.
          </p>
          <p className="font-medium text-ink">
            Bugün bu deneyimi Kariyer &amp; İş Hayatı Danışmanı olarak
            danışanlarıma aktarıyorum.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            Yaklaşımım
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            Teorik bilgiler veya herkes için geçerli genel kariyer tavsiyeleri
            vermek değil — kendi kariyerimde ve profesyonel hayatımda
            deneyimlediğim, işe alım süreçlerinde gözlemlediğim ve sonuç
            veren yöntemleri danışanlarıma uygulanabilir bir yol haritası
            olarak sunuyorum.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {approach.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 60}>
                <div className="rounded-(--radius-lg) border border-hairline bg-surface p-6 transition-[transform,box-shadow,border-color] duration-(--motion-normal) ease-(--ease-out) hover:-translate-y-2.5 hover:scale-[1.015] hover:border-gold/50 hover:shadow-[0_1px_2px_rgba(23,43,58,0.08),0_24px_48px_rgba(23,43,58,0.18)]">
                  <p className="font-sans text-[11px] font-bold tracking-[0.14em] text-gold-deep uppercase">
                    {a.title}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink">
                    {a.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 text-[16px] leading-relaxed text-ink-muted">
          <p>
            Çünkü biliyorum ki kariyer yolculuğunda bazen ne yapmanız
            gerektiğini değil, neyi yanlış yaptığınızı fark etmek asıl
            kırılma noktasıdır.
          </p>
          <p className="font-medium text-ink">
            Ben de bu yoldan geçtim. Şimdi edindiğim deneyimi, sizin daha az
            zaman kaybederek doğru yolu bulmanız için kullanıyorum.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/danismanlik" className={buttonVariants({ variant: "gold" })}>
            Danışmanlık Al
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/kariyer-testi" className={buttonVariants({ variant: "outline" })}>
            Ücretsiz Kariyer Check-Up
          </Link>
        </div>
      </Container>
    </div>
  );
}
