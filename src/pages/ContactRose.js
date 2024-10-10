import React from "react";

import "../styles/partials/_blog.scss";

import ContactImg from "../styles/imgs/permanent/contact.png";
import BlurryImage from "../components/BlurryImage";

export default function ContactRose() {
  return (
    <div className="contact">
      <div className="container">
        <div className="heading-container">
          <h1>Contact</h1>
        </div>
        <div className="grid-contact">
          <div className="forms-container">
            <div className="contact-form-container">
              <h2>Get In Touch</h2>
              <p>
                If you'd like to book a class, workshop, or retreat, or have any
                questions, please don't hesitate to reach out.
              </p>
            </div>
          </div>
          <BlurryImage
            src={ContactImg}
            className="contact-image-container img-responsive"
            alt="Woman doing tree pose outside at sunrise."
          />
        </div>
      </div>
    </div>
  );
}
