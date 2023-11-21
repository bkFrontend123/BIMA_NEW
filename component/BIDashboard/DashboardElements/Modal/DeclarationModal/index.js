import React, { useState } from 'react'

import { Modal, Row, Col, Tabs, Tab } from "react-bootstrap";

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import FileUploadCard from '@/component/BIDashboard/DashboardElements/FileUploadElements/FileUploadCard';
import FileUploadButtonRow from '@/component/BIDashboard/DashboardElements/FileUploadElements/FileUploadButtonRow';
import FileUploadButton from '@/component/BIDashboard/DashboardElements/FileUploadElements/FileUploadButton';
import FileUploadText from '@/component/BIDashboard/DashboardElements/FileUploadElements/FileUploadText';

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';
import UploadIcon from "@/component/BIDashboard/Icons/IconUpload";

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import commonModal from '@/assets/css/commonModal.module.css'
import fileUploadTabs from '@/assets/css/fileUploadTabs.module.css'

export default function DeclarationModal(props) {
    const { show, children, handleClose } = props;
    
    return (
        <>
            <Modal show={show} size="xl" onHide={handleClose} centered backdrop="static" keyboard={false} className={commonModal.commonMdlOuter}>
                <Modal.Body className={commonModal.commonMdlBody}>
                    <Row className="g-3 g-xl-4 g-xxl-5 justify-content-between">
                        <Col lg={7} xl={7}>
                            <div className={`${commonModal.dclrtnMdlLft}`}>
                                <Row className="g-3 g-xl-4 g-xxl-5 align-items-center justify-content-between">
                                    <Col lg={5} xl={6}>
                                        <div className={commonModal.dclrtnMdlTtl}>
                                            <h4>Add Your Declaration</h4>
                                        </div>
                                    </Col>
                                    <Col lg={7} xl={6}>
                                        <ButtonItem
                                            title="Download Template File"
                                            type="button"
                                            customClass={`m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig} ${buttonStyle.minWidth4}`}
                                        >
                                            <ArrowPrimaryIcon />
                                        </ButtonItem>
                                    </Col>
                                </Row>
                                <div className={commonModal.dclrtnMdlRule}>
                                    <h5>Rules about Filling the Template File</h5>
                                    <ul>
                                        <li>For Male: M. For Females: F</li>
                                        <li>Add self in a relationship</li>
                                        <li>All dates should follow the format DD MM-YYYY</li>
                                        <li>In order to add the member employee ID, name, dob, relationship, gender, date of joining is required</li>
                                        <li>For deleting members, we can add health ID, last day or name, employee ID, last day</li>
                                    </ul>
                                </div>
                                <ButtonItem
                                    title="Close"
                                    type="button"
                                    customClass={`m-0 mt-4 mt-xl-5 px-2 ${buttonStyle.minWidth} ${buttonStyle.btnBorder} ${buttonStyle.border2} ${buttonStyle.btnBig}`}
                                    onClick={handleClose}
                                />
                            </div>
                        </Col>
                        <Col lg={5} xl={5}>
                            <div className={`${commonModal.dclrtnMdlRght}`}>
                                <FileUploadCard
                                    title="Upload your File"
                                    description="Please select weather you want to upload annually, bi-annually, or monthly. Then, select the option from the drop down."
                                >
                                    <Tabs
                                        defaultActiveKey=""
                                        id="fileUploadTabs"
                                        className={`${fileUploadTabs.fileUploadTabs} fileUploadTabs`}
                                    >
                                        <Tab eventKey="annual" title="Annual">
                                            <FileUploadButtonRow>
                                                <FileUploadButton
                                                    title="2023-24"
                                                    status=""
                                                />
                                            </FileUploadButtonRow>
                                        </Tab>
                                        <Tab eventKey="biAnnual" title="Bi-Annual">
                                            <FileUploadButtonRow>
                                                <FileUploadButton
                                                    title="January-August"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="September-December"
                                                    status="active"
                                                />
                                            </FileUploadButtonRow>
                                        </Tab>
                                        <Tab eventKey="monthly" title="Monthly">
                                            <FileUploadButtonRow>
                                                <FileUploadButton
                                                    title="January"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="February"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="March"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="April"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="May"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="June"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="July"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="August"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="September"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="October"
                                                    status="filled"
                                                />
                                                <FileUploadButton
                                                    title="November"
                                                    status="active"
                                                />
                                                <FileUploadButton
                                                    title="December"
                                                    status=""
                                                />
                                            </FileUploadButtonRow>
                                        </Tab>
                                    </Tabs>
                                    <FileUploadText />
                                </FileUploadCard>
                                <FileUploadCard
                                    title="File Uploaded!"
                                    description="You have successfully uploaded your declaration!"
                                    typeOfDeclaration="Monthly"
                                    uploadedFor="November"
                                    fileName="BK_Template(1).xls"
                                    valueOfDeclaration="10,000,00.00"
                                    uploadTime="20 August 2023; 10:21 PM"
                                    status="sucess"
                                >

                                </FileUploadCard>
                                <FileUploadCard
                                    title="File Not Supported"
                                    description="Your file was not uploaded because it is not in a proper format. Please ensure you upload the file in xls, xlsx, csv, xlsm, or xlsb."
                                    fileName="BK_Template(1).mp4"
                                    status="error"
                                >
                                    <ButtonItem
                                        title="Try Uploading Again"
                                        type="button"
                                        iconPosition="right"
                                        customClass={`m-0 mt-3 ${buttonStyle.btnBlue} ${buttonStyle.btnDashCard}`}
                                        >
                                        <UploadIcon />
                                    </ButtonItem>
                                </FileUploadCard>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}
