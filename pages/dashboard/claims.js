import React, { useState } from "react";
import Head from 'next/head'

import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';

import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import ClaimFormCardItem from "@/component/BIDashboard/DashboardElements/ClaimRequestFormCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import FaqCardItem from '@/component/BIDashboard/DashboardElements/ClaimRequestFaqCard'
import ClaimFaq from '@/component/BIDashboard/DashboardElements/ClaimFaq'
import ClaimFileThankModal from '@/component/BIDashboard/DashboardElements/Modal/ClaimFileThankModal'
import ClaimCard from '@/component/BIDashboard/DashboardElements/ClaimRequestCard'
import NoItemCard from "@/component/BIDashboard/DashboardElements/NoItemClaimRequestCard";

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';
import noClaimImg from '@/public/emptyCard/noClaimIcon.svg';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import form from '@/assets/css/form.module.css'
import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'

export default function Claims() {

  const [policyValue, setPolicyValue] = useState();
  const policyOptions = [
    { name: 'Directors & Officers (BKX42787)', value: '1' },
    { name: 'Errors & Omissions quote (BKX42787)', value: '2' },
    { name: 'Product Liability quote (BKX42787)', value: '3' },
  ];

  const [showClaimFileThank, setShowClaimmFileThank] = useState(false);

  const handleCloseClaimFileThank = () => setShowClaimmFileThank(false);
  const handleShowClaimFileThank = () => setShowClaimmFileThank(true);

  const initimatedClaimData = ([
    {
      id: "1",
      icon: "/productIcons/liability/dAndO_icon.svg",
      title: "Directors & Officers",
      companyName: "BimaKavach Technologies Pvt Ltd",
      productGroupName: 'Liability Insurance',
      status: "Active",
      policyNumber: "BKX42787",
      claimNumber: "BKX42787",
    },
    {
      id: "2",
      icon: "/productIcons/liability/eAndO_icon.svg",
      title: "Errors & Omissions quote",
      companyName: "BimaKavach Technologies Pvt Ltd",
      productGroupName: 'Asset Insurance',
      status: "In Progress",
      policyNumber: "BKX42787",
      claimNumber: "BKX42787",
    },
    {
      id: "3",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "Fire Insurance",
      companyName: "BimaKavach Technologies Pvt Ltd",
      productGroupName: 'Marine Insurance',
      status: "Expired",
      policyNumber: "BKX42787",
      claimNumber: "BKX42787",
    },
  ])

  const [incidentValue, setIncidentValue] = useState(null);

  return (
    <>
      <Head>
        <title>Claims | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        activeMenu="3"
        rightSidebar="false"
      >
        <DashboardPageTitle
          title="Claims"
        />
        <Row className="g-0 g-xl-4 align-items-center justify-space-between mb-4">
          <Col xl>
            <DashboardHeadingItem
              title="Claims"
            />
          </Col>
        </Row>
        <Row className="g-4 g-lg-4">
          <Col lg={5}>
            <ClaimFormCardItem>
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
                  <Form.Group className="dateFormGroup dateFormSmallGroup mb-4">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                      <DatePicker
                        label="Incident Date"
                        value={incidentValue}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Form.Group>
                  <Form.Group className="floatFormGroup mb-4">
                    <FloatingLabel controlId="briefly" label="Brief Description">
                      <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" as="textarea" rows={3} />
                    </FloatingLabel>
                  </Form.Group>
                  <div className={`p-0 ${form.formBtn}`}>
                    <ButtonItem
                      title="Intimate Claim"
                      type="button"
                      iconPosition="right"
                      customClass={`m-0 ${buttonStyle.minWidth4} ${buttonStyle.btnBorder} ${buttonStyle.border2} ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      onClick={handleShowClaimFileThank}
                    >
                      <ArrowPrimaryIcon />
                    </ButtonItem>
                  </div>
                </Form>
              </div>
            </ClaimFormCardItem>
          </Col>
          <Col lg={7}>
            <Row className="g-4 g-lg-4">
              <Col lg>
                <div className={`${dashLayoutStyle.rghtSdbrWidget}`}>
                  <h5>What is intimate claim?</h5>
                  <p>A claim intimation is the first step of any notification of the claim to the insurer. It consists of basic information such as policy number, name of the insured, cause & and place of incident, and name of the claimant, etc. This helps insurers investigate the claim and initiate the claim settlement process quicker.</p>
                </div>
                <div className={`${dashLayoutStyle.rghtSdbrWidget}`}>
                  <h5>Process of claim Intimation.</h5>
                  <ul>
                    <li><span>1</span> Select the Policy</li>
                    <li><span>2</span> Select the reason</li>
                  </ul>
                </div>
              </Col>
              <Col lg>
                <FaqCardItem>
                  <ClaimFaq />
                </FaqCardItem>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="g-4 g-xl-4 align-items-center justify-space-between mb-4 mt-0">
          <Col xl>
            <DashboardHeadingItem
              title="Initimated Claim List"
            />
          </Col>
        </Row>

        <Row className='g-3 g-lg-4'>
          {initimatedClaimData.map((item) =>
            <Col lg={4} xl={3} key={item.id}>
              <ClaimCard
                type="claim"
                icon={item.icon}
                title={item.title}
                productGroupName={item.productGroupName}
                companyName={item.companyName}
                status={item.status}
                policyNumber={item.policyNumber}
                claimNumber={item.claimNumber}
              />
            </Col>
          )}
          <Col lg={4} xl={3}>
            <NoItemCard
              title="No Claims Found"
              imgSrc={noClaimImg}
              width={171}
              height={120}
              description="Imagine what you can do when you're completely shielded. Add a Claim now, and take control of your business."
            />
          </Col>
        </Row>
      </DashboardCard>
      <ClaimFileThankModal
        show={showClaimFileThank}
        handleClose={handleCloseClaimFileThank}
      />
    </>
  )
}
