import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { Navbar, Offcanvas, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className={styles.Container} expand={false}>
      <Navbar.Toggle
        className={styles.Container_Toggle}
        aria-controls="offcanvasNavbar"
      />
      <Navbar.Offcanvas
        className={styles.Nav}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header className={styles.Offcanvas_Header} closeButton>
          <Offcanvas.Title className={styles.Offcanvas_Title}>
            Get to know me
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className={styles.Nav_List}>
            <Link className={styles.Nav_List_ItemLink} to="/">
              Home
            </Link>
            <Link className={styles.Nav_List_ItemLink} to="/about">
              About
            </Link>
            <Link className={styles.Nav_List_ItemLink} to="/projects">
              Projects
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default NavBar;
