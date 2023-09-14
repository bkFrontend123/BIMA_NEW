import React from 'react'
import Head from 'next/head'

import {Row, Col} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import ClaimFileCard from "@/component/BIDashboard/DashboardElements/ClaimCard/claimFile";

export default function Claims() {

  return (
    <>
      <Head>
        <title>Claims | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        talkExpert="himani"
        activeMenu="3"
      >
        <DashboardPageTitle
          title="Claims"
        />
        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Claims"
            />
          </Col>
        </Row>
        
        <Row className="g-3 g-md-4">
          <Col md>
            <ClaimFileCard />
          </Col>
          <Col lg={1} className='d-none d-lg-block'></Col>
          <Col md></Col>
        </Row>
      </DashboardCard>
    </>
  )
}
