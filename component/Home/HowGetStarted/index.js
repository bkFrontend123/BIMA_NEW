import React, { useState } from 'react'
import Image from 'next/image'
import {Dropdown} from 'react-bootstrap';
import CalendyModal from '../../Modal/CalendyModal'
import headerStyle from '../../HeaderPlain/style.module.css'
import Calender from '../../Icons/Calender'
import DropdownArrow from '../../Icons/DropdownArrow'

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
                                    <div className="d-flex flex-row pb-2" >
                                        <a target="_blank" href="https://yourstory.com/smbstory/indore-bimakavach-helping-small-business-msme-insurance" className="btnCommon btn-primary d-flex align-items-cet text-white text-decoration-none bordre2 mt-3 mt-md-0">
                                            <span>View Article</span>
                                        </a>
                                    </div>
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
                                        <div className={`hdrDrpdwn mt-3 mt-md-0 ms-md-3 ${headerStyle.hdrDrpdwn} ${headerStyle.hdrTalkDrpdwn}`}>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="talk-expert" className={`btnCommon bg-white w-100`}>
                                                    <i className="me-2">
                                                    <svg width="18" height="18" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.40898 5.75924L6.24938 7.23365C6.65292 7.80971 7.11198 8.35878 7.62652 8.87338C8.14112 9.38791 8.69018 9.84698 9.26625 10.2505L10.7407 9.09091L14.6666 10.3024V13.2954C14.6641 13.8466 14.4219 14.3695 14.0031 14.728C13.6569 15.0242 13.2153 15.1919 12.7605 15.1635C9.89445 14.9844 7.07972 13.8 4.88978 11.6101C2.69986 9.42018 1.51542 6.60547 1.33636 3.73937C1.30796 3.28463 1.47563 2.84302 1.7719 2.49686C2.13035 2.07805 2.65325 1.83585 3.20452 1.83331H6.19748L7.40898 5.75924ZM11.0155 10.5711L13.3333 11.2863V13.2914C13.3319 13.4544 13.26 13.609 13.1361 13.715C13.0216 13.813 12.9129 13.8371 12.8437 13.8328C10.2893 13.6732 7.78405 12.6188 5.83258 10.6673C3.88112 8.71585 2.82669 6.21062 2.6671 3.65623C2.66278 3.58697 2.68689 3.47832 2.78487 3.36385C2.89094 3.23992 3.04545 3.16802 3.2085 3.16665H5.21356L5.92881 5.48443L4.58926 7.18758L5.1573 7.99858C5.60513 8.63791 6.11409 9.24651 6.68372 9.81618C7.25338 10.3858 7.86198 10.8948 8.50132 11.3426L9.31232 11.9106L11.0155 10.5711Z" fill="currentColor"></path>
                                                    </svg>															
                                                    </i>
                                                    <span>Talk to an expert</span>
                                                    <i className='ms-2'>
                                                    <DropdownArrow width="11" height="7" />
                                                    </i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className={headerStyle.hdrDrpMenu}>
                                                    <div>
                                                        <ul>
                                                            <li>
                                                            <i>
                                                                <Image
                                                                src="/icons/whatsapp_icon.svg"
                                                                width={18}
                                                                height={19}
                                                                alt="Whatsapp"
                                                                loading="lazy"
                                                                />
                                                            </i>
                                                            <div>
                                                                <span>WhatApp us:</span>
                                                                <a href="https://wa.me/9036554785" target="_blank">+91 9036554785</a>
                                                            </div>
                                                            </li>
                                                            <li>
                                                            <i>
                                                                <Image
                                                                src="/icons/call_fill_icon.svg"
                                                                width={13}
                                                                height={13}
                                                                alt="Call"
                                                                loading="lazy"
                                                                />
                                                            </i>
                                                            <div>
                                                                <span>For Liability Insurance:</span>
                                                                <a href="tel:9036554785">+91 9036554785</a>
                                                            </div>
                                                            </li>
                                                            <li>
                                                            <i>
                                                                <Image
                                                                src="/icons/call_fill_icon.svg"
                                                                width={13}
                                                                height={13}
                                                                alt="Call"
                                                                loading="lazy"
                                                                />
                                                            </i>
                                                            <div>
                                                                <span>For P&C Insurance:</span>
                                                                <a href="tel:9035492594">+91 9035492594</a>
                                                            </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <p className="title-15 getStarted-rightBottomDescrip mb-0">Say hello to a spam-free zone! We respect your privacy, and we won't bombard you with unwanted calls.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CalendyModal
                calendyLink="tejas"
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
                    transition: all 0.4s ease 0s;
                    border: 2px solid var(--mute1);
                    overflow: hidden;
                    padding: 70px 125px 70px 95px !important;
                    z-index: 1;
                }
                .getStarted-left:hover {
                    background-color: var(--vt-c-yellow);
                    border-color: var(--black);
                    padding: 70px 110px !important;
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
                .getStarted-left:after {
                    background-image: url(/cta_grid.webp);
                }
                .getStarted-left:hover::after {
                    filter: sepia(1);
                }
                .getStarted-left img {
                    // object-fit: cover;
                }
                .getStarted-left:hover .getStarted-rightBottom p {
                    color: var(--black);
                }
                .getStarted-left .getStarted-rightBottom .btnCommon {
                    margin-left: -180px;
                    opacity: 0;
                    transition: all 0.5s ease 0s;
                }
                .getStarted-left:hover .getStarted-rightBottom .btnCommon {
                    margin-left: 0;
                    opacity: 1;
                    color: var(--whiteText) !important;
                }
                .getStarted-right {
                    padding: 70px 125px;
                }
                .getStarted-rightBottomDescrip{
                    color: #A3A3A3;
                }
                .getStarted-rightBottom .btnCommon.btnBorder:hover{
                    color: var(--whiteText) !important;
                }
                .getStarted-rightBottom .btnCommon.bg-white {
                    margin-left: 20px;
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
                    .getStarted-left .getStarted-rightBottom .btnCommon {
                        padding: 22px 42px;
                        margin-left: -180px;
                        opacity: 0;
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
                        padding: 60px !important;
                    }
                    .getStarted-left:hover {
                        margin-right: 0;
                        padding: 60px 70px !important;
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
                        height: auto;
                    }
                    .getStarted-right {
                        padding: 40px 35px;
                    }
                    .getStarted-rightBottom .btnCommon.bg-white{
                        margin-left: 30px;
                    }
                }
                @media only screen and (max-width:767px) {
                    .getStarted-left,
                    .getStarted-left:hover {
                        background-color: var(--vt-c-yellow);
                        padding: 40px !important;
                    }
                    .getStarted-left .getStarted-rightBottom .btnCommon {
                        margin-left: 0;
                        opacity: 1;
                        color: var(--whiteText) !important;
                    }
                    .getStarted-left .getStarted-rightBottom p {
                        color: var(--black);
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
                        //font-size: 18px;
                        //line-height: 27px;
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
