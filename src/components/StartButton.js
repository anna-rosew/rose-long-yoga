import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function StartButton() {
  return (
    <Link to="/work">
      <button className="journey-link button-hover">Start Your Journey</button>
    </Link>
  );
}
