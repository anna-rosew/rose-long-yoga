import React from "react";

import "../styles/partials/_blog-content.scss";
import exitIcon from "../styles/imgs/icons/exit.png";

export default function CaptionsModal({ closeModal }) {
  return (
    <div className="CaptionsModal">
      <div className="modal-container">
        <div className="exit-container">
          <button
            aria-label="Close"
            className="close"
            onClick={() => closeModal(false)}
          >
            <img className="exit-icon" alt="Exit Icon" src={exitIcon} />
          </button>
        </div>
        <div classNae="header">
          <h2>Live Video Captions</h2>
        </div>
        <div className="main-container">
          <p>
            To <strong>turn-on live audio captions</strong> please follow the
            links to instructions below for your browser/device:
          </p>

          <ul>
            <li>
              <a
                className="captions-instructions-link"
                href="https://support.google.com/chrome/answer/10538231?hl=en-GB"
                alt="Instructions to enable live captioning on Google Chrome"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <span>
                Apple (Safari)
                <a
                  className="captions-instructions-link"
                  href="https://support.apple.com/en-gb/guide/iphone/iphe0990f7bb/ios"
                  alt="Instructions to enable live captioning on Apple iPhone and iPad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iPhone & iPad
                </a>{" "}
                |{" "}
                <a
                  className="captions-instructions-link"
                  href="https://support.apple.com/en-gb/guide/mac-help/mchldd11f4fd/mac#:~:text=Turn%20Live%20Captions%20on%20or,may%20need%20to%20scroll%20down.)&text=Turn%20Live%20Captions%20on%20or%20off."
                  alt="Instructions to enable live captioning on Mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mac
                </a>
              </span>
            </li>
            <li>
              <a
                className="captions-instructions-link"
                href="https://www.zdnet.com/article/how-to-turn-on-live-captions-in-windows-11/"
                alt="Instructions to enable live captioning on Windows"
                target="_blank"
                rel="noopener noreferrer"
              >
                Windows
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
