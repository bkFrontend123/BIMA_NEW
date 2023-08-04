import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import ArrowRightSmall from '../../Icons/ArrowRightSmall'

export default function IndustryList() {
  return (
    <>

      <div className="IndustryList container @d-none">
        <div className="row IndustryList-row">
          <div className="col-lg-3 IndustryList-left">
            <div className="title-36 font-weight-600 text-primary font-secondary mb-md-3 mb-2">Insurance by <i className='text-yellow fst-italic'>Industry</i></div>
            <p className='title-24 text-primary font-weight-500 mb-md-4 '>Business risk management can vary significantly depending on the type of company.</p>
            <div className='d-inline pt-1 d-none d-md-block'>
              <Link href="/industry" className='btnCommon border2 btnBorder border-primary w-100 text-black text-decoration-none justify-content-center'>
                <span className='me-2 '>Explore all Industries</span>
                <ArrowRightSmall iconColor="black " height="14" width="17" />
              </Link>
            </div>
          </div>
          <div className='col-lg-9 mt-5 mt-md-0 pe-0 '>
            <div className='IndustryList-right'>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}

                // spaceBetween={50}
                // autoplay={{
                //   delay: 1000,
                //   disableOnInteraction: false
                // }}
                breakpoints={{
                  1399: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  0: {
                    slidesPerView: 1.2,
                    spaceBetween: 40
                  },

                }}
              >
                <SwiperSlide>
                  <div className='IndustryList-card'>
                    <img className='d-none@ d-md-block' src='industry-technology.svg' />
                    {/* <img className='d-block d-md-none' src='industry-traditional-white.svg' /> */}
                    <ul className="list-group ">
                      <li className="list-group-item">
                        <div className='industryList-cardTitle title-24 text-primary font-weight-600'>Technology</div>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>SaaS</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>Fintech</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>Startups</Link>
                      </li>
                      <li className="list-group-item ">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>E-Commerce</Link>
                      </li>
                    </ul>
                    <li className="IndustryList-card-seeMore mt-5 d-block d-md-none list-group-item text-primary title20 font-weight-600">
                      <Link className='d-flex align-items-center justify-content-center' href="">
                        <span className='me-2'>See More</span>
                        <ArrowRightSmall iconColor="primary " height="14" width="17" />
                      </Link>
                    </li>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='IndustryList-card'>
                    <img className='d-none@ d-md-block' src='industry-emerging.svg' />
                    {/* <img className='d-block d-md-none' src='industry-traditional-white.svg' /> */}
                    <ul className="list-group ">
                      <li className="list-group-item">
                        <div className='industryList-cardTitle title-24 text-primary  font-weight-600'>Emerging Industries</div>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>BioTech</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>HealthTech</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>Pharmaceutical</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>Telemedicine</Link>
                      </li>
                    </ul>
                    <li className="IndustryList-card-seeMore mt-5  d-block d-md-none list-group-item text-primary title20 font-weight-600">
                      <Link className='d-flex align-items-center justify-content-center' href="">
                        <span className='me-2'>See More</span>
                        <ArrowRightSmall iconColor="primary " height="14" width="17" />
                      </Link>
                    </li>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='IndustryList-card'>
                    <img className='d-none@ d-md-block' src='industry-traditional.svg' />
                    {/* <img className='d-block d-md-none' src='industry-traditional-white.svg' /> */}
                    <ul className="list-group ">
                      <li className="list-group-item">
                        <div className='industryList-cardTitle title-24 text-primary font-weight-600'>Traditional</div>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>Manufacturing</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>Financial Services</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>Professional Services</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/industry_detail" className='text-primary title-24 font-weight-500'>Media & Advertising</Link>
                      </li>
                    </ul>
                    <li className="IndustryList-card-seeMore mt-5 d-block d-md-none list-group-item text-primary title20 font-weight-600">
                      <Link className='d-flex align-items-center justify-content-center' href="">
                        <span className='me-2'>See More</span>
                        <ArrowRightSmall iconColor="primary " height="14" width="17" />
                      </Link>
                    </li>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

        </div>
      </div>
          <div className='container mt-4 d-inline pt-1 d-block d-md-none'>
            <Link href="/industry" className='btnCommon border2 btnBorder border-primary w-100 text-black text-decoration-none justify-content-center'>
              <span className='me-2 '>Explore all Industries</span>
              <ArrowRightSmall iconColor="black " height="14" width="17" />
            </Link>
          </div>
      <div className="d-none d-md-block" style={{ height: "180px" }}></div>
      <div className="d-blok d-md-none" style={{ height: "80px" }}></div>

      <style >
        {`
            .industryList-cardTitle {
              margin-bottom: 10px;
           }
           .IndustryList-card .list-group{
            margin-top: 18px;
           }
           .IndustryList-right {
              padding-left: 160px;
           }
           
           .IndustryList-right ul li {
              padding-left: 0;
              padding-right: 0;
           }
           
           .IndustryList li {
              border: 0;
              background-color: transparent;
           }
           
           .IndustryList .IndustryList-card li a {
              text-decoration: none;
              transition: 0.5s;
           }
           .IndustryList .IndustryList-card li a:hover{
                color:  var(--vt-c-yellow) !important;
              }
              .IndustryList-card-seeMore a{
                position: relative;
              }
              @media (min-width: 1300px){
                .container {
                  max-width: 1170px !important;
                }
              }
              @media (min-width: 1399px){
                .container {
                  max-width: 1280px !important;
                }
              }
              @media (min-width:1600px) {
                .container {
                  max-width: 1420px !important;
                }
              }
              @media (min-width:1650px) {
                .container {
                  max-width: 1440px !important;
                }
              }
              @media only screen and (max-width: 1600px){
                .title-48 {
                  font-size: 44px;
                  line-height: 56px;
                }
                .title-25 {
                    font-size: 21px;
                    line-height: 30px;
                }
                .title-24 {
                    font-size: 20px;
                    line-height: 30px;
                }
                .IndustryList .btnCommon.btnBorder{
                  padding: 18px 32px;
                  font-size: 17px;
                }
              }
              @media only screen and (max-width: 1450px){
                .title-48 {
                    font-size: 40px;
                    line-height: 52px;
                }
                .IndustryList .btnCommon.btnBorder{
                  padding: 16px 26px;
                }

              }
                @media only screen and (max-width: 575px) {
                  .IndustryList{
                    padding-right: 0;
                  }
                  .IndustryList-row{
                    margin-right: 0;
                  }
                  .IndustryList-left {
                    padding-right: 52px;
                  }
                  .IndustryList-left p{
                    padding-right: 46px;

                  }
                  .IndustryList-right {
                    padding-left: 0;
                 }
                 .IndustryList-card{
                    border: 2px solid var(--vt-c-blue);
                    text-align: center;
                 }
                 .title-24{
                  font-size: 15px;
                  line-height: 21px;
                 }
                .IndustryList-left p.title-24{
                  font-size: 18px;
                  line-height: 27px;
                  color: #000 !important;
                  margin-bottom: 0;
                 }
                 
                 .IndustryList .IndustryList-card li a{
                  font-weight: 600 !important;
                 }
                }
                @media only screen and (max-width: 380px) {
                  .IndustryList-card{
                    min-height: 502px;
                  }

              }
          `}
      </style>
    </>

  )
}
