"use client";

import { useRef, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      }}
      className={`group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(15rem circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(56, 189, 248, 0.09), transparent 65%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
