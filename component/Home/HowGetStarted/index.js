import React, { useState } from 'react'
import Image from 'next/image'

import CalendyModal from '../../Modal/CalendyModal'

import Calender from '../../Icons/Calender'
import WhatsApp from '../../Icons/WhatsApp'

export default function HowGetStarted(props) {
    const {customClass} = props;
    const [showCalendy, setShowCalendy] = useState(false);
    const handleCloseCalendy = () => setShowCalendy(false);
    const handleShowCalendy = () => setShowCalendy(true);
    return (
        <>
            <div className={`HowGetStarted ${customClass}`}>
                <div className='container'>
                    <div className={`row g-4 g-xl-5 getStarted`}>
                        <div className={`col-xl-6 `}>
                            <div className='getStarted-left getStarted-right h-100 bg-mute1 d-flex flex-column justify-content-between'>
                                <div className="">
                                    <div className='getStarted-rightSubTitle'>
                                        <Image src="/yourStoryLogo.svg" width="163" height="63" alt="Your Story" />
                                    </div>
                                    <div className='title-32 getStarted-rightTitle font-secondary mb-5 text-black font-weight-700 fst-italic'>Indore-based BimaKavach caters to the Business Insurance needs of Small & Medium Enterprises</div>
                                </div>
                                <div className="getStarted-rightBottom">
                                    <p className="title-15 getStarted-rightBottomDescrip mb-0">This is an article by YouStory written by Palak Agarwal and published on October, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-xl-6`}>
                            <div className='getStarted-right text-center h-100 bg-primary d-flex flex-column justify-content-between'>
                                <div className="">
                                    <div className='title-22 getStarted-rightSubTitle font-weight-400 text-white fst-italic@'>How do you get started?</div>
                                    <div className='title-32 getStarted-rightTitle font-secondary mb-5 text-white font-weight-600'>Schedule a consultation to see how BimaKavach can reduce your risk.</div>
                                </div>
                                <div className="getStarted-rightBottom">
                                    <div className="d-flex justify-content-center flex-column flex-md-row pb-2" >
                                        <a className="btnCommon  border-white btnBorder text-white font-weight-400 text-decoration-none"  onClick={handleShowCalendy}>
                                            <Calender iconColor="white" width="18" height="18" />
                                            <span className="ms-2"> Schedule a call</span>
                                        </a>
                                        <a href="tel:+91 9876543210" className="btnCommon bg-white d-none d-md-flex align-items-cet text-primary text-decoration-none  bordre2 mt-3 mt-md-0">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <WhatsApp iconColor="primary" width="18" height="18" />
                                            <span className="ms-2">Talk to Us</span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </a>
                                        <a href="tel:+91 9876543210" className="btnCommon bg-yellow d-flex d-md-none align-items-cet text-primary text-decoration-none ms-md-4 mt-3 mt-md-0">
                                            &nbsp;&nbsp;
                                            <WhatsApp iconColor="primary" width="18" height="18" />
                                            <span className="ms-2">Talk to Us</span>
                                            &nbsp;&nbsp;
                                        </a>
                                    </div>
                                    <p className="title-15 getStarted-rightBottomDescrip mb-0">Say hello to a spam-free zone! We respect your privacy, and we won't bombard you with unwanted calls.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CalendyModal
                show={showCalendy}
                handleClose={handleCloseCalendy}
            />
            <style jsx scope>
                {`
                .getStarted-rightSubTitle{
                    margin-bottom: 32px;
                }
                .getStarted {
                    height: 795px;
                }

                .getStarted-left {
                    position: relative;
                    z-index: 1;
                }
                .getStarted-left::before,
                .getStarted-left::after {
                    position: absolute;
                    content: "";
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    display: block;
                    z-index: -1;
                }
                .getStarted-left:before {
                    background-image: url(/cta_patt.png);
                }
                .getStarted-left:after {
                    background-image: url(/cta_grid.png);
                }
                .getStarted-left img {
                    // object-fit: cover;
                }
                .getStarted-right {
                    padding: 70px 125px;
                }
                .getStarted-rightBottomDescrip{
                    color: #A3A3A3;
                }
                .getStarted-rightBottom .btnCommon.bg-white{
                    margin-left: 48px;
                }
                
                 .title-32 {
                    font-size: 32px;
                    line-height: 48px;
                }                 
                .title-24 {
                    font-size: 24px;
                    line-height: 33px;
                }
                .title-15{
                    font-size: 15px;
                    line-height: 22px;                    
                }

                @media only screen and (min-width: 1300px) {
                    .container {
                        max-width: 1230px;
                    }
                }
                @media only screen and (min-width: 1399px) {
                    .container {
                        max-width: 1300px;
                    }
                }
                @media only screen and (max-width: 1600px) {
                    .getStarted{
                        height: 700px;
                    }
                    .getStarted-left {
                        margin-right: 0;
                    }
                    .getStarted-right {
                        padding: 60px 70px;
                      }
                }
                @media only screen and (max-width: 1450px) {
                    .getStarted{
                        height: 650px;
                    }
                    .getStarted-right {
                        padding: 50px 60px;
                    }
                }
                @media only screen and (max-width: 1399px){
                    .getStarted{
                        height: 600px;
                    }
                    .getStarted-right {
                        padding: 40px 35px;
                    }
                    .getStarted-rightBottom .btnCommon.bg-white{
                        margin-left: 30px;
                    }
                }
                @media only screen and (max-width: 575px) {
                    .container{
                        padding: 0;
                    }
                    .row{
                        margin: 0;
                    }
                    .col-xl-6{
                        padding: 0;
                    }
                    .getStarted{
                        height: auto;
                    }
                    .getStarted-left{
                        margin-bottom: 0;
                        height: auto !important;
                    }
                    .getStarted-rightSubTitle{
                        margin-bottom: 8px;
                    }
                    .getStarted-right{
                        padding: 32px;
                        text-align: left;
                        width: calc(100% - 40px);
                        margin-left: 20px;
                    }
                    .getStarted-rightBottom .btnCommon{
                        font-size: 18px;
                        line-height: 27px;
                    }
                   
                    .getStarted-right .getStarted-rightBottomDescrip{
                        font-weight: 400;
                        text-align: center;
                        margin-top: 20px;
                    }

                    .title-32 {
                        font-size: 24px;
                        line-height: 28px;
                    }                 
                    .title-24 {
                        font-size: 18px;
                        line-height: 27px;
                    }
                    .title-22 {
                        font-size: 18px;
                        line-height: 30px;
                    }
                    .title-15{
                        font-size: 12px;
                        line-height: 18px;                    
                    }
                }
                @media only screen and (min-width: 1640px) {
                    .container{
                        max-width: 1640px !important;
                    }
                }
                `}
            </style>
        </>
    )
}
