import React from "react";
import styles from "./Activities.module.css";
import { ColorType } from "@/types";

export interface ActivitiesProps {
  title: string;
  color: ColorType;
  spaceNeeded?: boolean;
  activities: {
    url?: string;
    name: string;
    date: string;
    text: string;
  }[];
}

const Activities: React.FC<ActivitiesProps> = ({ title, color, activities, spaceNeeded }) => {
  const containerClassName = `${styles.container} ${color}-color`;
  const activitiesListClassName = `${styles.activitiesList} ${spaceNeeded ? styles["activitiesListSpace"] : ""}`;

  return (
    <div className={containerClassName}>
      <h2>{title}</h2>
      <div className={activitiesListClassName}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.activity}>
            <div>
              {activity.url ? (
                <a href={activity.url} target="_blank">
                  <strong>{activity.name}</strong>
                </a>
              ) : (
                <strong>{activity.name}</strong>
              )}
              <span>, {activity.date}</span>
            </div>
            <div>{activity.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
