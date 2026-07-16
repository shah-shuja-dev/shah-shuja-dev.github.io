import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "./About";
import { profile } from "@/content/profile";

describe("About", () => {
  it("renders the name and summary", () => {
    render(<About />);
    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
  });
});
