import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import styles from "@/components/Header.module.css";

describe("Header Component", () => {
  const mockProps = {
    title: "Company Name",
    address: "123 Main Street, City, Country",
    email: "contact@example.com",
    phone: "12345",
    websites: [
      { name: "Official Website", url: "https://www.example.com" },
      { name: "Support Portal", url: "https://support.example.com" }
    ]
  };

  it("renders the header with correct content", () => {
    render(<Header {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    expect(screen.getByText(mockProps.address)).toBeInTheDocument();
    expect(screen.getByText(mockProps.email)).toBeInTheDocument();
    expect(screen.getByText(mockProps.phone)).toBeInTheDocument();

    expect(screen.getByText(/Official Website/)).toBeInTheDocument();
    expect(screen.getByText(/Support Portal/)).toBeInTheDocument();
    expect(screen.getByText(/https:\/\/www.example.com/)).toBeInTheDocument();
    expect(screen.getByText(/https:\/\/support.example.com/)).toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    render(<Header {...mockProps} />);

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass(styles.header);

    const infoContainer = headerElement.querySelector("div");
    expect(infoContainer).toHaveClass(styles.infoContainer);
  });

  it("renders links with correct attributes", () => {
    render(<Header {...mockProps} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(mockProps.websites.length);

    mockProps.websites.forEach((site, index) => {
      expect(links[index]).toHaveAttribute("href", site.url);
      expect(links[index]).toHaveAttribute("target", "_blank");
    });
  });

  it("handles empty websites array", () => {
    const propsWithEmptyWebsites = {
      ...mockProps,
      websites: []
    };

    render(<Header {...propsWithEmptyWebsites} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.address)).toBeInTheDocument();

    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });
});
