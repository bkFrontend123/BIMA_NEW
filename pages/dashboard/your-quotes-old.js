import React, {useState} from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


import {Row, Col, Form} from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import FilterButton from '@/component/BIDashboard/DashboardElements/FilterButton'
import FilterDropdown from '@/component/BIDashboard/DashboardElements/FilterDropdown'
import QuoteCardItem from "@/component/BIDashboard/DashboardElements/QuoteCardOld";
import PremiumFieldItem from '@/component/BIDashboard/DashboardElements/PremiumField';
import LinkItem from '@/component/BIDashboard/DashboardElements/LinkItem';
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import NoItemCard from "@/component/BIDashboard/DashboardElements/NoItemCard";

import EmailIcon from '@/component/BIDashboard/Icons/IconEmail';
import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function YourQuotes() {

  const [filterYearValue, setFilterYearValue] = useState(3);
  const filterYearOptions = [
      {name: '2021-2022', value: '1'},
      {name: '2022-2023', value: '2'},
      {name: '2023-2024', value: '3'},
  ];

  const [sumInsuredValue, setSumInsuredValue] = useState();
  const sumInsuredOptions = [
      {name: '1 Cr', value: '1'},
      {name: '2 Cr', value: '2'},
      {name: '3 Cr', value: '3'},
      {name: '4 Cr', value: '4'},
      {name: '5 Cr', value: '5'},
  ];

  const quoteData = ([
    {
      id: "1",
      title: "Directors & Officers quote",
      industry: "Finance",
      turnover: "24 Cr",
      employees: "234",
      city: "Bangalore",
      state: "Karnataka",
      statusType: "offline",
      dateTime: "24 April 2023"
    },
    {
      id: "2",
      title: "Errors & Omissions quote",
      industry: "Finance",
      turnover: "24 Cr",
      employees: "234",
      city: "Bangalore",
      state: "Karnataka",
      statusType: "progress",
      dateTime: "24 April 2023"
    },
    {
      id: "3",
      title: "Product Liability quote",
      industry: "Finance",
      turnover: "24 Cr",
      employees: "234",
      city: "Bangalore",
      state: "Karnataka",
      statusType: "progress",
      dateTime: "24 April 2023"
    },
  ])

  const router = useRouter();
  const goToShopCoveragePage = () => {
      router.push('/dashboard/shop-coverages');
  };

  const goToNextPage = () => {
      router.push('/dashboard/your-quote-detail');
  };

  return (
    <>
      <Head>
        <title>Your Quotes | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        activeMenu="1"
      >
        <DashboardPageTitle
          title="Your Quotes"
        />
        <Row className="g-3 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Resume Quotes"
            />
          </Col>
          <Col md="auto">
            <FilterButton
              title="Add New Quote +"
              customClass="me-3"
              onClick={goToShopCoveragePage}
            />
            <FilterDropdown
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
            </FilterDropdown>
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
            {quoteData.map((item) =>
              <SwiperSlide key={item.id}>
                <QuoteCardItem
                  title={item.title}
                  industry={item.industry}
                  turnover={item.turnover}
                  employees={item.employees}
                  city={item.city}
                  state={item.state}
                  statusType={item.statusType}
                  dateTime={item.dateTime}
                >
                  <Row className="g-3 align-items-center">
                    <Col xxl={8} xl={10}>
                      <Row className="g-3 align-items-center">
                        <Col md>
                          <hr className="mt-0 mb-3 d-md-none" />
                          <Form.Group className={`selectDropDiv selectDropDivSmall ${!sumInsuredValue == '' ? 'selectedDropDiv' : null}`}>
                            <SelectSearch
                                options={sumInsuredOptions}
                                name="industry"
                                placeholder="&nbsp;"
                                onChange={setSumInsuredValue}
                                value={sumInsuredValue}
                                required
                            />
                            <label>Selected Limit of Liability</label>
                          </Form.Group>
                        </Col>
                        <Col md>
                          <PremiumFieldItem
                            title="Premium"
                            cost="93,000"
                            gst="true"
                          />
                          <hr className="mt-3 mb-0 d-md-none" />
                        </Col>
                        <Col md={3}>
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
                    <Col xxl={4} xl={5} md={6}>
                      <Row className="g-3 align-items-center">
                        <Col md={7}>
                          <ButtonItem
                            title="Compare Quote"
                            type="button"
                            iconPosition="right"
                            customClass={`w-100 m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.border2} ${buttonStyle.btnBig}`}
                            onClick={goToNextPage}
                          >
                            <ArrowPrimaryIcon />
                          </ButtonItem>
                        </Col>
                        <Col md={5}>
                          <ButtonItem
                            title="Buy Now"
                            type="submit"
                            customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </QuoteCardItem>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <NoItemCard customClass="mt-4">No Quotes Found</NoItemCard>
      </DashboardCard>
    </>
  )
}
