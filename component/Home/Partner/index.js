import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
function Partner() {

    const partner = [
        { id: "p1", img: "/partner1.svg" },
        { id: "p2", img: "/partner2.svg" },
        { id: "p3", img: "/partner3.svg" },
        { id: "p4", img: "/partner4.svg" },
        { id: "p5", img: "/partner3.svg" },
        { id: "p6", img: "/partner2.svg" },
        { id: "p7", img: "/partner1.svg" },
        { id: "p8", img: "/partner2.svg" },
        { id: "p9", img: "/partner3.svg" },
        { id: "p10", img: "/partner4.svg" },
        { id: "p11", img: "/partner3.svg" },
        { id: "p12", img: "/partner2.svg" },
    ]

    return (
        <div className={`partner text-center container`}>
            <h2 className='partnerTitle title-36 text-primary font-secondary font-weight-700 mb-4'>Partner General Insurance Companies</h2>
            <div className={`row `}>
                <div className={`col-xl-7 mx-auto`}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        arrows="true"
                       
                        className={``}
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
                                <img
                                    src={item.img}
                                    alt="Bimakavach"
                                />
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
                    @media only screen and (max-width: 575px) {
                        .title-36.partnerTitle{
                            font-size: 24px;
                            line-height: 32px;
                        }
                    } 
                `}
            </style>
        </div>
    )
}

export default Partner