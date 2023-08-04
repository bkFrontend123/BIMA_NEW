import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {Container, Row, Col, Form, FloatingLabel, Button, ProgressBar, OverlayTrigger, Tooltip} from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import ProductFormContent from '../component/ProductForm/ProductFormContent'
import TalkExpert from '../component/TalkExpert'
import RatingCard from '../component/RatingCard'

import SubsidiaryCard from '../component/FormElements/SubItemCard'
import SubsidiaryItem from '../component/FormElements/SubItem'
import SubsidiaryQnty from '../component/FormElements/SubItemQnty'

import form from '@/assets/css/form.module.css'
import subitem from '@/assets/css/subitem-select.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'
import progress from '@/assets/css/progress.module.css'

import productIcon from '../public/productIcons/liability/productLiability_icon.svg'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import arrowBack from '../public/icons/arrowBack.svg'
import tooltipIcon from '../public/icons/tooltipIcon.svg'

import expertImg from '../public/himaniImg.png'

export default function ProductLiability_Flow() {
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

    const [isEnterDetailsSecondActive, setEnterDetailsSecondActive] = useState(true);
    const handleEnterDetailsSecondToggle = () => {
        setEnterDetailsSecondActive(!isEnterDetailsSecondActive);
    };

    const [isEnterDetailsThirdActive, setEnterDetailsThirdActive] = useState(true);
    const handleEnterDetailsThirdToggle = () => {
        setEnterDetailsThirdActive(!isEnterDetailsThirdActive);
    };

    const router = useRouter();
    const goToBackPage = () => {
        router.push('/product-liability-insurance');
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
    
    const [limitLiabilityValue, setLimitLiabilityValue] = useState();
    const limitLiabilityOptions = [
        {name: 'INR 50 Lacs', value: '1'},
        {name: 'INR 1 Crores', value: '2'},
        {name: 'INR 3 Crores', value: '3'},
        {name: 'INR 5 Crores', value: '4'},
        {name: 'INR 7.5 Crores', value: '5'},
        {name: 'INR 8 Crores', value: '6'},
        {name: 'INR 10 Crores', value: '7'},
        {name: 'INR 12 Crores', value: '8'},
        {name: 'INR 15 Crores', value: '9'},
        {name: 'INR 16 Crores', value: '10'},
        {name: '16 Crores and Above', value: '11'},
    ];

    const [annualTurnoverValue, setAnnualTurnoverValue] = useState();
    const annualTurnoverOptions = [
        {name: 'Upto 100 Cr', value: '1'},
        {name: '101 to 200 Cr', value: '2'},
        {name: '201 to 250 Cr', value: '3'},
        {name: '251 to 300 Cr', value: '4'},
        {name: '301 to 500 Cr', value: '5'},
        {name: '501 to 700 Cr', value: '6'},
        {name: '701 to 1000 Cr', value: '7'},
        {name: '1001 to 2500 cr', value: '8'},
        {name: 'More than 2500 Cr', value: '9'},
    ];

    const [locationsValue, setLocationsValue] = useState();
    const [locationsBlocksData, setLocationsBlocksData] = useState([
        { id: "1", label: "India", remark: "Maximum amount the insurance company will pay you in case of loss due to defined liability", checked: false, count: 0 },
        { id: "2", label: "USA & Canada", remark: "Current market value of your office at which the property can be sold.", checked: false, count: 0 },
        { id: "3", label: [<>ROW <small>(excluding USA & Canada)</small></>], remark: "Current market value of your office at which the property can be sold.", checked: false, count: 0 }
    ]);
    const handleChangeLocations = (index) => {
        const updatedBlocks = [...locationsBlocksData];
        updatedBlocks[index].checked = !updatedBlocks[index].checked;
        // Toggle the count value between 1 and 0
        updatedBlocks[index].count = updatedBlocks[index].checked ? 1 : 0;
        setLocationsBlocksData(updatedBlocks);
    };
    const decrementLocationsCount = (index) => {
        const updatedBlocks = [...locationsBlocksData];
        if (updatedBlocks[index].checked && updatedBlocks[index].count > 0) {
          updatedBlocks[index].count--;
          setLocationsBlocksData(updatedBlocks);
        }
    };
    const incrementLocationsCount = (index) => {
        const updatedBlocks = [...locationsBlocksData];
        if (updatedBlocks[index].checked && updatedBlocks[index].count < 10) {
          updatedBlocks[index].count++;
          setLocationsBlocksData(updatedBlocks);
        }
    };
    
    const [subsidiaryValue, setSubsidiaryValue] = useState();
    const [subsidiaryBlocksData, setSubsidiaryBlocksData] = useState([
        { id: "1", label: "India", remark: "Maximum amount the insurance company will pay you in case of loss due to defined liability", checked: false, count: 0 },
        { id: "2", label: "USA & Canada", remark: "Current market value of your office at which the property can be sold.", checked: false, count: 0 },
        { id: "3", label: [<>ROW <small>(excluding USA & Canada)</small></>], remark: "Current market value of your office at which the property can be sold.", checked: false, count: 0 }
    ]);
    const handleChangeSubsidiary = (index) => {
        const updatedBlocks = [...subsidiaryBlocksData];
        updatedBlocks[index].checked = !updatedBlocks[index].checked;
        // Toggle the count value between 1 and 0
        updatedBlocks[index].count = updatedBlocks[index].checked ? 1 : 0;
        setSubsidiaryBlocksData(updatedBlocks);
    };
    const decrementSubsidiaryCount = (index) => {
        const updatedBlocks = [...subsidiaryBlocksData];
        if (updatedBlocks[index].checked && updatedBlocks[index].count > 0) {
          updatedBlocks[index].count--;
          setSubsidiaryBlocksData(updatedBlocks);
        }
    };
    const incrementSubsidiaryCount = (index) => {
        const updatedBlocks = [...subsidiaryBlocksData];
        if (updatedBlocks[index].checked && updatedBlocks[index].count < 10) {
          updatedBlocks[index].count++;
          setSubsidiaryBlocksData(updatedBlocks);
        }
    };

    const [hazardousSubstancesValue, setHazardousSubstancesValue] = useState();
    const handleChangeHazardousSubstances = event => {
        setHazardousSubstancesValue(event.target.value);
    };

    const [leakageChemicalValue, setLeakageChemicalValue] = useState();
    const handleChangeLeakageChemical = event => {
        setLeakageChemicalValue(event.target.value);
    };

    const [existingPolicyValue, setExistingPolicyValue] = useState();
    const handleChangeExistingPolicy = event => {
        setExistingPolicyValue(event.target.value);
    };

    const [existingInsurerValue, setExistingInsurerValue] = useState();
    const existingInsurerOptions = [
        {name: 'Banking Finance and Insurance', value: '1'},
        {name: 'Computers, IT Services, Technology and Telecommunication', value: '2'},
        {name: 'Construction and Real Estate', value: '3'},
        {name: 'Manufacturing', value: '4'},
        {name: 'Medical & Pharmaceuticals', value: '5'},
        {name: 'Construction and Real Estate', value: '6'},
    ];

    const [circumstanceValue, setCircumstanceValue] = useState();
    const handleChangeCircumstance = event => {
        setCircumstanceValue(event.target.value);
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
                                            title="Product Liability"
                                            description="Get ₹50 Lakhs Coverage at ₹7,500* per year!"
                                            listText1="Answer a few simple questions"
                                            listText2="Get curated quotes in minutes"
                                            listText3="Secure your business comprehensively"
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
                                                            <Form.Group className={`selectDropDiv tooltipDiv mb-4 ${!limitLiabilityValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={limitLiabilityOptions}
                                                                    name="limitLiability"
                                                                    placeholder="&nbsp;"
                                                                    onChange={setLimitLiabilityValue}
                                                                    value={limitLiabilityValue}
                                                                    required
                                                                />
                                                                <label>Limit of liability required</label>
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
                                                            <Form.Group className={`selectDropDiv mb-4 ${!annualTurnoverValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={annualTurnoverOptions}
                                                                    name="annualTurnover"
                                                                    placeholder="&nbsp;"
                                                                    onChange={setAnnualTurnoverValue}
                                                                    value={annualTurnoverValue}
                                                                    required
                                                                />
                                                                <label>Annual Turnover of your company?</label>
                                                            </Form.Group>
                                                            <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={handleEnterDetailsFirstToggle}>
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
                                                ): (
                                                    <>
                                                        {isEnterDetailsSecondActive ? (
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
                                                                                <ProgressBar now={60} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <Form>
                                                                    <div className='mb-4'>
                                                                        <div className={`${form.formCheckLabel}`}>Select the countries you have business locations in and the number of business locations each country have.</div>
                                                                        {locationsBlocksData.map((block, index) => (
                                                                        <SubsidiaryCard key={index}>
                                                                            <SubsidiaryItem
                                                                                label={block.label}
                                                                                customClass={`${subitem.tooltipDiv} ${block.checked ? subitem.active : ""}`}
                                                                            >
                                                                                <Form.Check
                                                                                    inline
                                                                                    type="checkbox"
                                                                                    id={`location-${block.id}`}
                                                                                    name={block.label}
                                                                                    label={block.label}
                                                                                    onChange={() => handleChangeLocations(index)}
                                                                                    className={`${subitem.formSubCheck}`}
                                                                                    required
                                                                                />
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip>{block.remark}</Tooltip>}
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
                                                                            </SubsidiaryItem>
                                                                            <SubsidiaryQnty
                                                                                customClass={`${block.checked ? subitem.active : ""}`}
                                                                            >
                                                                                <Button className={subitem.qtyDcrsBtn} type="button" onClick={() => decrementLocationsCount(index)}>-</Button>
                                                                                <Form.Control className={`${subitem.qtyInput}`} type="number" min={0} max={10} value={block.checked ? block.count : block.count} readOnly required />
                                                                                <Button className={subitem.qtyIncrsBtn} type="button" onClick={() => incrementLocationsCount(index)}>+</Button>
                                                                            </SubsidiaryQnty>
                                                                        </SubsidiaryCard>
                                                                        ))}
                                                                    </div>
                                                                    <Form.Group className={`selectDropDiv mb-4 ${!subsidiaryValue == '' ? 'selectedDropDiv' : null}`}>
                                                                        <SelectSearch
                                                                            options={[
                                                                                {name: 'Yes', value: 'Yes'},
                                                                                {name: 'No', value: 'No'},
                                                                            ]}
                                                                            name="subsidiary"
                                                                            placeholder="&nbsp;"
                                                                            onChange={setSubsidiaryValue}
                                                                            value={subsidiaryValue}
                                                                            required
                                                                        />
                                                                        <label>Do you have a subsidiary?</label>
                                                                    </Form.Group>
                                                                    {subsidiaryValue == 'Yes' ? (
                                                                        <div className='mb-4'>
                                                                            <div className={`${form.formCheckLabel}`}>Select the countries you have subsidiaries in and the number of subsidiaries each country have.</div>
                                                                            {subsidiaryBlocksData.map((block, index) => (
                                                                            <SubsidiaryCard key={index}>
                                                                                <SubsidiaryItem
                                                                                    label={block.label}
                                                                                    customClass={`${subitem.tooltipDiv} ${block.checked ? subitem.active : ""}`}
                                                                                >
                                                                                    <Form.Check
                                                                                        inline
                                                                                        type="checkbox"
                                                                                        id={`subsidiary-${block.id}`}
                                                                                        name={block.label}
                                                                                        label={block.label}
                                                                                        onChange={() => handleChangeSubsidiary(index)}
                                                                                        className={`${subitem.formSubCheck}`}
                                                                                        required
                                                                                    />
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={<Tooltip>{block.remark}</Tooltip>}
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
                                                                                </SubsidiaryItem>
                                                                                <SubsidiaryQnty
                                                                                    customClass={`${block.checked ? subitem.active : ""}`}
                                                                                >
                                                                                    <Button className={subitem.qtyDcrsBtn} type="button" onClick={() => decrementSubsidiaryCount(index)}>-</Button>
                                                                                    <Form.Control className={`${subitem.qtyInput}`} type="number" min={0} max={10} value={block.checked ? block.count : block.count} readOnly required />
                                                                                    <Button className={subitem.qtyIncrsBtn} type="button" onClick={() => incrementSubsidiaryCount(index)}>+</Button>
                                                                                </SubsidiaryQnty>
                                                                            </SubsidiaryCard>
                                                                            ))}
                                                                        </div>
                                                                    ):(
                                                                        null
                                                                    )}
                                                                    <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                        <Button onClick={handleEnterDetailsSecondToggle} variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button">
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
                                                        ):(
                                                            <>
                                                                {isEnterDetailsThirdActive ? (
                                                                    <div className={`${form.entrDtlsFormThird}`}>
                                                                        <div className={`${form.frmBack}`}>
                                                                            <Row className='align-items-center gap-4 gap-lg-2'>
                                                                                <Col>
                                                                                    <span className={`${form.frmBackLink}`} onClick={handleEnterDetailsSecondToggle}>
                                                                                        <Image src={arrowBack} alt="Back Arrow" /> Enter your details
                                                                                    </span>
                                                                                </Col>
                                                                                <Col md="auto">
                                                                                    <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noRadiusProgress} ${progress.noLabel} ${progress.warning}`}>
                                                                                        <ProgressBar now={80} />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <Form>
                                                                            <Form.Group className="mb-4">
                                                                                <Form.Label htmlFor="hazardousSubstances" className={`${form.formLabel}`}>Do you handle or use Any Hazardous substances?</Form.Label>
                                                                                <Form.Check
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="hazardousSubstances-1"
                                                                                    name="hazardousSubstances"
                                                                                    label="Yes"
                                                                                    value="Yes"
                                                                                    checked={hazardousSubstancesValue === 'Yes'}
                                                                                    onChange={handleChangeHazardousSubstances}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                    required
                                                                                />
                                                                                <Form.Check 
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="hazardousSubstances-2"
                                                                                    name="hazardousSubstances"
                                                                                    label="No"
                                                                                    value="No"
                                                                                    checked={hazardousSubstancesValue === 'No'}
                                                                                    onChange={handleChangeHazardousSubstances}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                    required
                                                                                />
                                                                            </Form.Group>
                                                                            {hazardousSubstancesValue === 'Yes' ? (
                                                                                <Form.Group className="mb-4">
                                                                                    <Form.Label htmlFor="leakageChemical" className={`${form.formLabel}`}>Is there any possibility of leakage of Chemical or Gas?</Form.Label>
                                                                                    <Form.Check
                                                                                        inline
                                                                                        type="radio"
                                                                                        id="leakageChemical-1"
                                                                                        name="leakageChemical"
                                                                                        label="Yes"
                                                                                        value="Yes"
                                                                                        checked={leakageChemicalValue === 'Yes'}
                                                                                        onChange={handleChangeLeakageChemical}
                                                                                        className={`${form.formCheckRadio}`}
                                                                                        required
                                                                                    />
                                                                                    <Form.Check 
                                                                                        inline
                                                                                        type="radio"
                                                                                        id="leakageChemical-2"
                                                                                        name="leakageChemical"
                                                                                        label="No"
                                                                                        value="No"
                                                                                        checked={leakageChemicalValue === 'No'}
                                                                                        onChange={handleChangeLeakageChemical}
                                                                                        className={`${form.formCheckRadio}`}
                                                                                        required
                                                                                    />
                                                                                </Form.Group>
                                                                            ):(
                                                                                null
                                                                            )}
                                                                            <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                                <Button onClick={handleEnterDetailsThirdToggle} variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button">
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
                                                                ):(
                                                                    <div className={`${form.entrDtlsFormFourth}`}>
                                                                        <div className={`${form.frmBack}`}>
                                                                            <Row className='align-items-center gap-4 gap-lg-2'>
                                                                                <Col>
                                                                                    <span className={`${form.frmBackLink}`} onClick={handleEnterDetailsThirdToggle}>
                                                                                        <Image src={arrowBack} alt="Back Arrow" /> Enter your details
                                                                                    </span>
                                                                                </Col>
                                                                                <Col md="auto">
                                                                                    <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noRadiusProgress} ${progress.noLabel} ${progress.warning}`}>
                                                                                        <ProgressBar now={100} />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <Form>
                                                                            <Form.Group className="mb-4">
                                                                                <Form.Label htmlFor="existingPolicy" className={`${form.formLabel}`}>Do you have any existing Product Liability Policy?</Form.Label>
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
                                                                                <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!existingInsurerValue == '' ? 'selectedDropDiv' : null}`}>
                                                                                    <SelectSearch
                                                                                        options={existingInsurerOptions}
                                                                                        name="existingInsurer"
                                                                                        placeholder="Search by keyword"
                                                                                        onChange={setExistingInsurerValue}
                                                                                        search
                                                                                        value={existingInsurerValue}
                                                                                        required
                                                                                    />
                                                                                    <label>Existing Insurer's Name?</label>
                                                                                </Form.Group>
                                                                            ):(
                                                                                null
                                                                            )}
                                                                            <Form.Group className="mb-4">
                                                                                <Form.Label htmlFor="circumstance" className={`${form.formLabel}`}>Is there any claims in last 5 Years/ any circumstance which may lead to a claims?</Form.Label>
                                                                                <Form.Check
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="circumstance-1"
                                                                                    name="circumstance"
                                                                                    label="Yes"
                                                                                    value="Yes"
                                                                                    checked={circumstanceValue === 'Yes'}
                                                                                    onChange={handleChangeCircumstance}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                    required
                                                                                />
                                                                                <Form.Check 
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="circumstance-2"
                                                                                    name="circumstance"
                                                                                    label="No"
                                                                                    value="No"
                                                                                    checked={circumstanceValue === 'No'}
                                                                                    onChange={handleChangeCircumstance}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                    required
                                                                                />
                                                                            </Form.Group>
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
                                                                )}
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                        <div className={`${form.frmftr}`}>
                                            <p>By continuing to the next step, you agree to our <Link href='/privacy-policy'>Privacy Policy</Link> and <Link href='/terms-and-conditions'>Terms of Use</Link> , and also provide us a formal mandate to represent you to the insurer and communicate to you the grant of a cover</p>
                                        </div>
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
    )
}
