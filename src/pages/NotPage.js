import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import sunshine from "../styles/imgs/icons/sunshine.svg";

export default function NotPage() {
  return (
    <div className="NotPage">
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>404</h1>
        <p>
          Ah, I think we may be lost. The page you're looking for doesn't exist.
        </p>
        <img src={sunshine} alt="sunshine" />
        <Link to="/home">
          <button className="general-button">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}
