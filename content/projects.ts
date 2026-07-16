import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "be-focused",
    description:
      "An anti-procrastination app built with MLOps best practices in mind - state management for focus sessions with a production-style pipeline behind it.",
    stack: ["Python", "MLOps"],
    repoUrl: "https://github.com/shah-shuja-dev/be-focused",
  },
  {
    title: "process-leak-detector",
    description:
      "A Rust tool for catching process/resource leaks - systems-level work outside the usual web stack.",
    stack: ["Rust"],
    repoUrl: "https://github.com/shah-shuja-dev/process-leak-detector",
  },
  {
    title: "feedback-app",
    description:
      "A fully dynamic feedback platform - React, Redux Async Thunk on the front-end, Django and DRF on the back-end.",
    stack: ["React", "Redux", "Django", "DRF"],
    repoUrl: "https://github.com/shah-shuja-dev/feedback-app",
  },
  {
    title: "be-LMS",
    description: "A Learning Management System built on the MERN stack.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    repoUrl: "https://github.com/shah-shuja-dev/be-LMS",
  },
  {
    title: "Classical-Fest",
    description:
      "A site for a classical music event in Karachi, Pakistan - front-end design and layout work.",
    stack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/shah-shuja-dev/Classical-Fest",
  },
  {
    title: "Mind-Map",
    description: "An interactive mind-mapping web application.",
    stack: ["JavaScript", "React"],
    repoUrl: "https://github.com/shah-shuja-dev/Mind-Map",
  },
];
