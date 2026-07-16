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
          <h1 className="pixel-text-shadow font-display text-xl uppercase leading-relaxed text-[#e52521] sm:text-3xl md:text-4xl">
            {profile.name}
          </h1>
          <p className="pixel-text-shadow mt-8 font-display text-[10px] uppercase leading-loose text-yellow-300 sm:text-sm">
            {profile.title}
          </p>
          <p className="mt-16 animate-pulse text-xs uppercase tracking-[0.3em] text-foreground/40">
            Scroll
          </p>
        </motion.div>
      </div>
    </section>
  );
}
