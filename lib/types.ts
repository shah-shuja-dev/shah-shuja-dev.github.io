export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
}

export interface EducationEntry {
  title: string;
  institution: string;
  status: string;
}

export interface Capability {
  title: string;
  description: string;
  highlight?: boolean;
}

export interface WhyHireMePoint {
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface WhyHireMePoint {
  title: string;
  description: string;
}
