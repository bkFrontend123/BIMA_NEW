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
              loop="true"
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
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client1.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client2.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client3.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client4.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client5.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client6.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client7.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client8.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client9.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client10.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cmpnySlideCol">
                  <img src="/clients/client11.png" width="" height="" alt="" />
                </div>
              </SwiperSlide>
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
          .cmpnySlideCol {
            position: relative;
            height: 85px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease 0s;
          }
          .cmpnySlideCol img {
            position: absolute;
            width: auto !important;
            height: auto !important;
            max-width: 90% !important;
            //max-height: 90% !important;
            margin: auto;
            filter: grayscale(1);
            opacity: 0.5;
            transition: all 0.4s ease 0s;
          }
          .cmpnySlideCol:hover img {
            filter: grayscale(0);
            opacity: 1;
          }
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
              .cmpnySlideCol {
                height: 50px;
              }
              .cmpnySlideCol img {
                max-width: 100% !important;
                max-height: 30px !important;
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