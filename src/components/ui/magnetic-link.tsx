"use client";

import * as React from "react";
import Link, { type LinkProps } from "next/link";

type MagneticLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    strength?: number;
  };

export const MagneticLink = React.forwardRef<HTMLAnchorElement, MagneticLinkProps>(
  ({ strength = 26, className, style, children, ...props }, forwardedRef) => {
    const innerRef = React.useRef<HTMLAnchorElement>(null);

    function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
      const el = innerRef.current;
      if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    }

    function handleLeave() {
      if (innerRef.current) innerRef.current.style.transform = "";
    }

    return (
      <Link
        ref={(node) => {
          innerRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
        style={{ transitionProperty: "transform", transitionDuration: "150ms", ...style }}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
MagneticLink.displayName = "MagneticLink";
