import React from "react";

import descpCardStyle from '@/assets/css/description-checkbox-module.css'

import CheckYellowIcon from '../../Icons/CheckYellow'

export default function DescpCard(props) {
    const { customClass, label, children } = props;
    return (
        <>
            <div className={`${descpCardStyle.descpCol} ${customClass}`}>
                <span className={`${descpCardStyle.subCheckBtn}`}>
                    <CheckYellowIcon />
                </span>
                {children}
            </div>
        </>
    )
}
