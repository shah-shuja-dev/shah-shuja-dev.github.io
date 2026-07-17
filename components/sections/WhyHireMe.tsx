"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { whyHireMePoints, whyHireMeStatement } from "@/content/whyHireMe";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyHireMe() {
  const words = whyHireMeStatement.split(" ");

  return (
    <section id="why-hire-me" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="The Difference" title="Why Hire Me" />
      </Reveal>
      <p className="relative pl-6 text-xl font-medium leading-snug text-foreground/90 sm:text-2xl">
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-0.5 origin-top bg-sky-400"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.35, ease: "easeOut" }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {whyHireMePoints.map((point, i) => (
          <Reveal key={point.title} delay={0.3 + i * 0.12}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-400">
              {point.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/70">{point.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
