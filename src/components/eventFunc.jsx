import { useEffect, useState } from 'react';
import React from 'react';
import css from './explore.module.css';
import "./animation.css";
import axios from 'axios';

const EventFunc = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events") // Fetch data from backend
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const Events = (props) => {
    return (
      <>
        <div className={css.eventDiv}>
          {/* Date and Day */}
          <div className={`${css.flexColCenter} ${css.DateDaybox}`}>
            <div className={css.eventHeading}>{props.date}</div>
            <div className={css.textSmallDim}>{props.day}</div>
          </div>
          {/* About the Event */}
          <div className={css.eventbox}>
            <div className={css.ColorStrip} style={{ background: props.stripbg }}></div>
            <div>
              <div>
                <div className={css.eventHeading}>{props.eventHeading}</div>
                <p className={css.evetDetail}>{props.evetDetail}</p>
                <div className={css.textSmallDim}>
                  <div>{props.from}AM - {props.to}PM</div>
                  <div>{props.mode}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={css.flexColCenter}>
        <div>
          <div className={css.heading}>
            <h2>Explore What's Next at Nexura</h2>
          </div>
        </div>
        <div className={css.headingText}>
          <div>
            Stay updated with our latest events and connect with a community of innovators, creators, and leaders.
          </div>
        </div>
        {/* Render events */}
        {events.map((event, index) => (
          <Events key={index} {...event} />
        ))}
      </div>
    </>
  );
};

export default EventFunc;
