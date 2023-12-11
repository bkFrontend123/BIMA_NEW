import React, { useRef, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProposalFormNav from '@/component/ProposalFormElements/ProposalFormNav'
import TextImageCard from '@/component/ProposalFormElements/TextImageCard'
import MandateLetterCard from '@/component/ProposalFormElements/MandateLetterCard'
import ProposalUploadButton from "@/component/ProposalFormElements/ProposalUploadButton"
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem"

import ArrowForwardIcon from '@/component/Icons/ArrowForward'
import CheckFillIcon from '@/component/Icons/CheckFill'

import almostDoneImg from '@/public/proposalForm/almostDoneImg.svg'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css'

export default function ProposalFormOnlineMandate() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/proposal-form/end?mode=online');
    };

    return (
        <>
            <Head>
                <title>Mandate Letter | Online Proposal Form | Directors & Officers Insurance</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                talkExpert="true"
                talkExpertIcon="true"
            />
            <section className='proposalFormMandateBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={11}>
                            <ProposalFormNav
                                page="3.1.3"
                            />
                            <Row className='g-4 g-xl-5'>
                                <Col lg={12}>
                                    <TextImageCard
                                        icon={<CheckFillIcon iconColor="yellow" />}
                                        title="We're almost there!"
                                        description={[
                                            "Great! You've filled your proposal form and are one step closer to shielding your business. The last thing we'd need from you is a signature on the mandate letter. This will help authorise and authenticate the purchase. We're just a signature away!"
                                        ]}
                                        imgSrc={almostDoneImg}
                                        imgPosition="right"
                                        Width={530}
                                        Height={312}
                                    />
                                </Col>
                            </Row>
                            <Row className='g-4 g-xl-5'>
                                <Col lg={12}>
                                    <MandateLetterCard
                                        cardType="Online"
                                        customClass="mt-4 mt-xl-5"
                                    >
                                        <ProposalUploadButton
                                            title="Already Downloaded and signed the document? Upload it here:"
                                            btnText="Upload Mandate Letter"
                                            disable="true"
                                        />
                                    </MandateLetterCard>
                                    <ButtonItem
                                        title="Go Next Page"
                                        type="button"
                                        iconPosition="right"
                                        customClass={`m-0 mt-4 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
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
