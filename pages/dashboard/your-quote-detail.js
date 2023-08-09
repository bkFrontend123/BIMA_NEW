import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import QuoteCompareCard from "@/component/BIDashboard/DashboardElements/QuoteCompareCard";
import ReminderCard from "@/component/BIDashboard/DashboardElements/ReminderCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import Text from "@/component/BIDashboard/DashboardElements/TextItem";
import PolicyCompare from '@/component/PolicyElements/PolicyCompare'
import PolicySelected from '@/component/PolicyElements/PolicyCompare/PolicySelected'
import AddPolicyButton from '@/component/PolicyElements/PolicyCompare/AddPolicyButton'
import PolicyCompareButton from '@/component/PolicyElements/PolicyCompare/PolicyCompareButton'
import PolicyCard from "@/component/PolicyElements/PolicyCard";

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import textStyle from '@/component/BIDashboard/DashboardElements/TextItem/style.module.css';
import policyCompare from '@/component/PolicyElements/PolicyCompare/style.module.css'
import policy from '@/component/PolicyElements/PolicyCard/style.module.css'

import brdcrmbArrow from '@/public/icons/brdcrmbArrow.svg'
import downloadIcon from '@/public/icons/downloadIcon.svg'
import shareIcon from '@/public/icons/shareIcon.svg'

import bajajAllianz_logo from '@/public/policyLogos/bajajAllianz_logo.png'
import icici_logo from '@/public/policyLogos/icici_logo.png'
import tataAIG_logo from '@/public/policyLogos/tataAIG_logo.png'
import newIndiaAssurance_logo from '@/public/policyLogos/newIndiaAssurance_logo.png'
import hdfcErgo_logo from '@/public/policyLogos/hdfcErgo_logo.png'

