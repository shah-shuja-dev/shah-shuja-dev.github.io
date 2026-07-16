import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectsShowcase } from "./ProjectsShowcase";
import { projects } from "@/content/projects";

describe("ProjectsShowcase", () => {
  it("renders every project with a working repo link", () => {
    render(<ProjectsShowcase />);
    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
    const links = screen.getAllByRole("link", { name: /view on github/i });
    expect(links).toHaveLength(projects.length);
    expect(links[0]).toHaveAttribute("href", projects[0].repoUrl);
  });
});
