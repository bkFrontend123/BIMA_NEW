import React, { useState, useEffect, Children } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Row, Col} from 'react-bootstrap';

import TalkExpert from '@/component/TalkExpert'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'
import talkExpertStyle from '@/component/TalkExpert/style.module.css'

import supportIcon from '@/public/icons/supportNewIcon.svg'
import expertImg from '@/public/himaniImg.png'

export default function DashboardHeader(props) {
  const {talkExpert} = props;

  return (
    <>
      <div className={`mb-4`}>
        <Row className='g-2 g-md-3 align-items-center'>
          <Col lg>
            <div className={`${dashLayoutStyle.dashboardHeader}`}>
              <Row className='g-2 g-md-3 align-items-center'>
                <Col md>
                  <div className={`${dashLayoutStyle.dashUserProCol}`}>
                    <span>TJ</span>
                    <div className={`${talkExpert == 'himani' ? dashLayoutStyle.dashUserTtl : ''}`}>
                      <h4>Welcome back, <span>Tejas Jain</span></h4>
                      <p>Double Negative</p>
                      {talkExpert === 'himani' ? (
                        <h5>
                          <Link href="mailto:tejas@doublenegative.com">tejas@doublenegative.com</Link>
                        </h5>
                      ):(
                        null
                      )}
                    </div>
                  </div>
                </Col>
                {talkExpert === 'himani' ? (
                  null
                ):(
                  <Col md>
                    <div className={`${dashLayoutStyle.dashUserInfoCol}`}>
                      <h4>
                        <Link href="mailto:tejas@doublenegative.com">tejas@doublenegative.com</Link>
                      </h4>
                      <p>Last login: 09 Aug 2023 02:34PM</p>
                    </div>
                  </Col>
                )}
              </Row>
            </div>
          </Col>
          {talkExpert === 'himani' ? (
            <Col lg className='d-none d-lg-block'>
              <div className={`${dashLayoutStyle.dashboardHeader}`}>
                <Row className='g-2 g-md-3 align-items-center justify-content-between'>
                  <Col md>
                    <div className={`${dashLayoutStyle.dashUserProCol}`}>
                      <span><Image src={supportIcon} width={43} height={40} alt="support icon" /></span>
                      <div className={`${dashLayoutStyle.dashUserTtl}`}>
                        <h4><span>Get in touch with our experts</span></h4>
                      </div>
                    </div>
                  </Col>
                  <Col md="auto">
                    <TalkExpert
                      size={`${talkExpertStyle.small}`}
                      imgSrc={expertImg}
                      name="Himani Doshi"
                      designation="Insurance Expert"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          ):(
            null
          )}
        </Row>
      </div>
    </>
  )
}
