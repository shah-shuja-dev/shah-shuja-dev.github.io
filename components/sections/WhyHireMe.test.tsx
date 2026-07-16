import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhyHireMe } from "./WhyHireMe";
import { whyHireMePoints, whyHireMeStatement } from "@/content/whyHireMe";

describe("WhyHireMe", () => {
  it("renders the statement and every point", () => {
    render(<WhyHireMe />);
    expect(screen.getByText(whyHireMeStatement)).toBeInTheDocument();
    for (const point of whyHireMePoints) {
      expect(screen.getByText(point.title)).toBeInTheDocument();
    }
  });
});
