import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import TemptationImg from "../../styles/imgs/blog/voices_blog.png";
import SupportImg from "../../styles/imgs/blog/voices_blog2.png";
import { Link } from "react-router-dom";

export default function VoicesArticle() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
        <h1>Understanding and Managing the Voices in Your Head</h1>
        <p className="article-summary">
          Discover how recognizing and managing the inner voices that tempt and
          undermine us can lead to greater self-awareness and personal growth.
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={TemptationImg}
            className="blog-cover-img"
            alt="Open packet of biscuits on the counter."
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
                  <strong>14 Aug 2024</strong>
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
          Image Courtesy of Brandi Redd via{" "}
          <a
            href="https://unsplash.com/photos/pile-of-stones-selective-focus-photography-sk3zYkMbySk"
            alt="unsplash"
            rel="nonreferrer"
          >
            Unsplash
          </a>
        </p>
        <div className="article-intro-short">
          <div className="article-intro-text">
            <p>
              You’re tired, hungry, and stressed. You walk into the kitchen.
              There’s an open packet of biscuits on the counter (replace
              biscuits with your own version of temptation). And then that voice
              in your head pipes up justifying why, on this occasion, a biscuit
              is a good idea.
            </p>
            <p>
              For each of us, that voice will have its own unique tone and will
              have crafted the perfect phrase to convince you of its truth.
            </p>
            <p>
              For me, it says, ‘stop taking yourself so seriously’ (suggests
              self-importance and presses the shame button). Followed by
              something like, ‘you eat so well so much of the time’ (encouraging
              and really rather flattering). The shame/smug combo is
              irresistible to me, I’m off the hook and reaching for the
              biscuits.
            </p>
          </div>
        </div>
        <div className="main-article">
          <p>
            Getting to know the voices that undermine us is a part of our growth
            on the path of life. We all have recurring records that play in
            certain circumstances. Some of these records are downright nasty.
            Some are sneaky. The recurring ones tend to be the unconscious ones,
            and these are often unhelpful to our health, growth, and
            development.
          </p>
          <p>
            Recognizing what voices you’re listening to will give you more
            ability in how you respond in any given moment, allowing you to
            refine your response-ability.
          </p>
        </div>
        <div className="article-section" id="managing-voices">
          <h2 className="article-subheading">
            Managing the Undermining Voices
          </h2>
          <p>
            It’s advisable not to go to war with the voices that undermine you -
            it’s hard work and as they say, 'what you resist persists’. I like
            to acknowledge that those voices were the best I could do at the
            time I let them in… probably back in my childhood (up to 6 years
            old), when my brain was in theta mode, a sponge that soaked up the
            messages around me.
          </p>
          <p>
            Thanking them when they pipe up seems to create space, and in that
            space, another voice can be heard - the one that’s in the here and
            now, not stuck in the past.
          </p>
        </div>
        <div className="article-section" id="response-ability">
          <h2 className="article-subheading">Developing Response-Ability</h2>
          <p>
            If I still acted on all the negative voices in my head, I’d still be
            addicted to quick fixes as a means of managing my internal
            discomfort. I’d still be trying to save the world to prove my worth
            and feel better about myself, while all the while wondering why I’m
            unhappy and unfulfilled.
          </p>
          <p>
            It takes attention and awareness to keep this practice alive in the
            day. And your daily conscious practices will support you in
            developing your attention and awareness. We can all master the
            ability of how to respond in a given situation.
          </p>
        </div>
        <div className="article-highlight">
          <p>
            I can still fall for the 'stop taking yourself so seriously, you eat
            great most of the time' voice. And that’s OK. I reassure myself that
            if I’m falling for it 10% of the time, and catching myself 90% of
            the time, I’m moving in the direction of health and wellbeing.
            Progress not perfection.
          </p>
        </div>
        <div className="featured-image">
          <div className="featured-image-container">
            <BlurryImage
              src={SupportImg}
              className="blog-feature-img"
              alt="Supportive friends offering help and encouragement."
            />
          </div>
          <p className="image-caption">
            Image Courtesy of Fabrizio Chiaganp via{" "}
            <a
              href="https://unsplash.com/photos/a-circular-design-made-of-sand-on-a-beach-rDwIXsgb2LY"
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
