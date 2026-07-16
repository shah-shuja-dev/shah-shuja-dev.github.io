import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    company: "xis.ai",
    location: "Remote",
    role: "Technical Lead & MLOps Engineer",
    start: "Sep 2023",
    end: "Present",
    highlights: [
      "Built industrial-grade automated visual quality inspection applications, embedding fully automated ML pipelines into Flask web servers with React front-ends.",
      "Deployed and optimized Triton Inference Server to scale high-throughput vision models, achieving microsecond-level latency for real-time defect detection.",
      "Standardized factory data ingestion using MQTT and OPC UA protocols to stream live inference telemetry directly to enterprise ERP networks.",
      "Engineered multi-layered logging architectures and advanced IPC hangup handlers on Ubuntu environments to ensure 24/7 continuous operational uptime.",
    ],
  },
  {
    company: "ALITECH",
    location: "Jamshoro, Pakistan",
    role: "Development Lead",
    start: "Oct 2022",
    end: "Sep 2023",
    highlights: [
      "Led a hybrid engineering team to ship complex full-stack web applications, optimizing sprints to cut development timelines significantly.",
      "Enforced rigorous continuous integration and TDD (Jest) methodologies to drop post-release production regressions.",
    ],
  },
  {
    company: "Waqar Builders & Developers",
    location: "Hyderabad, Pakistan",
    role: "IT Support & Software Specialist",
    start: "Nov 2018",
    end: "Oct 2020",
    highlights: [
      "Developed a custom data-driven ranking/sorting algorithm to isolate high-value client leads and increase sales conversion rates.",
      "Maintained foundational branch technical networks and automated target campaigns that grew inbound user traffic by 66%.",
    ],
  },
];
