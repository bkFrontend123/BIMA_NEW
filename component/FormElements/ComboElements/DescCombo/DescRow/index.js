import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescRow(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckNewRow} ${customClass}`}>
                {children}
            </div>
        </>
    )
}
