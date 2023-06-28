import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import style from './style.module.css'

import CrossIcon from '../../../Icons/Cross'


export default function PolicySelected(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    
    const {customClass, InsurerLogo, Width, Height, InsurerName, PolicyName } = props;

    return (
        <>
            <div className={`${style.plcySlctd} ${customClass}`}>
                <i>
                    <Image src={InsurerLogo} width={Width} height={Height} alt={InsurerName} />
                </i>
                <h4>{InsurerName}</h4>
                <p>{PolicyName}</p>
                <Link href="" className={`${style.plcySlctdHvr}`}>
                    <CrossIcon iconColor="white" width="32" height="32" />
                </Link>
            </div>
        </>
    )
}