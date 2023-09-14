import React from 'react'
import Head from 'next/head'

import {Row, Col} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import ClaimRequestCard from "@/component/BIDashboard/DashboardElements/ClaimCard/claimRequest";

export default function Requests() {

  return (
    <>
      <Head>
        <title>Requests/Endorsements | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        talkExpert="himani"
        activeMenu="4"
      >
        <DashboardPageTitle
          title="Requests/Endorsements"
        />
        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Requests/Endorsements"
            />
          </Col>
        </Row>
        
        <Row className="g-3 g-md-4">
          <Col md>
            <ClaimRequestCard />
          </Col>
          <Col lg={1} className='d-none d-lg-block'></Col>
          <Col md></Col>
        </Row>
      </DashboardCard>
    </>
  )
}
