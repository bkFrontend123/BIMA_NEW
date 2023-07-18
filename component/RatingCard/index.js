import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.css'

import unionIcon from '@/public/icons/unionIcon.svg'

export default function RatingCard(props) {
    const {customClass, background} = props;

    return (
        <>
            <div className={`${style.rateCol} ${customClass} ${background === 'true' ? style.rateBgCol : null}`}>
                <div className={`${style.rateTextDiv}`}>
                    <p><span>50+ years</span>  of collective insurance experience</p>
                    <i><Image src={unionIcon} width={20} height={20} alt="Star Icon" /></i>
                    <p><span><span>₹</span> 5,000 Cr +</span> of cumulative risks insured</p>
                </div>
            </div>
        </>
    )
}
