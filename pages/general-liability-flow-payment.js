import React, { useRef, useEffect, useState  } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import { Container, Row, Col, Form, Button, ProgressBar, ToastContainer } from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import PaymentCard from '../component/PolicyElements/PaymentCard'

import form from '@/assets/css/form.module.css'
import progress from '@/assets/css/progress.module.css'

import SubscribeArrow from '../component/Icons/SubscribeArrow';
import RuppeeIcon from '../component/Icons/Ruppee';
import paymentIcon from '../public/payment/bajajFinserv.png';

export default function GeneralLiability_Flow_Payment() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/thank-you');
    };

    return (
        <>
            <Head>
                <title>General Liability Insurance (CGL) | BimaKavach</title>
                <meta name="description" content="" />
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
                                        <div>
                                            <span>80% Complete</span>
                                            <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noRadiusProgress} ${progress.noLabel} ${progress.warning}`}>
                                                <ProgressBar now={80} />
                                            </div>
                                        </div>
                                        <p>Shield your business with certainty! Complete your profile now to unlock personalized coverage that fits your requirements.</p>
                                    </div>
                                    <div className={`${form.commonForm}`}>
                                        <h3>For All Insurers</h3>
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
                                                            <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={goToNextPage}>
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
                                    </div>
                                </Col>
                                <Col lg="auto">
                                    <PaymentCard
                                        paymentIcon={paymentIcon}
                                        policyName="Commercial General LiabilityInsurance"
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
