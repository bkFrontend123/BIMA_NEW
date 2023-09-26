import React from 'react'
import Image from 'next/image'

import QAIcon from '@/component/GHI/Icons/IconQA';
import ScheduleIcon from '@/component/GHI/Icons/IconSchedule';
import CallIcon from '@/component/GHI/Icons/IconCall';

import style from './style.module.css'

export default function ProductHelpCard(props) {
    const { title, description, imgSrc, type, onClick } = props;
    
    return (
        <>
            <div className={`${style.prdctHelpCol}`} onClick={onClick}>
                <div className={`${style.prdctHelpInfo}`}>
                    <div className={`${style.prdctHelpIcon}`}>
                        {type === 'schedule' ? (
                            <>
                                <Image className={`${style.prdctHelpImg}`} src={imgSrc} width={52} height={52} alt="Expert Image" />
                            </>
                        ):(
                            null
                        )}
                        {type === 'call' ? (
                            <>
                                <QAIcon />
                            </>
                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={`${style.prdctHelpBtm}`}>
                    {type === 'schedule' ? (
                        <span><ScheduleIcon width={17} height={17} /> Schedule a call</span>
                    ):(
                        null
                    )}
                    {type === 'call' ? (
                        <span><CallIcon width={15} height={15} /> Call our experts</span>
                    ):(
                        null
                    )}
                </div>
            </div>
        </>
    )
}
