import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import style from './style.module.css'

export default function PaymentCard(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, paymentIcon, paymentTitle, policyName, policyCover, policyPremium, gst, totalPremium} = props;

    return (
        <>
            <div className={`${style.paymentCard} ${customClass}`}>
                <div>
                    <div className={`${style.paymentIcon}`}>
                        <i>
                            <Image
                                src={paymentIcon}
                                alt={paymentTitle}
                                width="34"
                                height="53"
                            />
                        </i>
                        <h3>{paymentTitle}</h3>
                    </div>
                    <div className={`${style.paymentInfo}`}>
                        <div className='mt-4'>
                            <p>Plan name <span>{policyName}</span></p>
                        </div>
                        <div className='my-4'>
                            <p>Cover <span>{policyCover}</span></p>
                        </div>
                        <div className='d-flex gap-2 align-items-center justify-content-between'>
                            <p>Premium</p>
                            <p><span>Rs. {policyPremium}</span></p>
                        </div>
                        <div className='mt-3 d-flex gap-2 align-items-center justify-content-between'>
                            <p>GST</p>
                            <p><span>Rs. {gst}</span></p>
                        </div>
                        <div className='mt-3 d-flex gap-2 align-items-center justify-content-between'>
                            <p>Total Premium</p>
                            <p><span>Rs. {totalPremium}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
