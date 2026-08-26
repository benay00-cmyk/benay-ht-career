import Link from "next/link";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/is-arayanlar", label: "İş Arayanlar" },
      { href: "/ik-profesyonelleri", label: "İK Profesyonelleri" },
      { href: "/ai-asistan", label: "Kariyer Asistanı" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { href: "/blog", label: "Blog" },
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
            <span className="font-display text-lg font-medium text-surface">
              Benay <span className="text-gold">HR</span>
            </span>
            <p className="max-w-xs text-[14px] leading-relaxed text-surface/60">
              İK danışmanlığı, kariyer koçluğu ve yapay zekâ destekli kariyer
              araçları — tek bir uzmanlık platformunda.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="font-mono text-[11px] tracking-[0.14em] text-gold uppercase">
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
