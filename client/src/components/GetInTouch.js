import React from "react";

import defaultSvg from "../styles/imgs/icons/get-in-touch-hover.svg";
import "../styles/imgs/icons/get-in-touch.svg";
import "../styles/Get-In-Touch.css";

const GetInTouch = ({ link }) => {
  return (
    <a href={link} className="get-in-touch-btn">
      <img src={defaultSvg} alt="button icon" />
    </a>
  );
};

export default GetInTouch;
