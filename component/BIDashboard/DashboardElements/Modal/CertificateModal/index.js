import React, {useEffect} from 'react'
import Image from 'next/image'

import { Modal, Row, Col, Form } from "react-bootstrap";

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import commonModal from '@/assets/css/commonModal.module.css'

export default function EndorsementModal(props) {
    const { title, show, children, handleClose } = props;

    return (
        <>
            <Modal show={show} size="xl" onHide={handleClose} centered backdrop="static" keyboard={false} className={commonModal.commonMdlOuter}>
                <Modal.Body className={commonModal.commonMdlBody}>
                    <Row className="g-3 g-xl-4 g-xxl-5 justify-content-between">
                        <Col lg={6} xl={7}>
                            <div className={`${commonModal.crtfctMdlLft}`}>
                                
                            </div>
                        </Col>
                        <Col lg={6} xl={5}>
                            <div className={`${commonModal.crtfctMdlRght}`}>
                                <div className={commonModal.crtfctMdlTtl}>
                                    <h3>{title}</h3>
                                    <p>Please select which version of the {title} you would like to view and download</p>
                                </div>
                                <div className={commonModal.crtfctMdlListOuter}>
                                    <div className={commonModal.crtfctMdlList}>
                                        {children}
                                    </div>
                                </div>
                                <div className={`mt-4 ${commonModal.crtfctMdlBtns}`}>
                                    <Row>
                                        <Col>
                                            <ButtonItem
                                                title="Download"
                                                type="button"
                                                customClass={`w-100 m-0 px-2 ${buttonStyle.btnBlue} ${buttonStyle.btnBig}`}
                                                onClick={handleClose}
                                            />
                                        </Col>
                                        <Col>
                                            <ButtonItem
                                                title="Close"
                                                type="button"
                                                customClass={`w-100 m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.border2} ${buttonStyle.btnBig}`}
                                                onClick={handleClose}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}
