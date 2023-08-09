import React, {useState} from "react";
import { Modal, Form, FloatingLabel } from "react-bootstrap";

import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import formModal from '@/assets/css/formModal.module.css'
import form from '@/assets/css/form.module.css'

export default function ClaimRequestModal(props) {
    const { show, handleClose, onClick } = props;

    const [requestTypeValue, setRequestTypeValue] = useState();
    const requestTypeOptions = [
        {name: 'B2B Consulting', value: '1'},
        {name: 'Enterprise Technology', value: '2'},
        {name: 'Consumer', value: '3'},
        {name: 'BFSI', value: '4'},
        {name: 'Enterprise Technology', value: '5'},
        {name: 'B2B Consulting', value: '6'},
    ];

    return (
        <>
            <Modal show={show} onHide={handleClose} centered className={formModal.formMdlOuter}>
                <Modal.Header className={formModal.formMdlHdr} closeButton>
                    <Modal.Title>File a New Request</Modal.Title>
                </Modal.Header>
                <Modal.Body className={formModal.formMdlBody}>
                    <div className={`${form.commonForm} ${formModal.formMdlForm}`}>
                        <Form>
                            <Form.Group className={`selectDropDiv selectDropDivSmall searchDropDiv mb-4 ${!requestTypeValue == '' ? 'selectedDropDiv' : null}`}>
                                <SelectSearch
                                    options={requestTypeOptions}
                                    name="requestType"
                                    placeholder="Search by keyword"
                                    onChange={setRequestTypeValue}
                                    search
                                    value={requestTypeValue}
                                    required
                                />
                                <label>Request type</label>
                            </Form.Group>
                            <Form.Group className="floatFormGroup mb-4">
                                <FloatingLabel controlId="briefly" label="Briefly describe the request">
                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" as="textarea" rows={3} />
                                </FloatingLabel>
                            </Form.Group>
                            <div className={formModal.formMdlBtn}>
                                <ButtonItem
                                    title="Submit"
                                    type="button"
                                    customClass={`m-0 px-2 ${buttonStyle.minWidth} ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                                    onClick={onClick}
                                />
                                <ButtonItem
                                    title="Close"
                                    type="button"
                                    customClass={`ms-4 me-0 px-2 ${buttonStyle.minWidth} ${buttonStyle.btnBorder} ${buttonStyle.border2} ${buttonStyle.btnBig}`}
                                    onClick={handleClose}
                                />
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
