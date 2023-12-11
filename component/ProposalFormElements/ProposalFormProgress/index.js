import React from 'react'

import { ProgressBar } from 'react-bootstrap';

import ProgressIcon from '@/component/Icons/Progress';

import progress from '@/assets/css/progress.module.css'
import style from './style.module.css'

export default function ProposalFormProgress(props) {
    const { icon, title, now } = props;

    return (
        <>
            <div className={`${style.prpslPrgrsCol}`}>
                {icon == 'left' ? (
                    <>
                        <div className={`${style.prpslPrgrs}`}>
                            <ProgressIcon />
                            <div className={`${progress.progressDiv} ${progress.bigProgress} ${progress.noLabel}`}>
                                <ProgressBar now={now} />
                            </div>
                        </div>
                        <p>{title}</p>
                    </>
                ) : (
                    <>
                        <p><ProgressIcon /> {title}</p>
                        <div className={`${style.prpslPrgrs}`}>
                            <div className={`${progress.progressDiv} ${progress.bigProgress} ${progress.noLabel}`}>
                                <ProgressBar now={now} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
