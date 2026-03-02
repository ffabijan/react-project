// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';


// Import Swiper styles
import 'swiper/css';
import FeaturedImg from './FeaturedImg';

export default ({ posts }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {posts.map((post) => {
            return (
                <SwiperSlide key={post.id}>
                   <FeaturedImg post={post} size="medium" fallback="https://via.placeholder.com/150"/>
                </SwiperSlide>
            )
        })}

      ...
    </Swiper>
  );
};