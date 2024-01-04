import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import style from "./style.module.css";

function Partner() {
    const partner = [
        { id: "p1", img: "/partners/bajaj.svg", width: "141", height: "17" },
        { id: "p2", img: "/partners/cholaMs.svg", width: "141", height: "33" },
        { id: "p3", img: "/partners/digit.svg", width: "121", height: "60" },
        { id: "p4", img: "/partners/futureGenerali.svg", width: "141", height: "44" },
        { id: "p5", img: "/partners/hdfcErgo.svg", width: "67", height: "60" },
        { id: "p6", img: "/partners/iciciLombard.svg", width: "141", height: "37" },
        { id: "p7", img: "/partners/iffcoTokio.svg", width: "125", height: "60" },
        { id: "p8", img: "/partners/magmaHDI.svg", width: "141", height: "31" },
        { id: "p9", img: "/partners/nationalInsurance.svg", width: "141", height: "54" },
        { id: "p10", img: "/partners/rahejaQBE.svg", width: "141", height: "28" },
        { id: "p11", img: "/partners/reliance.svg", width: "141", height: "39" },
        { id: "p12", img: "/partners/royalSundaram.svg", width: "141", height: "43" },
        { id: "p13", img: "/partners/sbiGeneral.svg", width: "141", height: "30" },
        { id: "p15", img: "/partners/indiaInsurance.svg", width: "60", height: "60" },
        { id: "p16", img: "/partners/orientalInsurance.svg", width: "141", height: "46" },
        { id: "p17", img: "/partners/unitedIndia.svg", width: "141", height: "19" },
    ]
    return (
        <div className={`partner text-center container`}>
            <h2 className={`title-36 text-primary font-secondary font-weight-700 mb-4 ${style.partnerTitle}`}>Partner General Insurance Companies</h2>
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
                            1399: {
                              slidesPerView: 4,
                            },
                            1200: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                            992: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            576: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                          
                          }}
                    >
                        {partner.map((item) =>
                            <SwiperSlide key={item.id}>
                                <div className={style.prtnrSlideCol}>
                                    <Image className={style.prtnrSlideImg} src={item.img} width={item.width} height={item.height} alt="Bimakavach" loading="lazy" />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
            <div className="d-none d-md-block" style={{height: "80px"}}></div>
            <div className="d-blok d-md-none" style={{height: "70px"}}></div>
            <style>
                {`
                    .partnerTitle{
                        margin-bottom: 8px;
                    }
                    .prtnrSlideCol {
                        position: relative;
                        height: 75px;
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
                        max-height: 80% !important;
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
                            max-height: 50px !important;
                        }
                    } 
                `}
            </style>
        </div>
    )
}
export default Partner