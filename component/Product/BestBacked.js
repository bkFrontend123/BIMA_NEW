import React from "react";
import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Autoplay, Pagination, Navigation, Grid } from "swiper";

export default function BestBacked(props) {
    const best = ([
        { id: "b1", img: "/backBest1.webp", width: "182", height: "93" },
        { id: "b2", img: "/backBest2.webp", width: "181", height: "58" },
        { id: "b3", img: "/backBest3.webp", width: "165", height: "73" },
        { id: "b4", img: "/backBest4.webp", width: "182", height: "75" },
    ]) 
    return (
        <>
            <div className="backedBest">
                <Container>
                    <Row className={`text-center`}>
                        <Col md={8} className={`mx-auto`}>
                            <div className='commnHeading'>
                                <div className={`title-36 font-secondary mb-4 text-primary font-weight-700 ${props.titleClass}`}>Backed by <span className="text-yellow fst-italic">The Best</span></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-md-4 pt-2">
                        <Col md={10} className="mx-auto">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay, Grid]}
                                arrows="true"
                                className={``}
                                loop="false"
                                speed={3000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false
                                }}
                                breakpoints={{
                                    1399: {
                                        slidesPerView: 4,
                                        spaceBetween: 50
                                      },
                                      1200: {
                                        slidesPerView: 4,
                                      },
                                      992: {
                                        slidesPerView: 2,
                                      },
                                      768: {
                                          slidesPerView: 2,
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
                                            <Image src={item.img} width={item.width} height={item.height} alt="Bimakavach" loading="lazy" />
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </Col>
                    </Row>
                    <div className="d-none d-md-block" style={{height: "90px"}}></div>
                    <div className="d-blok d-md-none" style={{height: "40px"}}></div>
                </Container>
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