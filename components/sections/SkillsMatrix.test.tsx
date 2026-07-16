import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SkillsMatrix } from "./SkillsMatrix";
import { skillGroups } from "@/content/skills";

describe("SkillsMatrix", () => {
  it("renders every skill category", () => {
    render(<SkillsMatrix />);
    for (const group of skillGroups) {
      expect(screen.getByText(group.category)).toBeInTheDocument();
    }
  });
});
