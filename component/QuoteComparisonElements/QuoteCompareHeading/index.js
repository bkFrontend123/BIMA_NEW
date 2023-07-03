import React, { useEffect, useState } from 'react'

import style from './style.module.css'

export default function PolicyHeader(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, coverageName, territory, jurisdiction, children} = props;

    return (
        <>
            <div className={`${style.policyHdrInfo} ${customClass}`}>
                <div>
                    <div className={`${style.policyCovName}`}>
                        Coverage name <span>{coverageName}</span>
                    </div>
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
                </div>
            </div>
        </>
    )
}
