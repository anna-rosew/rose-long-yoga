import React from "react";

import "../styles/partials/_blog.scss";

import VimeoIcon from "../styles/imgs/icons/vimeo-black.svg";
import InstaIcon from "../styles/imgs/icons/insta-black.svg";

export default function ContactRose() {
  return (
    <div className="contact">
      <div className="container">
        <div className="heading-container">
          <h1>Get in Touch with Rose.</h1>
        </div>
        <div className="grid-contact">
          <div className="forms-container">
            <div className="contact-form-container">
              <p>
                If you'd like to{" "}
                <strong>book a class, workshop, or retreat</strong>, or have any
                questions, please don't hesitate to reach out.
              </p>
              <p>
                I will get back to you <strong>within 2 working days!</strong> I
                look forward to hearing back from you.
              </p>
            </div>
          </div>
          <div className="email-address">
            <div className="email">
              <a href="mailto:info@rose-long.com?subject=Inquiry&body=Hello, I would like to know more about...">
                <h2 className="email-link">info@rose-long.com</h2>
              </a>
            </div>
            <div className="socials">
              <a
                href="https://www.instagram.com/lifechangesrose/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-footer"
                alt="Instagram Link"
              >
                <img src={InstaIcon} alt="Instagram" />
              </a>
              <a
                href="https://vimeo.com/roselong"
                target="_blank"
                rel="noopener noreferrer"
                className="social-footer"
                alt="Vimeo Link"
              >
                <img src={VimeoIcon} alt="Vimeo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
