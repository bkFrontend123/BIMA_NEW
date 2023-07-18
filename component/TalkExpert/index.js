import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.css'

export default function TalkExpert(props) {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    const {customClass, size, background, imgSrc, name, designation, children } = props;
    return (
        <>
            <div className={`d-flex align-items-center ${style.tlkExprtCol} ${customClass} ${size} ${background}`}>
                <div className={`${style.tlkExprtImg}`}>
                    <Image
                        src={imgSrc}
                        alt={name}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{designation}</p>
                    {children}
                </div>
            </div>
        </>
    )
}
