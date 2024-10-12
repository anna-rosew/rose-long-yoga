import { useState } from "react";
import { Link } from "react-router-dom";

import TrainingModal from "../components/TrainingModal";

import kundaliniResearch from "../styles/imgs/icons/kundali-institute.svg";
import traditionalYoga from "../styles/imgs/icons/traditional_yoga.svg";
import yogaAlliance from "../styles/imgs/icons/yoga-alliance.svg";
import IAHC from "../styles/imgs/icons/IAHC.svg";
import IIN from "../styles/imgs/icons/IIN.svg";
import arrowIcon from "../styles/imgs/icons/blog-arrow.svg";

import "../styles/partials/_qualifications.scss";

export default function Qualifications() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Qualifications">
      <div className="container">
        <div className="heading-container">
          <h1>Training/Qualifications</h1>
        </div>
        <div className="text">
          <p>
            I've been teaching and facilitating groups since my mid-twenties.
            Initially, I trained as a secondary school teacher in Religious
            Education. However, I quickly realized that I didn’t enjoy the
            school system any longer as a teacher. This realization prompted me
            to move into Human Rights Education, where I set up the Education
            Department at Anti-Slavery International. During my time there, I
            had the privilege of working with remarkable individuals and
            community organizations both in the British Isles and beyond.
          </p>
          <p>
            In my early thirties, inspired by the work of Paulo Freire, I
            co-founded and directed Living Lens, an international social
            enterprise. Through Living Lens, I ran projects that used video as a
            tool to facilitate communication and collaboration. In today’s world
            of mass media, where a limited number of narratives dominate, these
            projects provided a platform for marginalized voices to cultivate
            new conversations at local, national, and international levels,
            ultimately generating positive social change
          </p>
          <p>
            During this period, I also trained as a Self-Expression and
            Leadership Coach. I became fascinated by the potential for learning,
            healing, and growth that can be unlocked through embodied coaching
            conversations. This interest led me to further training in my early
            forties, where I became a Holistic Health Coach and Yoga Teacher.
            Despite all my experiences and training, I consider myself a work in
            progress!
          </p>
          <button
            className="highlight-button button-wide mobile-button"
            onClick={() => setOpenModal(true)}
          >
            view full credientials{" "}
            <img src={arrowIcon} className="button-arrow" alt="Arrow" />
          </button>
        </div>
        {openModal && <TrainingModal closeModal={setOpenModal} />}

        <div className="credentials-container desktop-and-medium-element">
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
        <div className="institution-icons-grid">
          <a href="https://kundaliniresearchinstitute.org/en/">
            <img
              src={kundaliniResearch}
              alt="Kundalinini Research Institute"
            ></img>
          </a>
          <a href="https://www.yogaalliance.org/">
            <img src={yogaAlliance} alt="The Yoga Alliance" />
          </a>{" "}
          <a href="https://traditionalyoga.co.in/home/#/">
            <img src={traditionalYoga} alt="Traditional Yoga" />
          </a>
          <a href="https://iahcnow.org/">
            <img src={IAHC} alt="International Association of Health Coaches" />
          </a>
          <a href="https://www.integrativenutrition.com/">
            <img src={IIN} alt="Institute of Integrative Nutrition" />
          </a>
        </div>
        <div className="grid-button-container">
          <Link to="/work">
            <button className="start general-button">Start Your Journey</button>
          </Link>
          <Link to="/work">
            <button className="general-button">Blog</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
