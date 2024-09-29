import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import FoodImg from "../../styles/imgs/blog/food_blog.png";
import FoodImg2 from "../../styles/imgs/blog/food_blog2.png";
import { Link } from "react-router-dom";

export default function ShortArticleTemplate() {
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
        <h1>Learning to Make Healthy Choices Around Food</h1>
        <p className="article-summary">
          Explore Rose Long's remarkable journey of profound transformation and
          alignment with the earth's rhythm on the Mind Over Matter Podcast,
          where her story serves as a beacon of inspiration for all seeking
          deeper connection and truth.{" "}
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={FoodImg}
            className="blog-cover-img"
            alt="Woman doing tree pose outside at sunrise."
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
                  <strong>01 Aug 2024</strong>
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
              and digest at other levels - what you feed your mind effects your
              emotions (directly through the nervous system and endocrine
              system).  And in a more abstract way, what you feed your soul
              effects how you feel in your own skin (think how different you
              feel walking in nature to sitting at your computer, or scrolling
              on your phone).
            </p>
            <p>
              Health is a relationship with yourself - and like all healthy
              relationships it requires time, and the willingness to listen,
              even when it's uncomfortable.  Get to know yourself, there's a lot
              more going on than meets the eye!
            </p>
          </div>
        </div>
        <div className="main-article">
          <p>
            The breath will carry you through - when in doubt, breathe.  When
            you're struggling, breathe.  When you're craving to eat something
            you know you want to let go of, breathe.  When you're feeling
            difficult emotions, breathe.  When your thoughts are driving you
            crazy, breathe.  When you don't think you have time to do this,
            breathe.  The breath is your greatest ally in life, experience its
            power for yourself.
          </p>
          <p>
            When you feel stuck breathe deeply and ask yourself, 'what small
            steps can I take today?’.
          </p>
        </div>
        <div className="article-section" id="self-awareness">
          <h2 className="article-subheading">
            The Challenge of Deepening your Self Awareness
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
        <div className="article-section" id="inside-out">
          <h2 className="article-subheading">
            Moving from Outside In to Inside Out
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
        <div className="article-highlight">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
        </div>
        <div className="featured-image">
          <div className="featured-image-container">
            <BlurryImage
              src={FoodImg2}
              className="blog-feature-img"
              alt="Woman doing tree pose outside at sunrise."
            />
          </div>
          <p className="image-caption">
            Image Courtsey of Megan via{" "}
            <a
              href="https://dribbble.com/shots/23565113-Minimal-blog-post-Untitled-UI"
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
