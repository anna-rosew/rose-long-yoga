import React from "react";
import { Link } from "react-router-dom";

import "../styles/partials/_home.scss";
import "../styles/partials/_blog.scss";

import BlogBlock from "../components/BlogBlock";
import BlurryBackgroundImage from "../components/BlurryBackgroundImg";

export default function Home() {
  const posts = [
    {
      title: "Mandalas, Yantras & Sacred Geometry with Lynn Hanford-Day",
      subtitle: "INTERVIEW",
      className: "post-1",
      description:
        "Join Rose Long as she delves into the ancient practices and stories behind Lynn Hanford-Day's Sacred Intuitive Art.",
      icon: require("../styles/imgs/icons/video-icon.png"),
      postType: "Video",
      link: "/lynninterview",
      date: "08/24",
      img: require("../styles/imgs/blog/lynn_interview_blog.png"),
    },
  ];

  const heroImageSrc = require("../styles/imgs/permanent/maze-hero.png");
  const heroImageOverlaySrc = require("../styles/imgs/permanent/hero-image-overlay.png");

  return (
    <div className="Home">
      <div className="home-header">
        <h1>Breath - Mind - Body</h1>
      </div>

      <div className="mobile-hero"></div>

      <BlurryBackgroundImage
        src={heroImageSrc}
        overlaySrc={heroImageOverlaySrc}
        className="hero-image-container"
      />

      <Link to="/work">
        <button className="general-button button-center">
          Start Your Journey
        </button>
      </Link>
      <div className="mobile-journey-container"></div>

      <div className="blog-home">
        {posts.map((post, index) => (
          <div key={index} className="column">
            <BlogBlock postInfo={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
