import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.css'

import quesIcon from '@/public/icons/quesIcon.svg'
import likeIcon from '@/public/icons/likeIcon.svg'
import unlikeIcon from '@/public/icons/unlikeIcon.svg'

export default function HelpfulCard(props) {
    const {customClass} = props;

    return (
        <>
            <div className={`${style.helpfulCol} ${customClass}`}>
                <div className={`${style.helpfulInfo} d-md-flex align-items-center justify-content-between gap-3`}>
                    <h4><Image src={quesIcon} width="17" height="17" /> Was This Useful?</h4>
                    <div className={`${style.helpfulBtns} d-flex align-items-center justify-content-md-between gap-3 mt-md-0 mt-3`}>
                        <Link href=""><Image src={likeIcon} width="12" height="12" /> Yes</Link>
                        <Link href=""><Image src={unlikeIcon} width="12" height="12" /> No</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
