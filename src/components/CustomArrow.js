import React from "react";
import nextArrow from "../styles/imgs/icons/arrow-next.svg"; // Adjust the path as necessary
import prevArrow from "../styles/imgs/icons/arrow-prev.svg"; // Adjust the path as necessary

const CustomArrow = ({ className, style, onClick, direction }) => {
  const arrowSrc = direction === "next" ? nextArrow : prevArrow;
  return (
    <div
      className={className}
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

export const NextArrow = (props) => <CustomArrow {...props} direction="next" />;
export const PrevArrow = (props) => <CustomArrow {...props} direction="prev" />;
