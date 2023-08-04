import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/pagination';
import "swiper/css/navigation";

export default function OurBlog() {
    return (
        <>
            <div className='ourBlogs'>
                <div className='container '>
                    <div className='row text-md-center text-start'>
                        <div className='col-md-12'>
                            <div className='col-md-12'>
                                <div className='commnHeading'>
                                    <h3 className='aboutProductSec-leftTitle title-64 font-secondary font-weight-600 text-primary'>Food for Thought, Served Fresh</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container px-0'>
                    <div className='row mx-0'>
                        <div className='col-md-7 px-0'>
                            <div className='ourBlogsLeft mobContainer'>
                                <img className='w-100 ourBlogsImg ' src="/ourBlogAds.jpg" />
                                <h3 className='title-48 mt-3 mb-0 mb-md-1 text-primary font-secondary font-weight-600'>Different Types of Insured</h3>
                                <p className='title-20 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>April 4, 2023 • 5 MINS READ</p>
                            </div>
                        </div>
                        <div className='col-md-5 px-0 '>
                            <div className='ourBlogsRight mobContainer@'>
                                <div className='ourBlogsRight-title title-36 font-secondary text-primary mb-md-5 mb-3'>
                                    <Link className='text-primary font-weight-600 text-decoration-none' href="">Read More</Link>
                                </div>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                    // arrows={true}
                                    // navigation={true}
                                    navigation={{
                                        nextEl: ".image-swiper-button-next",
                                        prevEl: ".image-swiper-button-prev",
                                        disabledClass: "swiper-button-disabled"
                                    }}
                                    initialSlide={1}
                                    className={`aay`}
                                    spaceBetween={2}
                                    slidesPerView={1.3}
                                    
                                    // centerInsufficientSlides={true} 
                                    scrollbar={{ draggable: true, dragSize: 30  }}
                                    loop={true}
                                    speed={1000}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false
                                    }}

                                >

                                    <SwiperSlide>
                                        <div className=''>
                                            <div className='mb-md-5'>
                                                <div className='me-4'>
                                                    <img className='' src="/ourBlogSlide.jpg" />
                                                </div>
                                                <div className='text-start mt-3'>
                                                    <p className='title-24 ourBlogsSlide-title text-primary font-weight-600 mb-0 '>What is an Insured in Business Insurance?</p>
                                                    <p className='title-16 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>May 6, 2023 • 3 MINS READ</p>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=''>
                                            <div className='mb-5'>
                                                <div className='me-4'>
                                                    <img className='' src="/ourBlogSlide.jpg" />
                                                </div>
                                                <div className='text-start mt-3'>
                                                    <p className='title-24 ourBlogsSlide-title text-primary font-weight-600 mb-0 '>What is an Insured in Business Insurance?</p>
                                                    <p className='title-16 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>May 6, 2023 • 3 MINS READ</p>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=''>
                                            <div className='mb-5'>
                                                <div className='me-4'>
                                                    <img className='' src="/ourBlogSlide.jpg" />
                                                </div>
                                                <div className='text-start mt-3'>
                                                    <p className='title-24 ourBlogsSlide-title text-primary font-weight-600 mb-0 '>What is an Insured in Business Insurance?</p>
                                                    <p className='title-16 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>May 6, 2023 • 3 MINS READ</p>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=''>
                                            <div className='mb-5'>
                                                <div className='me-4'>
                                                    <img className='' src="/ourBlogSlide.jpg" />
                                                </div>
                                                <div className='text-start mt-3'>
                                                    <p className='title-24 ourBlogsSlide-title text-primary font-weight-600 mb-0 '>What is an Insured in Business Insurance?</p>
                                                    <p className='title-16 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>May 6, 2023 • 3 MINS READ</p>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <style jsx scope>
                {`
                    
                    .ourBlogs {
                        padding-bottom: 180px;
                    }
                    .ourBlogs .commnHeading{
                        margin-bottom: 120px;
                    }
                    .ourBlogs .ourBlogsRight{
                        padding-left: 40px;
                    }f
                    .ourBlogsSlide-title{
                        width: 60%;
                    }
                    @media only screen and (min-width: 1200px) {
                        .container{
                            max-width: 1170px;
                        }

                    }
                    @media only screen and (min-width: 1399px) {
                        .container{
                            max-width: 1250px;
                        }

                    }
                    @media only screen and (min-width: 1750px) {
                        .container{
                            max-width: 1600px;
                        }

                    }
                    @media only screen and (max-width: 1450px) {
                        .title-64 {
                            font-size: 52px;
                            line-height: 64px;
                          }
                    }
                    @media only screen and (max-width: 575px) {
                        .ourBlogs {
                            padding-bottom: 70px;
                        }
                        .ourBlogs .ourBlogsSlider{
                            padding-right: 0;
                        }
                        .ourBlogs .ourBlogsRight{
                            padding-right: 0;
                        }
                        .ourBlogs .commnHeading{
                            margin-bottom: 30px;
                        }
                        .ourBlogsSlide-title{
                            width: 90%;
                        }
                        .mobContainer{
                            padding: 0 40px ;
                        }


                        .title-64{
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-48{
                            font-size: 21px;
                            line-height: 30px;
                        }
                        .title-36{
                            font-size: 24px;
                            line-height: 30px;
                        }
                        .title-24{
                            font-size: 18px;
                            line-height: 25px;
                        }
                        .title-20{
                            font-size: 15px;
                            line-height: 22px;
                            font-weight: 400;
                            
                        }
                        .title-18{
                            font-size: 12px;
                            line-height: 18px;
                            font-weight: 400;
                            
                        }
                        .ourBlogsLeft{
                           
                        }
                    }
                    
                    `}
            </style>
        </>
    )
}
