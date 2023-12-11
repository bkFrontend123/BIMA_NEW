import React from 'react'

import style from './style.module.css'

export default function ProposalQuestionButton(props) {
    const { children } = props;

    return (
        <>
            <div className={`${style.qstnFormBtns}`}>
                {children}
            </div>
        </>
    )
}
