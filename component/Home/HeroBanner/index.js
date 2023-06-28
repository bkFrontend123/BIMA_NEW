import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import IndustryBlock from '../../IndustryBlock'

export default function HeroBanner(props) {
  const { title, subtitle, description } = props
  return (
    <>
      <div className='homeHero'>

        {/* <img src='/dummyHeader.webp' className='homeBannerImg'/> */}
        <div className={`homeBanner HomeBannerStyle `}>
          <div className='container'>
            <div className={`homeBannerText`}>
              <div className='row align-items-end@'>
                <div className='col-12'>  
                  <h1 className='homeBannerTextTitle title60 font-secondary text-primary font-weight-700 mb-md-0 mb-3'>{title} <br/>
                  <i className='text-yellow'>{subtitle}</i>
                  </h1>
                  <p className={` font-primaryNormal font-weight-500 BannerDescription text-black`}>{description}</p>
                </div>
              </div>
              <div className='row align-items-center'>
                <div className='col-7'>
                  <div className='homeBannerText-bottom'>
                    <div className='homeBannerText-bottomCard'>
                      <h2 className='homeBannerText-bottomCard-title title-24 text-primary font-weight-600 mb-0'>Simplified</h2>
                      <p className='homeBannerText-bottomCard-descrip title-20 text-black font-weight-500 mb-1'>Business Insurance</p>
                    </div>
                    <div className='homeBannerText-bottomCard'>
                      <h2 className='homeBannerText-bottomCard-title title-24 text-primary font-weight-600 mb-0'>Easy 24*7</h2>
                      <p className='homeBannerText-bottomCard-descrip title-20 text-black font-weight-500 mb-1'>Claims Support</p>
                    </div>
                    <div className='homeBannerText-bottomCard'>
                      <h2 className='homeBannerText-bottomCard-title title-24 text-primary font-weight-600 mb-0'>Best</h2>
                      <p className='homeBannerText-bottomCard-descrip title-20 text-black font-weight-500 mb-1'>Prices</p>
                    </div>
                  </div>
                </div>
                <div className='col-5'>
                  <div className='homeBannerText-bottomCard homeBannerText-bottomCard-last ms-md-auto align-items-end'>
                    {/*<h2 className='title-24 text-primary font-secondary font-weight-600 mb-0'>Sample Digital &amp; Transparent</h2>*/}
                    <img src="/SDT_icon.svg" alt="Simple Digital & Transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <IndustryBlock />
          {/* <div className={`homeBannerBtn d-flex`}>
              <a className='btnCommon yellowBtn text-decoration-none'>
                <span> Get Free Recommendations </span>
                <img className='ms-3' src='/icons/arrowRight.svg' />
              </a>
            </div> */}

          {/* <div className={`heroPlay d-sm-flex  d-flex justify-content-center justify-content-sm-start align-items-center `}>
              <Link href="/">
                <Image
                  src="/icons/hero-play.svg"
                  alt="Picture of the author"
                  width={118}
                  height={118}
                />
              </Link>              
              <p className='heroPlayText title24 m-0 ms-md-4 ms-3 font-weight-500'>See how it works</p>
            </div> */}
        </div>

        <style jsx scope>
          {`
            .homeBanner {
              margin-top: 100px;
              padding-bottom: 20px;
            }
            .homeBannerTextTitle {

            }
            .BannerDescription{
              font-size: 24px;
              line-height: 36px;
              margin-bottom: 35px;
            }
            .homeBannerText{
              padding-left: 35px;
            }
            .homeBannerText-bottom{
              display: flex;
              align-items: end;
              gap: 0 80px;
            }
            .homeBannerText-bottomCard{
              border-bottom: 4px solid var(--vt-c-yellow)
            }
            .homeBannerText-bottomCard-descrip{
              margin-top: -5px;
            }
          
            .homeBannerText-bottomCard-last {
              display: flex;
              border: 0;
              padding: 0;
              padding-right: 30px;
              max-width: 272px; 
              height: 100%;
              margin-top: -230px;
            }
            .homeBannerText-bottomCard-last  .title-24 {
              line-height: 28px;
            }
            
            .homeBannerProduct{
              margin-top: 85px;
              padding: 85px;
              box-shadow: 0px 10px 40px 0px #D9D9D9;
              border: 4px dashed var(--vt-c-yellow);
            }
            .homeBannerProduct-heading{
              margin-bottom: 30px;
            }
            .homeBannerProduct-headingText{
              // width: 350px;
            }
            .homeBannerProduct-card img{
              width: 52px;
            }
            .homeBannerText-bottomCard-title{
              line-height: 36px;
            }
            .heroPlay {
                padding-top: 112px;
            }
            .homeBannerBtn a{
                padding: 20px 41px;
                box-shadow: 5px 10px 10px rgba(14, 43, 114, 0.1);
            }
            @media (min-width: 1300px){
              .container {
                max-width: 1170px !important;
              }
            }
            @media (min-width: 1399px){
              .container {
                max-width: 1300px !important;
              }
            }
            @media (min-width:1600px) {
              .container {
                max-width: 1460px !important;
              }
            }
            @media (min-width:1650px) {
              .container {
                max-width: 1548px !important;
              }
            }
            @media only screen and (max-width: 1650px) {
              .homeBannerText-bottomCard-last{
                max-width: 220px;
              }
            }
            @media only screen and (max-width: 1450px) {   
              .homeBannerProduct{
                padding: 60px;
              }
                .BannerDescription{
                  font-size: 22px;
                  line-height: 34px;
                  margin-bottom: 30px;
                }
                .homeBannerBtn a{
                  padding: 16px 28px;
                }
                .heroPlay {
                    padding-top: 40px;
                }

                .title-18 {
                    font-size: 16px;
                    line-height: 24px;
                }
            }
            @media only screen and (max-width: 1398px) {
              .homeBannerProduct {
                padding: 50px;
              }
              .title-20 {
                font-size: 18px;
                line-height: 26px;
              }
              .homeBannerProduct-card > div  br {
                display: none;
              }
            }
            @media only screen and (max-width: 1200px) {
                .HomeBannerStyle{
                    max-width: 100%;
                }
                .homeBannerProduct {
                  margin-top: 60px;
                }
                .heroPlay {
                    padding-top: 50px;
                }
                
            }
            @media only screen and (max-width: 992px) {
              .homeHero {
                margin-top: 0;
                padding-top: 0;
                // height: 92vh;
              } 
              .homeHero:before {
                background-position: 0 -5%;
                background-size: cover;
              }
              .homeBannerText-bottomCard-descrip{
                margin-top: 0;
              }
              .homeBannerContainer{
                text-align: center;
              }
              .HomeBannerStyle{
                
                  max-width: 100%;
                  display: block;
                  margin-top: 0;
              }
              .homeBannerText{
                padding-left: 0;
              }
              .homeBannerText-bottom{
                flex-wrap: wrap;
              }
              .homeBannerProduct{
                padding: 24px;
              }
              
              .homeBannerText-bottomCard{
                  margin-bottom: 20px;
              }
                .BannerDescription{
                    font-size: 18px;
                    line-height: 24px;
                }
                .homeBannerBtn{
                    width: 92%;
                    justify-content: center;
                    margin: 0 auto;
                    margin-top: 60px;
                }
                .heroPlay {
                  padding-top: 32px;
                }
                
                .homeBannerBtn a{
                    padding: 14px 18px;
                    width: 100%;
                    justify-content: center;
                }

                .title64 {
                    font-size: 40px;
                    line-height: 48px;
                }
                .title24 {
                    font-size: 18px;
                    line-height:26px;
                }
                
            }

            @media only screen and (max-width: 575px) {
              .HomeBannerStyle{
                padding: 40px 0 0;
              }
              .homeBannerTextTitle br {
                display: none;
              }
              .homeBannerText-bottomCard {
                margin-bottom: 10px;
              }
              .homeBannerText-bottomCard-title {
                font-size: 20px;
                line-height: 30px;
              }
              .homeBannerText-bottomCard-descrip {
                font-size: 16px;
                line-height: 22px;
              }
              .homeBannerText-bottomCard-last {
                margin-top: 0;
                padding-right: 0;
              }
              .homeBannerProduct {
                width: calc(100% - 40px);
                margin-top: 40px;
                padding: 16px;
                border-style: solid;
              }
              .homeBannerProduct-headingText {
                text-align: center;
                font-size: 24px;
                line-height: 30px;
                font-style: italic;
              }
              .homeBannerProduct-headingDivider {
                display: none;
              }
              .homeBannerProduct-card {
                text-align: center;
                
              }
              .homeBannerProduct-card .title-20 {
                font-size: 15px;
                line-height: 20px;
              }
              
            }
          `}
        </style>
      </div>
    </>

  )
}