import { Button } from "@/components/ui/button";
import { Card, CardEyebrow, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const swatches = [
  { name: "Deep Forest", cls: "bg-navy-deep", hex: "#0F3324", on: "light" as const },
  { name: "Midnight Forest", cls: "bg-navy-midnight", hex: "#154430", on: "light" as const },
  { name: "Royal Emerald", cls: "bg-navy", hex: "#1E6B46", on: "light" as const },
  { name: "Premium Gold", cls: "bg-gold", hex: "#B08D3E", on: "dark" as const },
  { name: "Soft Gold", cls: "bg-gold-soft", hex: "#ECDFB9", on: "dark" as const },
  { name: "Deep Gold", cls: "bg-gold-deep", hex: "#8A6C2A", on: "light" as const },
  { name: "Cream", cls: "bg-bg border border-hairline", hex: "#FAF5E9", on: "dark" as const },
  { name: "White", cls: "bg-surface border border-hairline", hex: "#FFFDF8", on: "dark" as const },
  { name: "Light Gray", cls: "bg-hairline", hex: "#E7DDC4", on: "dark" as const },
  { name: "Charcoal", cls: "bg-ink", hex: "#23261F", on: "light" as const },
];

export default function StyleGuidePage() {
  return (
    <main className="bg-bg pb-32">
      <div className="border-b border-hairline bg-navy-deep py-14">
        <Container>
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
            Faz 02 · Tasarım Sistemi
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-surface sm:text-5xl">
            Stil Rehberi
          </h1>
          <p className="mt-3 max-w-xl text-[15px] text-surface/70">
            Benay HR &amp; Career platformunun renk, tipografi ve bileşen dilinin
            canlı referansı — sonraki fazlar bu sistemin üzerine inşa edilecek.
          </p>
        </Container>
      </div>

      <Container className="mt-16 flex flex-col gap-20">
        {/* Colors */}
        <section>
          <SectionHeading
            eyebrow="01 — Renk Sistemi"
            title="Lacivert güveni, altın uzmanlığı taşır"
            description="Altın; yalnızca CTA, ikon, border ve vurgu noktalarında kontrollü kullanılır — asla zemin rengi olmaz."
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {swatches.map((s) => (
              <div key={s.name} className="flex flex-col gap-2">
                <div
                  className={`flex h-20 items-end rounded-(--radius-md) p-3 ${s.cls}`}
                >
                  <span
                    className={`font-mono text-[10px] tracking-wide ${
                      s.on === "dark" ? "text-navy-deep" : "text-surface"
                    }`}
                  >
                    {s.hex}
                  </span>
                </div>
                <span className="text-sm font-medium text-ink">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <SectionHeading
            eyebrow="02 — Tipografi"
            title="Editorial başlık, sade gövde"
            description="Fraunces başlıklarda otorite kurar; Public Sans gövde metninde okunabilirliği korur; IBM Plex Mono etiket ve verilerde kullanılır."
          />
          <div className="mt-8 flex flex-col gap-6 rounded-(--radius-lg) border border-hairline bg-surface p-8">
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                Display / H1 — Fraunces 44/1.1
              </span>
              <p className="font-display text-[44px] leading-[1.1] font-medium text-navy-deep">
                Kariyerinde Daha Güçlü Bir Pozisyon Al.
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                Display / H2 — Fraunces 30/1.2
              </span>
              <p className="font-display text-[30px] leading-[1.2] font-medium text-navy-deep">
                Sen hangi taraftasın?
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                Body — Public Sans 16/1.6
              </span>
              <p className="max-w-xl text-[16px] leading-relaxed text-ink">
                İş arayanlar ve İK profesyonelleri için kariyer danışmanlığı,
                yapay zekâ destekli araçlar, eğitimler ve gerçek İK deneyimi.
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                Eyebrow / Etiket — IBM Plex Mono 11, +0.16em
              </span>
              <p className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
                Kariyer Asistanı
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <SectionHeading
            eyebrow="03 — Butonlar"
            title="Tek birincil eylem, her zaman"
            description="Primary varsayılan eylemdir; gold yalnızca sayfanın en önemli tek CTA'sında kullanılır."
          />
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-(--radius-lg) border border-hairline bg-surface p-8">
            <Button variant="primary">Kariyerini Analiz Et</Button>
            <Button variant="gold">CV&apos;ni Şimdi Analiz Et</Button>
            <Button variant="outline">İK Dünyasına Gir</Button>
            <Button variant="ghost">Ön İzlemeyi Gör</Button>
            <Button variant="primary" size="sm">
              Talep Oluştur
            </Button>
            <Button variant="primary" size="lg">
              Eğitime Kayıt Ol
            </Button>
          </div>
        </section>

        {/* Cards */}
        <section>
          <SectionHeading
            eyebrow="04 — Kartlar"
            title="Sade yüzey, ince kenarlık"
            description="Öne çıkan kartlar ince bir altın kenarlıkla ayrışır — gölge her zaman düşük kontrastlı kalır."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Card>
              <CardEyebrow>İş Arıyorum</CardEyebrow>
              <CardTitle>CV analizi, ATS skoru, mülakat hazırlığı</CardTitle>
              <CardDescription>
                İlan-CV uyumu, eksik yetkinlikler ve şirket araştırması tek
                ekranda.
              </CardDescription>
            </Card>
            <Card featured>
              <CardEyebrow>İK Alanındayım</CardEyebrow>
              <CardTitle>İK Haritası ile kariyer yol haritanı çiz</CardTitle>
              <CardDescription>
                Seviyeni seç, eksik yetkinliklerini ve önerilen kaynakları
                gör.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* Section heading — center */}
        <section className="rounded-(--radius-lg) border border-hairline bg-surface py-16">
          <SectionHeading
            align="center"
            eyebrow="05 — Ortalanmış Başlık"
            title="CV'n hazır olabilir. Peki doğru pozisyona hazır mı?"
            description="Ana sayfa kapanış bölümü gibi tek-CTA'lı, yüksek dikkatli alanlarda kullanılır."
            className="mx-auto"
          />
        </section>
      </Container>
    </main>
  );
}
