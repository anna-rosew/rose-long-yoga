import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/partials/_testimonies-carousel.scss";

import { NextArrow, PrevArrow } from "./CustomArrow";
import ruth from "../styles/imgs/testimonials/Ruth.png";
import survi from "../styles/imgs/testimonials/Suri.png";
import rosie from "../styles/imgs/testimonials/Rosie.png";
import jackson from "../styles/imgs/testimonials/Jackson.png";
import antje from "../styles/imgs/testimonials/Antje.png";
import janine from "../styles/imgs/testimonials/Janine.png";

const testimonials = [
  {
    name: "Suri",
    text: "Rose came into my life at a traumatic and distressing time.  I've unearthed insights when I didn't think my mind would let me and overcome challenges that I could not see beyond. Through movement, breath and her excellent coaching skills, a sense of calm and peace is restored. I don't know how Rose does it, but she just knows. ",
    location: "Switzerland",
    profileImage: survi,
  },
  {
    name: "Rosie",
    text: "When I started working with Rose I was in a crisis period in my life. I'd tried several attempts at changing but all unsuccessful. Through a gentle and deep process of enquiry with Rose, the seeds of change were sown.  I found myself with the strength to take radical action and embark on an enormous transformation.  When I look back at that time, my life is unrecognisable from the person I now am.",
    location: "UK",
    profileImage: rosie,
  },
  {
    name: "Jackson",
    text: "I was stuck on a path that made me deeply unhappy - doggedly overworking in the pursuit of external success.  Somewhere on the other side of the chaos, a new life and self gradually manifested.  Rose sat with me calmly and gently each time it all seemed way too much, and enabled me to have the clarity and courage to continue on the path I knew, in my heart, to be essential.",
    location: "France",
    profileImage: jackson,
  },
  {
    name: "Antje",
    text: "Rose is somebody who really listens and knows when to ask the right questions. She is incredibly clear in her observation and way of expression. Rose is very intuitive and combines this with a tangible wisdom and great sense of humour. She makes you feel like you are talking to a good old friend while she always stays professional. The feeling I got from working with her was one of trust, joy and warmth.",
    location: "Spain",
    profileImage: antje,
  },

  {
    name: "Janine",
    text: "I first practised yoga with Rose on a retreat in Portugal in 2018. It was the first time I had tried kundalini yoga and I found it really powerful. It released emotions and I felt that it was very healing.  I find Rose's calm approach really grounding.  Her on-line yoga leaves me feeling relaxed, much more aware of the power of my breath and with a heightened awareness.",
    location: "UK",
    profileImage: janine,
  },
  {
    name: "Ruth",
    text: "I really enjoyed being part of the group and I found your Zoom ‘ technique’ worked really well. I just had you on the screen while doing the practice, so it felt like a one to one, whilst being aware of the others in the group , all with a common purpose. Emotionally, it felt so lovely to be part of a ‘family’ in spirit.",
    location: "UK",
    profileImage: ruth,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className="testimonial-text">"{testimonial.text}"</p>

            <p className="testimonial-name">- {testimonial.name}</p>
            <p className="testimonial-location">{testimonial.location}</p>
            <img
              src={testimonial.profileImage}
              alt="profile"
              className="profile-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
