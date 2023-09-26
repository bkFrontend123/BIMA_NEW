import React from 'react'
import Image from 'next/image'

import style from './style.module.css'

export default function ProductInfoCard(props) {
    const { title, icon, width, height, onClick } = props;
    return (
        <>
            <div className={`${style.prdctInfoCol}`} onClick={onClick}>
                <div className={`${style.prdctInfoText}`}>
                    <div>
                        <h3>{title}</h3>
                        <p><span>Continue</span></p>
                    </div>
                </div>
                <div className={`${style.prdctInfoMedia}`}>
                    <Image className={`${style.prdctInfoImg}`} src={icon} width={width} height={height} alt={title} />
                </div>
            </div>
        </>
    )
}
