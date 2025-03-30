import React from "react";
import styles from "./InfoBox.module.css";
import { ColorType } from "@/types";

export interface InfoBoxProps {
  title: string;
  text: string;
  color: ColorType;
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, text, color, className }) => {
  const containerClassName = `${styles.container} ${color}-color ${className ? className : ""}`;

  return (
    <div className={containerClassName}>
      <strong>{title}</strong>
      <div>{text}</div>
    </div>
  );
};

export default InfoBox;
