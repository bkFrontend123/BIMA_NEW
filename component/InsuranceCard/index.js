import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.css'

export default function InsuranceCard(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, layout, insuranceIcon, title, titleLink } = props;
    return (
        <>
            <div className={`${style.insuranceCol} ${customClass} ${layout} align-items-center justify-content`}>
                <div className={`${style.insuranceIcon}`}>
                    <Image
                        src={insuranceIcon}
                        alt={title}
                        width={80}
                        height={80}
                    />
                </div>
                <div className={`${style.insuranceTitle}`}>
                    <Link href={titleLink}>{title}</Link>
                </div>
            </div>
        </>
    )
}
