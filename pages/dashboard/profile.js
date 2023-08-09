import React from 'react'
import Head from 'next/head'

import {Row, Col, Form, FloatingLabel} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'

export default function Profile() {

  return (
    <>
      <Head>
        <title>Profile | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard>
        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Profile"
            />
          </Col>
          <Col md="auto">
            
          </Col>
        </Row>
      </DashboardCard>
    </>
  )
}