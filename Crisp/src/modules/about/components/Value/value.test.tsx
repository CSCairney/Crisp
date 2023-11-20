import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import Value from ".";

describe("Value Component", () => {
  test("should render", () => {
    render(<Value value="test" statement="test" />)
  });
});