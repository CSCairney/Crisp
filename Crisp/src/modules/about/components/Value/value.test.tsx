import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Value from ".";
import { Values } from "../../constants/values";

describe("Value Component", () => {
  test("should render Accessibility", () => {
    render(<Value value={Values.Accessibility} statement="Accessibility statement" />)
    const accessibility = screen.getByText("Accessibility");
    expect(accessibility).toBeInTheDocument();
  });
  test("should render Integrity", () => {
    render(<Value value={Values.Integrity} statement="Integrity statement" />)
    const Integrity = screen.getByText("Integrity");
    expect(Integrity).toBeInTheDocument();
  });
  test("should render Community", () => {
    render(<Value value={Values.Community} statement="Community statement" />)
    const Community = screen.getByText("Community");
    expect(Community).toBeInTheDocument();
  });
  test("should render Innovation", () => {
    render(<Value value={Values.Innovation} statement="Innovation statement" />)
    const Innovation = screen.getByText("Innovation");
    expect(Innovation).toBeInTheDocument();
  });
});