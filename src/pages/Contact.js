import React, { useState } from "react";
import "../styles/Contact.css";
import ContactImg from "../styles/imgs/permanent/contact.png";
import newsletterIcon from "../styles/imgs/icons/newsletter.svg";
import BlurryImage from "../components/BlurryImage";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState({ text: "", type: "" }); // { text: string, type: 'success' | 'error' }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Please provide a name.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = "Please provide a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Please provide a message.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const apiKey = "insert-api-key";
        const url = "https://api.brevo.com/v3/smtp/email";

        const response = await axios.post(
          url,
          {
            sender: { name: formData.name, email: "info@rose-long.com" },
            to: [{ email: "info@rose-long.com", name: "Rose Long" }],
            subject: formData.subject,
            htmlContent: `
              <html>
                <body>
                  <p><strong>Name:</strong> ${formData.name}</p>
                  <p><strong>Email:</strong> ${formData.email}</p>
                  <p><strong>Subject:</strong> ${formData.subject}</p>
                  <p><strong>Message:</strong></p>
                  <p>${formData.message}</p>
                </body>
              </html>
            `,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "api-key": apiKey,
            },
          }
        );

        if (response.status === 200) {
          console.log("Sent!");
          displayMessage(
            "Thank you for getting in touch! I aim to get back to you within 2 working days.",
            "success"
          );
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      } catch (error) {
        console.error("Error sending data to Brevo API", error);
        displayMessage(
          "There was an error sending your message. Please try again.",
          "error"
        );
      }
    }
  };

  const displayMessage = (text, type) => {
    console.log(`Displaying message: ${text}`); // Debug log
    setMessage({ text, type });
    setTimeout(() => {
      console.log(`Clearing message: ${text}`); // Debug log
      setMessage({ text: "", type: "" });
    }, 5000); // Clear message after 5 seconds
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="heading-container">
          <h1>Contact</h1>
        </div>
        <div className="grid grid-contact">
          <div className="forms-container">
            <div className="contact-form-container">
              <h2>Get In Touch</h2>
              <p>
                If you'd like to book a class, workshop, or retreat, or have any
                questions, please don't hesitate to reach out.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {formErrors.name && (
                      <span className="error">{formErrors.name}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <span className="error">{formErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      autoComplete="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {formErrors.message && (
                      <span className="error">{formErrors.message}</span>
                    )}
                  </div>

                  <button type="submit" className="general-button">
                    Submit
                  </button>

                  {message.text && (
                    <p
                      className={
                        message.type === "success"
                          ? "success-message"
                          : "error-message"
                      }
                    >
                      <strong>{message.text}</strong>
                    </p>
                  )}
                </div>
              </form>

              <h2 className="newsletter-heading">Stay In Touch</h2>
              <div className="stay-in-touch">
                <img
                  src={newsletterIcon}
                  alt="Newsletter"
                  className="newsletter-icon"
                />
                <div className="newsletter-subscribe">
                  <p>
                    Join for news on classes, workshops, retreats, and free
                    resources/offers. Just add the subject{" "}
                    <strong>"Newsletter sign-up"</strong> to your email and
                    you'll be added to the list.
                  </p>
                </div>
              </div>

              <a href="mailto:info@rose-long.com">
                <button className="general-button">SEND AN EMAIL</button>
              </a>
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
