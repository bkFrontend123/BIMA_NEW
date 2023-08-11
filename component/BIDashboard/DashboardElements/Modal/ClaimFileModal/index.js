import React, {useState} from "react";
import { Modal, Form } from "react-bootstrap";

import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import formModal from '@/assets/css/formModal.module.css'
import form from '@/assets/css/form.module.css'

export default function ClaimFileModal(props) {
    const { show, handleClose, onClick } = props;

    const [insuranceValue, setInsuranceValue] = useState();
    const insuranceOptions = [
        {name: 'B2B Consulting', value: '1'},
        {name: 'Enterprise Technology', value: '2'},
        {name: 'Consumer', value: '3'},
        {name: 'BFSI', value: '4'},
        {name: 'Enterprise Technology', value: '5'},
        {name: 'B2B Consulting', value: '6'},
    ];

    const [reasonValue, setReasonValue] = useState();
    const reasonOptions = [
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
                    <Modal.Title>File a New Claim</Modal.Title>
                </Modal.Header>
                <Modal.Body className={formModal.formMdlBody}>
                    <div className={`${form.commonForm} ${formModal.formMdlForm}`}>
                        <Form>
                            <Form.Group className={`selectDropDiv selectDropDivSmall searchDropDiv mb-4 ${!insuranceValue == '' ? 'selectedDropDiv' : null}`}>
                                <SelectSearch
                                    options={insuranceOptions}
                                    name="insurance"
                                    placeholder="Search by keyword"
                                    onChange={setInsuranceValue}
                                    search
                                    value={insuranceValue}
                                    required
                                />
                                <label>Select Insurance</label>
                            </Form.Group>
                            <Form.Group className={`selectDropDiv selectDropDivSmall searchDropDiv mb-4 ${!reasonValue == '' ? 'selectedDropDiv' : null}`}>
                                <SelectSearch
                                    options={reasonOptions}
                                    name="reason"
                                    placeholder="Search by keyword"
                                    onChange={setReasonValue}
                                    search
                                    value={reasonValue}
                                    required
                                />
                                <label>Select Reason</label>
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
