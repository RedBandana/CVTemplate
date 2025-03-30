import Header, { HeaderProps } from "@/components/Header";
import styles from "./page.module.css";
import Footer, { FooterProps } from "@/components/Footer";
import Activities, { ActivitiesProps } from "@/components/Activities";
import { ColorType } from "@/types";
import InfoBox, { InfoBoxProps } from "@/components/InfoBox";
import Experience, { ExperienceProps } from "@/components/Experience";
import Education, { EducationProps } from "@/components/Education";
import Skills, { SkillsProps } from "@/components/Skills";

export default function Home() {
  const header: HeaderProps = {
    title: "John, Doe",
    address: "123 Main Streat, Montreal, QC",
    email: "john.doe@email.com",
    phone: "(514) 1234-5678",
    websites: [
      { name: "LinkedIn", url: "https://linkedin.com/in/john-doe" },
      { name: "GitHub", url: "https://github.com/RedBandana" }
    ]
  };
  const skills: SkillsProps = {
    skills: [
      {
        name: "Languages & Frameworks",
        description: "Python (Django, Flask, FastAPI), HTML, CSS, Ruby, Go, JSON, Bash, SQL"
      },
      {
        name: "Tools & Technologies",
        description:
          "Content Management System, AWS, SVN, Kubernetes, PostgreSQL, Salesforce, GitHub Actions, Microsoft Power BI, Microsoft Power Query"
      },
      {
        name: "Data Management",
        description: "Data integration, data modeling, data quality assurance"
      },
      {
        name: "Soft Skills",
        description: "Leadership, teamwork, critical thinking, flexibility, project management"
      }
    ]
  };

  const education: EducationProps = {
    degrees: [
      {
        name: "Bachelor of Science in Information Technology",
        school: "University of Montreal",
        address: "Montreal, QC",
        date: "May 2022"
      }
    ],
    certifications: [
      {
        name: "Multiple certifications from the National Institute of Public Administration",
        school: "NIPA",
        date: "2026",
        details: "including: Data Privacy, Digital Security, Conflict Resolution in the Workplace"
      },
      {
        name: "AWS Certified Developer",
        school: "Coursera",
        date: "2025"
      },
      {
        name: "Basic Life Support Provider",
        school: "Red Cross",
        date: "2025"
      },
      {
        name: "First Aid/CPR Provider",
        school: "St. John Ambulance",
        date: "2022"
      }
    ]
  };

  const analystXp: ExperienceProps = {
    title: "Software Developer",
    company: "Quebec Economic Development Agency",
    address: "Quebec City, QC",
    date: "October 2020 - Present",
    tasks: [
      "Work with diverse teams to assess client requirements and project goals, creating effective software solutions.",
      "Develop and enhance functionalities in a client management system, prioritizing user satisfaction and efficiency.",
      "Write Python and JSON scripts for automated deployments, ensuring high standards through thorough testing and documentation.",
      "Engage in collaborative code reviews, offering insightful feedback to improve code quality and reliability."
    ]
  };

  const programmerXp: ExperienceProps = {
    title: "Independent Developer",
    company: "GreenLeaf Online, Realty Group",
    address: "Virtual",
    date: "All of 2020",
    tasks: [
      "Enhanced and optimized features for the platform GreenLeaf Online, focusing on user retention and system performance.",
      "Developed a tool for organizing employee schedules, improving workflow for Realty Group."
    ]
  };

  const graphicDesignerXp: ExperienceProps = {
    title: "Independent Visual Designer",
    company: "Artistry/Pixel Quest, Byond Soul Legends",
    address: "Virtual",
    date: "2015 - 2019",
    tasks: ["Created vector graphics for interactive media, enhancing the visual appeal and user engagement."]
  };

  const sideProjects: ActivitiesProps = {
    title: "Side Projects",
    color: ColorType.Secondary,
    spaceNeeded: true,
    activities: [
      {
        name: "Skyward",
        url: "https://skywardlabs.randomurl.com/",
        date: "2023 - Present",
        text: "Collaborated on a full-stack platform using Vue.js and Express to assist educational institutions with student management."
      },
      {
        name: "Quest for Glory",
        url: "https://questforglory.randomurl.com/",
        date: "2019 - Present",
        text: "Developed a cooperative C++ game with a small team and contributed to the core engine development."
      },
      {
        name: "AI Chat Hub",
        url: "https://aichathub.randomurl.com/",
        date: "2022 - 2023",
        text: "Built a full-stack application using Vue.js and Express as a custom front-end for a conversational AI API."
      }
    ]
  };

  const otherActivities: ActivitiesProps = {
    title: "Other Activities",
    color: ColorType.Primary,
    activities: [
      {
        name: "Karate",
        date: "2010 - Present",
        text: "National-level Karate competitor and mentor, showcasing commitment and effective communication abilities."
      },
      {
        name: "Starry Tales",
        url: "https://starrytales.randomurl.com/",
        date: "2018",
        text: "Authored and illustrated a graphic novel, highlighting artistic and narrative skills."
      }
    ]
  };

  const infoBox: InfoBoxProps = {
    title: "Skills Applied with Side Projects",
    text: "React, Angular, NestJS, Jest, Node.js, C#, YAML, Google Cloud, Docker, MongoDB, full-stack development, API integration, software architecture, data architecture, debugging, UI/UX design, team management, project planning, React Redux, NgRx.",
    color: ColorType.Info
  };

  const footer: FooterProps = {
    title: "References available upon request",
    text: "CV template created using the following technology stack: JavaScript (TypeScript, React, Next.js, Jest, Node.js), CSS, and HTML. You can view it at the following link:",
    url: "https://github.com/RedBandana/CVTemplate"
  };

  return (
    <div className={styles.page}>
      <Header {...header} />
      <main className={styles.main}>
        <section className={styles.skillsSection}>
          <Skills {...skills} />
          <Education {...education} />
        </section>
        <section className={styles.experienceSection}>
          <h2>Professional Experience</h2>
          <div className={styles.experienceItems}>
            <Experience {...analystXp} />
            <Experience {...programmerXp} />
            <Experience {...graphicDesignerXp} />
          </div>
        </section>
        <section className={styles.activitiesSection}>
          <div className={styles.sideProjects}>
            <Activities {...sideProjects} />
          </div>
          <div className={styles.otherActivities}>
            <Activities {...otherActivities} />
            <InfoBox {...infoBox} className={styles.infoBox} />
          </div>
        </section>
      </main>
      <Footer {...footer} />
    </div>
  );
}
