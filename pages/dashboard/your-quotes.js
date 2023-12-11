import React, {useState} from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import {Row, Col, Form, ProgressBar} from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import FilterButton from '@/component/BIDashboard/DashboardElements/FilterButton'
import FilterDropdownCard from '@/component/BIDashboard/DashboardElements/FilterDropdown'
import QuoteCardItem from "@/component/BIDashboard/DashboardElements/QuoteCard";
import ExpireCard from "@/component/BIDashboard/DashboardElements/ExpireCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import NoItemCard from "@/component/BIDashboard/DashboardElements/NoItemCard";

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';
import noQuoteImg from '@/public/emptyCard/noQuoteIcon.svg';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function Quotes() {

  const [filterYearValue, setFilterYearValue] = useState();
  const filterYearOptions = [
      {name: '2021-2022', value: '1'},
      {name: '2022-2023', value: '2'},
      {name: '2023-2024', value: '3'},
  ];

  const [filterCategoryProductValue, setFilterCategoryProductValue] = useState();
  const filterCategoryProductOptions = [
      {name: 'Liability Insurance', value: '1'},
      {name: 'Asset Insurance', value: '2'},
      {name: 'Engineering Insurance', value: '3'},
      {name: 'Marine', value: '4'},
  ];

  const [filterCompanyNameValue, setFilterCompanyNameValue] = useState();
  const filterCompanyNameOptions = [
      {name: 'ICICI Lombard', value: '1'},
      {name: 'Bajaj Allianz', value: '2'},
      {name: 'Tata AIG', value: '3'},
  ];

  const liabilityQuoteData = ([
    {
      id: "1",
      icon: "/productIcons/liability/dAndO_icon.svg",
      title: "Directors & Officers quote",
      limitLiability: "1 Crores",
      industry: "Clubs and Organisations NonProfit",
      turnover: "Upto 100 Cr",
      employees: "234",
      statusType: "offline",
      dateTime: "24 April 2023"
    },
    {
      id: "2",
      icon: "/productIcons/liability/eAndO_icon.svg",
      title: "Errors & Omissions quote",
      limitLiability: "1 Crores",
      industry: "Clubs and Organisations NonProfit",
      turnover: "Upto 100 Cr",
      employees: "234",
      statusType: "progress",
      dateTime: "24 April 2023"
    },
    {
      id: "3",
      icon: "/productIcons/liability/productLiability_icon.svg",
      title: "Product Liability quote",
      limitLiability: "1 Crores",
      industry: "Clubs and Organisations NonProfit",
      turnover: "Upto 100 Cr",
      employees: "234",
      statusType: "progress",
      dateTime: "24 April 2023"
    },
  ])

  const assetQuoteData = ([
    {
      id: "1",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "Fire Insurance",
      limitLiability: "1 Crores",
      industry: "Clubs and Organisations NonProfit",
      turnover: "Upto 100 Cr",
      employees: "234",
      statusType: "offline",
      dateTime: "24 April 2023"
    },
    {
      id: "2",
      icon: "/productIcons/asset/fire_icon.svg",
      title: "Fire Insurance",
      limitLiability: "1 Crores",
      industry: "Clubs and Organisations NonProfit",
      turnover: "Upto 100 Cr",
      employees: "234",
      statusType: "progress",
      dateTime: "24 April 2023"
    },
  ])

  const router = useRouter();
  const goToShopCoveragePage = () => {
    router.push('/dashboard/shop-coverages');
  };

  const goToNextPage = () => {
    router.push('/all_policies');
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
              <Form.Group className={`selectDropDiv selectDropFilterDiv selectDropFilterLargeDiv ${!filterCategoryProductValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={filterCategoryProductOptions}
                  name="filterCategoryProduct"
                  placeholder="Category/Products"
                  onChange={setFilterCategoryProductValue}
                  value={filterCategoryProductValue}
                />
              </Form.Group>
              <Form.Group className={`selectDropDiv selectDropFilterDiv selectDropFilterMediumDiv ${!filterCompanyNameValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={filterCompanyNameOptions}
                  name="filterCompanyName"
                  placeholder="Company Name"
                  onChange={setFilterCompanyNameValue}
                  value={filterCompanyNameValue}
                />
              </Form.Group>
            </FilterDropdownCard>
            <FilterButton
              title="Add New Quote +"
              customClass="ms-3"
              onClick={goToShopCoveragePage}
            />
          </Col>
        </Row>
        <Row className='g-4 g-lg-4'>
          {liabilityQuoteData.map((item) =>
            <Col lg={6} xl={4} key={item.id}>
              <QuoteCardItem
                icon={item.icon}
                title={item.title}
                category="liability"
                limitLiability={item.limitLiability}
                industry={item.industry}
                turnover={item.turnover}
                employees={item.employees}
                statusType={item.statusType}
                dateTime={item.dateTime}
              >
                {item.statusType === "offline" && (
                  <Row className='g-3 justify-content-center'>
                    <Col xxl={9} xl={9} lg={12}>
                      <div className='blankHeight'></div>
                    </Col>
                    <Col xxl={10} xl={10} lg={12}>
                      {item.statusType === "offline" && (
                        <>
                          <ButtonItem
                            title="Go to quote"
                            type="button"
                            iconPosition="right"
                            customClass={`w-100 m-0 px-2 ${buttonStyle.btnGray} ${buttonStyle.btnBig}`}
                            onClick={goToNextPage}
                          >
                            <ArrowPrimaryIcon />
                          </ButtonItem>
                          <p>Your proposal is in under discussion with insurance companies. We are trying to get the best possible quote for you. Once receive will be uploaded here soon.</p>
                        </>
                      )}
                      {item.statusType === "progress" && (
                      <ButtonItem
                        title="Go to quote"
                        type="button"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                        onClick={goToNextPage}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                      )}
                    </Col>
                  </Row>
                )}
                {item.statusType === "progress" && (
                  <Row className='g-3 justify-content-center'>
                    <Col xxl={9} xl={9} lg={12}>
                      <ExpireCard
                        days="39"
                      >
                        <ProgressBar now={80} />
                      </ExpireCard>
                    </Col>
                    <Col xxl={10} xl={10} lg={12}>
                      <ButtonItem
                        title="Go to quote"
                        type="button"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                        onClick={goToNextPage}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                    </Col>
                  </Row>
                )}
              </QuoteCardItem>
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
          {assetQuoteData.map((item) =>
            <Col lg={6} xl={4} key={item.id}>
              <QuoteCardItem
                icon={item.icon}
                title={item.title}
                category="asset"
                limitLiability={item.limitLiability}
                industry={item.industry}
                turnover={item.turnover}
                employees={item.employees}
                statusType={item.statusType}
                dateTime={item.dateTime}
              >
                <Row className='g-3 justify-content-center'>
                  <Col xxl={9} xl={9} lg={12}>
                    <ExpireCard
                      days="39"
                    >
                      <ProgressBar now={80} />
                    </ExpireCard>
                  </Col>
                  <Col xxl={10} xl={10} lg={12}>
                    {item.statusType === "offline" && (
                      <>
                        <ButtonItem
                          title="Go to quote"
                          type="button"
                          iconPosition="right"
                          customClass={`w-100 m-0 px-2 ${buttonStyle.btnGray} ${buttonStyle.btnBig}`}
                          onClick={goToNextPage}
                        >
                          <ArrowPrimaryIcon />
                        </ButtonItem>
                        <p>Your proposal is in under discussion with insurance companies. We are trying to get the best possible quote for you. Once receive will be uploaded here soon.</p>
                      </>
                    )}
                    {item.statusType === "progress" && (
                    <ButtonItem
                      title="Go to quote"
                      type="button"
                      iconPosition="right"
                      customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                      onClick={goToNextPage}
                    >
                      <ArrowPrimaryIcon />
                    </ButtonItem>
                    )}
                  </Col>
                </Row>
              </QuoteCardItem>
            </Col>
          )}
        </Row>
        <Row>
          <Col lg={6} xl={4}>
            <NoItemCard
              title="No Quotes Found"
              imgSrc={noQuoteImg}
              width={312}
              height={312}
              button="true"
              customClass="mt-4"
            />
          </Col>
        </Row>
      </DashboardCard>
    </>
  )
}
