import React from 'react'
import Image from 'next/image'

import {Container, Row, Col} from 'react-bootstrap';

import IndustryBlock from '../../IndustryBlock'

export default function HeroBanner(props) {
  const { title, subtitle, description } = props
  return (
    <>
      <div className='homeHero'>
        {/* <img src='/dummyHeader.webp' className='homeBannerImg'/> */}
        <div className={`homeBanner HomeBannerStyle`}>
          <Container>
            <div className={`homeBannerText`}>
              <Row>
                <Col xs={6}>
                  <div className={`homeBannerLeft`}>
                    <h1 className='homeBannerTextTitle title60 font-secondary text-primary font-weight-700 mb-0'>{title} <span className='text-yellow'>{subtitle}</span>
                    </h1>
                    <p className={`BannerDescription font-primaryNormal font-weight-500 text-black`}>{description}</p>
                    <div className='homeBannerText-bottom'>
                      <div className='homeBannerText-bottomCard'>
                        <i><Image src="/icons/simplifiedIcon.svg" width="33" height="20" alt="Simplified Business Icon" /></i>
                        <p className='homeBannerText-bottomCard-descrip text-primary font-weight-600 mb-0'>Simplified Business Insurance</p>
                      </div>
                      <div className='homeBannerText-bottomCard'>
                        <i><Image src="/icons/supportHomeIcon.svg" width="34" height="34" alt="Support Icon" /></i>
                        <p className='homeBannerText-bottomCard-descrip text-primary font-weight-600 mb-0'>Easy 24*7 Claims Support</p>
                      </div>
                      <div className='homeBannerText-bottomCard'>
                        <i><Image src="/icons/bestPriceIcon.svg" width="32" height="32" alt="Best Price Icon" /></i>
                        <p className='homeBannerText-bottomCard-descrip text-primary font-weight-600 mb-0'>20+ insurers with best prices</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="homeHeroMediaOuter">
                      <div className="homeHeroShield">
                        <img src="/icons/homeShield.svg" alt="Shield" />
                      </div>
                      <div className="homeHeroImg">
                        <img src="/jethaLalHome.png" alt="Shield" />
                      </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <IndustryBlock />
        </div>

        <style jsx scope>
          {`
            .homeBanner {
              margin-top: 70px;
              padding-bottom: 30px;
            }
            .homeBannerText {
              padding-left: 30px;
              padding-right: 60px;
            }
            .BannerDescription {
              font-size: 20px;
              line-height: 32px;
              margin: 30px 0;
            }
            .homeBannerText-bottom {
              display: flex;
              align-items: end;
              gap: 1rem;
            }
            .homeBannerText-bottomCard i {
              display: flex;
              height: 40px;
              align-items: center;
              margin-bottom: 8px;
            }
            .homeHeroMediaOuter {
              position: relative;
              min-height: 480px;
              z-index: 1;
            }
            .homeHeroShield {
              position: absolute;
              right: 0;
              top: -60px;
              width: auto;
              z-index: 0;
            }
            .homeHeroShield img {
              width: 400px;
              height: 460px;
            }
            .homeHeroImg {
              position: absolute;
              right: 40px;
              z-index: 1;
            }
            .homeHeroImg img {
              width: 434px;
            }
            @media (min-width: 1200px) {
              .title60 {
                font-size: 48px;
                line-height: 62px;
              }
            }
            @media (min-width: 1400px) {
              .homeBannerText {
                padding-left: 35px;
                padding-right: 80px;
              }
              .title60 {
                font-size: 52px;
                line-height: 66px;
              }
            }
            @media (min-width: 1700px) {

            }
            
            @media (max-width:1699px) {
              
            }
            @media (max-width:1399px) {
              
            }
            @media only screen and (max-width: 1199px) {
              
            }
            @media only screen and (max-width: 992px) {
              .homeHero {
                margin-top: 0;
                padding-top: 0;
              }
              .HomeBannerStyle {
                padding-top: 40px;
              }
              .homeBannerText {
                padding-left: 0;
              }
              .homeBannerText-bottom {
                flex-wrap: wrap;
              }
              .homeBannerText-bottomCard {
                  margin-bottom: 20px;
              }
              .BannerDescription {
                  font-size: 18px;
                  line-height: 24px;
                  margin: 16px 0;
              }
            }
            @media only screen and (max-width: 767px) {
              
            }
            @media only screen and (max-width: 575px) {
              .HomeBannerStyle {
                padding: 40px 0 0;
              }
              .homeBannerText-bottomCard {
                margin-bottom: 10px;
              }
              .homeBannerText-bottomCard-descrip {
                font-size: 15px;
                line-height: 22px;
              }
            }
          `}
        </style>
      </div>
    </>

  )
}