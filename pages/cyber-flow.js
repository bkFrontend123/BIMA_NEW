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

import productIcon from '../public/startup3.svg'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import arrowBack from '../public/icons/arrowBack.svg'
import WhatsApp from '../component/Icons/WhatsApp'
import tooltipIcon from '../public/icons/tooltipIcon.svg'

export default function directors_and_officers_flow() {
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

    const router = useRouter();
    const goToBackPage = () => {
        router.push('/cyber-insurance');
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
        {name: '0-200 Cr', value: '1'},
        {name: '200 - 250 Cr', value: '2'},
        {name: '250 -700 Cr', value: '3'},
        {name: '700 Cr and above', value: '4'},
    ];

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

    const [identifiableValue, setIdentifiableValue] = useState();
    const handleChangeIdentifiable = event => {
        setIdentifiableValue(event.target.value);
    };

    const [identifiableCountValue, setIdentifiableCount] = useState();
    const handleChangeIdentifiableCount = event => {
        setIdentifiableCount(event.target.value);
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
                <title>Cyber Insurance | BimaKavach Insurance for Cyber</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                scheduleCall="true"
            />
            <section className='productFormBlock sectionPadding'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11}>
                            <Row className='g-4'>
                                <Col xl={6} xxl={7}>
                                    <div className='pe-lg-2 pe-xxl-5'>
                                        <ProductFormContent
                                            icon={productIcon}
                                            title="Cyber Insurance"
                                            description="Get ₹50 Lakhs Coverage at ₹38,000 per year!"
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
                                            <RatingCard
                                                reviews="450"
                                                stars="4.5"
                                            />
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
                                                            <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" />
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
                                                                />
                                                                <label>Annual Turnover of your company?</label>
                                                            </Form.Group>
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
                                                                                <ProgressBar now={70} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <Form>
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
                                                                                        id={block.id}
                                                                                        name={block.label}
                                                                                        label={block.label}
                                                                                        onChange={() => handleChangeSubsidiary(index)}
                                                                                        className={`${subitem.formSubCheck}`}
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
                                                                                    <Form.Control className={`${subitem.qtyInput}`} type="number" min={0} max={10} value={block.checked ? block.count : block.count} readOnly />
                                                                                    <Button className={subitem.qtyIncrsBtn} type="button" onClick={() => incrementSubsidiaryCount(index)}>+</Button>
                                                                                </SubsidiaryQnty>
                                                                            </SubsidiaryCard>
                                                                            ))}
                                                                        </div>
                                                                    ):(
                                                                        null
                                                                    )}
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="identifiable" className={`${form.formLabel}`}>Do you store Personally Identifiable Information?
                                                                        <OverlayTrigger
                                                                            placement="top"
                                                                            overlay={<Tooltip>Personally Identifiable Information (PII) encompasses various types of sensitive data, including Social Security Numbers, Credit Card Information, Personal Health Data, Employee Information, and Bank Account Information.</Tooltip>}
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
                                                                        </Form.Label>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="identifiable-1"
                                                                            name="identifiable"
                                                                            label="Yes"
                                                                            value="Yes"
                                                                            checked={identifiableValue === 'Yes'}
                                                                            onChange={handleChangeIdentifiable}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="identifiable-2"
                                                                            name="identifiable"
                                                                            label="No"
                                                                            value="No"
                                                                            checked={identifiableValue === 'No'}
                                                                            onChange={handleChangeIdentifiable}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="identifiableCount" className={`${form.formLabel}`}>How Many Personally Indentifiable information do you store?</Form.Label>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="identifiableCount-1"
                                                                            name="identifiableCount"
                                                                            label="Yes"
                                                                            value="Yes"
                                                                            checked={identifiableCountValue === 'Yes'}
                                                                            onChange={handleChangeIdentifiableCount}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="identifiableCount-2"
                                                                            name="identifiableCount"
                                                                            label="No"
                                                                            value="No"
                                                                            checked={identifiableCountValue === 'No'}
                                                                            onChange={handleChangeIdentifiableCount}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                    </Form.Group>
                                                                    <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                        <Button onClick={handleEnterDetailsSecondToggle} variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button">
                                                                            <span className='me-2'>Continue</span>
                                                                            <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                        </Button>
                                                                    </div>
                                                                </Form>
                                                            </div>
                                                        ):(
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
                                                                                <ProgressBar now={100} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <Form>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="existingPolicy" className={`${form.formLabel}`}>Do you have any existing Cyber Policy?</Form.Label>
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
                                                                            />
                                                                            <label>Existing Insurer's Name?</label>
                                                                        </Form.Group>
                                                                    ):(
                                                                        null
                                                                    )}
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="circumstance" className={`${form.formLabel}`}>In there any claims in last 5 Years/ any circumstance which may lead to a claims?</Form.Label>
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
                                                                        />
                                                                    </Form.Group>
                                                                    <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                        <Button onClick={goToNextPage} variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button">
                                                                            <span className='me-2'>Continue</span>
                                                                            <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                        </Button>
                                                                    </div>
                                                                </Form>
                                                            </div>
                                                        )}
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
                                    reviews="400"
                                    stars="4.5"
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
            <FooterPlain />
        </>
    )
}