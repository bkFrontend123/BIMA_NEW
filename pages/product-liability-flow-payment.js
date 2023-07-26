import React, { useRef, useEffect, useState  } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import { Container, Row, Col, Form, Button, ProgressBar, ToastContainer } from 'react-bootstrap';

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import ToastCard from '../component/ToastCard'
import PaymentCard from '../component/PolicyElements/PaymentCard'

import form from '@/assets/css/form.module.css'
import progress from '@/assets/css/progress.module.css'

import SubscribeArrow from '../component/Icons/SubscribeArrow';
import RuppeeIcon from '../component/Icons/Ruppee';
import paymentIcon from '../public/payment/bajajFinserv.png';

export default function ProductLiability_Flow_Payment() {
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

    const [isBusinessDetailsThree, setBusinessDetailsThree] = useState(true);
    const handleBusinessDetailsThreeToggle = () => {
        setBusinessDetailsThree(!isBusinessDetailsThree);
    };
    
    const [plQuestion1Value, setPlQuestion1Value] = useState();
    const handleChangeplQuestion1 = event => {
        setPlQuestion1Value(event.target.value);
    };

    const [plQuestion2Value, setPlQuestion2Value] = useState();
    const handleChangeplQuestion2 = event => {
        setPlQuestion2Value(event.target.value);
    };

    const [plQuestion3Value, setPlQuestion3Value] = useState();
    const handleChangeplQuestion3 = event => {
        setPlQuestion3Value(event.target.value);
    };

    const [plQuestion4Value, setPlQuestion4Value] = useState();
    const handleChangeplQuestion4 = event => {
        setPlQuestion4Value(event.target.value);
    };

    const [plQuestion5Value, setPlQuestion5Value] = useState();
    const handleChangeplQuestion5 = event => {
        setPlQuestion5Value(event.target.value);
    };

    const [plQuestion6Value, setPlQuestion6Value] = useState();
    const handleChangeplQuestion6 = event => {
        setPlQuestion6Value(event.target.value);
    };

    const [plQuestion7Value, setPlQuestion7Value] = useState();
    const handleChangeplQuestion7 = event => {
        setPlQuestion7Value(event.target.value);
    };

    const [plQuestion8Value, setPlQuestion8Value] = useState();
    const handleChangeplQuestion8 = event => {
        setPlQuestion8Value(event.target.value);
    };

    const [plQuestion9Value, setPlQuestion9Value] = useState();
    const handleChangeplQuestion9 = event => {
        setPlQuestion9Value(event.target.value);
    };

    const [plQuestion10Value, setPlQuestion10Value] = useState();
    const handleChangeplQuestion10 = event => {
        setPlQuestion10Value(event.target.value);
    };

    const [plQuestion11Value, setPlQuestion11Value] = useState();
    const handleChangeplQuestion11 = event => {
        setPlQuestion11Value(event.target.value);
    };

    const [plQuestion12Value, setPlQuestion12Value] = useState();
    const handleChangeplQuestion12 = event => {
        setPlQuestion12Value(event.target.value);
    };
    

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/thank-you');
    };

    return (
        <>
            <Head>
                <title>Product Liability Insurance | BimaKavach</title>
                <meta name="description" content="Avail the customized insurance quote from top insurers in minutes. Business insurance in minutes." />
                <link rel="canonical" href="" />
            </Head>
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
                                            <>
                                                <div className={`${form.addtnBsnDtlsFormFirst}`}>
                                                    <div className={form.frmTtl}>
                                                        <h3>Please fill the below details to buy the Policy</h3>
                                                    </div>
                                                    <Form>
                                                        <div className={form.frmGrpTtl}>
                                                            <h4>Previous year Turnover</h4>
                                                        </div>
                                                        <Row className='g-4 align-items-center'>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>India</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>ROW excluding USA & Canada</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>USA & Canada</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <div className={form.frmGrpTtl}>
                                                            <h4>Current year Turnover</h4>
                                                        </div>
                                                        <Row className='gx-4 align-items-center'>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>India</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>ROW excluding USA & Canada</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>USA & Canada</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <div className={form.frmGrpTtl}>
                                                            <h4>Estimated next year Turnover</h4>
                                                        </div>
                                                        <Row className='gx-4 align-items-center'>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>India</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>ROW excluding USA & Canada</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group className={`mb-4 ${form.formIconGroup}`}>
                                                                    <Form.Label className={`${form.formLabel} ${form.formSmallLabel} ${form.formLabelGrey}`}>USA & Canada</Form.Label>
                                                                    <Form.Control className={`${form.formInput}`} type="text" placeholder='&nbsp;' />
                                                                    <i><RuppeeIcon width="10" height="15" /></i>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
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
                                                            <Col lg={4}>
                                                            
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                            </>
                                        ): (
                                            <>
                                                {isBusinessDetailsTwo ? (
                                                    <>
                                                        <div className={`${form.addtnBsnDtlsFormSecond}`}>
                                                            <Form>
                                                                <div className="mb-4">
                                                                    <Row className='g-4 g-xl-5 align-items-center'>
                                                                        <Col>
                                                                            <Form.Label className={`m-0 ${form.formLabel}`}>Do you comply with satutory provisions, rules and regulations in respect of the products manufactured /distributed/sold by you?</Form.Label>
                                                                        </Col>
                                                                        <Col lg={6} xl={5}>
                                                                            <div className='text-lg-end'>
                                                                                <Form.Check
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="plQuestion1-1"
                                                                                    name="plQuestion1"
                                                                                    label="Yes"
                                                                                    value="Yes"
                                                                                    checked={plQuestion1Value === 'Yes'}
                                                                                    onChange={handleChangeplQuestion1}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                />
                                                                                <Form.Check 
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="plQuestion1-2"
                                                                                    name="plQuestion1"
                                                                                    label="No"
                                                                                    value="No"
                                                                                    checked={plQuestion1Value === 'No'}
                                                                                    onChange={handleChangeplQuestion1}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <Row className='g-4 g-xl-5 align-items-center'>
                                                                        <Col>
                                                                            <Form.Label className={`${form.formLabel}`}>Is each product subject to and do they conform with applicable country of export or international manufacturing and safety standards?</Form.Label>
                                                                        </Col>
                                                                        <Col lg={6} xl={5}>
                                                                            <div className='text-lg-end'>
                                                                                <Form.Check
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="plQuestion2-1"
                                                                                    name="plQuestion2"
                                                                                    label="Yes"
                                                                                    value="Yes"
                                                                                    checked={plQuestion2Value === 'Yes'}
                                                                                    onChange={handleChangeplQuestion2}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                />
                                                                                <Form.Check 
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="plQuestion2-2"
                                                                                    name="plQuestion2"
                                                                                    label="No"
                                                                                    value="No"
                                                                                    checked={plQuestion2Value === 'No'}
                                                                                    onChange={handleChangeplQuestion2}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <Row className='g-4 g-xl-5 align-items-center'>
                                                                        <Col>
                                                                            <Form.Label className={`${form.formLabel}`}>Do you have the quality certifications/ awards for your products? (like ISO 9002 etc.)</Form.Label>
                                                                        </Col>
                                                                        <Col lg={6} xl={5}>
                                                                            <div className='text-lg-end'>
                                                                                <Form.Check
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="plQuestion3-1"
                                                                                    name="plQuestion3"
                                                                                    label="Yes"
                                                                                    value="Yes"
                                                                                    checked={plQuestion3Value === 'Yes'}
                                                                                    onChange={handleChangeplQuestion3}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                />
                                                                                <Form.Check 
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="plQuestion3-2"
                                                                                    name="plQuestion3"
                                                                                    label="No"
                                                                                    value="No"
                                                                                    checked={plQuestion3Value === 'No'}
                                                                                    onChange={handleChangeplQuestion3}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <Row className='g-4 g-xl-5 align-items-center'>
                                                                        <Col>
                                                                            <Form.Label className={`${form.formLabel}`}>Checks or examinations or conttrols including batch control and testing carried out or effected to discover possible defects or errors in products?</Form.Label>
                                                                        </Col>
                                                                        <Col lg={6} xl={5}>
                                                                            <div className='text-lg-end'>
                                                                                <Form.Check
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="plQuestion4-1"
                                                                                    name="plQuestion4"
                                                                                    label="Yes"
                                                                                    value="Yes"
                                                                                    checked={plQuestion4Value === 'Yes'}
                                                                                    onChange={handleChangeplQuestion4}
                                                                                    className={`${form.formCheckRadio}`}
                                                                                />
                                                                                <Form.Check 
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="plQuestion4-2"
                                                                                    name="plQuestion4"
                                                                                    label="No"
                                                                                    value="No"
                                                                                    checked={plQuestion4Value === 'No'}
                                                                                    onChange={handleChangeplQuestion4}
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
                                                    </>
                                                ):(
                                                    <>
                                                        {isBusinessDetailsThree ? (
                                                            <>
                                                                <div className={`${form.addtnBsnDtlsFormThird}`}>
                                                                    <Form>
                                                                        <div className="mb-4">
                                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                                <Col>
                                                                                    <Form.Label className={`${form.formLabel}`}>Do you have complaints, incident/ accident reporting system in place in your organization?</Form.Label>
                                                                                </Col>
                                                                                <Col lg={6} xl={5}>
                                                                                    <div className='text-lg-end'>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion5-1"
                                                                                            name="plQuestion5"
                                                                                            label="Yes"
                                                                                            value="Yes"
                                                                                            checked={plQuestion5Value === 'Yes'}
                                                                                            onChange={handleChangeplQuestion5}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                        <Form.Check 
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion5-2"
                                                                                            name="plQuestion5"
                                                                                            label="No"
                                                                                            value="No"
                                                                                            checked={plQuestion5Value === 'No'}
                                                                                            onChange={handleChangeplQuestion5}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <div className="mb-4">
                                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                                <Col>
                                                                                    <Form.Label className={`${form.formLabel}`}>Is there a adequate Quality Control Program, inspection or test procedure in place?</Form.Label>
                                                                                </Col>
                                                                                <Col lg={6} xl={5}>
                                                                                    <div className='text-lg-end'>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion6-1"
                                                                                            name="plQuestion6"
                                                                                            label="Yes"
                                                                                            value="Yes"
                                                                                            checked={plQuestion6Value === 'Yes'}
                                                                                            onChange={handleChangeplQuestion6}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                        <Form.Check 
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion6-2"
                                                                                            name="plQuestion6"
                                                                                            label="No"
                                                                                            value="No"
                                                                                            checked={plQuestion6Value === 'No'}
                                                                                            onChange={handleChangeplQuestion6}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <div className="mb-4">
                                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                                <Col>
                                                                                    <Form.Label className={`${form.formLabel}`}>Are products labeled and supplied with clear instructions in the language of the country to which they are supplied?</Form.Label>
                                                                                </Col>
                                                                                <Col lg={6} xl={5}>
                                                                                    <div className='text-lg-end'>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion7-1"
                                                                                            name="plQuestion7"
                                                                                            label="Yes"
                                                                                            value="Yes"
                                                                                            checked={plQuestion7Value === 'Yes'}
                                                                                            onChange={handleChangeplQuestion7}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                        <Form.Check 
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion7-2"
                                                                                            name="plQuestion7"
                                                                                            label="No"
                                                                                            value="No"
                                                                                            checked={plQuestion7Value === 'No'}
                                                                                            onChange={handleChangeplQuestion7}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <div className="mb-4">
                                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                                <Col>
                                                                                    <Form.Label className={`${form.formLabel}`}>Have your products ever been subject to any enquiry or investigation by any Government agency, concerning the efficiency/adequacy or labeling, hazardous contents or safety?</Form.Label>
                                                                                </Col>
                                                                                <Col lg={6} xl={5}>
                                                                                    <div className='text-lg-end'>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion8-1"
                                                                                            name="plQuestion8"
                                                                                            label="Yes"
                                                                                            value="Yes"
                                                                                            checked={plQuestion8Value === 'Yes'}
                                                                                            onChange={handleChangeplQuestion8}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                        <Form.Check 
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion8-2"
                                                                                            name="plQuestion8"
                                                                                            label="No"
                                                                                            value="No"
                                                                                            checked={plQuestion8Value === 'No'}
                                                                                            onChange={handleChangeplQuestion8}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <Row className='align-items-center'>
                                                                            <Col>
                                                                                <div className={`${form.fromButtonDiv}`}>
                                                                                    <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={handleBusinessDetailsThreeToggle}>
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
                                                            </>
                                                        ):(
                                                            <>
                                                                <div className={`${form.addtnBsnDtlsFormFourth}`}>
                                                                    <Form>
                                                                        <div className="mb-4">
                                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                                <Col>
                                                                                    <Form.Label className={`${form.formLabel}`}>Have any of your products been discountined or recalled or withdrawan during the last five years?</Form.Label>
                                                                                </Col>
                                                                                <Col lg={6} xl={5}>
                                                                                    <div className='text-lg-end'>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion9-1"
                                                                                            name="plQuestion9"
                                                                                            label="Yes"
                                                                                            value="Yes"
                                                                                            checked={plQuestion9Value === 'Yes'}
                                                                                            onChange={handleChangeplQuestion9}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                        <Form.Check 
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion9-2"
                                                                                            name="plQuestion9"
                                                                                            label="No"
                                                                                            value="No"
                                                                                            checked={plQuestion9Value === 'No'}
                                                                                            onChange={handleChangeplQuestion9}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <div className="mb-4">
                                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                                <Col>
                                                                                    <Form.Label className={`${form.formLabel}`}>Do you have any assets and / or representation and / or any domiciled operation and/or activities and/or association (Financial, Technical or otherwise) in USA/Canada and other foreign countries?</Form.Label>
                                                                                </Col>
                                                                                <Col lg={6} xl={5}>
                                                                                    <div className='text-lg-end'>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion10-1"
                                                                                            name="plQuestion10"
                                                                                            label="Yes"
                                                                                            value="Yes"
                                                                                            checked={plQuestion10Value === 'Yes'}
                                                                                            onChange={handleChangeplQuestion10}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                        <Form.Check 
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion10-2"
                                                                                            name="plQuestion10"
                                                                                            label="No"
                                                                                            value="No"
                                                                                            checked={plQuestion10Value === 'No'}
                                                                                            onChange={handleChangeplQuestion10}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <div className="mb-4">
                                                                            <Row className='g-4 g-xl-5 align-items-center'>
                                                                                <Col>
                                                                                    <Form.Label className={`${form.formLabel}`}>Do you have any manufacturing facilities in North America? VENDOR'S PLANTS</Form.Label>
                                                                                </Col>
                                                                                <Col lg={6} xl={5}>
                                                                                    <div className='text-lg-end'>
                                                                                        <Form.Check
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion11-1"
                                                                                            name="plQuestion11"
                                                                                            label="Yes"
                                                                                            value="Yes"
                                                                                            checked={plQuestion11Value === 'Yes'}
                                                                                            onChange={handleChangeplQuestion11}
                                                                                            className={`${form.formCheckRadio}`}
                                                                                        />
                                                                                        <Form.Check 
                                                                                            inline
                                                                                            type="radio"
                                                                                            id="plQuestion11-2"
                                                                                            name="plQuestion11"
                                                                                            label="No"
                                                                                            value="No"
                                                                                            checked={plQuestion11Value === 'No'}
                                                                                            onChange={handleChangeplQuestion11}
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
                                                    </>
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
