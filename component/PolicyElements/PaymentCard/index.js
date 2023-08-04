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
                                alt="payment_icon"
                                className={`${style.paymentIconImg}`}
                            />
                        </i>
                    </div>
                    <div className={`${style.paymentInfo}`}>
                        <div className='mt-3 mt-md-4'>
                            <p>Plan name</p>
                            <h4>{policyName}</h4>
                        </div>
                        <div className='my-3 my-md-4'>
                            <p>Cover <span>₹ {policyCover}</span></p>
                        </div>
                        <div className='d-flex gap-2 align-items-center justify-content-between'>
                            <p>Premium</p>
                            <p><span>₹ {policyPremium}</span></p>
                        </div>
                        <div className='mt-3 d-flex gap-2 align-items-center justify-content-between'>
                            <p>GST</p>
                            <p><span>₹ {gst}</span></p>
                        </div>
                        <div className='mt-3 d-flex gap-2 align-items-center justify-content-between'>
                            <p>Total Premium</p>
                            <p><span>₹ {totalPremium}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
