import type { Capability } from "@/lib/types";

export const capabilities: Capability[] = [
  {
    title: "Robotic Process Automation",
    description:
      "Automating repetitive operational workflows end-to-end, so a human isn't the bottleneck standing between a task and it being done.",
  },
  {
    title: "Pairing Models Together",
    description:
      "One model rarely does the whole job. I chain specialized models into a single working pipeline instead of forcing one model to do everything badly.",
  },
  {
    title: "Automating Complete Pipelines",
    description:
      "Data ingestion, training, inference, monitoring - wired into one pipeline that runs itself instead of a notebook someone has to babysit.",
  },
  {
    title: "Production-Scale AI Deployment",
    description:
      "Anyone can train a model in a notebook. I deploy it on Triton Inference Server and scale it to serve millions of requests in production, not a demo.",
    highlight: true,
  },
  {
    title: "Computer Vision for Industrial QA",
    description:
      "Real-time visual defect detection running on live factory floors with microsecond-level latency, not a research paper.",
  },
  {
    title: "GenAI & RAG Integration",
    description:
      "Wiring LLMs and retrieval pipelines into production apps in a way that's grounded, monitored, and actually reliable.",
  },
];
