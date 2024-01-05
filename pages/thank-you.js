import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import {Container, Row, Col, Form, Button} from 'react-bootstrap';

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import PolicyHeader from '../component/PolicyElements/PolicyHeader'
import SupportMobile from '../component/SupportMobile'
import ThankPolicyText from '../component/PolicyElements/ThankPolicyText'
import ThankPolicyCard from '../component/PolicyElements/ThankPolicyCard'
import InsuranceCard from '../component/InsuranceCard'

import thankStyle from '../component/PolicyElements/ThankPolicyCard/style.module.css'
import insuranceStyle from '../component/InsuranceCard/style.module.css'

import BackArrow from '../component/Icons/BackArrow'
import bajajAllianz_logo from '../public/policyLogos/bajajAllianz_logo.webp'
import dAndO_insuanceIcon from '../public/startup1.svg'
import gL_insuanceIcon from '../public/startup2.svg'
import eAndO_insuanceIcon from '../public/startup3.svg'

export default function ThankYou() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("userFlowBody")
    }, []);

    const recommendedInsurance = [
        { id: "1", titleLink: "", icon: dAndO_insuanceIcon, title: "Directors & Officers Insurance" },
        { id: "2", titleLink: "", icon: gL_insuanceIcon, title: "General Liability Insurance" },
        { id: "3", titleLink: "", icon: eAndO_insuanceIcon, title: "Errors & Omissions Insurance" }
    ]
    
    const router = useRouter();
    const goToQuotes = () => {
        router.push('/all_policies');
    };
    return (
        <>
            <Head>
                <title>Thank You | BimaKavach</title>
                <meta name="description" content="Workmen's Compensation Policy ensures compliance with labor laws and offers financial coverage for workplace injuries and illnesses. Find top insurers at BimaKavach." />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                talkExpert="true"
            />
            <section className='thankYouBlock sectionPadding pt-4 pt-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={10}>
                            <div className='d-flex d-lg-none align-items-start align-items-md-center justify-content-between gap-3 mb-4'>
                                <PolicyHeader
                                    coverageName="Directors & Officers Liability"
                                />
                                <SupportMobile
                                    customClass="d-lg-none"
                                />
                            </div>
                            <div className='mb-4 mb-lg-5'>
                                <Row className='g-4'>
                                    <Col>
                                        <ThankPolicyText
                                            policyName="Directors & Officers Liability"
                                        />
                                    </Col>
                                    <Col>
                                        <ThankPolicyCard
                                            policyLogo={bajajAllianz_logo}
                                            policyLogoAlt="Bajaj Allianz"
                                            logoWidth="245"
                                            logoHeight="31"
                                            statusColor={`${thankStyle.Green}`}
                                            policyStatus="In Progress"
                                            policyName="Directors & Officers Liability"
                                            policyPremium="35,000"
                                            policyCover="1.5 Crore"
                                        >
                                            <div className='d-flex mb-4'>
                                                <Link href="" onClick={goToQuotes} className='btnCommon btnSmall btnBorder border-primary d-flex justify-content-center'>
                                                    <BackArrow iconColor="primary" width="22" height="8" />
                                                    <span className='ms-2'>Back to Quotes</span>
                                                </Link>
                                            </div>
                                        </ThankPolicyCard>
                                    </Col>
                                </Row>
                            </div>
                            <div className='whiteCol'>
                                <div className='mb-4'>
                                    <h4 className='title20 text-primary font-weight-500 m-0'>Recommended coverages for your business</h4>
                                </div>
                                <Row className='g-4 justify-content-around'>
                                    {recommendedInsurance.map((item) =>
                                        <Col key={item.id} lg={4}>
                                            <InsuranceCard
                                                insuranceIcon={item.icon}
                                                title={item.title}
                                                titleLink={item.titleLink}
                                                layout={insuranceStyle.horizontal}
                                            />
                                            <div className='d-flex mt-3'>
                                                <Link href="" className='btnCommon yellowBtn justify-content-center'>
                                                    <span>Buy Now</span>
                                                </Link>
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterPlain />
        </>
    )
}
