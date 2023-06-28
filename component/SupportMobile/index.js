import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.css'

import supportIcon from '@/public/icons/supportIcon.svg'

export default function SupportMobile(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass} = props;
    return (
        <>
            <div className={`d-flex align-items-center ${style.supportMobileCol} ${customClass}`}>
                <Link href="">
                    <Image
                        src={supportIcon}
                        alt="Support"
                        width="18"
                        height="18"
                    />
                    <span>Support</span>
                </Link>
            </div>
        </>
    )
}
