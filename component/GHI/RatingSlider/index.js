import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';

import RatingSliderCard from '@/component/GHI/RatingSliderCard';

import style from './style.module.css'

export default function RatingSlider() {
  return (
    <>
    <div className={`${style.ratingSlider}`}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation
        className={`smoothSwiper ${style.fadeSlider} ${style.fadeSliderLeft} ${style.fadeSliderRight}`}
        spaceBetween={24}
        infinite="true"
        loop="true"
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false
        }}
        breakpoints={{
          1699: {
            slidesPerView: 3.5,
          },
          1399: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 2.5,
          },
          0: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingSliderCard />
        </SwiperSlide>
      </Swiper>
    </div>
  </>
  )
}