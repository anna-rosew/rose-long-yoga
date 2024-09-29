import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import FoodImg from "../../styles/imgs/blog/risk_blog.png";
import FoodImg2 from "../../styles/imgs/blog/risk_blog2.png";
import { Link } from "react-router-dom";

export default function RiskAug24() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="container">
      <div className="blog-article">
        <h3 className="subtitle">
          <strong>ARTICLE: </strong>SHORT READ
        </h3>
        <h1>Managing Expectations: A Path to Inner Peace</h1>
        <p className="article-summary">
          Explore how letting go of expectations can pave the way for a more
          peaceful and fulfilling life, guiding us towards our true visions
          without the burden of disappointment.
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={FoodImg}
            className="blog-cover-img"
            alt="The silhouette of a woman standing on rock in the dusk looking up into a starry sky."
          />
          <div className="overlay-row">
            <div style={{ display: "flex" }}>
              <div className="column" style={{ marginRight: "20px" }}>
                <p>Written by</p>
                <p>
                  <strong>Rose Long</strong>
                </p>
              </div>
              <div className="column">
                <p>Published on</p>
                <p>
                  <strong>24 Aug 2024</strong>
                </p>
              </div>
            </div>
            <div className="button-column">
              {copied && <p className="copied-message">Copied!</p>}
              <button className="copy-button" onClick={handleCopy}>
                COPY LINK
              </button>
            </div>
          </div>
        </div>
        <p className="image-caption">
          Image Courtesy of Neom via{" "}
          <a
            href="https://unsplash.com/photos/a-person-standing-in-the-middle-of-a-desert-at-night-GCrvnNHJAMo"
            alt="unsplash"
            rel="nonreferrer"
          >
            Unsplash
          </a>
        </p>

        <div className="article-intro-short">
          <div className="article-intro-text">
            <p>
              It's common that when we commit to something, anything (or
              anyone), we consciously or unconsciously create an expectation.
            </p>
            <p>
              Pause, come back to the breath, and look at where you’re attached
              to expectations in an area of your life. Someone once told me that
              expectations are resentments in waiting. I find this to be largely
              true.
            </p>
            <p>
              Projecting an idea of what I'd like to happen in the future sets
              me up for disappointment, judgment, and resignation.
            </p>
          </div>
        </div>
        <div className="main-article">
          <p>
            Why? Because life rarely turns out the way I think it's going to. I
            find if life does turn out the way I thought it would, I'm usually
            in my critical/shame story, gathering evidence about myself or
            another and enjoying the satisfaction of being right. Painful and
            yet strangely satisfying!
          </p>
          <p>
            To me, expectations are different from a vision. Where a vision is a
            guiding star, something that I move towards to orientate myself,
            (like a compass), expectations are a quiet fix - if that happens
            I'll be happy/successful/attractive/healthy/add your own version.
          </p>
        </div>
        <div className="article-section" id="expectations-vision">
          <h2 className="article-subheading">Expectations vs. Vision</h2>
          <p>
            Holding a vision allows space for life to unfold. Expectations tend
            to bring attachment, pressure, and control. Pause and notice whether
            your expectations are creating any pressure, disappointment, upset,
            or control. If they are, breathe deep and let them go. You don&#39;t
            need to hold onto them. You created them, you can release them.
          </p>
        </div>
        <div className="article-section" id="building-on-foundation">
          <h2 className="article-subheading">Building on Your Foundation</h2>
          <p>
            In the space you create, bring your vision for yourself to mind.
            Breathe deep and see your vision glowing like a star. In what
            direction is it drawing you?
          </p>
          <p>
            Now look at what you’re already doing that is carrying you in the
            direction of your vision. Get specific. Identify what has supported
            you, and notice what choices have brought learning and growth - they
            may have been the ones that caused you pain and discomfort.
          </p>
        </div>
        <div className="article-highlight">
          <p>
            Ask yourself how you can build on your foundation to keep moving in
            the direction of your vision. Note down any helpful reminders,
            pointers, insights, and actions.
          </p>
        </div>
        <div className="featured-image">
          <div className="featured-image-container">
            <BlurryImage
              src={FoodImg2}
              className="blog-feature-img"
              alt="Conceptual image of a person navigating their path under a starry sky."
            />
          </div>
          <p className="image-caption">
            Image Courtesy of Jan Tenneberg via{" "}
            <a
              href="https://unsplash.com/photos/blue-wooden-door-tVIv23vcuz4"
              alt="unsplash"
              rel="nonreferrer"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
      <div className="article-bottom-buttons">
        <Link to="/blog" className="back-button">
          MORE CONTENT
        </Link>
        <Link to="/work" className="journey-button">
          START YOUR JOURNEY
        </Link>
      </div>
    </div>
  );
}
