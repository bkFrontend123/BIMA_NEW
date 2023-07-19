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

export default function CommercialCrime_Flow_Payment() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("userFlowBody")
    }, []);

    const [isBusinessDetails, setBusinessDetails] = useState(true);
    const handleBusinessDetailsToggle = () => {
        setBusinessDetails(!isBusinessDetails);
    };
    
    const [ccQuestion1Value, setCcQuestion1Value] = useState();
    const handleChangeCcQuestion1 = event => {
        setCcQuestion1Value(event.target.value);
    };

    const [ccQuestion2Value, setCcQuestion2Value] = useState();
    const handleChangeCcQuestion2 = event => {
        setCcQuestion2Value(event.target.value);
    };

    const [ccQuestion3Value, setCcQuestion3Value] = useState();
    const handleChangeCcQuestion3 = event => {
        setCcQuestion3Value(event.target.value);
    };

    const [ccQuestion4Value, setCcQuestion4Value] = useState();
    const handleChangeCcQuestion4 = event => {
        setCcQuestion4Value(event.target.value);
    };

    const [ccQuestion5Value, setCcQuestion5Value] = useState();
    const handleChangeCcQuestion5 = event => {
        setCcQuestion5Value(event.target.value);
    };

    const [ccQuestion6Value, setCcQuestion6Value] = useState();
    const handleChangeCcQuestion6 = event => {
        setCcQuestion6Value(event.target.value);
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
                                        <h3>For All Insurers</h3>
                                        {isBusinessDetails ? (
                                            <div className={`${form.addtnBsnDtlsFormFirst}`}>
                                                <Form>
                                                    <div className="mb-4">
                                                        <Row className='g-4 g-xl-5 align-items-center'>
                                                            <Col>
                                                                <Form.Label className={`m-0 ${form.formLabel}`}>Do you provide annual education to increase your users(employees) security awareness and to prepare users to be more resilient and vigilant against phishing</Form.Label>
                                                            </Col>
                                                            <Col lg={6} xl={5}>
                                                                <div className='text-lg-end'>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="ccQuestion1-1"
                                                                        name="ccQuestion1"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={ccQuestion1Value === 'Yes'}
                                                                        onChange={handleChangeCcQuestion1}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="ccQuestion1-2"
                                                                        name="ccQuestion1"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={ccQuestion1Value === 'No'}
                                                                        onChange={handleChangeCcQuestion1}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Row className='g-4 g-xl-5 align-items-center'>
                                                            <Col>
                                                                <Form.Label className={`${form.formLabel}`}>Do you use malware protection for all web-proxies, email-gateways, workstations and laptops</Form.Label>
                                                            </Col>
                                                            <Col lg={6} xl={5}>
                                                                <div className='text-lg-end'>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="ccQuestion2-1"
                                                                        name="ccQuestion2"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={ccQuestion2Value === 'Yes'}
                                                                        onChange={handleChangeCcQuestion2}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="ccQuestion2-2"
                                                                        name="ccQuestion2"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={ccQuestion2Value === 'No'}
                                                                        onChange={handleChangeCcQuestion2}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Row className='g-4 g-xl-5 align-items-center'>
                                                            <Col>
                                                                <Form.Label className={`${form.formLabel}`}>Do you perform at least weekly regular backups of business critical data</Form.Label>
                                                            </Col>
                                                            <Col lg={6} xl={5}>
                                                                <div className='text-lg-end'>
                                                                    <Form.Check
                                                                        inline
                                                                        type="radio"
                                                                        id="ccQuestion3-1"
                                                                        name="ccQuestion3"
                                                                        label="Yes"
                                                                        value="Yes"
                                                                        checked={ccQuestion3Value === 'Yes'}
                                                                        onChange={handleChangeCcQuestion3}
                                                                        className={`${form.formCheckRadio}`}
                                                                    />
                                                                    <Form.Check 
                                                                        inline
                                                                        type="radio"
                                                                        id="ccQuestion3-2"
                                                                        name="ccQuestion3"
                                                                        label="No"
                                                                        value="No"
                                                                        checked={ccQuestion3Value === 'No'}
                                                                        onChange={handleChangeCcQuestion3}
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
                                                <div className={`${form.addtnBsnDtlsFormSecond}`}>
                                                    <Form>
                                                        <div className="mb-4">
                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                <Col>
                                                                    <Form.Label className={`${form.formLabel}`}>Do you timely - at least within one month of release - apply updates to critical IT-systems and applications ("security patching)</Form.Label>
                                                                </Col>
                                                                <Col lg={6} xl={5}>
                                                                    <div className='text-lg-end'>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="ccQuestion9-1"
                                                                            name="ccQuestion9"
                                                                            label="Yes"
                                                                            value="Yes"
                                                                            checked={ccQuestion4Value === 'Yes'}
                                                                            onChange={handleChangeCcQuestion4}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="ccQuestion9-2"
                                                                            name="ccQuestion9"
                                                                            label="No"
                                                                            value="No"
                                                                            checked={ccQuestion4Value === 'No'}
                                                                            onChange={handleChangeCcQuestion4}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
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
                                                                            id="ccQuestion10-1"
                                                                            name="ccQuestion10"
                                                                            label="Yes"
                                                                            value="Yes"
                                                                            checked={ccQuestion5Value === 'Yes'}
                                                                            onChange={handleChangeCcQuestion5}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="ccQuestion10-2"
                                                                            name="ccQuestion10"
                                                                            label="No"
                                                                            value="No"
                                                                            checked={ccQuestion5Value === 'No'}
                                                                            onChange={handleChangeCcQuestion5}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <div className="mb-4">
                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                <Col>
                                                                    <Form.Label className={`${form.formLabel}`}>You have implemented a password policy enforcing the use of long and complex passwords across your organisation? Long and complex passwords are defined as: eight characters or more; not consisting of words included in dictionaries; free of consecutive identical, all-numeric or all-alphabetic characters.</Form.Label>
                                                                </Col>
                                                                <Col lg={6} xl={5}>
                                                                    <div className='text-lg-end'>
                                                                        <Form.Check
                                                                            inline
                                                                            type="radio"
                                                                            id="ccQuestion11-1"
                                                                            name="ccQuestion11"
                                                                            label="Yes"
                                                                            value="Yes"
                                                                            checked={ccQuestion6Value === 'Yes'}
                                                                            onChange={handleChangeCcQuestion6}
                                                                            className={`${form.formCheckRadio}`}
                                                                        />
                                                                        <Form.Check 
                                                                            inline
                                                                            type="radio"
                                                                            id="ccQuestion11-2"
                                                                            name="ccQuestion11"
                                                                            label="No"
                                                                            value="No"
                                                                            checked={ccQuestion6Value === 'No'}
                                                                            onChange={handleChangeCcQuestion6}
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
                                            </>
                                        )}
                                    </div>
                                </Col>
                                <Col lg="auto">
                                    <PaymentCard
                                        paymentIcon={paymentIcon}
                                        policyName="Commercial Crime Insurance"
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
