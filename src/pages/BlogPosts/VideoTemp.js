import React from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import arrowIcon from "../../styles/imgs/icons/blog-arrow.svg";
import { Link } from "react-router-dom";

export default function VideoTemp() {
  return (
    <div className="VideoTemp">
      <div className="container">
        <div className="blog-article">
          <h3 className="subtitle">
            <strong>VIDEO: </strong>INTERVIEW
          </h3>
          <h1>Mandalas, Yantras & Sacred Geometry with Lynn Hanford-Day</h1>
          <p>
            <strong>22 AUG 2024</strong>
          </p>
          <p className="article-summary">
            Join Rose Long in conversation with visual artist Lynn Handford-Day,
            expanding on the ancient practices behind her deeply intricate work
            and the stories at the root of her practice.
          </p>
          <div className="player-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1001545755?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="960"
              height="540"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              title="vimeo player"
            ></iframe>
          </div>
        </div>
        <div className="article-bottom-buttons">
          <Link to="/SelfArticle" className="back-button">
            MORE CONTENT
            <img src={arrowIcon} className="blog-arrow" alt="Arrow" />
          </Link>
          <Link to="/work" className="journey-button">
            START YOUR JOURNEY
          </Link>
        </div>
      </div>
    </div>
  );
}
