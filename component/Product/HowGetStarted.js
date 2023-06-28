import React from 'react'
import Calender from '../Icons/Calender'
import WhatsApp from '../Icons/WhatsApp'

export default function HowGetStarted(props) {
    const {customClass} = props;
    return (
        <>

            <div className={`HowGetStarted ${customClass}`}>
                <div className='container'>
                    <div className={`row text-center getStarted`}>
                        <div className={`col-xl-6 `}>
                            <div className='bg-gray getStarted-left  overflow-hidden h-100'>
                                <img className="img-fluid h-100 object-fit-cover" src="/how-we-started.jpg" />
                            </div>
                        </div>
                        <div className={`col-xl-6`}>
                            <div className='getStarted-right h-100 bg-primary d-flex flex-column justify-content-between'>
                                <div className="">
                                    <div className='title-24 getStarted-rightSubTitle font-weight-400 text-white fst-italic@'>How do you get started?</div>
                                    <div className='title-32 getStarted-rightTitle font-secondary  mb-5 text-white font-weight-600 '>Schedule a consultation to see how BimaKavach can reduce your risk.</div>
                                </div>
                                <div className="getStarted-rightBottom">
                                    <div className="d-flex justify-content-center flex-column flex-md-row pb-2" >

                                        <a className="btnCommon  border-white btnBorder text-white font-weight-400 text-decoration-none" type="submit">
                                            <Calender iconColor="white" width="18" height="18" />
                                            <span className="ms-2"> Schedule a call</span>
                                        </a>
                                        <a className="btnCommon bg-white d-none d-md-flex align-items-cet text-primary text-decoration-none ms-md-5 bordre2 mt-3 mt-md-0" type="submit">
                                            <WhatsApp iconColor="primary" width="18" height="18" />
                                            <span className="ms-2"> WhatsApp us</span>
                                        </a>
                                        <a className="btnCommon bg-yellow d-flex d-md-none align-items-cet text-primary text-decoration-none ms-md-4 mt-3 mt-md-0" type="submit">
                                            <WhatsApp iconColor="primary" width="18" height="18" />
                                            <span className="ms-2"> WhatsApp us</span>
                                        </a>
                                    </div>
                                    <p className="title-15 getStarted-rightBottomDescrip text-white mb-0">Say hello to a spam-free zone! We respect your privacy, and we won't bombard you with unwanted calls.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx scope>
                {`
                .HowGetStarted{
                    margin-bottom: 250px;
                    }
                .getStarted-rightSubTitle{
                    margin-bottom: 32px;
                }
                .getStarted {
                    height: 795px;
                }

                .getStarted-left {
                    margin-right: 9px;
                }
                .getStarted-left img {
                    object-fit: cover;
                }
                .getStarted-right {
                    padding: 70px 95px;
                    margin-left: 9px;
                }
                .getStarted-rightBottomDescrip{
                    font-weight: 500;
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

                @media only screen and (max-width: 575px) {
                    .container{
                        padding: 0;
                    }
                    .HowGetStarted{
                    margin-bottom: 64px;
                    }
                    .getStarted{
                        height: auto;
                    }
                    .getStarted-left{
                        margin-bottom: 50px;
                        height: auto !important;
                    }
                    .getStarted-rightSubTitle{
                        margin-bottom: 8px;
                    }
                    .getStarted-right{
                        padding: 35px 46px;
                        text-align: left;
                    }
                    .getStarted-rightBottom .btnCommon{
                        font-size: 18px;
                        line-height: 27px;
                    }
                   
                    .getStarted-rightBottomDescrip{
                        font-weight: 400;
                        text-align: center;
                    }

                    .title-32 {
                        font-size: 24px;
                        line-height: 28px;
                    }                 
                    .title-24 {
                        font-size: 18px;
                        line-height: 27px;
                    }
                    .title-15{
                        font-size: 12px;
                        line-height: 18px;                    
                    }
                }
                @media only screen and (min-width: 1640px) {
                    .container{
                        max-width: 1640px;
                    }
                }
                `}
            </style>
        </>
    )
}
