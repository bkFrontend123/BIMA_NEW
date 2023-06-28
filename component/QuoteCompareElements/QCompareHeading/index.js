import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Offcanvas, Button, Tabs, Tab} from 'react-bootstrap';

import style from './style.module.css'

export default function QCompareHeading(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    
    const {customClass, title } = props;

    return (
        <>
            <div className={`${style.quoteCompareHdngRow} ${customClass}`}>
                <div className={`${style.quoteCompareHdng}`}>
                    <h3>{title}</h3>
                    <div className={`${style.quoteCompareHdngBrdr}`}></div>
                </div>
            </div>
        </>
    )
}
