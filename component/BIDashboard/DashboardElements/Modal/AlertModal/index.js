import React, {useState} from "react";
import { Modal, Form } from "react-bootstrap";

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import alertModal from '@/assets/css/alertModal.module.css'

export default function AlertModal(props) {
    const { show, title, children, handleClose } = props;

    return (
        <>
            <Modal show={show} onHide={handleClose} centered className={alertModal.alertMdlOuter}>
                <Modal.Body className={alertModal.alertMdlBody}>
                    <div className={`justify-content-center mb-4 ${alertModal.alertMdlHdr}`}>
                        <h5>{title}</h5>
                    </div>
                    <div className={`text-center ${alertModal.alertMdlBtn}`}>
                        {children}
                        <ButtonItem
                            title="No"
                            type="button"
                            customClass={`ms-4 me-0 px-2 ${buttonStyle.minWidth} ${buttonStyle.btnDark}`}
                            onClick={handleClose}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
