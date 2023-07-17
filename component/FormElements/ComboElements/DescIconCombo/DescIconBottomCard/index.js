import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

export default function DescIconBottomCard(props) {
    const { customClass, activeClass, children } = props;
    return (
        <>
            <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${activeClass ? desCheckStyle.active : null} ${customClass}`}>
                {children}
            </div>
        </>
    )
}
