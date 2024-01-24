import { render, screen, fireEvent } from "@testing-library/react";
import Footer from ".";
import { BrowserRouter } from "react-router-dom";
import * as footerHelpers from '../../helpers/footer';
import { vi } from "vitest";

describe("ExternalLinkButton Component", () => {
  test("Render Test - Component renders correctly", () => {
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
  test("Callback Function Test - Social media link handler is called correctly", async () => {
    const socialMediaHandlerSpy = vi.spyOn(footerHelpers, 'socialMediaHandler');

    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
  // For facebook
  const facebookLink = await screen.findByTestId('facebook-link-testid');
  fireEvent.click(facebookLink);
  expect(socialMediaHandlerSpy).toHaveBeenCalledWith('https://facebook.com');
  socialMediaHandlerSpy.mockReset();

  // For instagram
  const instagramLink = await screen.findByTestId('instagram-link-testid');
  fireEvent.click(instagramLink);
  expect(socialMediaHandlerSpy).toHaveBeenCalledWith('https://instagram.com');
  socialMediaHandlerSpy.mockReset();

  // For linkedin
  const linkedinLink = await screen.findByTestId('linkedin-link-testid');
  fireEvent.click(linkedinLink);
  expect(socialMediaHandlerSpy).toHaveBeenCalledWith('https://www.linkedin.com/in/charlescairney/');
  socialMediaHandlerSpy.mockReset();

  // For Github
  const githubLink = await screen.findByTestId('github-link-testid');
  fireEvent.click(githubLink);
  expect(socialMediaHandlerSpy).toHaveBeenCalledWith('https://github.com/CSCairney');
  socialMediaHandlerSpy.mockReset();

  // For Twitter
  const twitterLink = await screen.findByTestId('twitter-link-testid');
  fireEvent.click(twitterLink);
  expect(socialMediaHandlerSpy).toHaveBeenCalledWith('https://twitter.com');
  socialMediaHandlerSpy.mockRestore();
  })
});
