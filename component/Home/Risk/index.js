import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
function BusinessRisk() {

    const businessSituations = ([
        { id: "bs1", title: "Corruption" },
        { id: "bs2", title: "Theft" },
        { id: "bs3", title: "Money Laundering" },
        { id: "bs4", title: "Cyber Fraud" },
        { id: "bs5", title: "Phishing" },
        { id: "bs6", title: "Counterfeit" },
        { id: "bs7", title: "Ransomware" },
        { id: "bs8", title: "Money Laundering" },
        { id: "bs9", title: "Cyber Fraud" },
        { id: "bs10", title: "Phishing" },
        { id: "bs11", title: "Corruption" },
        { id: "bs12", title: "Theft" },
        { id: "bs13", title: "Money Laundering" },
        { id: "bs14", title: "Cyber Fraud" },
        { id: "bs15", title: "Phishing" },
        { id: "bs16", title: "Counterfeit" },
        { id: "bs17", title: "Ransomware" },
        { id: "bs18", title: "Money Laundering" },
        { id: "bs19", title: "Cyber Fraud" },
        { id: "bs20", title: "Phishing" },
        { id: "bs21", title: "Corruption" },
        { id: "bs22", title: "Theft" },
        { id: "bs23", title: "Money Laundering" },
        { id: "bs24", title: "Cyber Fraud" },
        { id: "bs25", title: "Phishing" },
        { id: "bs26", title: "Counterfeit" },
        { id: "bs27", title: "Ransomware" },
        { id: "bs28", title: "Money Laundering" },
        { id: "bs29", title: "Cyber Fraud" },
        { id: "bs30", title: "Phishing" },
        { id: "bs31", title: "Corruption" },
        { id: "bs32", title: "Theft" },
        { id: "bs33", title: "Money Laundering" },
        { id: "bs34", title: "Cyber Fraud" },
        { id: "bs35", title: "Phishing" },
        { id: "bs36", title: "Counterfeit" },
        { id: "bs37", title: "Ransomware" },
        { id: "bs38", title: "Money Laundering" },
        { id: "bs39", title: "Cyber Fraud" },
        { id: "bs40", title: "Phishing" },

    ])
    const businessConsequences = ([
        {id: "bc1", title: "Business Insolvency", img: "/icons/risk1.svg", width: "34", height: "30" },
        {id: "bc2", title: "Business Closure", img: "/icons/risk2.svg", width: "34", height: "30" },
        {id: "bc3", title: "Personal Bankruptcy", img: "/icons/risk3.svg", width: "33", height: "30" },
        {id: "bc4", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg", width: "31", height: "30" },
        {id: "bc5", title: "Large Fines", img: "/icons/risk5.svg", width: "42", height: "34" },
        {id: "bc6", title: "Business Insolvency", img: "/icons/risk1.svg", width: "34", height: "30" },
        {id: "bc7", title: "Business Closure", img: "/icons/risk2.svg", width: "34", height: "30" },
        {id: "bc8", title: "Personal Bankruptcy", img: "/icons/risk3.svg", width: "33", height: "30" },
        {id: "bc9", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg", width: "31", height: "30" },
        {id: "bc10", title: "Large Fines", img: "/icons/risk5.svg", width: "42", height: "34" },
        {id: "bc11", title: "Business Insolvency", img: "/icons/risk1.svg", width: "34", height: "30" },
        {id: "bc12", title: "Business Closure", img: "/icons/risk2.svg", width: "34", height: "30" },
        {id: "bc13", title: "Personal Bankruptcy", img: "/icons/risk3.svg", width: "33", height: "30" },
        {id: "bc14", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg", width: "31", height: "30" },
        {id: "bc15", title: "Large Fines", img: "/icons/risk5.svg", width: "42", height: "34" },
        {id: "bc16", title: "Business Insolvency", img: "/icons/risk1.svg", width: "34", height: "30" },
        {id: "bc17", title: "Business Closure", img: "/icons/risk2.svg", width: "34", height: "30" },
        {id: "bc18", title: "Personal Bankruptcy", img: "/icons/risk3.svg", width: "33", height: "30" },
        {id: "bc19", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg", width: "31", height: "30" },
        {id: "bc20", title: "Large Fines", img: "/icons/risk5.svg", width: "42", height: "34" },
        {id: "bc21", title: "Business Insolvency", img: "/icons/risk1.svg", width: "34", height: "30" },
        {id: "bc22", title: "Business Closure", img: "/icons/risk2.svg", width: "34", height: "30" },
        {id: "bc23", title: "Personal Bankruptcy", img: "/icons/risk3.svg", width: "33", height: "30" },
        {id: "bc24", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg", width: "31", height: "30" },
        {id: "bc25", title: "Large Fines", img: "/icons/risk5.svg", width: "42", height: "34" },
        {id: "bc26", title: "Business Insolvency", img: "/icons/risk1.svg", width: "34", height: "30" },
        {id: "bc27", title: "Business Closure", img: "/icons/risk2.svg", width: "34", height: "30" },
        {id: "bc28", title: "Personal Bankruptcy", img: "/icons/risk3.svg", width: "33", height: "30" },
        {id: "bc29", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg", width: "31", height: "30" },
        {id: "bc30", title: "Large Fines", img: "/icons/risk5.svg", width: "42", height: "34" },
        {id: "bc31", title: "Business Insolvency", img: "/icons/risk1.svg", width: "34", height: "30" },
        {id: "bc32", title: "Business Closure", img: "/icons/risk2.svg", width: "34", height: "30" },
        {id: "bc33", title: "Personal Bankruptcy", img: "/icons/risk3.svg", width: "33", height: "30" },
        {id: "bc34", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg", width: "31", height: "30" },
        {id: "bc35", title: "Large Fines", img: "/icons/risk5.svg", width: "42", height: "34" },
        {id: "bc36", title: "Business Insolvency", img: "/icons/risk1.svg", width: "34", height: "30" },
        {id: "bc37", title: "Business Closure", img: "/icons/risk2.svg", width: "34", height: "30" },
        {id: "bc38", title: "Personal Bankruptcy", img: "/icons/risk3.svg", width: "33", height: "30" },
        {id: "bc39", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg", width: "31", height: "30" },
        {id: "bc40", title: "Large Fines", img: "/icons/risk5.svg", width: "42", height: "34" },
    ])
    const businessSolutions = ([
        {id: "bs1", title: "Directors & Officers Insurance", img: "/productIcons/liability/dAndO_icon.svg", width: "34", height: "34" },
        {id: "bs2", title: "Errors & Omissions Insurance", img: "/productIcons/liability/eAndO_icon.svg", width: "34", height: "34" },
        {id: "bs3", title: "General Liability Insurance", img: "/productIcons/liability/generalLiability_icon.svg", width: "34", height: "34" },
        {id: "bs4", title: "Product Liability Insurance", img: "/productIcons/liability/productLiability_icon.svg", width: "34", height: "34" },
        {id: "bs5", title: "Cyber Insurance", img: "/productIcons/liability/cyber_icon.svg", width: "34", height: "34" },
        {id: "bs6", title: "Crime Insurance", img: "/productIcons/liability/crime_icon.svg", width: "34", height: "34" },
        {id: "bs7", title: "Workmen's Compensation", img: "/productIcons/liability/workman_icon.svg", width: "34", height: "34" },
        {id: "bs8", title: "Fire Insurance", img: "/productIcons/asset/fire_icon.svg", width: "34", height: "34" },
        {id: "bs9", title: "Contractor's All Risk", img: "/productIcons/engineering/contractorsAllRisk_icon.svg", width: "34", height: "34" },
        {id: "bs10", title: "Erection All Risk", img: "/productIcons/engineering/erectionAllRisk_icon.svg", width: "34", height: "34" },
        {id: "bs11", title: "Contractor's Plant & Machinery", img: "/productIcons/engineering/contractorsPlant_icon.svg", width: "34", height: "34" },
        {id: "bs12", title: "Marine Transit Policy", img: "/productIcons/marine/marine_icon.svg", width: "34", height: "34" },
    ])

    return (
        <div className={`business-risk`}>
            <div className={` container`}>
                <div className={`row text-center`}>
                    <div className={`col-md-8 mx-auto`}>
                        {/*<div className='polyBox border-primary bg-blueLight text-primary title12 text-uppercase font-weight-600 mb-3'>The Problems</div>*/}
                        <h2 className='title-36 font-secondary mb-3 text-primary font-secondary font-weight-700'>Simple Solutions to Complex <span className='text-yellow fst-italic'>risks</span></h2>
                        <p className='title-22 font-weight-500 text-primary px-0 px-lg-5 mb-0'>
                            No matter the industry or size of your business, 
                            <span className="d-none d-xl-block">we have got you covered</span>
                            <span className="d-inline d-xl-none">we have got you covered</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={`container business-riskSliderBox`}>
                <div className={`business-riskSliderBox-row`}>
                    <div className='bg-primary pt-4 pt-xl-5'>
                        <div className={`text-center`}>
                            <div className='title32 font-secondary text-white text-center font-weight-600 mb-4 ps-lg-5'><i>Situations</i></div>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            navigation={false}
                            // slidesPerView={"5"}
                            className={`businessRisk-slider smoothSwiper`}
                            itemclass="mx-5"
                            spaceBetween={30}
                            slidesPerView={6.5}
                            autowidth="true"
                            infinite="true"
                            loop="true"
                            speed={4000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                1399: {
                                    slidesPerView: 6.5,
                                },
                                1200: {
                                    slidesPerView: 5.5,
                                },
                                992: {
                                    slidesPerView: 4.5,
                                },
                                768: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20
                                },
                                576: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20
                                },
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                            }}

                        >
                            {businessSituations.map((item) =>
                                <SwiperSlide key={item.id}>
                                    <div className='businessRisk-sliderItem font-secondary@ font-weight-500 title20 text-center text-white'>
                                        <span>{item.title}</span>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <div className='bg-primary py-4 py-xl-5'>
                        <div className={`text-center`}>
                            <div className='title32 font-secondary text-white text-center font-weight-600 mb-4 ps-lg-5'><i>Consequences</i></div>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            // dir="rtl"
                            className={`businessRisk-slider businessRisk-sliderRTL smoothSwiper`}
                            itemclass="mx-5"
                            spaceBetween={30}
                            slidesPerView={4.5}
                            autowidth="true"
                            infinite="true"
                            loop={true}
                            loopedSlides={50}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                1399: {
                                    slidesPerView: 6.5,
                                },
                                1200: {
                                    slidesPerView: 5.5,
                                },
                                992: {
                                    slidesPerView: 4.5,
                                },
                                768: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20
                                },
                                576: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20
                                },
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                            }}  
                        >
                            {businessConsequences.map((item) =>
                                <SwiperSlide className="text-start" key={item.id}>
                                    <div className='title20 font-weight-500 businessRisk-sliderItem text-white'>
                                        <Image src={item.img} className="text-start mb-2" width={item.width} height={item.height} alt={item.title} loading="lazy" />
                                        <span className='text-center'>{item.title}</span>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <div className="bg-white py-4">
                        <div className={`text-center`}>
                            <div className='title32 font-secondary text-primary text-center font-weight-600 mb-4 ps-lg-5'><i>Solutions</i></div>
                        </div> 
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            // dir="rtl"
                            className={`businessRisk-slider businessRisk-sliderRTL smoothSwiper`}
                            itemclass="mx-5"
                            spaceBetween={30}
                            slidesPerView={4.5}
                            autowidth="true"
                            infinite="true"
                            loop="true"
                            speed={4000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                1399: {
                                    slidesPerView: 6.5,
                                },
                                1200: {
                                    slidesPerView: 5.5,
                                },
                                992: {
                                    slidesPerView: 4.5,
                                },
                                768: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20
                                },
                                576: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20
                                },
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                            }}  
                        >
                            {businessSolutions.map((item) =>
                                <SwiperSlide className="text-start" key={item.id}>
                                    <div className='title18 font-weight-500 businessRisk-sliderItem border-primary text-black'>
                                        <Image src={item.img} className="text-start mb-2" width={item.width} height={item.height} alt={item.title} loading="lazy" />
                                        <span className='text-center'>{item.title}</span>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block" style={{ height: "90px" }}></div>
            <div className="d-blok d-md-none" style={{ height: "70px" }}></div>

            <style jsx scope>
                {`
                    .business-riskSliderBox{
                        margin-top: 62px;
                    }
                    .business-riskSliderBox-row {
                        border: 2px solid var(--vt-c-blue);
                    }
                    .business-risk .businessRisk-sliderItem{
                        border: 2px solid #fff;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 10px 24px;
                    }
                    
                    .business-risk .businessRisk-sliderItem img{
                        height: 35px;
                        margin-bottom: 10px;
                     }
                     .swiper-slide{
                        width: auto !important;
                     }

                     @media (min-width: 1300px){
                         .container {
                             max-width: 1250px;
                            }
                        }
                        @media (min-width: 1399px){
                           .container {
                               max-width: 1300px;
                           }
                       }
                        @media (min-width: 1650px){
                           .container {
                               max-width: 1560px !important;
                           }
                       }
                      @media only screen and (max-width: 575px) {
                        .business-riskSliderBox {
                            margin-top: 50px;
                            width: 100%;
                        }
                        .title-36{
                            font-size: 26px;
                            line-height: 32px;
                        }
                        .title-22{
                            font-size: 18px;
                            line-height: 27px;
                        }
                        .business-riskSliderBox-row {
                            margin: 0;
                        }
                        .business-riskSliderBox-row .col {
                            padding: 0;
                        }

                    }
                `}
            </style>
        </div>
    )
}

export default BusinessRisk