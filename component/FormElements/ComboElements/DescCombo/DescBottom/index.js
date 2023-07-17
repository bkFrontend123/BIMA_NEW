import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescBottom(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckNewBottom} ${customClass}`}>
                {children}
            </div>
        </>
    )
}
