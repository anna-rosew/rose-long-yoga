import React from "react";
import { Link } from "react-router-dom";
import "../styles/CreditsFooter.css";
import Logo from "../styles/imgs/icons/logo_white.svg";
import InstaIcon from "../styles/imgs/icons/insta-footer.svg";
import VimeoIcon from "../styles/imgs/icons/footer-vimeo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="logo-footer">
          <div className="center">
            <a href="/" className="logo-link">
              <img
                src={Logo}
                alt="Rose Long Logo"
                className="site-logo-footer"
              />
            </a>
            <div className="socials">
              <a
                href="https://www.instagram.com/lifechangesrose/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-footer"
              >
                <img src={InstaIcon} alt="Instagram" />
              </a>
              <a
                href="https://vimeo.com/roselong"
                target="_blank"
                rel="noopener noreferrer"
                className="social-footer"
              >
                <img src={VimeoIcon} alt="Vimeo" />
              </a>
            </div>
            <Link to="/contact">
              <button className="footer-button">GET IN TOUCH</button>
            </Link>
            <div className="credits">
              <p>
                Website built by{" "}
                <a
                  href="https://annarosewain.com/"
                  alt="Anna-Rose Wain | Front-end Developer"
                >
                  {" "}
                  Anna-Rose Wain{" "}
                </a>{" "}
                | Artwork by{" "}
                <a
                  href="https://www.sacredintuitiveart.com/about"
                  alt="Sacred Intuitive Art"
                >
                  Lynn Hanford Day - Sacred Intuitive Art
                </a>
              </p>
            </div>{" "}
          </div>
        </div>

        <div className="all-pages">
          <div className="list">
            <h3>services</h3>
            <ul>
              <li>
                <Link to="/groups">Groups Overview</Link>
              </li>
              <li>
                <Link to="/onetoone">One-To-Ones</Link>
              </li>
              <li>
                <Link to="/groups">Online Groups</Link>
              </li>
              <li>
                <Link to="/inperson">In-Person Sessions</Link>
              </li>
              <li>
                <Link to="/retreats">Retreats</Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <h3>about</h3>
            <ul>
              <li>
                <Link to="/approach">Approach</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/qualifications">Qualifications</Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <h3>resources</h3>
            <ul>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/contact">Newsletter</Link>
              </li>
              <li>
                <Link to="/membership">Membership</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
