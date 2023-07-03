import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import HowGetStarted from '../component/Home/HowGetStarted'
import ScheduleWhatsapp from '../component/ScheduleWhatsapp'
import Users from '../component/Icons/Users'
import IconText from '../component/Industry/IconText'
import OurBlog from '../component/Product/OurBlog'

export default function Industry() {


  useEffect(() => {
    document.body.classList.add("homePageBody")
  }, []);
  return (
    <>
      <Navbar />
      <div className='industry'>
        <div className='industryHero'>
          <div className={'d-block d-md-none mb-5'}>
            <HowGetStarted />
          </div>
          <div className='container '>
            <div className='row '>
              <div className='col-md-12'>
                <div className='breadcrumb '>
                <ul
                  // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                  >
                    <li>
                      <a className='text-blueGray px-0 text-uppercase title-15' href="/">Home</a>
                    </li>

                    <li>
                      <a className='text-blueGray px-2 text-uppercase title-15 d-block' style={{ transform: "rotate(-90deg)" }}>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#9FAAC7" strokeWidth="1.5" strokeLinejoin="bevel" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className=' text-blueGray px-0 text-uppercase title-15' >Industries</a>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='container '>
            <div className='row '>
              <div className='col-md-7'>
                <h3 className='industryHero-title title-60 font-secondary font-weight-600 text-primary mb-0'>Industries</h3>
                <p className='industryHero-descrip title-21 text-black font-weight-500 '>The way that a business manages risk can vary widely depending on the company’s type, the products or services it offers, and the industry in which it operates. It can be difficult to determine exactly what insurance coverage is necessary, so we have compiled information about all the insurance options that are relevant to your business and industry.</p>
                <ScheduleWhatsapp />
              </div>
            </div>
            <div className={`row `}>
              <div className={`col`}>
              </div>
            </div>
          </div>
        </div>

        {/* ======= Technology Start====== */}
        <div className="industryIconText bg-primaryDark blue">
          <div className='container '>
            <div className='row '>
              <div className='col-12 '>
                  <div className='industryIconText-title font-secondary text-yellow title-48'>Technology</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-6 col-md-4 '>
                  <IconText title="E-Commerce" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="Ed-Tech" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="E-Sports" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="Fin-Tech" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="SAAS" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="Startups" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>              
            </div>
          </div>
        </div>
        {/* ======= Technology End====== */}

        {/* ======= industry Start====== */}
        <div className="industryIconText bg-yellow">
          <div className='container '>
            <div className='row '>
              <div className='col-12 '>
                  <div className='industryIconText-title font-secondary font-weight-600 title-48'>Traditional</div>
              </div>
            </div>
            <div className='row '>
              <div className='col-6 col-md-4 '>
                  <IconText title="E-Commerce" themeColor="yellow" btnLink="industry_detail">
                      <Users 
                        iconColor="black"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '> 
                  <IconText title="Ed-Tech" themeColor="yellow" btnLink="industry_detail">
                      <Users 
                        iconColor="black"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="E-Sports" themeColor="yellow" btnLink="industry_detail">
                      <Users 
                        iconColor="black"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="Fin-Tech" themeColor="yellow" btnLink="industry_detail">
                      <Users 
                        iconColor="black"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="SAAS" themeColor="yellow" btnLink="industry_detail">
                      <Users 
                        iconColor="black"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="Startups" themeColor="yellow" btnLink="industry_detail">
                      <Users 
                        iconColor="black"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              
            </div>
          </div>
        </div>
        {/* ======= industry End====== */}

         {/* ======= Emerging Start====== */}
         <div className="industryIconText bg-primaryDark">
          <div className='container '>
            <div className='row '>
              <div className='col-12 '>
                  <div className='industryIconText-title font-secondary font-weight-600 text-yellow title-48'>Emerging Industries</div>
              </div>
            </div>
            <div className='row '>
              <div className='col-6 col-md-4 '>
                  <IconText title="E-Commerce" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="Ed-Tech" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="E-Sports" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="Fin-Tech" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="SAAS" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              <div className='col-6 col-md-4 '>
                  <IconText title="Startups" themeColor="blue" btnLink="industry_detail">
                      <Users 
                        iconColor="white"
                        width="48"
                        height="48"
                      />
                  </IconText>
              </div>
              
            </div>
          </div>
        </div>
        {/* ======= Emerging End====== */}
        <div className='d-none d-lg-block' style={{height: "180px"}}></div>
        <div className='d-block d-lg-none' style={{height: "48px"}}></div>
        <OurBlog />
        <HowGetStarted />

      </div>
      <Footer />


      <style jsx scope>
        {`
            .industry{
              margin-bottom: 280px;
            }
            .breadcrumb{
              margin-bottom: 28px;
            }
              .industryHero{
                  padding-top: 120px;
                  padding-bottom: 180px;
                  
              }
              .industryHero-descrip{
                  margin-top: 18px;
                  margin-bottom: 36px;
              }
              .industryIconText{
                padding: 175px 0 50px 0;
              }
              .industryIconText-title{
                  margin-bottom: 120px;
              }

                .title-64 {
                    font-size: 64px;
                    line-height: 78px;
                  }
                  
                  .title-60 {
                    font-size: 60px;
                    line-height: 80px;
                  }
                  
                  .title-48 {
                    font-size: 48px;
                    line-height: 60px;
                  }
                  
                  .title-32 {
                    font-size: 32px;
                    line-height: 48px;
                  }
                  
                  .title-30 {
                    font-size: 30px;
                    line-height: 44px;
                  }
                  
                  .title-25 {
                    font-size: 25px;
                    line-height: 33px;
                  }
                  
                  .title-24 {
                    font-size: 24px;
                    line-height: 33px;
                  }
                  
                  .title-22 {
                    font-size: 22px;
                    line-height: 32px;
                  }
                  .title-21 {
                    font-size: 21px;
                    line-height: 31.5px;
                  }
                  .title-20 {
                    font-size: 20px;
                    line-height: 30px;
                  }
                  .title-18 {
                    font-size: 18px;
                    line-height: 28px;
                  }
                  .title-15{
                      font-size: 15px;
                      line-height: 22px;                    
                  }
                  .title-16 {
                    font-size: 16px;
                    line-height: 20px;
                  }
                  
                  .title-14 {
                    font-size: 14px;
                    line-height: 20px;
                  }
                  
                  .title-12 {
                    font-size: 12px;
                    line-height: 18px;
                  }
                   @media only screen and (min-width: 1200px) {
                     .container{
                       padding-left: 80px;
                     }
                   }

                   @media only screen and (max-width: 1450px) {
                    .title-60 {
                        font-size: 52px;
                        line-height: 64px;
                    }
                    .title-64 {
                        font-size: 52px;
                        line-height: 64px;
                    }
                    .title-24 {
                        font-size: 22px;
                        line-height: 30px;
                    }
                  }
                  @media only screen and (max-width: 575px) {
                    
                    .industry{
                      padding: 0; 
                      padding-bottom: 48px;
                      margin-bottom: 46px;
                    }
                    .industryHero{
                      padding-top: 0;
                    }
                    .industryIconText{
                      padding: 48px 0;
                    }
                    .industryIconText-title{
                      margin-bottom: 45px;
                    }

                    .industryIconText .container{
                      padding: 0 40px 0 60px;
                    }
                    .title-64{
                        font-size: 36px;
                        line-height: 38px;
                    }
                    .title-60{
                      font-size: 30px;
                      line-height: 36px;
                    }
                    .title-48{
                      font-size: 36px;
                      line-height: 38px;
                    }
                    .title-48{
                        font-size: 30px;
                        line-height: 36px;
                      }
                      .title-21 {
                        font-size: 18px;
                        line-height: 27px;
                      }
                      .title-15{
                        font-size: 12px;
                        line-height: 18px;                    
                      }
                      
                      .btnCommon{
                        font-size: 80px;
                        line-height: 27px;
                    }
                    .title-22 {
                      font-size: 18px;
                      line-height: 27px;
                    }
                  }
                  @media only screen and (max-width: 370px) {
                    .industryIconText .container{
                      padding: 0 15px 0 40px;
                    }
                  }
                `}
      </style>
    </>
  )
}
