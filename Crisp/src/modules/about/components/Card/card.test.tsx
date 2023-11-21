import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from ".";
import { BrowserRouter } from "react-router-dom";

describe("Card Component", () => {
  test("should render", () => {
    // ARRANGE
    render(
    <BrowserRouter>
      <Card name="test" content="this is test" role="tester" rating={4} />
    </BrowserRouter>
    );

    screen.logTestingPlaygroundURL();
    const role = screen.getByRole('heading', {
        name: /tester/i
      });
    const content = screen.getByText(/this is test/i);
    const rating = screen.getByLabelText("review star: 4");
    // ASSERT
    expect(role).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });
});
