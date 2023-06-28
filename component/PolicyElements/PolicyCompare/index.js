import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import style from './style.module.css'

import CrossIcon from '../../Icons/Cross'

export default function PolicyCompare(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);

    //const [show, setShow] = useState(false);

    //const handleShow = () => setShow(true);

    const {customClass, children, handleClose} = props;

    return (
        <>
            <div className={`${style.plcyCompCol} ${customClass}`}>
                {children}
                <div className={`${style.plcyCompClose}`}>
                    <Link href="" onClick={handleClose}>
                        <span className='d-none d-md-block'>Close</span>
                        <i className='d-md-none'><CrossIcon iconColor="black" width="24" height="24" /></i>
                    </Link>
                </div>
            </div>
        </>
    )
}