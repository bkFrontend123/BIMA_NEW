import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import { Container, Row, Col, Form, ProgressBar } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProposalFormNav from '@/component/ProposalFormElements/ProposalFormNav'
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem"
import PaymentCard from '@/component/PolicyElements/PaymentCard'

import BackArrow from '@/component/Icons/BackArrow'
import ArrowForwardIcon from '@/component/Icons/ArrowForward'

import paymentIcon from '@/public/payment/bajajFinserv.webp'

import form from '@/assets/css/form.module.css'
import progress from '@/assets/css/progress.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css'

export default function Checkout_One() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const [qualificationValue, setQualificationValue] = useState();
    const handleChangeQualification = event => {
        setQualificationValue(event.target.value);
    };
    
    const [resignationValue, setResignationValue] = useState();
    const handleChangeResignation = event => {
        setResignationValue(event.target.value);
    };

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/checkout/2');
    };

    return (
        <>
            <Head>
                <title>Directors & Officers Insurance | BimaKavach</title>
                <meta name="description" content="Avail the customized insurance quote from top insurers in minutes. Business insurance in minutes." />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                talkExpert="true"
                talkExpertIcon="true"
            />
            <section className='paymentBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={11}>
                            <ProposalFormNav
                                page="1"
                            />
                            <Row className='g-4 g-xl-5'>
                                <Col lg={8} className='order2'>
                                    <div className="d-flex mb-4">
                                        <Link
                                            href={"/all_policies"}
                                            className="btnCommon btnSmall btnBorder border-primary d-flex justify-content-center"
                                        >
                                            <BackArrow
                                                iconColor="primary"
                                                width="22"
                                                height="8"
                                            />
                                            <span className="ms-2">Back to Quotes</span>
                                        </Link>
                                    </div>
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
                                        <h3>ICICI Lombard & SBI General Insurance</h3>
                                        <div className={`${form.addtnBsnDtlsFormFirst}`}>
                                            <Form>
                                                <div className="mb-4">
                                                    <Row className='g-4 g-xl-5 align-items-center'>
                                                        <Col>
                                                            <Form.Label className={`m-0 ${form.formLabel}`}>No Auditor Qualification in the latest audited financial report</Form.Label>
                                                        </Col>
                                                        <Col lg={6} xl={5}>
                                                            <div className='text-lg-end'>
                                                                <Form.Check
                                                                    inline
                                                                    type="radio"
                                                                    id="qualification-1"
                                                                    name="qualification"
                                                                    label="Yes"
                                                                    value="Yes"
                                                                    checked={qualificationValue === 'Yes'}
                                                                    onChange={handleChangeQualification}
                                                                    className={`${form.formCheckRadio}`}
                                                                />
                                                                <Form.Check 
                                                                    inline
                                                                    type="radio"
                                                                    id="qualification-2"
                                                                    name="qualification"
                                                                    label="No"
                                                                    value="No"
                                                                    checked={qualificationValue === 'No'}
                                                                    onChange={handleChangeQualification}
                                                                    className={`${form.formCheckRadio}`}
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="mb-4">
                                                    <Row className='g-4 g-xl-5 align-items-center'>
                                                        <Col>
                                                            <Form.Label className={`${form.formLabel}`}>No scenario of resignation of equal to or more than 3 directors in past one year?</Form.Label>
                                                        </Col>
                                                        <Col lg={6} xl={5}>
                                                            <div className='text-lg-end'>
                                                                <Form.Check
                                                                    inline
                                                                    type="radio"
                                                                    id="resignation-1"
                                                                    name="resignation"
                                                                    label="Yes"
                                                                    value="Yes"
                                                                    checked={resignationValue === 'Yes'}
                                                                    onChange={handleChangeResignation}
                                                                    className={`${form.formCheckRadio}`}
                                                                />
                                                                <Form.Check 
                                                                    inline
                                                                    type="radio"
                                                                    id="resignation-2"
                                                                    name="resignation"
                                                                    label="No"
                                                                    value="No"
                                                                    checked={resignationValue === 'No'}
                                                                    onChange={handleChangeResignation}
                                                                    className={`${form.formCheckRadio}`}
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className={`${form.fromButtonDiv}`}>
                                                    <div className='d-flex align-items-center justify-content-between gap-2'>
                                                        <Col sm></Col>
                                                        <Col sm="auto">
                                                            <ButtonItem
                                                                title="Submit"
                                                                type="button"
                                                                iconPosition="right"
                                                                customClass={`w-100 m-0 px-2 mt-3 ${buttonStyle.btnDark} ${buttonStyle.btnBig} ${buttonStyle.minWidth2}`}
                                                                onClick={goToNextPage}
                                                            >
                                                                <ArrowForwardIcon />
                                                            </ButtonItem>
                                                        </Col>
                                                    </div>
                                                </div>
                                                <div className={`${form.frmftr} ${form.brownText} mt-4`}>
                                                    <p>Please Continue to complete your payment, fill your Proposal form, upload your documents so the issuing of policy can be initiated</p>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <PaymentCard
                                        paymentIcon={paymentIcon}
                                        policyName="Directors & Officers Liability Insurance"
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
