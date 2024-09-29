import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Home.css";
//import Socials from "../components/Socials";
//import GetInTouch from "../components/GetInTouch";
import BlogBlock from "../components/BlogBlock";
import BlurryBackgroundImage from "../components/BlurryBackgroundImg";
import "../styles/Blog.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {isMobile ? (
        <div className="mobile-home-container">
          <div className="mobile-header">
            <h1>Breath - Mind - Body</h1>
          </div>

          <div className="image-container-mobile">
            <BlurryBackgroundImage
              src={heroImageSrc}
              overlaySrc={heroImageOverlaySrc}
              className="hero-image-container"
            />
          </div>
          <div className="button-center">
            <Link to="/work">
              <button className="general-button">Start Your Journey</button>
            </Link>
          </div>
          <div className="journey-container"></div>
          <div className="blog-home">
            {posts.map((post, index) => (
              <div key={index} className="col-md-6">
                <BlogBlock postInfo={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="desktop">
          <div className="home-header">
            <h1>Breath - Mind - Body</h1>
          </div>
          <BlurryBackgroundImage
            src={heroImageSrc}
            overlaySrc={heroImageOverlaySrc}
            className="hero-image-container"
          />
          <div className="button-center">
            <Link to="/work">
              <button className="general-button">Start Your Journey</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// <Socials /> <GetInTouch link="/contact" />
