import React, { useState } from "react";
import "../styles/partials/_buttons.scss";

const ContactButton = () => {
  const [buttonText, setButtonText] = useState("Copy Link");

  const copyToClipboard = () => {
    const currentUrl = window.location.href; // Get current page URL
    navigator.clipboard.writeText(currentUrl).then(
      () => {
        setButtonText("Copied article URL to clipboard!");

        setTimeout(() => setButtonText("Copy URL"), 3000);
      },
      () => {
        setButtonText("Failed to copy");
      }
    );
  };

  return (
    <button className="copy-button" onClick={copyToClipboard}>
      {buttonText}
    </button>
  );
};

export default ContactButton;