export default function YourQuoteDetail() {

  const [showCompare, setShowCompare] = useState(false);
  const AddCompareClick = () => setShowCompare(true);
  const HandleClose = () => setShowCompare(false);

  return (
    <>
      <Head>
        <title>Your Quotes | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard>
        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <div className='d-flex align-items-center'>
              <DashboardHeadingItem
                title="Resume quotes"
              />
              <i className='mx-2 mx-md-3'>
                <Image src={brdcrmbArrow} width={8} height={8} alt="arrow" />
              </i>
              <DashboardHeadingItem
                title="Directors & Officers quote"
              />
            </div>
          </Col>
          <Col md="auto"></Col>
        </Row>
        <PolicyCompare
          customClass={showCompare ? policyCompare.show : policyCompare.hide}
          handleClose={HandleClose}
        >
          <PolicySelected
            InsurerName="Bajaj"
            InsurerLogo={bajajAllianz_logo}
            PolicyName="Directors & Officers Insurance"
          />
          <PolicySelected
            InsurerName="ICICI"
            InsurerLogo={icici_logo}
            PolicyName="Directors & Officers Insurance"
          />
          <AddPolicyButton />
          <PolicyCompareButton
            href="/quote_comparison"
          />
        </PolicyCompare>
        <QuoteCompareCard
          title="Director's & Officer's Liability Insurance"
          jurisdiction="Worldwide Jurisdiction"
          territory="Worldwide Territory"
          limitIndemnity="15,00,00,000.00"
        >
          <Row className="g-3 g-md-4">
            <Col>
              <Row className="g-3 g-md-4">
                <Col md={10} xl={7}>
                  <ReminderCard
                    days="45"
                    description="Lorem ipsum dolor sit amet consectetur. Egestas diam quam duis at ultrices. Suscipit dignissim eu phasellus amet commodo purus. Sit dolor pellentesque condimentum."
                  >
                    <ProgressBar now={10} />
                  </ReminderCard>
                </Col>
              </Row>
            </Col>
            <Col md="auto">
              <div className="text-md-end">
                <ButtonItem
                  title="Talk to an Expert"
                  type="button"
                  customClass={`m-0 px-2 ${buttonStyle.minWidth3} ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                />
                <ButtonItem
                  type="button"
                  iconPosition="left"
                  customClass={`ms-3 me-0 ${buttonStyle.btnTrans} ${buttonStyle.border2} ${buttonStyle.btnBig} ${buttonStyle.btnIcon}`}
                >
                  <Image src={downloadIcon} width={19} height={24} alt="download icon" />
                </ButtonItem>
                <ButtonItem
                  type="button"
                  iconPosition="left"
                  customClass={`ms-3 me-0 ${buttonStyle.btnTrans} ${buttonStyle.border2} ${buttonStyle.btnBig} ${buttonStyle.btnIcon}`}
                >
                  <Image src={shareIcon} width={19} height={24} alt="share icon" />
                </ButtonItem>
                <Text
                  color={textStyle.blueGray}
                  size={textStyle.font14}
                  weight={textStyle.medium}
                  customClass="mt-4 mb-0"
                >To Modify or Close any quote, schedule a call with our experts.</Text>
              </div>
            </Col>
          </Row>
          <Row className="g-3 g-md-4 mt-3 mt-lg-4">
            <Col lg={6} xl={4}>
              <PolicyCard
                policyLogo={icici_logo}
                title="ICICI Lombard"
                listText1="Policy in Minutes"
                listText2="Trusted by 340 businesses"
                listText3="Cover for retired directors"
                priceAmount="33,245"
                policyName="Directors & Officers Liability"
                policyCover="1.5 Crore"
                policyPremium="35,000"
                featuresIncluded={[
                  <>
                    <li>Pension Trustee Liability</li>
                    <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                    <li>Pecuniary Penalties Cover</li>
                    <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                    <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                    <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                    <li>Protected Excess Limit for Non-Executive Directors</li>
                    <li>Public Relations Expenses Extension</li>
                    <li>Extradition Costs Extension: Full Limit</li>
                    <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                  </>
                ]}
              >
                <Button variant="primary" className='btnCommon yellowBtn' type="button">
                  <span>Buy Now</span>
                </Button>
                <div className={`${policy.policyCompare}`}>
                  <Form.Check
                    type="checkbox"
                    id="compare-3"
                    name="policy-compare"
                    label="Add to compare"
                    className={`${policy.policyCompareCheck}`}
                    onClick={AddCompareClick}
                  />
                </div>
              </PolicyCard>
            </Col>
            <Col lg={6} xl={4}>
              <PolicyCard
                policyLogo={tataAIG_logo}
                title="TATA AIG"
                listText1="Policy in Minutes"
                listText2="Trusted by 340 businesses"
                listText3="Cover for retired directors"
                priceAmount="43,325"
                policyName="Directors & Officers Liability"
                policyCover="1.5 Crore"
                policyPremium="35,000"
                featuresIncluded={[
                  <>
                    <li>Pension Trustee Liability</li>
                    <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                    <li>Pecuniary Penalties Cover</li>
                    <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                    <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                    <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                    <li>Protected Excess Limit for Non-Executive Directors</li>
                    <li>Public Relations Expenses Extension</li>
                    <li>Extradition Costs Extension: Full Limit</li>
                    <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                  </>
                ]}
              >
                <Button variant="primary" className='btnCommon yellowBtn' type="button">
                  <span>Buy Now</span>
                </Button>
                <div className={`${policy.policyCompare}`}>
                  <Form.Check
                    type="checkbox"
                    id="compare-4"
                    name="policy-compare"
                    label="Add to compare"
                    className={`${policy.policyCompareCheck}`}
                    onClick={AddCompareClick}
                  />
                </div>
              </PolicyCard>
            </Col>
            <Col lg={6} xl={4}>
              <PolicyCard
                policyLogo={newIndiaAssurance_logo}
                title="New India Assurance Co. Ltd."
                listText1="Policy in Minutes"
                listText2="Trusted by 340 businesses"
                listText3="Cover for retired directors"
                priceAmount="43,325"
                policyName="Directors & Officers Liability"
                policyCover="1.5 Crore"
                policyPremium="13,537"
                featuresIncluded={[
                  <>
                    <li>Pension Trustee Liability</li>
                    <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                    <li>Pecuniary Penalties Cover</li>
                    <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                    <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                    <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                    <li>Protected Excess Limit for Non-Executive Directors</li>
                    <li>Public Relations Expenses Extension</li>
                    <li>Extradition Costs Extension: Full Limit</li>
                    <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                  </>
                ]}
              >
                <Button variant="primary" className='btnCommon yellowBtn' type="button">
                  <span>Buy Now</span>
                </Button>
                <div className={`${policy.policyCompare}`}>
                  <Form.Check
                    type="checkbox"
                    id="compare-1"
                    name="policy-compare"
                    label="Add to compare"
                    className={`${policy.policyCompareCheck}`}
                    onClick={AddCompareClick}
                  />
                </div>
              </PolicyCard>
            </Col>
            <Col lg={6} xl={4}>
              <PolicyCard
                policyLogo={hdfcErgo_logo}
                title="HDFC Ergo"
                listText1="Policy in Minutes"
                listText2="Trusted by 340 businesses"
                listText3="Cover for retired directors"
                price="none"
                policyName="Directors & Officers Liability"
                policyCover="1.5 Crore"
                policyPremium="13,537"
                featuresIncluded={[
                  <>
                    <li>Pension Trustee Liability</li>
                    <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                    <li>Pecuniary Penalties Cover</li>
                    <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                    <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                    <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                    <li>Protected Excess Limit for Non-Executive Directors</li>
                    <li>Public Relations Expenses Extension</li>
                    <li>Extradition Costs Extension: Full Limit</li>
                    <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                  </>
                ]}
              >
                <Button variant="primary" className='btnCommon yellowBtn' type="button">
                  <span>Get quote</span>
                </Button>
              </PolicyCard>
            </Col>
            <Col lg={6} xl={4}>
              <PolicyCard
                policyLogo={bajajAllianz_logo}
                title="Bajaj Allianz"
                listText1="Policy in Minutes"
                listText2="Trusted by 340 businesses"
                listText3="Cover for retired directors"
                price="none"
                policyName="Directors & Officers Liability"
                policyCover="1.5 Crore"
                policyPremium="13,537"
                featuresIncluded={[
                  <>
                    <li>Pension Trustee Liability</li>
                    <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                    <li>Pecuniary Penalties Cover</li>
                    <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                    <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                    <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                    <li>Protected Excess Limit for Non-Executive Directors</li>
                    <li>Public Relations Expenses Extension</li>
                    <li>Extradition Costs Extension: Full Limit</li>
                    <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                  </>
                ]}
              >
                <Button variant="primary" className='btnCommon yellowBtn' type="button">
                  <span>Get quote</span>
                </Button>
              </PolicyCard>
            </Col>
            <Col lg={6} xl={4}>
              <PolicyCard
                policyLogo={newIndiaAssurance_logo}
                title="New India Assurance Co. Ltd."
                listText1="Policy in Minutes"
                listText2="Trusted by 340 businesses"
                listText3="Cover for retired directors"
                priceAmount="43,325"
                policyName="Directors & Officers Liability"
                policyCover="1.5 Crore"
                policyPremium="13,537"
                featuresIncluded={[
                  <>
                    <li>Pension Trustee Liability</li>
                    <li>Definition of Subsidiary includes any entity where the Company exercises effective control of management, including of any joint venture (as per policy)</li>
                    <li>Pecuniary Penalties Cover</li>
                    <li>Bail Bond and Civil Bond Expenses: Full Limit</li>
                    <li>Lawful Spouse, Domestic Partner or Family member liability</li>
                    <li>Legal Representation Expenses (not tied to Wrongful Act)</li>
                    <li>Protected Excess Limit for Non-Executive Directors</li>
                    <li>Public Relations Expenses Extension</li>
                    <li>Extradition Costs Extension: Full Limit</li>
                    <li>Occupational Health and Safety Costs- Defence Costs and Legal Representation Expenses: Full Limit</li>
                  </>
                ]}
              >
                <Button variant="primary" className='btnCommon yellowBtn' type="button">
                  <span>Buy Now</span>
                </Button>
                <div className={`${policy.policyCompare}`}>
                  <Form.Check
                    type="checkbox"
                    id="compare-7"
                    name="policy-compare"
                    label="Add to compare"
                    className={`${policy.policyCompareCheck}`}
                    onClick={AddCompareClick}
                  />
                </div>
              </PolicyCard>
            </Col>
          </Row>
        </QuoteCompareCard>
      </DashboardCard>
    </>
  )
}
