import React from "react";
import { Button, Modal } from "react-bootstrap";

import calendyModal from '@/assets/css/calendyModal.module.css'

export default function CalendyModal(props) {
    const { show, handleClose } = props;
    return (
        <>
            <Modal show={show} onHide={handleClose} centered size="lg" className={calendyModal.calendyMdlOuter}>
                <Modal.Header closeButton>
                    <Modal.Title>Free Consultation</Modal.Title>
                </Modal.Header>
                <Modal.Body className={calendyModal.calendyMdlBody}>
                    <div className={calendyModal.calendyForm}>
                        <iframe src="https://calendly.com/tejasjain?hide_gdpr_banner=1"></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
