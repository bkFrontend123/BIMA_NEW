import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

import CheckYellowIcon from '../../../../Icons/CheckYellow'

export default function DescCheckbox(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckNewBox} ${customClass}`}>
                <span>
                    <CheckYellowIcon />
                </span>
                {children}
            </div>
        </>
    )
}
