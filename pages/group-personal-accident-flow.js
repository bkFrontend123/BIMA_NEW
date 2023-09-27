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

export default function GroupPersonalAccident_Flow() {
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

    const [indValue, setIndValue] = useState();
    const indCategoryOptions = [
        { name: 'Banking Finance and Insurance', value: '1' },
        { name: 'Computers, IT Services, Technology and Telecommunication', value: '2' },
        { name: 'Construction and Real Estate', value: '3' },
        { name: 'Manufacturing', value: '4' },
        { name: 'Advertising', value: '5' },
        { name: 'Medical & Pharmaceuticals', value: '6' },
    ];

    const [natureWorkValue, setNatureWorkValue] = useState();
    const natureWorkOptions = [
        { name: 'Accountant/Admin Staff', value: '1' },
        { name: 'Cook', value: '2' },
        { name: 'Consumer', value: '3' },
        { name: 'BFSI', value: '4' },
        { name: 'Enterprise Technology', value: '5' },
        { name: 'B2B Consulting', value: '6' },
    ];

    const [sumInsuredValue, setSumInsuredValue] = useState();
    const sumInsuredOptions = [
        {name: '1 Cr', value: '1'},
        {name: '2 Cr', value: '2'},
        {name: '3 Cr', value: '3'},
        {name: '4 Cr', value: '4'},
        {name: '5 Cr', value: '5'},
    ];

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
        router.push('/group-personal-accident-insurance');
    };
    const goToNextPage = () => {
        router.push('/thank-you');
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
                logo="gpa"
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
                                                                <ProgressBar now={20} />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className={`mb-3 ${form.frmTtl}`}>
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
                                                <div className='pe-lg-2 pe-xxl-4'>
                                                    <ProductFormContent
                                                        title="Coverage for Everyone"
                                                        description="Cover your workforce and their families from unwanted financial burden"
                                                        talkExpert="himani"
                                                    />
                                                </div>
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
                                                                        <ProgressBar now={40} />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <div className={`mb-3 ${form.frmTtl}`}>
                                                            <h3>2. Work Details</h3>
                                                        </div>
                                                        <Form>
                                                            <Form.Group className="mb-4">
                                                                <Form.Label htmlFor="coverDetails" className={`mb-0 ${form.formLabel}`}>
                                                                    <span>What is the nature of work?</span>
                                                                </Form.Label>
                                                            </Form.Group>
                                                            <Form.Group className={`selectDropDiv searchDropDiv mb-4 ${!natureWorkValue == '' ? 'selectedDropDiv' : null}`}>
                                                                <SelectSearch
                                                                    options={natureWorkOptions}
                                                                    name="natureWork"
                                                                    placeholder="Search by keyword"
                                                                    onChange={setNatureWorkValue}
                                                                    search
                                                                    value={natureWorkValue}
                                                                    required
                                                                />
                                                                <label>Nature of Work</label>
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
                                                        <div className='pe-lg-2 pe-xxl-4'>
                                                            <ProductFormContent
                                                                title="Space for All"
                                                                description="You can accommodate as many employees as you want"
                                                                talkExpert="himani"
                                                            />
                                                        </div>
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
                                                                                <ProgressBar now={60} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className={`mb-3 ${form.frmTtl}`}>
                                                                    <h3>3. Employee Details</h3>
                                                                </div>
                                                                <Form>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="employeeDetails" className={`${form.formLabel}`}>
                                                                            <span>Whom do you want to cover, and for how much?</span>
                                                                        </Form.Label>
                                                                    </Form.Group>
                                                                    <Form.Group className="floatFormGroup mb-4">
                                                                        <FloatingLabel controlId="employees" label="Total Number of Employees" >
                                                                            <Form.Control className={`${form.formInput}`} type="number" placeholder="Eg: 10" required />
                                                                        </FloatingLabel>
                                                                    </Form.Group>
                                                                    <Form.Group className={`selectDropDiv mb-4 ${!sumInsuredValue == '' ? 'selectedDropDiv' : null}`}>
                                                                        <SelectSearch
                                                                            options={sumInsuredOptions}
                                                                            name="sumInsuredValue"
                                                                            placeholder="&nbsp;"
                                                                            onChange={setSumInsuredValue}
                                                                            value={sumInsuredValue}
                                                                            required
                                                                        />
                                                                        <label>Sum Insured per Person</label>
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
                                                <Row className='g-4 g-xxl-5'>
                                                    <Col xl={6} xxl={6}>
                                                        <div className='pe-lg-2 pe-xxl-4'>
                                                            <ProductFormContent
                                                                title="First-time Policy Buyer?"
                                                                description="Get complete assistance throughout the process from insurance experts"
                                                                talkExpert="himani"
                                                            />
                                                        </div>
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
                                                                                <ProgressBar now={80} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className={`mb-3 ${form.frmTtl}`}>
                                                                    <h3>4. Existing Policy Details</h3>
                                                                </div>
                                                                <Form>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label htmlFor="existingPolicy" className={`${form.formLabel}`}>
                                                                            <span>Buying poilicy for the first time?</span>
                                                                        </Form.Label>
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-4">
                                                                        <RadioIconRow>
                                                                            <Row className="g-4">
                                                                                <Col md={6}>
                                                                                    <RadioIconCard activeClass={buyingPoilicyValue === 'Yes' ? radioIconStyle.active : null}>
                                                                                        <Form.Check type="radio" id="buyingPoilicy-1" name="buyingPoilicy" label="Yes" value="Yes"
                                                                                            checked={buyingPoilicyValue === 'Yes'} onChange={handleChangeBuyingPolicy} required
                                                                                            className={`${radioIconStyle.radioIconCheckox}`} />
                                                                                    </RadioIconCard>
                                                                                </Col>
                                                                                <Col md={6}>
                                                                                    <RadioIconCard activeClass={buyingPoilicyValue === 'No' ? radioIconStyle.active : null}>
                                                                                        <Form.Check type="radio" id="buyingPoilicy-2" name="buyingPoilicy" label="No" value="No"
                                                                                            checked={buyingPoilicyValue === 'No'} onChange={handleChangeBuyingPolicy} required
                                                                                            className={`${radioIconStyle.radioIconCheckox}`} />
                                                                                    </RadioIconCard>
                                                                                </Col>
                                                                            </Row>
                                                                        </RadioIconRow>
                                                                    </Form.Group>
                                                                    {buyingPoilicyValue === 'No' ? (
                                                                        <>
                                                                            <Form.Group className="mb-4">
                                                                                <Form.Label htmlFor="existingPolicy" className={`mb-4 ${form.formLabel}`}>Is there any claim in existing
                                                                                    policy?</Form.Label>
                                                                            </Form.Group>
                                                                            <Form.Group className="mb-4">
                                                                                <Row className="g-4">
                                                                                    <Col md={6}>
                                                                                        <RadioIconCard activeClass={claimPolicyValue === 'Yes' ? radioIconStyle.active : null}>
                                                                                            <Form.Check type="radio" id="claimPolicy-1" name="claimPolicy" label="Yes" value="Yes"
                                                                                                checked={claimPolicyValue === 'Yes'} onChange={handleChangeClaimPolicy} required
                                                                                                className={`${radioIconStyle.radioIconCheckox}`} />
                                                                                        </RadioIconCard>
                                                                                    </Col>
                                                                                    <Col md={6}>
                                                                                        <RadioIconCard activeClass={claimPolicyValue === 'No' ? radioIconStyle.active : null}>
                                                                                            <Form.Check type="radio" id="claimPolicy-2" name="claimPolicy" label="No" value="No"
                                                                                                checked={claimPolicyValue === 'No'} onChange={handleChangeClaimPolicy} required
                                                                                                className={`${radioIconStyle.radioIconCheckox}`} />
                                                                                        </RadioIconCard>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Form.Group>
                                                                        </>
                                                                    ) : (
                                                                        null
                                                                    )}
                                                                    <div className={`${form.fromButtonDiv}`}>
                                                                        <Row className="g-4">
                                                                            <Col md={6}>
                                                                                <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`}
                                                                                    type="button" onClick={handleEnterDetailsThirdToggle}>
                                                                                    <LeftIcon />
                                                                                    <span className='ms-2'>Go Back</span>
                                                                                </Button>
                                                                            </Col>
                                                                            <Col>
                                                                                <Button onClick={goToNextPage} variant="primary" className={`w-100 btnCommon yellowBtn
                                                                                        justify-content-center ${form.formBtn}`} type="button">
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
