import { describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithStore } from "../../../../../../tests/helpers/render";
import UserArea from ".";
import { setUserState } from "../../../../login/store";
import { mockUserState } from "../mockData/mockUser";
import { act } from "react-dom/test-utils";

describe("Logo Component", () => {
  test("should render", () => {
    renderWithStore(
      <BrowserRouter>
        <UserArea />
      </BrowserRouter>
    );
  });
  test("should render login option when no access token is available", () => {
    // Arrange
    renderWithStore(
      <BrowserRouter>
        <UserArea />
      </BrowserRouter>
    );
    const loginLink = screen.getByRole('link', {
        name: /login/i
      });
    // Assert
    expect(loginLink).toBeInTheDocument();
  });
  test("should render User Details when access token is available and toggle open/closed", () => {
    // Arrange
    const { store } = renderWithStore(
      <BrowserRouter>
        <UserArea />
      </BrowserRouter>
    );
    // Act
    // Dispatch to fill empty userState
    act(() => {
    store.dispatch(setUserState(mockUserState));
    });
    const userAreaToggler = screen.getByRole('button', {
        name: /user area toggle/i
      });
    // Toggle user area
    fireEvent.mouseEnter(userAreaToggler);

    // User data that is shown once hovered
    const userName = screen.getByText(/username: charles/i)
    const userEmail = screen.getByText(/email: charles@test\.com/i)
    const userRole = screen.getByText(/role: user/i)
    const logoutButton = screen.getByRole('button', {
        name: /logout/i
      });

    // Assert
    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
    expect(userRole).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();

    // Toggle user area after it has been opened
    fireEvent.click(logoutButton);

    // Assert
    expect(userName).not.toBeInTheDocument();
    expect(userEmail).not.toBeInTheDocument();
    expect(userRole).not.toBeInTheDocument();
    expect(logoutButton).not.toBeInTheDocument();
  });
});
