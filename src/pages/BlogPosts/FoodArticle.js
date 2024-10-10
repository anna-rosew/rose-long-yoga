import React from "react";
import { Link } from "react-router-dom";

import CopyButton from "../../components/CopyButton";

import "../../styles/partials/_blog-content.scss";

import BlurryImage from "../../components/BlurryImage";
import FoodImg from "../../styles/imgs/blog/food_blog.png";
import FoodImg2 from "../../styles/imgs/blog/food_blog2.png";

export default function FoodArticle() {
  return (
    <div className="container">
      <article className="blog-article">
        <div className="article-header">
          <h4 className="subtitle">
            <strong>ARTICLE: </strong>SHORT READ
          </h4>
          <h1>Learning to Make Healthy Choices Around Food</h1>
          <p className="article-summary">
            Discover how self-awareness can transform your health and
            relationship with food. Tune into your thoughts, body, and cravings
            to make nourishing choices. Embrace mindful breathing and focus on
            progress for lasting change.
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
                <CopyButton />
              </div>
            </div>
          </div>
          <p className="image-caption">
            Image Courtsey of Chad Stembridge via{" "}
            <a
              href="https://unsplash.com/photos/green-leafed-plant-in-shallow-focus-photography--8FjF1p-aw0"
              alt="unsplash"
              rel="nonreferrer"
            >
              Unsplash
            </a>
          </p>
        </div>

        <div className="article-intro-short">
          <div className="article-intro-text" id="introduction">
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
        </div>
        <div className="article-highlight">
          <p>
            When you feel stuck breathe deeply and ask yourself, 'what small
            steps can I take today?’.
          </p>
        </div>
        <p>
          Choose what works for you. It’s as simple and as challenging as that.
        </p>
        <p>
          The first step is awareness - become aware of what works for you and
          what doesn't.  And then practice choosing what works.  It is a
          practice, not a destination.
        </p>
        <p>
          Progress not perfection - we've been told 'practice makes perfect',
          but does it?  In my experience life is about progress not perfection. 
          When I'm engaged in the enquiry of how I can progress, I remain open
          and curious.  When I'm attached to finding perfection I become
          judgemental and controlling.
        </p>
        <div className="featured-image">
          <div className="featured-image-container">
            <BlurryImage
              src={FoodImg2}
              className="blog-feature-img"
              alt="Woman doing tree pose outside at sunrise."
            />
          </div>
          <p className="image-caption">
            Image Courtsey of Brooke Larke via{" "}
            <a
              href="https://unsplash.com/photos/variety-of-sliced-fruits-08bOYnH_r_E"
              alt="unsplash"
              rel="nonreferrer"
            >
              Unsplash
            </a>
          </p>
        </div>
        <p>
          Show up and keep it in the day - stay present as much as you can
          today, and you'll learn what there is for you to learn today.  The
          breath is the fastest way to step into the present.
        </p>
        <p>
          When you find yourself ruminating on the past or projecting into the
          future, breathe and come into the here and now... that is where the
          miracle is happening.
        </p>
        <p>
          <strong>What are you committed to today in your explorations?</strong>
        </p>
      </article>
      <div className="blog-bottom-buttons">
        <Link to="/SelfArticle" className="blog-button" role="button">
          MORE CONTENT
        </Link>
        <Link to="/work" className="blog-button" role="button">
          START YOUR JOURNEY
        </Link>
      </div>
    </div>
  );
}
