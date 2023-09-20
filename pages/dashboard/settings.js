import React from 'react'
import Head from 'next/head'

import {Row, Col, Form, FloatingLabel} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import form from '@/assets/css/form.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function Settings() {

  return (
    <>
      <Head>
        <title>Settings | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        activeMenu="7"
      >
        <Row className="g-0 g-xl-4 align-items-center justify-space-between mb-4">
          <Col xl>
            <DashboardHeadingItem
              title="Settings"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className={`greyForm ${form.commonForm} ${form.greyForm}`}>
              
            </div>
          </Col>
        </Row>
      </DashboardCard>
    </>
  )
}