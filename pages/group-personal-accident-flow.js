import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProductFormContent from '@/component/GHI/ProductContent/ProductFormContent'
import FormLayout from '@/component/GHI/FormElements/FormLayout'
import FormSelect from '@/component/GHI/FormElements/FormSelect'
import FormInput from '@/component/GHI/FormElements/FormInput'
import FormRadio from '@/component/GHI/FormElements/FormRadio'
import FormButton from '@/component/GHI/FormElements/FormButton'

import productStyle from '@/assets/css/productNew.module.css'

export default function GroupPersonalAccident_Flow() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("eBnftTooltip")
    }, []);

    const [isEnterDetailsFirstActive, setEnterDetailsFirstActive] = useState(true);
    const handleEnterDetailsFirstToggle = () => {
        setEnterDetailsFirstActive(!isEnterDetailsFirstActive);
    };

    const [isEnterDetailsSecondActive, setEnterDetailsSecondActive] = useState(true);
    const handleEnterDetailsSecondToggle = () => {
        setEnterDetailsSecondActive(!isEnterDetailsSecondActive);
    };

    const [isEnterDetailsThirdActive, setEnterDetailsThirdActive] = useState(true);
    const handleEnterDetailsThirdToggle = () => {
        setEnterDetailsThirdActive(!isEnterDetailsThirdActive);
    };

    const [indCategryValue, setIndCategryValue ] = useState();
    const indCategoryOptions = [
        { name: 'Banking Finance and Insurance', value: '1' },
        { name: 'Computers, IT Services, Technology and Telecommunication', value: '2' },
        { name: 'Construction and Real Estate', value: '3' },
        { name: 'Manufacturing', value: '4' },
        { name: 'Advertising', value: '5' },
        { name: 'Medical & Pharmaceuticals', value: '6' },
    ];

    const [natureWorkValue, setNatureWorkValue] = useState();
    const natureWorkOptions = [
        { name: 'Accountant/Admin Staff', value: '1' },
        { name: 'Cook', value: '2' },
        { name: 'Consumer', value: '3' },
        { name: 'BFSI', value: '4' },
        { name: 'Enterprise Technology', value: '5' },
        { name: 'B2B Consulting', value: '6' },
    ];

    const [sumInsuredValue, setSumInsuredValue] = useState();
    const sumInsuredOptions = [
        {name: '1 Cr', value: '1'},
        {name: '2 Cr', value: '2'},
        {name: '3 Cr', value: '3'},
        {name: '4 Cr', value: '4'},
        {name: '5 Cr', value: '5'},
    ];

    const [buyingPoilicyValue] = useState();

    const router = useRouter();
    const goToBackPage = () => {
        router.push('/group-personal-accident-insurance');
    };
    const goToNextPage = () => {
        router.push('/all_policies?newDesign=true&logo=gpa');
    };

    return (
        <>
            <Head>
                <title>Group Health Insurance | BimaKavach</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                newDesign="true"
                logo="gpa"
                talkExpert
                scheduleCall
            />
            <section className={`sectionPadding ${productStyle.prdctFrmNewBlock}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={12} xxl={12}>
                            {isEnterDetailsFirstActive ? (
                                <Row className='g-4 g-xxl-5'>
                                    <Col xl={6} xxl={6}>
                                        <ProductFormContent
                                            title="Namaste, Shruti"
                                            description="Help us know more about yourself"
                                            talkExpert="himani"
                                        />
                                    </Col>
                                    <Col xl={6} xxl={6}>
                                        <FormLayout
                                            title="1. Initial Details"
                                            progressValue="20"
                                        >
                                            <FormSelect
                                                label="Industry Category"
                                                name="indCategory"
                                                options={indCategoryOptions}
                                                onChange={setIndCategryValue}
                                                search="true"
                                                value={indCategryValue}
                                                required="true"
                                            />
                                            <FormInput
                                                label="Location"
                                                type="Text"
                                                placeholder=""
                                                required="true"
                                            />
                                            <FormButton
                                                onClickBack={goToBackPage}
                                                onClickNext={handleEnterDetailsFirstToggle}
                                            />
                                        </FormLayout>
                                    </Col>
                                </Row>
                            ) : (
                                <>
                                    {isEnterDetailsSecondActive ? (
                                        <Row className='g-4 g-xxl-5'>
                                            <Col xl={6} xxl={6}>
                                                <ProductFormContent
                                                    title="Coverage for Everyone"
                                                    description="Cover your workforce and their families from unwanted financial burden"
                                                    talkExpert="himani"
                                                />
                                            </Col>
                                            <Col xl={6} xxl={6}>
                                                <FormLayout
                                                    title="2. Work Details"
                                                    progressValue="40"
                                                >
                                                    <FormSelect
                                                        title="What is the nature of work?"
                                                        label="Nature of Work"
                                                        name="natureWork"
                                                        options={natureWorkOptions}
                                                        onChange={setNatureWorkValue}
                                                        search="true"
                                                        value={natureWorkValue}
                                                        required="true"
                                                    />
                                                    <FormButton
                                                        onClickBack={handleEnterDetailsFirstToggle}
                                                        onClickNext={handleEnterDetailsSecondToggle}
                                                    />
                                                </FormLayout>
                                            </Col>
                                        </Row>
                                    ) : (
                                        <>
                                            {isEnterDetailsThirdActive ? (
                                                <Row className='g-4 g-xxl-5'>
                                                    <Col xl={6} xxl={6}>
                                                        <ProductFormContent
                                                            title="Space for All"
                                                            description="You can accommodate as many employees as you want"
                                                            talkExpert="himani"
                                                        />
                                                    </Col>
                                                    <Col xl={6} xxl={6}>
                                                        <FormLayout
                                                            title="3. Employee Details"
                                                            progressValue="60"
                                                        >
                                                            <FormInput
                                                                title="Whom do you want to cover, and for how much?"
                                                                label="Total Number of Employees"
                                                                type="number"
                                                                placeholder="Eg: 10"
                                                                required="true"
                                                            />
                                                            <FormSelect
                                                                label="Sum Insured per Person"
                                                                name="sumInsured"
                                                                options={sumInsuredOptions}
                                                                onChange={setSumInsuredValue}
                                                                search="true"
                                                                value={sumInsuredValue}
                                                                required="true"
                                                            />
                                                            <FormButton
                                                                onClickBack={handleEnterDetailsSecondToggle}
                                                                onClickNext={handleEnterDetailsThirdToggle}
                                                            />
                                                        </FormLayout>
                                                    </Col>
                                                </Row>
                                            ) : (
                                                <Row className='g-4 g-xxl-5'>
                                                    <Col xl={6} xxl={6}>
                                                        <ProductFormContent
                                                            title="First-time Policy Buyer?"
                                                            description="Get complete assistance throughout the process from insurance experts"
                                                            talkExpert="himani"
                                                        />
                                                    </Col>
                                                    <Col xl={6} xxl={6}>
                                                        <FormLayout
                                                            title="4. Existing Policy Details"
                                                            progressValue="91"
                                                        >
                                                            <FormRadio
                                                                label="Buying poilicy for the first time?"
                                                                option={[
                                                                    {id: 1, label: 'Yes', name: 'buyingPoilicy'},
                                                                    {id: 2, label: 'No', name: 'buyingPoilicy'}
                                                                ]}
                                                                tooltip="Maximum amount the insurance company will pay you in case of loss due to defined liability."
                                                            />
                                                            {buyingPoilicyValue === '2' ? (
                                                                <FormRadio
                                                                    label="Is there any claim in existing policy?"
                                                                    option={[
                                                                        {id: 1, label: 'Yes', name: 'claimPolicy'},
                                                                        {id: 2, label: 'No', name: 'claimPolicy'}
                                                                    ]}
                                                                    tooltip="Maximum amount the insurance company will pay you in case of loss due to defined liability."
                                                                />
                                                            ) : (
                                                                null
                                                            )}
                                                            <FormButton
                                                                onClickBack={handleEnterDetailsThirdToggle}
                                                                onClickNext={goToNextPage}
                                                            />
                                                        </FormLayout>
                                                    </Col>
                                                </Row>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section >
            <FooterPlain
                newDesign="true"
            />
        </>
    )
}
