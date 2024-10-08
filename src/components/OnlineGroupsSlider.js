import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import ClassSlides from "../components/ClassSlides";
import { Pagination } from "swiper/modules";
import "../styles/partials/_groups.scss";

export default function OnlineGroupsSlider() {
  const swiperRef = useRef(null);

  const classes = [
    {
      icon: require("../styles/imgs/icons/morning-breath.svg").default,
      classType: "Good Morning Breath",
      description:
        "If you're looking for a fast way to regenerate your body, mind, and spirit, come and experience the magic of the breath. Deeply detoxifying, revitalising, and balancing, the practice of Pranayama has deep and lasting benefits.",
      permanentDescription:
        "You can join this class anywhere in the world on Zoom.",
      dates: ["Tue, Aug 6", "Wed, Aug 21", "Tue, Aug 27"],
      times: ["7:00 - 7:30 am", "7:00 - 7:30 am", "7:00 - 7:30 am"],
      dropInPrice: "£8",
      monthlyPrice: "3 session bundle £18",
    },
    {
      icon: require("../styles/imgs/icons/evening-chill.svg").default,
      classType: "Deep Chill",
      description:
        "Thursday nights are about releasing tension and moving into the parasympathetic nervous system, which allows the body to replenish and heal. This hour is a deeply restorative way to look after your health in these stressful times. Come and enjoy an hour to unwind and relax.",
      permanentDescription:
        "You can join this class anywhere in the world on Zoom.",
      dates: ["Thu, Aug 1", "Thu, Aug 8", "Thu, Aug 27", "Thur, Sep 5"],
      times: ["8:00 - 9:00 pm", "8:00 - 9:00 pm", "8:00 - 9:00 pm"],
      dropInPrice: "£10",
      monthlyPrice: "3 class bundle £21",
    },

    {
      icon: require("../styles/imgs/icons/kundalini.svg").default,
      classType: "Kundalini Magic",
      description:
        "These 90-minute classes combine movement, breath, and sound. If you’re looking for an intense physical workout and a tangible experience of expansive awareness, this is for you. Kundalini Yoga is the fastest way to experience altered states of consciousness without substances.",
      permanentDescription:
        "You can join this class anywhere in the world on Zoom.",
      dates: ["Sat, Aug 3", "Sun, Sep 1", "Sat, Sep 7"],
      times: ["8:00 - 9:00 am", "8:00 - 9:00 am", "8:00 - 9:00 am"],
      dropInPrice: "£12",
      monthlyPrice: "3 class bundle £30",
    },
    {
      icon: require("../styles/imgs/icons/lunar.svg").default,
      classType: "Lunar Cycles",
      description:
        "Meeting twice each month, this practice helps you drop into the natural rhythms of your body and the world. Women have practiced at the New and Full Moon for centuries to deepen awareness of their bodies and cyclical connection with nature. Set an intention with each New Moon and reflect and release with each Full Moon.",
      permanentDescription:
        "You can join this class anywhere in the world on Zoom.",
      dates: ["NEW MOON KUNDALINI: Sat, Aug 3", "FULL MOON: Tue, Aug 20"],
      times: ["8:00 - 10:30 am", "8:00 - 9:00 pm"],
      dropInPrice: "£12 (New Moon), £10 (Full Moon)",
      monthlyPrice: "2 class bundle £17",
    },
  ];

  const pagination = {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<h3 class="${className} custom-bullet">${classes[index].classType}</h3>`;
    },
  };

  return (
    <div className="online-groups-slider">
      <div className="section">
        <div className="custom-pagination"></div>
        <Swiper
          ref={swiperRef}
          pagination={pagination}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          className="mySwiper"
        >
          {classes.map((classItem, index) => (
            <SwiperSlide key={index}>
              <ClassSlides classInfo={classItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
