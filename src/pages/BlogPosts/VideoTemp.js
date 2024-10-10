import React from "react";

import "../../styles/Article.css";

import { Link } from "react-router-dom";

export default function VideoTemp() {
  return (
    <div className="container">
      <article className="blog-article video">
        <h3 className="subtitle">
          <strong>VIDEO: </strong>INTERVIEW
        </h3>
        <h1>Mandalas, Yantras & Sacred Geometry with Lynn Hanford-Day</h1>
        <p>
          Published on:<strong>22 AUG 2024</strong>
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
