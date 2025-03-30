import React from "react";
import styles from "./Skills.module.css";

export interface SkillsProps {
  skills: {
    name: string;
    description: string;
  }[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className={styles.container}>
      <h2>Technical Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <p key={index}>
            <strong>{skill.name}: </strong>
            {skill.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
