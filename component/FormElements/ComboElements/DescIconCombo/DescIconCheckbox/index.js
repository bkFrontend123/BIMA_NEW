import React from "react";

import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'

import CheckYellowIcon from '../../../../Icons/CheckYellow'

export default function DescIconCheckbox(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`${desCheckStyle.desCheckBox} ${customClass}`}>
                <span>
                    <CheckYellowIcon />
                </span>
                {children}
            </div>
        </>
    )
}
