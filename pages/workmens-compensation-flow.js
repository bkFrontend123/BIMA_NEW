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

import form from '@/assets/css/form.module.css'
import tabStyle from '@/assets/css/tabs.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'
import progress from '@/assets/css/progress.module.css'

import productIcon from '../public/productIcons/liability/workman_icon.svg'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import arrowBack from '../public/icons/arrowBack.svg'
import WhatsApp from '../component/Icons/WhatsApp'
import tooltipIcon from '../public/icons/tooltipIcon.svg'

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

    const [indValue, setIndValue] = useState();
    const indTypeOptions = [
        {name: 'B2B Consulting', value: '1'},
        {name: 'Enterprise Technology', value: '2'},
        {name: 'Consumer', value: '3'},
        {name: 'BFSI', value: '4'},
        {name: 'Enterprise Technology', value: '5'},
        {name: 'B2B Consulting', value: '6'},
    ];
    
    const [natureWorkValue, setNatureWorkValue] = useState();
    const natureWorkOptions = [
        {name: 'Accuntant/ Admin Staff', value: '1'},
        {name: 'Cook', value: '2'},
        {name: 'Consumer', value: '3'},
        {name: 'BFSI', value: '4'},
        {name: 'Enterprise Technology', value: '5'},
        {name: 'B2B Consulting', value: '6'},
    ];

    const [skilledValue, setSkilledValue] = useState('Skilled');
    const [subCategories, setSubCategories] = useState([{ id: 1, name: '', value: '', skill: 'Skilled' }]);
    const MAX_SUBCATEGORIES = 3; // Maximum number of sub-categories allowed

    const handleChangeSkilled = (event) => {
        setSkilledValue(event.target.value);
    };

    const handleAddSubCategory = () => {
        const newSubCategoryId = subCategories.length + 1;
        if (subCategories.length < MAX_SUBCATEGORIES) {
        const newSubCategory = { id: newSubCategoryId, name: '', value: '', skill: 'Skilled' };
        setSubCategories((prevSubCategories) => [...prevSubCategories, newSubCategory]);
        }
    };

    const handleRemoveSubCategory = (id) => {
        if (subCategories.length > 1) {
        setSubCategories((prevSubCategories) => prevSubCategories.filter((subCategory) => subCategory.id !== id));
        }
    };

    const handleSubCategoryNameChange = (id, name) => {
        setSubCategories((prevSubCategories) =>
        prevSubCategories.map((subCategory) => (subCategory.id === id ? { ...subCategory, name } : subCategory))
        );
    };

    const handleSubCategoryValueChange = (id, value) => {
        setSubCategories((prevSubCategories) =>
        prevSubCategories.map((subCategory) => (subCategory.id === id ? { ...subCategory, value } : subCategory))
        );
    };

    const handleSkillChange = (id, skill) => {
        setSubCategories((prevSubCategories) =>
        prevSubCategories.map((subCategory) => (subCategory.id === id ? { ...subCategory, skill } : subCategory))
        );
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
                <title>Workmen's Compensation Insurance | BimaKavach Insurance for Workmen's Compensation</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
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
                                <Col xl={6} xxl={7}>
                                    <div className='pe-lg-2 pe-xxl-5'>
                                        <ProductFormContent
                                            icon={productIcon}
                                            title="Workmen's Compensation Insurance"
                                            description="Get Lorem Ipsum coverage at just Lorem Ipsum per month!"
                                            listText1="Answer a few Simple Questions"
                                            listText2="Get curated quotes in minutes"
                                            listText3="Secure your business compehensively"
                                        />
                                        <hr className='d-none d-md-block my-3 my-xxl-4'></hr>
                                        <div className={`d-none d-md-flex align-items-center justify-content-between gap-3`}>
                                            {/*<TalkExpert />
                                            <div className={`d-flex mt-4 mt-md-0`}>
                                                <Link href="/" className="btnCommon btnBorder border-primary">
                                                    <WhatsApp iconColor="primary" width="18" height="18" />
                                                    <span className='ms-2'>Talk to an expert</span>
                                                </Link>
                                            </div>*/}
                                            <RatingCard />
                                            <TalkExpert
                                                background={`${talkExpert.yellow}`}
                                                size={`${talkExpert.small}`}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} xxl={5}>
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
                                                    </div>
                                                </Form>
                                            </div>
                                        ): (
                                            <>
                                                {isEnterDetailsFirstActive ? (
                                                    <div className={`${form.entrDtlsFormFirst}`}>
                                                        <div className={`${form.frmBack}`}>
                                                            <Row className='align-items-center gap-4 gap-lg-2'>
                                                                <Col>
                                                                    <span className={`${form.frmBackLink}`} onClick={handleOtpToggle}>
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
                                                            <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!indValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={indTypeOptions}
                                                                    name="industry"
                                                                    placeholder="Search by keyword"
                                                                    onChange={setIndValue}
                                                                    search
                                                                    value={indValue}
                                                                    required
                                                                />
                                                                <label>Industry Type</label>
                                                            </Form.Group>
                                                            <Form.Group className={`selectDropDiv searchDropDiv tooltipDiv mb-4 ${!natureWorkValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={natureWorkOptions}
                                                                    name="natureWork"
                                                                    placeholder="Search by keyword"
                                                                    onChange={setNatureWorkValue}
                                                                    search
                                                                    value={natureWorkValue}
                                                                    required
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
                                                            {natureWorkValue ? (
                                                                <>
                                                                    <div className={`${form.formCheckLabel}`}>Skill level of workers</div>
                                                                    <div className={`tabCmnOuter ${tabStyle.tabCmnOuter}`}>
                                                                        <Tabs defaultActiveKey="skilled" id="skill-level" className={`mb-4 ${tabStyle.tabCmnNav}`}>
                                                                            <Tab eventKey="skilled" title="Skilled" className={tabStyle.tabCmnCol}>
                                                                                <Form.Group className="floatFormGroup tooltipDiv mb-4">
                                                                                    <FloatingLabel controlId="skilledNumberWorkers" label="Number of workers">
                                                                                        <Form.Control
                                                                                            className={`${form.formInput}`}
                                                                                            type="text"
                                                                                            placeholder="Enter number of workers"
                                                                                            required
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
                                                                                    <FloatingLabel controlId="skilledMonthlySalary" label="Monthly salary per worker">
                                                                                        <Form.Control
                                                                                            className={`${form.formInput}`}
                                                                                            type="text"
                                                                                            placeholder="Enter monthly salary per worker"
                                                                                            required
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
                                                                            <Tab eventKey="semiSkilled" title="Semi-skilled" className={tabStyle.tabCmnCol}>
                                                                                <Form.Group className="floatFormGroup tooltipDiv mb-4">
                                                                                    <FloatingLabel controlId="semiSkilledNumberWorkers" label="Number of workers">
                                                                                        <Form.Control
                                                                                            className={`${form.formInput}`}
                                                                                            type="text"
                                                                                            placeholder="Enter number of workers"
                                                                                            required
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
                                                                                    <FloatingLabel controlId="semiSkilledMonthlySalary" label="Monthly salary per worker">
                                                                                        <Form.Control
                                                                                            className={`${form.formInput}`}
                                                                                            type="text"
                                                                                            placeholder="Enter monthly salary per worker"
                                                                                            required
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
                                                                            <Tab eventKey="unskilled" title="Unskilled" className={tabStyle.tabCmnCol}>
                                                                                <Form.Group className="floatFormGroup tooltipDiv mb-4">
                                                                                    <FloatingLabel controlId="unskilledNumberWorkers" label="Number of workers">
                                                                                        <Form.Control
                                                                                            className={`${form.formInput}`}
                                                                                            type="text"
                                                                                            placeholder="Enter number of workers"
                                                                                            required
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
                                                                                    <FloatingLabel controlId="unskilledMonthlySalary" label="Monthly salary per worker">
                                                                                        <Form.Control
                                                                                            className={`${form.formInput}`}
                                                                                            type="text"
                                                                                            placeholder="Enter monthly salary per worker"
                                                                                            required
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
                                                                </>
                                                            ):(
                                                                null
                                                            )}
                                                            <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={handleEnterDetailsFirstToggle}>
                                                                    <span className='me-2'>Continue</span>
                                                                    <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                </Button>
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
                                                                <Form.Group className={`selectDropDiv mb-4 ${!periodInsuranceValue == '' ? 'selectedDropDiv' : null}`}>
                                                                    <SelectSearch
                                                                        options={periodInsuranceOptions}
                                                                        name="periodInsurance"
                                                                        placeholder="&nbsp;"
                                                                        onChange={setPeriodInsuranceValue}
                                                                        value={periodInsuranceValue}
                                                                        required
                                                                    />
                                                                    <label>Period of Insurance</label>
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
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )}
                                        <div className={`${form.frmftr}`}>
                                            <p>By clicking on "View Quotes", you agree to our <Link href='/privacy-policy' target="_blank">Privacy Policy</Link> and <Link href='/terms-and-conditions' target="_blank">Terms of Use</Link> , and also provide us a formal mandate to represent you to the insurer and communicate to you the grant of a cover</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={`d-md-none mt-4`}>
                                {/*<TalkExpert
                                    customClass={`${talkExpert.tlkExprtMobile}`}
                                />
                                <div className={`d-flex justify-content-center mt-4 mt-md-0`}>
                                    <Link href="/" className="btnCommon btnBorder border-primary">
                                        <WhatsApp iconColor="primary" width="18" height="18" />
                                        <span className='ms-2'>Talk to an expert</span>
                                    </Link>
                                </div>*/}
                                <RatingCard
                                    customClass="justify-content-center"
                                />
                                <TalkExpert
                                    background={`${talkExpert.yellow}`}
                                    size={`${talkExpert.small}`}
                                    customClass={`mt-4 ${talkExpert.tlkExprtMobile}`}
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
    )
}
