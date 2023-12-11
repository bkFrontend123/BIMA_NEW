import React from 'react'

import style from './style.module.css'

export default function ProposalFormFillingRow(props) {
    const { customClass, children } = props;
    return (
        <>
            <div className={`${style.prpslFrmFlngRow} ${customClass}`}>
                {children}
                <p>Now, you can continue your journey by filling out the proposal form. We're eager to gather all the necessary details to tailor the perfect solution. Get started on the form, and let's bring your insurance plans to life.  We're here to support you every step of the way.</p>
            </div>
        </>
    )
}