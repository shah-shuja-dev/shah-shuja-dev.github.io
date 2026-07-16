"use client";

import type { RefObject } from "react";
import { useScroll, useSpring, useVelocity } from "motion/react";

export function useScrollVelocity(target: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });
  const rawVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(rawVelocity, { damping: 40, stiffness: 300 });

  return { scrollYProgress, smoothVelocity };
}
