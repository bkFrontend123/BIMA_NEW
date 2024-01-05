import React, { useState } from 'react'
import Image from 'next/image'

import { Row, Col } from 'react-bootstrap';

import ProductHelpCard from '@/component/GHI/ProductContent/ProductHelpCard'
import CalendyModal from '@/component/Modal/CalendyModal'

import shrutiImg from '@/public/shrutiImg.webp'
import himaniImg from '@/public/himaniImg.webp'
import ravikantImg from '@/public/ravikantImg.webp'

import style from './style.module.css'

export default function ProductContentLeft(props) {
    const { icon, title, description, talkExpert } = props;

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
            <div className={`${style.prdctCntntLftCol}`}>
                <div className={`${style.prdctCntntLftHdr}`}>
                    <i>
                        <Image
                            src={icon}
                            alt={title}
                            width={60}
                            height={68}
                        />
                    </i>
                    <h2>{title}</h2>
                </div>
                <div className={`${style.prdctCntntLftInfo}`}>
                    <p>{description}</p>
                </div>
                <div className={`${style.prdctCntntLftBtm}`}>
                    <Row className='g-4'>
                        {expertCards.map((card) => {
                            if (talkExpert === card.expert || card.expert === 'general') {
                                const handleShowCalendyModal = () => {
                                    if (card.expert === 'shruti') {
                                        setShowShrutiCalendy(true);
                                    } else if (card.expert === 'himani') {
                                        setShowHimaniCalendy(true);
                                    } else if (card.expert === 'ravikant') {
                                        setShowRavikantCalendy(true);
                                    } else if (card.expert === 'general') {
                                        handleCallGeneralExpert();
                                    }
                                };
                                return (
                                    <Col md={6} key={card.expert}>
                                        <ProductHelpCard
                                            title={card.title}
                                            description={card.description}
                                            imgSrc={card.imgSrc}
                                            type={card.type}
                                            onClick={handleShowCalendyModal}
                                        />
                                    </Col>
                                );
                            }
                            return null;
                        })}
                    </Row>
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
