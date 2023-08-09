import React, {useState} from "react";
import { Modal } from "react-bootstrap";

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import alertModal from '@/assets/css/alertModal.module.css'

export default function ClaimRequestThankModal(props) {
    const { show, handleClose } = props;

    return (
        <>
            <Modal show={show} onHide={handleClose} centered className={alertModal.alertMdlOuter}>
                <Modal.Body className={alertModal.alertMdlBody}>
                    <div className={alertModal.alertMdlHdr}>
                        <h5>Your Request is Filed!</h5>
                    </div>
                    <div className={alertModal.alertMdlInfo}>
                        <p>Thank you for filing your request. We will update your claims shortly in the dashboard.</p>
                        <p>Meanwhile, you can close this or file another request.</p>
                    </div>
                    <div className={alertModal.alertMdlBtn}>
                        <ButtonItem
                            title="File New Claim"
                            type="submit"
                            customClass={`m-0 px-2 ${buttonStyle.minWidth3} ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                        />
                        <ButtonItem
                            title="Close"
                            type="button"
                            customClass={`ms-4 me-0 px-2 ${buttonStyle.minWidth} ${buttonStyle.btnBorder} ${buttonStyle.border2} ${buttonStyle.btnBig}`}
                            onClick={handleClose}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
