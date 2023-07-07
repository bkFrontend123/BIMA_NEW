import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
function Partner() {

    const partner = [
        { id: "p1", img: "/partners/bajaj.svg" },
        { id: "p2", img: "/partners/cholaMs.svg" },
        { id: "p3", img: "/partners/digit.svg" },
        { id: "p4", img: "/partners/futureGenerali.svg" },
        { id: "p5", img: "/partners/digit.svg" },
        { id: "p6", img: "/partners/hdfcErgo.svg" },
        { id: "p7", img: "/partners/iciciLombard.svg" },
        { id: "p8", img: "/partners/iffcoTokio.svg" },
        { id: "p9", img: "/partners/magmaHDI.svg" },
        { id: "p10", img: "/partners/nationalInsurance.svg" },
        { id: "p11", img: "/partners/rahejaQBE.svg" },
        { id: "p12", img: "/partners/reliance.svg" },
        { id: "p13", img: "/partners/royalSundaram.svg" },
        { id: "p14", img: "/partners/sbiGeneral.svg" },
        { id: "p15", img: "/partners/tataAIG.svg" },
        { id: "p16", img: "/partners/indiaInsurance.svg" },
        { id: "p17", img: "/partners/orientalInsurance.svg" },
        { id: "p18", img: "/partners/unitedIndia.svg" },
    ]

    return (
        <div className={`partner text-center container`}>
            <h2 className='partnerTitle title-36 text-primary font-secondary font-weight-700 mb-4'>Partner General Insurance Companies</h2>
            <div className={`row `}>
                <div className={`col-xl-7 mx-auto`}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        arrows="true"
                       
                        className={`smoothSwiper`}
                        spaceBetween={40}
                        infinite="true"
                        loop="true"
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            // when window width is >= 640px
                            1399: {
                              slidesPerView: 4,
                            },
                            1200: {
                              slidesPerView: 4,
                            },
                            992: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            0: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                          
                          }}
                    >
                        {partner.map((item) =>
                            <SwiperSlide key={item.id}>
                                <div className="prtnrSlideCol">
                                    <img
                                        src={item.img}
                                        alt="Bimakavach"
                                    />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
            <div className="d-none d-md-block" style={{height: "80px"}}></div>
            <div className="d-blok d-md-none" style={{height: "60px"}}></div>
            <style>
                {`
                    .partnerTitle{
                        margin-bottom: 8px;
                    }
                    .prtnrSlideCol {
                        position: relative;
                        height: 85px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.4s ease 0s;
                    }
                    .prtnrSlideCol img {
                        position: absolute;
                        width: auto !important;
                        height: auto !important;
                        max-width: 90% !important;
                        max-height: 90% !important;
                        margin: auto;
                        filter: grayscale(1);
                        opacity: 0.5;
                        transition: all 0.4s ease 0s;
                    }
                    .prtnrSlideCol:hover img {
                        filter: grayscale(0);
                        opacity: 1;
                    }
                    @media only screen and (max-width: 575px) {
                        .title-36.partnerTitle{
                            font-size: 24px;
                            line-height: 32px;
                        }
                        .prtnrSlideCol {
                            height: 50px;
                        }
                        .prtnrSlideCol img {
                            max-width: 100% !important;
                            max-height: 30px !important;
                        }
                    } 
                `}
            </style>
        </div>
    )
}

export default Partner