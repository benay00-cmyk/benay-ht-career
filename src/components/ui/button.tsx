import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-(--radius-sm) font-medium tracking-[0.01em] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-navy-deep text-surface border border-navy-deep hover:shadow-(--shadow-gold-glow) hover:border-gold-deep",
        gold: "bg-gold text-navy-deep border border-gold hover:bg-gold-deep hover:border-gold-deep",
        outline:
          "bg-transparent text-navy border border-navy/30 hover:border-navy hover:bg-navy/[0.03]",
        ghost:
          "bg-transparent text-navy border border-transparent hover:text-gold-deep underline decoration-transparent hover:decoration-gold-deep decoration-1 underline-offset-4",
      },
      size: {
        default: "h-11 px-6 text-[15px]",
        sm: "h-9 px-4 text-sm",
        lg: "h-[52px] px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
