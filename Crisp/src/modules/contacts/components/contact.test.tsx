import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Contact from ".";

describe("PanelsContainer Component", () => {
  test("should render", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    // Act
    const background = screen.getByRole('img', {
        name: /contact us background/i
      });
    // Assert
    expect(background).toBeInTheDocument();
  });
});
