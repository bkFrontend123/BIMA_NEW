import React, { useEffect, useState } from 'react'

import SupportMobile from '../../../component/SupportMobile'

import style from './style.module.css'

export default function PolicyInfo(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, territory, jurisdiction, children} = props;

    return (
        <>
            <div className={`${style.policyCovInfo}`}>
                <ul>
                    <li>
                        <span>Territory</span>
                        <p>{territory}</p>
                    </li>
                    <li>
                        <span>Jurisdiction</span>
                        <p>{jurisdiction}</p>
                    </li>
                    <li>
                        <span>Limit of Liability</span>
                        {children}
                    </li>
                </ul>
            </div>
        </>
    )
}
