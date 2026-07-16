import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { experience } from "@/content/experience";

describe("ExperienceTimeline", () => {
  it("renders every company", () => {
    render(<ExperienceTimeline />);
    for (const entry of experience) {
      expect(screen.getByText(new RegExp(entry.company))).toBeInTheDocument();
    }
  });
});
