import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import {Container, Row, Col, Form, Button, ToastContainer} from 'react-bootstrap';

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import ToastCard from '../component/ToastCard'
import PolicyCompare from '../component/PolicyElements/PolicyCompare'
import PolicySelected from '../component/PolicyElements/PolicyCompare/PolicySelected'
import AddPolicyButton from '@/component/PolicyElements/PolicyCompare/AddPolicyButton'
import PolicyCompareButton from '@/component/PolicyElements/PolicyCompare/PolicyCompareButton'
import PolicyCard from '../component/PolicyElements/PolicyCard'
import PolicyHeader from '../component/PolicyElements/PolicyHeader'
import SupportMobile from '../component/SupportMobile'
import PolicyDropdown from '../component/PolicyElements/PolicyDropdown'
import TalkExpert from '../component/TalkExpert'

import policyCompare from '../component/PolicyElements/PolicyCompare/style.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'
import policy from '../component/PolicyElements/PolicyCard/style.module.css'

import RuppeeIcon from '../component/Icons/Ruppee'

import expertImg1 from '../public/himaniImg.png'
import expertImg2 from '../public/ravikantImg.png'
import expertImg3 from '../public/shrutiImg.png'

import bajajAllianz_logo from '../public/policyLogos/bajajAllianz_logo.png'
import icici_logo from '../public/policyLogos/icici_logo.png'
import tataAIG_logo from '../public/policyLogos/tataAIG_logo.png'
import newIndiaAssurance_logo from '../public/policyLogos/newIndiaAssurance_logo.png'
import hdfcErgo_logo from '../public/policyLogos/hdfcErgo_logo.png'

