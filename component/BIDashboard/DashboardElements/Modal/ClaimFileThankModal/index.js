import React, {useState} from "react";
import { Modal, Form } from "react-bootstrap";

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import alertModal from '@/assets/css/alertModal.module.css'

export default function ClaimFileThankModal(props) {
    const { show, handleClose } = props;

    return (
        <>
            <Modal show={show} onHide={handleClose} centered className={alertModal.alertMdlOuter}>
                <Modal.Body className={alertModal.alertMdlBody}>
                    <div className={alertModal.alertMdlHdr}>
                        <h5>Your Claim is Filed!</h5>
                    </div>
                    <div className={alertModal.alertMdlInfo}>
                        <p>Thank you for filing your claim. We will update your claims shortly in the dashboard.</p>
                        <p>Meanwhile, you can close this or file another claim.</p>
                    </div>
                    <div className={alertModal.alertMdlBtn}>
                        <ButtonItem
                            title="Close"
                            type="button"
                            customClass={`${buttonStyle.minWidth} ${buttonStyle.btnBorder} ${buttonStyle.border2} ${buttonStyle.btnBig}`}
                            onClick={handleClose}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
