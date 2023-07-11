import React from "react";

import subsidiary from '@/assets/css/subitem-select.module.css'

import CheckYellowIcon from '../../Icons/CheckYellow'

export default function SubsidiaryItem(props) {
    const { customClass, label, children } = props;
    return (
        <>
            <div className={`${subsidiary.subSelectBtn} ${customClass}`}>
                <span className={`${subsidiary.subCheckBtn}`}>
                    <CheckYellowIcon />
                </span>
                {children}
            </div>
        </>
    )
}
