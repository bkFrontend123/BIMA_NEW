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

import coverDetailIcon1 from '@/public/ghi/flowIcons/coverDetailIcon1.svg'
import coverDetailIcon2 from '@/public/ghi/flowIcons/coverDetailIcon2.svg'
import coverDetailIcon3 from '@/public/ghi/flowIcons/coverDetailIcon3.svg'

import sumInsuredIcon1 from '@/public/ghi/flowIcons/sumInsuredIcon1.svg'
import sumInsuredIcon2 from '@/public/ghi/flowIcons/sumInsuredIcon2.svg'
import sumInsuredIcon3 from '@/public/ghi/flowIcons/sumInsuredIcon3.svg'
import sumInsuredIcon4 from '@/public/ghi/flowIcons/sumInsuredIcon4.svg'

import maternityBenefitIcon1 from '@/public/ghi/flowIcons/maternityBenefitIcon1.svg'
import maternityBenefitIcon2 from '@/public/ghi/flowIcons/maternityBenefitIcon2.svg'
import maternityBenefitIcon3 from '@/public/ghi/flowIcons/maternityBenefitIcon3.svg'
import maternityBenefitIcon4 from '@/public/ghi/flowIcons/maternityBenefitIcon4.svg'

import roomRentIcon1 from '@/public/ghi/flowIcons/roomRentIcon1.svg'
import roomRentIcon2 from '@/public/ghi/flowIcons/roomRentIcon2.svg'
import roomRentIcon3 from '@/public/ghi/flowIcons/roomRentIcon3.svg'

