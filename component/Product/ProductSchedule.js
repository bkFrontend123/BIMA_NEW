import React, { useState } from 'react'
import Image from 'next/image'

import {Dropdown} from 'react-bootstrap';

import CalendyModal from '../Modal/CalendyModal'

import productStyle from '@/assets/css/product.module.css'
import headerStyle from '../HeaderPlain/style.module.css'

import DropdownArrow from '../Icons/DropdownArrow'

export default function ProductSchedule() {
    const [showCalendy, setShowCalendy] = useState(false);
    const handleCloseCalendy = () => setShowCalendy(false);
    const handleShowCalendy = () => setShowCalendy(true);
    return (
        <>
            <div className='text-center'>
                <div className="d-flex justify-content-center flex-column flex-sm-row" >
                    <a className={`btnCommon btnBorder border-primary border2 text-primary me-lg-4 text-decoration-none ${productStyle.btnCommon}`} onClick={handleShowCalendy}>
                        <img src='/icons/calender.svg' width="22px" />
                        <span className='ms-2'>Schedule a call</span>
                    </a>
                    <div className={`hdrDrpdwn mt-4 mt-md-0 ${headerStyle.hdrDrpdwn} ${headerStyle.hdrTalkDrpdwn}`}>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="talk-expert" className={`btnCommon yellowBtn ${productStyle.btnCommon} ${productStyle.yellowBtn}`}>
                                <i className="me-2">
                                <svg width="23" height="23" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <p className={`title-15 mt-4 mb-0 text-blueGray font-weight-500 ${productStyle.productStartupBottomDecrip}`}>Say hello to a spam-free zone! We respect your privacy and <span className='d-sm-inline d-none'><br></br></span> won't bombard you with unwanted calls.</p>
            </div>
            <CalendyModal
                calendyLink="tejas"
                show={showCalendy}
                handleClose={handleCloseCalendy}
            />
        </>
    )
}
