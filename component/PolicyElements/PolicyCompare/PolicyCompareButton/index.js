import React, { useEffect } from 'react'
import Link from 'next/link'

import style from './style.module.css'

export default function PolicyCompareButton(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    
    const {customClass, href } = props;

    return (
        <>
            <div className={`${style.plcyCompBtn} ${customClass}`}>
                <Link href={href}>Compare</Link>
            </div>
        </>
    )
}