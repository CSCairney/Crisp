import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import AboutHeader from ".";
import { BrowserRouter } from "react-router-dom";

describe("AboutHeader Component", () => {
  test("should render", () => {
    render(
    <BrowserRouter>
      <AboutHeader />
    </BrowserRouter>
    );
  });
});
