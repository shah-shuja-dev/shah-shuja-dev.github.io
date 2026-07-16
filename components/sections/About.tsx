import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="About" title={profile.name} />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg leading-8 text-foreground/80">{profile.summary}</p>
      </Reveal>
    </section>
  );
}
