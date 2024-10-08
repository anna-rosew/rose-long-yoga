import React from "react";

import "../styles/partials/_blog.scss";
import video from "../styles/imgs/icons/video-icon.svg";

import BlogBlock from "../components/BlogBlock";

export default function Blog() {
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
    {
      title: "Learning to Make Healthy Choices Around Food",
      subtitle: "ARTICLE",
      className: "post-2",
      description:
        "Discover how self-awareness can transform your health and relationship with food. Tune into your thoughts, body, and cravings to make nourishing choices. Embrace mindful breathing and focus on progress for lasting change.",
      icon: require("../styles/imgs/icons/article.png"),
      postType: "Article",
      link: "/foodarticle",
      date: "08/24",
      img: require("../styles/imgs/blog/food_blog3.png"),
    },
    {
      title: "Yoga (with Rose Long)",
      subtitle: "RISE: EPISODE 30",
      className: "post-3",
      description:
        "Hosted by Elizabeth Vaughan and Julia Carson - a psychologist and a therapist who walked out of a bar and became good mates in sobriety.",
      icon: require("../styles/imgs/icons/podcast.png"),
      postType: "Podcast",
      link: "/foodarticle",
      date: "05/24",
      img: require("../styles/imgs/photos/woman-beach.png"),
    },
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="blog-heading">Blog</h1>{" "}
        <a
          href="https://www.youtube.com/watch?v=QdZIW0etTkA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cover-post">
            <div className="cover-content">
              <img src={video} className="blog-type-icon" alt="Youtube Video" />
              <h3>MIND OVER MATTER: EPISODE 4</h3>
              <h2>Life Changes with Rose Long.</h2>
              <h3 className="date">05/24</h3>
              <div className="bottom-grid">
                <button
                  className="action-button"
                  href="https://www.youtube.com/watch?v=QdZIW0etTkA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LISTEN
                </button>
                <p className="blog-description">
                  Explore Rose Long's remarkable journey of profound
                  transformation and alignment with the earth's rhythm on the
                  Mind Over Matter Podcast, where her story serves as a beacon
                  of inspiration for all seeking deeper connection and truth.
                </p>
              </div>
            </div>
          </div>
        </a>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="col-md-6">
              <BlogBlock postInfo={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
