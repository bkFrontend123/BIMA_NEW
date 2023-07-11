import React from "react";

import subsidiary from '@/assets/css/subitem-select.module.css'

export default function SubItemQnty(props) {
    const { customClass, children } = props;
    return (
        <>
            <span className={`${subsidiary.qtyGroup} ${customClass}`}>
                {children}
            </span>
        </>
    )
}
