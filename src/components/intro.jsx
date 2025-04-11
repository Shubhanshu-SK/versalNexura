import React from "react";
import styles from "./intro.module.css";

const VisionMission = () => {
  return (
    <div className={styles.visionMissionContainer} id="About">
      <h2 className={styles.title}>Empowering Talent, Accelerating Innovation!</h2>
      <div className={styles.visionMissionContent}>
        <div className={styles.box}>
          <h3>Our Vision</h3>
          <p>
            To become a hub of creativity and technical excellence, empowering
            students to design, develop, and lead future-proof technology
            through interdisciplinary learning and innovation.
          </p>
        </div>
        <div className={styles.box}>
          <h3>Our Mission</h3>
          <p>
            To foster innovation in engineering by bridging the gap between
            academics and industry through hands-on projects, research, and
            technical excellence in 3D design, parametric modeling, UI/UX, web
            development, and management.
          </p>
        </div>
      </div>
      <h2 className={styles.subtitle}>Our Domains</h2>
    </div>
  );
};

export default VisionMission;
