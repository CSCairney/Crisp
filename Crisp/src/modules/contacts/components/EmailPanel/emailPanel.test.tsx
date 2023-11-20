import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EmailPanel from ".";

describe("EmailPanel Component", () => {
  test("should render", () => {
    // Arrange
    render(
      <BrowserRouter>
        <EmailPanel />
      </BrowserRouter>
    );
    // Act
    const picture = screen.getByRole("img", {
      name: /developer picture/i,
    });
    const heading = screen.getByRole("heading", {
      name: /give feedback/i,
    });
    const feedbackForumUsername = screen.getByPlaceholderText(/username/i);
    const feedbackForumEmail = screen.getByPlaceholderText(/email/i);
    const feedbackForumFeedback = screen.getByPlaceholderText(/feedback/i);
    // Assert
    expect(picture).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(feedbackForumUsername).toBeInTheDocument();
    expect(feedbackForumEmail).toBeInTheDocument();
    expect(feedbackForumFeedback).toBeInTheDocument();
  });
});
