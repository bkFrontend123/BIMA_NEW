import React, { useState, useEffect, Children } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Row, Col} from 'react-bootstrap';

import LogoIcon from "@/component/BIDashboard/Icons/IconLogo";
import BellIcon from '@/component/BIDashboard/Icons/IconBell';
import MenuIcon from "@/component/BIDashboard/Icons/IconMenu";

import mainLogo from '@/public/logo-main.svg'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'

export default function DashboardHeader(props) {
  const {click} = props;
  return (
    <>
      <div className={`${dashLayoutStyle.dashboardHeader}`}>
        <Row className='g-2 g-md-3 align-items-center'>
          <Col>
            <div className={`d-none d-md-block ${dashLayoutStyle.dashHdrLogo}`}>
              <Link href="/" className={`${dashLayoutStyle.dashHdrLogoLink}`}>
                <Image src={mainLogo} width="200" height="30" alt="Bimakavach Logo" />
              </Link>
            </div>
            <div className={`d-md-none ${dashLayoutStyle.mblLogo}`}>
              <Link href="/" className={`${dashLayoutStyle.mblLogoLink}`}>
                <LogoIcon />
              </Link>
            </div>
          </Col>
          <Col xs="auto">
            <div className='d-flex align-items-center gap-3'>
              <div className={`${dashLayoutStyle.dashUserProCol}`}>
                <span><BellIcon /></span>
              </div>
              <div className={`${dashLayoutStyle.dashUserProCol}`}>
                <span>TJ</span>
              </div>
              <div className={`d-lg-none ${dashLayoutStyle.mblMenu}`} onClick={click}>
                <MenuIcon />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
