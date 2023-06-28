import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Offcanvas, Container, Row, Col, Dropdown, Button} from 'react-bootstrap';

import CalendyModal from '../Modal/CalendyModal'
import EmailSentModal from '../Modal/EmailSentModal'

import EmailIcon from '../Icons/Email'
import CalenderIcon from '../Icons/Calender'
import DropdownArrow from '../Icons/DropdownArrow'
import DownloadIcon from '../Icons/Download'
import WhatsApp from '../Icons/WhatsApp'

import style from './style.module.css'

import mainLogo from '@/public/logo-main.svg'

export default function HeaderPlain(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCalendy, setShowCalendy] = useState(false);

  const handleCloseCalendy = () => setShowCalendy(false);
  const handleShowCalendy = () => setShowCalendy(true);
  
  const [showEmail, setShowEmail] = useState(false);

  const handleCloseEmail = () => setShowEmail(false);
  const handleShowEmail = () => setShowEmail(true);

  const { customClass, emailQuote, scheduleCall, downloadPDF, talkExpert } = props;
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
              <div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrEmailDrpdwn}`}>
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
              </div>
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
                      <p>WhatApp us: <Link href="https://wa.me/9876543210" target='_blank'>+91 9876543210</Link></p>
                      <p>Call us: <Link href="tel:9876543210">+91 9876543210</Link></p>
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

      <header className={`${style.hdrBlock} ${customClass}`}>
        <Container>
          <Row className='justify-content-center'>
            <Col xl={11}>
              <Row className="align-items-center justify-content-between">
                <Col>
                  <div className={style.logo}>
                    <Link href="/">
                      <Image src={mainLogo} width="280" height="30" alt="Bimakavach Logo" />
                    </Link>
                  </div>
                </Col>
                <Col className="col-auto">
                  <div className="d-flex align-items-center gap-3">
                    <div className={`d-flex align-items-center gap-2 gap-md-3 ${style.hdrBtnDiv}`}>
                      {emailQuote ? (
                        <div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrEmailDrpdwn}`}>
                          <Dropdown>
                            <Dropdown.Toggle variant="" id="email-quotes" className={`btnCommon btnBorder border-primary ${style.btnSmall}`}>
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
                        </div>
                      ): (
                        null
                      )}
                      {scheduleCall ? (
                        <div className={`${style.hdrBtn}`}>
                          <Link href="" className={`btnCommon btnBorder border-primary ${style.btnSmall}`} onClick={handleShowCalendy}>
                            <CalenderIcon iconColor="primary" width="16" height="16" />
                            <span className='ms-2 d-none d-lg-block'>Schedule a call</span>
                          </Link>
                        </div>
                      ): (
                        null
                      )}
                      {downloadPDF ? (
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
                      ): (
                        null
                      )}
                      {talkExpert ? (
                        <div className={`hdrDrpdwn ${style.hdrDrpdwn} ${style.hdrTalkDrpdwn}`}>
                          <Dropdown>
                            <Dropdown.Toggle variant="" id="talk-expert" className={`btnCommon btnBorder greyBtn ${style.btnSmall}`}>
                              <span className='d-none d-lg-block'>Talk to an expert</span>
                              <i className='ms-2 d-none d-lg-block'>
                                <DropdownArrow width="11" height="7" />
                              </i>
                              <i className="d-block d-lg-none">
                                <WhatsApp iconColor="primary" width="14" height="14" />
                              </i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={style.hdrDrpMenu}>
                              <div className=''>
                                <p>WhatApp us: <Link href="https://wa.me/9876543210" target='_blank'>+91 9876543210</Link></p>
                                <p>Call us: <Link href="tel:9876543210">+91 9876543210</Link></p>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      ): (
                        null
                      )}
                    </div>
                    <div className='d-none'>
                      <div className={style.offcanvasBtn}>
                        <Button variant="primary" className={style.btnMenuBar} onClick={handleShow}>
                          <span className={style.bar1}></span>
                          <span className={style.bar2}></span>
                          <span className={style.bar3}></span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>

      <CalendyModal
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
