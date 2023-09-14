import React from 'react'
import Head from 'next/head'

import {Row, Col} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardPageTitle from '@/component/BIDashboard/DashboardPageTitle'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import CoverageCardItem from "@/component/BIDashboard/DashboardElements/CoverageCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import NoItemCard from "@/component/BIDashboard/DashboardElements/NoItemCard";

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function ShopCoverages() {

  const coverageData = ([
    {
      id: "1",
      icon: "/productIcons/liability/dAndO_icon.svg",
      title: "Directors & Officers Quote",
      description: "Directors and officers (D&O) liability insurance is insurance coverage intended to protect individuals from personal losses.",
      link: "/directors-and-officers-insurance"
    },
    {
      id: "2",
      icon: "/productIcons/liability/eAndO_icon.svg",
      title: "Errors & Omissions Insurance",
      description: "Errors and omissions (E&O) insurance is a type of professional liability insurance that protects companies, their workers.",
      link: "/errors-and-omissions-insurance"
    },
    {
      id: "3",
      icon: "/productIcons/liability/cyber_icon.svg",
      title: "Cyber Insurance",
      description: "A cyber insurance coverage policy can provide companies with protection from losses resulting from a data breach.",
      link: "/cyber-insurance"
    },
    {
      id: "4",
      icon: "/productIcons/liability/generalLiability_icon.svg",
      title: "General Liability Insurance",
      description: "Commercial general liability (CGL) is a type of insurance policy that provides coverage to a business for bodily injury.",
      link: "/general-liability-insurance"
    },
    {
      id: "5",
      icon: "/productIcons/liability/productLiability_icon.svg",
      title: "Product Liability Insurance",
      description: "It provides protection against claims resulting from injuries and damage to other people or property.",
      link: "/product-liability-insurance"
    },
    {
      id: "6",
      icon: "/productIcons/liability/crime_icon.svg",
      title: "Crime & Fidelity Insurance",
      description: "Fidelity insurance insurance provides protection against business losses caused due to employee dishonesty.",
      link: "/commercial-crime-insurance"
    },
  ])

  return (
    <>
      <Head>
        <title>Shop Coverages | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        talkExpert="himani"
        activeMenu="5"
      >
        <DashboardPageTitle
          title="Shop Coverages"
        />
        <Row className="g-3 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Insurance Coverages"
            />
          </Col>
          <Col md="auto"></Col>
        </Row>

        <Row className='g-3 g-md-4'>
          {coverageData.map((item) =>
            <Col lg={6} xl={4} key={item.id}>
              <CoverageCardItem
                icon={item.icon}
                title={item.title}
                description={item.description}
                link={item.link}
              >
                <ButtonItem
                  title="Buy Now"
                  type="button"
                  customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
                />
              </CoverageCardItem>
            </Col>
          )}
        </Row>
      </DashboardCard>
    </>
  )
}