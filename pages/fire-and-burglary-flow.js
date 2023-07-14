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
import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'
import progress from '@/assets/css/progress.module.css'

import productIcon from '../public/productIcons/liability/workman_icon.svg'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import arrowBack from '../public/icons/arrowBack.svg'
import WhatsApp from '../component/Icons/WhatsApp'
import tooltipIcon from '../public/icons/tooltipIcon.svg'
import CheckYellowIcon from '../component/Icons/CheckYellow'

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
        router.push('/directors-and-officers-insurance');
    };
    const goToNextPage = () => {
        router.push('/all_policies');
    };

    const [buyingPolicyValue, setBuyingPolicyValue] = useState();
    const [claimValue, setClaimValue] = useState();

    const [totalSumInsuredValue, setTotalSumInsuredValue] = useState();
    const handleChangeTotalSumInsured = event => {
        setTotalSumInsuredValue(event.target.value);
    };

    const [popularBusinessValue, setPopularBusinessValue] = useState();
    const handleChangePopularBusiness = event => {
        setPopularBusinessValue(event.target.value);
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

    const [occupancyValue, setOccupancyValue] = useState();
    const occupancyOptions = [
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

    const [premisesTypeValue, setPremisesTypeValue] = useState();
    const handleChangePremisesType = event => {
        setPremisesTypeValue(event.target.value);
    };

    const [plantMachineryValue, setPlantMachineryValue] = useState();
    const handleChangePlantMachinery = event => {
        setPlantMachineryValue(event.target.checked);
    };

    const [electronicEquipmentValue, setElectronicEquipmentValue] = useState();
    const handleChangeElectronicEquipment = event => {
        setElectronicEquipmentValue(event.target.checked);
    };

    const [pElectronicEquipmentValue, setPElectronicEquipmentValue] = useState();
    const handleChangePElectronicEquipment = event => {
        setPElectronicEquipmentValue(event.target.checked);
    };

    const [furnitureFittingsValue, setFurnitureFittingsValue] = useState();
    const handleChangeFurnitureFittings = event => {
        setFurnitureFittingsValue(event.target.checked);
    };

    const [rawMaterialValue, setRawMaterialValue] = useState();
    const handleChangeRawMaterial = event => {
        setRawMaterialValue(event.target.checked);
    };

    const [stockProcessValue, setStockProcessValue] = useState();
    const handleChangeStockProcess = event => {
        setStockProcessValue(event.target.checked);
    };

    const [finishedGoodsValue, setFinishedGoodsValue] = useState();
    const handleChangeFinishedGoods = event => {
        setFinishedGoodsValue(event.target.checked);
    };

    const [otherStocksValue, setOtherStocksValue] = useState();
    const handleChangeOtherStocks = event => {
        setOtherStocksValue(event.target.checked);
    };

    const [burglaryValue, setBurglaryValue] = useState();
    const handleChangeBurglary = event => {
        setBurglaryValue(event.target.checked);
    };

    const [plateGlassValue, setPlateGlassValue] = useState();
    const handleChangePlateGlass = event => {
        setPlateGlassValue(event.target.checked);
    };

    const [neonSignBoardValue, setNeonSignBoardValue] = useState();
    const handleChangeNeonSignBoard= event => {
        setNeonSignBoardValue(event.target.checked);
    };

    const [equipmentInsuranceValue, setEquipmentInsuranceValue] = useState();
    const handleChangeEquipmentInsurance= event => {
        setEquipmentInsuranceValue(event.target.checked);
    };

    const [moneyInsuranceValue, setMoneyInsuranceValue] = useState();
    const handleChangeMoneyInsurance= event => {
        setMoneyInsuranceValue(event.target.checked);
    };

    const [publicLiabilityValue, setPublicLiabilityValue] = useState();
    const handleChangePublicLiability= event => {
        setPublicLiabilityValue(event.target.checked);
    };

    const [productLimitLiabilityValue, setProductLimitLiabilityValue] = useState();
    const productLimitLiabilityOptions = [
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

    const [fidelityGuaranteeValue, setFidelityGuaranteeValue] = useState();
    const handleChangeFidelityGuarantee= event => {
        setFidelityGuaranteeValue(event.target.checked);
    };

    const [fidelitylimitLiabilityValue, setFidelityLimitLiabilityValue] = useState();
    const fidelitylimitLiabilityOptions = [
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

    const [limitEmployeeValue, setLimitEmployeeValue] = useState();
    const limitEmployeeOptions = [
        {name: 'Upto 500', value: '1'},
        {name: 'Upto 1000', value: '2'},
        {name: 'Upto 1500', value: '3'},
        {name: 'Above 2000', value: '4'},
    ];

    const [terrorismValue, setTerrorismValue] = useState();
    const handleChangeTerrorism= event => {
        setTerrorismValue(event.target.checked);
    };
    
    
    
    return (
        <>
            <Head>
                <title>Fire Insurance | BimaKavach Insurance for Fire</title>
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
                                            title="Fire Insurance"
                                            description="Get ₹50 Lakhs Coverage at ₹1,453* per year"
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
                                                                        <ProgressBar now={20} />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <Form>
                                                            <Form.Group className="floatFormGroup mb-4">
                                                                <FloatingLabel controlId="pinCode" label="PIN Code" >
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" />
                                                                </FloatingLabel>
                                                            </Form.Group>
                                                            <Form.Group className={`selectDropDiv mb-4 ${!buyingPolicyValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={[
                                                                        {name: 'Yes', value: 'Yes'},
                                                                        {name: 'No', value: 'No'},
                                                                    ]}
                                                                    name="buyingPolicy"
                                                                    placeholder="&nbsp;"
                                                                    onChange={setBuyingPolicyValue}
                                                                    value={buyingPolicyValue}
                                                                />
                                                                <label>Buying the policy for the first time?</label>
                                                            </Form.Group>
                                                            <Form.Group className={`selectDropDiv mb-4 ${!claimValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={[
                                                                        {name: 'Yes', value: 'Yes'},
                                                                        {name: 'No', value: 'No'},
                                                                    ]}
                                                                    name="claim"
                                                                    placeholder="&nbsp;"
                                                                    onChange={setClaimValue}
                                                                    value={claimValue}
                                                                />
                                                                <label>Any Claims in Last 3 Years?</label>
                                                            </Form.Group>
                                                            <Form.Group className="mb-4">
                                                                <Form.Label htmlFor="totalSumInsured" className={`${form.formLabel}`}>Total Sum insured</Form.Label>
                                                                <Form.Check
                                                                    inline
                                                                    type="radio"
                                                                    id="totalSumInsured-1"
                                                                    name="totalSumInsured"
                                                                    label="Less than 50cr"
                                                                    value="Less50cr"
                                                                    checked={totalSumInsuredValue === 'Less50cr'}
                                                                    onChange={handleChangeTotalSumInsured}
                                                                    className={`${form.formCheckRadio}`}
                                                                />
                                                                <Form.Check 
                                                                    inline
                                                                    type="radio"
                                                                    id="totalSumInsured-2"
                                                                    name="totalSumInsured"
                                                                    label="More than 50cr"
                                                                    value="More50cr"
                                                                    checked={totalSumInsuredValue === 'More50cr'}
                                                                    onChange={handleChangeTotalSumInsured}
                                                                    className={`${form.formCheckRadio}`}
                                                                />
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
                                                                                <ProgressBar now={40} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <Form>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="popularBusiness" className={`${form.formLabel}`}>Popular businesses</Form.Label>
                                                                        <div className={`${form.formCheckFillOuter}`}>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="popularBusiness-1"
                                                                                name="popularBusiness"
                                                                                label="Shop"
                                                                                value="Shop"
                                                                                checked={popularBusinessValue === 'Shop'}
                                                                                onChange={handleChangePopularBusiness}
                                                                                className={`${form.formCheckFillRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="popularBusiness-2"
                                                                                name="popularBusiness"
                                                                                label="Office"
                                                                                value="Office"
                                                                                checked={popularBusinessValue === 'Office'}
                                                                                onChange={handleChangePopularBusiness}
                                                                                className={`${form.formCheckFillRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="popularBusiness-3"
                                                                                name="popularBusiness"
                                                                                label="Hotel/Restaurant"
                                                                                value="Hotel/Restaurant"
                                                                                checked={popularBusinessValue === 'Hotel/Restaurant'}
                                                                                onChange={handleChangePopularBusiness}
                                                                                className={`${form.formCheckFillRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="popularBusiness-4"
                                                                                name="popularBusiness"
                                                                                label="Hospital/Clinic/Diagnostic Centre"
                                                                                value="Hospital/Clinic/Diagnostic Centre"
                                                                                checked={popularBusinessValue === 'Hospital/Clinic/Diagnostic Centre'}
                                                                                onChange={handleChangePopularBusiness}
                                                                                className={`${form.formCheckFillRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="popularBusiness-5"
                                                                                name="popularBusiness"
                                                                                label="Educational Institute"
                                                                                value="Educational Institute"
                                                                                checked={popularBusinessValue === 'Educational Institute'}
                                                                                onChange={handleChangePopularBusiness}
                                                                                className={`${form.formCheckFillRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="popularBusiness-6"
                                                                                name="popularBusiness"
                                                                                label="Manufacturing"
                                                                                value="Manufacturing"
                                                                                checked={popularBusinessValue === 'Manufacturing'}
                                                                                onChange={handleChangePopularBusiness}
                                                                                className={`${form.formCheckFillRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="popularBusiness-7"
                                                                                name="popularBusiness"
                                                                                label="Others"
                                                                                value="Others"
                                                                                checked={popularBusinessValue === 'Others'}
                                                                                onChange={handleChangePopularBusiness}
                                                                                className={`${form.formCheckFillRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Form.Group>
                                                                    {popularBusinessValue === 'Manufacturing' || popularBusinessValue === 'Others' ? (
                                                                        <>
                                                                            <Form.Group className={`selectDropDiv searchDropDiv tooltipDiv mb-4 ${!indValue == '' ? 'selectedDropDiv' : null}`}>
                                                                                <SelectSearch
                                                                                    options={indTypeOptions}
                                                                                    name="industry"
                                                                                    placeholder="Search by keyword"
                                                                                    onChange={setIndValue}
                                                                                    search
                                                                                    value={indValue}
                                                                                />
                                                                                <label>Industry type</label>
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
                                                                            <Form.Group className={`selectDropDiv searchDropDiv tooltipDiv mb-4 ${!occupancyValue == '' ? 'selectedDropDiv' : null}`}>
                                                                                <SelectSearch
                                                                                    options={occupancyOptions}
                                                                                    name="occupancy"
                                                                                    placeholder="&nbsp;"
                                                                                    onChange={setOccupancyValue}
                                                                                    search
                                                                                    value={occupancyValue}
                                                                                />
                                                                                <label>Occupancy</label>
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
                                                                        </>
                                                                    ):(
                                                                        null
                                                                    )}
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="premisesType" className={`${form.formLabel}`}>Premises type</Form.Label>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="premisesType-1"
                                                                            name="premisesType"
                                                                            label="Owned"
                                                                            value="Owned"
                                                                            checked={premisesTypeValue === 'Owned'}
                                                                            onChange={handleChangePremisesType}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="premisesType-2"
                                                                            name="premisesType"
                                                                            label="Rented"
                                                                            value="Rented"
                                                                            checked={premisesTypeValue === 'Rented'}
                                                                            onChange={handleChangePremisesType}
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
                                                                                        <ProgressBar now={60} />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <Form>
                                                                            <div className={`${desCheckStyle.desCheckRow}`}>
                                                                                <div className={desCheckStyle.desCheckCol}>
                                                                                    <div className={desCheckStyle.desCheckIcon}>
                                                                                        <Image src="/icons/buildingIcon.svg" width="42" height="44" alt="Building" />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckData}>
                                                                                        <div className={desCheckStyle.desCheckInfo}>
                                                                                            <h4>Building</h4>
                                                                                            <p>Building includes the structure of your establishment with plinth, foundation and Compund Wall</p>
                                                                                        </div>
                                                                                        <div className={desCheckStyle.desCheckBottom}>
                                                                                            <Form.Group className="floatFormGroup mb-4">
                                                                                                <FloatingLabel controlId="buildingValue" label="Building value" >
                                                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" disabled={premisesTypeValue === 'Rented' ? 'disabled' : null} />
                                                                                                </FloatingLabel>
                                                                                            </Form.Group>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={desCheckStyle.desCheckCol}>
                                                                                    <div className={desCheckStyle.desCheckIcon}>
                                                                                        <Image src="/icons/contentIcon.svg" width="42" height="44" alt="Building" />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckData}>
                                                                                        <div className={desCheckStyle.desCheckInfo}>
                                                                                            <h4>Content</h4>
                                                                                            <p>Content includes Plant and Machinery, Furniture & Fixtures and any other content within the premises</p>
                                                                                        </div>
                                                                                        <div className={desCheckStyle.desCheckBottom}>
                                                                                            <div className={desCheckStyle.desCheckList}>
                                                                                                <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${plantMachineryValue ? desCheckStyle.active : null}`}>
                                                                                                    <div className={desCheckStyle.desCheckBox}>
                                                                                                        <span>
                                                                                                            <CheckYellowIcon />
                                                                                                        </span>
                                                                                                        <Form.Check
                                                                                                            inline
                                                                                                            type="checkbox"
                                                                                                            id="plantMachinery"
                                                                                                            name="plantMachinery"
                                                                                                            onChange={handleChangePlantMachinery}
                                                                                                            className={`${desCheckStyle.desCheckBtn}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckInput}>
                                                                                                        <Form.Group className={`floatFormGroup tooltipDiv ${plantMachineryValue ? desCheckStyle.active : null}`}>
                                                                                                            <FloatingLabel controlId="plantMachinery" label="Plant and machinery value" >
                                                                                                                <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={plantMachineryValue ? null : 'disabled'} />
                                                                                                                <OverlayTrigger
                                                                                                                    placement="top"
                                                                                                                    overlay={<Tooltip>Electrical and mechanical items including electronic and other integral parts of the Insured Items including equipment, fittings, installations, apparatus and Pressure Pipe Systems as defined above</Tooltip>}
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
                                                                                                            </FloatingLabel>
                                                                                                        </Form.Group>
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckStatus}>
                                                                                                        <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${electronicEquipmentValue ? desCheckStyle.active : null}`}>
                                                                                                    <div className={desCheckStyle.desCheckBox}>
                                                                                                        <span>
                                                                                                            <CheckYellowIcon />
                                                                                                        </span>
                                                                                                        <Form.Check
                                                                                                            inline
                                                                                                            type="checkbox"
                                                                                                            id="electronicEquipment"
                                                                                                            name="electronicEquipment"
                                                                                                            onChange={handleChangeElectronicEquipment}
                                                                                                            className={`${desCheckStyle.desCheckBtn}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckInput}>
                                                                                                        <Form.Group className={`floatFormGroup tooltipDiv ${electronicEquipmentValue ? desCheckStyle.active : null}`}>
                                                                                                            <FloatingLabel controlId="electronicEquipment" label="Electronic Equipment" >
                                                                                                                <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={electronicEquipmentValue ? null : 'disabled'} />
                                                                                                                <OverlayTrigger
                                                                                                                    placement="top"
                                                                                                                    overlay={<Tooltip>The items comprises televisions, computers, laptops, air conditioners, telephones, printers, power tools, and appliances of diverse sizes.</Tooltip>}
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
                                                                                                            </FloatingLabel>
                                                                                                        </Form.Group>
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckStatus}>
                                                                                                        <i><Image src="/icons/errorNewIcon.svg" width="24" height="24" alt="" /></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${pElectronicEquipmentValue ? desCheckStyle.active : null}`}>
                                                                                                    <div className={desCheckStyle.desCheckBox}>
                                                                                                        <span>
                                                                                                            <CheckYellowIcon />
                                                                                                        </span>
                                                                                                        <Form.Check
                                                                                                            inline
                                                                                                            type="checkbox"
                                                                                                            id="pElectronicEquipment"
                                                                                                            name="pElectronicEquipment"
                                                                                                            onChange={handleChangePElectronicEquipment}
                                                                                                            className={`${desCheckStyle.desCheckBtn}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckInput}>
                                                                                                        <Form.Group className={`floatFormGroup tooltipDiv ${pElectronicEquipmentValue ? desCheckStyle.active : null}`}>
                                                                                                            <FloatingLabel controlId="pElectronicEquipment" label="Portable electronic equipment" >
                                                                                                                <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={pElectronicEquipmentValue ? null : 'disabled'} />
                                                                                                                <OverlayTrigger
                                                                                                                    placement="top"
                                                                                                                    overlay={<Tooltip>Portable equipment refers to electrical devices that are easily transportable from one location to another, such as laptop computers, tablets, e-readers, drones, and similar items.</Tooltip>}
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
                                                                                                            </FloatingLabel>
                                                                                                        </Form.Group>
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckStatus}>
                                                                                                        <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${furnitureFittingsValue ? desCheckStyle.active : null}`}>
                                                                                                    <div className={desCheckStyle.desCheckBox}>
                                                                                                        <span>
                                                                                                            <CheckYellowIcon />
                                                                                                        </span>
                                                                                                        <Form.Check
                                                                                                            inline
                                                                                                            type="checkbox"
                                                                                                            id="furnitureFittings"
                                                                                                            name="furnitureFittings"
                                                                                                            onChange={handleChangeFurnitureFittings}
                                                                                                            className={`${desCheckStyle.desCheckBtn}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckInput}>
                                                                                                        <Form.Group className={`floatFormGroup tooltipDiv ${furnitureFittingsValue ? desCheckStyle.active : null}`}>
                                                                                                            <FloatingLabel controlId="furnitureFittings" label="Furniture Fixtures & Fittings" >
                                                                                                                <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={furnitureFittingsValue ? null : 'disabled'} />
                                                                                                                <OverlayTrigger
                                                                                                                    placement="top"
                                                                                                                    overlay={<Tooltip>Furniture comprises various items such as chairs, tables, desks, cabinets, and similar furnishings.</Tooltip>}
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
                                                                                                            </FloatingLabel>
                                                                                                        </Form.Group>
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckStatus}>
                                                                                                        <i><Image src="/icons/errorNewIcon.svg" width="24" height="24" alt="" /></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={desCheckStyle.desCheckCol}>
                                                                                    <div className={desCheckStyle.desCheckIcon}>
                                                                                        <Image src="/icons/stockIcon.svg" width="42" height="44" alt="Stock" />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckData}>
                                                                                        <div className={desCheckStyle.desCheckInfo}>
                                                                                            <h4>Stock</h4>
                                                                                            <p>Stock includes Raw materials, Open Stock, Finished Stock within the building premises</p>
                                                                                        </div>
                                                                                        <div className={desCheckStyle.desCheckBottom}>
                                                                                            <div className={desCheckStyle.desCheckList}>
                                                                                                <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${rawMaterialValue ? desCheckStyle.active : null}`}>
                                                                                                    <div className={desCheckStyle.desCheckBox}>
                                                                                                        <span>
                                                                                                            <CheckYellowIcon />
                                                                                                        </span>
                                                                                                        <Form.Check
                                                                                                            inline
                                                                                                            type="checkbox"
                                                                                                            id="rawMaterial"
                                                                                                            name="rawMaterial"
                                                                                                            onChange={handleChangeRawMaterial}
                                                                                                            className={`${desCheckStyle.desCheckBtn}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckInput}>
                                                                                                        <Form.Group className={`floatFormGroup tooltipDiv ${rawMaterialValue ? desCheckStyle.active : null}`}>
                                                                                                            <FloatingLabel controlId="rawMaterial" label="Raw material value" >
                                                                                                                <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={rawMaterialValue ? null : 'disabled'} />
                                                                                                                <OverlayTrigger
                                                                                                                    placement="top"
                                                                                                                    overlay={<Tooltip>The material that is still awaiting processing or undergoing further stages of production.</Tooltip>}
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
                                                                                                            </FloatingLabel>
                                                                                                        </Form.Group>
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckStatus}>
                                                                                                        <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${stockProcessValue ? desCheckStyle.active : null}`}>
                                                                                                    <div className={desCheckStyle.desCheckBox}>
                                                                                                        <span>
                                                                                                            <CheckYellowIcon />
                                                                                                        </span>
                                                                                                        <Form.Check
                                                                                                            inline
                                                                                                            type="checkbox"
                                                                                                            id="stockProcess"
                                                                                                            name="stockProcess"
                                                                                                            onChange={handleChangeStockProcess}
                                                                                                            className={`${desCheckStyle.desCheckBtn}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckInput}>
                                                                                                        <Form.Group className={`floatFormGroup tooltipDiv ${stockProcessValue ? desCheckStyle.active : null}`}>
                                                                                                            <FloatingLabel controlId="stockProcess" label="Stock In-process value" >
                                                                                                                <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={stockProcessValue ? null : 'disabled'} />
                                                                                                                <OverlayTrigger
                                                                                                                    placement="top"
                                                                                                                    overlay={<Tooltip>Stock undergoing through process of Manufacture but hasn't become finished Goods</Tooltip>}
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
                                                                                                            </FloatingLabel>
                                                                                                        </Form.Group>
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckStatus}>
                                                                                                        <i><Image src="/icons/errorNewIcon.svg" width="24" height="24" alt="" /></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${finishedGoodsValue ? desCheckStyle.active : null}`}>
                                                                                                    <div className={desCheckStyle.desCheckBox}>
                                                                                                        <span>
                                                                                                            <CheckYellowIcon />
                                                                                                        </span>
                                                                                                        <Form.Check
                                                                                                            inline
                                                                                                            type="checkbox"
                                                                                                            id="building-1"
                                                                                                            name="building"
                                                                                                            onChange={handleChangeFinishedGoods}
                                                                                                            className={`${desCheckStyle.desCheckBtn}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckInput}>
                                                                                                        <Form.Group className={`floatFormGroup tooltipDiv ${finishedGoodsValue ? desCheckStyle.active : null}`}>
                                                                                                            <FloatingLabel controlId="finishedGoods" label="Finished Goods value" >
                                                                                                                <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={finishedGoodsValue ? null : 'disabled'} />
                                                                                                                <OverlayTrigger
                                                                                                                    placement="top"
                                                                                                                    overlay={<Tooltip>Goods ready to be sold to the buyer</Tooltip>}
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
                                                                                                            </FloatingLabel>
                                                                                                        </Form.Group>
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckStatus}>
                                                                                                        <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className={`mb-4 ${desCheckStyle.desCheckListCol} ${otherStocksValue ? desCheckStyle.active : null}`}>
                                                                                                    <div className={desCheckStyle.desCheckBox}>
                                                                                                        <span>
                                                                                                            <CheckYellowIcon />
                                                                                                        </span>
                                                                                                        <Form.Check
                                                                                                            inline
                                                                                                            type="checkbox"
                                                                                                            id="otherStocks"
                                                                                                            name="otherStocks"
                                                                                                            onChange={handleChangeOtherStocks}
                                                                                                            className={`${desCheckStyle.desCheckBtn}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckInput}>
                                                                                                        <Form.Group className={`floatFormGroup tooltipDiv ${otherStocksValue ? desCheckStyle.active : null}`}>
                                                                                                            <FloatingLabel controlId="otherStocks" label="Any other stocks value" >
                                                                                                                <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={otherStocksValue ? null : 'disabled'} />
                                                                                                                <OverlayTrigger
                                                                                                                    placement="top"
                                                                                                                    overlay={<Tooltip>Office stationaries and books etc.</Tooltip>}
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
                                                                                                            </FloatingLabel>
                                                                                                        </Form.Group>
                                                                                                    </div>
                                                                                                    <div className={desCheckStyle.desCheckStatus}>
                                                                                                        <i><Image src="/icons/errorNewIcon.svg" width="24" height="24" alt="" /></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                                <Button onClick={handleEnterDetailsThirdToggle} variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button">
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
                                                                                    <span className={`${form.frmBackLink}`} onClick={handleEnterDetailsThirdToggle}>
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
                                                                            <div className={`${desCheckStyle.desCheckNewRow}`}>
                                                                                <div className={`${desCheckStyle.desCheckNewCol} ${burglaryValue ? desCheckStyle.active : null}`}>
                                                                                    <div className={desCheckStyle.desCheckNewBox}>
                                                                                        <span>
                                                                                            <CheckYellowIcon />
                                                                                        </span>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="checkbox"
                                                                                            id="burglary"
                                                                                            name="burglary"
                                                                                            label={[<>
                                                                                                <h4>Burglary</h4>
                                                                                                <p>It covers the theft of content, furniture and fixtures, as well as plant and machinery.</p>
                                                                                            </>]}
                                                                                            onChange={handleChangeBurglary}
                                                                                            className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckNewBottom}>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${burglaryValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="burglary" label="Sum Insured" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={burglaryValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${desCheckStyle.desCheckNewCol} ${plateGlassValue ? desCheckStyle.active : null}`}>
                                                                                    <div className={desCheckStyle.desCheckNewBox}>
                                                                                        <span>
                                                                                            <CheckYellowIcon />
                                                                                        </span>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="checkbox"
                                                                                            id="plateGlass"
                                                                                            name="plateGlass"
                                                                                            label={[<>
                                                                                                <h4>Plate Glass</h4>
                                                                                                <p>It includes any loss/damage to plate glass and cost associated with any temporary arrangement.</p>
                                                                                            </>]}
                                                                                            onChange={handleChangePlateGlass}
                                                                                            className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckNewBottom}>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${plateGlassValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="plateGlass" label="Sum Insured" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={plateGlassValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${desCheckStyle.desCheckNewCol} ${neonSignBoardValue ? desCheckStyle.active : null}`}>
                                                                                    <div className={desCheckStyle.desCheckNewBox}>
                                                                                        <span>
                                                                                            <CheckYellowIcon />
                                                                                        </span>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="checkbox"
                                                                                            id="neonSignBoard"
                                                                                            name="neonSignBoard"
                                                                                            label={[<>
                                                                                                <h4>Neon Sign Board</h4>
                                                                                                <p>It includes any loss or damage to the signboard as well as the cost of putting up any temporary boards.</p>
                                                                                            </>]}
                                                                                            onChange={handleChangeNeonSignBoard}
                                                                                            className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckNewBottom}>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${neonSignBoardValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="neonSignBoardValue" label="Sum Insured" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={neonSignBoardValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${desCheckStyle.desCheckNewCol} ${equipmentInsuranceValue ? desCheckStyle.active : null}`}>
                                                                                    <div className={desCheckStyle.desCheckNewBox}>
                                                                                        <span>
                                                                                            <CheckYellowIcon />
                                                                                        </span>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="checkbox"
                                                                                            id="equipmentInsurance"
                                                                                            name="equipmentInsurance"
                                                                                            label={[<>
                                                                                                <h4>Equipment Insurance</h4>
                                                                                                <p>It covers physical loss or damage to electronic items other than ones exclusively excluded.</p>
                                                                                            </>]}
                                                                                            onChange={handleChangeEquipmentInsurance}
                                                                                            className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckNewBottom}>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${equipmentInsuranceValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="equipmentInsurance" label="Sum Insured" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={equipmentInsuranceValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${desCheckStyle.desCheckNewCol} ${moneyInsuranceValue ? desCheckStyle.active : null}`}>
                                                                                    <div className={desCheckStyle.desCheckNewBox}>
                                                                                        <span>
                                                                                            <CheckYellowIcon />
                                                                                        </span>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="checkbox"
                                                                                            id="moneyInsurance"
                                                                                            name="moneyInsurance"
                                                                                            label={[<>
                                                                                                <h4>Money Insurance</h4>
                                                                                                <p>It covers money lost by employees in transit, money in safe, and money lost on the premises.</p>
                                                                                            </>]}
                                                                                            onChange={handleChangeMoneyInsurance}
                                                                                            className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckNewBottom}>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${moneyInsuranceValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="moneySafe" label="Money in safe" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={moneyInsuranceValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${moneyInsuranceValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="moneyCounter" label="Money at counter" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={moneyInsuranceValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${moneyInsuranceValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="moneySingleTransit" label="Money in transit (Single carrying)" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={moneyInsuranceValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${moneyInsuranceValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="moneyAnnualTransit" label="Money in transit (Annual carrying)" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={moneyInsuranceValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${desCheckStyle.desCheckNewCol} ${publicLiabilityValue ? desCheckStyle.active : null}`}>
                                                                                    <div className={desCheckStyle.desCheckNewBox}>
                                                                                        <span>
                                                                                            <CheckYellowIcon />
                                                                                        </span>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="checkbox"
                                                                                            id="publicLiability"
                                                                                            name="publicLiability"
                                                                                            label={[<>
                                                                                                <h4>Public Liability</h4>
                                                                                                <p>Provides for legal liability on behalf of the proposer for accidental death or bodily injury to third party.</p>
                                                                                            </>]}
                                                                                            onChange={handleChangePublicLiability}
                                                                                            className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckNewBottom}>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                            <Form.Group className={`selectDropDiv ${!productLimitLiabilityValue == '' ? 'selectedDropDiv' : null}`}>
                                                                                                <SelectSearch
                                                                                                    options={productLimitLiabilityOptions}
                                                                                                    name="productLimitLiability"
                                                                                                    placeholder="&nbsp;"
                                                                                                    onChange={setProductLimitLiabilityValue}
                                                                                                    value={productLimitLiabilityValue}
                                                                                                />
                                                                                                <label>Limit of Liability</label>
                                                                                            </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${desCheckStyle.desCheckNewCol} ${fidelityGuaranteeValue ? desCheckStyle.active : null}`}>
                                                                                    <div className={desCheckStyle.desCheckNewBox}>
                                                                                        <span>
                                                                                            <CheckYellowIcon />
                                                                                        </span>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="checkbox"
                                                                                            id="fidelityGuarantee"
                                                                                            name="fidelityGuarantee"
                                                                                            label={[<>
                                                                                                <h4>Fidelity Guarantee</h4>
                                                                                                <p>It covers financial losses due to fraud or dishonest act of salaried employees.</p>
                                                                                            </>]}
                                                                                            onChange={handleChangeFidelityGuarantee}
                                                                                            className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckNewBottom}>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                            <Form.Group className={`selectDropDiv ${!fidelitylimitLiabilityValue == '' ? 'selectedDropDiv' : null}`}>
                                                                                                <SelectSearch
                                                                                                    options={fidelitylimitLiabilityOptions}
                                                                                                    name="limitLiability"
                                                                                                    placeholder="&nbsp;"
                                                                                                    onChange={setFidelityLimitLiabilityValue}
                                                                                                    value={fidelitylimitLiabilityValue}
                                                                                                    disabled
                                                                                                />
                                                                                                <label>Limit of Liability</label>
                                                                                            </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${fidelityGuaranteeValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="fidelityGuarantee" label="Number of Employees" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={fidelityGuaranteeValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                            <Form.Group className={`selectDropDiv ${!limitEmployeeValue == '' ? 'selectedDropDiv' : null}`}>
                                                                                                <SelectSearch
                                                                                                    options={limitEmployeeOptions}
                                                                                                    name="limitEmployee"
                                                                                                    placeholder="&nbsp;"
                                                                                                    onChange={setLimitEmployeeValue}
                                                                                                    value={limitEmployeeValue}
                                                                                                />
                                                                                                <label>Limit per Employee</label>
                                                                                            </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={`${desCheckStyle.desCheckNewCol} ${terrorismValue ? desCheckStyle.active : null}`}>
                                                                                    <div className={desCheckStyle.desCheckNewBox}>
                                                                                        <span>
                                                                                            <CheckYellowIcon />
                                                                                        </span>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="checkbox"
                                                                                            id="terrorism"
                                                                                            name="terrorism"
                                                                                            label={[<>
                                                                                                <h4>Terrorism</h4>
                                                                                                <p>It covers any property damage caused by terrorist attack.</p>
                                                                                            </>]}
                                                                                            onChange={handleChangeTerrorism}
                                                                                            className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={desCheckStyle.desCheckNewBottom}>
                                                                                        <div className={`mb-4 ${desCheckStyle.desCheckListNewCol}`}>
                                                                                            <div className={desCheckStyle.desCheckNewInput}>
                                                                                                <Form.Group className={`floatFormGroup ${terrorismValue ? desCheckStyle.active : null}`}>
                                                                                                    <FloatingLabel controlId="terrorism" label="Sum Insured" >
                                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={terrorismValue ? null : 'disabled'} />
                                                                                                    </FloatingLabel>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className={desCheckStyle.desCheckNewStatus}>
                                                                                                <i><Image src="/icons/correctIcon.svg" width="24" height="24" alt="" /></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
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
