"use client";

import { useRef } from "react";
import { motion, useTransform } from "motion/react";
import { profile } from "@/content/profile";
import { Starfield } from "./Starfield";
import { useScrollVelocity } from "./useScrollVelocity";

export function Hero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const { scrollYProgress, smoothVelocity } = useScrollVelocity(wrapperRef);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  return (
    <section ref={wrapperRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <Starfield speed={smoothVelocity} />
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-foreground/70 sm:text-xl">
            {profile.title}
          </p>
          <a
            href="#contact"
            className="mt-8 rounded-full border border-sky-400/40 bg-sky-400/10 px-6 py-2.5 text-sm font-medium text-sky-300 transition-colors hover:bg-sky-400/20"
          >
            Let&apos;s Talk
          </a>
          <p className="mt-16 animate-pulse text-xs uppercase tracking-[0.3em] text-foreground/40">
            Scroll
          </p>
        </motion.div>
      </div>
    </section>
  );
}
