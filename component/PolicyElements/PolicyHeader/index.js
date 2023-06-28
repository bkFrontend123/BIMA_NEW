import React, { useEffect, useState } from 'react'

import style from './style.module.css'

export default function PolicyHeader(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, coverageName, children} = props;

    return (
        <>
            <div className={`${style.policyHdrInfo} ${customClass}`}>
                <div>
                    <div className={`${style.policyCovName}`}>
                        <div>Coverage name <span>{coverageName}</span></div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
