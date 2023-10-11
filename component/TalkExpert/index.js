import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CalendyModal from '@/component/Modal/CalendyModal'

import style from './style.module.css'

export default function TalkExpert(props) {
    const { customClass, size, background, imgSrc, name, designation, children } = props;

    const [showHimaniCalendy, setShowHimaniCalendy] = useState(false);
    const handleCloseHimaniCalendy = () => setShowHimaniCalendy(false);
    const handleShowHimaniCalendy = () => setShowHimaniCalendy(true);

    const [showRaviCalendy, setShowRaviCalendy] = useState(false);
    const handleCloseRaviCalendy = () => setShowRaviCalendy(false);
    const handleShowRaviCalendy = () => setShowRaviCalendy(true);

    const [showShrutiCalendy, setShowShrutiCalendy] = useState(false);
    const handleCloseShrutiCalendy = () => setShowShrutiCalendy(false);
    const handleShowShrutiCalendy = () => setShowShrutiCalendy(true);

    return (
        <>
            {name === 'Himani Doshi' ? (
                <div className={`d-flex align-items-center ${style.tlkExprtCol} ${customClass} ${size} ${background}`} onClick={handleShowHimaniCalendy}>
                    <div className={`${style.tlkExprtImg}`}>
                        <Image
                            src={imgSrc}
                            alt={name}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{designation}</p>
                        {children}
                    </div>
                </div>
            ) : (
                null
            )}
            {name === 'Ravikant Sawant' ? (
                <div className={`d-flex align-items-center ${style.tlkExprtCol} ${customClass} ${size} ${background}`} onClick={handleShowRaviCalendy}>
                    <div className={`${style.tlkExprtImg}`}>
                        <Image
                            src={imgSrc}
                            alt={name}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{designation}</p>
                        {children}
                    </div>
                </div>
            ) : (
                null
            )}
            {name === 'Shruti Vishnoi' ? (
                <div className={`d-flex align-items-center ${style.tlkExprtCol} ${customClass} ${size} ${background}`} onClick={handleShowShrutiCalendy}>
                    <div className={`${style.tlkExprtImg}`}>
                        <Image
                            src={imgSrc}
                            alt={name}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{designation}</p>
                        {children}
                    </div>
                </div>
            ) : (
                null
            )}
            <CalendyModal
                calendyLink="himani"
                show={showHimaniCalendy}
                handleClose={handleCloseHimaniCalendy}
            />
            <CalendyModal
                calendyLink="ravi"
                show={showRaviCalendy}
                handleClose={handleCloseRaviCalendy}
            />
            <CalendyModal
                calendyLink="shruti"
                show={showShrutiCalendy}
                handleClose={handleCloseShrutiCalendy}
            />
        </>
    )
}
