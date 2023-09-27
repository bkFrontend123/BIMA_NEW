import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'

import { Container, Row, Col, Form, FloatingLabel, Button, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProductFormContent from '@/component/GHI/ProductContent/ProductFormContent'
import ProductFormFooter from '@/component/GHI/ProductContent/ProductFormFooter'

import RadioIconRow from '../component/GHI/FormElements/RadioIconCombo/RadioIconRow'
import RadioIconCard from '../component/GHI/FormElements/RadioIconCombo/RadioIconCard'

import productStyle from '@/assets/css/eBnftProduct.module.css'
import form from '@/assets/css/form.module.css'
import progress from '@/assets/css/progress.module.css'
import radioIconStyle from '@/assets/css/radioIconCheckbox.module.css'

import LeftIcon from '@/component/GHI/Icons/IconLeft';
import RightIcon from '@/component/GHI/Icons/IconRight';
import tooltipIcon from '@/public/ghi/icons/tooltipIcon.svg'

import coverDetailIcon1 from '@/public/ghi/flowIcons/coverDetailIcon1.svg'
import coverDetailIcon2 from '@/public/ghi/flowIcons/coverDetailIcon2.svg'
import coverDetailIcon3 from '@/public/ghi/flowIcons/coverDetailIcon3.svg'

import sumInsuredIcon1 from '@/public/ghi/flowIcons/sumInsuredIcon1.svg'
import sumInsuredIcon2 from '@/public/ghi/flowIcons/sumInsuredIcon2.svg'
import sumInsuredIcon3 from '@/public/ghi/flowIcons/sumInsuredIcon3.svg'
import sumInsuredIcon4 from '@/public/ghi/flowIcons/sumInsuredIcon4.svg'

import maternityBenefitIcon1 from '@/public/ghi/flowIcons/maternityBenefitIcon1.svg'
import maternityBenefitIcon2 from '@/public/ghi/flowIcons/maternityBenefitIcon2.svg'
import maternityBenefitIcon3 from '@/public/ghi/flowIcons/maternityBenefitIcon3.svg'
import maternityBenefitIcon4 from '@/public/ghi/flowIcons/maternityBenefitIcon4.svg'

import roomRentIcon1 from '@/public/ghi/flowIcons/roomRentIcon1.svg'
import roomRentIcon2 from '@/public/ghi/flowIcons/roomRentIcon2.svg'
import roomRentIcon3 from '@/public/ghi/flowIcons/roomRentIcon3.svg'

export default function GroupHealth_Flow() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("eBnftTooltip")
    }, []);

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

    const [isEnterDetailsFourthActive, setEnterDetailsFourthActive] = useState(true);
    const handleEnterDetailsFourthToggle = () => {
        setEnterDetailsFourthActive(!isEnterDetailsFourthActive);
    };

    const [isEnterDetailsFiveActive, setEnterDetailsFiveActive] = useState(true);
    const handleEnterDetailsFiveToggle = () => {
        setEnterDetailsFiveActive(!isEnterDetailsFiveActive);
    };

    const [isEnterDetailsSixActive, setEnterDetailsSixActive] = useState(true);
    const handleEnterDetailsSixToggle = () => {
        setEnterDetailsSixActive(!isEnterDetailsSixActive);
    };

    const [indValue, setIndValue] = useState();
    const indCategoryOptions = [
        { name: 'Banking Finance and Insurance', value: '1' },
        { name: 'Computers, IT Services, Technology and Telecommunication', value: '2' },
        { name: 'Construction and Real Estate', value: '3' },
        { name: 'Manufacturing', value: '4' },
        { name: 'Advertising', value: '5' },
        { name: 'Medical & Pharmaceuticals', value: '6' },
    ];

    const [coverDetailsValue, setCoverDetailsValue] = useState();
    const handleChangeCoverDetails = event => {
        setCoverDetailsValue(event.target.value);
    };

    const [sumInsuredValue, setSumInsuredValue] = useState();
    const handleChangeSumInsured = event => {
        setSumInsuredValue(event.target.value);
    };

    const [maternityBenefitValue, setMaternityBenefitValue] = useState();
    const handleChangeMaternityBenefit = event => {
        setMaternityBenefitValue(event.target.value);
    };

    const [roomRentValue, setRoomRentValue] = useState();
    const handleChangeRoomRent = event => {
        setRoomRentValue(event.target.value);
    };

    const [buyingPoilicyValue, setBuyingPoilicyValue] = useState();
    const handleChangeBuyingPolicy = event => {
        setBuyingPoilicyValue(event.target.value);
    };

    const [claimPolicyValue, setClaimPolicyValue] = useState();
    const handleChangeClaimPolicy = event => {
        setClaimPolicyValue(event.target.value);
    };

    const router = useRouter();
    const goToBackPage = () => {
        router.push('/group-health-insurance');
    };
    const goToNextPage = () => {
        router.push('/all_policies?insuranceType=employeeBenefit&logo=ghi');
    };

    return (
        <>
            <Head>
                <title>Group Health Insurance | BimaKavach</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                insuranceType="employeeBenefit"
                logo="ghi"
                talkExpert
                scheduleCall
            />
            <section className={`sectionPadding ${productStyle.eBnftPrdctFrmBlock}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={12} xxl={12}>
                            {isEnterDetailsFirstActive ? (
                                <Row className='g-4 g-xxl-5'>
                                    <Col xl={6} xxl={6}>
                                        <ProductFormContent
                                            title="Namaste, Shruti"
                                            description="Help us know more about yourself"
                                            talkExpert="himani"
                                        />
                                    </Col>
                                    <Col xl={6} xxl={6}>
                                        <div className={`employeeBenefitForm ${form.commonForm} ${form.employeeBenefitForm}`}>
                                            <div className={`${form.entrDtlsFormFirst}`}>
                                                <div className={`${form.frmBack}`}>
                                                    <Row className='align-items-center gap-4 gap-lg-2'>
                                                        <Col>
                                                            <span className={`${form.frmBackText}`}>Enter your details</span>
                                                        </Col>
                                                        <Col md="auto">
                                                            <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noLabel} ${progress.warning} ${progress.newProgress}`}>
                                                                <ProgressBar now={13} />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className={`${form.frmTtl}`}>
                                                    <h3>1. Initial Details</h3>
                                                </div>
                                                <Form>
                                                    <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!indValue == '' ? 'selectedDropDiv' : null}`}>
                                                        <SelectSearch
                                                            options={indCategoryOptions}
                                                            name="industry"
                                                            placeholder="Search by keyword"
                                                            onChange={setIndValue}
                                                            search
                                                            value={indValue}
                                                            required
                                                        />
                                                        <label>Industry Category</label>
                                                    </Form.Group>
                                                    <Form.Group className="floatFormGroup mb-4">
                                                        <FloatingLabel controlId="location" label="Location" >
                                                            <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" required />
                                                        </FloatingLabel>
                                                    </Form.Group>
                                                    <div className={`${form.fromButtonDiv}`}>
                                                        <Row className="g-4">
                                                            <Col md={6}>
                                                                <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`} type="button" onClick={goToBackPage}>
                                                                    <LeftIcon />
                                                                    <span className='ms-2'>Go Back</span>
                                                                </Button>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Button variant="primary" className={`w-100 btnCommon yellowBtn justify-content-center ${form.formBtn}`} type="button" onClick={handleEnterDetailsFirstToggle}>
                                                                    <span className='me-2'>Continue</span>
                                                                    <RightIcon />
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Form>
                                            </div>
                                            <ProductFormFooter />
                                        </div>
                                    </Col>
                                </Row>
                            ) : (
                                <>
                                    {isEnterDetailsSecondActive ? (
                                        <Row className='g-4 g-xxl-5'>
                                            <Col xl={6} xxl={6}>
                                                <ProductFormContent
                                                    title="Coverage for Everyone"
                                                    description="You can cover employee, their spouse, kids and dependent parents all in one policy."
                                                    talkExpert="himani"
                                                />
                                            </Col>
                                            <Col xl={6} xxl={6}>
                                                <div className={`employeeBenefitForm ${form.commonForm} ${form.employeeBenefitForm}`}>
                                                    <div className={`${form.entrDtlsFormSecond}`}>
                                                        <div className={`${form.frmBack}`}>
                                                            <Row className='align-items-center gap-4 gap-lg-2'>
                                                                <Col>
                                                                    <span className={`${form.frmBackText}`}>Enter your details</span>
                                                                </Col>
                                                                <Col md="auto">
                                                                    <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noLabel} ${progress.warning} ${progress.newProgress}`}>
                                                                        <ProgressBar now={26} />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <div className={`mb-3 ${form.frmTtl}`}>
                                                            <h3>2. Cover Details</h3>
                                                        </div>
                                                        <Form>
                                                            <Form.Group className="mb-4">
                                                                <Form.Label htmlFor="coverDetails" className={`${form.formLabel}`}>
                                                                    <span>Whom do you want to cover?</span>
                                                                    <OverlayTrigger
                                                                        placement="top"
                                                                        overlay={<Tooltip>Maximum amount the insurance company will pay you in case of loss due to defined liability.</Tooltip>}
                                                                    >
                                                                        {({ ref, ...triggerHandler }) => (
                                                                            <i className='tooltipIcon' {...triggerHandler}>
                                                                                <Image
                                                                                    ref={ref}
                                                                                    src={tooltipIcon}
                                                                                    width="20"
                                                                                    height="20"
                                                                                    alt="Remark Icon"
                                                                                />
                                                                            </i>
                                                                        )}
                                                                    </OverlayTrigger>
                                                                </Form.Label>
                                                                <RadioIconRow>
                                                                    <RadioIconCard
                                                                        icon={coverDetailIcon1}
                                                                        alt="Employees Only"
                                                                        activeClass={coverDetailsValue === '1' ? radioIconStyle.active : null}
                                                                    >
                                                                        <Form.Check
                                                                            type="radio"
                                                                            id="coverDetails-1"
                                                                            name="coverDetails"
                                                                            label="Employees Only"
                                                                            value="1"
                                                                            checked={coverDetailsValue === '1'}
                                                                            onChange={handleChangeCoverDetails}
                                                                            required
                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                        />
                                                                    </RadioIconCard>
                                                                    <RadioIconCard
                                                                        icon={coverDetailIcon2}
                                                                        alt="Employee with Spouse & Kids"
                                                                        activeClass={coverDetailsValue === '2' ? radioIconStyle.active : null}
                                                                    >
                                                                        <Form.Check
                                                                            type="radio"
                                                                            id="coverDetails-2"
                                                                            name="coverDetails"
                                                                            label="Employee with Spouse & Kids"
                                                                            value="2"
                                                                            checked={coverDetailsValue === '2'}
                                                                            onChange={handleChangeCoverDetails}
                                                                            required
                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                        />
                                                                    </RadioIconCard>
                                                                    <RadioIconCard
                                                                        icon={coverDetailIcon3}
                                                                        alt="Employee with  Spouse, Kids & Dependant parents"
                                                                        activeClass={coverDetailsValue === '3' ? radioIconStyle.active : null}
                                                                    >
                                                                        <Form.Check
                                                                            type="radio"
                                                                            id="coverDetails-3"
                                                                            name="coverDetails"
                                                                            label="Employee with  Spouse, Kids & Dependant parents"
                                                                            value="3"
                                                                            checked={coverDetailsValue === '3'}
                                                                            onChange={handleChangeCoverDetails}
                                                                            required
                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                        />
                                                                    </RadioIconCard>
                                                                </RadioIconRow>
                                                            </Form.Group>
                                                            <div className={`${form.fromButtonDiv}`}>
                                                                <Row className="g-4">
                                                                    <Col md={6}>
                                                                        <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`} type="button" onClick={handleEnterDetailsFirstToggle}>
                                                                            <LeftIcon />
                                                                            <span className='ms-2'>Go Back</span>
                                                                        </Button>
                                                                    </Col>
                                                                    <Col>
                                                                        <Button onClick={handleEnterDetailsSecondToggle} variant="primary" className={`w-100 btnCommon yellowBtn justify-content-center ${form.formBtn}`} type="button">
                                                                            <span className='me-2'>Continue</span>
                                                                            <RightIcon />
                                                                        </Button>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                    <ProductFormFooter />
                                                </div>
                                            </Col>
                                        </Row>
                                    ) : (
                                        <>
                                            {isEnterDetailsThirdActive ? (
                                                <Row className='g-4 g-xxl-5'>
                                                    <Col xl={6} xxl={6}>
                                                        <ProductFormContent
                                                            title="Space for All"
                                                            description="You can accommodate as many employees as you want"
                                                            talkExpert="himani"
                                                        />
                                                    </Col>
                                                    <Col xl={6} xxl={6}>
                                                        <div className={`employeeBenefitForm ${form.commonForm} ${form.employeeBenefitForm}`}>
                                                            <div className={`${form.entrDtlsFormThird}`}>
                                                                <div className={`${form.frmBack}`}>
                                                                    <Row className='align-items-center gap-4 gap-lg-2'>
                                                                        <Col>
                                                                            <span className={`${form.frmBackText}`}>Enter your details</span>
                                                                        </Col>
                                                                        <Col md="auto">
                                                                            <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noLabel} ${progress.warning} ${progress.newProgress}`}>
                                                                                <ProgressBar now={39} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className={`${form.frmTtl}`}>
                                                                    <h3>3. Employee Details</h3>
                                                                </div>
                                                                <Form>
                                                                    <Form.Group className="floatFormGroup mb-4">
                                                                        <Form.Label htmlFor="coverDetails" className={`mb-4 ${form.formLabel}`}>
                                                                            <span>Whom do you want to cover?</span>
                                                                            <OverlayTrigger
                                                                                placement="top"
                                                                                overlay={<Tooltip>Maximum amount the insurance company will pay you in case of loss due to defined liability.</Tooltip>}
                                                                            >
                                                                                {({ ref, ...triggerHandler }) => (
                                                                                    <i className='tooltipIcon' {...triggerHandler}>
                                                                                        <Image
                                                                                            ref={ref}
                                                                                            src={tooltipIcon}
                                                                                            width="20"
                                                                                            height="20"
                                                                                            alt="Remark Icon"
                                                                                        />
                                                                                    </i>
                                                                                )}
                                                                            </OverlayTrigger>
                                                                        </Form.Label>
                                                                        <FloatingLabel controlId="employees" label="Total Number of Employees" >
                                                                            <Form.Control className={`${form.formInput}`} type="text" placeholder="Eg: 10" required />
                                                                        </FloatingLabel>
                                                                    </Form.Group>
                                                                    <Form.Group className="floatFormGroup mb-4">
                                                                        <FloatingLabel controlId="lives" label="Total Number of Lives" >
                                                                            <Form.Control className={`${form.formInput}`} type="text" placeholder="Eg: 10" required />
                                                                        </FloatingLabel>
                                                                    </Form.Group>
                                                                    <div className={`${form.fromButtonDiv}`}>
                                                                        <Row className="g-4">
                                                                            <Col md={6}>
                                                                                <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`} type="button" onClick={handleEnterDetailsSecondToggle}>
                                                                                    <LeftIcon />
                                                                                    <span className='ms-2'>Go Back</span>
                                                                                </Button>
                                                                            </Col>
                                                                            <Col>
                                                                                <Button onClick={handleEnterDetailsThirdToggle} variant="primary" className={`w-100 btnCommon yellowBtn justify-content-center ${form.formBtn}`} type="button">
                                                                                    <span className='me-2'>Continue</span>
                                                                                    <RightIcon />
                                                                                </Button>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Form>
                                                            </div>
                                                            <ProductFormFooter />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            ) : (
                                                <>
                                                    {isEnterDetailsFourthActive ? (
                                                        <Row className='g-4 g-xxl-5'>
                                                            <Col xl={6} xxl={6}>
                                                                <ProductFormContent
                                                                    title="Individual Coverage, Tailored Protection"
                                                                    description="Ensure every individual's well-being with personalised policy package"
                                                                    talkExpert="himani"
                                                                />
                                                            </Col>
                                                            <Col xl={6} xxl={6}>
                                                                <div className={`employeeBenefitForm ${form.commonForm} ${form.employeeBenefitForm}`}>
                                                                    <div className={`${form.entrDtlsFormFourth}`}>
                                                                        <div className={`${form.frmBack}`}>
                                                                            <Row className='align-items-center gap-4 gap-lg-2'>
                                                                                <Col>
                                                                                    <span className={`${form.frmBackText}`}>Enter your details</span>
                                                                                </Col>
                                                                                <Col md="auto">
                                                                                    <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noLabel} ${progress.warning} ${progress.newProgress}`}>
                                                                                        <ProgressBar now={52} />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <div className={`mb-3 ${form.frmTtl}`}>
                                                                            <h3>4. Sum Insurance Details</h3>
                                                                        </div>
                                                                        <Form>
                                                                            <Form.Group className="mb-4">
                                                                                <Form.Label htmlFor="sumInsured" className={`mb-4 ${form.formLabel}`}>
                                                                                    <span>Sum Insured Per Person</span>
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={<Tooltip>Maximum amount the insurance company will pay you in case of loss due to defined liability.</Tooltip>}
                                                                                    >
                                                                                        {({ ref, ...triggerHandler }) => (
                                                                                            <i className='tooltipIcon' {...triggerHandler}>
                                                                                                <Image
                                                                                                    ref={ref}
                                                                                                    src={tooltipIcon}
                                                                                                    width="20"
                                                                                                    height="20"
                                                                                                    alt="Remark Icon"
                                                                                                />
                                                                                            </i>
                                                                                        )}
                                                                                    </OverlayTrigger>
                                                                                </Form.Label>
                                                                                <RadioIconRow>
                                                                                    <RadioIconCard
                                                                                        icon={sumInsuredIcon1}
                                                                                        alt="2 Lakhs"
                                                                                        activeClass={sumInsuredValue === '1' ? radioIconStyle.active : null}
                                                                                    >
                                                                                        <Form.Check
                                                                                            type="radio"
                                                                                            id="sumInsured-1"
                                                                                            name="sumInsured"
                                                                                            label="2 Lakhs"
                                                                                            value="1"
                                                                                            checked={sumInsuredValue === '1'}
                                                                                            onChange={handleChangeSumInsured}
                                                                                            required
                                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                                        />
                                                                                    </RadioIconCard>
                                                                                    <RadioIconCard
                                                                                        icon={sumInsuredIcon2}
                                                                                        alt="3 Lakhs"
                                                                                        activeClass={sumInsuredValue === '2' ? radioIconStyle.active : null}
                                                                                    >
                                                                                        <Form.Check
                                                                                            type="radio"
                                                                                            id="sumInsured-2"
                                                                                            name="sumInsured"
                                                                                            label="3 Lakhs"
                                                                                            value="2"
                                                                                            checked={sumInsuredValue === '2'}
                                                                                            onChange={handleChangeSumInsured}
                                                                                            required
                                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                                        />
                                                                                    </RadioIconCard>
                                                                                    <RadioIconCard
                                                                                        icon={sumInsuredIcon3}
                                                                                        alt="5 Lakhs"
                                                                                        activeClass={sumInsuredValue === '3' ? radioIconStyle.active : null}
                                                                                    >
                                                                                        <Form.Check
                                                                                            type="radio"
                                                                                            id="sumInsured-3"
                                                                                            name="sumInsured"
                                                                                            label="5 Lakhs"
                                                                                            value="3"
                                                                                            checked={sumInsuredValue === '3'}
                                                                                            onChange={handleChangeSumInsured}
                                                                                            required
                                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                                        />
                                                                                    </RadioIconCard>
                                                                                    <RadioIconCard
                                                                                        icon={sumInsuredIcon4}
                                                                                        alt="10 Lakhs"
                                                                                        activeClass={sumInsuredValue === '4' ? radioIconStyle.active : null}
                                                                                    >
                                                                                        <Form.Check
                                                                                            type="radio"
                                                                                            id="sumInsured-4"
                                                                                            name="sumInsured"
                                                                                            label="10 Lakhs"
                                                                                            value="4"
                                                                                            checked={sumInsuredValue === '4'}
                                                                                            onChange={handleChangeSumInsured}
                                                                                            required
                                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                                        />
                                                                                    </RadioIconCard>
                                                                                </RadioIconRow>
                                                                            </Form.Group>
                                                                            <div className={`${form.fromButtonDiv}`}>
                                                                                <Row className="g-4">
                                                                                    <Col md={6}>
                                                                                        <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`} type="button" onClick={handleEnterDetailsThirdToggle}>
                                                                                            <LeftIcon />
                                                                                            <span className='ms-2'>Go Back</span>
                                                                                        </Button>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Button onClick={handleEnterDetailsFourthToggle} variant="primary" className={`w-100 btnCommon yellowBtn justify-content-center ${form.formBtn}`} type="button">
                                                                                            <span className='me-2'>Continue</span>
                                                                                            <RightIcon />
                                                                                        </Button>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </Form>
                                                                    </div>
                                                                    <ProductFormFooter />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    ) : (
                                                        <>
                                                            {isEnterDetailsFiveActive ? (
                                                                <Row className='g-4 g-xxl-5'>
                                                                    <Col xl={6} xxl={6}>
                                                                        <ProductFormContent
                                                                            title="Excellent Maternity  Benefits"
                                                                            description="Avail considerable maternity package for your female employees"
                                                                            talkExpert="himani"
                                                                        />
                                                                    </Col>
                                                                    <Col xl={6} xxl={6}>
                                                                        <div className={`employeeBenefitForm ${form.commonForm} ${form.employeeBenefitForm}`}>
                                                                            <div className={`${form.entrDtlsFormFive}`}>
                                                                                <div className={`${form.frmBack}`}>
                                                                                    <Row className='align-items-center gap-4 gap-lg-2'>
                                                                                        <Col>
                                                                                            <span className={`${form.frmBackText}`}>Enter your details</span>
                                                                                        </Col>
                                                                                        <Col md="auto">
                                                                                            <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noLabel} ${progress.warning} ${progress.newProgress}`}>
                                                                                                <ProgressBar now={65} />
                                                                                            </div>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </div>
                                                                                <div className={`${form.frmTtl}`}>
                                                                                    <h3>5. Maternity Benefit Details</h3>
                                                                                </div>
                                                                                <Form>
                                                                                    <Form.Group className="mb-4">
                                                                                        <Form.Label htmlFor="sumInsured" className={`mb-4 ${form.formLabel}`}>
                                                                                            <span>What kind of maternity benefits suits you?</span>
                                                                                            <OverlayTrigger
                                                                                                placement="top"
                                                                                                overlay={<Tooltip>Maximum amount the insurance company will pay you in case of loss due to defined liability.</Tooltip>}
                                                                                            >
                                                                                                {({ ref, ...triggerHandler }) => (
                                                                                                    <i className='tooltipIcon' {...triggerHandler}>
                                                                                                        <Image
                                                                                                            ref={ref}
                                                                                                            src={tooltipIcon}
                                                                                                            width="20"
                                                                                                            height="20"
                                                                                                            alt="Remark Icon"
                                                                                                        />
                                                                                                    </i>
                                                                                                )}
                                                                                            </OverlayTrigger>
                                                                                        </Form.Label>
                                                                                        <RadioIconRow>
                                                                                            <RadioIconCard
                                                                                                icon={maternityBenefitIcon1}
                                                                                                alt="No Maternity Benefits"
                                                                                                activeClass={maternityBenefitValue === '1' ? radioIconStyle.active : null}
                                                                                            >
                                                                                                <Form.Check
                                                                                                    type="radio"
                                                                                                    id="maternityBenefit-1"
                                                                                                    name="maternityBenefit"
                                                                                                    label="No Maternity Benefits"
                                                                                                    value="1"
                                                                                                    checked={maternityBenefitValue === '1'}
                                                                                                    onChange={handleChangeMaternityBenefit}
                                                                                                    required
                                                                                                    className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                />
                                                                                            </RadioIconCard>
                                                                                            <RadioIconCard
                                                                                                icon={maternityBenefitIcon2}
                                                                                                alt="25,000 for Normal & 35,000 for C- Section"
                                                                                                activeClass={maternityBenefitValue === '2' ? radioIconStyle.active : null}
                                                                                            >
                                                                                                <Form.Check
                                                                                                    type="radio"
                                                                                                    id="maternityBenefit-2"
                                                                                                    name="maternityBenefit"
                                                                                                    label="25,000 for Normal & 35,000 for C- Section"
                                                                                                    value="2"
                                                                                                    checked={maternityBenefitValue === '2'}
                                                                                                    onChange={handleChangeMaternityBenefit}
                                                                                                    required
                                                                                                    className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                />
                                                                                            </RadioIconCard>
                                                                                            <RadioIconCard
                                                                                                icon={maternityBenefitIcon3}
                                                                                                alt="35,000 for Normal & 50,000 for C- Section"
                                                                                                activeClass={maternityBenefitValue === '3' ? radioIconStyle.active : null}
                                                                                            >
                                                                                                <Form.Check
                                                                                                    type="radio"
                                                                                                    id="maternityBenefit-3"
                                                                                                    name="maternityBenefit"
                                                                                                    label="35,000 for Normal & 50,000 for C- Section"
                                                                                                    value="3"
                                                                                                    checked={maternityBenefitValue === '3'}
                                                                                                    onChange={handleChangeMaternityBenefit}
                                                                                                    required
                                                                                                    className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                />
                                                                                            </RadioIconCard>
                                                                                            <RadioIconCard
                                                                                                icon={maternityBenefitIcon4}
                                                                                                alt="50,000 for both Normal & C- Section"
                                                                                                activeClass={maternityBenefitValue === '4' ? radioIconStyle.active : null}
                                                                                            >
                                                                                                <Form.Check
                                                                                                    type="radio"
                                                                                                    id="maternityBenefit-4"
                                                                                                    name="maternityBenefit"
                                                                                                    label="50,000 for both Normal & C- Section"
                                                                                                    value="4"
                                                                                                    checked={maternityBenefitValue === '4'}
                                                                                                    onChange={handleChangeMaternityBenefit}
                                                                                                    required
                                                                                                    className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                />
                                                                                            </RadioIconCard>
                                                                                        </RadioIconRow>
                                                                                    </Form.Group>
                                                                                    <div className={`${form.fromButtonDiv}`}>
                                                                                        <Row className="g-4">
                                                                                            <Col md={6}>
                                                                                                <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`} type="button" onClick={handleEnterDetailsFourthToggle}>
                                                                                                    <LeftIcon />
                                                                                                    <span className='ms-2'>Go Back</span>
                                                                                                </Button>
                                                                                            </Col>
                                                                                            <Col>
                                                                                                <Button onClick={handleEnterDetailsFiveToggle} variant="primary" className={`w-100 btnCommon yellowBtn justify-content-center ${form.formBtn}`} type="button">
                                                                                                    <span className='me-2'>Continue</span>
                                                                                                    <RightIcon />
                                                                                                </Button>
                                                                                            </Col>
                                                                                        </Row>
                                                                                    </div>
                                                                                </Form>
                                                                            </div>
                                                                            <ProductFormFooter />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            ) : (
                                                                <>
                                                                    {isEnterDetailsSixActive ? (
                                                                        <Row className='g-4 g-xxl-5'>
                                                                            <Col xl={6} xxl={6}>
                                                                                <ProductFormContent
                                                                                    title="Optimal Hospitalization Charges"
                                                                                    description="Experience worry-free care with our all-inclusive hospital room package"
                                                                                    talkExpert="himani"
                                                                                />
                                                                            </Col>
                                                                            <Col xl={6} xxl={6}>
                                                                                <div className={`employeeBenefitForm ${form.commonForm} ${form.employeeBenefitForm}`}>
                                                                                    <div className={`${form.entrDtlsFormSix}`}>
                                                                                        <div className={`${form.frmBack}`}>
                                                                                            <Row className='align-items-center gap-4 gap-lg-2'>
                                                                                                <Col>
                                                                                                    <span className={`${form.frmBackText}`}>Enter your details</span>
                                                                                                </Col>
                                                                                                <Col md="auto">
                                                                                                    <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noLabel} ${progress.warning} ${progress.newProgress}`}>
                                                                                                        <ProgressBar now={78} />
                                                                                                    </div>
                                                                                                </Col>
                                                                                            </Row>
                                                                                        </div>
                                                                                        <div className={`${form.frmTtl}`}>
                                                                                            <h3>6. Room Rent Details</h3>
                                                                                        </div>
                                                                                        <Form>
                                                                                            <Form.Group className="mb-4">
                                                                                                <Form.Label htmlFor="sumInsured" className={`mb-4 ${form.formLabel}`}>
                                                                                                    <span>What kind of Room Rent works for you?</span>
                                                                                                    <OverlayTrigger
                                                                                                        placement="top"
                                                                                                        overlay={<Tooltip>Maximum amount the insurance company will pay you in case of loss due to defined liability.</Tooltip>}
                                                                                                    >
                                                                                                        {({ ref, ...triggerHandler }) => (
                                                                                                            <i className='tooltipIcon' {...triggerHandler}>
                                                                                                                <Image
                                                                                                                    ref={ref}
                                                                                                                    src={tooltipIcon}
                                                                                                                    width="20"
                                                                                                                    height="20"
                                                                                                                    alt="Remark Icon"
                                                                                                                />
                                                                                                            </i>
                                                                                                        )}
                                                                                                    </OverlayTrigger>
                                                                                                </Form.Label>
                                                                                                <RadioIconRow>
                                                                                                    <RadioIconCard
                                                                                                        icon={roomRentIcon1}
                                                                                                        alt="2% of Rs 5 Lac for Normal & 4% of Rs 5 Lac for ICU"
                                                                                                        activeClass={roomRentValue === '1' ? radioIconStyle.active : null}
                                                                                                    >
                                                                                                        <Form.Check
                                                                                                            type="radio"
                                                                                                            id="roomRent-1"
                                                                                                            name="roomRent"
                                                                                                            label="2% of Rs 5 Lac for Normal & 4% of Rs 5 Lac for ICU"
                                                                                                            value="1"
                                                                                                            checked={roomRentValue === '1'}
                                                                                                            onChange={handleChangeRoomRent}
                                                                                                            required
                                                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                        />
                                                                                                    </RadioIconCard>
                                                                                                    <RadioIconCard
                                                                                                        icon={roomRentIcon2}
                                                                                                        alt="1% of Rs 5 Lac for Normal & 2% of Rs 5 Lac for ICU"
                                                                                                        activeClass={roomRentValue === '2' ? radioIconStyle.active : null}
                                                                                                    >
                                                                                                        <Form.Check
                                                                                                            type="radio"
                                                                                                            id="roomRent-2"
                                                                                                            name="roomRent"
                                                                                                            label="1% of Rs 5 Lac for Normal & 2% of Rs 5 Lac for ICU"
                                                                                                            value="2"
                                                                                                            checked={roomRentValue === '2'}
                                                                                                            onChange={handleChangeRoomRent}
                                                                                                            required
                                                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                        />
                                                                                                    </RadioIconCard>
                                                                                                    <RadioIconCard
                                                                                                        icon={roomRentIcon3}
                                                                                                        alt="No Room Rent Capping"
                                                                                                        activeClass={roomRentValue === '3' ? radioIconStyle.active : null}
                                                                                                    >
                                                                                                        <Form.Check
                                                                                                            type="radio"
                                                                                                            id="roomRent-3"
                                                                                                            name="roomRent"
                                                                                                            label="No Room Rent Capping"
                                                                                                            value="3"
                                                                                                            checked={roomRentValue === '3'}
                                                                                                            onChange={handleChangeRoomRent}
                                                                                                            required
                                                                                                            className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                        />
                                                                                                    </RadioIconCard>
                                                                                                </RadioIconRow>
                                                                                            </Form.Group>
                                                                                            <div className={`${form.fromButtonDiv}`}>
                                                                                                <Row className="g-4">
                                                                                                    <Col md={6}>
                                                                                                        <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`} type="button" onClick={handleEnterDetailsFiveToggle}>
                                                                                                            <LeftIcon />
                                                                                                            <span className='ms-2'>Go Back</span>
                                                                                                        </Button>
                                                                                                    </Col>
                                                                                                    <Col>
                                                                                                        <Button onClick={handleEnterDetailsSixToggle} variant="primary" className={`w-100 btnCommon yellowBtn justify-content-center ${form.formBtn}`} type="button">
                                                                                                            <span className='me-2'>Continue</span>
                                                                                                            <RightIcon />
                                                                                                        </Button>
                                                                                                    </Col>
                                                                                                </Row>
                                                                                            </div>
                                                                                        </Form>
                                                                                    </div>
                                                                                    <ProductFormFooter />
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    ) : (
                                                                        <Row className='g-4 g-xxl-5'>
                                                                            <Col xl={6} xxl={6}>
                                                                                <ProductFormContent
                                                                                    title="First-time Policy Buyer?"
                                                                                    description="Get complete assistance throughout the process from insurance experts"
                                                                                    talkExpert="himani"
                                                                                />
                                                                            </Col>
                                                                            <Col xl={6} xxl={6}>
                                                                                <div className={`employeeBenefitForm ${form.commonForm} ${form.employeeBenefitForm}`}>
                                                                                    <div className={`${form.entrDtlsFormSeven}`}>
                                                                                        <div className={`${form.frmBack}`}>
                                                                                            <Row className='align-items-center gap-4 gap-lg-2'>
                                                                                                <Col>
                                                                                                    <span className={`${form.frmBackText}`}>Enter your details</span>
                                                                                                </Col>
                                                                                                <Col md="auto">
                                                                                                    <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noLabel} ${progress.warning} ${progress.newProgress}`}>
                                                                                                        <ProgressBar now={91} />
                                                                                                    </div>
                                                                                                </Col>
                                                                                            </Row>
                                                                                        </div>
                                                                                        <div className={`${form.frmTtl}`}>
                                                                                            <h3>7. Existing Policy Details</h3>
                                                                                        </div>
                                                                                        <Form>
                                                                                            <Form.Group className="mb-4">
                                                                                                <Form.Label htmlFor="existingPolicy" className={`mb-4 ${form.formLabel}`}>Buying poilicy for the first time?
                                                                                                    <OverlayTrigger
                                                                                                        placement="top"
                                                                                                        overlay={<Tooltip>Maximum amount the insurance company will pay you in case of loss due to defined liability.</Tooltip>}
                                                                                                    >
                                                                                                        {({ ref, ...triggerHandler }) => (
                                                                                                            <i className='tooltipIcon' {...triggerHandler}>
                                                                                                                <Image
                                                                                                                    ref={ref}
                                                                                                                    src={tooltipIcon}
                                                                                                                    width="20"
                                                                                                                    height="20"
                                                                                                                    alt="Remark Icon"
                                                                                                                />
                                                                                                            </i>
                                                                                                        )}
                                                                                                    </OverlayTrigger>
                                                                                                </Form.Label>
                                                                                                <RadioIconRow>
                                                                                                    <Row className="g-4">
                                                                                                        <Col xs={6}>
                                                                                                            <RadioIconCard
                                                                                                                activeClass={buyingPoilicyValue === 'Yes' ? radioIconStyle.active : null}
                                                                                                            >
                                                                                                                <Form.Check
                                                                                                                    type="radio"
                                                                                                                    id="buyingPoilicy-1"
                                                                                                                    name="buyingPoilicy"
                                                                                                                    label="Yes"
                                                                                                                    value="Yes"
                                                                                                                    checked={buyingPoilicyValue === 'Yes'}
                                                                                                                    onChange={handleChangeBuyingPolicy}
                                                                                                                    required
                                                                                                                    className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                                />
                                                                                                            </RadioIconCard>
                                                                                                        </Col>
                                                                                                        <Col xs={6}>
                                                                                                            <RadioIconCard
                                                                                                                activeClass={buyingPoilicyValue === 'No' ? radioIconStyle.active : null}
                                                                                                            >
                                                                                                                <Form.Check
                                                                                                                    type="radio"
                                                                                                                    id="buyingPoilicy-2"
                                                                                                                    name="buyingPoilicy"
                                                                                                                    label="No"
                                                                                                                    value="No"
                                                                                                                    checked={buyingPoilicyValue === 'No'}
                                                                                                                    onChange={handleChangeBuyingPolicy}
                                                                                                                    required
                                                                                                                    className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                                />
                                                                                                            </RadioIconCard>
                                                                                                        </Col>
                                                                                                    </Row>
                                                                                                </RadioIconRow>
                                                                                            </Form.Group>
                                                                                            {buyingPoilicyValue === 'No' ? (
                                                                                                <Form.Group className="mb-4">
                                                                                                    <Form.Label htmlFor="existingPolicy" className={`mb-4 ${form.formLabel}`}>Is there any claim in existing policy?
                                                                                                        <OverlayTrigger
                                                                                                            placement="top"
                                                                                                            overlay={<Tooltip>Maximum amount the insurance company will pay you in case of loss due to defined liability.</Tooltip>}
                                                                                                        >
                                                                                                            {({ ref, ...triggerHandler }) => (
                                                                                                                <i className='tooltipIcon' {...triggerHandler}>
                                                                                                                    <Image
                                                                                                                        ref={ref}
                                                                                                                        src={tooltipIcon}
                                                                                                                        width="20"
                                                                                                                        height="20"
                                                                                                                        alt="Remark Icon"
                                                                                                                    />
                                                                                                                </i>
                                                                                                            )}
                                                                                                        </OverlayTrigger>
                                                                                                    </Form.Label>
                                                                                                    <RadioIconRow>
                                                                                                        <Row className="g-4">
                                                                                                            <Col xs={6}>
                                                                                                                <RadioIconCard
                                                                                                                    activeClass={claimPolicyValue === 'Yes' ? radioIconStyle.active : null}
                                                                                                                >
                                                                                                                    <Form.Check
                                                                                                                        type="radio"
                                                                                                                        id="claimPolicy-1"
                                                                                                                        name="claimPolicy"
                                                                                                                        label="Yes"
                                                                                                                        value="Yes"
                                                                                                                        checked={claimPolicyValue === 'Yes'}
                                                                                                                        onChange={handleChangeClaimPolicy}
                                                                                                                        required
                                                                                                                        className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                                    />
                                                                                                                </RadioIconCard>
                                                                                                            </Col>
                                                                                                            <Col xs={6}>
                                                                                                                <RadioIconCard
                                                                                                                    activeClass={claimPolicyValue === 'No' ? radioIconStyle.active : null}
                                                                                                                >
                                                                                                                    <Form.Check
                                                                                                                        type="radio"
                                                                                                                        id="claimPolicy-2"
                                                                                                                        name="claimPolicy"
                                                                                                                        label="No"
                                                                                                                        value="No"
                                                                                                                        checked={claimPolicyValue === 'No'}
                                                                                                                        onChange={handleChangeClaimPolicy}
                                                                                                                        required
                                                                                                                        className={`${radioIconStyle.radioIconCheckox}`}
                                                                                                                    />
                                                                                                                </RadioIconCard>
                                                                                                            </Col>
                                                                                                        </Row>
                                                                                                    </RadioIconRow>
                                                                                                </Form.Group>
                                                                                            ) : (
                                                                                                null
                                                                                            )}
                                                                                            <div className={`${form.fromButtonDiv}`}>
                                                                                                <Row className="g-4">
                                                                                                    <Col md={6}>
                                                                                                        <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`} type="button" onClick={handleEnterDetailsSixToggle}>
                                                                                                            <LeftIcon />
                                                                                                            <span className='ms-2'>Go Back</span>
                                                                                                        </Button>
                                                                                                    </Col>
                                                                                                    <Col>
                                                                                                        <Button onClick={goToNextPage} variant="primary" className={`w-100 btnCommon yellowBtn justify-content-center ${form.formBtn}`} type="button">
                                                                                                            <span className='me-2'>Continue</span>
                                                                                                            <RightIcon />
                                                                                                        </Button>
                                                                                                    </Col>
                                                                                                </Row>
                                                                                            </div>
                                                                                        </Form>
                                                                                    </div>
                                                                                    <ProductFormFooter />
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    )}
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section >
            <FooterPlain
                insuranceType="employeeBenefit"
            />
        </>
    )
}
