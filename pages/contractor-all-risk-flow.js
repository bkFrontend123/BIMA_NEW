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

import DescIconRow from '../component/FormElements/ComboElements/DescIconCombo/DescIconRow'
import DescIconCard from '../component/FormElements/ComboElements/DescIconCombo/DescIconCard'
import DescIconBottom from '../component/FormElements/ComboElements/DescIconCombo/DescIconBottom'
import DescIconInput from '../component/FormElements/ComboElements/DescIconCombo/DescIconInput'

import DescRow from '../component/FormElements/ComboElements/DescCombo/DescRow'
import DescCard from '../component/FormElements/ComboElements/DescCombo/DescCard'
import DescCheckbox from '../component/FormElements/ComboElements/DescCombo/DescCheckbox'
import DescBottom from '../component/FormElements/ComboElements/DescCombo/DescBottom'
import DescBottomCard from '../component/FormElements/ComboElements/DescCombo/DescBottomCard'
import DescInput from '../component/FormElements/ComboElements/DescCombo/DescInput'
import DescStatus from '../component/FormElements/ComboElements/DescCombo/DescStatus'

import form from '@/assets/css/form.module.css'
import desCheckStyle from '@/assets/css/descriptionCheckbox.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'
import progress from '@/assets/css/progress.module.css'

import productIcon from '../public/productIcons/engineering/contractorsAllRisk_icon.svg'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import arrowBack from '../public/icons/arrowBack.svg'

import expertImg from '../public/ravikantImg.png'

