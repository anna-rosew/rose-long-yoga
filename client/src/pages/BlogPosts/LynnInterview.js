import { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/partials/_blog-content.scss";
import transriptIcon from "../../styles/imgs/icons/transcript.png";
import captionsIcon from "../../styles/imgs/icons/captions.png";

import CaptionsModal from "../../components/CaptionsModal";

export default function LynnInterview() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="BlogVideo">
      <div className="container">
        <article className="blog-article">
          <div className="article-header">
            <h4 className="subtitle">
              <strong>VIDEO: </strong>INTERVIEW
            </h4>
            <h1>Mandalas, Yantras & Sacred Geometry with Lynn Hanford-Day</h1>
            <h4 className="date">08/24</h4>
            <p className="article-summary">
              Join Rose Long in conversation with visual artist Lynn
              Handford-Day, expanding on the ancient practices behind her deeply
              intricate work and the stories at the root of her practice.
            </p>
          </div>
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
          <div className="accessibility-buttons">
            <div className="accessibility-video-button" role="button">
              <img className="icon" src={transriptIcon} alt="transcript-icon" />
              TRANSCRIPT
            </div>
            <div
              className="accessibility-video-button"
              role="button"
              onClick={() => setOpenModal(true)}
            >
              <img className="icon" src={captionsIcon} alt="transcript-icon" />
              CAPTIONS
            </div>
            {openModal && <CaptionsModal closeModal={setOpenModal} />}
          </div>
        </article>{" "}
        <div className="article-footer">
          <Link to="/SelfArticle" className="blog-button" role="button">
            MORE CONTENT
          </Link>
          <Link to="/work" className="blog-button inverse-button" role="button">
            START YOUR JOURNEY
          </Link>
        </div>
      </div>
    </div>
  );
}
