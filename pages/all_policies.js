import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import {Container, Row, Col, Form, Button, ToastContainer} from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ToastCard from '@/component/ToastCard'
import PolicySidebar from '@/component/GHI/ProductContent/ProductFormContent'
import GHIAccordianContent from '@/component/GHI/PolicySidebar/GHIAccordianContent'
import PolicyCompare from '@/component/PolicyElements/PolicyCompare'
import PolicySelected from '@/component/PolicyElements/PolicyCompare/PolicySelected'
import AddPolicyButton from '@/component/PolicyElements/PolicyCompare/AddPolicyButton'
import PolicyCompareButton from '@/component/PolicyElements/PolicyCompare/PolicyCompareButton'
import PolicyCard from '@/component/PolicyElements/PolicyCard'
import PolicyHeader from '@/component/PolicyElements/PolicyHeader'
import SupportMobile from '@/component/SupportMobile'
import PolicyDropdown from '@/component/PolicyElements/PolicyDropdown'
import TalkExpert from '@/component/TalkExpert'

import policyCompare from '@/component/PolicyElements/PolicyCompare/style.module.css'
import talkExpert from '@/component/TalkExpert/style.module.css'
import policy from '@/component/PolicyElements/PolicyCard/style.module.css'
import productStyle from '@/assets/css/productNew.module.css'

import RuppeeIcon from '@/component/Icons/Ruppee'

import expertImg1 from '@/public/himaniImg.png'
import expertImg2 from '@/public/ravikantImg.png'
import expertImg3 from '@/public/shrutiImg.png'

import bajajAllianz_logo from '@/public/policyLogos/bajajAllianz_logo.png'
import icici_logo from '@/public/policyLogos/icici_logo.png'
import tataAIG_logo from '@/public/policyLogos/tataAIG_logo.png'
import newIndiaAssurance_logo from '@/public/policyLogos/newIndiaAssurance_logo.png'
import hdfcErgo_logo from '@/public/policyLogos/hdfcErgo_logo.png'

