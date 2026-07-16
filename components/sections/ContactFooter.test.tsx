import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactFooter } from "./ContactFooter";
import { profile } from "@/content/profile";

describe("ContactFooter", () => {
  it("links to email, GitHub, and LinkedIn", () => {
    render(<ContactFooter />);
    expect(screen.getByText(profile.email)).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      profile.github,
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      profile.linkedin,
    );
  });
});
