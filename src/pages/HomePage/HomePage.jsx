// pages/HomePage.jsx
import React from "react";
import Title from "../../components/Title/Title";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Title text="Welcome to PetLove" />
      <p className={styles.description}>
        Find your perfect pet companion today!
      </p>
      <img
        src="/path/to/static-image.jpg"
        alt="Static Content"
        className={styles.staticImage}
      />
    </div>
  );
};

export default HomePage;
