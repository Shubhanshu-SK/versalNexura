import React from "react";

import styles from "./UpcomingEvents.module.css";

const UpcomingEvents = () => {
  return (
    <div className={styles.container} id="Events">
      {/* Text Content */}
      <div className={styles.content}>
        <p className={styles.eventLabel}>Events</p>
        <h2 className={styles.heading}>Upcoming Events!</h2>
        <p className={styles.description}>
          Join us at Nexura Club for an unforgettable experience! We bring
          together enthusiasts and experts for a day of learning, networking,
          and fun. Whether you're looking to expand your knowledge, meet
          like-minded people, or simply enjoy an engaging atmosphere, this
          event is perfect for you.
        </p>
      </div>

      {/* Image / Illustration */}
      <div className={styles.imageContainer}>
        <img src="/images/Eventsimg.png" alt="Upcoming Event" className={styles.image} />
      </div>
    </div>
  );
};

export default UpcomingEvents;
