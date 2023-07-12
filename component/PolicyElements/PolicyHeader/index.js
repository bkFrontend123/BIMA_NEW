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
                        <div className='mt-4 mt-md-0'>
                            {children}
                            <div className={`${style.policyEditBtn}`}>
                                <a href='javascript:void(0);'>Edit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
