import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/BlurryImage.css"; // Assuming you have a CSS file for these components

const BlurryImage = ({ src, className = "", alt = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <img
      src={src}
      className={`${className} ${loaded ? "loaded" : "blurry"}`}
      alt={alt}
      {...props}
    />
  );
};

BlurryImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default BlurryImage;