export default function GroupHealth_Flow() {
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

    const [isEnterDetailsFourthActive, setEnterDetailsFourthActive] = useState(true);
    const handleEnterDetailsFourthToggle = () => {
        setEnterDetailsFourthActive(!isEnterDetailsFourthActive);
    };

    const [isEnterDetailsFiveActive, setEnterDetailsFiveActive] = useState(true);
    const handleEnterDetailsFiveToggle = () => {
        setEnterDetailsFiveActive(!isEnterDetailsFiveActive);
    };

    const [isEnterDetailsSixActive, setEnterDetailsSixActive] = useState(true);
    const handleEnterDetailsSixToggle = () => {
        setEnterDetailsSixActive(!isEnterDetailsSixActive);
    };

    const [indCategryValue, setIndCategryValue] = useState();
    const indCategoryOptions = [
        { name: 'Banking Finance and Insurance', value: '1' },
        { name: 'Computers, IT Services, Technology and Telecommunication', value: '2' },
        { name: 'Construction and Real Estate', value: '3' },
        { name: 'Manufacturing', value: '4' },
        { name: 'Advertising', value: '5' },
        { name: 'Medical & Pharmaceuticals', value: '6' },
    ];

    const [buyingPoilicyValue] = useState();

    const router = useRouter();
    const goToBackPage = () => {
        router.push('/group-health-insurance');
    };
    const goToNextPage = () => {
        router.push('/all_policies?newDesign=true&logo=ghi');
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
                logo="ghi"
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
                                            progressValue="13"
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
                                                    description="You can cover employee, their spouse, kids and dependent parents all in one policy."
                                                    talkExpert="himani"
                                                />
                                            </Col>
                                            <Col xl={6} xxl={6}>
                                                <FormLayout
                                                    title="2. Cover Details"
                                                    progressValue="26"
                                                >
                                                    <FormRadio
                                                        label="Whom do you want to cover?"
                                                        option={[
                                                            {id: 1, label: 'Employee Only', name: 'coverDetails', icon: coverDetailIcon1},
                                                            {id: 2, label: 'Employee with Spouse & Kid', name: 'coverDetails', icon: coverDetailIcon2},
                                                            {id: 3, label: 'Employee with  Spouse, Kids & Dependant parents', name: 'coverDetails', icon: coverDetailIcon3}
                                                        ]}
                                                        tooltip="Maximum amount the insurance company will pay you in case of loss due to defined liability."
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
                                                            progressValue="39"
                                                        >
                                                            <FormInput
                                                                title="Whom do you want to cover?"
                                                                tooltip="Maximum amount the insurance company will pay you in case of loss due to defined liability."
                                                                label="Total Number of Employees"
                                                                type="number"
                                                                placeholder="Eg: 10"
                                                                required="true"
                                                            />
                                                            <FormInput
                                                                label="Total Number of Lives"
                                                                type="number"
                                                                placeholder="Eg: 10"
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
                                                <>
                                                    {isEnterDetailsFourthActive ? (
                                                        <Row className='g-4 g-xxl-5'>
                                                            <Col xl={6} xxl={6}>
                                                                <ProductFormContent
                                                                    title="Individual Coverage, Tailored Protection"
                                                                    description="Ensure every individual's well-being with personalised policy package"
                                                                    talkExpert="himani"
                                                                />
                                                            </Col>
                                                            <Col xl={6} xxl={6}>
                                                                <FormLayout
                                                                    title="4. Sum Insurance Details"
                                                                    progressValue="52"
                                                                >
                                                                    <FormRadio
                                                                        label="Sum Insured Per Person"
                                                                        option={[
                                                                            {id: 1, label: '2 Lakhs', name: 'sumInsured', icon: sumInsuredIcon1},
                                                                            {id: 2, label: '3 Lakhs', name: 'sumInsured', icon: sumInsuredIcon2},
                                                                            {id: 3, label: '5 Lakhs', name: 'sumInsured', icon: sumInsuredIcon3},
                                                                            {id: 4, label: '10 Lakhs', name: 'sumInsured', icon: sumInsuredIcon4}
                                                                        ]}
                                                                        tooltip="Maximum amount the insurance company will pay you in case of loss due to defined liability."
                                                                    />
                                                                    <FormButton
                                                                        onClickBack={handleEnterDetailsThirdToggle}
                                                                        onClickNext={handleEnterDetailsFourthToggle}
                                                                    />
                                                                </FormLayout>
                                                            </Col>
                                                        </Row>
                                                    ) : (
                                                        <>
                                                            {isEnterDetailsFiveActive ? (
                                                                <Row className='g-4 g-xxl-5'>
                                                                    <Col xl={6} xxl={6}>
                                                                        <ProductFormContent
                                                                            title="Excellent Maternity  Benefits"
                                                                            description="Avail considerable maternity package for your female employees"
                                                                            talkExpert="himani"
                                                                        />
                                                                    </Col>
                                                                    <Col xl={6} xxl={6}>
                                                                        <FormLayout
                                                                            title="5. Maternity Benefit Details"
                                                                            progressValue="65"
                                                                        >
                                                                            <FormRadio
                                                                                label="What kind of maternity benefits suits you?"
                                                                                option={[
                                                                                    {id: 1, label: 'No Maternity Benefits', name: 'sumInsured', icon: maternityBenefitIcon1},
                                                                                    {id: 2, label: '25,000 for Normal & 35,000 for C- Section', name: 'sumInsured', icon: maternityBenefitIcon2},
                                                                                    {id: 3, label: '35,000 for Normal & 50,000 for C- Section', name: 'sumInsured', icon: maternityBenefitIcon3},
                                                                                    {id: 4, label: '50,000 for both Normal & C- Section', name: 'sumInsured', icon: maternityBenefitIcon4}
                                                                                ]}
                                                                                tooltip="Maximum amount the insurance company will pay you in case of loss due to defined liability."
                                                                            />
                                                                            <FormButton
                                                                                onClickBack={handleEnterDetailsFourthToggle}
                                                                                onClickNext={handleEnterDetailsFiveToggle}
                                                                            />
                                                                        </FormLayout>
                                                                    </Col>
                                                                </Row>
                                                            ) : (
                                                                <>
                                                                    {isEnterDetailsSixActive ? (
                                                                        <Row className='g-4 g-xxl-5'>
                                                                            <Col xl={6} xxl={6}>
                                                                                <ProductFormContent
                                                                                    title="Optimal Hospitalization Charges"
                                                                                    description="Experience worry-free care with our all-inclusive hospital room package"
                                                                                    talkExpert="himani"
                                                                                />
                                                                            </Col>
                                                                            <Col xl={6} xxl={6}>
                                                                                <FormLayout
                                                                                    title="6. Room Rent Details"
                                                                                    progressValue="78"
                                                                                >
                                                                                    <FormRadio
                                                                                        label="What kind of Room Rent works for you?"
                                                                                        option={[
                                                                                            {id: 1, label: '2% of Rs 5 Lac for Normal & 4% of Rs 5 Lac for ICU', name: 'roomRent', icon: roomRentIcon1},
                                                                                            {id: 2, label: '1% of Rs 5 Lac for Normal & 2% of Rs 5 Lac for ICU', name: 'roomRent', icon: roomRentIcon2},
                                                                                            {id: 3, label: 'No Room Rent Capping', name: 'roomRent', icon: roomRentIcon3}
                                                                                        ]}
                                                                                        tooltip="Maximum amount the insurance company will pay you in case of loss due to defined liability."
                                                                                    />
                                                                                    <FormButton
                                                                                        onClickBack={handleEnterDetailsFiveToggle}
                                                                                        onClickNext={handleEnterDetailsSixToggle}
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
                                                                                    title="7. Existing Policy Details"
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
                                                                                        onClickBack={handleEnterDetailsSixToggle}
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
                                                </>
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
