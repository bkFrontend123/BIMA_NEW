import React,{useRef} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import {Form, Button} from 'react-bootstrap';

import Youtube from '../Icons/Youtube'
import Insta from '../Icons/Insta'
import Twitter from '../Icons/Twitter'
import Linkdin from '../Icons/Linkdin'

export default function Footer() {

  return (
    <>
    <Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
    </Head>
    <div className="footer ">
      <div className="container">
        <div className="row">
          {/* <div className="col-auto d-none d-md-block">
            <div className="polyBox opacity-0 border-primary bg-blueLight text-primary title16 font-weight-600 mt-2">Our Culture</div>
          </div> */}
          <div className="col-xl-11 mx-auto pe-xl-5">
            <div className=''>
              <div className="row">
                <div className="col-md-5 footerLogo">
                  <Link href="/">
                    <Image
                      // loader={myLoader}
                      src="/logo-white.svg"
                      alt="Picture of the author"
                      width={400}
                      height={68}
                    />
                  </Link>
                  <p className='title18 text-primarySkyLight2 font-weight-400 mt-4 mt-lg-5 mb-3'>Subscribe to our Newsletter</p>
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
                <div className="col-md-4">
                  <div className="footer-listMenu-list border-0 mt-3 mt-md-0">
                      <ul className="list-group list-group-borderless bg-transparent ">
                        <li className="list-group-item text-primarySkyLight2 title20 font-weight-600">Company</li>
                        <li className="list-group-item">
                          <Link href="/about" className='title18 font-weight-400'>About</Link>
                        </li>
                        <li className="list-group-item">
                          <Link target='_blank' href="https://www.bimakavach.com/blog/" className='title18 font-weight-400'>Blogs</Link>
                        </li>
                        {/*<li className="list-group-item">
                          <Link href="/" className='title18 font-weight-400'>Resource Hub</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/" className='title18 font-weight-400'>White Papers</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/career" className='title18 font-weight-400'>Careers at BimaKavach</Link>
                        </li>*/}
                      </ul>
                    </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-listMenu-list border-0">
                      <ul className="list-group list-group-borderless bg-transparent ">
                        <li className="list-group-item text-primarySkyLight2 title20 font-weight-600">Get in Touch</li>
                        <li className="list-group-item">
                          <Link href="mailto:info@bimakavach.co" className='title18 font-weight-400'>info@bimakavach.com</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="tel:+91 9036554785" className='title18 font-weight-400'>+91 9036554785</Link>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
              <div className='d-none d-md-block' style={{ height: "90px" }}></div>
              <div className='d-block d-md-none' style={{ height: "0" }}></div>
              <div className="text-white title-30 font-weight-600 mb-2 mb-md-4 text-end text-md-start">Our Products</div>
              <div className="row footer-listMenu">
                <div className="col-md-3">
                  <div className="footer-listMenu-list border-0">
                    <ul className="list-group list-group-borderless bg-transparent">
                      <li className="list-group-item text-yellow title20 font-weight-600">Liability</li>
                      <li className="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Directors & Officers Insurance</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Errors & Omissions Insurance</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="" className='title18 font-weight-400'>General Liability Insurance</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Crime Insurance</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Cyber Insurance</Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Product Liability Insurance</Link>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Fidelity Insurance</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Workman's Compensation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-listMenu-list footer-listMenu-listALign">
                    <ul className="list-group list-group-borderless bg-transparent ">
                      <li className="list-group-item text-yellow title20 font-weight-600">Asset</li>
                      <li className="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Fire Insurance</Link>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Office Package</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Shop Owner’s</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Restaurant Hotels & Cafes</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Educational Institutes</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Hospitals & Clinics</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-listMenu-list footer-listMenu-listALign">
                    <ul className="list-group list-group-borderless bg-transparent ">
                      <li className="list-group-item text-yellow title20 font-weight-600">Engineering</li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Contractors All Risk</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Erection All Risk</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Contractors Plant & Machinery</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-listMenu-list footer-listMenu-listALign">
                    <ul className="list-group list-group-borderless bg-transparent ">
                      <li className="list-group-item text-yellow title20 font-weight-600">For Employees</li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Group Health Insurance</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Group Personal Accident</span>
                      </li>
                      <li className="list-group-item text-yellow title20 font-weight-600 mt-4">Marine</li>
                      <li className="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Marine Transit</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='d-none d-md-block' style={{ height: "90px" }}></div>
              <div className='d-md-none' style={{ height: "30px" }}></div>

              <div className="row footer-note text-md-start text-center">
                <div className="col-md-12">
                  <div className='d-block d-none' style={{ height: "40px" }}></div>
                  <p className='title12 text-primarySkyLight1 font-weight-600 text-uppercase mb-1'>Disclaimer:</p>
                  <p className='title12 text-primarySkyLight2 text-uppercase font-weight-500 mb-1'>BimaKavach Insurance Broker Pvt. Ltd. |CIN- U66010MP2022PTC059393 | Registered  Office- Flat No 201, Classic Avenue,184 Shrinagar Main, Indore Madhya Pradesh India- 452018 | Phone No.- 9036554785 | Email- support@bimakavach.com </p>

                  <p className='title12 text-primarySkyLight2 text-uppercase font-weight-500 mb-1'>BimaKavach is registered as a Direct Broker | Registration No. 901, Registration Code No.  IRDAI / DB 985/ 2022, Valid till 25/06/2026, License category- Direct Broker (General).</p>

                  <p className='title12 text-primarySkyLight2 text-uppercase font-weight-500 mb-0'>Visitors are being informed that BimaKavach Insurance Broker Pvt. Ltd. holds the right to share the information submitted by you on the website with Insurers. Product information is genuine and exclusively based on information obtained from insurers.</p>
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
                  <p className='title-15 text-primarySkyLight2 font-weight-500 m-0'>© 2023 BimaKavach Technologies Pvt. Ltd. All Rights Reserved</p>
                </div>
                <div className='col-md-auto'>
                  <div className='d-md-flex align-items-center gap-3 mt-3'>
                    <div class="ftrLinks">
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
