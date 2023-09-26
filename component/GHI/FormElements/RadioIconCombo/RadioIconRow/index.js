import React from "react";

import radioIconStyle from '@/assets/css/radioIconCheckbox.module.css'

export default function RadioIconRow(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`${radioIconStyle.radioIconRow} ${customClass}`}>
                {children}
            </div>
        </>
    )
}
