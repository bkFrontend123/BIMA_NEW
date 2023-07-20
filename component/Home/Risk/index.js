import React from 'react'
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
        {id: "bc1", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc2", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc3", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc4", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc5", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc6", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc7", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc8", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc9", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc10", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc11", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc12", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc13", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc14", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc15", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc16", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc17", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc18", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc19", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc20", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc21", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc22", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc23", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc24", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc25", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc26", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc27", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc28", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc29", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc30", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc31", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc32", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc33", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc34", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc35", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc36", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc37", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc38", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc39", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc40", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc41", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc42", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc43", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc44", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc45", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc46", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc47", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc48", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc49", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc50", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc51", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc52", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc53", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc54", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc55", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc56", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc57", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc58", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc59", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc60", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc61", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc62", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc63", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc64", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc65", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc66", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc67", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc68", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc69", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc70", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc71", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc72", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc73", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc74", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc75", title: "Large Fines", img: "/icons/risk5.svg" },
        {id: "bc76", title: "Business Insolvency", img: "/icons/risk1.svg" },
        {id: "bc77", title: "Business Closure", img: "/icons/risk2.svg" },
        {id: "bc78", title: "Personal Bankruptcy", img: "/icons/risk3.svg" },
        {id: "bc79", title: "Unsustainable Legal Fees", img: "/icons/risk4.svg" },
        {id: "bc80", title: "Large Fines", img: "/icons/risk5.svg" },

    ])
    const businessSolutions = ([
        {id: "bs1", title: "Directors & Officers Insurance", img: "/productIcons/liability/dAndO_icon.svg" },
        {id: "bs2", title: "Errors & Omissions Insurance", img: "/productIcons/liability/eAndO_icon.svg" },
        {id: "bs3", title: "General Liability Insurance", img: "/productIcons/liability/generalLiability_icon.svg" },
        {id: "bs4", title: "Product Liability Insurance", img: "/productIcons/liability/productLiability_icon.svg" },
        {id: "bs5", title: "Cyber Insurance", img: "/productIcons/liability/cyber_icon.svg" },
        {id: "bs6", title: "Crime Insurance", img: "/productIcons/liability/crime_icon.svg" },
        {id: "bs7", title: "Workmen's Compensation", img: "/productIcons/liability/workman_icon.svg" },
        {id: "bs8", title: "Fire Insurance", img: "/productIcons/asset/fire_icon.svg" },
        {id: "bs9", title: "Contractors All Risk", img: "/productIcons/engineering/contractorsAllRisk_icon.svg" },
        {id: "bs10", title: "Erection All Risk", img: "/productIcons/engineering/erectionAllRisk_icon.svg" },
        {id: "bs11", title: "Contractors Plant & Machinery", img: "/productIcons/engineering/contractorsPlant_icon.png" },
        {id: "bs12", title: "Marine Transit Policy", img: "/productIcons/marine/marine_icon.svg" },
        {id: "bs13", title: "Directors & Officers Insurance", img: "/productIcons/liability/dAndO_icon.svg" },
        {id: "bs14", title: "Errors & Omissions Insurance", img: "/productIcons/liability/eAndO_icon.svg" },
        {id: "bs15", title: "General Liability Insurance", img: "/productIcons/liability/generalLiability_icon.svg" },
        {id: "bs16", title: "Product Liability Insurance", img: "/productIcons/liability/productLiability_icon.svg" },
        {id: "bs17", title: "Cyber Insurance", img: "/productIcons/liability/cyber_icon.svg" },
        {id: "bs18", title: "Crime Insurance", img: "/productIcons/liability/crime_icon.svg" },
        {id: "bs19", title: "Workmen's Compensation", img: "/productIcons/liability/workman_icon.svg" },
        {id: "bs20", title: "Fire Insurance", img: "/productIcons/asset/fire_icon.svg" },
        {id: "bs21", title: "Contractors All Risk", img: "/productIcons/engineering/contractorsAllRisk_icon.svg" },
        {id: "bs22", title: "Erection All Risk", img: "/productIcons/engineering/erectionAllRisk_icon.svg" },
        {id: "bs23", title: "Contractors Plant & Machinery", img: "/productIcons/engineering/contractorsPlant_icon.png" },
        {id: "bs24", title: "Marine Transit Policy", img: "/productIcons/marine/marine_icon.svg" },
    ])

    return (
        <div className={`business-risk`}>
            <div className={` container`}>
                <div className={`row text-center`}>
                    <div className={`col-md-8 mx-auto`}>
                        {/*<div className='polyBox border-primary bg-blueLight text-primary title12 text-uppercase font-weight-600 mb-3'>The Problems</div>*/}
                        <h2 className='title-36 font-secondary mb-3 text-primary font-secondary font-weight-700'>Every business has <span className='text-yellow fst-italic'>risks</span></h2>
                        <p className='title-22 font-weight-500 text-primary px-0 px-lg-5 mb-0'>
                            No matter the industry or size of your business, 
                            <span className="d-none d-xl-block">we have got you covered.</span>
                            <span className="d-inline d-xl-none">we have got you covered..</span>
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
                            loop="true"
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
                                        <img src={item.img} className="text-start" />
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
                                        <img src={item.img} className="text-start" />
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
                            width: calc(100% - 40px);
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