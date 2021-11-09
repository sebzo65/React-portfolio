import React from "react";
import styles from "./Footer.module.scss";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter backgroundColor="light" className={styles.Footer}>
      <a className={styles.Footer_Icons} href="#!">
        <i className="fas fa-envelope fa-2x"></i>
        <i className="fab fa-linkedin fa-2x"></i>
        <i className="fab fa-github fa-2x"></i>
      </a>
      &copy; {new Date().getFullYear()} Copyright:{" Sebastian Penedo"}
    </MDBFooter>
  );
};

export default Footer;
