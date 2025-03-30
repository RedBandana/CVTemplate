import React from "react";
import styles from "./Footer.module.css";

export interface FooterProps {
  title: string;
  text: string;
  url: string;
}

const Footer: React.FC<FooterProps> = ({ title, text, url }) => {
  return (
    <footer className={styles.footer}>
      <h2>{title}</h2>
      <div className={styles.text}>
        {text}{" "}
        <a href={url} target="_blank">
          {url}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
