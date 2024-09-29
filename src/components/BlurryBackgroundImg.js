import React, { useState, useEffect } from "react";
import "../styles/App.css";

const BlurryBackgroundImg = ({ src, overlaySrc, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div
      className={`${className} ${loaded ? "loaded" : "blurry"}`}
      style={{
        backgroundImage: `url(${src})`,
        transition: "filter 0.3s ease-out, background-image 0.3s ease-out",
      }}
      {...props}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundImage = `url(${overlaySrc})`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundImage = `url(${src})`)
      }
    ></div>
  );
};

export default BlurryBackgroundImg;
