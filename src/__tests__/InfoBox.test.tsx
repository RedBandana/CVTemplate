import React from "react";
import { render, screen } from "@testing-library/react";
import InfoBox from "@/components/InfoBox";
import { ColorType } from "@/types";
import styles from "@/components/InfoBox.module.css";

describe("InfoBox Component", () => {
  const mockProps = {
    title: "Summary",
    text: "Professional software developer with 5 years of experience",
    color: ColorType.Info,
    className: "custom-class"
  };

  it("renders info box with correct content and styling", () => {
    render(<InfoBox {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.text)).toBeInTheDocument();

    const container = screen.getByText(mockProps.title).parentElement;
    expect(container).toHaveClass(styles.container);
    expect(container).toHaveClass("info-color");
    expect(container).toHaveClass("custom-class");
  });

  it("renders without optional className", () => {
    const propsWithoutClass = {
      title: "Summary",
      text: "Test text",
      color: ColorType.Secondary
    };

    render(<InfoBox {...propsWithoutClass} />);

    const container = screen.getByText(propsWithoutClass.title).parentElement;
    expect(container).toHaveClass(styles.container);
    expect(container).toHaveClass("secondary-color");
    expect(container?.className).not.toContain("undefined");
    expect(container?.className.split(" ").filter(Boolean).length).toBe(2);
  });

  it("applies all classes correctly in the className string", () => {
    render(<InfoBox {...mockProps} />);

    const container = screen.getByText(mockProps.title).parentElement;

    const classes = container?.className.split(" ").filter(Boolean);
    expect(classes).toContain(styles.container);
    expect(classes).toContain("info-color");
    expect(classes).toContain("custom-class");
    expect(classes?.length).toBe(3);
  });
});
