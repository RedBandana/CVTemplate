import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "@/components/Experience";
import styles from "@/components/Experience.module.css";

describe("Experience Component", () => {
  const mockProps = {
    title: "Senior Developer",
    company: "Tech Corp",
    address: "New York, USA",
    date: "2020 - Present",
    tasks: ["Led development team of 5 engineers", "Implemented CI/CD pipeline", "Reduced deployment time by 50%"]
  };

  it("renders experience information correctly", () => {
    render(<Experience {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.company} - ${mockProps.address}`)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();

    mockProps.tasks.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockProps.tasks.length);
  });

  it("applies correct CSS classes", () => {
    render(<Experience {...mockProps} />);

    const container = document.querySelector(`.${styles.container}`);
    expect(container).toBeInTheDocument();

    const dateElement = screen.getByText(mockProps.date);
    expect(dateElement).toHaveClass(styles.date);

    const tasksList = document.querySelector("ul");
    expect(tasksList).toHaveClass(styles.tasks);
  });

  it("handles empty tasks array", () => {
    const propsWithEmptyTasks = {
      ...mockProps,
      tasks: []
    };

    render(<Experience {...propsWithEmptyTasks} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);

    const tasksList = document.querySelector(`.${styles.tasks}`);
    expect(tasksList).toBeInTheDocument();
  });
});
