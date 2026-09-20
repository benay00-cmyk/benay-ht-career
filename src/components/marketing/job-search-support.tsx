"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { cn } from "@/lib/utils";

const innerVoices = [
  "CV'm neden geri dönüş almıyor?",
  "Acaba artık yeterince iyi değil miyim?",
];

const challenges = [
  {
    question: "Geri dönüş alamıyor musunuz?",
    answer:
      "Yüzlerce ilana başvurup birkaç geri dönüş almak, motivasyonu ciddi şekilde düşürebilir. CV'ni, başvurduğun pozisyonları ve başvuru stratejini birlikte değerlendirip daha bilinçli bir sistem kuruyoruz.",
  },
  {
    question: "Mülakatlara giriyor ama teklif alamıyor musunuz?",
    answer:
      "Mülakata çağrılmak önemli bir adım; ama sürekli olumsuz yanıt almak özgüveni sarsabilir. Gerçek mülakat senaryoları üzerinden kendini ifade etme biçimini birlikte güçlendiriyoruz.",
  },
  {
    question: "Ne istediğinizi bilmiyor musunuz?",
    answer:
      "“Her işe başvurayım” düşüncesi süreci daha da karmaşıklaştırır. Deneyimlerini ve beklentilerini netleştirip senin için daha anlamlı pozisyonları birlikte belirliyoruz.",
  },
  {
    question: "Uzun süredir arıyor ve motivasyonunuzu mu kaybediyorsunuz?",
    answer:
      "Uzayan bir iş arama süreci yorucu olabilir. Daha fazla başvuru yapmak yerine süreci yeniden yapılandırıp takip edebileceğin, sistemli bir yapı kuruyoruz.",
  },
  {
    question: "Kendinizi diğer adaylarla mı kıyaslıyorsunuz?",
    answer:
      "Başkalarının kariyerindeki ilerlemeyi izlemek zorlayıcı olabilir. Odağı, kontrol edemediğin sonuçlardan kontrol edebileceğin hazırlığına ve stratejine taşıyoruz.",
  },
];

const steps = [
  {
    n: "01",
    title: "Durumu Analiz Ediyoruz",
    description: "Nerede olduğunu, ne aradığını ve şimdiye kadar neler denediğini değerlendiriyoruz.",
  },
  {
    n: "02",
    title: "Sorunu Belirliyoruz",
    description: "CV, başvuru yöntemi, LinkedIn, mülakat veya kariyer yönünde nerede gelişim gerektiğini ortaya çıkarıyoruz.",
  },
  {
    n: "03",
    title: "Strateji Oluşturuyoruz",
    description: "Sana uygun pozisyonları, başvuru kanallarını ve iş arama yöntemini birlikte planlıyoruz.",
  },
  {
    n: "04",
    title: "Hazırlanıyoruz",
    description: "CV'ni, LinkedIn profilini ve mülakat performansını hedeflediğin kariyere göre güçlendiriyoruz.",
  },
  {
    n: "05",
    title: "Takip Ediyoruz",
    description: "“Başvur ve bekle” demiyoruz; neyin işe yaradığını birlikte görüp süreci güncelliyoruz.",
  },
];

function ChallengeRow({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-[16px] font-medium text-navy-deep">
          {question}
        </span>
        <Plus
          className={cn(
            "size-4.5 shrink-0 text-gold-deep transition-transform duration-(--motion-normal) ease-(--ease-out)",
            open && "rotate-45"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-(--motion-normal) ease-(--ease-out)"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-5 pr-8 text-[14.5px] leading-relaxed text-ink-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function JobSearchSupport() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <>
      <section className="border-b border-hairline bg-bg py-20">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Yalnız Değilsin"
              title="İş ararken yalnızca bir pozisyon aramıyoruz."
              description="Bekliyor, başvuruyor, görüşmelere giriyor, bazen reddediliyor ve çoğu zaman nedenini bile öğrenemiyoruz. Bir süre sonra bu süreç sadece kariyerini değil, özgüvenini ve motivasyonunu da etkileyebiliyor."
            />
          </ScrollReveal>

          <ScrollReveal delay={80} className="mt-6 flex flex-col gap-2 border-l-2 border-gold/40 pl-5">
            {innerVoices.map((v) => (
              <p key={v} className="font-display text-[15px] text-ink-muted italic">
                &ldquo;{v}&rdquo;
              </p>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
              Biz burada sadece CV hazırlamıyoruz. Önce nerede zorlandığını,
              hangi noktada tıkandığını ve iş arama sürecinde neyin değişmesi
              gerektiğini birlikte belirliyoruz — çünkü her problem aynı
              çözümü gerektirmez.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface py-20">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <SectionHeading
              align="center"
              eyebrow="Birlikte Aşıyoruz"
              title="İş Arama Sürecindeki Zorlukları Birlikte Aşıyoruz"
              className="mx-auto"
            />
          </ScrollReveal>

          <ScrollReveal delay={80} className="mt-10 border-t border-hairline">
            {challenges.map((c, i) => (
              <ChallengeRow
                key={c.question}
                question={c.question}
                answer={c.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-deep py-24">
        <div
          aria-hidden="true"
          className="animate-blob blob-shape pointer-events-none absolute top-1/2 left-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 bg-gold/15 blur-2xl"
        />
        <ScrollReveal>
          <Container className="relative max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium text-surface sm:text-4xl">
              İşsiz Olmak, Değersiz Olmak Değildir.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-surface/70">
              Bir pozisyona kabul edilmemek yeterli olmadığın anlamına gelmez.
              Bir mülakatın olumsuz sonuçlanması potansiyelini belirlemez. İş
              arama bir değerlendirme sürecidir; senin değerine verilmiş bir
              puan değildir. Biz bu süreçte neyi kontrol edebileceğimize
              odaklanıyoruz.
            </p>
          </Container>
        </ScrollReveal>
      </section>

      <section className="bg-bg py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading
              align="center"
              eyebrow="Süreç"
              title="Peki Nereden Başlıyoruz?"
              className="mx-auto"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 60}>
                <span className="font-display text-3xl font-bold text-gold/40">
                  {s.n}
                </span>
                <h3 className="mt-2 font-display text-[16px] font-medium text-navy-deep">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                  {s.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface py-20">
        <ScrollReveal>
          <Container className="flex flex-col items-center gap-5 text-center">
            <h2 className="max-w-xl font-display text-2xl font-medium text-navy-deep sm:text-3xl">
              İş Arama Sürecini Tek Başına Yönetmek Zorunda Değilsin.
            </h2>
            <p className="max-w-lg text-[15px] leading-relaxed text-ink-muted">
              Nerede zorlandığını bulalım, neyi değiştirebileceğimizi
              birlikte belirleyelim ve iş arama sürecini daha bilinçli bir
              sisteme dönüştürelim.
            </p>
            <MagneticLink
              href="/danismanlik"
              className={buttonVariants({ variant: "gold", size: "lg", className: "mt-2" })}
            >
              Benay ile Çalış
            </MagneticLink>
          </Container>
        </ScrollReveal>
      </section>
    </>
  );
}
