import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col, Form } from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProposalFormNav from '@/component/ProposalFormElements/ProposalFormNav'
import ProposalFormHeader from '@/component/ProposalFormElements/ProposalFormHeader'
import ProposalFormCard from '@/component/ProposalFormElements/ProposalFormCard'
import ProposalFormIntro from '@/component/ProposalFormElements/ProposalFormIntro'
import ProposalFormHeading from '@/component/ProposalFormElements/ProposalFormHeading'
import ProposalQuestionCard from '@/component/ProposalFormElements/ProposalQuestionCard'
import ProposalUploadButton from "@/component/ProposalFormElements/ProposalUploadButton"
import ProposalUploadAlert from "@/component/ProposalFormElements/ProposalUploadAlert"
import ProposalQuestionButton from '@/component/ProposalFormElements/ProposalQuestionButton'
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem"

import ArrowBackwardIcon from '@/component/Icons/ArrowBackward'
import ArrowForwardIcon from '@/component/Icons/ArrowForward'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css'

export default function ProposalFormOnline() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        //document.body.classList.add("userFlowBody")
    }, []);

    const [isProfessionalServicesActive, setProfessionalServicesActive] = useState(true);
    const handleProfessionalServicesToggle = () => {
        setProfessionalServicesActive(!isProfessionalServicesActive);
    };

    const [selectNumbersValue, setSelectNumbersValue] = useState();
    const selectNumbersOptions = [
        {name: '1', value: '1'},
        {name: '2', value: '2'},
        {name: '3', value: '3'},
        {name: '4', value: '4'},
        {name: '5', value: '5'},
        {name: '6', value: '6'},
    ];

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/proposal-form/online/mandate');
    };

    return (
        <>
            <Head>
                <title>Online Proposal Form | Directors & Officers Insurance</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                talkExpert="true"
                talkExpertIcon="true"
            />
            <section className='proposalFormOnlineBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={11}>
                            <ProposalFormNav
                                page="3.1.1"
                            />
                            <Row className='g-4 g-xl-5'>
                                <Col lg={12}>
                                    <ProposalFormHeader
                                        cardType="Online"
                                    />
                                    {isProfessionalServicesActive ? (
                                        <ProposalFormCard>
                                            <ProposalFormIntro
                                                title="Form Completion in: 10 Minutes"
                                                now={10}
                                            />
                                            <ProposalFormHeading
                                                title="1. Professional Services"
                                            />
                                            <ProposalQuestionCard
                                                questionName="Do the policyholder and subsidiaries have firewalls and intrusion monitoring detection in force to prevent unauthorized access?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question1'},
                                                    {id: 2, label: 'No', name: 'question1'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="false"
                                                knowMoreTitle="Professional Services"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            />
                                            <ProposalQuestionCard
                                                questionName="Do the policyholder and subsidiaries have a written and formalized network security policy statement in place?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question2'},
                                                    {id: 2, label: 'No', name: 'question2'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="false"
                                                knowMoreTitle="Professional Services"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            />
                                            
                                            <ProposalQuestionButton>
                                                <ButtonItem
                                                    title="Continue"
                                                    type="button"
                                                    iconPosition="right"
                                                    customClass={`m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.btnBig} ${buttonStyle.minWidth2}`}
                                                    onClick={handleProfessionalServicesToggle}
                                                >
                                                    <ArrowForwardIcon />
                                                </ButtonItem>
                                            </ProposalQuestionButton>
                                        </ProposalFormCard>
                                    ) : (
                                        <ProposalFormCard>
                                            <ProposalFormIntro
                                                title="Form Completion in: 9 Minutes"
                                                now={20}
                                            />
                                            <ProposalFormHeading
                                                title="1. Professional Services"
                                                filled="true"
                                            />
                                            <ProposalFormHeading
                                                title="2. Network Protection"
                                            />
                                            <ProposalQuestionCard
                                                questionName="Do the policyholder and subsidiaries have firewalls and intrusion monitoring detection in force to prevent unauthorized access?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question3'},
                                                    {id: 2, label: 'No', name: 'question3'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="false"
                                                knowMoreTitle="Network Protection"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            />
                                            <ProposalQuestionCard
                                                questionName="Are all security threats and incidents logged and investigated?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question4'},
                                                    {id: 2, label: 'No', name: 'question4'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="false"
                                                knowMoreTitle="Network Protection"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            />
                                            <ProposalQuestionCard
                                                questionName="Is the disaster recovery program and business continuity plan formalized and tested?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question5'},
                                                    {id: 2, label: 'No', name: 'question5'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="false"
                                                knowMoreTitle="Network Protection"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            />
                                            <ProposalQuestionCard
                                                questionName="Do the policyholder and subsidiaries have antivirus software on all computer devices, servers and networks which are updated in accordance with the software providers' recommendations?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question6'},
                                                    {id: 2, label: 'No', name: 'question6'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="false"
                                                knowMoreTitle="Network Protection"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            />
                                            <ProposalQuestionCard
                                                questionName="Do the policyholder and subsidiaries have firewalls and intrusion monitoring detection in force to prevent unauthorized access?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question7'},
                                                    {id: 2, label: 'No', name: 'question7'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="true"
                                                knowMoreTitle="Network Protection"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            />
                                            <ProposalQuestionCard
                                                questionName="Are all employees assigned specified rights, privileges and unique user ID and passwords, which are changed periodically?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question8'},
                                                    {id: 2, label: 'No', name: 'question8'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="true"
                                                knowMoreTitle="Network Protection"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            />
                                            <ProposalQuestionCard
                                                questionName="Do the policyholder or subsidiary provide remote access to its
                                                Computer Systems?"
                                                option={[
                                                    {id: 1, label: 'Yes', name: 'question9'},
                                                    {id: 2, label: 'No', name: 'question9'},
                                                ]}
                                                isNoMore="true"
                                                isEditMode="false"
                                                isHint="true"
                                                hintTitle="If 'Yes', how many users have remote access?"
                                                knowMoreTitle="Network Protection"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            >
                                                <Row>
                                                    <Col lg={6}>
                                                        <Form.Group className={`selectDropDiv selectDropDivSmall ${!selectNumbersValue == '' ? 'selectedDropDiv' : null}`}>
                                                            <SelectSearch
                                                                options={selectNumbersOptions}
                                                                name="industry"
                                                                placeholder="&nbsp;"
                                                                onChange={setSelectNumbersValue}
                                                                value={selectNumbersValue}
                                                                required
                                                            />
                                                            <label>Select Numbers</label>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </ProposalQuestionCard>
                                            <ProposalQuestionCard
                                                questionName="Please upload your signature in order to authenticate the proposal form, and shield your business."
                                                isNoMore="true"
                                                isUploadMode="true"
                                                isEditMode="true"
                                                isHint="true"
                                                knowMoreTitle="Network Protection"
                                                knowMoreContent={[
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                    "Thank you for your payment! Your policy is now active. To receive your policy documents, please complete our quick proposal form.",
                                                ]}
                                            >
                                                <ProposalUploadButton
                                                    title="This image must be in a jpeg format, taken on a plain white piece of paper and under 500kb"
                                                    btnText="Upload Signature"
                                                />
                                                <ProposalUploadAlert
                                                    value="success"
                                                />
                                                <ProposalUploadAlert
                                                    value="error"
                                                />
                                            </ProposalQuestionCard>

                                            <ProposalQuestionButton>
                                                <ButtonItem
                                                    title="Back"
                                                    type="button"
                                                    iconPosition="left"
                                                    customClass={`m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.btnBig} ${buttonStyle.minWidth2}`}
                                                    onClick={handleProfessionalServicesToggle}
                                                >
                                                    <ArrowBackwardIcon />
                                                </ButtonItem>
                                                <ButtonItem
                                                    title="Submit Form"
                                                    type="button"
                                                    iconPosition="right"
                                                    customClass={`m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig} ${buttonStyle.minWidth2}    `}
                                                    onClick={goToNextPage}
                                                >
                                                    <ArrowForwardIcon />
                                                </ButtonItem>
                                            </ProposalQuestionButton>
                                        </ProposalFormCard>
                                    )}
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
