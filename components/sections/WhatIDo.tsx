import { capabilities } from "@/content/whatIDo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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
            <Card
              className={
                capability.highlight
                  ? "border-sky-400/40 bg-sky-400/[0.06]"
                  : undefined
              }
            >
              <span className="font-mono text-xs text-sky-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                {capability.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
