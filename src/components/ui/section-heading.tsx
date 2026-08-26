import { cn } from "@/lib/utils";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-medium text-navy-deep sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-[16px] leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };
