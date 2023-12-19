import React, { useState, useEffect } from 'react'

import { Row, Col, Button, Offcanvas } from 'react-bootstrap';

import ProposalQuestionRadio from "@/component/ProposalFormElements/ProposalQuestionRadio";
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem";

import EditIcon from '@/component/Icons/Edit';
import ArrowForwardcon from '@/component/Icons/ArrowForward';
import ArrowBackwardIcon from '@/component/Icons/ArrowBackward';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import offcanvas from '@/assets/css/offcanvas.module.css'
import radioStyle from '@/component/ProposalFormElements/ProposalQuestionRadio/style.module.css'
import style from './style.module.css'

export default function ProposalQuestionCard(props) {
    const { questionName, isUploadMode, isEditMode, isNoMore, knowMoreTitle, knowMoreContent, isHint, hintTitle, isError, errorText, isTableForm, children } = props;

    const [radioValue, setRadioValue] = useState();

    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
    };
    useEffect(() => {
    }, [radioValue]);
    
    const [isEditValue, setEditValue] = useState(true);
    const handleClickEdit = () => setEditValue(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {isUploadMode == 'true' ? (
                <hr className='my-3 my-xxl-4 bg-black'></hr>
            ) : (
                null
            )}
            <div className={`${style.qstnCol} ${isEditMode == 'true' ? style.disable : ''} ${isEditValue ? '' : style.NoDisable} ${isUploadMode == 'true' ? style.qstnUpldCol : ''} ${isError == 'true' ? style.qstnErrorCol : ''}`}>
                <div className={`${style.qstnColInner}`}>
                    <Row className="g-4 g-xl-5 align-items-start">
                        <Col lg={7}>
                            <div className={`${style.qstnName}`}>
                                <p>{questionName}</p>
                            </div>
                            {isUploadMode == 'true' ? (
                                <div className={`${style.qstnUpldDiv}`}>
                                    {children}
                                </div>
                            ) : (
                                <>
                                    {isTableForm == 'true' ? (
                                        null
                                    ) : (
                                        <>
                                            {isHint == 'true' ? (
                                                <div className={`${style.qstnHint}`}>
                                                    {hintTitle ? <p>{hintTitle}</p> : ( null )}
                                                    <div className={`${style.qstnHintInner}`}>
                                                        {children}
                                                    </div>
                                                </div>
                                            ) : (
                                                null
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </Col>
                        <Col>
                            {isNoMore == 'true' ? (
                                <div className={`${style.qstnKnwMrBtn} ${props.option ? '' : 'text-lg-end'}`}>
                                    <Button className="font-secondary" type="button" onClick={handleShow}>Know more <ArrowForwardcon /></Button>
                                </div>
                            ) : (
                                null
                            )}
                        </Col>
                        {props.option ? (
                            <Col lg="auto">
                                <div className={`${style.qstnOptnDiv}`}>
                                    {props.option.map(data=>
                                        <ProposalQuestionRadio
                                            id={data.id}
                                            name={data.name}
                                            label={data.label}
                                            value={data.id}
                                            checked={radioValue == data.id}
                                            onChange={handleChangeRadio}
                                            required={true}
                                            key={data.id}
                                            customClass={`${isEditMode == 'true' ? radioStyle.qstnRdoDsblCol : ''} ${isEditValue ? '' : radioStyle.qstnRdoNoDsblCol}`}
                                        />
                                    )}
                                </div>
                            </Col>
                        ):(
                            null
                        )}
                    </Row>
                    {isTableForm == 'true' ? (
                        <Row className="g-4 g-xl-5">
                            <Col lg={12}>
                                <div className={`${style.tblFrmOuter}`}>
                                    {children}
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        null
                    )}
                    
                </div>
                {isEditMode == 'true' ? (
                    <div className={`${style.qstnEditBtn}`}>
                        <Button type="button" onClick={handleClickEdit}>
                            <span>Edit</span> <i><EditIcon /></i>
                        </Button>
                    </div>
                ) : (
                    null
                )}
            </div>
            {errorText ? (
                <div className={`${style.qstnErrText}`}>
                    <p>{errorText}</p>
                </div>
             ) : ( 
                null
            )}
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
                        </Row>
                        <div className={`my-4 py-xl-2 ${offcanvas.commonOffcanvasHdrTtl}`}>
                            <h3>{knowMoreTitle}</h3>
                        </div>
                        <div className={`${offcanvas.commonOffcanvasData}`}>
                            {Array.isArray(knowMoreContent) ? (
                                <>
                                    {knowMoreContent.map((paragraph, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                    ))}
                                </>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: knowMoreContent }} />
                            )}
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
