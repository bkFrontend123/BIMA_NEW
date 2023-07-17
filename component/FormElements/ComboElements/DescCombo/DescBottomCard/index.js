import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescBottomCard(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`mb-4 ${desCheckStyle.desCheckListNewCol} ${customClass}`}>
                {children}
            </div>
        </>
    )
}
