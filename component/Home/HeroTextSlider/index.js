import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Import Swiper and required modules
import { Autoplay } from 'swiper';

export default function HeroTextSlider() {
  return (
    <>
      <div className="textSlider">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          speed={300}
          autoplay={{ delay: 1000 }}
          direction="vertical"
          loop
        >
          <SwiperSlide>Business Insurance</SwiperSlide>
        </Swiper>
      </div>
    </>

  )
}