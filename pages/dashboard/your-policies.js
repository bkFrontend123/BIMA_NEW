import React, {useState} from 'react'
import Head from 'next/head'

import {Row, Col, Form} from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import FilterDropdownCard from '@/component/BIDashboard/DashboardElements/FilterDropdown'
import PolicyCardItem from "@/component/BIDashboard/DashboardElements/PolicyCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import NoItemCard from "@/component/BIDashboard/DashboardElements/NoItemCard";

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function Policies() {

  const [filterYearValue, setFilterYearValue] = useState();
  const filterYearOptions = [
      {name: '2021-2022', value: '1'},
      {name: '2022-2023', value: '2'},
      {name: '2023-2024', value: '3'},
  ];

  const [filterPolicyStatusValue, setFilterPolicyStatusValue] = useState();
  const filterPolicyStatusOptions = [
      {name: 'Active', value: '1'},
      {name: 'Expired', value: '2'},
  ];

  const [filterCategoryProductValue, setFilterCategoryProductValue] = useState();
  const filterCategoryProductOptions = [
      {name: 'Liability Insurance', value: '1'},
      {name: 'Asset Insurance', value: '2'},
      {name: 'Engineering Insurance', value: '3'},
      {name: 'Marine', value: '4'},
  ];

  const [filterInsurerNameValue, setFilterInsurerNameValue] = useState();
  const filterInsurerNameOptions = [
      {name: 'ICICI Lombard', value: '1'},
      {name: 'Bajaj Allianz', value: '2'},
      {name: 'Tata AIG', value: '3'},
  ];

  const liabilityPolicyData = ([
    {
      id: "1",
      icon: "/productIcons/liability/dAndO_icon.svg",
      title: "Directors & Officers",
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
      icon: "/productIcons/liability/eAndO_icon.svg",
      title: "Errors & Omissions",
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
      icon: "/productIcons/liability/productLiability_icon.svg",
      title: "Product Liability",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      statusType: "expired"
    },
  ])

  const assetPolicyData = ([
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
      statusType: "expired"
    },
    {
      id: "2",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "Machinery Breakdown",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      statusType: "pending",
    },
    {
      id: "3",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "FLOP",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      statusType: "expiring",
      expireDays: "45"
    },
  ])

  const marinePolicyData = ([
    {
      id: "1",
      icon: "/productIcons/marine/marine_icon.svg",
      title: "Marine Transit Policy",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      decalrationType: "Monthly",
      valueOfDecalration: "30,304",
      statusOfDecalration: "upload",
      valueOfCD: "10,30,304",
      statusOfCD: "normal",
      statusType: "pending"
    },
    {
      id: "2",
      icon: "/productIcons/marine/marine_icon.svg",
      title: "Single Transit Policy",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      decalrationType: "Monthly",
      valueOfDecalration: "30,304",
      statusOfDecalration: "normal",
      valueOfCD: "10,30,304",
      statusOfCD: "topup",
      statusType: "pending",
    },
    {
      id: "3",
      icon: "/productIcons/marine/marine_icon.svg",
      title: "Single Transit Policy",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      decalrationType: "Monthly",
      valueOfDecalration: "30,304",
      statusOfDecalration: "pending",
      valueOfCD: "10,30,304",
      statusOfCD: "pending",
      statusType: "expired",
    },
    {
      id: "4",
      icon: "/productIcons/marine/marine_icon.svg",
      title: "Sales Turnover Policy",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      limitLiability: "1 Crore",
      policyPremium: "30,304",
      policyNumber: "BKX42787",
      policyPeriod: "14 Aug 23/13 Aug 24",
      decalrationType: "Monthly",
      valueOfDecalration: "30,304",
      statusOfDecalration: "success",
      valueOfCD: "10,30,304",
      statusOfCD: "success",
      statusType: "pending",
    },
  ])

  return (
    <>
      <Head>
        <title>Your Policies | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        activeMenu="2"
      >
        <DashboardPageTitle
          title="Your Policies"
        />
        <Row className="g-4 g-xl-4 align-items-center justify-space-between mb-4">
          <Col xl>
            <DashboardHeadingItem
              title="Liability Insurance"
            />
          </Col>
          <Col xl="auto">
            <FilterDropdownCard
              title="Filters"
            >
              <Form.Group className={`selectDropDiv selectDropFilterDiv ${!filterYearValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={filterYearOptions}
                  name="filterYear"
                  placeholder="Year 2023"
                  onChange={setFilterYearValue}
                  value={filterYearValue}
                />
              </Form.Group>
              <Form.Group className={`selectDropDiv selectDropFilterDiv ${!filterPolicyStatusValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={filterPolicyStatusOptions}
                  name="filterPolicyStatus"
                  placeholder="Policy Status"
                  onChange={setFilterPolicyStatusValue}
                  value={filterPolicyStatusValue}
                />
              </Form.Group>
              <Form.Group className={`selectDropDiv selectDropFilterDiv selectDropFilterLargeDiv ${!filterCategoryProductValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={filterCategoryProductOptions}
                  name="filterCategoryProduct"
                  placeholder="Category/Products"
                  onChange={setFilterCategoryProductValue}
                  value={filterCategoryProductValue}
                />
              </Form.Group>
              <Form.Group className={`selectDropDiv selectDropFilterDiv selectDropFilterMediumDiv ${!filterInsurerNameValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={filterInsurerNameOptions}
                  name="filterInsurerName"
                  placeholder="Insurer Name"
                  onChange={setFilterInsurerNameValue}
                  value={filterInsurerNameValue}
                />
              </Form.Group>
            </FilterDropdownCard>
          </Col>
        </Row>
        <Row className='g-4 g-lg-4'>
          {liabilityPolicyData.map((item) =>
            <Col lg={6} xl={4} key={item.id}>
              <PolicyCardItem
                icon={item.icon}
                title={item.title}
                productGroupName="Liability Insurance"
                insurerLogo={item.insurerLogo}
                insurerName={item.insurerName}
                limitLiability={item.limitLiability}
                policyPremium={item.policyPremium}
                policyNumber={item.policyNumber}
                policyPeriod={item.policyPeriod}
                statusType={item.statusType}
                expireDays={item.expireDays}
              >
                {item.statusType === "pending" && (
                  <Row className="g-3 justify-content-center">
                    <Col xxl={10} xl={10} lg={12}>
                      <ButtonItem
                        title="Fill Proposal Form"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                    </Col>
                  </Row>
                )}
                {item.statusType === "expiring" && (
                  <Row className="g-3 justify-content-center">
                    <Col xxl={10} xl={10} lg={12}>
                      <ButtonItem
                        title="Renew Policy"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                      <p>Make sure to renew your policy before it gets lapse. Talk to an expert of any help.</p>
                    </Col>
                  </Row>
                )}
              </PolicyCardItem>
            </Col>
          )}
        </Row>

        <Row className="g-4 g-xl-4 align-items-center justify-space-between mb-4 mt-0">
          <Col xl>
            <DashboardHeadingItem
              title="Asset Insurance"
            />
          </Col>
        </Row>
        <Row className='g-4 g-lg-4'>
          {assetPolicyData.map((item) =>
            <Col lg={6} xl={4} key={item.id}>
              <PolicyCardItem
                icon={item.icon}
                title={item.title}
                productGroupName="Asset Insurance"
                insurerLogo={item.insurerLogo}
                insurerName={item.insurerName}
                limitLiability={item.limitLiability}
                policyPremium={item.policyPremium}
                policyNumber={item.policyNumber}
                policyPeriod={item.policyPeriod}
                statusType={item.statusType}
                expireDays={item.expireDays}
              >
                {item.statusType === "pending" && (
                  <Row className="g-3 justify-content-center">
                    <Col xxl={10} xl={10} lg={12}>
                      <ButtonItem
                        title="Fill Proposal Form"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                    </Col>
                  </Row>
                )}
                {item.statusType === "expiring" && (
                  <Row className="g-3 justify-content-center">
                    <Col xxl={10} xl={10} lg={12}>
                      <ButtonItem
                        title="Renew Policy"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                      <p>Make sure to renew your policy before it gets lapse. Talk to an expert of any help.</p>
                    </Col>
                  </Row>
                )}
              </PolicyCardItem>
            </Col>
          )}
        </Row>

        <Row className="g-4 g-xl-4 align-items-center justify-space-between mb-4 mt-0">
          <Col xl>
            <DashboardHeadingItem
              title="Marine Insurance"
            />
          </Col>
        </Row>
        <Row className='g-4 g-lg-4'>
          {marinePolicyData.map((item) =>
            <Col lg={6} xl={4} key={item.id}>
              <PolicyCardItem
                icon={item.icon}
                title={item.title}
                productGroupName="Marine Insurance"
                insurerLogo={item.insurerLogo}
                insurerName={item.insurerName}
                limitLiability={item.limitLiability}
                policyPremium={item.policyPremium}
                policyNumber={item.policyNumber}
                policyPeriod={item.policyPeriod}
                decalrationType={item.decalrationType}
                valueOfDecalration={item.valueOfDecalration}
                statusOfDecalration={item.statusOfDecalration}
                valueOfCD={item.valueOfCD}
                statusOfCD={item.statusOfCD}
                statusType={item.statusType}
                expireDays={item.expireDays}
              >
                {item.statusType === "pending" && (
                  <Row className="g-3 justify-content-center">
                    <Col xxl={10} xl={10} lg={12}>
                      <ButtonItem
                        title="Fill Proposal Form"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                    </Col>
                  </Row>
                )}
                {item.statusType === "expiring" && (
                  <Row className="g-3 justify-content-center">
                    <Col xxl={10} xl={10} lg={12}>
                      <ButtonItem
                        title="Renew Policy"
                        type="submit"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                      <p>Make sure to renew your policy before it gets lapse. Talk to an expert of any help.</p>
                    </Col>
                  </Row>
                )}
              </PolicyCardItem>
            </Col>
          )}
        </Row>

        <Row>
          <Col lg={6} xl={4}>
            <NoItemCard
              title="No Policies Found"
              button="true"
              customClass="mt-4"
            />
          </Col>
        </Row>
      </DashboardCard>
    </>
  )
}
