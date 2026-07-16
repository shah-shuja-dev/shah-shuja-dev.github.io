import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Career" title="Experience" />
      <ol className="space-y-10 border-l border-white/10 pl-8">
        {experience.map((entry) => (
          <li key={entry.company} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
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
          </li>
        ))}
      </ol>
    </section>
  );
}
