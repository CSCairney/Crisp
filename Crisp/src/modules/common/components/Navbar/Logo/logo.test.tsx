import { describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithStore } from "../../../../../../tests/helpers/render";
import Logo from ".";

describe("Logo Component", () => {
  // Arrange
  test("should render", () => {
    renderWithStore(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    const logo = screen.getByRole("img", {
      name: /crisp logo/i,
    });
    // Assert
    expect(logo).toBeInTheDocument();
  });
});
