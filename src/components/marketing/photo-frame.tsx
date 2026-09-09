import Image from "next/image";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

function PhotoFrame({
  label = "Fotoğraf",
  className,
  ratio = "aspect-[4/5]",
  src,
  style,
  reveal = false,
}: {
  label?: string;
  className?: string;
  ratio?: string;
  src?: string;
  style?: CSSProperties;
  reveal?: boolean;
}) {
  return (
    <div
      style={style}
      className={cn(
        "relative overflow-hidden rounded-(--radius-lg) border border-gold/25 bg-navy-deep",
        ratio,
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 28rem, 90vw"
          className={cn("object-cover", reveal && "animate-image-reveal")}
          priority
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export { PhotoFrame };
