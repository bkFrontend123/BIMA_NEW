import React, { useState } from 'react'
import Image from 'next/image'

import { Container, Row, Col, Form, FloatingLabel, Button, ProgressBar, OverlayTrigger, Tooltip, Tabs, Tab } from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import form from '@/assets/css/form.module.css';
import tabStyle from '@/assets/css/tabs.module.css';
import progress from '@/assets/css/progress.module.css';

import SubscribeArrow from '../component/Icons/SubscribeArrow';
import SettingIcon from '../component/Icons/Setting';
import PlusIcon from '../component/Icons/Plus';
import arrowBack from '../public/icons/arrowBack.svg';
import tooltipIcon from '../public/icons/tooltipIcon.svg';

export default function WorkmensCompensation_Flow() {

    const [employeeDetails, setEmployeeDetails] = useState([
        {
            id: 1,
            natureOfWork: '',
            occupancy: '',
            skilled: { numberOfWorkers: '', monthlySalary: '' },
            semiSkilled: { numberOfWorkers: '', monthlySalary: '' },
            unskilled: { numberOfWorkers: '', monthlySalary: '' },
            isEditing: true,
        },
    ]);

    const [natureWorkValue, setNatureWorkValue] = useState('');
    const natureWorkOptions = [
        { name: 'Accountant/Admin Staff', value: '1' },
        { name: 'Cook', value: '2' },
        { name: 'Consumer', value: '3' },
        { name: 'BFSI', value: '4' },
        { name: 'Enterprise Technology', value: '5' },
        { name: 'B2B Consulting', value: '6' },
    ];

    const [occupancyValue, setOccupancyValue] = useState('');
    const occupancyOptions = [
        { name: 'Accountant/Admin Staff', value: '1' },
        { name: 'Cook', value: '2' },
        { name: 'Consumer', value: '3' },
        { name: 'BFSI', value: '4' },
        { name: 'Enterprise Technology', value: '5' },
        { name: 'B2B Consulting', value: '6' },
    ];

    const [newlyAddedEmployeeId, setNewlyAddedEmployeeId] = useState(null);

    const addEmployee = () => {
        const newId = employeeDetails.length + 1;
      
        const updatedDetails = employeeDetails.map((employee) => ({
          ...employee,
          isEditing: false,
        }));
      
        const newEmployee = {
          id: newId,
          natureOfWork: '',
          occupancy: '',
          skilled: { numberOfWorkers: '', monthlySalary: '' },
          semiSkilled: { numberOfWorkers: '', monthlySalary: '' },
          unskilled: { numberOfWorkers: '', monthlySalary: '' },
          isEditing: true,
        };
      
        setEmployeeDetails([...updatedDetails, newEmployee]);
        setNewlyAddedEmployeeId(false);
    };

    const handleNatureOfWorkChange = (employeeId, value) => {
        const updatedDetails = [...employeeDetails];
        const employeeIndex = updatedDetails.findIndex((e) => e.id === employeeId);
        if (employeeIndex !== -1) {
            updatedDetails[employeeIndex].natureOfWork = value;
        }
        setEmployeeDetails(updatedDetails);
    };

    const handleOccupancyChange = (employeeId, value) => {
        const updatedDetails = [...employeeDetails];
        const employeeIndex = updatedDetails.findIndex((e) => e.id === employeeId);
        if (employeeIndex !== -1) {
            updatedDetails[employeeIndex].occupancy = value;
        }
        setEmployeeDetails(updatedDetails);
    };

    const handleTabChange = (employeeId, tabKey, event) => {
        const updatedDetails = [...employeeDetails];
        const employeeIndex = updatedDetails.findIndex((e) => e.id === employeeId);
        if (employeeIndex !== -1) {
            updatedDetails[employeeIndex][tabKey].numberOfWorkers = event.target.value;
        }
        setEmployeeDetails(updatedDetails);
    };

    const handleMonthlySalaryChange = (employeeId, tabKey, event) => {
        const updatedDetails = [...employeeDetails];
        const employeeIndex = updatedDetails.findIndex((e) => e.id === employeeId);
        if (employeeIndex !== -1) {
            updatedDetails[employeeIndex][tabKey].monthlySalary = event.target.value;
        }
        setEmployeeDetails(updatedDetails);
    };


    const toggleEditing = (employeeId) => {
        const updatedDetails = [...employeeDetails];
        const employeeIndex = updatedDetails.findIndex((e) => e.id === employeeId);
        if (employeeIndex !== -1) {
            updatedDetails.forEach((employee, index) => {
                if (index !== employeeIndex) {
                    employee.isEditing = false;
                }
            });
            updatedDetails[employeeIndex].isEditing = !updatedDetails[employeeIndex].isEditing;
        }
        setEmployeeDetails(updatedDetails);
        setNewlyAddedEmployeeId(true);
    };

    const saveEmployeeDetails = (employeeId) => {
        const updatedDetails = [...employeeDetails];
        const employeeIndex = updatedDetails.findIndex((e) => e.id === employeeId);
        if (employeeIndex !== -1) {
            updatedDetails[employeeIndex].isEditing = false;
        }
        setEmployeeDetails(updatedDetails);
    };

    const [medicalExpensesValue, setMedicalExpensesValue] = useState();
    const handleChangeMedicalExpenses = event => {
        setMedicalExpensesValue(event.target.value);
    };

    const [medicalExpensesLimitValue, setMedicalExpensesLimitValue] = useState();
    const medicalExpensesLimitOptions = [
        { name: '25,000', value: '1' },
        { name: '50,000', value: '2' },
        { name: '75,000', value: '3' },
        { name: '1,00,000', value: '4' },
    ];

    const [periodInsuranceValue, setPeriodInsuranceValue] = useState();
    const periodInsuranceOptions = [
        { name: '1 Month', value: '1' },
        { name: '2 Month', value: '2' },
        { name: '3 Month', value: '3' },
        { name: '4 Month', value: '4' },
        { name: '5 Month', value: '5' },
        { name: '6 Month', value: '6' },
        { name: '7 Month', value: '7' },
        { name: '8 Month', value: '8' },
        { name: '9 Month', value: '9' },
        { name: '10 Month', value: '10' },
        { name: '11 Month', value: '11' },
        { name: '12 Month', value: '12' },
    ];

    const [existingPolicyValue, setExistingPolicyValue] = useState();
    const handleChangeExistingPolicy = event => {
        setExistingPolicyValue(event.target.value);
    };

    const [claimHistoryValue, setClaimHistoryValue] = useState();
    const handleChangeClaimHistory = event => {
        setClaimHistoryValue(event.target.value);
    };

    return (
        <>
            <section className={`productFormBlock sectionPadding ${form.prdctFrmHeight}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11}>
                            <Row className='g-4'>
                                <Col xl={6} xxl={6}></Col>
                                <Col xl={6} xxl={6}>
                                    <div className={`${form.whiteFormBox} ${form.commonForm}`}>
                                        <div className={`${form.entrDtlsFormFirst}`}>
                                            <div className={`${form.frmBack}`}>
                                                <Row className='align-items-center gap-4 gap-lg-2'>
                                                    <Col>
                                                        <span className={`${form.frmBackLink}`}>
                                                            <Image src={arrowBack} alt="Back Arrow" /> Enter your details
                                                        </span>
                                                    </Col>
                                                    <Col md="auto">
                                                        <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noRadiusProgress} ${progress.noLabel} ${progress.warning}`}>
                                                            <ProgressBar now={40} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Form>
                                                {employeeDetails.map((employee) => (
                                                    <div key={employee.id} className={`${form.formBlock} ${employee.isEditing ? 'active' : ''}`}>
                                                        {!employee.isEditing ? (
                                                            <div className={`${form.formEditField} mb-4`}>
                                                                <span>Employee Details {employee.id}</span>
                                                                <Button
                                                                    variant="link"
                                                                    className={`${form.formEditFieldBtn} ${employee.isEditing ? form.active : ''}`}
                                                                    onClick={() => toggleEditing(employee.id)}
                                                                >
                                                                    <SettingIcon />
                                                                </Button>
                                                            </div>
                                                        ) : (
                                                            null
                                                        )}

                                                        {employee.isEditing && (
                                                            <>
                                                                <Form.Group className={`selectDropDiv searchDropDiv tooltipDiv mb-4 ${employee.occupancy ? 'selectedDropDiv' : ''}`}>
                                                                    <SelectSearch
                                                                        options={occupancyOptions}
                                                                        name={`occupancy_${employee.id}`}
                                                                        placeholder="Search by keyword"
                                                                        onChange={(value) => handleOccupancyChange(employee.id, value)}
                                                                        search
                                                                        value={employee.occupancy}
                                                                        required
                                                                        disabled={!employee.isEditing}
                                                                    />
                                                                    <label>Occupancy</label>
                                                                    <OverlayTrigger
                                                                        placement="top"
                                                                        overlay={<Tooltip>Current market value of your office at which the property can be sold.</Tooltip>}
                                                                    >
                                                                        {({ ref, ...triggerHandler }) => (
                                                                            <i className='tooltipIcon' {...triggerHandler}>
                                                                                <Image
                                                                                    ref={ref}
                                                                                    src={tooltipIcon}
                                                                                    width="24"
                                                                                    height="24"
                                                                                    alt="Remark Icon"
                                                                                />
                                                                            </i>
                                                                        )}
                                                                    </OverlayTrigger>
                                                                </Form.Group>
                                                                <Form.Group className={`selectDropDiv searchDropDiv tooltipDiv mb-4 ${employee.natureOfWork ? 'selectedDropDiv' : ''}`}>
                                                                    <SelectSearch
                                                                        options={natureWorkOptions}
                                                                        name={`natureWork_${employee.id}`}
                                                                        placeholder="Search by keyword"
                                                                        onChange={(value) => handleNatureOfWorkChange(employee.id, value)}
                                                                        search
                                                                        value={employee.natureOfWork}
                                                                        required
                                                                        disabled={!employee.isEditing}
                                                                    />
                                                                    <label>Nature of work</label>
                                                                    <OverlayTrigger
                                                                        placement="top"
                                                                        overlay={<Tooltip>Maximum amount the insurance company will pay you in case of loss due to defined liability.</Tooltip>}
                                                                    >
                                                                        {({ ref, ...triggerHandler }) => (
                                                                            <i className='tooltipIcon' {...triggerHandler}>
                                                                                <Image
                                                                                    ref={ref}
                                                                                    src={tooltipIcon}
                                                                                    width="24"
                                                                                    height="24"
                                                                                    alt="Remark Icon"
                                                                                />
                                                                            </i>
                                                                        )}
                                                                    </OverlayTrigger>
                                                                </Form.Group>
                                                                <div className={`${form.formCheckLabel}`}>Skill level of workers</div>
                                                                <div className={`tabCmnOuter ${tabStyle.tabCmnOuter}`}>
                                                                    <Tabs id={`skill-level-${employee.id}`} className={`mb-4 ${tabStyle.tabCmnNav}`}>
                                                                        <Tab eventKey={`${employee.id}_skilled`} title="Skilled" className={tabStyle.tabCmnCol}>
                                                                            <Form.Group className="floatFormGroup tooltipDiv mb-4">
                                                                                <FloatingLabel controlId={`${employee.id}_skilledNumberWorkers`} label="Number of skilled workers">
                                                                                    <Form.Control
                                                                                        className={`${form.formInput}`}
                                                                                        type="text"
                                                                                        placeholder="Enter number of workers"
                                                                                        required
                                                                                        value={employee.skilled.numberOfWorkers}
                                                                                        onChange={(e) => handleTabChange(employee.id, 'skilled', e)}
                                                                                        disabled={!employee.isEditing}
                                                                                    />
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={<Tooltip>Current market value of your office at which the property can be sold.</Tooltip>}
                                                                                    >
                                                                                        {({ ref, ...triggerHandler }) => (
                                                                                            <i className="tooltipIcon" {...triggerHandler}>
                                                                                                <Image ref={ref} src={tooltipIcon} width="24" height="24" alt="Remark Icon" />
                                                                                            </i>
                                                                                        )}
                                                                                    </OverlayTrigger>
                                                                                </FloatingLabel>
                                                                            </Form.Group>
                                                                            <Form.Group className="floatFormGroup tooltipDiv mb-4">
                                                                                <FloatingLabel controlId={`${employee.id}_skilledMonthlySalary`} label="Avg monthly salary per skilled worker">
                                                                                    <Form.Control
                                                                                        className={`${form.formInput}`}
                                                                                        type="text"
                                                                                        placeholder="Enter monthly salary per worker"
                                                                                        required
                                                                                        value={employee.skilled.monthlySalary}
                                                                                        onChange={(e) => handleMonthlySalaryChange(employee.id, 'skilled', e)}
                                                                                        disabled={!employee.isEditing}
                                                                                    />
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={<Tooltip>Current market value of your office at which the property can be sold.</Tooltip>}
                                                                                    >
                                                                                        {({ ref, ...triggerHandler }) => (
                                                                                            <i className="tooltipIcon" {...triggerHandler}>
                                                                                                <Image ref={ref} src={tooltipIcon} width="24" height="24" alt="Remark Icon" />
                                                                                            </i>
                                                                                        )}
                                                                                    </OverlayTrigger>
                                                                                </FloatingLabel>
                                                                            </Form.Group>
                                                                        </Tab>
                                                                    </Tabs>
                                                                </div>
                                                                {employee.isEditing && newlyAddedEmployeeId && (
                                                                    <div className={`${form.fromConfirmButtonDiv} ${form.fromButtonDiv} mb-4`}>
                                                                        <Button variant="" className={`btnCommon border-primary btnBorder w-100 justify-content-center ${form.formBtn}`} type="button" onClick={() => saveEmployeeDetails(employee.id)}>
                                                                            <span>Confirm Changes</span>
                                                                        </Button>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                ))}
                                                <div className={`${form.fromButtonDiv} d-sm-flex gap-3`}>
                                                    <Button variant="" className={`btnCommon border-primary btnBorder justify-content-center w-100 ${form.formBtn}`} type="button" onClick={addEmployee}>
                                                        <span className='me-2'>Add More</span>
                                                        <PlusIcon />
                                                    </Button>
                                                    <Button variant="primary" className={`btnCommon yellowBtn justify-content-center w-100 mt-4 mt-sm-0 ${form.formBtn}`} type="button">
                                                        <span className='me-2'>Continue</span>
                                                        <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                    </Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}