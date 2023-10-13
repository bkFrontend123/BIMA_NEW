import React, { useState } from 'react'
import Image from 'next/image'

import ProductFormHelpCard from '@/component/GHI/ProductContent/ProductFormHelpCard';
import CalendyModal from '@/component/Modal/CalendyModal'

import starIcon from '@/public/icons/starYellow.svg'
import shrutiImg from '@/public/shrutiImg.png'
import himaniImg from '@/public/himaniImg.png'
import ravikantImg from '@/public/ravikantImg.png'

import style from './style.module.css'

export default function ProductFormContent(props) {
    const {children, title, description, talkExpert} = props;

    const expertCards = [
        {
          expert: 'shruti',
          title: 'We are here for you!',
          description: 'We can help you pick the right insurance plan for your team',
          imgSrc: shrutiImg,
          type: 'schedule',
        },
        {
          expert: 'himani',
          title: 'We are here for you!',
          description: 'We can help you pick the right insurance plan for your team',
          imgSrc: himaniImg,
          type: 'schedule',
        },
        {
            expert: 'ravikant',
            title: 'We are here for you!',
            description: 'We can help you pick the right insurance plan for your team',
            imgSrc: ravikantImg,
            type: 'schedule',
        },
        {
          expert: 'general',
          title: 'Still have questions?',
          description: 'Feel free to reach out to us with your concerns and queries',
          type: 'call',
        },
    ];

    const [showShrutiCalendy, setShowShrutiCalendy] = useState(false);
    const handleCloseShrutiCalendy = () => setShowShrutiCalendy(false);
    const handleShowShrutiCalendy = () => setShowShrutiCalendy(true);
    
    const [showHimaniCalendy, setShowHimaniCalendy] = useState(false);
    const handleCloseHimaniCalendy = () => setShowHimaniCalendy(false);
    const handleShowHimaniCalendy = () => setShowHimaniCalendy(true);

    const [showRaviCalendy, setShowRaviCalendy] = useState(false);
    const handleCloseRaviCalendy = () => setShowRaviCalendy(false);
    const handleShowRaviCalendy = () => setShowRaviCalendy(true);

    const generalExpertPhoneNumber = '9036554783';
    const handleCallGeneralExpert = () => {
        window.location.href = `tel:${generalExpertPhoneNumber}`;
    };

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
                    {expertCards.map((card) => {
                        if (talkExpert === card.expert || card.expert === 'general') {
                            const handleShowCalendyModal = () => {
                                if (card.expert === 'shruti') {
                                    setShowShrutiCalendy(true);
                                } else if (card.expert === 'himani') {
                                    setShowHimaniCalendy(true);
                                } else if (card.expert === 'ravikant') {
                                    setShowRaviCalendy(true);
                                } else if (card.expert === 'general') {
                                    handleCallGeneralExpert();
                                }
                            };
                            return (
                                <ProductFormHelpCard
                                    title={card.title}
                                    description={card.description}
                                    imgSrc={card.imgSrc}
                                    small={children}
                                    type={card.type}
                                    key={card.expert}
                                    onClick={handleShowCalendyModal}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <CalendyModal
                calendyLink="shruti"
                show={showShrutiCalendy}
                handleClose={handleCloseShrutiCalendy}
            />
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
