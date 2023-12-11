import React, { useRef, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProposalFormNav from '@/component/ProposalFormElements/ProposalFormNav'
import TextImageCard from '@/component/ProposalFormElements/TextImageCard'
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem"

import ArrowBackwardIcon from '@/component/Icons/ArrowBackward'
import ArrowForwardIcon from '@/component/Icons/ArrowForward'
import CalenderIcon from '@/component/Icons/Calender'

import confirmedImg from '@/public/proposalForm/confirmedImg.svg'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css'

export default function Checkout_Three_One_Two() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const router = useRouter();
    const goToBackPage = () => {
        router.push('/checkout/3');
    };
    const goToNextPage = () => {
        router.push('/checkout/3.1.1');
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
            <section className='checkoutAssistanceBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={11}>
                            <ProposalFormNav
                                page="3.1.2"
                            />
                            <Row className='g-4 g-xl-5'>
                                <Col lg={12}>
                                    <TextImageCard
                                        icon={<CalenderIcon iconColor="yellow" />}
                                        title="You'll hear from us soon"
                                        description={[
                                            "Thank you for scheduling your call for assisting in filling the Proposal Form.",
                                            "Our insurance expert will be contacting you on DD/MM/YYYY at HH:MM PM. If you'd like, you can still fill the form by yourself. You can edit these entires later on.",
                                        ]}
                                        imgSrc={confirmedImg}
                                        imgPosition="right"
                                        width={474}
                                        height={474}
                                        buttons="true"
                                    >
                                        <ButtonItem
                                            title="Go Back"
                                            type="button"
                                            iconPosition="left"
                                            customClass={`m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.btnBig} ${buttonStyle.minWidth2}`}
                                            onClick={goToBackPage}
                                        >
                                            <ArrowBackwardIcon />
                                        </ButtonItem>
                                        <ButtonItem
                                            title="Fill Proposal Form"
                                            type="button"
                                            iconPosition="right"
                                            customClass={`m-0 px-2 ${buttonStyle.btnBlue} ${buttonStyle.btnBig} ${buttonStyle.minWidth2}`}
                                            onClick={goToNextPage}
                                        >
                                            <ArrowForwardIcon />
                                        </ButtonItem>
                                    </TextImageCard>
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
