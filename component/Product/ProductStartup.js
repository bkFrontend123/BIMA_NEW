import React, { useState } from 'react'

import {Container, Row, Col} from 'react-bootstrap';

import IndustryBlock from '../IndustryBlock'
import ProductSchedule from './ProductSchedule'

import productStyle from '@/assets/css/product.module.css'
import headerStyle from '../HeaderPlain/style.module.css'

import DropdownArrow from '../Icons/DropdownArrow'

export default function ProductStartup() {
    return (
        <>
            <div className={`${productStyle.productStartup}`}>
                <Container>
                    <div className={`${productStyle.prodContainer}`}>
                        <div className='commonHeading text-center'>
                            <h3 className={`title-42 font-secondary font-weight-700 text-primary mb-0 ${productStyle.ProductSecLeftTitle}}`}>Business Protection for SMEs & Startups</h3>
                        </div>
                        <div className={`${productStyle.productStartupListSec}`}>
                            <IndustryBlock />
                            <div className={`${productStyle.productStartupIcon}`}>
                                <div className='badgeIconCol'>
                                    <img className='badgeIcon' src="/icons/badgeIcon.svg" alt="Simple Digital & Transparent" />
                                    <img className='badgeActiveIcon' src="/icons/badgeActiveIcon.svg" alt="Simple Digital & Transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={`${productStyle.productStartupBottom}`}>
                <Container>
                    <Row>
                        <Col>
                            <ProductSchedule />
                        </Col>
                    </Row>
                </Container>
            </div>
            <style jsx scope>
                {`
                    @media only screen and (max-width: 1699px) {
                        .title-42 {
                            font-size: 38px;
                            line-height: 52px;
                        }
                    }
                    @media only screen and (max-width: 992px) {
                        .title-42 {
                            font-size: 26px;
                            line-height: 38px;
                        }
                    }
                `}
            </style>
        </>
    )
}
