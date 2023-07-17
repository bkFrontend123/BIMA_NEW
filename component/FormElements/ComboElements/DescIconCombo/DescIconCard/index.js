import React from "react";
import Image from 'next/image'

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescIconCard(props) {
    const { customClass, icon, title, description, children } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckCol} ${customClass}`}>
                <div className={desCheckStyle.desCheckIcon}>
                    <Image src={icon} width="42" height="44" alt={title} />
                </div>
                <div className={desCheckStyle.desCheckData}>
                    <div className={desCheckStyle.desCheckInfo}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}
