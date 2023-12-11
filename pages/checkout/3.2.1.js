import React, { useRef, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProposalFormNav from '@/component/ProposalFormElements/ProposalFormNav'
import ProposalFormHeader from '@/component/ProposalFormElements/ProposalFormHeader'
import TextImageCard from '@/component/ProposalFormElements/TextImageCard'
import OnlineFillingCard from '@/component/ProposalFormElements/OnlineFillingCard'
import ProposalUploadButton from "@/component/ProposalFormElements/ProposalUploadButton"
import MandateLetterCard from '@/component/ProposalFormElements/MandateLetterCard'
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem"

import ArrowForwardIcon from '@/component/Icons/ArrowForward'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css'

export default function Checkout_Three_Two_One() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/checkout/4?mode=Offline');
    };

    return (
        <>
            <Head>
                <title>Checkout | Directors & Officers Insurance</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                talkExpert="true"
                talkExpertIcon="true"
            />
            <section className='checkoutProposalBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={11}>
                            <ProposalFormNav
                                page="3.2.1"
                            />
                            <Row className='g-4 g-xl-5'>
                                <Col lg={12}>
                                    <ProposalFormHeader
                                        cardType="Offline"
                                    />
                                    <hr className='my-4 my-xl-5'></hr>
                                </Col>
                            </Row>
                            <Row className='g-4 g-xl-5'>
                                <Col lg={7} xxl={6}>
                                    <TextImageCard
                                        description={[
                                            "To begin, download the form by clicking below.<br/>Please fill the form, sign it in the designated area, and scan the completed document.Upload the scanned form by clicking 'Upload', and then submit it to receive a confirmation message."
                                        ]}
                                        buttons="true"
                                    >
                                        <ButtonItem
                                            title="Download Proposal Form"
                                            type="button"
                                            customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                                        />
                                        <ButtonItem
                                            title="Online Assistance"
                                            type="button"
                                            customClass={`w-100 m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.btnBig}`}
                                        />
                                    </TextImageCard>
                                    <hr className='my-4 my-xl-5'></hr>
                                    <ProposalUploadButton
                                        title="Already Downloaded and signed the Proposal Form? Upload it here:"
                                        btnText="Upload Proposal Form"
                                    />
                                </Col>
                                <Col lg={1} xxl={2}></Col>
                                <Col lg={4}>
                                    <OnlineFillingCard
                                        cardType="Offline"
                                    />
                                </Col>
                            </Row>
                            <Row className='g-4 g-xl-5'>
                                <Col lg={12}>
                                    <MandateLetterCard
                                        cardType="Offline"
                                        customClass="mt-4 mt-xl-5"
                                    >
                                        <ProposalUploadButton
                                            title="Already Downloaded and signed the document? Upload it here:"
                                            btnText="Upload Mandate Letter"
                                            disable="true"
                                        />
                                    </MandateLetterCard>
                                    <ButtonItem
                                        title="Go To Next Page"
                                        type="button"
                                        iconPosition="right"
                                        customClass={`m-0 mt-3 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                                        onClick={goToNextPage}
                                    >
                                        <ArrowForwardIcon />
                                    </ButtonItem>
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
