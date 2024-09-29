import React from "react";
import "../styles/About.css";
import Rose1 from "../styles/imgs/photos/about2.png";
import { Link } from "react-router-dom";
import BlurryImage from "../components/BlurryImage";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="heading-container">
          <h1>Meet Rose</h1>
        </div>
        <div className="grid grid-meet-rose">
          <div className="about-para">
            <p>
              I used to regularly ask myself, ‘What’s the point?’ Life was a
              struggle; I didn’t like what was going on in the world, or inside
              me. I was deeply uncomfortable, wanting to make the world better
              while unconsciously driven to fix myself and those around me.
            </p>
            <p>
              In my thirties, running a Social Enterprise, I worked hard, played
              hard, and paid the price. Stress and anxiety led me to reach for
              quick fixes that only increased my inner turmoil. Life brought me
              to my knees, everything falling apart for real change to take
              place. In chaos and despair, I admitted I didn’t know how to live
              but longed to learn. Admitting this sparked change.
            </p>
            <p className="about-quote">
              The despair I felt began to transform into quiet gratitude and
              wonder.
            </p>
            <p>
              Life brought teachers, mentors and transformative practices.
              Challenges became opportunities for growth. I learned to cultivate
              inner coherence instead of chaos. The mystery of life opened from
              within. I continue to be amazed by what's possible when we make a
              conscious choice to change. Working with people who are up for the
              challenge keeps me inspired and motivated to keep learning and
              growing myself.
            </p>
            <div className="about-button-container">
              <Link to="/blog" className="general-button">
                Blog
              </Link>
              <Link to="/qualifications" className="general-button">
                Qualifications
              </Link>
            </div>
          </div>
          <div className="about-image-container">
            <BlurryImage className="about-image" alt="Rose Long" src={Rose1} />
          </div>
        </div>
      </div>
    </div>
  );
}
