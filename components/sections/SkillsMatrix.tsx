import { skillGroups } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function SkillsMatrix() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Toolbox" title="Technical Expertise" />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-400">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm text-foreground/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
