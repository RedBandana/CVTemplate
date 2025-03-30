import React from "react";
import styles from "./Education.module.css";

export interface EducationProps {
  degrees: {
    name: string;
    school: string;
    address: string;
    date: string;
  }[];
  certifications: {
    name: string;
    school: string;
    date: string;
    details?: string;
  }[];
}

const Education: React.FC<EducationProps> = ({ degrees, certifications }) => {
  return (
    <div className={styles.container}>
      <section className={styles.educationBox}>
        <h2>Education</h2>
        <div>
          {degrees.map((degree, index) => (
            <div key={index}>
              <strong>{degree.name}</strong>
              <p>
                {degree.school} - {degree.address}
              </p>
              <p>Graduated: {degree.date}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.educationBox}>
        <h2>Certifications</h2>
        <div>
          {certifications.map((certif, index) => (
            <div key={index}>
              <strong>{certif.name}</strong> {certif.details} ({certif.school}, {certif.date})
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
