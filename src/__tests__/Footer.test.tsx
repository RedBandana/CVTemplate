import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import styles from "@/components/Footer.module.css";

describe("Footer Component", () => {
  const mockProps = {
    title: "Footer Title",
    text: "Some footer text goes here.",
    url: "https://www.example.com"
  };

  it("renders the footer with correct content", () => {
    render(<Footer {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.text)).toBeInTheDocument();

    const linkElement = screen.getByText(mockProps.url);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockProps.url);
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  it("applies correct CSS classes", () => {
    render(<Footer {...mockProps} />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveClass(styles.footer);

    const textContainer = screen.getByText(mockProps.text);
    expect(textContainer).toHaveClass(styles.text);
  });
});
