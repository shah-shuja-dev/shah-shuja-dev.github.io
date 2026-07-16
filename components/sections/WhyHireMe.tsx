import { whyHireMePoints, whyHireMeStatement } from "@/content/whyHireMe";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="The Difference" title="Why Hire Me" />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="border-l-2 border-sky-400 pl-6 text-xl font-medium leading-snug text-foreground/90 sm:text-2xl">
          {whyHireMeStatement}
        </p>
      </Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {whyHireMePoints.map((point, i) => (
          <Reveal key={point.title} delay={0.2 + i * 0.1}>
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
