import React from "react";
import { Link } from "react-router-dom";
import Location from "../styles/imgs/icons/location.svg";
import Calendar from "../styles/imgs/icons/calender.svg";
import Time from "../styles/imgs/icons/time.svg";
import "../styles/InPerson.css";
import BlurryImage from "../components/BlurryImage";

const formatDescription = (text) => {
  return text.replace(/\[strong\](.*?)\[\/strong\]/g, "<strong>$1</strong>");
};

const InPersonSlider = ({ eventInfo }) => {
  const isMobile = window.innerWidth <= 768;
  const isExternalUrl = (url) => /^(https?:\/\/)/.test(url);

  return (
    <div className="event-slide">
      <div className="event-container">
        <div className="image-gallery">
          <div className="large-image-container">
            <BlurryImage
              src={eventInfo.images[0]}
              className="large-image"
              alt="Large Event"
            />
          </div>
          {!isMobile && (
            <div className="small-images-container">
              {eventInfo.images.slice(1).map((img, index) => (
                <BlurryImage
                  key={index}
                  src={img}
                  className="small-image"
                  alt={`Small Event ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="event-info-column">
          <h4>Upcoming Event</h4>
          <h2>{eventInfo.title}</h2>
          <p>
            <span className="details-span">
              <img
                src={Location}
                alt="Location Icon"
                className="details-icon"
              />
              {eventInfo.location}
            </span>
          </p>
          <p>
            <span className="details-span">
              <img
                src={Calendar}
                alt="Calendar Icon"
                className="details-icon"
              />
              {eventInfo.date}
            </span>
          </p>
          <p>
            <span className="details-span">
              <img src={Time} alt="Time Icon" className="details-icon" />
              {eventInfo.time}
            </span>
          </p>
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: formatDescription(eventInfo.description),
            }}
          />
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: formatDescription(eventInfo.description2),
            }}
          />
          <p>AVAILABILITY: {eventInfo.maxCapacity}</p>
          <p>
            PRICE: <strong>{eventInfo.price}</strong>
          </p>
          {isExternalUrl(eventInfo.bookNowUrl) ? (
            <a
              href={eventInfo.bookNowUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="general-button">BOOK NOW</button>
            </a>
          ) : (
            <Link to={eventInfo.bookNowUrl}>
              <button className="general-button">BOOK NOW</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default InPersonSlider;
