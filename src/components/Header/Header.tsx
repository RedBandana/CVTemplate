import React from "react";
import styles from "./Header.module.css";

export interface HeaderProps {
  title: string;
  address: string;
  email: string;
  phone: string;
  websites: {
    name: string;
    url: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({ title, address, email, phone, websites }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.infoContainer}>
        <div>
          <p>{address}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>

        <div>
          {websites.map((site, index) => (
            <p key={index}>
              <strong>{site.name}: </strong>
              <a href={site.url} target="_blank">
                {site.url}
              </a>
            </p>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
