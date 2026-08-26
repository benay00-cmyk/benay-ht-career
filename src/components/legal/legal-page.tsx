import { Container } from "@/components/ui/container";

function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            Yasal
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-[13px] text-ink-muted">
            Son güncelleme: {updatedAt}
          </p>
        </Container>
      </div>

      <Container className="max-w-2xl py-14">
        <div className="flex flex-col gap-8">{children}</div>
      </Container>
    </div>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-medium text-navy-deep">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-[14.5px] leading-relaxed text-ink">
        {children}
      </div>
    </section>
  );
}

export { LegalPage, LegalSection };
