import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { EducationCerts } from "@/components/sections/EducationCerts";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <SkillsMatrix />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <EducationCerts />
      </main>
      <ContactFooter />
    </>
  );
}
