import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function BestBacked(props) {
    const best = ([
        { id: "b1", img: "/backBest1.png" },
        { id: "b2", img: "/backBest2.png" },
        { id: "b3", img: "/backBest3.png" },
        { id: "b4", img: "/backBest2.png" },
        { id: "b5", img: "/backBest4.png" },
        { id: "b6", img: "/backBest1.png" },
        { id: "b7", img: "/backBest2.png" },
        { id: "b8", img: "/backBest3.png" },
        { id: "b9", img: "/backBest2.png" },
        { id: "b10", img: "/backBest4.png" },

    ]) 
    return (
        <>
            <div className="backedBest container bg-red-500">
                <div className={`row text-center`}>
                    <div className={`col-md-8 mx-auto`}>
                        <div className='commnHeading'>
                            <div className='polyBox border-primary bg-blueLight text-primary title12 text-uppercase font-weight-600 mb-3'>Our Investors</div>
                            <div className={`title-36 font-secondary mb-md-4 text-primary font-weight-700 ${props.titleClass}`}>Backed by <span className="text-yellow fst-italic">The Best</span></div>
                        </div>
                    </div>
                </div>
                <div className="row pt-md-4 pt-2">
                    <div className="col-md-10 mx-auto">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            arrows="true"
                            // navigation="true"
                            className={`smoothSwiper`}
                            slidesPerView={5}
                            loop="true"
                            speed={2000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
                            }} 
                            
                            breakpoints={{
                                // when window width is >= 640px
                                1399: {
                                  slidesPerView: 4,
                                  spaceBetween: 50
                                },
                                1200: {
                                  slidesPerView: 4,
                                },
                                992: {
                                  slidesPerView: 1,
                                },
                              0: {
                                  slidesPerView: 2,
                                  spaceBetween: 15
                                },
                              
                              }}

                        >
                            {best.map((item) =>
                                <SwiperSlide key={item.id}>
                                    <div className='backedBest-card bg-blueExtraLight@'>
                                        <img src={item.img} />
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
                <div className="d-none d-md-block" style={{height: "90px"}}></div>
                <div className="d-blok d-md-none" style={{height: "20px"}}></div>
               
            </div>
            <style jsx scope>
                {`
                    @media (max-width: 575px) {
                        .title-36{
                            font-size: 30px;
                            line-height: 36px;
                        }
                    }
                `}
            </style>
        </>
    );
}
