import React, { useState } from 'react'

import { Offcanvas, Row, Col } from 'react-bootstrap';

import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem";
import TalkExpert from '@/component/TalkExpert';

import ArrowForwardIcon from '@/component/Icons/ArrowForward';
import ArrowBackwardIcon from '@/component/Icons/ArrowBackward';

import expertImg from '@/public/himaniImg.webp'
import expertImg1 from '@/public/shrutiImg.webp'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import offcanvas from '@/assets/css/offcanvas.module.css'
import talkExpertStyle from '@/component/TalkExpert/style.module.css'
import style from './style.module.css'

export default function ProposalFormHeader(props) {
    const { customClass, cardType } = props;
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className={`${style.prpslFrmHdrCol} ${customClass}`}>
                <div className={`${style.prpslFrmHdrTtl}`}>
                    <h3 className='font-secondary'>{cardType === 'Online' ? ( 'Online' ) : ( cardType === 'Offline' && ( 'Offline' ) )} Proposal Form Filling</h3>
                </div>
                <div className={`${style.prpslFrmHdrBtm}`}>
                    <Row className='g-4 align-items-center'>
                        <Col>
                            <div className={`${style.prpslFrmHdrInfo} ${cardType === 'Offline' ? style.prpslFrmOflnHdrInfo : ''}`}>
                                <p>View the guidelines to fill the proposal form</p>
                                <div className={`${style.prpslFrmHdrBtns}`}>
                                    <ButtonItem
                                        title="View"
                                        type="button"
                                        iconPosition="right"
                                        customClass={`m-0 px-2 ${buttonStyle.btnDark}`}
                                        onClick={handleShow}
                                    >
                                        <ArrowForwardIcon />
                                    </ButtonItem>
                                    {cardType === 'Online' ? (
                                        null
                                    ) : (
                                        cardType === 'Offline' && (
                                            <ButtonItem
                                                title="Download"
                                                type="button"
                                                customClass={`m-0 px-2 ${buttonStyle.btnBorder}`}
                                            />
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={1} xxl={2} className="d-none d-lg-flex"></Col>
                        <Col lg="auto">
                            <div className={`${style.prpslFrmHdrExprt}`}>
                                <p>Need Help? Contact our Expert!</p>
                                {cardType === 'Online' ? (
                                    <TalkExpert
                                        size={`${talkExpertStyle.extraSmall}`}
                                        imgSrc={expertImg}
                                        name="Himani Doshi"
                                        designation="Insurance Expert"
                                    />
                                ) : (
                                    cardType === 'Offline' && (
                                    <TalkExpert
                                        size={`${talkExpertStyle.extraSmall}`}
                                        imgSrc={expertImg1}
                                        name="Shruti Vishnoi"
                                        designation="Insurance Expert"
                                    />
                                    )
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end" className={`${offcanvas.commonOffcanvasDiv} ${offcanvas.commonOffcanvasWhiteDiv}`}>
                {/*<Offcanvas.Header className={`${offcanvas.commonOffcanvasHeaderDiv}`}>
                    <div className={`${offcanvas.commonOffcanvasHeader} ${style.commonOffcanvasHeader}`}>
                        
                    </div>
                </Offcanvas.Header>*/}
                <Offcanvas.Body className={`${offcanvas.commonOffcanvasBodyDiv}`}>
                    <div className={`${offcanvas.commonOffcanvasBody}`}>
                        <Row className="g-4">
                            <Col>
                                <ButtonItem
                                    title="Close"
                                    type="button"
                                    iconPosition="left"
                                    customClass={`m-0 px-2 ${buttonStyle.btnBorder}`}
                                    onClick={handleClose}
                                >
                                    <ArrowBackwardIcon />
                                </ButtonItem>
                            </Col>
                            {cardType === 'Offline' ? (
                                <Col xs="auto">
                                    <ButtonItem
                                        title="Download"
                                        type="button"
                                        customClass={`m-0 px-2 ${buttonStyle.btnBlue}`}
                                    />
                                </Col>
                            ) : (
                                null
                            )}
                        </Row>
                        <div className={`my-4 py-xl-2 ${offcanvas.commonOffcanvasHdrTtl}`}>
                            <h3>{cardType === 'Online' ? 'Online' : ( cardType === 'Offline' && ( 'Offline' ))} Proposal Form Guideline</h3>
                        </div>
                        {cardType === 'Online' ? (
                            <ul className={`${offcanvas.offcanvasListData}`}>
                                <li>Once you have continued, carefully read any instructions provided at the beginning of the form.</li>
                                <li>Fill out the form by entering the requested information. This may include personal details, contact information, checkboxes, and other mandatory fields.</li>
                                <li>Pay special attention to mandatory fields, often indicated with asterisks or other symbols, as these must be completed.</li>
                                <li>If the form is multi-page, check the next page as needed and continue filling it out. The final page will have a “Submit Form” button, and not a “Continue” button.</li>
                                <li>Double-check all the information you've entered for accuracy and completeness.</li>
                                <li>Once filled, upload your signature to authenticate the mandate letter online.</li>
                            </ul>
                        ) : (
                            cardType === 'Offline' && (
                                <ul className={`${offcanvas.offcanvasListData}`}>
                                    <li>Click on "Download" to download the proposal form</li>
                                    <li>Once you have downloaded the form, carefully read any instructions provided at the beginning of the form.</li>
                                    <li>Fill out the form by entering the requested information. This may include personal details, contact information, checkboxes, and other mandatory fields.</li>
                                    <li>Pay special attention to mandatory fields, often indicated with asterisks or other symbols, as these must be completed.</li>
                                    <li>If the form is multi-page, go to the next page as needed and continue filling it out.</li>
                                    <li>Physically sign the form in the designated signature field.</li>
                                    <li>Double-check all the information you've entered for accuracy and  completeness.</li>
                                    <li>Sign the mandate letter as well.</li>
                                    <li>Scan the completed & singed proposal form, and the signed mandate letter.</li>
                                    <li>Go back to where you downloaded both documents, and upload both the scanned copies.</li>
                                </ul>
                            )
                        )}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
