import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/partials/_groups.scss";
import { Link } from "react-router-dom";

export default function ClassSlides({ classInfo }) {
  return (
    <div className="class-slide">
      <div className="class-header">
        <img
          src={classInfo.icon}
          alt={classInfo.classType}
          className="class-icon"
        />
        <h2>{classInfo.classType}</h2>
      </div>
      <div className="class-description">
        <p>{classInfo.description}</p>
        <p className="permanent-description">
          {classInfo.permanentDescription}
        </p>
      </div>
      <div className="class-bottom-grid">
        <div className="details-table">
          <div className="dates-column">
            <h3>Class Dates</h3>
            <ul>
              {classInfo.dates.length > 0 ? (
                classInfo.dates.map((date, index) => (
                  <li key={index}>
                    <p>{date}</p>
                  </li>
                ))
              ) : (
                <p>No dates available</p>
              )}
            </ul>
          </div>
          <div className="time-column">
            <h3>Time</h3>
            <ul>
              {classInfo.times.length > 0 ? (
                classInfo.times.map((time, index) => (
                  <li key={index}>
                    <p>{time}</p>
                  </li>
                ))
              ) : (
                <p>No times available</p>
              )}
            </ul>
          </div>
          <Link to="/contact">
            <button className="book-button button-wide">BOOK NOW</button>
          </Link>
        </div>
        <div className="prices">
          <h3>Prices</h3>
          <div className="price-grid">
            <ul>
              <li>
                <p>Drop-In Price: {classInfo.dropInPrice}</p>
              </li>
              <li>
                <p>Monthly: {classInfo.monthlyPrice}</p>
              </li>
            </ul>
            <div className="membership">
              <div className="membership-price">
                <h3>Monthly Membership</h3>
                <p>
                  Join all classes and access replays for £50 (from £86). Please
                  get-in-touch for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
