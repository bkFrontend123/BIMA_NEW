import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescIconBottom(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckBottom} ${customClass}`}>
                {children}
            </div>
        </>
    )
}
