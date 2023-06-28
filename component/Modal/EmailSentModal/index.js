import React from "react";
import { Button, Modal } from "react-bootstrap";

import alertModal from '@/assets/css/alertModal.module.css'

import EmailIcon from '../../Icons/Email'

export default function EmailSentModal(props) {
    const { show, handleClose } = props;
    return (
        <>
            <Modal show={show} onHide={handleClose} centered className={alertModal.alertMdlOuter}>
                <Modal.Body className={alertModal.alertMdlBody}>
                    <div className={alertModal.alertMdlHdr}>
                        <EmailIcon width="20" height="20" />
                        <h5>Your Mail is Sent!</h5>
                    </div>
                    <div className={alertModal.alertMdlInfo}>
                        <p>Thank you for filing your request. We will send your documents to your registered mail id soon. Meanwhile, you can close this or file another request.</p>
                    </div>
                    <div className={alertModal.alertMdlBtn}>
                        <Button className={alertModal.alertMdlCloseBtn} onClick={handleClose} type="button">Close</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
