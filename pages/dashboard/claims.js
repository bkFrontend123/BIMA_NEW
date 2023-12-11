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
import ClaimFileThankModal from '@/component/BIDashboard/DashboardElements/Modal/ClaimFileThankModal'
import ClaimCard from '@/component/BIDashboard/DashboardElements/ClaimRequestCard'

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import form from '@/assets/css/form.module.css'

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
      category: 'liability',
      policyNumber: "BKX42787",
    },
    {
      id: "2",
      icon: "/productIcons/liability/eAndO_icon.svg",
      title: "Errors & Omissions quote",
      category: 'liability',
      policyNumber: "BKX42787",
    },
    {
      id: "3",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "Fire Insurance",
      category: 'asset',
      policyNumber: "BKX42787",
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
        rightSidebar="true"
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
          <Col lg>
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
                  <Form.Group className="dateFormGroup mb-4">
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
          <Col lg></Col>
        </Row>

        <Row className="g-0 g-xl-4 align-items-center justify-space-between mb-4 mt-0">
          <Col xl>
            <DashboardHeadingItem
              title="Initimated Claim List"
            />
          </Col>
        </Row>

        <Row className='g-3 g-lg-4'>
          {initimatedClaimData.map((item) =>
            <Col lg={6} xl={4} key={item.id}>
              <ClaimCard
                icon={item.icon}
                title={item.title}
                category={item.category}
                policyNumber={item.policyNumber}
              />
            </Col>
          )}
        </Row>
      </DashboardCard>
      <ClaimFileThankModal
        show={showClaimFileThank}
        handleClose={handleCloseClaimFileThank}
      />
    </>
  )
}
