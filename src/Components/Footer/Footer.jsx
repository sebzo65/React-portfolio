import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <a className={styles.Footer_Icons} href="#!">
        <i className="fas fa-envelope fa-2x"></i>
        <i className="fab fa-linkedin fa-2x"></i>
        <i className="fab fa-github fa-2x"></i>
      </a>
      &copy; Copyright 2021
    </div>
  );
};

export default Footer;
