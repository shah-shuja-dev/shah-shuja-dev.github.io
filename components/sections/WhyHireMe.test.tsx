import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhyHireMe } from "./WhyHireMe";
import { whyHireMePoints, whyHireMeStatement } from "@/content/whyHireMe";

describe("WhyHireMe", () => {
  it("renders the statement and every point", () => {
    const { container } = render(<WhyHireMe />);
    // The statement is split into per-word spans for the reveal animation,
    // so match against the section's combined text instead of a single node.
    expect(container.textContent?.replace(/\s+/g, " ")).toContain(
      whyHireMeStatement,
    );
    for (const point of whyHireMePoints) {
      expect(screen.getByText(point.title)).toBeInTheDocument();
    }
  });
});
