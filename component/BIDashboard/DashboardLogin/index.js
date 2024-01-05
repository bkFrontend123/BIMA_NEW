import React from "react";
import Image from 'next/image'

import { Container, Row, Col } from "react-bootstrap";

import loginLayoutStyle from '@/assets/css/loginLayout.module.css'
import DashboardLoginHeading from "../DashboardLoginHeading";

export default function DashboardLogin(props) {
  const {loginText, children} = props;

  return (
    <>
      <div className={`${loginLayoutStyle.loginPage}`}>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl={11}>
              <Row className="align-items-center justify-content-between">
                <Col lg={6}>
                  <div className={`${loginLayoutStyle.loginLeft}`}>
                    <div className={`${loginLayoutStyle.loginHeroMediaOuter}`}>
                      <div className={`${loginLayoutStyle.loginHeroShield}`}>
                        <Image src="/icons/loginShield.svg" width={320} height={370} alt="Shield" />
                      </div>
                      <div className={`${loginLayoutStyle.loginHeroImg}`}>
                        <Image src="/loginImg.webp" width={411} height={343} alt="Dilip Joshi" />
                      </div>
                      <div className={`${loginLayoutStyle.loginHeroTextDiv}`}>
                        <div className={`${loginLayoutStyle.loginHeroText}`}>
                          <p>
                            <i className='d-none d-md-block'>
                                <Image
                                    src="/icons/getBusinessIcon.svg"
                                    alt={[<>Get Business Insurance in Minutes</>]}
                                    width={30}
                                    height={36}
                                />
                            </i>
                            <i className='d-md-none'>
                                <Image
                                    src="/icons/getBusinessIcon.svg"
                                    alt={[<>Get Business Insurance in Minutes</>]}
                                    width={20}
                                    height={26}
                                />
                            </i> Get Business Insurance in Minutes
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`${loginLayoutStyle.loginBottom}`}>
                      <div className={`${loginLayoutStyle.loginBottomCol}`}>
                        <i>
                          <Image
                            src="/icons/simplifiedIcon.svg"
                            width={33}
                            height={20}
                            alt="Simplified Business Icon"
                            loading="lazy"
                          />
                        </i>
                        <p>Simplified Business Insurance</p>
                      </div>
                      <div className={`${loginLayoutStyle.loginBottomCol}`}>
                        <i>
                          <Image
                            src="/icons/supportHomeIcon.svg"
                            width={34}
                            height={34}
                            alt="Support Icon"
                            loading="lazy"
                          />
                        </i>
                        <p>Easy 24*7 Claims Support</p>
                      </div>
                      <div className={`${loginLayoutStyle.loginBottomCol}`}>
                        <i>
                          <Image
                            src="/icons/bestPriceIcon.svg"
                            width={32}
                            height={32}
                            alt="Best Price Icon"
                            loading="lazy"
                          />
                        </i>
                        <p>20+ Insurers with Best Prices</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${loginLayoutStyle.loginRight}`}>
                    <div className={`${loginLayoutStyle.loginRightInner}`}>
                      <p>{loginText}</p>
                      {children}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}