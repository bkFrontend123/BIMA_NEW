import React, { useState } from "react";
import Head from 'next/head'

import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';

import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import ClaimRequestCard from "@/component/BIDashboard/DashboardElements/ClaimCard/claimRequest";
import ClaimCardItem from "@/component/BIDashboard/DashboardElements/ClaimCardNew";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import ClaimRequestThankModal from '@/component/BIDashboard/DashboardElements/Modal/ClaimRequestThankModal'

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import form from '@/assets/css/form.module.css'

export default function Requests() {

  const [policyValue, setPolicyValue] = useState();
  const policyOptions = [
    { name: 'Directors & Officers (BKX42787)', value: '1' },
    { name: 'Errors & Omissions quote (BKX42787)', value: '2' },
    { name: 'Product Liability quote (BKX42787)', value: '3' },
  ];

  const [requestTypeValue, setRequestTypeValue] = useState();
  const requestTypeOptions = [
    { name: 'B2B Consulting', value: '1' },
    { name: 'Enterprise Technology', value: '2' },
    { name: 'Consumer', value: '3' },
    { name: 'BFSI', value: '4' },
    { name: 'Enterprise Technology', value: '5' },
    { name: 'B2B Consulting', value: '6' },
  ];

  const [showClaimRequestThank, setShowClaimRequestThank] = useState(false);

  const handleCloseClaimRequestThank = () => setShowClaimRequestThank(false);
  const handleShowClaimRequestThank = () => setShowClaimRequestThank(true);

  const initimatedClaimData = ([
    {
      id: "1",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "Fire Insurance",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      statusType: "pending"
    },
    {
      id: "2",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "Fire Insurance",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      statusType: "expiring",
      expireDays: "45"
    },
    {
      id: "3",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "Fire Insurance",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      statusType: "expired"
    },
  ])

  return (
    <>
      <Head>
        <title>Requests/Endorsements | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
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
          <Col md="auto"></Col>
        </Row>

        <Row className="g-3 g-md-4">
          <Col md>
            <ClaimCardItem>
              <div className={`${form.commonForm}`}>
                <Form>
                  <Form.Group className={`selectDropDiv searchDropDiv selectDropDivSmall mb-4 ${!policyValue == '' ? 'selectedDropDiv' : null}`}>
                    <SelectSearch
                      options={policyOptions}
                      name="policy"
                      placeholder="Search by keyword"
                      onChange={setPolicyValue}
                      search
                      value={policyValue}
                      required
                    />
                    <label>Select Policy</label>
                  </Form.Group>
                  <Form.Group className={`selectDropDiv selectDropDivSmall searchDropDiv mb-4 ${!requestTypeValue == '' ? 'selectedDropDiv' : null}`}>
                    <SelectSearch
                      options={requestTypeOptions}
                      name="requestType"
                      placeholder="Search by keyword"
                      onChange={setRequestTypeValue}
                      search
                      value={requestTypeValue}
                      required
                    />
                    <label>Request type</label>
                  </Form.Group>
                  <div className={`p-0 ${form.formBtn}`}>
                    <ButtonItem
                      title="Create Request"
                      type="button"
                      iconPosition="right"
                      customClass={`m-0 ${buttonStyle.minWidth4} ${buttonStyle.btnBorder} ${buttonStyle.border2} ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      onClick={handleShowClaimRequestThank}
                    >
                      <ArrowPrimaryIcon />
                    </ButtonItem>
                  </div>
                </Form>
              </div>
            </ClaimCardItem>
          </Col>
          <Col lg={1} className='d-none d-lg-block'></Col>
          <Col md></Col>
        </Row>

        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4 mt-0">
          <Col md>
            <DashboardHeadingItem
              title="Requests List"
            />
          </Col>
          <Col md="auto"></Col>
        </Row>

        <Row className='g-3 g-md-4'>
          {initimatedClaimData.map((item) =>
            <Col lg={6} xl={4} key={item.id}>

            </Col>
          )}
        </Row>
      </DashboardCard>
      <ClaimRequestThankModal
        show={showClaimRequestThank}
        handleClose={handleCloseClaimRequestThank}
      />
    </>
  )
}
