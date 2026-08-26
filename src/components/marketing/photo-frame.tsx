import { cn } from "@/lib/utils";

/**
 * Benay'ın gerçek fotoğrafları eklendiğinde bu bileşenin içeriği
 * <Image src="..." /> ile değiştirilecek. Şimdilik marka diliyle
 * tutarlı bir yer tutucu render eder.
 */
function PhotoFrame({
  label = "Fotoğraf",
  className,
  ratio = "aspect-[4/5]",
}: {
  label?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-(--radius-lg) border border-gold/25 bg-navy-deep",
        ratio,
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 40%, rgba(176,141,62,0.5) 100%)",
        }}
      />
      <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.1em] text-gold/70 uppercase">
        {label}
      </span>
    </div>
  );
}

export { PhotoFrame };
