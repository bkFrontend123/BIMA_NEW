import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.css'

import expertImg from '../../public/expertImg.png'

export default function TalkExpert(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, size, background, children } = props;
    return (
        <>
            <div className={`d-flex align-items-center ${style.tlkExprtCol} ${customClass} ${size} ${background}`}>
                <div className={`${style.tlkExprtImg}`}>
                    <Image
                        src={expertImg}
                        alt="Shruti Vishnoi"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h4>Shruti Vishnoi</h4>
                    <p>Insurance Expert</p>
                    {children}
                </div>
            </div>
        </>
    )
}
