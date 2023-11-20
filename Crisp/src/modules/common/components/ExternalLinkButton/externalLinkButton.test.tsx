import { render, screen } from "@testing-library/react";
import ExternalLinkButton from ".";
import { BrowserRouter } from "react-router-dom";

describe("ExternalLinkButton Component", () => {
  test("should render", () => {
    const link = "https://example.com";
    const label = "Visit Example";
    const alt = "External Link";
    const size = "medium";
    render(
        <BrowserRouter>
            <ExternalLinkButton link={link} size={size} alt={alt} label={label} />
        </BrowserRouter>
    );

    const linkElement = screen.getByRole("link");

    expect(linkElement).toHaveAttribute("href", link);
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("aria-label", alt);
    expect(linkElement).toHaveTextContent(label);
    expect(linkElement).toHaveClass(`external-link-button--${size}`);
  });
});
