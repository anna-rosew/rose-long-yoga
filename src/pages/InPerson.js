import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/partials/_in-person.scss";
import { Pagination, Navigation } from "swiper/modules";
import EventSlider from "../components/InPersonSlider";
import prevArrow from "../styles/imgs/icons/arrow-prev.svg";
import nextArrow from "../styles/imgs/icons/arrow-next.svg";

export default function InPerson() {
  const events = [
    {
      images: [
        require("../styles/imgs/photos/absolute-yoga.png"),
        require("../styles/imgs/photos/buddah.png"),
        require("../styles/imgs/photos/approach-yoga.png"),
      ],
      title: "Breathwork Course",
      location:
        "Absolute Yoga, 121 Oxford Road Waterloo, Liverpool, L22 7RE Liverpool. UK",
      date: "Weds 25 Oct",
      time: "18:30 - 19:30pm",
      description:
        "Join Rose for an introduction to Breath Work. This five-week course will introduce you to [strong]foundational practices[/strong] that allow you to access the [strong]power of your breath[/strong].",
      description2: `
      <p>This event combines [strong]movement and breathwork,[/strong] opening you to the unifying capacity of the breath. [strong] Suitable for those of you who’ve worked with me before and have some experience of Kundalini breathwork.[/strong]</p>
      <ul class="custom-bulleted-list">
        <li><strong>Discover how breathing can help you move through anxiety and depression.</strong></li>
        <li><strong>Experience the connection between your thoughts and your breathing.</strong></li>
        <li><strong>Learn how to calm your busy mind through the breath.</strong></li>
        <li><strong>Enjoy states of inner spaciousness, connection, and calm.</strong></li>
      </ul>
    `,
      maxCapacity: "Max 7 participants",
      price: "£25",
      bookNowUrl:
        "https://goteamup.com/p/4449558-absolute-yoga/c/schedule?e=76436614&startdate=2024-07-29&enddate=2024-09-01&venues=&category=&instructors=&offering_types=",
    },
    {
      images: [
        require("../styles/imgs/photos/home-studio4.png"),
        require("../styles/imgs/photos/heart2.png"),
        require("../styles/imgs/photos/home-studio1.png"),
      ],
      title: "Return to the Heart",
      location: "Home Studio, Liverpool. UK",
      date: "15th - 17th August 2024",
      time: "10:00 AM - 04:00 PM",
      description:
        "Current research is proving that our hearts are not simply pumps as was once believed.  Science is starting to echo what Yogis have been teaching for thousands of years; [strong]the heart is what connects us[/strong].  Living in a world of fragmentation and division, [strong]heart centeredeness[/strong] holds the [strong]healing we long for.[/strong]",
      description2:
        "This morning is dedicated to the [strong]heart[/strong].  We begin with a [strong]cacao ceremony to open our hearts[/strong] and listen for what is moving in the space of our hearts.  Holding a healing intention we move into powerful [strong]heart centred breathwork.[/strong]  Sink into a [strong]yoga nidra[/strong] and experience the [strong]healing power of heart coherence. Open to All.[/strong]",
      maxCapacity: "50 participants",
      price: "£25",
      bookNowUrl: "/contact",
    },
  ];

  return (
    <div className="Events">
      <div className="container in-person-page">
        <h1>In-Person Sessions</h1>
        <h4>YOGA | COMMUNITY</h4>
        <div className="event-swiper-button-prev">
          <img src={prevArrow} alt="prev arrow" className="nav-arrow" />
        </div>
        <div className="event-swiper-button-next">
          <img src={nextArrow} alt="next arrow" className="nav-arrow" />
        </div>
        <Swiper
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".event-swiper-button-next",
            prevEl: ".event-swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="event-swiper"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventSlider eventInfo={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
