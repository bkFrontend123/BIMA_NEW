import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Offcanvas, Button, Tabs, Tab} from 'react-bootstrap';

import style from './style.module.css'

export default function QCompareHeadCol(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    
    const {customClass, icon, title, iconWidth, iconHeight, children} = props;

    return (
        <>
            <div className={`${style.quoteCompareHdr} ${customClass}`}>
                <div>
                    <i><Image src={icon} width={iconWidth} height={iconHeight} alt={title} /></i>
                    <h4>{title}</h4>
                </div>
                <div className={`${style.quoteCompareBtn}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
