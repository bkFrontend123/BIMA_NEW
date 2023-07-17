import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescIconInput(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckInput} ${customClass}`}>
                {children}
            </div>
        </>
    )
}
