import React from "react";
import sunshine from "../styles/imgs/icons/sunshine.svg";
import { Link } from "react-router-dom";

import "../styles/Retreat.css";
import "../styles/App.css";

export default function Retreats() {
  return (
    <div className="Retreats">
      <div className="container retreat-page">
        <h1>Retreats</h1>
        <div className="membership-text">
          <img src={sunshine} alt="sunshine" />
          <p>
            There are currently no retreats planned but be sure to{" "}
            <Link to="/contact" className="word-link">
              <strong>sign-up to the newsletter</strong>
            </Link>{" "}
            to stay posted.
          </p>
          <div className="current-deals">
            <h3>Current Monthly membership deals</h3>
            <p>
              <strong>Monthly Bundles:</strong> Morning Breath, Deep Chill,
              Kundalini Magic and Lunar Cycles.
            </p>
            <p>
              <strong>Monthly Membership:</strong> Access all online classes
              live and access to video playbacks to watch again at any time.
            </p>
            <Link to="/contact">
              <button className="general-button">Book</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
