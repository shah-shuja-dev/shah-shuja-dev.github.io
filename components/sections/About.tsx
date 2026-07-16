import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="About" title={profile.name} />
      <p className="text-lg leading-8 text-foreground/80">{profile.summary}</p>
    </section>
  );
}
