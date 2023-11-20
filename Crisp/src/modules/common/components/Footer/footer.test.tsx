import { render, screen } from "@testing-library/react";
import Footer from ".";
import { BrowserRouter } from "react-router-dom";

describe("ExternalLinkButton Component", () => {
  test("should render", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const crispLogo = screen.getByRole("img", {
      name: /crisp logo/i,
    });
    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    const loginLink = screen.getByRole("link", {
      name: /login/i,
    });
    const contactLink = screen.getByRole("link", {
      name: /contact/i,
    });
    const aboutLink = screen.getByRole("link", {
      name: /about/i,
    });

    // Assert
    expect(crispLogo).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
