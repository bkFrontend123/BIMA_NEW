import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescCard(props) {
    const { customClass, activeClass, children } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckNewCol} ${customClass} ${activeClass}`}>
                {children}
            </div>
        </>
    )
}
