import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {Row, Col} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import CoverageCardItem from "@/component/BIDashboard/DashboardElements/CoverageCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import NoItemCard from "@/component/BIDashboard/DashboardElements/NoItemCard";

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

import productIcon1 from '@/public/productIcons/liability/dAndO_icon.svg';
import productIcon2 from '@/public/productIcons/liability/eAndO_icon.svg';
import productIcon3 from '@/public/productIcons/liability/cyber_icon.svg';
import productIcon4 from '@/public/productIcons/liability/generalLiability_icon.svg';
import productIcon5 from '@/public/productIcons/liability/crime_icon.svg';
import productIcon6 from '@/public/productIcons/liability/productLiability_icon.svg';

export default function ShopCoverages() {

  return (
    <>
      <Head>
        <title>Shop Coverages | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        talkExpert="himani"
        activeMenu="4"
      >
        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Insurance Coverages"
            />
          </Col>
          <Col md="auto">
            
          </Col>
        </Row>
        <Row className="g-3 g-md-4">
          <Col xl={6}>
            <CoverageCardItem
              icon={productIcon1}
              title="Directors & Officers Insurance"
              description="Directors and officers (D&O) liability insurance is insurance coverage intended to protect individuals from personal losses."
              link="/"
            >
              <ButtonItem
                title="Buy Now"
                type="button"
                customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
              />
            </CoverageCardItem>
          </Col>
          <Col xl={6}>
            <CoverageCardItem
              icon={productIcon2}
              title="Errors & Omissions Insurance"
              description="Errors and omissions (E&O) insurance is a type of professional liability insurance that protects companies, their workers."
              link="/"
            >
              <ButtonItem
                title="Buy Now"
                type="button"
                customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
              />
            </CoverageCardItem>
          </Col>
          <Col xl={6}>
            <CoverageCardItem
              icon={productIcon3}
              title="Cyber Insurance"
              description="A cyber insurance coverage policy can provide companies with protection from losses resulting from a data breach."
              link="/"
            >
              <ButtonItem
                title="Buy Now"
                type="button"
                customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
              />
            </CoverageCardItem>
          </Col>
          <Col xl={6}>
            <CoverageCardItem
              icon={productIcon4}
              title="General Liability Insurance"
              description="Commercial general liability (CGL) is a type of insurance policy that provides coverage to a business for bodily injury."
              link="/"
            >
              <ButtonItem
                title="Buy Now"
                type="button"
                customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
              />
            </CoverageCardItem>
          </Col>
          <Col xl={6}>
            <CoverageCardItem
              icon={productIcon6}
              title="Product Liability Insurance"
              description="It provides protection against claims resulting from injuries and damage to other people or property."
              link="/"
            >
              <ButtonItem
                title="Buy Now"
                type="button"
                customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
              />
            </CoverageCardItem>
          </Col>
          <Col xl={6}>
            <CoverageCardItem
              icon={productIcon5}
              title="Crime & Fidelity Insurance"
              description="Fidelity insurance insurance provides protection against business losses caused due to employee dishonesty."
              link="/"
            >
              <ButtonItem
                title="Buy Now"
                type="button"
                customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
              />
            </CoverageCardItem>
          </Col>
        </Row>
        <NoItemCard customClass="mt-4">No Insurance Coverages Found</NoItemCard>
      </DashboardCard>
    </>
  )
}