"use client";

import { motion } from "motion/react";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Career" title="Experience" />
      </Reveal>
      <ol className="relative space-y-10 pl-8">
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-white/10"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 0.15} className="relative">
            <motion.span
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.25, duration: 0.3, ease: "backOut" }}
            />
            <p className="text-sm font-medium text-foreground/60">
              {entry.start} — {entry.end}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">
              {entry.role} · {entry.company}
            </h3>
            <p className="text-sm text-foreground/50">{entry.location}</p>
            <ul className="mt-3 space-y-2 text-foreground/80">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="list-disc pl-1 marker:text-sky-400">
                  <span className="ml-2">{highlight}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
