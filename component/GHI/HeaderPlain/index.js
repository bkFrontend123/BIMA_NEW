import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Row, Col, Dropdown } from 'react-bootstrap';

import CalendyModal from '@/component/Modal/CalendyModal'
import EmailSentModal from '@/component/Modal/EmailSentModal'

import EmailIcon from '@/component/Icons/Email'
import CalenderIcon from '@/component/Icons/Calender'
import DropdownArrow from '@/component/Icons/DropdownArrow'
import WhatsApp from '@/component/Icons/WhatsApp'

import BimakavachLogo from '@/public/ghi/icons/bimakavachLogo.svg'
import GroupHealthLogo from '@/public/ghi/icons/groupHealthLogo.svg'
import GroupPersonalAccidentLogo from '@/public/ghi/icons/groupPersonalAccidentLogo.svg'

import style from './style.module.css'

export default function HeaderPlain(props) {

  const [showCalendy, setShowCalendy] = useState(false);

  const handleCloseCalendy = () => setShowCalendy(false);
  const handleShowCalendy = () => setShowCalendy(true);

  const [showEmail, setShowEmail] = useState(false);

  const handleCloseEmail = () => setShowEmail(false);
  const handleShowEmail = () => setShowEmail(true);

  const { customClass, header, emailQuote, scheduleCall, talkExpert } = props;
  return (
    <>
      <header className={`${style.hdrBlock} ${customClass}`}>
        <Container>
          <Row className='justify-content-center'>
            <Col xl={12} xxl={11}>
              <Row className='g-4 g-xxl-5'>
                <Col md={emailQuote === 'true' ? 4 : 6}>
                  <div className={style.logo}>
                    <Link href="/" className={style.logoLink}>
                      {header === 'ghi' ? (
                        <Image className={style.grpHlthLogo} src={GroupHealthLogo} width="199" height="41" alt="Group Health Logo" />
                      ) : (
                        null
                      )}
                      {header === 'gpa' ? (
                        <Image className={style.grpAcdntLogo} src={GroupPersonalAccidentLogo} width="222" height="41" alt="Group Personal Accident Logo" />
                      ) : (
                        null
                      )}
                      <Image className={style.bimaLogo} src={BimakavachLogo} width="199" height="21" alt="Bimakavach Logo" />
                    </Link>
                  </div>
                </Col>
                <Col md={emailQuote === 'true' ? 8 : 6}>
                  <div className={`d-flex align-items-center justify-content-center ${style.hdrBtnDiv}`}>
                    {emailQuote === 'true' ? (
                      <>
                        <div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrEmailDrpdwn}`}>
                          <Dropdown>
                            <Dropdown.Toggle variant="" id="email-quotes" className={`${style.hdrDrpdwnBtn}`}>
                              <EmailIcon width="15" height="15" />
                              <span className='ms-2 d-none d-lg-block'>Email quotes</span>
                              <i className='ms-2 d-none d-lg-block'>
                                <DropdownArrow width="11" height="7" />
                              </i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={style.hdrDrpMenu}>
                              <Dropdown.Item href="" onClick={handleShowEmail}>Bajaj Allianz</Dropdown.Item>
                              <Dropdown.Item href="" onClick={handleShowEmail}>ICICI Lombard</Dropdown.Item>
                              <Dropdown.Item href="" onClick={handleShowEmail}>TATA AIJ</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </>
                    ) : (
                      null
                    )}
                    {talkExpert === 'true' ? (
                      <div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrTalkDrpdwn}`}>
                        <Dropdown>
                          <Dropdown.Toggle variant="" id="talk-expert" className={`${style.hdrDrpdwnBtn}`}>
                            <span className='d-none d-lg-block'>Talk to an expert</span>
                            <i className="d-block d-lg-none">
                              <WhatsApp width="14" height="14" />
                            </i>
                            <i className='ms-2 d-none d-lg-block'>
                              <DropdownArrow width="11" height="7" />
                            </i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className={style.hdrDrpMenu}>
                            <div>
                              <ul>
                                <li>
                                  <i>
                                    <Image src="/icons/whatsapp_icon.svg" width="18" height="19" alt="Whatsapp" />
                                  </i>
                                  <div>
                                    <span>WhatApp us:</span>
                                    <a href="https://wa.me/9036554785" target="_blank">+91 9036554785</a>
                                  </div>
                                </li>
                                <li>
                                  <i>
                                    <Image src="/icons/call_fill_icon.svg" width="13" height="13" alt="Call" />
                                  </i>
                                  <div>
                                    <span>For Liability Insurance:</span>
                                    <a href="tel:9036554785">+91 9036554785</a>
                                  </div>
                                </li>
                                <li>
                                  <i>
                                    <Image src="/icons/call_fill_icon.svg" width="13" height="13" alt="Call" />
                                  </i>
                                  <div>
                                    <span>For P&C Insurance:</span>
                                    <a href="tel:9035492594">+91 9035492594</a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    ) : (
                      null
                    )}
                    {scheduleCall === 'true' ? (
                      <div className={`${style.hdrBtn}`}>
                        <Link href="" className={`${style.hdrBtnLink}`} onClick={handleShowCalendy}>
                          <CalenderIcon width="15" height="15" />
                          <span className='ms-2 d-none d-lg-block'>Schedule a call</span>
                        </Link>
                      </div>
                    ) : (
                      null
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>

      <CalendyModal
        calendyLink="tejas"
        show={showCalendy}
        handleClose={handleCloseCalendy}
      />
      <EmailSentModal
        show={showEmail}
        handleClose={handleCloseEmail}
      />
    </>
  )
}
