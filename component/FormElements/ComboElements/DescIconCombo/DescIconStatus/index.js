import React from "react";
import Image from 'next/image'

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescIconStatus(props) {
    const { customClass, icon } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckStatus} ${customClass}`}>
                <i><Image src={icon} width="24" height="24" alt="" /></i>
            </div>
        </>
    )
}
