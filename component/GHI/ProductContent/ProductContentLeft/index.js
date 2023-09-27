import React, { useState } from 'react'
import Image from 'next/image'

import { Row, Col } from 'react-bootstrap';

import ProductHelpCard from '@/component/GHI/ProductContent/ProductHelpCard'
import CalendyModal from '@/component/Modal/CalendyModal'

import himaniImg from '@/public/himaniImg.png'
import ravikantImg from '@/public/ravikantImg.png'

import style from './style.module.css'

export default function ProductContentLeft(props) {
    const { icon, title, description, talkExpert } = props;

    const expertCards = [
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

    const [showHimaniCalendy, setShowHimaniCalendy] = useState(false);
    const handleCloseHimaniCalendy = () => setShowHimaniCalendy(false);
    const handleShowHimaniCalendy = () => setShowHimaniCalendy(true);

    const [showRaviCalendy, setShowRaviCalendy] = useState(false);
    const handleCloseRaviCalendy = () => setShowRaviCalendy(false);
    const handleShowRaviCalendy = () => setShowRaviCalendy(true);
    
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
                                    if (card.expert === 'himani') {
                                    setShowHimaniCalendy(true);
                                    } else if (card.expert === 'ravikant') {
                                    setShowRaviCalendy(true);
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
