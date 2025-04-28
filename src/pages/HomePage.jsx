import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container} id="Home">
      <main className={styles.mainContent}>
        <div className={styles.motoContainer}>
          <p>
          Creation <span>Leads</span>  Victory <span>Follows</span></p>
        </div>
        <div className={styles.logoContainer}>
          <img src="/images/NavLogo.png" alt="Nexura Logo" className={styles.logo} />
        </div>

        <div className={styles.textContent}>
          <h1>WELCOME TO <b>NEXURA!</b> </h1>
          <p className={styles.welcomeText}>
            Nexura is a student-led club under the Department of Automobile
            Engineering at UIT-RGPV, Bhopal, dedicated to nurturing talent and
            fostering interdisciplinary collaboration. We equip students with
            practical skills and innovative mindsets to excel in emerging
            technologies.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
