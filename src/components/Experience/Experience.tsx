import React from "react";
import styles from "./Experience.module.css";

export interface ExperienceProps {
  title: string;
  company: string;
  address: string;
  date: string;
  tasks: string[];
}

const Experience: React.FC<ExperienceProps> = ({ title, company, address, date, tasks }) => {
  return (
    <div className={styles.container}>
      <div>
        <h3>{title}</h3>
        <strong>
          {company} - {address}
        </strong>
        <p className={styles.date}>{date}</p>
      </div>

      <ul className={styles.tasks}>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
