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
  const { customClass, newDesign, logo, emailQuote, scheduleCall, downloadPDF, talkExpert, isFluid } = props;

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

      <header className={`${style.hdrBlock} ${customClass} ${newDesign === 'true' ? style.hdrNewBlock : null} ${newDesign === 'true' ? 'hdrNewBlock' : null}`}>
        <Container fluid={isFluid}>
          <Row className='justify-content-center'>
            <Col xl={newDesign === 'true' ? 12 : 11}>
              <Row className={`g-3 g-md-4 ${newDesign === 'true' ? 'g-xxl-5' : 'align-items-center justify-content-between'}`}>
                <Col md={newDesign === 'true' ? (emailQuote ? 4 : 6) : null} className={'col'}>
                  {newDesign === 'true' ? (
                    <>
                      <div className={style.logoNew}>
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
                <Col md={newDesign === 'true' ? (emailQuote ? 8 : 6) : null} className={'col-auto'}>
                  <div className={newDesign === 'true' ? null : 'd-flex align-items-center gap-3'}>
                    <div className={`d-flex align-items-center ${newDesign === 'true' ? 'justify-content-center' : 'gap-2 gap-md-3'} ${style.hdrBtnDiv}`}>
                      {emailQuote ? (
                        <>
                          {/*<div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrEmailDrpdwn}`}>
                            <Dropdown>
                              <Dropdown.Toggle variant="" id="email-quotes" className={`${newDesign === 'true' ? style.hdrDrpdwnBtn : 'btnCommon btnBorder border-primary' + style.btnSmall}`}>
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
                            <Button type="button" variant="" className={`${newDesign === 'true' ? style.hdrBtnLink : 'btnCommon btnBorder border-primary ' + style.btnSmall}`} onClick={handleShowEmail}>
                              <EmailIcon iconColor={newDesign === 'true' ? null : 'primary'} width="15" height="15" />
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
                                <Dropdown.Toggle variant="" id="talk-expert" className={`btnCommon btnBorder border-primary ${style.btnSmall}`}>
                                  <EmailIcon iconColor="primary" width="16" height="16" />
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
                            <Dropdown.Toggle variant="" id="talk-expert" className={` ${newDesign === 'true' ? style.hdrDrpdwnBtn : 'btnCommon btnBorder greyBtn ' + style.btnSmall}`}>
                              {newDesign === 'true' ? (
                                null
                              ):(
                                <i className="me-1 d-none d-lg-block">
                                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40898 5.75924L6.24938 7.23365C6.65292 7.80971 7.11198 8.35878 7.62652 8.87338C8.14112 9.38791 8.69018 9.84698 9.26625 10.2505L10.7407 9.09091L14.6666 10.3024V13.2954C14.6641 13.8466 14.4219 14.3695 14.0031 14.728C13.6569 15.0242 13.2153 15.1919 12.7605 15.1635C9.89445 14.9844 7.07972 13.8 4.88978 11.6101C2.69986 9.42018 1.51542 6.60547 1.33636 3.73937C1.30796 3.28463 1.47563 2.84302 1.7719 2.49686C2.13035 2.07805 2.65325 1.83585 3.20452 1.83331H6.19748L7.40898 5.75924ZM11.0155 10.5711L13.3333 11.2863V13.2914C13.3319 13.4544 13.26 13.609 13.1361 13.715C13.0216 13.813 12.9129 13.8371 12.8437 13.8328C10.2893 13.6732 7.78405 12.6188 5.83258 10.6673C3.88112 8.71585 2.82669 6.21062 2.6671 3.65623C2.66278 3.58697 2.68689 3.47832 2.78487 3.36385C2.89094 3.23992 3.04545 3.16802 3.2085 3.16665H5.21356L5.92881 5.48443L4.58926 7.18758L5.1573 7.99858C5.60513 8.63791 6.11409 9.24651 6.68372 9.81618C7.25338 10.3858 7.86198 10.8948 8.50132 11.3426L9.31232 11.9106L11.0155 10.5711Z" fill="currentColor"></path>
                                  </svg>															
                                </i>
                              )}
                              <span className='d-none d-lg-block'>Talk to an expert</span>
                              <i className={`d-block d-lg-none ${style.whtsApp}`}>
                                <WhatsApp iconColor="primary" width="14" height="15" />
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
                          <Link href="#" className={`${newDesign === 'true' ? style.hdrBtnLink : 'btnCommon btnBorder border-primary ' + style.btnSmall}`} onClick={handleShowCalendy}>
                            <CalenderIcon iconColor={newDesign === 'true' ? null : 'primary'} width="15" height="16" />
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
