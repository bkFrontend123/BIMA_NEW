import React, { useEffect, useState } from 'react'

import style from './style.module.css'

import HideArrowIcon from "@/component/BIDashboard/Icons/IconHideArrow";

import CrossIcon from '../../Icons/Cross'

export default function PolicyCompare(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);

    //const [show, setShow] = useState(false);

    //const handleShow = () => setShow(true);

    const {customClass, children, handleShow, handleClose} = props;

    return (
        <>
            <div className={`${style.plcyCompShow}`}>
                <span onClick={handleShow}>
                    <HideArrowIcon />
                </span>
            </div>
            <div className={`${style.plcyCompCol} ${customClass}`}>
                {children}
                <div className={`${style.plcyCompClose}`}>
                    <a onClick={handleClose}>
                        <span className='d-none d-md-block'>Close</span>
                        <i className='d-md-none'><CrossIcon iconColor="black" width="24" height="24" /></i>
                    </a>
                </div>
            </div>
        </>
    )
}