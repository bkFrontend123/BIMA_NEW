import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Offcanvas, Tabs, Tab} from 'react-bootstrap';

import style from './style.module.css'
import offcanvas from '@/assets/css/offcanvas.module.css'
import commonTabs from '@/assets/css/commonTabs.module.css'

import infoIcon from '@/public/icons/infoIcon.svg';
import arrowRight_white from '@/public/icons/arrowRight-white.svg'

export default function QCompareKnowMore(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    
    const {customClass, title, subtitle, whatThisMeans, children} = props;

    const [showKnowMore, setKnowMoreShow] = useState(false);

    const handleKnowMoreClose = () => setKnowMoreShow(false);
    const handleKnowMoreShow = () => setKnowMoreShow(true);

    return (
        <>
            <div className={`${style.quoteCompareInfo} ${customClass}`}>
                <Link href="" onClick={handleKnowMoreShow}>
                    <Image src={infoIcon} width="14" height="14" alt="Info" />
                    <span>Know More</span>
                </Link>
            </div>
            <Offcanvas show={showKnowMore} onHide={handleKnowMoreClose} placement="end" className={`${style.qCmprOffcanvasDiv} ${offcanvas.commonOffcanvasDiv}`}>
                <Offcanvas.Header className={`${offcanvas.commonOffcanvasHeaderDiv}`}>
                    <div className={`${offcanvas.commonOffcanvasHeader}`}>
                        <Link href="" className={`${offcanvas.commonOffcanvasClose}`} onClick={handleKnowMoreClose}>
                            <Image src={arrowRight_white} /> Close
                        </Link>
                        <div className={`${style.knowOffcanvasHdrInfo}`}>
                            <h4>{title}</h4>
                            <h5>{subtitle}</h5>
                        </div>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body className={`${offcanvas.commonOffcanvasBodyDiv}`}>
                    <div className={`${offcanvas.commonOffcanvasBody}`}>
                        <Tabs
                            defaultActiveKey="WhatThisMeans"
                            id="WhatThisMeans"
                            className={`${commonTabs.commonTabs} commonTabs`}
                        >
                            <Tab eventKey="WhatThisMeans" title="What This Means">
                                <div className={`${offcanvas.commonOffcanvasData}`}>
                                    {whatThisMeans}
                                </div>
                                {children}
                            </Tab>
                        </Tabs>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
