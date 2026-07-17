import { Hero } from "@/components/hero/Hero";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { About } from "@/components/sections/About";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
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
        <div className="relative">
          <AmbientBackground />
          <About />
          <WhatIDo />
          <WhyHireMe />
          <SkillsMatrix />
          <ExperienceTimeline />
          <ProjectsShowcase />
          <EducationCerts />
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
