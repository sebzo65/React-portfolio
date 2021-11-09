import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <h2 className={styles.Home_text}>Hi! My name is</h2>
      <h1 className={styles.Home_text_firstName}>
        Sebastian <span className={styles.Home_text_lastName}>Penedo</span>
      </h1>
      <h2>Full-Stack Engineer</h2>
    </div>
  );
};

export default Home;
