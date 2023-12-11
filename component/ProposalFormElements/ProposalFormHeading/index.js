import React from 'react'

import TickIcon from '@/component/Icons/Tick'

import style from './style.module.css'

export default function ProposalFormHeading(props) {
    const { title, filled } = props;

    return (
        <>
            <div className={`${style.qstnHdng} ${filled == 'true' ? style.qstnFlldHdng : ''}`}>
                <h3>{filled == 'true' ? <TickIcon /> : null} {title}</h3>
            </div>
        </>
    )
}
