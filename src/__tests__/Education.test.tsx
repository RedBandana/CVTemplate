import React from "react";
import { render, screen } from "@testing-library/react";
import Education from "@/components/Education";
import styles from "@/components/Education.module.css";

describe("Education Component", () => {
  const mockProps = {
    degrees: [
      {
        name: "Bachelor of Science in Computer Science",
        school: "University of Technology",
        address: "City, Country",
        date: "2020"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        school: "Amazon Web Services",
        date: "2023",
        details: "Associate Level"
      },
      {
        name: "React Developer Certification",
        school: "React Training",
        date: "2022"
      }
    ]
  };

  it("renders education information correctly", () => {
    render(<Education {...mockProps} />);

    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText(mockProps.degrees[0].name)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.degrees[0].school} - ${mockProps.degrees[0].address}`)).toBeInTheDocument();
    expect(screen.getByText(`Graduated: ${mockProps.degrees[0].date}`)).toBeInTheDocument();

    expect(screen.getByText("Certifications")).toBeInTheDocument();
    expect(screen.getByText(/AWS Certified Developer/)).toBeInTheDocument();
    expect(screen.getByText(/Associate Level/)).toBeInTheDocument();
    expect(screen.getByText(/Amazon Web Services, 2023/)).toBeInTheDocument();

    expect(screen.getByText(/React Developer Certification/)).toBeInTheDocument();
    expect(screen.getByText(/React Training, 2022/)).toBeInTheDocument();
  });

  it("handles empty arrays correctly", () => {
    const emptyProps = {
      degrees: [],
      certifications: []
    };

    render(<Education {...emptyProps} />);

    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Certifications")).toBeInTheDocument();

    expect(screen.queryByText(/Graduated:/)).not.toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    render(<Education {...mockProps} />);

    const container = document.querySelector(`.${styles.container}`);
    expect(container).toBeInTheDocument();

    const educationBoxes = document.querySelectorAll(`.${styles.educationBox}`);
    expect(educationBoxes.length).toBe(2);
  });
});
