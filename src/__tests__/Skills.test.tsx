import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "@/components/Skills";
import styles from "@/components/Skills.module.css";

describe("Skills Component", () => {
  const mockProps = {
    skills: [
      {
        name: "React",
        description: "Advanced proficiency in React and its ecosystem"
      },
      {
        name: "TypeScript",
        description: "Expert-level TypeScript development"
      }
    ]
  };

  it("renders skills information correctly", () => {
    render(<Skills {...mockProps} />);

    expect(screen.getByText("Technical Skills")).toBeInTheDocument();

    mockProps.skills.forEach((skill) => {
      expect(screen.getByText(new RegExp(`${skill.name}:`))).toBeInTheDocument();
      expect(screen.getByText(skill.description)).toBeInTheDocument();
    });
  });

  it("applies correct CSS classes", () => {
    render(<Skills {...mockProps} />);

    const container = screen.getByText("Technical Skills").parentElement;
    expect(container).toHaveClass(styles.container);

    const skillsContainer = container?.querySelector("div");
    expect(skillsContainer).toHaveClass(styles.skills);
  });

  it("handles empty skills array", () => {
    const emptyProps = {
      skills: []
    };

    render(<Skills {...emptyProps} />);

    expect(screen.getByText("Technical Skills")).toBeInTheDocument();

    const container = screen.getByText("Technical Skills").parentElement;
    const skillsContainer = container?.querySelector(`.${styles.skills}`);
    expect(skillsContainer).toBeInTheDocument();
    expect(skillsContainer?.children.length).toBe(0);
  });
});
