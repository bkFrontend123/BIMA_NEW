import React from "react";
import Link from 'next/link'

import {Row, Col} from 'react-bootstrap';

import LogoIcon from "@/component/BIDashboard/Icons/IconLogo";
import MenuIcon from "@/component/BIDashboard/Icons/IconMenu";

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'

export default function DashboardCard(props) {
  const {click} = props;
  return (
    <div className={`${dashLayoutStyle.dashboardMobileHeader}`}>
      <Row className="align-items-center">
        <Col>
          <div className={`${dashLayoutStyle.mblLogo}`}>
            <Link href="/" className={`${dashLayoutStyle.mblLogoLink}`}>
              <LogoIcon />
            </Link>
          </div>
        </Col>
        <Col xs="auto">
          <div className={`${dashLayoutStyle.mblMenu}`} onClick={click}>
            <MenuIcon />
          </div>
        </Col>
      </Row>
    </div>
  )
}