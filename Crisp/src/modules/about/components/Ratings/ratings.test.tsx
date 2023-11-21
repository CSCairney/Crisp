import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Ratings from ".";
import { BrowserRouter } from "react-router-dom";

describe("Ratings Component", () => {
  test("should render one star", () => {
    // ARRANGE
    render(
    <BrowserRouter>
      <Ratings rating={1} />
    </BrowserRouter>
    );
    const rating = screen.getByLabelText("review star: 1");
    // ASSERT
    expect(rating).toBeInTheDocument();
  });
  test("should render five stars", () => {
    // ARRANGE
    render(
    <BrowserRouter>
      <Ratings rating={5} />
    </BrowserRouter>
    );
    const rating = screen.getByLabelText("review star: 5");
    // ASSERT
    expect(rating).toBeInTheDocument();
  });
});
