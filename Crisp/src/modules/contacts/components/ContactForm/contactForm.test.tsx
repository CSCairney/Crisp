import { describe, test, vitest } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ContactForm from ".";

describe("ContactForm Component", () => {
  test("should render", () => {
    // Arrange
    render(
      <BrowserRouter>
        <ContactForm />
      </BrowserRouter>
    );
    const logSpy = vitest.spyOn(console, 'log');
    const usernameInput = screen.getByPlaceholderText("username");
    const emailInput = screen.getByPlaceholderText("email");
    const feedbackInput = screen.getByPlaceholderText("feedback");
    const submitButton = screen.getByRole('button', {name: /submit/i});

    // Act
    fireEvent.change(usernameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(feedbackInput, {
      target: { value: "This is a test feedback" },
    });
    fireEvent.click(submitButton);

    // Assert
    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(feedbackInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(logSpy).toHaveBeenCalled();
    logSpy.mockRestore();
  });
});
