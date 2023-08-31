import React from 'react'
import Head from 'next/head'

import {Row, Col} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import ClaimFileCard from "@/component/BIDashboard/DashboardElements/ClaimCard/claimFile";
import ClaimRequestCard from "@/component/BIDashboard/DashboardElements/ClaimCard/claimRequest";

export default function ClaimsAndRequests() {

  return (
    <>
      <Head>
        <title>Claims & Requests | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        talkExpert="himani"
        activeMenu="3"
      >
        <DashboardPageTitle
          title="Claims & Requests"
        />
        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="All Claims"
            />
          </Col>
        </Row>
        
        <Row className="g-3 g-md-4">
          <Col md>
            <ClaimFileCard />
          </Col>
          <Col lg={1} className='d-none d-lg-block'></Col>
          <Col md>
            <div className="d-md-none mb-4">
              <DashboardHeadingItem
                title="Requests"
              />
            </div>
            <ClaimRequestCard />
          </Col>
        </Row>
      </DashboardCard>
    </>
  )
}
