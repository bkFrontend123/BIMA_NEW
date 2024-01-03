import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import style from "./trustedBusiness.module.css";
function TrustedBusiness() {
  const businesses = [
    { id: "b1", img: "/clients/client1.png", width: "231", height: "41" },
    { id: "b2", img: "/clients/client2.png", width: "87", height: "36" },
    { id: "b3", img: "/clients/client3.png", width: "188", height: "41" },
    { id: "b4", img: "/clients/client4.png", width: "121", height: "61" },
    { id: "b5", img: "/clients/client5.png", width: "52", height: "73" },
    { id: "b6", img: "/clients/client6.png", width: "168", height: "49" },
    { id: "b7", img: "/clients/client7.png", width: "163", height: "39" },
    { id: "b8", img: "/clients/client8.png", width: "174", height: "71" },
    { id: "b9", img: "/clients/client9.png", width: "198", height: "43" },
    { id: "b10", img: "/clients/client10.png", width: "126", height: "65" },
    { id: "b11", img: "/clients/client11.png", width: "240", height: "63" },
    { id: "b12", img: "/clients/client12.svg", width: "133", height: "15" },
    { id: "b13", img: "/clients/client13.svg", width: "101", height: "68" },
    { id: "b14", img: "/clients/client14.svg", width: "133", height: "46" },
    { id: "b15", img: "/clients/client15.svg", width: "133", height: "43" },
    { id: "b16", img: "/clients/client16.svg", width: "133", height: "28" },
    { id: "b17", img: "/clients/client17.svg", width: "133", height: "58" },
    { id: "b18", img: "/clients/client18.svg", width: "133", height: "35" },
    { id: "b19", img: "/clients/client19.svg", width: "74", height: "68" },
    { id: "b20", img: "/clients/client20.svg", width: "133", height: "18" },
    { id: "b21", img: "/clients/client21.svg", width: "133", height: "29" },
    /*{ id: "b22", img: "/clients/client1.png", width: "231", height: "41" },
    { id: "b23", img: "/clients/client2.png", width: "87", height: "36" },
    { id: "b24", img: "/clients/client3.png", width: "188", height: "41" },
    { id: "b25", img: "/clients/client4.png", width: "121", height: "61" },
    { id: "b26", img: "/clients/client5.png", width: "52", height: "73" },
    { id: "b27", img: "/clients/client6.png", width: "168", height: "49" },
    { id: "b28", img: "/clients/client7.png", width: "163", height: "39" },
    { id: "b29", img: "/clients/client8.png", width: "174", height: "71" },
    { id: "b30", img: "/clients/client9.png", width: "198", height: "43" },
    { id: "b31", img: "/clients/client10.png", width: "126", height: "65" },
    { id: "b32", img: "/clients/client11.png", width: "240", height: "63" },
    { id: "b33", img: "/clients/client12.svg", width: "133", height: "15" },
    { id: "b34", img: "/clients/client13.svg", width: "101", height: "68" },
    { id: "b35", img: "/clients/client14.svg", width: "133", height: "46" },
    { id: "b36", img: "/clients/client15.svg", width: "133", height: "43" },
    { id: "b37", img: "/clients/client16.svg", width: "133", height: "28" },
    { id: "b38", img: "/clients/client17.svg", width: "133", height: "58" },
    { id: "b39", img: "/clients/client18.svg", width: "133", height: "35" },
    { id: "b40", img: "/clients/client19.svg", width: "74", height: "68" },
    { id: "b41", img: "/clients/client20.svg", width: "133", height: "18" },
    { id: "b42", img: "/clients/client21.svg", width: "133", height: "29" },*/
  ]
  const params = {
    // direction: 'horizontal',
    // loop: true,
    // speed: 1000,
    // spaceBetween: 30,

  };
  return (
    <div className='container-fluid p-0'>
      <div className='row m-0'>
        <div className={`col-lg-12 p-0 mx-auto text-center trusted-business ${style.trustedBusiness}`}>
          <h2 className='title24 mb-3 font-weight-500 text-primary px-sm-0 px-5'>Trusted by 500+ businesses across India</h2>
          <div className='pt-2'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              // arrows={true}
              navigation
              className={`smoothSwiper ${style.fadeSlider} ${style.fadeSliderLeft} ${style.fadeSliderRight}`}
              spaceBetween={50}
              infinite="true"
              loop="true"
              speed={3000}
              autoplay={{
                  delay: 0,
                  disableOnInteraction: false
              }}
              breakpoints={{
                1399: {
                  slidesPerView: 8,
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
              {businesses.map((item) =>
                <SwiperSlide key={item.id}>
                    <div className={style.cmpnySlideCol}>
                      <Image className={style.cmpnySlideImg} src={item.img} width={item.width} height={item.height} alt="Bimakavach" loading="lazy" />
                    </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div className='@d-block d-none mt-3'>

            <Swiper
              // {...params}
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={50}

              className={``}
              infinite="true"
              loop="true"
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false
              }}
              breakpoints={{
                1399: {
                  slidesPerView: 7,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                576: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                320: {
                  slidesPerView: 4,
                  spaceBetween: 20,
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
      <div className="d-blok d-md-none" style={{ height: "80px" }}></div>

      <style jsx scope>
        {` 
          @media only screen and (max-width: 575px) {
              .trusted-business {
                margin-top: 70px;
              }
              .container {
                padding: 0;
              }
              .row {
                margin-left: 0;
                margin-right: 0;
              }
              .swiper-slide {
                width: auto !important;
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