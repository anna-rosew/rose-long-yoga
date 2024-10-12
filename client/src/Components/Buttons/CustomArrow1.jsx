import React from "react";
import nextArrow2 from "../styles/imgs/icons/arrow-next2.svg"; // Adjust the path as necessary
import prevArrow2 from "../styles/imgs/icons/arrow-prev2.svg";
import "../styles/Retreat.css"; // Adjust the path as necessary

const CustomArrow1 = ({ customArrows1, style, onClick, direction }) => {
  const arrowSrc = direction === "next" ? nextArrow2 : prevArrow2;
  return (
    <div
      className={customArrows1}
      style={{ ...style, display: "block", zIndex: 1 }}
      onClick={onClick}
    >
      <img
        src={arrowSrc}
        alt={`${direction} arrow`}
        style={{ width: "30px", height: "30px" }}
      />
    </div>
  );
};

export const NextArrow1 = (props) => (
  <CustomArrow1 {...props} direction="next" />
);
export const PrevArrow1 = (props) => (
  <CustomArrow1 {...props} direction="prev" />
);
