import React from 'react'

import style from './style.module.css'

export default function ProposalFormCard(props) {
    const { customClass, children } = props;

    return (
        <>
            <div className={`mt-4 mt-md-5 proposalForm ${style.qstnForm} ${customClass}`}>
                {children}
            </div>
        </>
    )
}
