import React from 'react'
import Image from 'next/image'

import thankIcon from '@/public/icons/thankIcon.svg'

import style from './style.module.css'

export default function ThankYou(props) {
    const { title } = props;

    return (
        <>
            <div className={style.thankCntnt}>
                <span>
                    <Image className={style.thankIcon} src={thankIcon} width="135" height="131" alt="thank icon" />
                </span>
                <p>Thanks for choosing BimaKavach for your {title} needs. We are finalising the chosen quote with the insurer. Our relationship manager will call you to guide you along.<br/>In case, you wish to connect with us for any help, feel free to mail us at support@bimakavach.com</p>
            </div>
        </>
    )
}
