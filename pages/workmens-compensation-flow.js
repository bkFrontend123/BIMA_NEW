import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {Container, Row, Col, Form, FloatingLabel, Button, ProgressBar, OverlayTrigger, Tooltip, Tabs, Tab} from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import ProductFormContent from '../component/ProductForm/ProductFormContent'
import TalkExpert from '../component/TalkExpert'
import RatingCard from '../component/RatingCard'

import form from '@/assets/css/form.module.css';
import tabStyle from '@/assets/css/tabs.module.css';
import talkExpert from '../component/TalkExpert/style.module.css'
import progress from '@/assets/css/progress.module.css';

import productIcon from '../public/productIcons/liability/workman_icon.svg'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import SettingIcon from '../component/Icons/Setting';
import PlusIcon from '../component/Icons/Plus';
import arrowBack from '../public/icons/arrowBack.svg';
import tooltipIcon from '../public/icons/tooltipIcon.svg';

import expertImg from '../public/himaniImg.png'

export default function WorkmensCompensation_Flow() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const [isOtpActive, setOtpActive] = useState(true);
    const handleOtpToggle = () => {
        setOtpActive(!isOtpActive);
    };

    const [isEnterDetailsFirstActive, setEnterDetailsFirstActive] = useState(true);
    const handleEnterDetailsFirstToggle = () => {
        setEnterDetailsFirstActive(!isEnterDetailsFirstActive);
    };

    const router = useRouter();
    const goToBackPage = () => {
        router.push('/directors-and-officers-insurance');
    };
    const goToNextPage = () => {
        router.push('/all_policies');
    };

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
    
    const [newlyAddedEmployeeId, setNewlyAddedEmployeeId] = useState(null);
    const [editingEmployeeId, setEditingEmployeeId] = useState(null);
    const [editingMode, setEditingMode] = useState(false);

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
        setEditingMode(false);
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
          setEditingEmployeeId(employeeId);
          setEditingMode(true);
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
        setEditingMode(false);
    };

    const cancelEmployeeDetails = (employeeId) => {
        const updatedDetails = [...employeeDetails];
        const employeeIndex = updatedDetails.findIndex((e) => e.id === employeeId);
    
        if (employeeIndex !== -1) {
            updatedDetails[employeeIndex].isEditing = false;
        }
    
        setEmployeeDetails(updatedDetails);
        setEditingMode(false);
    };

    const [medicalExpensesValue, setMedicalExpensesValue] = useState();
    const handleChangeMedicalExpenses = event => {
        setMedicalExpensesValue(event.target.value);
    };

    const [medicalExpensesLimitValue, setMedicalExpensesLimitValue] = useState();
    const medicalExpensesLimitOptions = [
        {name: '25,000', value: '1'},
        {name: '50,000', value: '2'},
        {name: '75,000', value: '3'},
        {name: '1,00,000', value: '4'},
    ];

    const [periodInsuranceValue, setPeriodInsuranceValue] = useState();
    const periodInsuranceOptions = [
        {name: '1 Month', value: '1'},
        {name: '2 Month', value: '2'},
        {name: '3 Month', value: '3'},
        {name: '4 Month', value: '4'},
        {name: '5 Month', value: '5'},
        {name: '6 Month', value: '6'},
        {name: '7 Month', value: '7'},
        {name: '8 Month', value: '8'},
        {name: '9 Month', value: '9'},
        {name: '10 Month', value: '10'},
        {name: '11 Month', value: '11'},
        {name: '12 Month', value: '12'},
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
            <Head>
                <title>Business Insurance | BimaKavach</title>
                <meta name="description" content="Get the best insurance quote from top insurers in minutes. Customized for your business." />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                scheduleCall="true"
            />
            <section className={`productFormBlock sectionPadding ${form.prdctFrmHeight}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11}>
                            <Row className='g-4'>
                                <Col xl={6} xxl={6}>
                                    <div className='pe-lg-2 pe-xxl-4'>
                                        <ProductFormContent
                                            icon={productIcon}
                                            title="Workmen's Compensation Insurance"
                                            description="Get ₹15 Lakhs Coverage at ₹1,200* per year!"
                                            listText1="Answer a few simple questions"
                                            listText2="Get curated quotes in minutes"
                                            listText3="Secure your business compehensively"
                                        />
                                    </div>
                                </Col>
                                <Col xl={6} xxl={6}>
                                    <div className={`${form.whiteFormBox} ${form.commonForm}`}>
                                    {isOtpActive ? (
                                            <div className={`${form.otpForm}`}>
                                                <div className={`${form.frmBack}`}>
                                                    <span className={`${form.frmBackLink}`} onClick={goToBackPage}>
                                                        <Image src={arrowBack} alt="Back Arrow" /> Enter OTP sent on <span>9876543210</span>
                                                    </span>
                                                </div>
                                                <Form>
                                                    <Form.Group className="floatFormGroup mb-4">
                                                        <FloatingLabel controlId="otp" label="Enter OTP" >
                                                            <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" required />
                                                        </FloatingLabel>
                                                    </Form.Group>
                                                    <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                        <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={handleOtpToggle}>
                                                            <span className='me-2'>Submit</span>
                                                            <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                        </Button>
                                                        <div className='d-none d-md-block'>
                                                            <TalkExpert
                                                                size={`${talkExpert.extraSmall}`}
                                                                imgSrc={expertImg}
                                                                name="Himani Doshi"
                                                                designation="Insurance Expert"
                                                            />
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        ): (
                                            <>
                                                {isEnterDetailsFirstActive ? (
                                                    <div className={`${form.entrDtlsFormFirst}`}>
                                                        {!editingMode ? (
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
                                                        ):(
                                                            null
                                                        )}
                                                        <Form>
                                                        <div className={`${editingMode ? form.editingModeForm : ''}`}>
                                                            {employeeDetails.map((employee) => (
                                                                <div key={employee.id} className={`formBlock ${form.formBlock} ${employee.isEditing && editingEmployeeId === employee.id ? form.active : ''}`}>
                                                                    {!employee.isEditing ? (
                                                                        <>
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
                                                                        </>
                                                                    ) : (
                                                                        null
                                                                    )}
            
                                                                    {employee.isEditing && (
                                                                        <>
                                                                            <div className={`${form.frmBack}`}>
                                                                                <Row className='align-items-center gap-4 gap-lg-2'>
                                                                                    <Col>
                                                                                        <span className={`${form.frmBackLink}`} onClick={() => cancelEmployeeDetails(employee.id)}>
                                                                                            <Image src={arrowBack} alt="Back Arrow" /> Employee Details {employee.id}
                                                                                        </span>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
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
                                                                                    <Tab eventKey={`${employee.id}_semiSkilled`} title="Semi-skilled" className={tabStyle.tabCmnCol}>
                                                                                        <Form.Group className="floatFormGroup tooltipDiv mb-4">
                                                                                            <FloatingLabel controlId={`${employee.id}_semiSkilledNumberWorkers`} label="Number of workers">
                                                                                                <Form.Control
                                                                                                    className={`${form.formInput}`}
                                                                                                    type="text"
                                                                                                    placeholder="Enter number of workers"
                                                                                                    required
                                                                                                    value={employee.semiSkilled.numberOfWorkers}
                                                                                                    onChange={(e) => handleTabChange(employee.id, 'semiSkilled', e)}
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
                                                                                            <FloatingLabel controlId={`${employee.id}_semiSkilledMonthlySalary`} label="Monthly salary per worker">
                                                                                                <Form.Control
                                                                                                    className={`${form.formInput}`}
                                                                                                    type="text"
                                                                                                    placeholder="Enter monthly salary per worker"
                                                                                                    required
                                                                                                    value={employee.semiSkilled.monthlySalary}
                                                                                                    onChange={(e) => handleMonthlySalaryChange(employee.id, 'semiSkilled', e)}
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
                                                                                    <Tab eventKey={`${employee.id}_unskilled`} title="Unskilled" className={tabStyle.tabCmnCol}>
                                                                                        <Form.Group className="floatFormGroup tooltipDiv mb-4">
                                                                                            <FloatingLabel controlId={`${employee.id}_unskilledNumberWorkers`} label="Number of workers">
                                                                                                <Form.Control
                                                                                                    className={`${form.formInput}`}
                                                                                                    type="text"
                                                                                                    placeholder="Enter number of workers"
                                                                                                    required
                                                                                                    value={employee.unskilled.numberOfWorkers}
                                                                                                    onChange={(e) => handleTabChange(employee.id, 'unskilled', e)}
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
                                                                                            <FloatingLabel controlId={`${employee.id}_unskilledMonthlySalary`} label="Monthly salary per worker">
                                                                                                <Form.Control
                                                                                                    className={`${form.formInput}`}
                                                                                                    type="text"
                                                                                                    placeholder="Enter monthly salary per worker"
                                                                                                    required
                                                                                                    value={employee.unskilled.monthlySalary}
                                                                                                    onChange={(e) => handleMonthlySalaryChange(employee.id, 'unskilled', e)}
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
                                                            {/*<div className="appendDivOuter mb-4">
                                                                <div className="appendDiv"></div>
                                                                {subCategories.map((subCategory) => (
                                                                    <div key={subCategory.id}>
                                                                        {subCategories.length > 1 && (
                                                                            <>
                                                                                <div className="mb-4">
                                                                                    <Row className="g-3 align-items-center justify-content-between">
                                                                                        <Col>
                                                                                            <div className={`${form.formCheckLabel} m-0`}>Sub Category {subCategories.indexOf(subCategory) + 1}</div>
                                                                                        </Col>
                                                                                        <Col lg="auto">
                                                                                            <button type="button" className={form.removeCatBtn} onClick={() => handleRemoveSubCategory(subCategory.id)}>Delete</button>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </div>
                                                                            </>
                                                                        )}
                                                                        <Form.Group className="mb-4">
                                                                            <div className={`${form.formCheckLabel}`}>Skill level of workers</div>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id={`skilled-${subCategory.id}`}
                                                                                name={`skill-${subCategory.id}`}
                                                                                label="Skilled"
                                                                                value="Skilled"
                                                                                checked={subCategory.skill === 'Skilled'}
                                                                                onChange={() => handleSkillChange(subCategory.id, 'Skilled')}
                                                                                className={`${form.formCheckRadio} ${form.formSkillCheckRadio}`}
                                                                            />
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id={`semiSkill-${subCategory.id}`}
                                                                                name={`skill-${subCategory.id}`}
                                                                                label="Semi-skilled"
                                                                                value="Semi-skilled"
                                                                                checked={subCategory.skill === 'Semi-skilled'}
                                                                                onChange={() => handleSkillChange(subCategory.id, 'Semi-skilled')}
                                                                                className={`${form.formCheckRadio} ${form.formSkillCheckRadio}`}
                                                                            />
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id={`unskilled-${subCategory.id}`}
                                                                                name={`skill-${subCategory.id}`}
                                                                                label="Unskilled"
                                                                                value="Unskilled"
                                                                                checked={subCategory.skill === 'Unskilled'}
                                                                                onChange={() => handleSkillChange(subCategory.id, 'Unskilled')}
                                                                                className={`${form.formCheckRadio} ${form.formSkillCheckRadio}`}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group className="floatFormGroup tooltipDiv mb-4">
                                                                            <FloatingLabel controlId={`subCategoryName-${subCategory.id}`} label="Number of workers">
                                                                                <Form.Control
                                                                                    className={`${form.formInput}`}
                                                                                    type="text"
                                                                                    placeholder="Enter number of workers"
                                                                                    value={subCategory.name}
                                                                                    onChange={(event) => handleSubCategoryNameChange(subCategory.id, event.target.value)}
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
                                                                            <FloatingLabel controlId={`subCategoryValue-${subCategory.id}`} label="Monthly salary per worker">
                                                                                <Form.Control
                                                                                    className={`${form.formInput}`}
                                                                                    type="text"
                                                                                    placeholder="Enter monthly salary per worker"
                                                                                    value={subCategory.value}
                                                                                    onChange={(event) => handleSubCategoryValueChange(subCategory.id, event.target.value)}
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
                                                                    </div>
                                                                ))}

                                                                {subCategories.length < MAX_SUBCATEGORIES && (
                                                                    <button type="button" className={form.addCatBtn} onClick={handleAddSubCategory}>+ Add sub category</button>
                                                                )}
                                                            </div>*/}
                                                            <div className={`${form.fromButtonDiv} d-sm-flex gap-3`}>
                                                                <Button variant="" className={`btnCommon border-primary btnBorder justify-content-center w-100 ${form.formBtn}`} type="button" onClick={addEmployee}>
                                                                    <span className='me-2'>Add More</span>
                                                                    <PlusIcon />
                                                                </Button>
                                                                <Button variant="primary" className={`btnCommon yellowBtn justify-content-center w-100 mt-4 mt-sm-0 ${form.formBtn}`} type="button" onClick={handleEnterDetailsFirstToggle}>
                                                                    <span className='me-2'>Continue</span>
                                                                    <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                </Button>
                                                            </div>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                ): (
                                                    <>
                                                        <div className={`${form.entrDtlsFormSecond}`}>
                                                            <div className={`${form.frmBack}`}>
                                                                <Row className='align-items-center gap-4 gap-lg-2'>
                                                                    <Col>
                                                                        <span className={`${form.frmBackLink}`} onClick={handleEnterDetailsFirstToggle}>
                                                                            <Image src={arrowBack} alt="Back Arrow" /> Enter your details
                                                                        </span>
                                                                    </Col>
                                                                    <Col md="auto">
                                                                        <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noRadiusProgress} ${progress.noLabel} ${progress.warning}`}>
                                                                            <ProgressBar now={70} />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <Form>
                                                                <Form.Group className="mb-4">
                                                                    <Form.Label htmlFor="medicalExpenses" className={`${form.formLabel}`}>Do you want to opt for Medical Expenses Cover?</Form.Label>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="medicalExpenses-1"
                                                                        name="medicalExpenses"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={medicalExpensesValue === 'Yes'}
                                                                        onChange={handleChangeMedicalExpenses}
                                                                        className={`${form.formCheckRadio}`}
                                                                        required
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="medicalExpenses-2"
                                                                        name="medicalExpenses"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={medicalExpensesValue === 'No'}
                                                                        onChange={handleChangeMedicalExpenses}
                                                                        className={`${form.formCheckRadio}`}
                                                                        required
                                                                    />
                                                                </Form.Group>
                                                                {medicalExpensesValue === 'Yes' ? (
                                                                    <Form.Group className={`selectDropDiv mb-4 ${!medicalExpensesLimitValue == '' ? 'selectedDropDiv' : null}`}>
                                                                        <SelectSearch
                                                                            options={medicalExpensesLimitOptions}
                                                                            name="medicalExpensesLimit"
                                                                            placeholder="&nbsp;"
                                                                            onChange={setMedicalExpensesLimitValue}
                                                                            value={medicalExpensesLimitValue}
                                                                            required
                                                                        />
                                                                        <label>Medical expenses limit per employee</label>
                                                                    </Form.Group>
                                                                ):(
                                                                    null
                                                                )}
                                                                <Form.Label htmlFor="periodInsurance" className={`${form.formLabel}`}>What is the period of issurance?</Form.Label>
                                                                <Form.Group className={`selectDropDiv mb-4 ${!periodInsuranceValue == '' ? 'selectedDropDiv' : null}`}>
                                                                    <SelectSearch
                                                                        options={periodInsuranceOptions}
                                                                        name="periodInsurance"
                                                                        placeholder="&nbsp;"
                                                                        onChange={setPeriodInsuranceValue}
                                                                        value={periodInsuranceValue}
                                                                        required
                                                                    />
                                                                    <label>Select Duration</label>
                                                                </Form.Group>
                                                                <Form.Group className="mb-4">
                                                                    <Form.Label htmlFor="existingPolicy" className={`${form.formLabel}`}>Do you have any existing Workmen's Compensation policy?</Form.Label>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="existingPolicy-1"
                                                                        name="existingPolicy"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={existingPolicyValue === 'Yes'}
                                                                        onChange={handleChangeExistingPolicy}
                                                                        className={`${form.formCheckRadio}`}
                                                                        required
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="existingPolicy-2"
                                                                        name="existingPolicy"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={existingPolicyValue === 'No'}
                                                                        onChange={handleChangeExistingPolicy}
                                                                        className={`${form.formCheckRadio}`}
                                                                        required
                                                                    />
                                                                </Form.Group>
                                                                {existingPolicyValue === 'Yes' ? (
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="claimHistory" className={`${form.formLabel}`}>Is there any claim history?</Form.Label>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="claimHistory-1"
                                                                            name="claimHistory"
                                                                            label="Yes"
                                                                            value="Yes"
                                                                            checked={claimHistoryValue === 'Yes'}
                                                                            onChange={handleChangeClaimHistory}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="claimHistory-2"
                                                                            name="claimHistory"
                                                                            label="No"
                                                                            value="No"
                                                                            checked={claimHistoryValue === 'No'}
                                                                            onChange={handleChangeClaimHistory}
                                                                            className={`${form.formCheckRadio}`}
                                                                            required
                                                                        />
                                                                    </Form.Group>
                                                                ):(
                                                                    null
                                                                )}
                                                                <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                    <Button onClick={goToNextPage} variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button">
                                                                        <span className='me-2'>Continue</span>
                                                                        <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                    </Button>
                                                                    <div className='d-none d-md-block'>
                                                                        <TalkExpert
                                                                            size={`${talkExpert.extraSmall}`}
                                                                            imgSrc={expertImg}
                                                                            name="Himani Doshi"
                                                                            designation="Insurance Expert"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )}
                                        {!editingMode ? (
                                            <div className={`${form.frmftr}`}>
                                                <p>By continuing to the next step, you agree to our <Link href='/privacy-policy'>Privacy Policy</Link> and <Link href='/terms-and-conditions'>Terms of Use</Link> , and also provide us a formal mandate to represent you to the insurer and communicate to you the grant of a cover</p>
                                            </div>
                                        ):(
                                            null
                                        )}
                                    </div>
                                </Col>
                            </Row>
                            <div className={`mt-4 mt-lg-5 pt-xl-3`}>
                                <div className='d-md-none mb-4'>
                                    <TalkExpert
                                        background={`${talkExpert.yellow}`}
                                        size={`${talkExpert.extraSmall}`}
                                        imgSrc={expertImg}
                                        name="Himani Doshi"
                                        designation="Insurance Expert"
                                        customClass={`mt-4 ${talkExpert.tlkExprtMobile}`}
                                    />
                                </div>
                                <RatingCard 
                                    customClass="justify-content-center"
                                    background="true"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterPlain
                starContent="true"
            />
        </>
    );
}