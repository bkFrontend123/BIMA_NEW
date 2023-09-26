import React, { useState } from 'react'
import Image from 'next/image'

import ProductFormHelpCard from '@/component/GHI/ProductContent/ProductFormHelpCard';
import CalendyModal from '@/component/Modal/CalendyModal'

import starIcon from '@/public/icons/starYellow.svg'
import himaniImg from '@/public/himaniImg.png'
import ravikantImg from '@/public/ravikantImg.png'

import style from './style.module.css'

export default function ProductFormContent(props) {
    const {children, title, description, talkExpert} = props;

    const [showHimaniCalendy, setShowHimaniCalendy] = useState(false);
    const handleCloseHimaniCalendy = () => setShowHimaniCalendy(false);
    const handleShowHimaniCalendy = () => setShowHimaniCalendy(true);

    const [showRaviCalendy, setShowRaviCalendy] = useState(false);
    const handleCloseRaviCalendy = () => setShowRaviCalendy(false);
    const handleShowRaviCalendy = () => setShowRaviCalendy(true);
    return (
        <>
            <div className={`${style.prdctFrmCntntCol}`}>
                {children ? (
                    <div className={`${style.prdctCntntWgtRow}`}>
                        {children}
                    </div>
                ) : (
                    <div className={`${style.prdctFrmCntntHdr}`}>
                        <span>
                            <Image src={starIcon} width={32} height={32} alt="Star Icon" />
                        </span>
                        <h2>{title}</h2>
                        <h4>{description}</h4>
                    </div>
                )}
                <div className={`${style.prdctFrmCntntBtm}`}>
                    {talkExpert === 'himani' ? (
                        <ProductFormHelpCard
                            title="We are here for you!"
                            description="We can help you pick the right insurance plan for your team"
                            imgSrc={himaniImg}
                            small={children}
                            type="schedule"
                            onClick={handleShowHimaniCalendy}
                        />
                    ) : (
                        null
                    )}
                    {talkExpert === 'ravikant' ? (
                        <ProductFormHelpCard
                            title="We are here for you!"
                            description="We can help you pick the right insurance plan for your team"
                            imgSrc={ravikantImg}
                            small={children}
                            type="schedule"
                            onClick={handleShowRaviCalendy}
                        />
                    ) : (
                        null
                    )}
                    <ProductFormHelpCard
                        title="Still have questions?"
                        description="Feel free to reach out to us with your concerns and quarries"
                        small={children}
                        type="call"
                    />
                </div>
            </div>
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
        </>
    )
}
