import { render, cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Hero } from "./Hero";
import { profile } from "@/content/profile";

afterEach(cleanup);

describe("Hero", () => {
  it("mounts and unmounts cleanly with a canvas present", () => {
    const { unmount, container } = render(<Hero />);
    expect(container.querySelector("canvas")).toBeInTheDocument();
    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /let's talk/i })).toHaveAttribute(
      "href",
      "#contact",
    );
    unmount();
  });
});
