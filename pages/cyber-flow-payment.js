import React, { useRef, useEffect, useState  } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

import { Container, Row, Col, Form, Button, ProgressBar, ToastContainer } from 'react-bootstrap';

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import ToastCard from '../component/ToastCard'
import PaymentCard from '../component/PolicyElements/PaymentCard'

import form from '@/assets/css/form.module.css'
import progress from '@/assets/css/progress.module.css'

import UploadIcon from '../component/Icons/Upload';
import CheckIcon from '../component/Icons/Check';
import CloseIcon from '../component/Icons/Close';
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import paymentIcon from '../public/payment/bajajFinserv.png';

export default function Cyber_Flow_Payment() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("userFlowBody")
    }, []);

    const [isBusinessDetails, setBusinessDetails] = useState(true);
    const handleBusinessDetailsToggle = () => {
        setBusinessDetails(!isBusinessDetails);
    };

    const [isBusinessDetailsTwo, setBusinessDetailsTwo] = useState(true);
    const handleBusinessDetailsTwoToggle = () => {
        setBusinessDetailsTwo(!isBusinessDetailsTwo);
    };
    
    const [cyberQuestion1Value, setCyberQuestion1Value] = useState();
    const handleChangeCyberQuestion1 = event => {
        setCyberQuestion1Value(event.target.value);
    };

    const [cyberQuestion2Value, setCyberQuestion2Value] = useState();
    const handleChangeCyberQuestion2 = event => {
        setCyberQuestion2Value(event.target.value);
    };

    const [cyberQuestion3Value, setCyberQuestion3Value] = useState();
    const handleChangeCyberQuestion3 = event => {
        setCyberQuestion3Value(event.target.value);
    };

    const [cyberQuestion4Value, setCyberQuestion4Value] = useState();
    const handleChangeCyberQuestion4 = event => {
        setCyberQuestion4Value(event.target.value);
    };

    const [cyberQuestion5Value, setCyberQuestion5Value] = useState();
    const handleChangeCyberQuestion5 = event => {
        setCyberQuestion5Value(event.target.value);
    };

    const [cyberQuestion6Value, setCyberQuestion6Value] = useState();
    const handleChangeCyberQuestion6 = event => {
        setCyberQuestion6Value(event.target.value);
    };

    const [cyberQuestion7Value, setCyberQuestion7Value] = useState();
    const handleChangeCyberQuestion7 = event => {
        setCyberQuestion7Value(event.target.value);
    };

    const [cyberQuestion8Value, setCyberQuestion8Value] = useState();
    const handleChangeCyberQuestion8 = event => {
        setCyberQuestion8Value(event.target.value);
    };

    const [cyberQuestion9Value, setCyberQuestion9Value] = useState();
    const handleChangeCyberQuestion9 = event => {
        setCyberQuestion9Value(event.target.value);
    };

    const [cyberQuestion10Value, setCyberQuestion10Value] = useState();
    const handleChangeCyberQuestion10 = event => {
        setCyberQuestion10Value(event.target.value);
    };

    const [cyberQuestion11Value, setCyberQuestion11Value] = useState();
    const handleChangeCyberQuestion11 = event => {
        setCyberQuestion11Value(event.target.value);
    };

    const [cyberQuestion12Value, setCyberQuestion12Value] = useState();
    const handleChangeCyberQuestion12 = event => {
        setCyberQuestion12Value(event.target.value);
    };

    const [cyberQuestion13Value, setCyberQuestion13Value] = useState();
    const handleChangeCyberQuestion13 = event => {
        setCyberQuestion13Value(event.target.value);
    };
    

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/thank-you');
    };

    return (
        <>
            <HeaderPlain
                talkExpert="true"
            />
            <section className='paymentBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={10}>
                            <Row className='g-4 g-xl-5'>
                                <Col lg className='order2'>
                                    <div className={`mb-4 ${progress.pymntPrgrsDiv}`}>
                                        <span>20% Complete</span>
                                        <p>Shield your business with certainty! Complete your profile now to unlock personalized coverage that fits your requirements.</p>
                                    </div>
                                    <div className={`${form.commonForm}`}>
                                        {isBusinessDetails ? (
                                            <div className={`${form.addtnBsnDtlsFormFirst}`}>
                                                <Form>
                                                    <div className="mb-4">
                                                        <Row className='g-4 g-xl-5 align-items-center'>
                                                            <Col>
                                                                <Form.Label className={`m-0 ${form.formLabel}`}>Do you provide annual education to increase your users(employees) security awareness and to prepare users to be more resilient and vigilant against phishing?</Form.Label>
                                                            </Col>
                                                            <Col lg={6} xl={5}>
                                                                <div className='text-lg-end'>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="cyberQuestion1-1"
                                                                        name="cyberQuestion1"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={cyberQuestion1Value === 'Yes'}
                                                                        onChange={handleChangeCyberQuestion1}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="cyberQuestion1-2"
                                                                        name="cyberQuestion1"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={cyberQuestion1Value === 'No'}
                                                                        onChange={handleChangeCyberQuestion1}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Row className='g-4 g-xl-5 align-items-center'>
                                                            <Col>
                                                                <Form.Label className={`${form.formLabel}`}>Do you use malware protection for all web-proxies, email-gateways, workstations and laptops?</Form.Label>
                                                            </Col>
                                                            <Col lg={6} xl={5}>
                                                                <div className='text-lg-end'>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="cyberQuestion2-1"
                                                                        name="cyberQuestion2"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={cyberQuestion2Value === 'Yes'}
                                                                        onChange={handleChangeCyberQuestion2}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="cyberQuestion2-2"
                                                                        name="cyberQuestion2"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={cyberQuestion2Value === 'No'}
                                                                        onChange={handleChangeCyberQuestion2}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Row className='g-4 g-xl-5 align-items-center'>
                                                            <Col>
                                                                <Form.Label className={`${form.formLabel}`}>Do you perform at least weekly regular backups of business critical data?</Form.Label>
                                                            </Col>
                                                            <Col lg={6} xl={5}>
                                                                <div className='text-lg-end'>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="cyberQuestion3-1"
                                                                        name="cyberQuestion3"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={cyberQuestion3Value === 'Yes'}
                                                                        onChange={handleChangeCyberQuestion3}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="cyberQuestion3-2"
                                                                        name="cyberQuestion3"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={cyberQuestion3Value === 'No'}
                                                                        onChange={handleChangeCyberQuestion3}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Row className='g-4 g-xl-5 align-items-center'>
                                                            <Col>
                                                                <Form.Label className={`${form.formLabel}`}>Do you timely - at least within one month of release - apply updates to critical IT-systems and applications (security patching)?</Form.Label>
                                                            </Col>
                                                            <Col lg={6} xl={5}>
                                                                <div className='text-lg-end'>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="cyberQuestion4-1"
                                                                        name="cyberQuestion4"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={cyberQuestion4Value === 'Yes'}
                                                                        onChange={handleChangeCyberQuestion4}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="cyberQuestion4-2"
                                                                        name="cyberQuestion4"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={cyberQuestion4Value === 'No'}
                                                                        onChange={handleChangeCyberQuestion4}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <Row className='align-items-center'>
                                                        <Col>
                                                            <div className={`${form.fromButtonDiv}`}>
                                                                <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={handleBusinessDetailsToggle}>
                                                                    <span className='me-2'>Continue</span>
                                                                    <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                </Button>
                                                            </div>
                                                            <div className={`${form.frmftr} ${form.brownText} mt-4`}>
                                                                <p>Please Continue to complete your payment, fill your Proposal form, upload your documents so the issuing of policy can be initiated</p>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}></Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        ): (
                                            <>
                                                {isBusinessDetailsTwo ? (
                                                    <div className={`${form.addtnBsnDtlsFormSecond}`}>
                                                        <Form>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>Are all internet access points secured by appropriately configured firewalls?</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion5-1"
                                                                                name="cyberQuestion5"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion5Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion5}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion5-2"
                                                                                name="cyberQuestion5"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion5Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion5}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>Does the Company have an information security and privacy policy in place?</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion6-1"
                                                                                name="cyberQuestion6"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion6Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion6}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion6-2"
                                                                                name="cyberQuestion6"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion6Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion6}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>Is the Company's business continuity plan formalized and tested?</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion7-1"
                                                                                name="cyberQuestion7"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion7Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion7}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion7-2"
                                                                                name="cyberQuestion7"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion7Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion7}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>Does the Company have antivirus software on all computer systems which are updated in accordance with the software providers' recommendations?</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion8-1"
                                                                                name="cyberQuestion8"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion8Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion8}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion8-2"
                                                                                name="cyberQuestion8"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion8Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion8}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <Row className='align-items-center'>
                                                                <Col>
                                                                    <div className={`${form.fromButtonDiv}`}>
                                                                        <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={handleBusinessDetailsTwoToggle}>
                                                                            <span className='me-2'>Continue</span>
                                                                            <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                        </Button>
                                                                    </div>
                                                                    <div className={`${form.frmftr} ${form.brownText} mt-4`}>
                                                                        <p>Please Continue to complete your payment, fill your Proposal form, upload your documents so the issuing of policy can be initiated</p>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}></Col>
                                                            </Row>
                                                        </Form>
                                                    </div>
                                                ):(
                                                    <div className={`${form.addtnBsnDtlsFormThird}`}>
                                                        <Form>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>Are all employees assigned specified rights, privileges and unique user ID and passwords, which are changed periodically?</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion9-1"
                                                                                name="cyberQuestion9"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion9Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion9}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion9-2"
                                                                                name="cyberQuestion9"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion9Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion9}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>Does the Company terminate all associated computer system access and user accounts as part of the regular exit process when an employee leaves the company?</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion10-1"
                                                                                name="cyberQuestion10"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion10Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion10}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion6-2"
                                                                                name="cyberQuestion6"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion10Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion10}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>Are connections from laptop, mobile devices, and remote users into the Company's system secured?</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion11-1"
                                                                                name="cyberQuestion11"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion11Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion11}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion11-2"
                                                                                name="cyberQuestion11"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion11Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion11}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>Is all valuable and / or sensitive data backed-up by the Company every day?</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion12-1"
                                                                                name="cyberQuestion12"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion12Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion12}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion12-2"
                                                                                name="cyberQuestion12"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion12Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion12}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="mb-4">
                                                                <Row className='g-4 g-xl-5 align-items-center'>
                                                                    <Col>
                                                                        <Form.Label className={`${form.formLabel}`}>100% of your Revenue is from India Only</Form.Label>
                                                                    </Col>
                                                                    <Col lg={6} xl={5}>
                                                                        <div className='text-lg-end'>
                                                                            <Form.Check
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion13-1"
                                                                                name="cyberQuestion13"
                                                                                label="Yes"
                                                                                value="Yes"
                                                                                checked={cyberQuestion13Value === 'Yes'}
                                                                                onChange={handleChangeCyberQuestion13}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                            <Form.Check 
                                                                                inline
                                                                                type="radio"
                                                                                id="cyberQuestion13-2"
                                                                                name="cyberQuestion13"
                                                                                label="No"
                                                                                value="No"
                                                                                checked={cyberQuestion13Value === 'No'}
                                                                                onChange={handleChangeCyberQuestion13}
                                                                                className={`${form.formCheckRadio}`}
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <Row className='align-items-center'>
                                                                <Col>
                                                                    <div className={`${form.fromButtonDiv}`}>
                                                                        <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={goToNextPage}>
                                                                            <span className='me-2'>Submit</span>
                                                                            <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                        </Button>
                                                                    </div>
                                                                    <div className={`${form.frmftr} ${form.brownText} mt-4`}>
                                                                        <p>Please Continue to complete your payment, fill your Proposal form, upload your documents so the issuing of policy can be initiated</p>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}></Col>
                                                            </Row>
                                                        </Form>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </Col>
                                <Col lg="auto">
                                    <PaymentCard
                                        paymentIcon={paymentIcon}
                                        policyName="Product Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="35,000"
                                        gst="1,900"
                                        totalPremium="36,900"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterPlain />
        </>
    )
}
