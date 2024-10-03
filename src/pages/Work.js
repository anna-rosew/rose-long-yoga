import React from "react";
import { Link } from "react-router-dom";
import "../styles/Work.css";
import "../styles/App.css";
import MyApproach from "../styles/imgs/permanent/my-approach.png";
import Groups from "../styles/imgs/permanent/groups.png";
import OneToOnes from "../styles/imgs/permanent/one-to-one.png";
import OverlaySVG from "../styles/imgs/icons/sunshine_white.svg";
import TestimonialCarousel from "../components/TestimonialCarousel";
import BlurryImage from "../components/BlurryImage";

export default function Work() {
  return (
    <div className="container Work-Page">
      <div className="intro">
        <h1>Work With Rose.</h1>
        <p>
          <strong>
            Come and explore how your body, mind and breath work together. Open
            yourself to new dimensions of experience and personal growth.
          </strong>
        </p>
      </div>
      <div className="work-cards">
        <div className="grid grid-3-columns">
          <div className="card">
            <Link to="/approach" className="card-link">
              <h2>Approach</h2>
              <h4>LEARN FROM EXPERIENCE</h4>
              <div className="work-image-container">
                <BlurryImage
                  src={MyApproach}
                  className="img-responsive img-hover"
                  alt="My Approach - 'Torus in acrylics': painting by Lynn Hanford-Day"
                />
                <div className="work-overlay">
                  <img
                    src={OverlaySVG}
                    className="work-overlay-svg"
                    alt="Overlay SVG"
                  />
                  <p>
                    <strong>Transform from the inside out.</strong>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/groups" className="card-link">
              <h2>Groups</h2>
              <h4>CLASSES - WORKSHOPS - RETREATS</h4>
              <div className="work-image-container">
                <BlurryImage
                  src={Groups}
                  className="img-responsive img-hover"
                  alt="Group - 'Chinese Year of the Water Rabbit': painting by Lynn Hanford-Day"
                />
                <div className="work-overlay">
                  <img
                    src={OverlaySVG}
                    className="work-overlay-svg"
                    alt="Overlay SVG"
                  />
                  <p>
                    <strong>Share in the power of the collective.</strong>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/onetoone" className="card-link">
              <h2>One-To-Ones</h2>
              <h4>COACHING & YOGA</h4>
              <div className="work-image-container">
                <BlurryImage
                  src={OneToOnes}
                  className="img-responsive img-hover"
                  alt="One-To-Ones - 'The Lotfollah Dome': painting by Lynn Hanford-Day"
                />
                <div className="work-overlay">
                  <img
                    src={OverlaySVG}
                    className="work-overlay-svg"
                    alt="Overlay SVG"
                  />
                  <p>
                    <strong>The path of self discovery</strong>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <TestimonialCarousel />
    </div>
  );
}
