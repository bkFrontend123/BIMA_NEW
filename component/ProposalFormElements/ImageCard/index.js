import React from 'react'
import Image from 'next/image'

import style from './style.module.css'

export default function ImageCard(props) {
    const { customClass, src, width, height, alt } = props;
    return (
        <>
            <div className={`${style.imgItemCol} ${customClass}`}>
                <Image src={src} width={width} height={height} alt={`${alt}`} />
            </div>
        </>
    )
}
