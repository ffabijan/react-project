import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./SwiperNacio.css";

import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

export default function SwiperNacio() {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://front2.edukacija.online/backend/wp-json/wp/v2/posts?categories=212&_embed"
    )
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="swiper-container-custom">
      <Swiper
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, FreeMode, EffectFade]}
        spaceBetween={0}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        loopedSlides={posts.length} // važno za beskonačni loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {posts.map((post) => {
          const image =
            post._embedded?.["wp:featuredmedia"]?.[0]?.media_details
              ?.sizes?.large?.source_url ||
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              // prethodni i sljedeci postovi za prikaz sa strane
          const prevPost = posts[(activeIndex - 1 + posts.length) % posts.length];
          const nextPost = posts[(activeIndex + 1) % posts.length];
           

          return (

            
            <SwiperSlide key={post.id}>
              <div className="slide-bg">
                <img
                  src={image}
                  alt={post.title.rendered}
                  className="slide-image"
                />
                
                <div className="slider-wrapper">

                    <div className="slide-text">

                      <h2 className="prev-text">{prevPost?.title.rendered}</h2>
                      <h2

                        className="active-text"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      
                      <h2 className="next-text">{nextPost?.title.rendered}</h2>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}