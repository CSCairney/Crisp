import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OurValues from ".";

describe("OurValues Component", () => {
  test("should render", () => {
    // ARRANGE
    render(
        <BrowserRouter>
            <OurValues />
        </BrowserRouter>
    );
    // ACT
    const ourValuesTitle = screen.getByText("Our Values");
    const ourValuesSlogan = screen.getByText("At the core of Crisp are values that guide our work:");
    // ASSERT
    expect(ourValuesTitle).toBeInTheDocument();
    expect(ourValuesSlogan).toBeInTheDocument();
  });
  test("should render Values Correctly", () => {
    // ARRANGE
    render(
        <BrowserRouter>
            <OurValues />
        </BrowserRouter>
    );
    // ACT
    const accessibility = screen.getByText("Accessibility");
    const integrity = screen.getByText("Integrity");
    const community = screen.getByText("Community");
    const innovation = screen.getByText("Innovation");
    // ASSERT
    expect(accessibility).toBeInTheDocument();
    expect(integrity).toBeInTheDocument();
    expect(community).toBeInTheDocument();
    expect(innovation).toBeInTheDocument();
  });
});
