import React from "react";
import { Link } from "react-router-dom";
import "../styles/MembershipLanding.css";
import "../styles/App.css";
import sunshine from "../styles/imgs/icons/sunshine.svg";

export default function MembershipLanding() {
  return (
    <div className="MembershipPage container">
      <div className="membership-text">
        <h1>This page is coming soon!</h1>
        <img src={sunshine} alt="sunshine" />
        <p>
          I am currently working on a <strong>new membership page</strong> where
          you will be able to login and find a library of replays & resources.
        </p>
        <div className="current-deals">
          <h3>Current Monthly membership deals</h3>
          <p>
            <strong>Monthly Bundles:</strong> Morning Breath, Deep Chill,
            Kundalini Magic and Lunar Cycles.
          </p>
          <p>
            <strong>Monthly Membership:</strong> Access all online classes live
            and access to video playbacks to watch again at any time.
          </p>
          <Link to="/contact">
            <button className="general-button">Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
