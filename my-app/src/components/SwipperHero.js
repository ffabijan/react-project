import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const SwipperHero = ({ slides }) => {

  if (!slides) return null;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-content">
              <h2>{slide.title}</h2>
              {slide.link && (
                <a href={slide.link}>Saznaj više</a>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperHero;