import React from "react";

import subsidiary from '@/assets/css/subitem-select.module.css'

export default function SubItem(props) {
    const { children } = props;
    return (
        <>
            <div className={`${subsidiary.subGroupInr}`}>
                {children}
            </div>
        </>
    )
}
