import { capabilities } from "@/content/whatIDo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Capabilities" title="What I Do" />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {capabilities.map((capability, i) => (
          <Reveal
            key={capability.title}
            delay={i * 0.08}
            className={capability.highlight ? "sm:col-span-2" : undefined}
          >
            <SpotlightCard
              className={
                capability.highlight
                  ? "border-sky-400/40 bg-sky-400/[0.06]"
                  : undefined
              }
            >
              <span className="inline-block font-mono text-xs text-sky-400 transition-transform duration-300 group-hover:scale-125">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                {capability.description}
              </p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
