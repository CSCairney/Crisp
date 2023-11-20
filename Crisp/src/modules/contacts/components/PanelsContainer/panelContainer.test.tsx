import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PanelContainer from ".";

describe("PanelsContainer Component", () => {
  test("should render", () => {
    // Arrange
    render(
      <BrowserRouter>
        <PanelContainer />
      </BrowserRouter>
    );
    // Act
    screen.logTestingPlaygroundURL();
    const developerName = screen.getByRole("heading", {
      name: /charles cairney/i,
    });
    const FeedbackTitle = screen.getByRole("heading", {
      name: /give feedback/i,
    });
    // Assert
    expect(developerName).toBeInTheDocument();
    expect(FeedbackTitle).toBeInTheDocument();
  });
});
