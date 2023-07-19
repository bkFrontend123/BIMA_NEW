import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

import {Container, Row, Col, Form, Button, ProgressBar} from 'react-bootstrap';

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import ProductFormContent from '../component/ProductForm/ProductFormContent'
import TalkExpert from '../component/TalkExpert'
import RatingCard from '../component/RatingCard'

import form from '@/assets/css/form.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'
import progress from '@/assets/css/progress.module.css'

import productIcon from '../public/startup1.svg'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import arrowBack from '../public/icons/arrowBack.svg'
import WhatsApp from '../component/Icons/WhatsApp'

export default function directors_officers_form() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("userFlowBody")
    }, []);

    const [isOtpActive, setOtpActive] = useState(true);
    
    const handleOtpToggle = () => {
        setOtpActive(!isOtpActive);
    };

    const router = useRouter();
    const goToAllPolicy = () => {
        router.push('/all_policies');
    };
    return (
        <>
            <HeaderPlain
                scheduleCall="true"
            />
            <section className='productFormBlock sectionPadding'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11}>
                            <Row className='g-4'>
                                <Col lg={7}>
                                    <div className='pe-lg-4 pe-xl-5'>
                                        <ProductFormContent
                                            icon={productIcon}
                                            icon_alt=""
                                            title="Directors & Officers Liability Insurance"
                                            description="Completely Immune to Fraud and Crime. Said No Business Ever "
                                            listText1="Trusted by 340 businesses"
                                            listText2="Policy in Minutes"
                                            listText3="All your policies on one platform"
                                        />
                                        <hr className='d-none d-md-block my-3 my-xxl-4'></hr>
                                        <div className={`d-none d-md-block align-items-center justify-content-between gap-3`}>
                                            {/*<TalkExpert />
                                            <div className={`d-flex mt-4 mt-md-0`}>
                                                <Link href="/" className="btnCommon btnBorder border-primary">
                                                    <WhatsApp iconColor="primary" width="18" height="18" />
                                                    <span className='ms-2'>Talk to an expert</span>
                                                </Link>
                                            </div>*/}
                                            <RatingCard
                                                reviews="400"
                                                stars="4.5"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div className={`${form.whiteFormBox} ${form.commonForm}`}>
                                        {isOtpActive ? (
                                            <div className={`${form.otpForm}`}>
                                                <div className={`${form.frmBack}`}>
                                                    <Link href='' className={`${form.frmBackLink}`}>
                                                        <Image src={arrowBack} alt="Back Arrow" /> Enter OTP sent on <span>9876543210</span>
                                                    </Link>
                                                </div>
                                                <Form>
                                                    <Form.Group className="mb-4">
                                                        <Form.Control className={`${form.formInput}`} type="text" placeholder="Enter OTP" />
                                                    </Form.Group>
                                                    <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                        <Button variant="primary" className='btnCommon yellowBtn' type="button" onClick={handleOtpToggle}>
                                                            <span className='me-2'>Submit</span>
                                                            <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </div>
                                        ): (
                                            <>
                                                <div className={`${form.entrDtlsFormSecond}`}>
                                                    <div className={`${form.frmBack}`}>
                                                        <Row className='align-items-center gap-2'>
                                                            <Col>
                                                                <Link href='' className={`${form.frmBackLink}`} onClick={handleOtpToggle}>
                                                                    <Image src={arrowBack} alt="Back Arrow" /> Your business details
                                                                </Link>
                                                            </Col>
                                                            <Col md="auto">
                                                                <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noRadiusProgress} ${progress.noLabel} ${progress.warning}`}>
                                                                    <ProgressBar now={50} />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <Form>
                                                        <Form.Group className="mb-4">
                                                            <Form.Select className={`${form.formSelect}`}>
                                                                <option>Industry Type</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group className="mb-4">
                                                            <Form.Select className={`${form.formSelect}`}>
                                                                <option>Limit of liability required</option>
                                                                <option>INR 50 Lacs</option>
                                                                <option>INR 1 Crores</option>
                                                                <option>INR 2 Crores</option>
                                                                <option>INR 3 Crores</option>
                                                                <option>INR 5 Crores</option>
                                                                <option>INR 7.5 Crores</option>
                                                                <option>INR 8 Crores</option>
                                                                <option>INR 10 Crores</option>
                                                                <option>INR 12 Crores</option>
                                                                <option>INR 15 Crores</option> 
                                                                <option>INR 16 Crores </option>
                                                                <option>16 Crores and Above</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group className="mb-4">
                                                            <Form.Select className={`${form.formSelect}`}>
                                                                <option>Annual Turnover of your company?</option>
                                                                <option>INR 0-200 Crores</option>
                                                                <option>INR 200-250 Crores</option>
                                                                <option>INR 250-700 Crores</option>
                                                                <option>700 Crores and Above</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <div className="mb-4">
                                                            <div className={`${form.formCheckLabel}`}>Buying poilicy for the first time?</div>
                                                            <Form.Check
                                                                inline
                                                                type="radio"
                                                                id="buyingFirstTime-1"
                                                                name="buyingFirstTime"
                                                                label="Yes"
                                                                className={`${form.formCheckRadio}`}
                                                            />
                                                            <Form.Check 
                                                                inline
                                                                type="radio"
                                                                id="buyingFirstTime-2"
                                                                name="buyingFirstTime"
                                                                label="No"
                                                                className={`${form.formCheckRadio}`}
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <div className={`${form.formCheckLabel}`}>Is there any calims in last 5 Years?</div>
                                                            <Form.Check
                                                                inline
                                                                type="radio"
                                                                id="calims-1"
                                                                name="calims"
                                                                label="Yes"
                                                                className={`${form.formCheckRadio}`}
                                                            />
                                                            <Form.Check 
                                                                inline
                                                                type="radio"
                                                                id="calims-2"
                                                                name="calims"
                                                                label="No"
                                                                className={`${form.formCheckRadio}`}
                                                            />
                                                        </div>
                                                        <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                            <Button onClick={goToAllPolicy} variant="primary" className='btnCommon yellowBtn' type="button">
                                                                <span className='me-2'>Continue</span>
                                                                <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                </div> 
                                            </>
                                        )}
                                        <div className={`${form.frmftr}`}>
                                            <p>By clicking on "Submit", you agree to our <Link href='/'>Privacy Policy</Link> and <Link href='/'>Terms of Use</Link> , and also provide us a formal mandate to represent you to the insurer and communicate to you the grant of a cover.</p>
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
                                    reviews="400"
                                    stars="4.5"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterPlain />
        </>
    )
}
