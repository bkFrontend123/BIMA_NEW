import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Offcanvas, Button, Tabs, Tab} from 'react-bootstrap';

import style from './style.module.css'
import list from '@/assets/css/list.module.css'
import offcanvas from '@/assets/css/offcanvas.module.css'
import commonTabs from '@/assets/css/commonTabs.module.css'

import instantIcon from '../../../public/icons/instantIcon.png'
import star from '../../../public/icons/star.svg'
import arrowRight_white from '../../../public/icons/arrowRight-white.svg'

export default function PolicyCard(props) {
    const {customClass, policyLogo, logoWidth, logoHeight, title, listText1, listText2, listText3, price, priceAmount, children, policyName, policyCover, policyPremium, featuresIncluded, exclusions, variant } = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={`${style.policyCol} ${customClass} ${variant ? style.policySimpleCol : null}`}>
                {/*<div className={`${style.policyInstant}`}>
                    <i><Image src={instantIcon} width={15} height={15} alt="Instant Policy" /></i> Instant Policy
                </div>*/}
                <div className={`${style.policyCardHdr}`}>
                    <i>
                        <Image
                            src={policyLogo}
                            alt={title}
                            className={`${style.policyCardLogo}`}
                        />
                    </i>
                    <h4>{title}</h4>
                    <p><Image src={star} alt="star" /> Star Features</p>
                </div>
                <div className={`${style.policyCardList}`}>
                    <div className={`${list.list} ${list.smallList} ${variant ? list.exSmallList : null}`}>
                        <ul>
                            <li className='d-flex'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                </svg>
                                <span>{listText1}</span>
                            </li>
                            <li className='d-flex'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                </svg>
                                <span>{listText2}</span>
                            </li>
                            <li className='d-flex'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                </svg>
                                <span>{listText3}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*<div className={`${style.policyFeaBtn}`}>
                    <Link href="" onClick={handleShow}>View all features</Link>
                </div>*/}
                <div className={`${style.policyPrice} ${`d-${price}`}`}>
                    <span>₹ {priceAmount}</span> <small>+ GST</small>
                </div>
                <div className={`${style.policyCardFtr} d-flex align-items-center justify-content-between gap-2`}>
                    {children}
                </div>
            </div>
            <div className={`${offcanvas.commonOffcanvasOuter}`}>
                <Offcanvas show={show} onHide={handleClose} placement="end" className={`${offcanvas.commonOffcanvasDiv}`}>
                    <Offcanvas.Header className={`${offcanvas.commonOffcanvasHeaderDiv}`}>
                        <div className={`${offcanvas.commonOffcanvasHeader} ${style.commonOffcanvasHeader}`}>
                            <Link href="" className={`${offcanvas.commonOffcanvasClose}`} onClick={handleClose}>
                                <Image src={arrowRight_white} alt="close" /> Close
                            </Link>
                            <div className={`${style.policyOffcanvasHdrTop}`}>
                                <i>
                                    <Image
                                        src={policyLogo}
                                        alt={title}
                                        width={logoWidth}
                                        height={logoHeight}
                                    />
                                </i>
                                <div>
                                    <p>Plan name <span>{policyName}</span></p>
                                </div>
                            </div>
                            <div className={`${style.policyOffcanvasHdrBtm}`}>
                                <div>
                                    <div>
                                        <p>Cover <span>{policyCover}</span></p>
                                    </div>
                                    <div>
                                        <p>Premium Rs. <span>{policyPremium}</span></p>
                                    </div>
                                </div>
                                <div>
                                    <Button variant="primary" className='btnCommon yellowBtn' type="button">
                                        <span>Download quote</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={`${offcanvas.commonOffcanvasBodyDiv}`}>
                        <div className={`${offcanvas.commonOffcanvasBody}`}>
                            <Tabs
                                defaultActiveKey="featuresIncluded"
                                id="policyOffcanvasFeatures"
                                className={`${commonTabs.commonTabs} commonTabs`}
                            >
                                <Tab eventKey="featuresIncluded" title="Features Included">
                                    <div className={`${offcanvas.commonOffcanvasFeaList}`}>
                                        <ol>
                                            {featuresIncluded}
                                        </ol>
                                    </div>
                                </Tab>
                                <Tab eventKey="exclusions" title="Exclusions">
                                    <div className={`${offcanvas.commonOffcanvasFeaList}`}>
                                        <ol>
                                            {exclusions}
                                        </ol>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}
