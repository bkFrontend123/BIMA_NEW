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
                            {/*<div className={`tabContainer my-4 my-lg-5 ${productStyle.productStartupTab}`}>
                                <span id='startupTabBtn' className="tabLink title-22 transition-all active">Liability Insurance</span>
                                <span id='startupTabBtn' className="tabLink title-22 transition-all">Asset Insurance</span>
                            </div>
                            <div className={`pt-1 overflow-hidden ${productStyle.inciTabPanel}`}>
                                <div data-startup className={`${productStyle.inciTabPanelBox}`}>
                                    <div className={`${productStyle.productStartupAsset}`}>
                                        <Row className='g-4'>
                                            <Col lg={5}>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup1.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Directors & Officers Insurance</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Venenatis at at magna ut vestibulum odio sed at faucibus. Ultrices facilisis laoreet sed porta id duis sapien et. Enim sem facilisis suscipit.</p>
                                                </div>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup2.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Cyber Crime  Insurance</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Diam at sit scelerisque nam. Vestibulum nunc gravida sed quisque. Nunc id diam non neque porttitor sed fermentum. Eu justo quis maecenas.</p>
                                                </div>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup3.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Crime/Fidelty Insurance</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Non enim maecenas purus aliquet tincidunt arcu. Lacus mi ullamcorper bibendum sed risus eget. Orci facilisis sit sodales nibh purus sed habitant.</p>
                                                </div>
                                            </Col>
                                            <Col lg={2} className='d-none d-lg-inline-block'></Col>
                                            <Col lg={5}>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup4.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Errors & Omissions Insurance</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Pulvinar nunc in sed malesuada congue. Dignissim sed aliquet vehicula facilisis natoque in ut. Urna ultrices vivamus quam vitae quam tortor.</p>
                                                </div>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup5.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>General Liability Insurance</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Morbi velit in quisque commodo enim penatibus. Dui posuere purus duis turpis integer ullamcorper. Arcu dignissim ultrices eu sapien.</p>
                                                </div>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup6.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Product Liability Insurance</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Lorem ipsum dolor sit amet consectetur. In quam euismod vestibulum in commodo. Massa tellus sit interdum pulvinar. Mus imperdiet scelerisque.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                    <div className={`${productStyle.productStartupAsset}`}>
                                        <Row className='g-4'>
                                            <Col md={5}>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup7.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Fire Insurance</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Venenatis at at magna ut vestibulum odio sed at faucibus. Ultrices facilisis laoreet sed porta id duis sapien et. Enim sem facilisis suscipit.</p>
                                                </div>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup8.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Marine Insurance</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Diam at sit scelerisque nam. Vestibulum nunc gravida sed quisque. Nunc id diam non neque porttitor sed fermentum. Eu justo quis maecenas.</p>
                                                </div>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup9.png" />
                                                        <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Machine Breakdown</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Non enim maecenas purus aliquet tincidunt arcu. Lacus mi ullamcorper bibendum sed risus eget. Orci facilisis sit sodales nibh purus sed habitant.</p>
                                                </div>
                                            </Col>
                                            <Col md={2}></Col>
                                            <Col md={5}>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup10.png" />
                                                        <h4 className='title-26 font-weight-600 text-primary font-secondary mb-0'>Contractors All Risk</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Ullamcorper elementum interdum pulvinar ut eget elit. Massa nibh eget morbi malesuada massa sed id sodales. Bibendum ipsum et a.</p>
                                                </div>
                                                <div className={`${productStyle.productStartupCard}`}>
                                                    <div>
                                                        <img src="/startup11.png" />
                                                        <h4 className='title-26 font-weight-600 text-primary font-secondary mb-0'>Erection All Risk</h4>
                                                    </div>
                                                    <p className='title-18 text-blueGray mt-2 mb-0'>Morbi velit in quisque commodo enim penatibus. Dui posuere purus duis turpis integer ullamcorper. Arcu dignissim ultrices eu sapien.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>*/}
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
