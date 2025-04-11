import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Toggle from './toggleBtn';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/images/NavLogo.png" alt="Nexura-logo" />
      </div>

      {/* Hamburger Menu Button */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`${styles.elements} ${menuOpen ? styles.active : ""}`}>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Events">Events</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Contact">Contact</a></li>
          <Toggle/>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
