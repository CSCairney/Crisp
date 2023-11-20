import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from ".";

describe("Title Component", () => {
  test("should render", () => {
    // ARRANGE
    render(
      <Title title="Testing" content="This is test content" alt="testing alt" />
    );
    // ACT
    const TitleText = screen.getByText("Testing");
    const ContentText = screen.getByText("This is test content");
    const AltText = screen.getByLabelText("testing alt");
    // ASSERT
    expect(TitleText).toBeInTheDocument();
    expect(ContentText).toBeInTheDocument();
    expect(AltText).toBeInTheDocument();
  });
});