export default function ContractorAllRisk_Flow() {
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
        router.push('/contractor-all-risk-policy');
    };
    const goToNextPage = () => {
        router.push('/all_policies');
    };

    const [riskExposureValue, setRiskExposureValue] = useState();
    const handleChangeRiskExposure = event => {
        setRiskExposureValue(event.target.value);
    };

    const [categoryValue, setCategoryValue] = useState();
    const categoryOptions = [
        {name: 'Aquaculture Project Laying of HDPE Pipes/ Accessories to be rated as Works in Water', value: '1'},
        {name: 'Factory sheds, Warehouses, Cold Storages, Hangars', value: '2'},
        {name: 'Flyovers on Land', value: '3'},
        {name: 'Ground leveling and reclamation work', value: '4'},
        {name: 'Interior decoration', value: '5'},
        {name: 'Other sundry works for residential commercial buildings like water proofing plastering of walls', value: '6'},
        {name: 'Pile foundations alone in respect of buildings and other structures', value: '7'},
        {name: 'Railway gauge (Meter gauge to Broad gauge)', value: '8'},
        {name: 'Residential and Commercial Buildings', value: '9'},
        {name: 'Road and bridges does not exceed 20 percent of the contract value', value: '10'},
        {name: 'Road and bridges on land', value: '11'},
        {name: 'Runways, Aprons and Air Taxiways at Airports.', value: '12'},
        {name: 'Sewage disposal system for housing colonies including pump house', value: '12'},
        {name: 'Theaters, Auditorium and Cinema Halls', value: '14'},
        {name: 'Tunnels', value: '15'},
        {name: 'Water supply installation', value: '16'},
    ];

    const [subCategoryValue, setSubCategoryValue] = useState();
    const subCategoryOptions = [
        {name: 'Sub Category 1', value: '1'},
        {name: 'Sub Category 2', value: '2'},
        {name: 'Sub Category 3', value: '3'},
        {name: 'Sub Category 4', value: '4'},
        {name: 'Sub Category 5', value: '5'},
        {name: 'Sub Category 6', value: '6'},
        {name: 'Sub Category 7', value: '7'},
        {name: 'Sub Category 8', value: '8'},
        {name: 'Sub Category 9', value: '9'},
        {name: 'Sub Category 10', value: '10'},
    ];

    const [projectedPeriodValue, setProjectedPeriodValue] = useState();
    const projectedPeriodOptions = [
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
        {name: '13 Month', value: '13'},
        {name: '14 Month', value: '14'},
        {name: '15 Month', value: '15'},
        {name: '16 Month', value: '16'},
        {name: '17 Month', value: '17'},
        {name: '18 Month', value: '18'},
        {name: '19 Month', value: '19'},
        {name: '20 Month', value: '20'},
        {name: '21 Month', value: '21'},
        {name: '22 Month', value: '22'},
        {name: '23 Month', value: '23'},
        {name: '24 Month', value: '24'},
        {name: '25 Month', value: '25'},
        {name: '26 Month', value: '26'},
        {name: '27 Month', value: '27'},
        {name: '28 Month', value: '28'},
        {name: '29 Month', value: '29'},
        {name: '30 Month', value: '30'},
        {name: '31 Month', value: '31'},
        {name: '32 Month', value: '32'},
        {name: '33 Month', value: '33'},
        {name: '34 Month', value: '34'},
        {name: '35 Month', value: '35'},
        {name: '36 Month', value: '36'},
        {name: '37 Month', value: '37'},
        {name: '38 Month', value: '38'},
        {name: '39 Month', value: '39'},
        {name: '40 Month', value: '40'},
        {name: '41 Month', value: '41'},
        {name: '42 Month', value: '42'},
        {name: '43 Month', value: '43'},
        {name: '44 Month', value: '44'},
        {name: '45 Month', value: '45'},
        {name: '46 Month', value: '46'},
        {name: '47 Month', value: '47'},
        {name: '48 Month', value: '48'},
        {name: '49 Month', value: '49'},
        {name: '50 Month', value: '50'},
        {name: '51 Month', value: '51'},
        {name: '52 Month', value: '52'},
        {name: '53 Month', value: '53'},
        {name: '54 Month', value: '54'},
        {name: '55 Month', value: '55'},
        {name: '56 Month', value: '56'},
        {name: '57 Month', value: '57'},
        {name: '58 Month', value: '58'},
        {name: '59 Month', value: '59'},
        {name: '60 Month', value: '60'},
    ];

    const [thirdPartyLiabilityValue, setThirdPartyLiabilityValue] = useState();
    const handleChangeThirdPartyLiability= event => {
        setThirdPartyLiabilityValue(event.target.checked);
    };

    const [thirdPartyLimitLiabilityValue, setThirdPartyLimitLiabilityValue] = useState();
    const thirdPartyLimitLiabilityOptions = [
        {name: '1 Cr', value: '1'},
        {name: '2 Cr', value: '2'},
        {name: '3 Cr', value: '3'},
        {name: 'Etc', value: '4'},
    ];

    const isThirdPartyLimitLiabilitySelectDisabled = !thirdPartyLiabilityValue;

    const [surroundingPropertyValue, setSurroundingPropertyValue] = useState();
    const handleChangeSurroundingProperty = event => {
        setSurroundingPropertyValue(event.target.checked);
    };

    const [plantAndMachineryValue, setPlantAndMachineryValue] = useState();
    const handleChangesPlantAndMachinery= event => {
        setPlantAndMachineryValue(event.target.checked);
    };

    const [terrorismValue, setTerrorismValue] = useState();
    const handleChangeTerrorism= event => {
        setTerrorismValue(event.target.checked);
    };
    
    return (
        <>
            <Head>
                <title>Contractor's All Risk Policy Coverage - BimaKavach</title>
                <meta name="description" content="" />
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
                                    <div className='pe-lg-2 pe-xxl-4'>
                                        <ProductFormContent
                                            icon={productIcon}
                                            title="CAR"
                                            description="Get ₹50 Lakhs Coverage at ₹1,453 per year"
                                            listText1="Answer a few Simple Questions"
                                            listText2="Get curated quotes in minutes"
                                            listText3="Secure your business compehensively"
                                        />
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
                                                        <div className='d-none d-md-block'>
                                                            <TalkExpert
                                                                size={`${talkExpert.extraSmall}`}
                                                                imgSrc={expertImg}
                                                                name="Ravikant Sawant"
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
                                                                        <ProgressBar now={20} />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <Form>
                                                            <Form.Group className="mb-4">
                                                                <Form.Label htmlFor="riskExposure" className={`${form.formLabel}`}>Your risk exposure is</Form.Label>
                                                                <Form.Check
                                                                    inline
                                                                    type="radio"
                                                                    id="riskExposure-1"
                                                                    name="riskExposure"
                                                                    label="Less than 30cr"
                                                                    value="Less30cr"
                                                                    checked={riskExposureValue === 'Less30cr'}
                                                                    onChange={handleChangeRiskExposure}
                                                                    className={`${form.formCheckRadio}`}
                                                                    required
                                                                />
                                                                <Form.Check 
                                                                    inline
                                                                    type="radio"
                                                                    id="riskExposure-2"
                                                                    name="riskExposure"
                                                                    label="More than 30cr"
                                                                    value="More30cr"
                                                                    checked={riskExposureValue === 'More30cr'}
                                                                    onChange={handleChangeRiskExposure}
                                                                    className={`${form.formCheckRadio}`}
                                                                    required
                                                                />
                                                            </Form.Group>
                                                            <div className={`${form.formCheckLabel}`}>About your industry</div>
                                                            <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!categoryValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={categoryOptions}
                                                                    name="category"
                                                                    placeholder="Search by keyword"
                                                                    onChange={setCategoryValue}
                                                                    search
                                                                    value={categoryValue}
                                                                    required
                                                                />
                                                                <label>Category</label>
                                                            </Form.Group>
                                                            <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!subCategoryValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={subCategoryOptions}
                                                                    name="subCategory"
                                                                    placeholder="Search by keyword"
                                                                    onChange={setSubCategoryValue}
                                                                    search
                                                                    value={subCategoryValue}
                                                                    required
                                                                />
                                                                <label>Sub-Category</label>
                                                            </Form.Group>
                                                            <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!projectedPeriodValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={projectedPeriodOptions}
                                                                    name="projectedPeriod"
                                                                    placeholder="Search by keyword"
                                                                    onChange={setProjectedPeriodValue}
                                                                    search
                                                                    value={projectedPeriodValue}
                                                                    required
                                                                />
                                                                <label>Projected Period</label>
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
                                                                        name="Ravikant Sawant"
                                                                        designation="Insurance Expert"
                                                                    />
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
                                                                            <ProgressBar now={40} />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <Form>
                                                                <DescIconRow>
                                                                    <DescIconCard
                                                                        icon="/icons/buildingIcon.svg"
                                                                        title="Construction project value"
                                                                        description="Construction includes the overall project construction value"
                                                                    >
                                                                        <DescIconBottom>
                                                                            <DescIconInput>
                                                                                <Form.Group className={`floatFormGroup floatRuppeIconGroup mb-4`}>
                                                                                    <FloatingLabel controlId="constructionProjectValue" label="Construction project Value" >
                                                                                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" required />
                                                                                    </FloatingLabel>
                                                                                </Form.Group>
                                                                            </DescIconInput>
                                                                        </DescIconBottom>
                                                                    </DescIconCard>
                                                                </DescIconRow>
                                                                <DescRow>
                                                                <DescCard
                                                                        activeClass={thirdPartyLiabilityValue ? desCheckStyle.active : null}
                                                                    >
                                                                        <DescCheckbox>
                                                                            <Form.Check
                                                                                inline
                                                                                type="checkbox"
                                                                                id="thirdPartyLiability"
                                                                                name="thirdPartyLiability"
                                                                                label={[<>
                                                                                    <h4>Third Party liability</h4>
                                                                                    <p>Third Party Liability includes the coverage against any mishappening to anyone or anything who or which is not part of the project.</p>
                                                                                </>]}
                                                                                onChange={handleChangeThirdPartyLiability}
                                                                                className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                required
                                                                            />
                                                                        </DescCheckbox>
                                                                        <DescBottom>
                                                                            <DescBottomCard>
                                                                                <DescInput>
                                                                                    <Form.Group className={`selectDropDiv ${!thirdPartyLimitLiabilityValue == '' ? 'selectedDropDiv' : null}`}>
                                                                                        <SelectSearch
                                                                                            options={thirdPartyLimitLiabilityOptions}
                                                                                            name="thirdPartyLimitLiability"
                                                                                            placeholder="&nbsp;"
                                                                                            onChange={setThirdPartyLimitLiabilityValue}
                                                                                            value={thirdPartyLimitLiabilityValue}
                                                                                            disabled={isThirdPartyLimitLiabilitySelectDisabled}
                                                                                            required
                                                                                        />
                                                                                        <label>Limit of Liability</label>
                                                                                    </Form.Group>
                                                                                </DescInput>
                                                                                <DescStatus
                                                                                    icon="/icons/correctIcon.svg"
                                                                                />
                                                                            </DescBottomCard>
                                                                        </DescBottom>
                                                                    </DescCard>
                                                                    <DescCard
                                                                        activeClass={surroundingPropertyValue ? desCheckStyle.active : null}
                                                                    >
                                                                        <DescCheckbox>
                                                                            <Form.Check
                                                                                inline
                                                                                type="checkbox"
                                                                                id="surroundingProperty"
                                                                                name="surroundingProperty"
                                                                                label={[<>
                                                                                    <h4>Surrounding Property</h4>
                                                                                    <p>Surrounding Property includes coverage against damage to any property near the construction project site.</p>
                                                                                </>]}
                                                                                onChange={handleChangeSurroundingProperty}
                                                                                className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                required
                                                                            />
                                                                        </DescCheckbox>
                                                                        <DescBottom>
                                                                            <DescBottomCard>
                                                                                <DescInput>
                                                                                    <Form.Group className={`floatFormGroup floatRuppeIconGroup ${surroundingPropertyValue ? desCheckStyle.active : null}`}>
                                                                                        <FloatingLabel controlId="surroundingPropertyValue" label="Sum Insured" >
                                                                                            <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={surroundingPropertyValue ? null : 'disabled'} required />
                                                                                        </FloatingLabel>
                                                                                    </Form.Group>
                                                                                </DescInput>
                                                                                <DescStatus
                                                                                    icon="/icons/errorNewIcon.svg"
                                                                                />
                                                                            </DescBottomCard>
                                                                        </DescBottom>
                                                                    </DescCard>
                                                                    <DescCard
                                                                        activeClass={plantAndMachineryValue ? desCheckStyle.active : null}
                                                                    >
                                                                        <DescCheckbox>
                                                                            <Form.Check
                                                                                inline
                                                                                type="checkbox"
                                                                                id="plantAndMachinery"
                                                                                name="plantAndMachinery"
                                                                                label={[<>
                                                                                    <h4>Plant & Machinery</h4>
                                                                                    <p>Plant & Machinery includes any equiment being used at the construction project site.</p>
                                                                                </>]}
                                                                                onChange={handleChangesPlantAndMachinery}
                                                                                className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                required
                                                                            />
                                                                        </DescCheckbox>
                                                                        <DescBottom>
                                                                            <DescBottomCard>
                                                                                <DescInput>
                                                                                    <Form.Group className={`floatFormGroup floatRuppeIconGroup ${plantAndMachineryValue ? desCheckStyle.active : null}`}>
                                                                                        <FloatingLabel controlId="plantAndMachineryValue" label="Sum Insured" >
                                                                                            <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" disabled={plantAndMachineryValue ? null : 'disabled'} required />
                                                                                        </FloatingLabel>
                                                                                    </Form.Group>
                                                                                </DescInput>
                                                                                <DescStatus
                                                                                    icon="/icons/correctIcon.svg"
                                                                                />
                                                                            </DescBottomCard>
                                                                        </DescBottom>
                                                                    </DescCard>
                                                                    <DescCard
                                                                        activeClass={terrorismValue ? desCheckStyle.active : null}
                                                                    >
                                                                        <DescCheckbox>
                                                                            <Form.Check
                                                                                inline
                                                                                type="checkbox"
                                                                                id="terrorism"
                                                                                name="terrorism"
                                                                                label={[<>
                                                                                    <h4>Terrorism</h4>
                                                                                    <p>Terrorism includes the coverage against any losses due to terrorism activity. This is provided on the Construction value.</p>
                                                                                </>]}
                                                                                onChange={handleChangeTerrorism}
                                                                                className={`${desCheckStyle.desCheckNewBtn}`}
                                                                                required
                                                                            />
                                                                        </DescCheckbox>
                                                                        <DescBottom>
                                                                            <DescBottomCard>
                                                                                <DescInput>
                                                                                    <Form.Group className={`floatFormGroup floatRuppeIconGroup ${terrorismValue ? desCheckStyle.active : null}`}>
                                                                                        <FloatingLabel controlId="terrorism" label="Sum Insured" >
                                                                                            <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" readOnly disabled={terrorismValue ? null : 'disabled'} value="15000" required />
                                                                                        </FloatingLabel>
                                                                                    </Form.Group>
                                                                                </DescInput>
                                                                                <DescStatus
                                                                                    icon="/icons/correctIcon.svg"
                                                                                />
                                                                            </DescBottomCard>
                                                                        </DescBottom>
                                                                    </DescCard>
                                                                </DescRow>
                                                                <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                    <Button onClick={goToNextPage} variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button">
                                                                        <span className='me-2'>Continue</span>
                                                                        <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                    </Button>
                                                                    <div className='d-none d-md-block'>
                                                                        <TalkExpert
                                                                            size={`${talkExpert.extraSmall}`}
                                                                            imgSrc={expertImg}
                                                                            name="Ravikant Sawant"
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
                                        <div className={`${form.frmftr}`}>
                                            <p>By clicking on "View Quotes", you agree to our <Link href='/privacy-policy' target="_blank">Privacy Policy</Link> and <Link href='/terms-and-conditions' target="_blank">Terms of Use</Link> , and also provide us a formal mandate to represent you to the insurer and communicate to you the grant of a cover</p>
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
                                        name="Ravikant Sawant"
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
