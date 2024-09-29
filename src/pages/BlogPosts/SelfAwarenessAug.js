import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import SelfAwarenessImg from "../../styles/imgs/blog/self_awareness_blog.png"; // Example image path
import SelfAwarenessImg2 from "../../styles/imgs/blog/self_awareness_blog2.png"; // Example image path
import { Link } from "react-router-dom";
import arrowIcon from "../../styles/imgs/icons/blog-arrow.svg"; 

export default function SelfAwarenessAug() {
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
        <h1>The Challenge of Deepening Your Self-Awareness</h1>
        <p className="article-summary">
          When you turn towards yourself with a willingness to listen, you may
          hear the things that you’ve been consciously or unconsciously
          avoiding. This can be uncomfortable! Keep your conscious practices
          alive in the day, they will hold you when you feel wobbly. They offer
          an alternative choice when you have the urge to distract yourself
          rather than allow what's moving to move. Below are 7 helpful practices
          for staying present to yourself and allowing what's moving to move.
          When you have that urge to reach for distractions, remember you have a
          choice.
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={SelfAwarenessImg}
            className="blog-cover-img"
            alt="Person in nature reflecting."
          />
          <div className="overlay-row">
            <div style={{ display: "flex" }}>
              <div className="column" style={{ marginRight: "20px" }}>
                <p>Written by</p>
                <p>
                  <strong>Rose Long</strong>
                </p>{" "}
                {/* Replace with actual author */}
              </div>
              <div className="column">
                <p>Published on</p>
                <p>
                  <strong>14 Aug 2024</strong>
                </p>{" "}
                {/* Replace with actual date */}
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
        <div className="article-intro-short">
          <div className="article-intro-text">
            <h2 className="article-subheading" id="introduction">
              Introduction
            </h2>
            <p>
              Awareness is the key - being aware of your thoughts and emotions,
              being aware of your energy levels, how you feel in your body, all
              of this will bring a deeper awareness of your cravings and your
              choices.
            </p>
            <p>
              This relates to what you eat and drink, but also what you take in
              and digest at other levels - what you feed your mind affects your
              emotions (directly through the nervous system and endocrine
              system). And in a more abstract way, what you feed your soul
              affects how you feel in your own skin (think how different you
              feel walking in nature compared to sitting at your computer or
              scrolling on your phone).
            </p>
            <p>
              Health is a relationship with yourself - and like all healthy
              relationships, it requires time and the willingness to listen,
              even when it's uncomfortable. Get to know yourself; there's a lot
              more going on than meets the eye!
            </p>
          </div>
        </div>
        <div className="main-article">
          <p>
            The breath will carry you through - when in doubt, breathe. When
            you're struggling, breathe. When you're craving to eat something you
            know you want to let go of, breathe. When you're feeling difficult
            emotions, breathe. When your thoughts are driving you crazy,
            breathe. When you don't think you have time to do this, breathe. The
            breath is your greatest ally in life, experience its power for
            yourself.
          </p>
          <p>
            When you feel stuck, breathe deeply and ask yourself, 'What small
            steps can I take today?'
          </p>
        </div>
        <div className="article-section" id="self-awareness">
          <h2 className="article-subheading">
            The Challenge of Deepening Your Self-Awareness
          </h2>
          <p>
            When you turn towards yourself with a willingness to listen, you may
            hear the things that you’ve been consciously or unconsciously
            avoiding. This can be uncomfortable! Keep your conscious practices
            alive in the day; they will hold you when you feel wobbly. They
            offer an alternative choice when you have the urge to distract
            yourself rather than allow what's moving to move. By distraction,
            I'm thinking snacking, procrastination, social media, TV, internet
            surfing, shopping, busyness, or whatever distractions you turn to.
          </p>
          <p>
            Below are 7 helpful practices for staying present to yourself and
            allowing what's moving to move. When you have that urge to reach for
            distractions, remember you have a choice. Your response-ability is
            to choose how to respond. This is an ability that you master through
            practice. Progress, not perfection!
          </p>
          <ul className="article-list">
            <li>
              Left nostril breathing - as simple as it sounds, close off the
              right nostril with your thumb, fingers pointing to the sky, and
              breathe long and deep. Begin to extend the exhale. If you need a
              mantra to anchor the mind, try 'So Hum', which translates as
              'inhale, exhale'. This mantra has the power to open you to your
              inner guide, your intuitive wisdom.
            </li>
            <li>Walking in nature. You know it works!</li>
            <li>
              Grounding - bare foot walking on grass, staying present to the
              connection with the Earth. If that’s not possible, sitting with
              eyes closed and making a conscious connection with the earth
              beneath you - feel yourself anchored into the Earth's core, this
              will allow you to feel held and centered. In both cases, you can
              exhale your discomfort down into the Earth and inhale fresh Spring
              energy up from the Earth.
            </li>
            <li>
              Breath of Fire. This is one of the fastest ways I know to shift my
              mood and bring me back to the here and now. It also has many great
              health benefits, very cleansing! Here’s a 5 mins video you can
              use.
            </li>
            <li>
              Stroking each arm. Sit up and ground through the sit bones. Close
              your eyes and breathe deeply. Start by slowly stroking down your
              left arm, and then your right. Go between the two until you feel
              an inner shift. If you feel for a mantra use, 'this too shall
              pass.'
            </li>
            <li>
              Shake it out! It takes a few minutes to move that gorgeous body of
              yours and allow the knots and niggles to dissolve. Put on a funky
              track if you need to get yourself in the mood.
            </li>
            <li>
              Journal - write it down so it’s on the paper and not in your head.
              Keep writing until you feel that inner shift.
            </li>
          </ul>
        </div>
        <div className="article-highlight">
          <p>
            When you turn towards yourself with a willingness to listen, you may
            hear the things that you’ve been consciously or unconsciously
            avoiding. This can be uncomfortable! Keep your conscious practices
            alive in the day, they will hold you when you feel wobbly.
          </p>
        </div>
        <div className="featured-image">
          <div className="featured-image-container">
            <BlurryImage
              src={SelfAwarenessImg2}
              className="blog-feature-img"
              alt="Reflective nature scene."
            />
          </div>
          <p className="image-caption">
            Image courtesy of{" "}
            <a href="https://unsplash.com" rel="noopener noreferrer">
              Unsplash
            </a>
          </p>
        </div>
      </div>
      <div className="article-bottom-buttons">
        <Link to="/blog" className="back-button">
          MORE CONTENT
          <img src={arrowIcon} className="blog-arrow" alt="Arrow" />
        </Link>
        <Link to="/work" className="journey-button">
          START YOUR JOURNEY
        </Link>
      </div>
    </div>
  );
}