export default function AllPolicies() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
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

    const HandleShow = () => setShowCompare(true);
    const HandleClose = () => setShowCompare(false);

    const [showToastSuccess, setShowToastSuccess] = useState(true);
    const [showToastWarning, setShowToastWarning] = useState(true);
    const [showToastError, setShowToastError] = useState(true);

    const router = useRouter();
    const isNewDesign = router.query.newDesign || "";
    const logoValue = router.query.logo || "";
    const isFluid = isNewDesign === "true";
    const isVariant = isNewDesign === "true";

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
            <section className={`${isNewDesign === 'true' ? productStyle.allPolicyNewPage : null}`}>
                <HeaderPlain
                    newDesign={isNewDesign}
                    logo={logoValue}
                    emailQuote
                    scheduleCall
                    talkExpert
                    isFluid={isFluid}
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
                    handleShow={HandleShow}
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
                    {/*<AddPolicyButton />*/}
                    <p className='title-14 text-black mt-4 text-center d-none d-md-block'>Please select at least 3 to compare</p>
                    <PolicyCompareButton
                        href="/quote_comparison"
                    />
                </PolicyCompare>
                <div className={`allPolicyBlock sectionPadding pt-4 pt-md-5 ${isNewDesign === 'true' ? 'allPolicyNewBlock' : null}`}>
                    <Container fluid={isFluid}>
                        <Row className='justify-content-center'>
                            <Col xl={isNewDesign === 'true' ? 12 : 11}>
                                <Row className={`${isNewDesign === 'true' ? 'g-4 g-xxl-5' : ''}`}>
                                    {isNewDesign === 'true' ? (
                                        <Col xl={4}>
                                            <PolicySidebar
                                                talkExpert="himani"
                                            >
                                                <GHIAccordianContent />
                                            </PolicySidebar>
                                        </Col>
                                    ) : (
                                        null
                                    )}
                                    <Col xl={isNewDesign === 'true' ? 8 : 12}>
                                        <div className='mb-4 mb-lg-5'>
                                            <Row className='align-items-center g-4'>
                                                <Col lg>
                                                    <div className='d-flex align-items-start align-items-md-center justify-content-between gap-3'>
                                                        <PolicyHeader
                                                            coverageName="Directors & Officers Liability"
                                                            variant={isVariant}
                                                        >
                                                            <PolicyDropdown
                                                                customClass="ms-md-4"
                                                                label="Limit of Liability"
                                                                icon={<RuppeeIcon width="10"
                                                                height="16" />}
                                                                placeHolder="1.25 Crores"
                                                                options={options}
                                                                variant={isVariant}
                                                            />
                                                        </PolicyHeader>
                                                        {isNewDesign === 'true' ? (
                                                            null
                                                        ):(
                                                            <SupportMobile
                                                                customClass="d-lg-none"
                                                            />
                                                        )}
                                                    </div>
                                                </Col>
                                                {isNewDesign === 'true' ? (
                                                    null
                                                ) : (
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
                                                )}
                                            </Row>
                                        </div>
                                        <Row className='g-4'>
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={bajajAllianz_logo}
                                                    title="Bajaj Allianz"
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    priceAmount="23,989"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="35,000"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
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
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={icici_logo}
                                                    title="ICICI Lombard"
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    priceAmount="33,245"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="35,000"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
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
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={tataAIG_logo}
                                                    title="TATA AIG"
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    priceAmount="43,325"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="35,000"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
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
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={newIndiaAssurance_logo}
                                                    title="New India Assurance Co. Ltd."
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    priceAmount="43,325"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="13,537"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
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
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={hdfcErgo_logo}
                                                    title="HDFC Ergo"
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    price="none"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="13,537"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
                                                >
                                                    <Button variant="primary" className='btnCommon yellowBtn' type="button">
                                                        <span>Get quote</span>
                                                    </Button>
                                                </PolicyCard>
                                            </Col>
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={bajajAllianz_logo}
                                                    title="Bajaj Allianz"
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    price="none"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="13,537"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
                                                >
                                                    <Button variant="primary" className='btnCommon yellowBtn' type="button">
                                                        <span>Get quote</span>
                                                    </Button>
                                                </PolicyCard>
                                            </Col>
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={newIndiaAssurance_logo}
                                                    title="New India Assurance Co. Ltd."
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    priceAmount="43,325"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="13,537"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
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
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={hdfcErgo_logo}
                                                    title="HDFC Ergo"
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    price="none"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="13,537"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
                                                >
                                                    <Button variant="primary" className='btnCommon yellowBtn' type="button">
                                                        <span>Get quote</span>
                                                    </Button>
                                                </PolicyCard>
                                            </Col>
                                            <Col xxl={4} xl={isNewDesign === 'true' ? 6 : 4 } lg={6}>
                                                <PolicyCard
                                                    policyLogo={bajajAllianz_logo}
                                                    title="Bajaj Allianz"
                                                    listText1="Policy in Minutes"
                                                    listText2="Trusted by 340 businesses"
                                                    listText3="Cover for retired directors"
                                                    price="none"
                                                    policyName="Directors & Officers Liability"
                                                    policyCover="1.5 Crore"
                                                    policyPremium="13,537"
                                                    coveragesExtensions={[
                                                        <>
                                                            <li>
                                                                <h4>Pension Trustee Liability</h4>
                                                                <p>Definition of Subsidiary includes  any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                <div>
                                                                    <h5>What is pension trustee liability</h5>
                                                                    <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h4>Pecuniary Penalties Cover</h4>
                                                                <p>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</p>
                                                            </li>
                                                            <li>
                                                                <p>Pecuniary Penalties Cover</p>
                                                            </li>
                                                            <li>
                                                                <p>Bail Bond and Civil Bond Expenses: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Lawful Spouse, Domestic Partner or Family member liability</p>
                                                            </li>
                                                            <li>
                                                                <p>Legal Representation Expenses (not tied to Wrongful Act)</p>
                                                            </li>
                                                            <li>
                                                                <p>Protected Excess Limit for Non-Executive Directors</p>
                                                            </li>
                                                            <li>
                                                                <p>Public Relations Expenses Extension</p>
                                                            </li>
                                                            <li>
                                                                <p>Extradition Costs Extension: Full Limit</p>
                                                            </li>
                                                            <li>
                                                                <p>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</p>
                                                            </li>
                                                        </>
                                                    ]}
                                                    variant={isVariant}
                                                >
                                                    <Button onClick={goToPayment} variant="primary" className='btnCommon yellowBtn' type="button">
                                                        <span>Get quote</span>
                                                    </Button>
                                                </PolicyCard>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <FooterPlain
                insuranceType={isNewDesign}            
            />
        </>
    )
}
