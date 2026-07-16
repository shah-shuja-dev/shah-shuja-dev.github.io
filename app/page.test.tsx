import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the name and title", () => {
    render(<Home />);
    expect(screen.getByText("Syed Shuja Hussain")).toBeInTheDocument();
    expect(
      screen.getByText("Senior Full-Stack & MLOps Engineer"),
    ).toBeInTheDocument();
  });
});
