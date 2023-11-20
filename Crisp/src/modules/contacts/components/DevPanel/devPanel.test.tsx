import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DevPanel from ".";

describe("DevPanel Component", () => {
  test("should render", () => {
    // Arrange
    render(
      <BrowserRouter>
        <DevPanel />
      </BrowserRouter>
    );
    // Act
    const heading = screen.getByRole("heading", { name: /charles cairney/i });
    const paragraph = screen.getByText(
      /with two years in react and typescript/i
    );
    const linkedinButton = screen.getByRole("link", {
      name: /link to linkedin/i,
    });
    const picture = screen.getByRole("img", { name: /developer picture/i });
    // Assert
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(linkedinButton).toBeInTheDocument();
    expect(picture).toBeInTheDocument();
  });
});
