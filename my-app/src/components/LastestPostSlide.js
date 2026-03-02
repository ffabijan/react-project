import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const LatestPostsSlider = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}v2/posts?_embed&per_page=${per_page}&page=${currentPage + 1}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={3}
    >
      {posts.map((post) => {
        const image =
          post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <SwiperSlide key={post.id}>
            <div className="slide-card">
              {image && <img src={image} alt={post.title.rendered} />}
              <h3
                dangerouslySetInnerHTML={{
                  __html: post.title.rendered,
                }}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default LatestPostsSlider;