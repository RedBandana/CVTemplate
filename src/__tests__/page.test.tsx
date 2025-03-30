import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page"; // Adjust the path as needed
import { ColorType } from "@/types";
import styles from "../app/page.module.css"; // Adjust the path as needed

jest.mock("@/components/Header", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-header" />)
}));

jest.mock("@/components/Footer", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-footer" />)
}));

jest.mock("@/components/Activities", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-activities" />)
}));

jest.mock("@/components/InfoBox", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-infobox" />)
}));

jest.mock("@/components/Experience", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-experience" />)
}));

jest.mock("@/components/Education", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-education" />)
}));

jest.mock("@/components/Skills", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-skills" />)
}));

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Activities from "@/components/Activities";
import InfoBox from "@/components/InfoBox";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const MockHeader = jest.mocked(Header);
const MockFooter = jest.mocked(Footer);
const MockActivities = jest.mocked(Activities);
const MockInfoBox = jest.mocked(InfoBox);
const MockExperience = jest.mocked(Experience);
const MockEducation = jest.mocked(Education);
const MockSkills = jest.mocked(Skills);

describe("Home Page Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the page with correct structure", () => {
    render(<Home />);

    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();

    const main = screen.getByRole("main");
    expect(main).toHaveClass(styles.main);

    expect(screen.getByText("Professional Experience")).toBeInTheDocument();

    expect(screen.getAllByTestId("mock-experience").length).toBe(3);
    expect(screen.getByTestId("mock-skills")).toBeInTheDocument();
    expect(screen.getByTestId("mock-education")).toBeInTheDocument();
    expect(screen.getAllByTestId("mock-activities").length).toBe(2);
    expect(screen.getByTestId("mock-infobox")).toBeInTheDocument();
  });

  it("passes correct props to all components", () => {
    render(<Home />);

    expect(MockHeader).toHaveBeenCalled();
    const headerProps = MockHeader.mock.calls[0][0];

    expect(headerProps.title).toBe("John, Doe");
    expect(headerProps.address).toBe("123 Main Streat, Montreal, QC");
    expect(headerProps.email).toBe("john.doe@email.com");
    expect(headerProps.phone).toBe("(514) 1234-5678");

    expect(headerProps.websites).toEqual([
      { name: "LinkedIn", url: "https://linkedin.com/in/john-doe" },
      { name: "GitHub", url: "https://github.com/RedBandana" }
    ]);

    expect(MockFooter).toHaveBeenCalled();
    const footerProps = MockFooter.mock.calls[0][0];
    expect(footerProps).toEqual({
      title: "References available upon request",
      text: "CV template created using the following technology stack: JavaScript (TypeScript, React, Next.js, Jest, Node.js), CSS, and HTML. You can view it at the following link:",
      url: "https://github.com/RedBandana/CVTemplate"
    });

    expect(MockActivities).toHaveBeenCalledTimes(2);

    const personalProjectsProps = MockActivities.mock.calls[0][0];
    expect(personalProjectsProps.title).toBe("Side Projects");
    expect(personalProjectsProps.color).toBe(ColorType.Secondary);
    expect(personalProjectsProps.spaceNeeded).toBe(true);

    const additionalActivitiesProps = MockActivities.mock.calls[1][0];
    expect(additionalActivitiesProps.title).toBe("Other Activities");
    expect(additionalActivitiesProps.color).toBe(ColorType.Primary);

    expect(MockInfoBox).toHaveBeenCalled();
    const infoBoxProps = MockInfoBox.mock.calls[0][0];
    expect(infoBoxProps.title).toBe("Skills Applied with Side Projects");
    expect(infoBoxProps.color).toBe(ColorType.Info);
    expect(infoBoxProps.className).toBe(styles.infoBox);

    expect(MockExperience).toHaveBeenCalledTimes(3);

    const developerProps = MockExperience.mock.calls[0][0];
    expect(developerProps.title).toBe("Software Developer");
    expect(developerProps.company).toBe("Quebec Economic Development Agency");

    const independentDevProps = MockExperience.mock.calls[1][0];
    expect(independentDevProps.title).toBe("Independent Developer");
    expect(independentDevProps.company).toBe("GreenLeaf Online, Realty Group");

    const designerProps = MockExperience.mock.calls[2][0];
    expect(designerProps.title).toBe("Independent Visual Designer");
    expect(designerProps.company).toBe("Artistry/Pixel Quest, Byond Soul Legends");

    expect(MockEducation).toHaveBeenCalled();
    const educationProps = MockEducation.mock.calls[0][0];
    expect(educationProps.degrees).toContainEqual(
      expect.objectContaining({
        name: "Bachelor of Science in Information Technology",
        school: "University of Montreal"
      })
    );

    expect(MockSkills).toHaveBeenCalled();
    const skillsProps = MockSkills.mock.calls[0][0];
    expect(skillsProps.skills).toContainEqual(expect.objectContaining({ name: "Languages & Frameworks" }));
    expect(skillsProps.skills).toContainEqual(expect.objectContaining({ name: "Tools & Technologies" }));
  });

  it("applies correct CSS classes to sections", () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toHaveClass(styles.page);

    const main = screen.getByRole("main");
    expect(main).toHaveClass(styles.main);

    const sections = main.querySelectorAll("section");
    expect(sections[0]).toHaveClass(styles.skillsSection);
    expect(sections[1]).toHaveClass(styles.experienceSection);
    expect(sections[2]).toHaveClass(styles.activitiesSection);

    expect(main.querySelector(`.${styles.experienceItems}`)).toBeInTheDocument();
    expect(main.querySelector(`.${styles.sideProjects}`)).toBeInTheDocument();
    expect(main.querySelector(`.${styles.otherActivities}`)).toBeInTheDocument();
  });
});
