import React from "react";
import { render, screen } from "@testing-library/react";
import Activities from "@/components/Activities";
import { ColorType } from "@/types";
import styles from "@/components/Activities.module.css";

describe("Activities Component", () => {
  const mockProps = {
    title: "Community Activities",
    color: ColorType.Secondary,
    spaceNeeded: true,
    activities: [
      {
        name: "Conference Speaker",
        date: "June 2024",
        text: "Presented on React Development",
        url: "https://conf.example.com"
      },
      {
        name: "Volunteer Work",
        date: "March 2024",
        text: "Community Code Teaching"
      }
    ]
  };

  it("renders activities with correct content", () => {
    render(<Activities {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    expect(screen.getByText(/Conference Speaker/)).toBeInTheDocument();
    expect(screen.getByText(/June 2024/)).toBeInTheDocument();
    expect(screen.getByText("Presented on React Development")).toBeInTheDocument();

    expect(screen.getByText(/Volunteer Work/)).toBeInTheDocument();
    expect(screen.getByText(/March 2024/)).toBeInTheDocument();
    expect(screen.getByText("Community Code Teaching")).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /Conference Speaker/i });
    expect(link).toHaveAttribute("href", "https://conf.example.com");
  });

  it("applies correct styling classes with spaceNeeded set to true", () => {
    render(<Activities {...mockProps} />);

    const container = screen.getByRole("heading", { level: 2, name: mockProps.title }).parentElement;
    expect(container).toHaveClass(`${mockProps.color}-color`);
    expect(container).toHaveClass(styles.container);

    const activitiesList = container?.querySelector(`.${styles.activitiesList}`);
    expect(activitiesList).toHaveClass(styles.activitiesListSpace);
  });

  it("renders properly when spaceNeeded is false", () => {
    const propsWithoutSpace = {
      ...mockProps,
      spaceNeeded: false
    };

    render(<Activities {...propsWithoutSpace} />);

    const container = screen.getByRole("heading", { level: 2, name: mockProps.title }).parentElement;
    const activitiesList = container?.querySelector(`.${styles.activitiesList}`);
    expect(activitiesList).not.toHaveClass(styles.activitiesListSpace);
  });

  it("renders activities without URLs correctly", () => {
    const propsWithoutUrls = {
      ...mockProps,
      activities: [
        {
          name: "Activity Without URL",
          date: "July 2024",
          text: "This activity has no URL"
        }
      ]
    };

    render(<Activities {...propsWithoutUrls} />);

    const activityName = screen.getByText("Activity Without URL");
    expect(activityName.tagName).toBe("STRONG");
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
