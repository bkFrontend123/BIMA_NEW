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

import productIcon from '../public/productIcons/engineering/contractorsPlant_icon.png'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import arrowBack from '../public/icons/arrowBack.svg'

import expertImg from '../public/ravikantImg.png'

export default function ErectionAllRisk_Flow() {
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
        router.push('/erection-all-risk-insurance');
    };
    const goToNextPage = () => {
        router.push('/thank-you');
    };

    const [totalSumInsuredValue, setTotalSumInsuredValue] = useState();
    const totalSumInsuredOptions = [
        {name: 'Less Than 2.5 Cr', value: '1'},
        {name: '2.6Cr to 5 Cr', value: '2'},
        {name: '5 Cr and above', value: '3'}, 
    ];

    const [policyTypeValue, setPolicyTypeValue] = useState();
    const policyTypeOptions = [
        {name: 'Specific Location', value: '1'},
        {name: 'Defined Locations', value: '2'},
        {name: 'PAN India', value: '3'},
    ];

    const [plantAndMachineryTypeValue, setPlantAndMachineryTypeValue] = useState();
    const handleChangePlantAndMachineryType = event => {
        setPlantAndMachineryTypeValue(event.target.value);
    };
    
    const [machineryDetailsValue, setMachineryDetailsValue] = useState();
    const machineryDetailsOptions = [
        {name: 'Aggregate plant', value: '1'},
        {name: 'Air Locks', value: '2'},
        {name: 'Air tools', value: '3'},
        {name: 'Break down vehicle', value: '4'},
        {name: 'Bulldozers', value: '5'},
        {name: 'Cement silos', value: '6'},
        {name: 'Chain Blocks and Pulley Blocks', value: '7'},
        {name: 'Compressor', value: '8'},
        {name: 'Concrete pumping plant', value: '9'},
        {name: 'Conveyor belts', value: '10'},
        {name: 'Cranes above 10 tonnes capacity', value: '11'},
        {name: 'Cranes upto 10 tonnes capacity except Turner and Derrick cranes', value: '12'},
        {name: 'Diving equipments', value: '13'},
        {name: 'Electric Motors', value: '14'},
        {name: 'Electrical/Electronic Equipment used for Non-destructive testing', value: '15'},
        {name: 'Electro Hydraulic Digging Arm Loader', value: '16'},
        {name: 'Excavators Caterpillar shovels, drag-shovels, power shovels, self-propelled excavators, truck-shovels, bucket excavators, Bucket trenches', value: '17'},
        {name: 'Fork Lift Trucks upto 10 Tonnes Capacity', value: '18'},
        {name: 'Gas power-generating plant', value: '19'},
        {name: 'Graders, pan scrappers, rippers', value: '20'},
        {name: 'Hauling equipment Dumpers, Dump cars, Dump trucks', value: '21'},
        {name: 'Hydraulic Twin Boom Jumbo Drilling Machine', value: '22'},
        {name: 'Jacks, Screws', value: '23'},
        {name: 'Loaders', value: '24'},
        {name: 'Mechanical sweepers', value: '25'},
        {name: 'Mixing Machines, Mixing Plants', value: '26'},
        {name: 'Mobile mixing plant', value: '27'},
        {name: 'Mosaic Polishing Machines', value: '28'},
        {name: 'Pavers for asphalt or concrete finishing', value: '29'},
        {name: 'Permanent way plant (track-laying machinery, track shifters, tempers)', value: '30'},
        {name: 'Pile driving and pile exctracting equipment', value: '31'},
        {name: 'Portable protection tents', value: '32'},
        {name: 'Pumps', value: '33'},
        {name: 'Rail Mounted Gantry Crane (RMG)', value: '34'},
        {name: 'Rendering Plant', value: '35'},
        {name: 'Road rollers', value: '36'},
        {name: 'Scrapers, scales', value: '37'},
        {name: 'Site hoists', value: '38'},
        {name: 'Site power-generating plant gasoline or diesel engines', value: '39'},
        {name: 'Stone crushers, screens, separating plant', value: '40'},
        {name: 'Surveying Equipment', value: '41'},
        {name: 'Thermoplastic Line Marking Machine', value: '42'},
        {name: 'Top lift Truck (TLT)', value: '43'},
        {name: 'Tractor 144D', value: '44'},
        {name: 'Tractors/Trailers', value: '45'},
        {name: 'Vibrators vibrating compacting rollers, vibration and Mechanical tamping equipment, concrete vibrating equipment', value: '46'},
        {name: 'Water containers, Surveying Equipment', value: '47'},
        {name: 'Welding set', value: '47'},
        {name: 'Workshop Machines, woodworking Machines, Reinforcement bar benders, drying plant', value: '49'},
    ];

    const [usedPublicRoadValue, setUsedPublicRoadValue] = useState();
    const handleChangeUsedPublicRoad = event => {
        setUsedPublicRoadValue(event.target.value);
    };

    const [machineryRTOValue, setMachineryRTOValue] = useState();
    const handleChangeMachineryRTO = event => {
        setMachineryRTOValue(event.target.value);
    };

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

    const [terrorismValue, setTerrorismValue] = useState();
    const handleChangeTerrorism= event => {
        setTerrorismValue(event.target.checked);
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
                                <Col xl={6} xxl={7}>
                                    <div className='pe-lg-2 pe-xxl-4'>
                                        <ProductFormContent
                                            icon={productIcon}
                                            title="CPM"
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
                                                            <Form.Group className="floatFormGroup mb-4">
                                                                <FloatingLabel controlId="city" label="City" >
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" required />
                                                                </FloatingLabel>
                                                            </Form.Group>
                                                            <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!totalSumInsuredValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={totalSumInsuredOptions}
                                                                    name="totalSumInsured"
                                                                    placeholder="Search by keyword"
                                                                    onChange={setTotalSumInsuredValue}
                                                                    search
                                                                    value={totalSumInsuredValue}
                                                                    required
                                                                />
                                                                <label>Total Sum Insured</label>
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
                                                        {isEnterDetailsSecondActive ? (
                                                            <div className={`${form.entrDtlsFormSecond}`}>
                                                                <div className={`${form.frmBack}`}>
                                                                    <Row className='align-items-center gap-4 gap-lg-2'>
                                                                        <Col>
                                                                            <span className={`${form.frmBackLink}`} onClick={handleEnterDetailsFirstToggle}>
                                                                                <Image src={arrowBack} alt="Back Arrow" /> About your industry
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
                                                                    <Form.Group className={`selectDropDiv mb-4 ${!policyTypeValue == '' ? 'selectedDropDiv' : null}`}>
                                                                        <SelectSearch
                                                                            options={policyTypeOptions}
                                                                            name="policyType"
                                                                            placeholder="&nbsp;"
                                                                            onChange={setPolicyTypeValue}
                                                                            value={policyTypeValue}
                                                                            required
                                                                        />
                                                                        <label>Policy Type</label>
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="plantAndMachineryType" className={`${form.formLabel}`}>Plant & Machinery type</Form.Label>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="plantAndMachineryType-1"
                                                                            name="plantAndMachineryType"
                                                                            label="New"
                                                                            value="New"
                                                                            checked={plantAndMachineryTypeValue === 'New'}
                                                                            onChange={handleChangePlantAndMachineryType}
                                                                            className={`${form.formCheckRadio}`}
                                                                            required
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="plantAndMachineryType-2"
                                                                            name="plantAndMachineryType"
                                                                            label="Old"
                                                                            value="Old"
                                                                            checked={plantAndMachineryTypeValue === 'Old'}
                                                                            onChange={handleChangePlantAndMachineryType}
                                                                            className={`${form.formCheckRadio}`}
                                                                            required
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!machineryDetailsValue == '' ? 'selectedDropDiv' : null}`}>
                                                                        <SelectSearch
                                                                            options={machineryDetailsOptions}
                                                                            name="machineryDetails"
                                                                            placeholder="Search by keyword"
                                                                            onChange={setMachineryDetailsValue}
                                                                            search
                                                                            value={machineryDetailsValue}
                                                                            required
                                                                        />
                                                                        <label>Machinery details</label>
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="usedPublicRoad" className={`${form.formLabel}`}>Is it used on public road?</Form.Label>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="usedPublicRoad-1"
                                                                            name="usedPublicRoad"
                                                                            label="Yes"
                                                                            value="Yes"
                                                                            checked={usedPublicRoadValue === 'Yes'}
                                                                            onChange={handleChangeUsedPublicRoad}
                                                                            className={`${form.formCheckRadio}`}
                                                                            required
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="usedPublicRoad-2"
                                                                            name="usedPublicRoad"
                                                                            label="No"
                                                                            value="No"
                                                                            checked={usedPublicRoadValue === 'No'}
                                                                            onChange={handleChangeUsedPublicRoad}
                                                                            className={`${form.formCheckRadio}`}
                                                                            required
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="machineryRTO" className={`${form.formLabel}`}>Is your machinery RTO registered?</Form.Label>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="machineryRTO-1"
                                                                            name="machineryRTO"
                                                                            label="Yes"
                                                                            value="Yes"
                                                                            checked={machineryRTOValue === 'Yes'}
                                                                            onChange={handleChangeMachineryRTO}
                                                                            className={`${form.formCheckRadio}`}
                                                                            required
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="machineryRTO-2"
                                                                            name="machineryRTO"
                                                                            label="No"
                                                                            value="No"
                                                                            checked={machineryRTOValue === 'No'}
                                                                            onChange={handleChangeMachineryRTO}
                                                                            className={`${form.formCheckRadio}`}
                                                                            required
                                                                        />
                                                                    </Form.Group>
                                                                    <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                        <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={handleEnterDetailsSecondToggle}>
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
                                                                                <ProgressBar now={40} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <Form>
                                                                    <DescIconRow>
                                                                        <DescIconCard
                                                                            icon="/icons/buildingIcon.svg"
                                                                            title="Total Plant & Machinary Value"
                                                                            description="Plant & Machinery includes the coverage for the plant and machinery that is to be insured"
                                                                        >
                                                                            <DescIconBottom>
                                                                                <DescIconInput>
                                                                                    <Form.Group className={`floatFormGroup floatRuppeIconGroup mb-4`}>
                                                                                        <FloatingLabel controlId="totalPlantAndMachineryValue" label="Total Plant & Machinary Value" >
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
                                                                                        <h4>Third Party Liability</h4>
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
                                                                                        <p>Terrorism includes the coverage against any losses due to terrorism activity.</p>
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
