import React from "react";
import { Link } from "react-router-dom";

import "../styles/partials/_qualifications.scss";
import exitIcon from "../styles/imgs/icons/exit.png";

export default function TrainingModal({ closeModal }) {
  return (
    <div className="TrainingModal">
      <div className="modal-container">
        <div className="exit-container">
          <button
            aria-label="Close"
            className="close"
            onClick={() => closeModal(false)}
          >
            <img className="exit-icon" alt="Exit Icon" src={exitIcon} />
          </button>
        </div>
        <div classNae="header">
          <h2>Full Credentials:</h2>
        </div>
        <div className="credentials-container ">
          <p>
            <p>
              2023:{" "}
              <strong>
                The Yoga Sutras of Patanjali: Kia Miller, Radiant Body Yoga
              </strong>
              <div className="custom-spacer" />
              2022: <strong>
                Exploring Metaphors with Clean Language,
              </strong>{" "}
              The Clean Coaching Centre
              <div className="custom-spacer" />
              2022:{" "}
              <strong>
                Self Mastery Training level 2 with Kia Miller,
              </strong>{" "}
              Radiant Body Yoga
              <div className="custom-spacer" />
              2021:{" "}
              <strong>Radiant Body Yoga Teacher Training, Level 2:</strong>{" "}
              Prana and Pranayama
              <div className="custom-spacer" />
              2020: <strong>
                200 hr Yoga Teacher Training with Dr Kumar,
              </strong>{" "}
              Traditional Yoga certified by Yoga Alliance
              <div className="custom-spacer" />
              2020:{" "}
              <strong>
                Family Constellations & the Chakras with Delcia McNeil,
              </strong>{" "}
              certified by the Association for Therapeutic Healers
              <div className="custom-spacer" />
              2019:{" "}
              <strong>
                Coming Back to our Five Senses; the path of self enquiry.
              </strong>{" "}
              5 day intensive with Donna Farhi
              <div className="custom-spacer" />
              2018: <strong>Chakra Psychology with Delcia McNeil,</strong>{" "}
              certified by the Association for Therapeutic Healers
              <div className="custom-spacer" />
              2017 & 2018:{" "}
              <strong>
                Capacitar Training in Healing Trauma through Somatic Practice
                with Dr Patricia Cane
              </strong>
              <div className="custom-spacer" />
              2017:{" "}
              <strong>
                Trained as Certified Recovery Coach at The Addiction Academy
              </strong>
              <div className="custom-spacer" />
              2017:{" "}
              <strong>
                Supercharge your Chakras course with Andodea Judith
              </strong>
              <div className="custom-spacer" />
              2017: <strong>Meditation Teacher Training,</strong> certified by
              Traditional Yoga, UK
              <div className="custom-spacer" />
              2016-2017:{" "}
              <strong>Yoga Teacher Training: Foundations Level 2,</strong>{" "}
              certified by British Wheel of Yoga
              <div className="custom-spacer" />
              2015:{" "}
              <strong>
                Yoga Teacher Training for Mastering the Addictive Personality
                with Carolyn Cowan, Kundalini Global,
              </strong>{" "}
              certified by Yoga Alliance
              <div className="custom-spacer" />
              2015:{" "}
              <strong>
                Trained Facilitator in Psychometric Testing at Metis
              </strong>
              <div className="custom-spacer" />
              2015:{" "}
              <strong>
                Trained Facilitator of the Strategy Spring Board by Thompson
                Best
              </strong>
              <div className="custom-spacer" />
              2014-2016:{" "}
              <strong>
                200hr Kundalini Yoga Teacher Training with Sada Sat Singh,
              </strong>{" "}
              certified by the Kundalini Research Institute
              <div className="custom-spacer" />
              2013-2014:{" "}
              <strong>
                Health Coach Training, Institute of Integrative Nutrition,
              </strong>{" "}
              certified by International Assoc for Health Coaches
              <div className="custom-spacer" />
              2004-2006:{" "}
              <strong>
                Self Expression and Leadership Coach Training, Landmark
                Education
              </strong>
              <div className="custom-spacer" />
              1999: <strong>The Global Trainer Training; VSO</strong>
              <div className="custom-spacer" />
              1993-1994:{" "}
              <strong>
                Post Graduate Certificate of Education, Religious Studies,
                University College London
              </strong>
              <div className="custom-spacer" />
              1990-1993:{" "}
              <strong>
                BA Hons in Comparative Religion, 2:1, Manchester University
              </strong>
            </p>
          </p>
        </div>
        <div className="button-footer">
          <Link to="/contact">
            <button className="general-button button-wide">
              start your journey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
