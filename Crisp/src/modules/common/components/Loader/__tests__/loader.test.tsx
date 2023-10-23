import { cleanup, screen } from "@testing-library/react";
import { renderWithStore } from "../../../../../../tests/helpers/render";

import Loader from "../index";

describe("Loader Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("Loader renders correctly with bar loader", () => {
    renderWithStore(<Loader type="Bar" />);
    const loaderBar = screen.getByLabelText("loading...");
    expect(loaderBar).toBeTruthy();
  });

  test("Loader renders correctly with circular loader", () => {
    renderWithStore(<Loader />);
    const loaderCircle = screen.getByLabelText("loading...");
    expect(loaderCircle).toBeTruthy();
  });
});