export default function AllPolicies() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("userFlowBody")
    }, []);

    const options = [
        {value: "1.25 Crores", label: "1.25 Crores"},
        {value: "1 Crore", label: "1 Crore"},
        {value: "2 Crore", label: "2 Crore"},
        {value: "3 Crore", label: "3 Crore"},
        {value: "4 Crore", label: "4 Crore"},
        {value: "5 Crore", label: "5 Crore"},
        {value: "6 Crore", label: "6 Crore"},
        {value: "7 Crore", label: "7 Crore"},
        {value: "8 Crore", label: "8 Crore"},
        {value: "9 Crore", label: "9 Crore"},
        {value: "10 Crore", label: "10 Crore"},
        {value: "11 Crore", label: "11 Crore"},
        {value: "12 Crore", label: "12 Crore"},
        {value: "13 Crore", label: "13 Crore"},
        {value: "14 Crore", label: "14 Crore"},
        {value: "15 Crore", label: "15 Crore"},
        {value: "16 Crore", label: "16 Crore"},
        {value: "16 Crore & Above", label: "5 Crore & Above"},
    ]

    const [showCompare, setShowCompare] = useState(false);

    const AddCompareClick = () => setShowCompare(true);

    const HandleClose = () => setShowCompare(false);

    const [showToastSuccess, setShowToastSuccess] = useState(true);
    const [showToastWarning, setShowToastWarning] = useState(true);
    const [showToastError, setShowToastError] = useState(true);

    const router = useRouter();
    const goToPayment = () => {
        router.push('/payment');
    };

    return (
        <>
            <Head>
                <title>Top Insurers | BimaKavach</title>
                <meta name="description" content="We offer the best option customized exclusively for your business. 20+ insurers from India." />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                emailQuote="true"
                scheduleCall="true"
                talkExpert="true"
            />
            <ToastContainer
                className={`position-fixed p-3`}
                position='bottom-start'
                style={{ zIndex: 999 }}
            >
                <ToastCard
                    onClose={() => setShowToastSuccess(false)}
                    show={showToastSuccess}
                    delay={30000}
                    undo={true}
                    variant="success"
                    message="The quotes are sent to your email succesfully."
                />
                <ToastCard
                    onClose={() => setShowToastWarning(false)}
                    show={showToastWarning}
                    delay={30000}
                    undo={true}
                    variant="warning"
                    message="The quotes are sent to your email succesfully."
                />
                <ToastCard
                    onClose={() => setShowToastError(false)}
                    show={showToastError}
                    delay={30000}
                    undo={true}
                    variant="error"
                    message="The quotes are sent to your email succesfully."
                />  
            </ToastContainer>
            <PolicyCompare
                customClass={showCompare ? policyCompare.show : policyCompare.hide}
                handleClose={HandleClose}
            >
                <PolicySelected
                    InsurerName="Bajaj"
                    InsurerLogo={bajajAllianz_logo}
                    PolicyName="Directors & Officers Insurance"
                />
                <PolicySelected
                    InsurerName="ICICI"
                    InsurerLogo={icici_logo}
                    PolicyName="Directors & Officers Insurance"
                />
                <AddPolicyButton />
                <PolicyCompareButton
                    href="/quote_comparison"
                />
            </PolicyCompare>
            <section className='allPolicyBlock sectionPadding pt-4 pt-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11}>
                            <div className='mb-4 mb-lg-5'>
                                <Row className='align-items-center g-4'>
                                    <Col lg>
                                        <div className='d-flex align-items-start align-items-md-center justify-content-between gap-3'>
                                            <PolicyHeader
                                                coverageName="Directors & Officers Liability"
                                            >
                                                <PolicyDropdown
                                                    customClass="ms-md-4"
                                                    label="Limit of Liability"
                                                    icon={<RuppeeIcon width="10"
                                                    height="16" />}
                                                    placeHolder="1.25 Crores"
                                                    options={options}
                                                />
                                            </PolicyHeader>
                                            <SupportMobile
                                                customClass="d-lg-none"
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="auto" className='d-none d-lg-block'>
                                        <TalkExpert
                                            background={`${talkExpert.gray}`}
                                            size={`${talkExpert.small}`}
                                            imgSrc={expertImg1}
                                            name="Himani Doshi"
                                            designation="Insurance Expert"
                                        />
                                        <TalkExpert
                                            background={`${talkExpert.gray}`}
                                            size={`${talkExpert.small}`}
                                            imgSrc={expertImg2}
                                            name="Ravikant Sawant"
                                            designation="Insurance Expert"
                                        />
                                        <TalkExpert
                                            background={`${talkExpert.gray}`}
                                            size={`${talkExpert.small}`}
                                            imgSrc={expertImg3}
                                            name="Shruti Vishnoi"
                                            designation="Insurance Expert"
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <Row className='g-4'>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={bajajAllianz_logo}
                                        logoWidth="245"
                                        logoHeight="31"
                                        title="Bajaj Allianz"
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        priceAmount="23,989"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="35,000"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button onClick={goToPayment} variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Buy Now</span>
                                        </Button>
                                        <div className={`${policy.policyCompare}`}>
                                            <Form.Check
                                                type="checkbox"
                                                id="compare-2"
                                                name="policy-compare"
                                                label="Add to compare"
                                                className={`${policy.policyCompareCheck}`}
                                                onClick={AddCompareClick}
                                            />
                                        </div>
                                    </PolicyCard>
                                </Col>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={icici_logo}
                                        logoWidth="221"
                                        logoHeight="46"
                                        title="ICICI Lombard"
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        priceAmount="33,245"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="35,000"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button onClick={goToPayment} variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Buy Now</span>
                                        </Button>
                                        <div className={`${policy.policyCompare}`}>
                                            <Form.Check
                                                type="checkbox"
                                                id="compare-3"
                                                name="policy-compare"
                                                label="Add to compare"
                                                className={`${policy.policyCompareCheck}`}
                                                onClick={AddCompareClick}
                                            />
                                        </div>
                                    </PolicyCard>
                                </Col>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={tataAIG_logo}
                                        logoWidth="80"
                                        logoHeight="80"
                                        title="TATA AIG"
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        priceAmount="43,325"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="35,000"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button onClick={goToPayment} variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Buy Now</span>
                                        </Button>
                                        <div className={`${policy.policyCompare}`}>
                                            <Form.Check
                                                type="checkbox"
                                                id="compare-4"
                                                name="policy-compare"
                                                label="Add to compare"
                                                className={`${policy.policyCompareCheck}`}
                                                onClick={AddCompareClick}
                                            />
                                        </div>
                                    </PolicyCard>
                                </Col>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={newIndiaAssurance_logo}
                                        logoWidth="68"
                                        logoHeight="70"
                                        title="New India Assurance Co. Ltd."
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        priceAmount="43,325"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="13,537"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button onClick={goToPayment} variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Buy Now</span>
                                        </Button>
                                        <div className={`${policy.policyCompare}`}>
                                            <Form.Check
                                                type="checkbox"
                                                id="compare-1"
                                                name="policy-compare"
                                                label="Add to compare"
                                                className={`${policy.policyCompareCheck}`}
                                                onClick={AddCompareClick}
                                            />
                                        </div>
                                    </PolicyCard>
                                </Col>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={hdfcErgo_logo}
                                        logoWidth="61"
                                        logoHeight="61"
                                        title="HDFC Ergo"
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        price="none"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="13,537"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Get quote</span>
                                        </Button>
                                    </PolicyCard>
                                </Col>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={bajajAllianz_logo}
                                        logoWidth="245"
                                        logoHeight="31"
                                        title="Bajaj Allianz"
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        price="none"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="13,537"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Get quote</span>
                                        </Button>
                                    </PolicyCard>
                                </Col>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={newIndiaAssurance_logo}
                                        logoWidth="68"
                                        logoHeight="70"
                                        title="New India Assurance Co. Ltd."
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        priceAmount="43,325"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="13,537"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button onClick={goToPayment} variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Buy Now</span>
                                        </Button>
                                        <div className={`${policy.policyCompare}`}>
                                            <Form.Check
                                                type="checkbox"
                                                id="compare-7"
                                                name="policy-compare"
                                                label="Add to compare"
                                                className={`${policy.policyCompareCheck}`}
                                                onClick={AddCompareClick}
                                            />
                                        </div>
                                    </PolicyCard>
                                </Col>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={hdfcErgo_logo}
                                        logoWidth="61"
                                        logoHeight="61"
                                        title="HDFC Ergo"
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        price="none"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="13,537"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Get quote</span>
                                        </Button>
                                    </PolicyCard>
                                </Col>
                                <Col lg={6} xl={4}>
                                    <PolicyCard
                                        policyLogo={bajajAllianz_logo}
                                        logoWidth="245"
                                        logoHeight="31"
                                        title="Bajaj Allianz"
                                        listText1="Policy in Minutes"
                                        listText2="Trusted by 340 businesses"
                                        listText3="Cover for retired directors"
                                        price="none"
                                        policyName="Directors & Officers Liability"
                                        policyCover="1.5 Crore"
                                        policyPremium="13,537"
                                        featuresIncluded={[
                                            <>
                                                <li>Pension Trustee Liability</li>
                                                <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                                                <li>Pecuniary Penalties Cover</li>
                                                <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                                                <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                                                <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                                                <li>Protected Excess Limit for Non-Executive Directors</li>
                                                <li>Public Relations Expenses Extension</li>
                                                <li>Extradition Costs Extension: Full Limit</li>
                                                <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                                            </>
                                        ]}
                                    >
                                        <Button onClick={goToPayment} variant="primary" className='btnCommon yellowBtn' type="button">
                                            <span>Get quote</span>
                                        </Button>
                                    </PolicyCard>
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
