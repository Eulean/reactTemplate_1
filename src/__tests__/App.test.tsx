import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { renderWithRouter } from "@/test-utils";

describe("App", () => {
  it("renders correctly", () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/My React Template/i)).toBeTruthy();
  });
});
