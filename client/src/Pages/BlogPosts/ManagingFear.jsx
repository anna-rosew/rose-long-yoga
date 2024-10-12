import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import FoodImg from "../../styles/imgs/blog/food_blog.png"; // Placeholder for actual image path
import FoodImg2 from "../../styles/imgs/blog/food_blog2.png"; // Placeholder for actual image path
import arrow from "../../styles/imgs/icons/arrow-next.svg";
import { Link } from "react-router-dom";

export default function ManagingFear() {
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
        <h1>Managing Fear Through Connection with the Body and Earth</h1>
        <p className="article-summary">
          Discover how grounding practices can help manage fear and reconnect
          with the body and Earth from a yogic perspective.
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={FoodImg} // Use appropriate image
            className="blog-cover-img"
            alt="Example image related to managing fear"
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
                  <strong>Date</strong>
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
          Image Courtesy of [Photographer] via{" "}
          <a href="https://unsplash.com/" alt="unsplash" rel="nonreferrer">
            Unsplash
          </a>
        </p>
        <div className="article-intro">
          <div className="contents">
            <h3>CONTENTS:</h3>
            <ul>
              <li
                className="contents-link"
                onClick={() => onClick("introduction")}
              >
                Introduction
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("body-connection")}
              >
                Connection with the Body
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("fear-as-indicator")}
              >
                Fear as an Indicator
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("grounding-practices")}
              >
                Grounding Practices
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("conclusion")}
              >
                Conclusion
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
            </ul>
          </div>
          <div className="article-intro-text" id="introduction">
            <h2 className="article-subheading">Introduction</h2>
            <p>
              Ken Robinson said that for him, the body was a vehicle for
              transporting his mind from one place to another, one meeting to
              another. This was in his famous TED talk, "School Kills
              Creativity," where he discusses the absence of the human body in
              our education system.
            </p>
            <p>
              In the yogic tradition, the body, not the mind, comes first. It is
              the first energy center, 'Manipura' in Sanskrit, meaning root
              support. With this perspective, the body is our connection to the
              Earth, our foundation. And food is the fuel for our bodies that
              the Earth produces for us. We are what we eat, so you could say
              our bodies are Earth bodies.
            </p>
            <p>
              It is fostering this connection between our individual body and
              the body of the Earth that brings us a sense of stability, safety,
              and belonging.
            </p>
            <BlurryImage
              src={FoodImg2} // Use appropriate image
              className="article-image"
              alt="Image related to body and Earth connection"
            />
          </div>
        </div>
        <div className="main-article">
          <h3 id="body-connection">Connection with the Body</h3>
          <p>
            When we become untethered from this root connection, the Yogic
            tradition recognizes that we become more fearful in our lives. I
            know this to be true in my experience; I wonder if you do too?
          </p>
          <p>
            The fear can come in many forms—financial insecurity, fear of loss,
            failure, fear of being alone, fear of death. In the yogic tradition,
            fear is an indicator to come back to the body and back to the
            Earth—we literally ground the fear so we can be present and clarify
            what is needed in the here and now.
          </p>

          <h3 id="fear-as-indicator">Fear as an Indicator</h3>
          <p>
            When we are not aware of our bodies, fear rises up into the other
            energy channels, becoming emotion, influencing our actions,
            affecting our relationships, how we communicate, and how we perceive
            ourselves and others.
          </p>
          <p>
            When we forget that fear is a signal to ground ourselves in the
            body, with the Earth, we can easily let the mind dominate, hoping
            like hell we'll figure a way out of our fear. Take financial
            insecurity—that's going to get you busy if you don't remember to
            ground and come back to the here and now.
          </p>

          <h3 id="grounding-practices">Grounding Practices</h3>
          <p>
            When you don't recognize fear as a reminder to come back to the body
            and the Earth, it will drive you away from your body. My fear of
            being worthless drove me into the world, desperate to prove my worth
            through work. My body paid the price.
          </p>
          <p>
            If your fears remain unchecked, they can divert you from your path
            of health and well-being. Take some time to reflect on how this has
            shown up for you in your life. Look at how it may be running today
            and how it might show up in the future.
          </p>
          <p>
            What is a practice you can take on to ground you in the body and the
            Earth when you're fearful (think stressed, anxious, worried,
            alarmed, panicked)? If something doesn't pop up, here are some
            suggestions:
          </p>
          <ul>
            <li>
              Stopping, standing, softening the knees, holding the hands on the
              lower abdomen, breathing, focusing on the body, feeling your feet
              on the ground.
            </li>
            <li>
              Barefoot walking is a great way to ground the energy of fear.
            </li>
            <li>Gardening.</li>
            <li>Cooking with delicious veggies from the Earth.</li>
            <li>A walk in a park or in nature.</li>
          </ul>
          <p>
            When you're feeling fear, know that the first step is to pause, and
            prioritize coming back to the body, back to the breath, and
            grounding down into the Earth. Release the energy of fear down, let
            it connect you, not disconnect you from your foundation.
          </p>
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
    </div>
  );
}
