import React from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";
import arrowIcon from "../styles/imgs/icons/blog-arrow.svg";

export default function BlogBlock({ postInfo }) {
  const isInternal = postInfo.link.startsWith("/");

  return (
    <div
      className={`${postInfo.className} blog-block`}
      style={{ backgroundImage: `url(${postInfo.img})` }}
    >
      <div className="overlay">
        <div className="block-header">
          <img
            src={postInfo.icon}
            className="blog-type-icon-block"
            alt={postInfo.postType}
          />
          <h3>{postInfo.subtitle}</h3>
          <h2>{postInfo.title}</h2>
        </div>
        <div className="block-content">
          <p className="description">{postInfo.description}</p>
          <h3 className="date">{postInfo.date}</h3>
        </div>
        {isInternal ? (
          <Link to={postInfo.link} className="blog-arrow-link">
            <img src={arrowIcon} className="blog-arrow-icon" alt="Arrow" />
          </Link>
        ) : (
          <a
            className="blog-arrow-link"
            href={postInfo.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={arrowIcon} className="blog-arrow-icon" alt="Arrow" />
          </a>
        )}
      </div>
    </div>
  );
}
