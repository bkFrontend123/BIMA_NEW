import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProductContentLeft from '@/component/GHI/ProductContent/ProductContentLeft'
import ProductContentRight from '@/component/GHI/ProductContent/ProductContentRight'
import RatingSlider from '@/component/GHI/RatingSlider'

import productStyle from '@/assets/css/productNew.module.css'

import productIcon from '@/public/ghi/productIcons/groupPersonalAccidentIcon.svg'

export default function GroupPersonalAccident_Insurance() {

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/group-personal-accident-flow');
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
            <section className={`sectionPadding ${productStyle.prdctCntntNewBlock}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={12}>
                            <Row className='g-4 g-xxl-5'>
                                <Col xl={6} xxl={6}>
                                    <ProductContentLeft
                                        icon={productIcon}
                                        title="Group Personal Accident"
                                        description="Give employees and their families a shield against accidental disablement at just ₹1,453 per year"
                                        talkExpert="shruti"
                                    />
                                </Col>
                                <Col xl={6} xxl={6}>
                                    <ProductContentRight
                                        onClick={goToNextPage}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className={`${productStyle.ratingNewBlock}`}>
                <RatingSlider />
            </div>
            <FooterPlain
                newDesign="true"
            />
        </>
    )
}