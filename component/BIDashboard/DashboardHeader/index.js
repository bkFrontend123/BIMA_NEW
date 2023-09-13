import React, { useState, useEffect, Children } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Row, Col} from 'react-bootstrap';

import BellIcon from '@/component/BIDashboard/Icons/IconBell';

import mainLogo from '@/public/logo-main.svg'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'

export default function DashboardHeader(props) {

  return (
    <>
      <div className={`${dashLayoutStyle.dashboardHeader}`}>
        <Row className='g-2 g-md-3 align-items-center'>
          <Col lg>
            <div className={`${dashLayoutStyle.dashHdrLogo}`}>
              <Link href="/" className={`${dashLayoutStyle.dashHdrLogoLink}`}>
                <Image src={mainLogo} width="200" height="30" alt="Bimakavach Logo" />
              </Link>
            </div>
          </Col>
          <Col lg="auto">
            <div className='d-flex align-items-center gap-2 gap-lg-3 gap-xl-4'>
              <div className={`${dashLayoutStyle.dashUserProCol}`}>
                <span><BellIcon /></span>
              </div>
              <div className={`${dashLayoutStyle.dashUserProCol}`}>
                <span>TJ</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
