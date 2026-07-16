import type { WhyHireMePoint } from "@/lib/types";

export const whyHireMeStatement =
  "Every full-stack team can wire an API key into a chatbot. Few can take that same model and serve it reliably to millions of real users under real load.";

export const whyHireMePoints: WhyHireMePoint[] = [
  {
    title: "Beyond the Demo",
    description:
      "I don't stop at \"it works on my machine.\" I've shipped ML pipelines running 24/7 on live factory floors with zero tolerance for downtime.",
  },
  {
    title: "Full-Stack + MLOps, One Person",
    description:
      "No hand-off between a data science team and the engineers who actually have to ship it. I do both, so nothing gets lost in translation.",
  },
  {
    title: "Built for Scale From Day One",
    description:
      "Triton Inference Server, industrial IoT protocols, high-availability architecture - not glue code that falls over past ten concurrent users.",
  },
];
