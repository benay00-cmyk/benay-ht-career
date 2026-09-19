import Link from "next/link";
import { Logo } from "@/components/marketing/logo";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/kariyer-testi", label: "Ücretsiz Kariyer Testi" },
      { href: "/is-arayanlar", label: "İş Arayanlar" },
      { href: "/ik-profesyonelleri", label: "İK Profesyonelleri" },
      { href: "/ai-asistan", label: "Başvurumu ve CV'mi AI ile Analiz Et" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { href: "/blog", label: "Kariyer Merkezi" },
      { href: "/egitimler", label: "Eğitimler" },
      { href: "/ik-haritasi", label: "İK Haritası" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { href: "/hakkimda", label: "Hakkımda" },
      { href: "/danismanlik", label: "Danışmanlık" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
];

const legalLinks = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/kvkk-aydinlatma-metni", label: "KVKK Aydınlatma Metni" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-navy-deep">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2.5 font-display text-lg font-medium text-surface">
              <Logo variant="onDark" className="size-8 shrink-0" />
              Benay <span className="text-gold">HR</span>
            </span>
            <p className="max-w-xs text-[14px] leading-relaxed text-surface/60">
              İşe alımın diğer tarafında geçirdiğim yıllardan öğrendiklerimi,
              bugün senin kariyerine aktarıyorum.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="font-sans text-[11px] font-bold tracking-[0.14em] text-gold uppercase">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-surface/70 transition-colors hover:text-surface"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-surface/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-surface/50">
            © {new Date().getFullYear()} Benay HR &amp; Career. Tüm hakları
            saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-surface/50 transition-colors hover:text-surface/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
