import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

export default function RecentActivity() {
    const recentActivity = ([
        { id: "ra1", img: "/team/tejasJain.webp", title: "Tejas Jain", date: "Founder & CEO" },
        { id: "ra2", img: "/team/priyalataPatra.webp", title: "Priyalata Patra", date: "VP Product, Insurance Expert" },
        { id: "ra3", img: "/team/himaniDoshi.webp", title: "Himani Doshi", date: "Liability Insurance Expert" },
        { id: "ra4", img: "/team/ravikantSawant.webp", title: "Ravikant Sawant", date: "P&C Insurance Expert" },
        { id: "ra5", img: "/team/shrutiVishnoi.webp", title: "Shruti Vishnoi", date: "Chief of Customer Success" },
        /*{ id: "ra6", img: "/team/tejasJain.png", title: "Tejas Jain", date: "Founder & CEO" },
        { id: "ra7", img: "/team/priyalataPatra.png", title: "Priyalata Patra", date: "VP Product, Insurance Expert" },
        { id: "ra8", img: "/team/himaniDoshi.png", title: "Himani Doshi", date: "Liability Insurance Expert" },
        { id: "ra9", img: "/team/ravikantSawant.png", title: "Ravikant Sawant", date: "P&C Insurance Expert" },
        { id: "ra10", img: "/team/shrutiVishnoi.png", title: "Shruti Vishnoi", date: "Chief of Customer Success" },*/
    ])

    return (
        <div className='RecentActivity @container'>
            <div className="d-none d-md-block" style={{ height: "90px" }}></div>
            <div className="d-blok d-md-none" style={{ height: "60px" }}></div>
            <div className='container'>
                <div className={`row text-center`}>
                    <div className={`col-md-8 mx-auto`}>
                        <div className='commnHeading ms-xxl-5'>
                            <div className='title-36 font-secondary text-primary font-weight-700'>Meet your <span className='text-yellow fst-italic'>Expert Team</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='RecentActivity-yellow'>
                <div className='container'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            nextEl: ".recent-swiper-button-next",
                            prevEl: ".recent-swiper-button-prev",
                            disabledClass: "swiper-button-disabled"
                        }}
                        className={``}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop="true"
                        speed={1000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}

                        breakpoints={{
                            // when window width is >= 640px
                            1399: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}

                    >
                        {recentActivity.map((item) =>
                        <SwiperSlide key={item.id}>
                            <div className='RecentActivity-card border-primary p-xl-2'>
                                <Image className="img-fluid RecentActivityImg" src={item.img} width={478} height={478} alt="Bimakavach Team Image" loading="lazy" />
                                <p className='title24 RecentActivity-cardTitle font-weight-600 mb-1 mt-2 text-primary'>{item.title}</p>
                                <p className='title16 RecentActivity-cardDate text-yellow3'>{item.date}</p>
                            </div>
                        </SwiperSlide>
                        )}
                    </Swiper>
                    <div className='divider d-none @d-lg-block bg-yellow2 w-100'></div>
                    <div className='position-relative'>
                        {/* <div className=' d-none d-lg-block' style={{ height: "20px" }}></div> */}
                        <div className="d-flex justify-content-center w-100 @RecentActivity-yellow-arrow mt-4">
                            <div className='recent-swiper-button-prev'>                                                
                                <svg width="21" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9648 6.41016L1.66173 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.50391 1.11572L1.65971 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.50781 11.7051L1.66362 6.41064" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='recent-swiper-button-next'>
                                <svg width="21" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.28516 6.41016L12.5883 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.74609 1.11572L12.5903 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.74609 11.7051L12.5903 6.41064" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx scope>
                {`
                    .recent-swiper-button-prev,
                    .recent-swiper-button-next{
                        font-size: 18px;
                        color: #0e2b72;
                        border: 0 solid#0e2b72;
                        width: 35px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .recent-swiper-button-prev{
                        margin-right: 40px;

                    }
                    
                    @media only screen and (max-width: 1450px) {
                        .RecentActivity-card img{
                            min-height: 250px;
                        }
                        
                    }
                    @media only screen and (max-width: 575px) {
                        .RecentActivity-yellow .row{
                            margin: 0;
                        }
                        .title-36{
                            font-size: 30px;
                            line-height: 36px;
                        }
                    }
                
                `}
            </style>
        </div>
    )
}
