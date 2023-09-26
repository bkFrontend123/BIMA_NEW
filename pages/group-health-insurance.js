import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import FooterPlain from '@/component/FooterPlain'

import ProductContentLeft from '@/component/GHI/ProductContent/ProductContentLeft'
import ProductContentRight from '@/component/GHI/ProductContent/ProductContentRight'
import RatingSlider from '@/component/GHI/RatingSlider'

import productStyle from '@/assets/css/eBnftProduct.module.css'

import productIcon from '@/public/GHI/productIcons/groupHealthIcon.svg'

export default function GroupHealth_Insurance() {

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/group-health-flow');
    };

    return (
        <>
            <Head>
                <title>Group Health Insurance | BimaKavach</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                insuranceType="employeeBenefit"
                logo="ghi"
                talkExpert
                scheduleCall
            />
            <section className={`sectionPadding ${productStyle.eBnftPrdctCntntBlock}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={12}>
                            <Row className='g-4 g-xxl-5'>
                                <Col xl={6} xxl={6}>
                                    <ProductContentLeft
                                        icon={productIcon}
                                        title="Group Health Insurance"
                                        description="Give your employees a healthier and happier  tomorrow at just ₹1,453 per year"
                                        talkExpert="himani"
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
            <div className={`${productStyle.eBnftRatingBlock}`}>
                <RatingSlider />
            </div>
            <FooterPlain
                insuranceType="employeeBenefit"
            />
        </>
    )
}