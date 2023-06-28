import React, { useEffect } from 'react'
import Link from 'next/link'

import style from './style.module.css'

export default function AddPolicyButton(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    
    const {customClass } = props;

    return (
        <>
            <div className={`${style.addPlcyBtn} ${customClass}`}>
                <Link href="">
                    <span className='d-none d-md-inline-block'>Add a policy</span>
                    <i className='d-md-none'>+</i>
                </Link>
            </div>
        </>
    )
}