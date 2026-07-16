import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function EducationCerts() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Background" title="Education & Certifications" />
      </Reveal>
      <ul className="space-y-4">
        {education.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.06}>
            <li className="flex flex-col justify-between gap-1 border-b border-white/10 pb-4 sm:flex-row sm:items-center">
              <div>
                <p className="font-medium text-foreground">{entry.title}</p>
                <p className="text-sm text-foreground/60">{entry.institution}</p>
              </div>
              <span className="text-sm text-sky-400">{entry.status}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
