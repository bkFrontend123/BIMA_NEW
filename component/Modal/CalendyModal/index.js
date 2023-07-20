import React from "react";
import { InlineWidget } from "react-calendly";

import { Button, Modal } from "react-bootstrap";

import style from './style.module.css'

import calendyModal from '@/assets/css/calendyModal.module.css'

export default function CalendyModal(props) {
    const { show, handleClose } = props;
    return (
        <>
            {/*<Modal show={show} onHide={handleClose} centered size="lg" className={calendyModal.calendyMdlOuter}>
                <Modal.Header closeButton>
                    <Modal.Title>Free Consultation</Modal.Title>
                </Modal.Header>
                <Modal.Body className={calendyModal.calendyMdlBody}>
                    <div className={calendyModal.calendyForm}>
                        <iframe src="https://calendly.com/tejasjain?hide_gdpr_banner=1"></iframe>
                        
                    </div>
                </Modal.Body>
            </Modal>*/}
            <div className={`${style.caldendyPopOuter} ${show ? style.active : null}`}>
                <div className={`${style.caldendyPopInner}`}>
                    <div className={`${style.caldendyPopContent}`}>
                        <div className={`${style.caldendyPopHdr}`}>
                            <h4>Free Consultation</h4>
                            <Button type="button" variant="" className="btn-close" onClick={handleClose}></Button>
                        </div>
                        <div className={`${style.caldendyPopBody}`}>
                            <InlineWidget url="https://calendly.com/tejasjain?hide_gdpr_banner=1" />
                        </div>
                    </div>
                </div>
            </div>
            {show ? (
                <div className={`${style.caldendyPopOverlay}`}></div>
            ):(
                null
            )}
        </>
    )
}
