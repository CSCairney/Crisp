import { describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { renderWithStore } from "../../../../../tests/helpers/render";
import Loader from ".";

describe("Loader Component", () => {
    test("should render Circular", () => {
        renderWithStore(
        <BrowserRouter>
            <Loader />
        </BrowserRouter>
        );
    });
    test("should render Bar", () => {
        renderWithStore(
        <BrowserRouter>
            <Loader type="Bar" />
        </BrowserRouter>
        );
    });
    });