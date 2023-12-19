import React, { useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Youtube from '../Icons/Youtube'
import Insta from '../Icons/Insta'
import Twitter from '../Icons/Twitter'
import Linkdin from '../Icons/Linkdin'

export default function Footer(props) {
  const { starContent } = props;
  return (
    <>
      <Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
      </Head>
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* <div className="col-auto d-none d-md-block">
            <div className="polyBox opacity-0 border-primary bg-blueLight text-primary title16 font-weight-600 mt-2">Our Culture</div>
          </div> */}
            <div className="col-xl-11 mx-auto pe-xl-5">
              <div className=''>
                <Row>
                  <Col md={5} lg={6} xl={6}>
                    <div className='ftrLogoOuter'>
                      <div className='ftrLogoDiv'>
                      <div className='footerLogo'>
                        <Link href="/">
                          <Image
                            // loader={myLoader}
                            src="/logo-main.svg"
                            alt="Picture of the author"
                            width={346}
                            height={43}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                      <div className='ftrStartupIcon'>
                        <div className='ftrBadgeIconCol'>
                          <img className='ftrBadgeIcon' src="/icons/badgeIcon.svg" alt="Simple Digital & Transparent" />
                          <img className='ftrBadgeActiveIcon' src="/icons/badgeActiveIcon.svg" alt="Simple Digital & Transparent" />
                        </div>
                      </div>
                      </div>
                      <div className='ftrnwsltrDiv mt-2'>
                        <p className='title18 font-weight-500 mb-2'>Subscribe to our Newsletter</p>
                        <div className='ftrNwsltr'>
                          <Form>
                            <Form.Control
                              type="email"
                              id="inputEmail"
                              aria-describedby="emailHelpBlock"
                              placeholder='Your Mail Address'
                              required
                            />
                            <Button type='submit'>Subscribe</Button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={1} className='d-xl-flex d-none'></Col>
                  <Col md={4} lg={3} xl={3}>
                    <div className="footer-listMenu-list border-0">
                      <ul className="list-group list-group-borderless bg-transparent ">
                        <li className="list-group-item text-primarySkyLight2 title20 font-weight-600">Get in Touch</li>
                        <li className="list-group-item">
                          <Link href="mailto:Info@bimakavach.com" className='title18 font-weight-400'>Info@bimakavach.com</Link>
                        </li>
                        <li className="list-group-item text-blueExtraLight1 title18 font-weight-600">Liability Insurance</li>
                        <li className="list-group-item">
                          <Link href="tel:9036554785" className='title18 font-weight-400'>+91-90365-54785</Link>
                        </li>
                        <li className="list-group-item text-blueExtraLight1 title18 font-weight-600">P&C Insurance</li>
                        <li className="list-group-item">
                          <Link href="tel:9035492594" className='title18 font-weight-400'>+91-90354-92594</Link>
                        </li>
                        <li className="list-group-item text-blueExtraLight1 title18 font-weight-600">P&C Insurance</li>
                        <li className="list-group-item">
                          <Link href="tel:8792930364" className='title18 font-weight-400'>+91-87929-30364</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={3} lg={3} xl={2}>
                    <div className="footer-listMenu-list border-0">
                      <ul className="list-group list-group-borderless bg-transparent ">
                        <li className="list-group-item text-primarySkyLight2 title20 font-weight-600">Company</li>
                        <li className="list-group-item">
                          <Link href="/about" className='title18 font-weight-400'>About Us</Link>
                        </li>
                        <li className="list-group-item">
                          <Link target='_blank' href="https://www.bimakavach.com/blog/" className='title18 font-weight-400'>Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <div className='d-none d-xxl-block' style={{ height: "40px" }}></div>
                <div className='d-none d-md-block' style={{ height: "30px" }}></div>
                <div className='d-block d-md-none' style={{ height: "20px" }}></div>
                <hr></hr>
                <div className='d-none d-xxl-block' style={{ height: "30px" }}></div>
                <div className='d-none d-md-block' style={{ height: "20px" }}></div>
                <div className='d-block d-md-none' style={{ height: "20px" }}></div>
                <div className="text-blueSkyLight2 title-30 font-weight-600 mb-2 mb-md-4 text-start">Our Products</div>
                <Row className="footer-listMenu">
                  <Col md={6} lg={3}>
                    <div className="footer-listMenu-list border-0">
                      <ul className="list-group list-group-borderless bg-transparent">
                        <li className="list-group-item text-blueExtraLight1 title20 font-weight-600">Liability</li>
                        <li className="list-group-item">
                          <Link href="/directors-and-officers-insurance" className='title18 font-weight-400'>Directors & Officers Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/errors-and-omissions-insurance" className='title18 font-weight-400'>Errors & Omissions Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/general-liability-insurance" className='title18 font-weight-400'>General Liability Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="#" className='title18 font-weight-400'>Fidelity Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/product-liability-insurance" className='title18 font-weight-400'>Product Liability Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/commercial-crime-insurance" className='title18 font-weight-400'>Crime Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/workmens-compensation-insurance" className='title18 font-weight-400'>Workmen's Compensation</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/cyber-insurance" className='title18 font-weight-400'>Cyber Insurance</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6} lg={3}>
                    <div className="footer-listMenu-list footer-listMenu-listALign">
                      <ul className="list-group list-group-borderless bg-transparent">
                        <li className="list-group-item text-blueExtraLight1 title20 font-weight-600">Asset</li>
                        <li className="list-group-item">
                          <Link href="/fire-and-burglary-insurance" className='title18 font-weight-400'>Fire Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="#" className='title18 font-weight-400'>Office Package</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="#" className='title18 font-weight-400'>Shop Owner's</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="#" className='title18 font-weight-400'>Restaurant Hotels & Cafes</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="#" className='title18 font-weight-400'>Educational Institutes</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="#" className='title18 font-weight-400'>Hospitals & Clinics</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6} lg={3}>
                    <div className="footer-listMenu-list footer-listMenu-listALign">
                      <ul className="list-group list-group-borderless bg-transparent">
                        <li className="list-group-item text-blueExtraLight1 title20 font-weight-600">Engineering</li>
                        <li className="list-group-item">
                          <Link href="/contractor-all-risk-policy" className='title18 font-weight-400'>Contractor's All Risk</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/erection-all-risk-insurance" className='title18 font-weight-400'>Erection All Risk</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/contractor-plant-and-machinery-insurance" className='title18 font-weight-400'>Contractor's Plant & Machinery</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6} lg={3}>
                    <div className="footer-listMenu-list footer-listMenu-listALign">
                      <ul className="list-group list-group-borderless bg-transparent">
                        <li className="list-group-item text-blueExtraLight1 title20 font-weight-600">For Employees</li>
                        <li className="list-group-item">
                          <Link href="/group-health-insurance" className='title18 font-weight-400'>Group Health Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/group-personal-accident-insurance" className='title18 font-weight-400'>Group Personal Accident</Link>
                        </li>
                      </ul>
                      <ul className="list-group list-group-borderless bg-transparent">
                        <li className="list-group-item text-blueExtraLight1 title20 font-weight-600 mt-3">Marine</li>
                        <li className="list-group-item">
                          <Link href="/marine-cargo-insurance" className='title18 font-weight-400'>Marine Transit</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <div className='d-none d-md-block' style={{ height: "140px" }}></div>
                {starContent == 'true' ? (
                  <div className="row footer-note">
                    <div className="col-md-12">
                      <p className='title14 text-yellow font-weight-500 mb-1'>*The estimated premium mentioned above is calculated under ideal conditions. The actual pricing will vary based on the specific information provided by the insured.</p>
                    </div>
                  </div>
                ) : (
                  null
                )
                }
                <div className="row footer-note mt-4">
                  <div className="col-md-12">
                    <p className='title14 text-blueExtraLight1 font-weight-600 mb-2'>Disclaimer:</p>
                    <p className='title14 text-blueExtraLight1 font-weight-500 mb-2'>BimaKavach Insurance Broking Pvt. Ltd. | CIN- U66010MP2022PTC059393 | Registered  Office- Flat No 201, Classic Avenue, 184 Shrinagar Main, Indore Madhya Pradesh India- 452018 | Phone No.- 9036554785 | Email- support@bimakavach.com </p>

                    <p className='title14 text-blueExtraLight1 font-weight-500 mb-2'>BimaKavach is registered as a Direct Broker | Registration No. 901, Registration Code No.  IRDAI / DB 985/ 2022, Valid till 25/06/2026, License category- Direct Broker (General).</p>

                    <p className='title14 text-blueExtraLight1 font-weight-500 mb-0'>Visitors are being informed that BimaKavach Insurance Broking Pvt. Ltd. holds the right to share the information submitted by you on the website with Insurers. Product information is genuine and exclusively based on information obtained from insurers.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='d-none d-md-block' style={{ height: "90px" }}></div>
          <div className='d-md-none' style={{ height: "50px" }}></div>
          <div className="row">
            <div className="col-xl-11 mx-auto">
              <div className='copyrightDivider w-100'></div>
            </div>
            <div className="col-xl-11 mx-auto copyright">
              <div className='row align-items-center justify-content-between'>
                <div className='col-md'>
                  <p className='title-15 text-primarySkyLight2 font-weight-500 m-0'>© 2023 BimaKavach Insurance Broking Pvt. Ltd. All Rights Reserved</p>
                </div>
                <div className='col-md-auto'>
                  <div className='d-md-flex align-items-center gap-3 mt-3 mt-md-0'>
                    <div className="ftrLinks">
                      <Link href="/privacy-policy">Privacy Policy</Link>
                      <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    </div>
                    <div className='footerSocial d-flex align-items-center'>
                      {/*<div className='footerSocialIco'>
                          <Link href="/">
                            <Insta iconColor="white" width="20" height="20" />
                          </Link>
                        </div>
                        <div className='footerSocialIco'>
                          <Twitter iconColor="white" width="20" height="20" />
                        </div>*/}
                      <div className='footerSocialIco'>
                        <Link target='_blank' href="https://www.linkedin.com/company/bimakavach/">
                          <Linkdin iconColor="white" width="20" height="20" />
                        </Link>
                      </div>
                      <div className='footerSocialIco'>
                        <Link target='_blank' href="https://www.youtube.com/@bimakavach">
                          <Youtube iconColor="white" width="20" height="20" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
              .footerSocialIco{
                margin-right: 36px;
              }
              .footerSocialIco:last-child {
                margin-right: 0;
              }
              .backToTop{
                font-size: 18px;
                color: #0e2b72;
                border: 2px solid #0e2b72;
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;  
                margin-bottom: 40px;
              }

                @media only screen and (min-width: 1750px) {
                      .container{
                          max-width: 1600px;
                      }
                }
                @media only screen and (max-width: 575px) {
                  .title18 {
                    font-size: 16px;
                    line-height: 28px;
                  }
                  .title-30 {
                    font-size: 22px;
                    line-height: 32px;
                  }
                }
            `}
      </style>

    </>

  )
}
