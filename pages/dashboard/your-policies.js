import React, {useState} from 'react'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import {Row, Col, Form} from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import FilterDropdownCard from '@/component/BIDashboard/DashboardElements/FilterDropdown'
import PolicyCardItem from "@/component/BIDashboard/DashboardElements/PolicyCard";
import PremiumFieldItem from '@/component/BIDashboard/DashboardElements/PremiumField';
import LinkItem from '@/component/BIDashboard/DashboardElements/LinkItem';
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import NoItemCard from "@/component/BIDashboard/DashboardElements/NoItemCard";

import EmailIcon from '@/component/BIDashboard/Icons/IconEmail';
import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function YourPolicies() {

  const [filterStatusValue, setFilterStatusValue] = useState(1);
  const filterStatusOptions = [
      {name: 'Active', value: '1'},
      {name: 'Inactive', value: '2'},
  ];

  const [filterYearValue, setFilterYearValue] = useState(3);
  const filterYearOptions = [
      {name: '2021', value: '1'},
      {name: '2022', value: '2'},
      {name: '2023', value: '3'},
  ];

  const policyData = ([
    {
      id: "1",
      title: "Fire Insurance",
      purchaseDate: "24 April 2023",
      insurerLogo: "/policyLogos/icici_logo.png",
      insurerName: "ICICI Lombard",
      policyPeriod: "29 April 2023 to 28 April 2024",
      statusType: "pending"
    },
    {
      id: "2",
      title: "Shopkeeper's Insurance",
      purchaseDate: "24 April 2023",
      insurerLogo: "/policyLogos/tataAIG_logo.png",
      insurerName: "Bajaj Allianz",
      policyPeriod: "29 April 2023 to 28 April 2024",
      statusType: "process"
    },
    {
      id: "3",
      title: "Office Insurance",
      purchaseDate: "24 April 2023",
      insurerLogo: "/policyLogos/tataAIG_logo.png",
      insurerName: "Tata AIG",
      policyPeriod: "29 April 2023 to 28 April 2024",
      statusType: "confirm"
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
        talkExpert="himani"
        activeMenu="2"
      >
        <DashboardPageTitle
          title="Your Policies"
        />
        <Row className="g-3 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Your Policies"
            />
          </Col>
          <Col md="auto">
            <FilterDropdownCard
              title="View"
            >
              <Form.Group className={`selectDropDiv selectDropFilterDiv ${!filterStatusValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={filterStatusOptions}
                  name="filterStatus"
                  placeholder="&nbsp;"
                  onChange={setFilterStatusValue}
                  value={filterStatusValue}
                />
              </Form.Group>
            </FilterDropdownCard>
            <FilterDropdownCard
              title="Year"
            >
              <Form.Group className={`selectDropDiv selectDropFilterDiv ${!filterYearValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={filterYearOptions}
                  name="filterYear"
                  placeholder="&nbsp;"
                  onChange={setFilterYearValue}
                  value={filterYearValue}
                />
              </Form.Group>
            </FilterDropdownCard>
          </Col>
        </Row>
        
        <div className='cardsSliderOuter'>
          <Swiper            
            className={`cardsSlider`}
            spaceBetween={0}
            slidesPerView={100}
            loop="false"
            breakpoints={{
              1399: {
                slidesPerView: 100,
              },
              1200: {
                slidesPerView: 100,
              },
              992: {
                slidesPerView: 100,
              },
              768: {
                slidesPerView: 100,
              },
              320: {
                slidesPerView: 1.3,
              },
            }}
          >
            {policyData.map((item) =>
              <SwiperSlide key={item.id}>
                <PolicyCardItem
                  title={item.title}
                  purchaseDate={item.purchaseDate}
                  insurerLogo={item.insurerLogo}
                  insurerName={item.insurerName}
                  policyPeriod={item.policyPeriod}
                  statusType={item.statusType}
                >
                  <Row className="g-3 align-items-center">
                    <Col md={8} lg={9}>
                      <Row className="g-3 align-items-center">
                        <Col md>
                          <hr className="mt-0 mb-3 d-md-none" />
                          <PremiumFieldItem
                            title="Sum insured"
                            cost="1500 Cr"
                          />
                        </Col>
                        <Col md>
                          <PremiumFieldItem
                            title="Premium"
                            cost="50,000"
                          />
                          <hr className="mt-3 mb-0 d-md-none" />
                        </Col>
                        <Col md={4}>
                          <LinkItem
                            title="Email Policy"
                            icon="true"
                            href=""
                          >
                            <EmailIcon />
                          </LinkItem>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={4} lg={3}>
                      <Row className="g-3 align-items-center">
                        <Col md={12}>
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
                    </Col>
                  </Row>
                </PolicyCardItem>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <NoItemCard customClass="mt-4">No Policies Found</NoItemCard>
      </DashboardCard>
    </>
  )
}
