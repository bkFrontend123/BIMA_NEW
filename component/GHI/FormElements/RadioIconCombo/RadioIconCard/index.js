import React from "react";
import Image from 'next/image'

import radioCheckIcon from '@/public/ghi/icons/radioCheckIcon.svg'

import radioIconStyle from '@/assets/css/radioIconCheckbox.module.css'

export default function RadioIconCard(props) {
    const { customClass, activeClass, icon, alt, children } = props;
    return (
        <>
            <div className={`${radioIconStyle.radioIconCol} ${icon ? null : radioIconStyle.radioNoIconCol} ${customClass} ${activeClass}`}>
                <span>
                    <Image src={radioCheckIcon} width={16} height={11} alt="Check Icon" />
                </span>
                {children}
                {icon ? (
                    <i>
                        <Image src={icon} width={80} height={80} alt={alt} />
                    </i>
                ) : (
                    null
                )}
                
            </div>
        </>
    )
}
