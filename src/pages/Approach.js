import React from "react";
import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/TestimonialCarousel";

import "../styles/partials/_approach.scss";
import "../styles/partials/_video-players.scss";

export default function Approach() {
  return (
    <div className="container Approach-Page">
      <h1>Approach</h1>
      <div className="player-wrapper">
        <iframe
          src="https://player.vimeo.com/video/998274144?h=ac7caa69a3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="960"
          height="540"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="vimeo player"
        ></iframe>
      </div>

      <div className="call-to-action">
        <Link to="/work">
          <button className="general-button button-center">
            Start Your Journey
          </button>
        </Link>
      </div>
      <div className="text">
        <p>
          The ancients knew the power of the{" "}
          <strong>mind, body and the breath</strong>, and modern research is
          proving what they knew; you have the capacity to{" "}
          <strong>transform yourself from the inside out.</strong>
        </p>
        <p>
          This is not a quick fix. The process asks you to release the familiar
          and <strong>step into the unknown</strong>.  It takes{" "}
          <strong>courage</strong> to risk letting go of what no longer works
          for you.  Holding a clear space of enquiry allows you to see your
          patterns, identify blind spots and{" "}
          <strong>unlock your potential</strong>.  Greater self-awareness
          equates with <strong>greater freedom</strong>.  Through this work you
          learn where you have agency and find your way through the blocks.
        </p>
        <p>
          I am dual qualified as a <strong>Coach and Yoga Teacher</strong>. I'm
          fascinated with how the body, mind and breath work{" "}
          <strong>together</strong> and how listening deeply{" "}
          <strong>opens us to new dimensions</strong> of experience and personal
          growth.
        </p>
        <p>
          I draw on tools, techniques and teachings from different traditions
          and cultures and am grateful to all my teachers, peers and
          communities.   I recognise that ultimately all paths lead to the same
          destination, <strong>all rivers flow to the sea.</strong>
        </p>
      </div>
      <TestimonialCarousel />
    </div>
  );
}
