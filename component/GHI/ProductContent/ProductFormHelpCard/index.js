import React from 'react'
import Image from 'next/image'

import QAIcon from '@/component/GHI/Icons/IconQANew';
import ScheduleIcon from '@/component/GHI/Icons/IconSchedule';
import CallIcon from '@/component/GHI/Icons/IconCall';
import RightIcon from '@/component/GHI/Icons/IconRight';

import style from './style.module.css'

export default function ProductFormHelpCard(props) {
    const { title, description, imgSrc, small, type, onClick } = props;
    
    return (
        <>
            <div className={`${style.prdctFrmHelpCol} ${small ? style.prdctFrmHelpSmallCol : null}`}>
                <div className={`${style.prdctFrmHelpText}`} onClick={onClick}>
                    <div>
                        <h3>{title}</h3>
                        <h4>{description}</h4>
                        {type === 'schedule' ? (
                            <p>
                                <span>
                                    {small ? (
                                        <>
                                            Continue <i><RightIcon /></i>
                                        </>
                                    ) : (
                                        <>
                                            <ScheduleIcon width={17} height={17} /> Schedule a call
                                        </>
                                    )}
                                </span>
                            </p>
                        ):(
                            null
                        )}
                        {type === 'call' ? (
                            <p>
                                <span>
                                {small ? (
                                    <>
                                        Continue <i><RightIcon /></i>
                                    </>
                                ) : (
                                    <>
                                        <CallIcon width={15} height={15} /> Call our experts
                                    </>
                                )}
                                </span>
                            </p>
                        ):(
                            null
                        )}
                    </div>
                </div>
                <div className={`${style.prdctFrmHelpMedia}`}>
                    <div className={`${style.prdctFrmHelpIcon}`}>
                        {type === 'schedule' ? (
                            <>
                                <Image className={`${style.prdctFrmHelpImg}`} src={imgSrc} width={90} height={90} alt="Expert Image" />
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
                </div>
            </div>
        </>
    )
}
