import React, { useRef, useEffect  } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProposalFormNav from '@/component/ProposalFormElements/ProposalFormNav'
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem"

import ArrowBackwardIcon from '@/component/Icons/ArrowBackward'
import ArrowForwardIcon from '@/component/Icons/ArrowForward'

import form from '@/assets/css/form.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css'

export default function Checkout_Two() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const router = useRouter();
    const goToBackPage = () => {
        router.push('/checkout/1');
    };
    const goToNextPage = () => {
        router.push('/checkout/3');
    };

    return (
        <>
            <Head>
                <title>Payment | BimaKavach</title>
                <meta name="description" content="Avail the customized insurance quote from top insurers in minutes. Business insurance in minutes." />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                talkExpert="true"
                talkExpertIcon="true"
            />
            <section className='checkoutPaymentBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={11}>
                            <ProposalFormNav
                                page="2"
                            />
                            <Row className='g-4 g-xl-5 justify-content-center'>
                                <Col lg={5}>
                                    <div className={`${form.commonForm}`}>
                                        <ButtonItem
                                            title="Back"
                                            type="button"
                                            iconPosition="left"
                                            customClass={`w-100 m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.btnBig}`}
                                            onClick={goToBackPage}
                                        >
                                            <ArrowBackwardIcon />
                                        </ButtonItem>
                                        <ButtonItem
                                            title="Continue"
                                            type="button"
                                            iconPosition="right"
                                            customClass={`w-100 m-0 px-2 mt-3 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                                            onClick={goToNextPage}
                                        >
                                            <ArrowForwardIcon />
                                        </ButtonItem>
                                    </div>
                                    <div className={`${form.frmftr} ${form.brownText1} mt-4 text-center`}>
                                        <p>Please Continue to complete your payment, fill your Proposal form, upload your documents so the issuing of policy can be initiated</p>
                                    </div>
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
