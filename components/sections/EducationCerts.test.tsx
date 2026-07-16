import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EducationCerts } from "./EducationCerts";
import { education } from "@/content/education";

describe("EducationCerts", () => {
  it("renders every entry", () => {
    render(<EducationCerts />);
    for (const entry of education) {
      expect(screen.getByText(entry.title)).toBeInTheDocument();
    }
  });
});
