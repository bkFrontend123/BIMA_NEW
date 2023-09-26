import React, { useEffect } from 'react'

import LeftIcon from '@/component/GHI/Icons/IconLeft';

import style from './style.module.css'

export default function PolicyHeader(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, variant, coverageName, children} = props;

    return (
        <>
            <div className={`${style.policyHdrInfo} ${customClass} ${variant ? style.policyHdrSmplInfo : null}`}>
                <div>
                    <div className={`${style.policyCovName}`}>
                        <div>Coverage name <span>{coverageName}</span></div>
                        <div className='mt-4 mt-md-0'>
                            {children}
                            <div className={`${style.policyEditBtn}`}>
                                <a href='javascript:void(0);'>
                                    {variant ? (
                                        <LeftIcon />
                                    ) : (
                                        null
                                    )}
                                    Edit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
