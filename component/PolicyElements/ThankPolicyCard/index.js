import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CalendyModal from '../../Modal/CalendyModal'

import style from './style.module.css'

import WhatsApp from '../../Icons/WhatsApp'
import Calender from '../../Icons/Calender'

export default function ThankPolicyCard(props) {
    
    const [showCalendy, setShowCalendy] = useState(false);

    const handleCloseCalendy = () => setShowCalendy(false);
    const handleShowCalendy = () => setShowCalendy(true);

    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, children, policyLogo, policyLogoAlt, logoWidth, logoHeight, statusColor, policyStatus, policyName, policyPremium, policyCover} = props;

    return (
        <>
            <div className={`whiteCol ${style.thankPolicyCard} ${customClass}`}>
                <div>
                    {children}
                    <div className={`${style.thankPolicyHdr}`}>
                        <div>
                            <i>
                                <Image
                                    src={policyLogo}
                                    alt={policyLogoAlt}
                                    width={logoWidth}
                                    height={logoHeight}
                                />
                            </i>
                        </div>
                        <div className={`${style.thankPolicyStatus}`}>
                            <p>Status: <span className={`${statusColor}`}>{policyStatus}</span></p>
                        </div>
                    </div>
                    <div className={`${style.thankPolicyBody}`}>
                        <div>
                            <p>Plan name <span>{policyName}</span></p>
                        </div>
                        <div>
                            <div>
                                <p>Premium Rs. <span>{policyPremium}</span></p>
                            </div>
                            <div>
                                <p>Cover <span>{policyCover}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className={`d-md-flex align-items-center justify-content-between gap-3 gap-lg-4 ${style.thankPolicyFtr}`}>
                        <Link href="https://wa.me/9036554785" className='btnCommon greyBtn w-100 justify-content-center'>
                            <WhatsApp iconColor="primary" width="16" height="16" />
                            <span className='ms-2'>WhatsApp Us</span>
                        </Link>
                        <Link href="" onClick={handleShowCalendy} className='btnCommon greyBtn w-100 justify-content-center mt-3 mt-md-0'>
                            <Calender iconColor="primary" width="16" height="16" />
                            <span className='ms-2'>Book Calendar</span>
                        </Link>
                    </div>
                </div>
            </div>
            <CalendyModal
                calendyLink="tejas"
                show={showCalendy}
                handleClose={handleCloseCalendy}
            />
        </>
    )
}
