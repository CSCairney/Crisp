import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  test("should render", () => {
    render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    );
  });
});
