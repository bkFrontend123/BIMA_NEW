import React, { useRef, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProposalFormNav from '@/component/ProposalFormElements/ProposalFormNav'
import TextImageCard from '@/component/ProposalFormElements/TextImageCard'
import DashboardUnlockCard from '@/component/ProposalFormElements/DashboardUnlockCard'
import ImageCard from '@/component/ProposalFormElements/ImageCard'

import CheckFillIcon from '@/component/Icons/CheckFill';

import shieldedImg from '@/public/proposalForm/shieldedImg.svg'

export default function ProposalFormComplete() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const router = useRouter();
    const modeValue = router.query.mode || "";

    return (
        <>
            <Head>
                <title>Successful Proposal Form | Directors & Officers Insurance</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                talkExpert="true"
                talkExpertIcon="true"
            />
            <section className='checkoutSuccessBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={11}>
                            <ProposalFormNav
                                page="4"
                                mode={modeValue}
                            />
                            <Row className='g-4 g-xl-5 align-items-center'>
                                <Col lg={6} xl={5}>
                                    <TextImageCard
                                        icon={<CheckFillIcon iconColor="yellow" />}
                                        iconPosition="top"
                                        title="You're officially shielded!"
                                        description={[
                                            "Congratulations! Your insurance policies are now in motion, and we're committed to ensuring a seamless setup.<br/>We sincerely appreciate your choice of us as your insurance partner and eagerly anticipate providing top-notch service."
                                        ]}
                                    />
                                    <hr className='my-4'></hr>
                                    <DashboardUnlockCard />
                                </Col>
                                <Col lg={6} xxl={7}>
                                    <ImageCard
                                        src={shieldedImg}
                                        width={752}
                                        height={644}
                                        alt="You're officially shielded!"
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
