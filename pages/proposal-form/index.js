import React, { useRef, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProposalFormNav from '@/component/ProposalFormElements/ProposalFormNav'
import TextImageCard from '@/component/ProposalFormElements/TextImageCard'
import DashboardUnlockCard from '@/component/ProposalFormElements/DashboardUnlockCard'
import ProposalFormFillingRow from '@/component/ProposalFormElements/ProposalFormFillingCard/ProposalFormFillingRow'
import ProposalFormFillingCard from '@/component/ProposalFormElements/ProposalFormFillingCard'
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem"

import ArrowBackwardIcon from '@/component/Icons/ArrowBackward'
import CheckFillIcon from '@/component/Icons/CheckFill'

import paymentSuccessImg from '@/public/proposalForm/paymentSuccessImg.svg'
import fillProposalImg from '@/public/proposalForm/fillProposalImg.svg'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css'

export default function ProposalForm(props) {
    const { page } = props;
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const router = useRouter();
    const pageValue = router.query.page || "";
    const goToDashboardPage = () => {
        router.push('/dashboard/your-policies');
    };

    return (
        <>
            <Head>
                <title>Proposal Form | Directors & Officers Insurance</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                talkExpert="true"
                talkExpertIcon="true"
            />
            <section className='proposalFormBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={11}>
                            <ProposalFormNav
                                page="3"
                            />
                            {pageValue == 'checkout' ? (
                                <>
                                    <Row className='g-4 g-xl-5'>
                                        <Col lg={8}>
                                            <TextImageCard
                                                icon={<CheckFillIcon iconColor="yellow" />}
                                                title="Payment Successful"
                                                description={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form."
                                                ]}
                                                imgSrc={paymentSuccessImg}
                                                Width={530}
                                                Height={312}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <DashboardUnlockCard />
                                        </Col>
                                    </Row>
                                    <hr className='my-xl-5 my-4'></hr>
                                </>
                            ) : (
                                null
                            )}
                            {pageValue == 'dashboard' ? (
                                <div className='mb-4 mb-xl-5'>
                                    <ButtonItem
                                        title="Exit"
                                        type="button"
                                        iconPosition="left"
                                        customClass={`m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.btnBig} ${buttonStyle.minWidth2}`}
                                        onClick={goToDashboardPage}
                                    >
                                        <ArrowBackwardIcon />
                                    </ButtonItem>
                                </div>
                            ) : (
                                null
                            )}
                            <Row className='g-4 g-xl-5'>
                                <Col lg={12}>
                                    <TextImageCard
                                        title="Up Next:"
                                        subTitle="Fill your Proposal Form"
                                        description={[
                                            "Filling this proposal form is mandatory before your policy document can be issued. The policy document is an important document to ensures coverage and must be preserved.Please choose from the below options to complete the form."
                                        ]}
                                        imgSrc={fillProposalImg}
                                        imgPosition="right"
                                        width={335}
                                        height={270}
                                        variant="blue"
                                    />
                                </Col>
                            </Row>
                            <ProposalFormFillingRow customClass="mt-xl-5 mt-4">
                                <Row className='g-4 g-xl-5'>
                                    <Col lg={6}>
                                        <ProposalFormFillingCard
                                            cardType="Online"
                                        />
                                    </Col>
                                    <Col lg={6}>
                                        <ProposalFormFillingCard
                                            cardType="Offline"
                                        />
                                    </Col>
                                </Row>
                            </ProposalFormFillingRow>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterPlain />
        </>
    )
}
