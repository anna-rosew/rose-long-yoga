import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import arrow from "../../styles/imgs/icons/arrow-next.svg";
import { Link } from "react-router-dom";

export default function HiddenTreasure() {
  const [copied, setCopied] = useState(false);

  const onClick = (sectionId) => {
    window.location.href = `#${sectionId}`;
  };

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
          <strong>ARTICLE: </strong>LONG READ
        </h3>
        <h1>Hidden Treasure</h1>
        <p className="article-summary">
          Discover how life’s challenges can be transformed into opportunities
          for growth and learning, revealing the hidden treasures within
          difficult experiences.
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src="path-to-your-image"
            className="blog-cover-img"
            alt="Cover image representing hidden treasures."
          />
          <div className="overlay-row">
            <div style={{ display: "flex" }}>
              <div className="column" style={{ marginRight: "20px" }}>
                <p>Written by</p>
                <p>
                  <strong>Author Name</strong>
                </p>
              </div>
              <div className="column">
                <p>Published on</p>
                <p>
                  <strong>Publication Date</strong>
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
          Image Courtesy of [Photographer Name] via{" "}
          <a href="image-source-url" alt="unsplash" rel="nonreferrer">
            Unsplash
          </a>
        </p>
        <div className="article-intro">
          <div className="contents">
            <h3>CONTENTS:</h3>
            <ul>
              <li
                className="contents-link"
                onClick={() => onClick("changing-education-model")}
              >
                Changing the Education Model
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("life-as-teacher")}
              >
                Life as the Real Teacher
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("overcoming-victimhood")}
              >
                Overcoming Victimhood
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("example-cancer-diagnosis")}
              >
                A Personal Example: Cancer Diagnosis
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("finding-hidden-treasure")}
              >
                Finding Your Hidden Treasure
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("final-reflections")}
              >
                Final Reflections
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
            </ul>
          </div>
          <div className="article-intro-text" id="changing-education-model">
            <h2 className="article-subheading">Changing the Education Model</h2>
            <p>
              Many of us had an education based on the model of the 'expert'
              standing at the front of the group to share their expertise. This
              model of education is largely information-based, focusing on the
              accumulation of knowledge and the testing of that knowledge.
              Success or failure is judged externally, often in comparison to
              others, leaving us with a belief that teaching comes only from
              experts and that others can determine our self-worth.
            </p>
            <p>
              However, as technology advances, this model is shifting, though
              many of us still carry the remnants of this belief system. We may
              continue to compare ourselves to others and allow external
              evaluators to define our success.
            </p>
          </div>
        </div>
        <div className="main-article">
          <h3 id="life-as-teacher">Life as the Real Teacher</h3>
          <p>
            When we open ourselves to life, we recognize that every situation is
            an opportunity for learning and growth. Life itself becomes the real
            teacher, offering us endless opportunities for development in every
            waking moment.
          </p>
          <p>
            By viewing every situation as a teacher, we shift from a mindset of
            failure to one of continuous learning. This perspective transforms
            our experience of life from victimhood to one of opportunity and
            curiosity.
          </p>

          <h3 id="overcoming-victimhood">Overcoming Victimhood</h3>
          <p>
            The sense of being a victim to life can be replaced with curiosity
            and a willingness to listen. Although old patterns of feeling
            victimized may arise, we can recognize them for what they are and
            avoid feeding into them, thereby avoiding getting stuck.
          </p>
          <p>
            In my experience, life often brings what I need, though it may not
            always be packaged in a way that is immediately appealing. It takes
            presence and awareness to look beyond initial judgments of 'good' or
            'bad' and to see the true value in what life is offering.
          </p>

          <h3 id="example-cancer-diagnosis">
            A Personal Example: Cancer Diagnosis
          </h3>
          <p>
            One of the biggest examples of this in my life was a cancer
            diagnosis. Having just moved to Liverpool and preparing for a new
            life, the diagnosis was certainly unwelcome. It took time, fear, and
            resistance to eventually accept what life was handing me, but I
            slowly began to see the experience as a teacher.
          </p>
          <p>
            Through practices like yoga, walking in nature, journaling, and
            meaningful conversations, I started to engage with the reality of my
            situation and found that it was not a punishment or a sign of
            failure, but an opportunity for deep learning and growth.
          </p>

          <h3 id="finding-hidden-treasure">Finding Your Hidden Treasure</h3>
          <p>
            What is the hidden treasure for you at this time in your life? What
            challenges are surfacing that feel unwelcome? Can you hold the
            perspective that these challenges hold opportunities for learning
            and growth?
          </p>
          <p>
            When we sit with what feels unwelcome and challenging, it can be
            like walking into the unknown without a map—scary and disorienting.
            In these moments, the breath can anchor you and allow you to soften
            and find your way, while conscious practices help hold you in the
            stream of life and love.
          </p>

          <h3 id="final-reflections">Final Reflections</h3>
          <p>
            We are in this together. None of us are perfect; we are all messy at
            times. But each of us is an expert in our own life, and the
            solutions for you can be unlocked from within. Give yourself the
            opportunity to listen inwardly and discover the hidden treasure that
            is waiting for you.
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
