import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import FoodImg from "../../styles/imgs/blog/food_blog.png"; // Placeholder for actual image path
import FoodImg2 from "../../styles/imgs/blog/food_blog2.png"; // Placeholder for actual image path
import arrow from "../../styles/imgs/icons/arrow-next.svg";
import { Link } from "react-router-dom";

export default function SelfLoveArticle() {
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
        <h1>Self Love is Revolutionary</h1>
        <p className="article-summary">
          Discover the transformative power of self-love and how embracing it
          can lead to a profound shift in your life. Explore how self-love
          transcends societal expectations and fosters genuine, sustainable
          well-being.
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={FoodImg} 
            className="blog-cover-img"
            alt="Image related to self-love"
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
                onClick={() => onClick("revolutionary-nature")}
              >
                The Revolutionary Nature of Self Love
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("ordinary-miracles")}
              >
                Ordinary Miracles
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("self-love-practice")}
              >
                Practicing Self Love
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
              I have to admit to finding suggestions that I learn to love myself
              rather irritating. But there is something in the concept of
              self-love that I welcome, and that's the revolutionary nature of
              it. To me, self-love is allowing myself to do the things in life
              that make me glad to be alive. And at a deeper level, doing the
              things (or not doing the things) that make me feel alive. Those
              ways of spending my time that infuse me with life, that fill me
              with gratitude and a sense of quiet wonder and well-being. When I
              allow myself to do these things, I experience myself and life in a
              different way, one which has love and not fear at its foundation.
            </p>
            <p>
              To my surprise, I've discovered the things that make me feel this
              way are not the big plans, expensive trips, and remarkable
              achievements. Instead, they are the ordinary, everyday things that
              remind me of the extraordinary miracle of being alive. Think about
              it for a moment - you're alive! That is just flipping
              extraordinary.
            </p>
          </div>
        </div>
        <div className="main-article">
          <h3 id="revolutionary-nature">
            The Revolutionary Nature of Self Love
          </h3>
          <p>
            How is self-love revolutionary? Well, it requires you to find out
            what works for you in life, and give yourself permission to do what
            works for you. It doesn't always fit in with other people's ideas,
            it can mean breaking with mainstream culture, and may mean stepping
            away from aspects of your family culture and conditioning. You can't
            pick up a book or watch a video to reassure yourself that you've
            found the solution (although that can be helpful at times). You can
            only know through your direct experience. You will recognize that
            you are the expert of your life; nobody knows how to live your life
            except you. To me, that is radical. And acting on that is
            revolutionary.
          </p>

          <h3 id="ordinary-miracles">Ordinary Miracles</h3>
          <p>
            I encourage you to keep finding what works for you and choosing it.
            Keep building a foundation of love in your life by making loving
            choices for yourself. Looking after your beautiful body is a
            tangible way of doing this and sets a foundation of love in your
            life. Practice being kind, accepting, and compassionate to yourself.
            Practice giving yourself time for those things that bring you joy,
            peace, and effortless gratitude. And when you do, the most
            extraordinary thing will happen—you will transform from the inside
            out. And that transformation will ripple out into the world around
            you.
          </p>
          <div className="featured-image">
            <div className="featured-image-container">
              <BlurryImage
                src={FoodImg2}
                className="blog-feature-img"
                alt="Different types of natural sweeteners."
              />
            </div>
            <p className="image-caption">
              Image Courtesy of Towfiqu Barbhuiya via{" "}
              <a
                href="https://unsplash.com/photos/person-holding-white-ceramic-mug-N2n01mhpbmg"
                alt="unsplash"
                rel="nonreferrer"
              >
                Unsplash
              </a>
            </p>
          </div>

          <h3 id="self-love-practice">Practicing Self Love</h3>
          <p>We do it for ourselves, and then we discover everyone benefits.</p>
          <div className="article-highlight">
            <p>
              "Do not try to serve the whole world or do anything grandiose.
              Instead, create a clearing in the dense forest of your life and
              wait there patiently, until the song that is yours alone to sing
              falls into your open cupped hands and you recognize and greet it.
              Only then will you know how to give yourself to the world so
              worthy of rescue."
            </p>
            <p className="poem-author">~ Martha Postlethwaite</p>
          </div>

          <h3 id="conclusion">Conclusion</h3>
          <p>
            In committing to this Cleanse, you have taken radical, revolutionary
            action. I salute you, Comrade! And I encourage you to keep finding
            what works for you and choosing it. Keep building a foundation of
            love in your life by making loving choices for yourself. Looking
            after your beautiful body is a tangible way of doing this and sets a
            foundation of love in your life. Practice being kind, accepting, and
            compassionate to yourself. Practice giving yourself time for those
            things that bring you joy, peace, and effortless gratitude. And when
            you do, the most extraordinary thing will happen—you will transform
            from the inside out. And that transformation will ripple out into
            the world around you.
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
