import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhatIDo } from "./WhatIDo";
import { capabilities } from "@/content/whatIDo";

describe("WhatIDo", () => {
  it("renders every capability", () => {
    render(<WhatIDo />);
    for (const capability of capabilities) {
      expect(screen.getByText(capability.title)).toBeInTheDocument();
    }
  });
});
