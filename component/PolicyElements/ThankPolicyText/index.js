import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import style from './style.module.css'

export default function ThankPolicyText(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, policyName} = props;

    return (
        <>
            <div className={`whiteCol h-100 ${style.thankPolicyTextCol}`}>
                <div className={`${style.thankPolicyText} ${customClass}`}>
                    <h3>Thanks for choosing BimaKavach for your {policyName} needs. We are finalizing the chosen quote with the insurer. Our relationship manager will call you to guide you along.</h3>
                    <p>In case, you wish to connect with us for any help, feel free to mail us at <Link href="mailto:support@bimakavach.com">support@bimakavach.com</Link></p>
                </div>
            </div>
        </>
    )
}
