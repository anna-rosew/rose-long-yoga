import React from "react";
import { Link } from "react-router-dom";

import OnlineGroupsSlider from "../components/OnlineGroupsSlider";

import "../styles/partials/_work.scss";
import "../styles/partials/_groups.scss";
import Online from "../styles/imgs/permanent/online-groups-photo.png";
import InPerson from "../styles/imgs/permanent/inPersonGroups.png";
import Retreat from "../styles/imgs/permanent/retreats-photo.png";
import Workshop1 from "../styles/imgs/photos/workshop2.png";

import Location from "../styles/imgs/icons/location_line.svg";
import Calender from "../styles/imgs/icons/calander_white.svg";
import LocationBlack from "../styles/imgs/icons/location_black.svg";
import CalenderBlack from "../styles/imgs/icons/calender_black.svg";

export default function Groups() {
  const onClick = () => {
    window.location.href = "#onlineGroups";
  };
  const onClick2 = () => {
    window.location.href = "#inPerson";
  };
  const onClick3 = () => {
    window.location.href = "#retreats";
  };

  return (
    <div className="container Groups-Page">
      <div className="intro">
        <h1>Groups.</h1>
      </div>

      <div className="cards">
        <div className="grid grid-3-columns">
          <div className="card online-groups">
            <button onClick={onClick} className="card-links">
              <h2>Online Groups</h2>
              <h4>YOGA | COMMUNITY</h4>
              <div className="card-image-container">
                <img
                  src={Online}
                  className="img-responsive"
                  alt="Online Groups - art by Lynn Hanford-Day"
                />
              </div>
              <button
                className="mobile-button general-button button-wide"
                onClick={onClick}
              >
                Find Schedule
              </button>
            </button>
          </div>
          <div className="card inperson-groups">
            <button onClick={onClick2} className="card-links">
              <h2>In-Person Sessions</h2>
              <h4>CLASSES | WORKSHOPS</h4>
              <div className="card-image-container">
                <img
                  src={InPerson}
                  className="img-responsive"
                  alt="In-Person Classes & Groups - art by Lynn Hanford-Day"
                />
              </div>
              <button
                className="mobile-button general-button button-wide"
                onClick={onClick2}
              >
                Find Sessions
              </button>
            </button>
          </div>
          <div className="card retreats">
            <button onClick={onClick3} className="card-links">
              <h2>Retreats</h2>
              <h4>JOURNEYS | GROWTH | EXPLORATION</h4>
              <div className="card-image-container">
                <img
                  src={Retreat}
                  className="img-responsive"
                  alt="Retreats & Workshops - art by Lynn Hanford-Day"
                />
              </div>
              <button
                className="mobile-button general-button button-wide"
                onClick={onClick3}
              >
                Find Details
              </button>
            </button>
          </div>
        </div>
      </div>

      <div className="online-groups-section" id="onlineGroups">
        <h2 className="section-heading hr-lines">Online Groups</h2>
        <OnlineGroupsSlider />
      </div>

      <div className="in-person-sessions" id="inPerson">
        <h2 className="section-heading hr-lines">In-Person Sessions</h2>

        <div className="grid-2-columns">
          <div className="in-person-card">
            <Link to="/inperson" className="card-link">
              <div className="in-person-img-container">
                <img
                  src={Workshop1}
                  className="in-person-image"
                  alt="In-Person Session"
                />
                <div className="in-person-overlay">
                  <h4>Upcoming Workshop:</h4>
                  <h2>Breathwork Course</h2>
                  <p>
                    Join Rose for an introduction to Breath Work. This five week
                    course will introduce you to foundational practices that
                    allow you to{" "}
                    <strong>access the power of your breath</strong>.
                  </p>
                  <div className="overlay-details">
                    <span>
                      <img src={Location} alt="icon" className="overlay-svg2" />
                      <p>Absolute Yoga, Liverpool. UK</p>
                    </span>
                    <span>
                      <img src={Calender} alt="icon" className="overlay-svg2" />
                      <p>Wed 16 Oct, 18:30 - 19:30pm</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <div className="in-person-info-mobile">
              <h4>Upcoming Workshop:</h4>
              <h2>Moving Beyond Separation: The Power of The Breath.</h2>
              <p>
                This workshop uses movement and breathwork to experience unity
                through conscious breathing. Followed by a{" "}
                <strong>shared lunch.</strong>
              </p>
              <span>
                <img src={LocationBlack} alt="icon" className="overlay-svg2" />
                <p>Home Studio, Liverpool. UK</p>
              </span>
              <span>
                <img src={CalenderBlack} alt="icon" className="overlay-svg2" />
                <p>Mon 26 Aug, 10.00 - 12.30 am</p>
              </span>
              <Link to="/contact">
                <button className="book-button">BOOK NOW</button>
              </Link>
            </div>
          </div>
          <div className="in-person-card">
            <div className="in-person-info-mobile">
              <h4>Upcoming Workshop:</h4>
              <h2>Moving Beyond Separation: The Power of The Breath.</h2>
              <p>
                This workshop uses movement and breathwork to experience unity
                through conscious breathing. Followed by a{" "}
                <strong>shared lunch.</strong>
              </p>
              <span>
                <img src={LocationBlack} alt="icon" className="overlay-svg2" />
                <p>Home Studio, Liverpool. UK</p>
              </span>
              <span>
                <img src={CalenderBlack} alt="icon" className="overlay-svg2" />
                <p>Mon 26 Aug, 10.00 - 12.30 am</p>
              </span>
              <Link to="/contact">
                <button className="book-button">BOOK NOW</button>
              </Link>
            </div>
            <Link to="/inperson" className="card-link">
              <div className="in-person-img-container">
                <img
                  src={Workshop1}
                  className="in-person-image"
                  alt="In-Person Session"
                />
                <div className="in-person-overlay">
                  <h4>Upcoming Workshop:</h4>
                  <h2>Breathwork Course</h2>
                  <p>
                    Join Rose for an introduction to Breath Work. This five week
                    course will introduce you to foundational practices that
                    allow you to{" "}
                    <strong>access the power of your breath</strong>.
                  </p>
                  <div className="overlay-details">
                    <span>
                      <img src={Location} alt="icon" className="overlay-svg2" />
                      <p>Absolute Yoga, Liverpool. UK</p>
                    </span>
                    <span>
                      <img src={Calender} alt="icon" className="overlay-svg2" />
                      <p>Wed 16 Oct, 18:30 - 19:30pm</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="retreats" id="retreats">
        <h2 className="section-heading hr-lines">Retreats</h2>
        <p>
          There are currently no retreats planned but be sure to{" "}
          <Link to="/contact" className="word-link">
            <strong>sign-up to the newsletter</strong>
          </Link>{" "}
          to stay posted.
        </p>
      </div>
    </div>
  );
}
