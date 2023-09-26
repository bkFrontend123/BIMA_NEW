import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Offcanvas, Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

import CalendyModal from '@/component/Modal/CalendyModal'
import EmailSentModal from '@/component/Modal/EmailSentModal'

import EmailIcon from '@/component/Icons/Email'
import CalenderIcon from '@/component/Icons/Calender'
import DropdownArrow from '@/component/Icons/DropdownArrow'
import DownloadIcon from '../Icons/Download'
import WhatsApp from '@/component/Icons/WhatsApp'

import mainLogo from '@/public/logo-main.svg'
import BimakavachLogo from '@/public/ghi/icons/bimakavachLogo.svg'
import GroupHealthLogo from '@/public/ghi/icons/groupHealthLogo.svg'
import GroupPersonalAccidentLogo from '@/public/ghi/icons/groupPersonalAccidentLogo.svg'

import style from './style.module.css'

export default function HeaderPlain(props) {
  const { customClass, insuranceType, logo, emailQuote, scheduleCall, downloadPDF, talkExpert, isFluid } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCalendy, setShowCalendy] = useState(false);

  const handleCloseCalendy = () => setShowCalendy(false);
  const handleShowCalendy = () => setShowCalendy(true);
  
  const [showEmail, setShowEmail] = useState(false);

  const handleCloseEmail = () => setShowEmail(false);
  const handleShowEmail = () => setShowEmail(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className={style.offcanvasOuter}>
        <Offcanvas.Header closeButton className={style.offcanvasHeader}>
          <div className={style.offcanvasLogo}>
            <Link href="/">
              <Image src={mainLogo} width="210" height="22" alt="Bimakavach Logo" />
            </Link>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className={style.offcanvasBody}>
          <div className={`${style.hdrBtnDiv}`}>
            {emailQuote ? (
              <>
                {/*<div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrEmailDrpdwn}`}>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="email-quotes" className={`btnCommon btnBorder border-primary ${style.btnSmall}`}>
                      <EmailIcon iconColor="primary" width="16" height="16" />
                      <span className='ms-2'>Email quotes</span>
                      <i className='ms-2'>
                        <DropdownArrow width="11" height="7" />
                      </i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={style.hdrDrpMenu}>
                      <Dropdown.Item href="" onClick={handleShowEmail}>Bajaj Allianz</Dropdown.Item>
                      <Dropdown.Item href="" onClick={handleShowEmail}>ICICI Lombard</Dropdown.Item>
                      <Dropdown.Item href="" onClick={handleShowEmail}>TATA AIJ</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>*/}
                <div className={`${style.hdrBtn}`}>
                  <Button type="button" variant="" className={`btnCommon btnBorder border-primary ${style.btnSmall}`} onClick={handleShowEmail}>
                    <EmailIcon iconColor="primary" width="16" height="16" />
                    <span className='ms-2 d-none d-lg-block'>Email quotes</span>
                  </Button>
                </div>
              </>
            ): (
              null
            )}
            {scheduleCall ? (
              <div className={style.hdrBtn}>
                <Link href="" className={`btnCommon btnBorder border-primary ${style.btnSmall}`} onClick={handleShowCalendy}>
                  <CalenderIcon iconColor="primary" width="16" height="16" />
                  <span className='ms-2'>Schedule a call</span>
                </Link>
              </div>
            ): (
              null
            )}
            {talkExpert ? (
              <div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrTalkDrpdwn}`}>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="talk-expert" className={`btnCommon btnBorder greyBtn ${style.btnSmall}`}>
                    <span>Talk to an expert</span>
                    <i className='ms-2'>
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
                            <span>Call us for Liability:</span>
                            <a href="tel:9036554785">+91 9036554785</a>
                          </div>
                        </li>
                        <li>
                          <i>
                            <Image src="/icons/call_fill_icon.svg" width="13" height="13" alt="Call" />
                          </i>
                          <div>
                          <span>Call us for P&C:</span>
                            <a href="tel:9035492594">+91 9035492594</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ): (
              null
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <header className={`${style.hdrBlock} ${customClass} ${insuranceType === 'employeeBenefit' ? style.eBnftHdrBlock : null} ${insuranceType === 'employeeBenefit' ? 'eBnftHdrBlock' : null}`}>
        <Container fluid={isFluid}>
          <Row className='justify-content-center'>
            <Col xl={insuranceType === 'employeeBenefit' ? 12 : 11}>
              <Row className={`g-4 ${insuranceType === 'employeeBenefit' ? 'g-xxl-5' : 'align-items-center justify-content-between'}`}>
                <Col md={insuranceType === 'employeeBenefit' ? (emailQuote ? 4 : 6) : null}>
                  {insuranceType === 'employeeBenefit' ? (
                    <>
                      <div className={style.eBnftLogo}>
                        <Link href="/" className={style.logoLink}>
                          {logo === 'ghi' ? (
                            <Image className={style.grpHlthLogo} src={GroupHealthLogo} width="199" height="41" alt="Group Health Logo" />
                          ) : (
                            null
                          )}
                          {logo === 'gpa' ? (
                            <Image className={style.grpAcdntLogo} src={GroupPersonalAccidentLogo} width="222" height="41" alt="Group Personal Accident Logo" />
                          ) : (
                            null
                          )}
                          <Image className={style.bimaLogo} src={BimakavachLogo} width="199" height="21" alt="Bimakavach Logo" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className={style.logo}>
                      <Link href="/">
                        <Image src={mainLogo} width="280" height="30" alt="Bimakavach Logo" />
                      </Link>
                    </div>
                  )}
                </Col>
                <Col md={insuranceType === 'employeeBenefit' ? (emailQuote ? 8 : 6) : null} className={insuranceType === 'employeeBenefit' ? null : 'col-auto'}>
                  <div className={insuranceType === 'employeeBenefit' ? null : 'd-flex align-items-center gap-3'}>
                    <div className={`d-flex align-items-center ${insuranceType === 'employeeBenefit' ? 'justify-content-center' : 'gap-2 gap-md-3'} ${style.hdrBtnDiv}`}>
                      {emailQuote ? (
                        <>
                          {/*<div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrEmailDrpdwn}`}>
                            <Dropdown>
                              <Dropdown.Toggle variant="" id="email-quotes" className={`${insuranceType === 'employeeBenefit' ? style.hdrDrpdwnBtn : 'btnCommon btnBorder border-primary' + style.btnSmall}`}>
                                <EmailIcon iconColor="primary" width="16" height="16" />
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
                          </div>*/}
                          <div className={`${style.hdrBtn}`}>
                            <Button type="button" variant="" className={`${insuranceType === 'employeeBenefit' ? style.hdrBtnLink : 'btnCommon btnBorder border-primary ' + style.btnSmall}`} onClick={handleShowEmail}>
                              <EmailIcon iconColor={insuranceType === 'employeeBenefit' ? null : 'primary'} width="15" height="15" />
                              <span className='ms-2 d-none d-lg-block'>Email quotes</span>
                            </Button>
                          </div>
                        </>
                      ): (
                        null
                      )}
                      {downloadPDF ? (
                        <>
                          {/*
                            <div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrDwnldDrpdwn}`}>
                              <Dropdown>
                                <Dropdown.Toggle variant="" id="talk-expert" className={`${insuranceType === 'employeeBenefit' ? style.hdrDrpdwnBtn : 'btnCommon btnBorder border-primary' + style.btnSmall}`}>
                                  <EmailIcon iconColor={insuranceType === 'employeeBenefit' ? null : 'primary'} width="15" height="15" />
                                  <span className='ms-2 d-none d-lg-block'>Email quotes</span>
                                  <i className='ms-2 d-none d-lg-block'>
                                    <DropdownArrow width="11" height="7" />
                                  </i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={style.hdrDrpMenu}>
                                  <Dropdown.Item href="" className='d-flex align-items-center justify-content-between gap-2' onClick={handleShowEmail}>
                                      All quotes
                                  </Dropdown.Item>
                                  <Dropdown.Item href="" className='d-flex align-items-center justify-content-between gap-2' onClick={handleShowEmail}>
                                    ICICI Lombard
                                  </Dropdown.Item>
                                  <Dropdown.Item href="" className='d-flex align-items-center justify-content-between gap-2' onClick={handleShowEmail}>
                                    Bajaj Allianz
                                  </Dropdown.Item>
                                  <Dropdown.Item href="" className='d-flex align-items-center justify-content-between gap-2' onClick={handleShowEmail}>
                                    TATA AIG
                                  </Dropdown.Item>
                                  <Dropdown.Item href="" className='d-flex align-items-center justify-content-between gap-2' onClick={handleShowEmail}>
                                    New India Assurance Co. Ltd.
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          */}
                          <div className={`${style.hdrBtn}`}>
                              <Button type="button" variant="" className={`btnCommon btnBorder border-primary ${style.btnSmall}`} onClick={handleShowEmail}>
                                <EmailIcon iconColor="primary" width="16" height="16" />
                                <span className='ms-2 d-none d-lg-block'>Email quotes</span>
                              </Button>
                          </div>
                        </>
                      ): (
                        null
                      )}
                      {talkExpert ? (
                        <div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrTalkDrpdwn}`}>
                          <Dropdown>
                              <Dropdown.Toggle variant="" id="talk-expert" className={` ${insuranceType === 'employeeBenefit' ? style.hdrDrpdwnBtn : 'btnCommon btnBorder greyBtn ' + style.btnSmall}`}>
                                <span className='d-none d-lg-block'>Talk to an expert</span>
                                <i className="d-block d-lg-none">
                                  <WhatsApp iconColor="primary" width="14" height="14" />
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
                      ): (
                        null
                      )}
                      {scheduleCall ? (
                        <div className={`${style.hdrBtn}`}>
                          <Link href="#" className={`${insuranceType === 'employeeBenefit' ? style.hdrBtnLink : 'btnCommon btnBorder border-primary ' + style.btnSmall}`} onClick={handleShowCalendy}>
                            <CalenderIcon iconColor={insuranceType === 'employeeBenefit' ? null : 'primary'} width="15" height="16" />
                              <span className='ms-2 d-none d-lg-block'>Schedule a call</span>
                          </Link>
                        </div>
                      ): (
                        null
                      )}
                    </div>
                    {/*<div className='d-none'>
                      <div className={style.offcanvasBtn}>
                        <Button variant="primary" className={style.btnMenuBar} onClick={handleShow}>
                          <span className={style.bar1}></span>
                          <span className={style.bar2}></span>
                          <span className={style.bar3}></span>
                        </Button>
                      </div>
                    </div>*/}
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
