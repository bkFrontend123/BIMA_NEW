import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import styles from "./trustedBusiness.module.css";
function TrustedBusiness() {
  const params = {
    // direction: 'horizontal',
    // loop: true,
    // speed: 1000,
    // spaceBetween: 30,

  };
  return (
    <div className='container'>
      <div className='row'>
        <div className={`col-lg-9 mx-auto text-center trusted-business ${styles.trustedBusiness}`}>
          <h2 className='title24 mb-3 font-weight-500 text-primary px-sm-0 px-5'>Trusted by the 400+  businesses across India</h2>
          <div className='pt-2'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              // arrows={true}
              navigation
              className={`${styles.fadeSlider} ${styles.fadeSliderLeft} ${styles.fadeSliderRight}`}
              spaceBetween={50}
              infinite="true"
              loop={true}
              speed={2000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false
              }}
              breakpoints={{
                1399: {
                  slidesPerView: 6,
                },
                1200: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 5,
                },
                0: {
                  slidesPerView: 3,
                },

              }}
            >
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted4.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted4.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
            </Swiper>
          </div>
          <div className='@d-block d-none mt-3'>

            <Swiper
              // {...params}
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={50}

              className={``}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false
              }}
              breakpoints={{
                1399: {
                  slidesPerView: 7,
                },
                1200: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 5,
                },
                0: {
                  slidesPerView: 3,
                },

              }}
            >

              <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block" style={{ height: "90px" }}></div>
      <div className="d-blok d-md-none" style={{ height: "70px" }}></div>

      <style jsx scope>
        {`         
          @media only screen and (max-width: 575px) {
              .trusted-business {
                  margin-top: 50px;
              }
              .container{
                padding: 0;
              }
              .row{
                margin-left: 0;
                margin-right: 0;
              }
              .swiper-slide{
                width: auto !important;
              }
              .swiper-slide img{
                height: 20px;
              }
              .startupCols-cardBox{
                margin-bottom: 30px;
              }
          }
        `}
      </style>
    </div>
  )
}

export default TrustedBusiness