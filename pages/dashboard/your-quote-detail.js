import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { Row, Col, Form, Button, ProgressBar, Dropdown } from 'react-bootstrap';

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
import headerStyle from '@/component/HeaderPlain/style.module.css'

import DropdownArrow from '@/component/Icons/DropdownArrow'
import brdcrmbArrow from '@/public/icons/brdcrmbArrow.svg'
import downloadIcon from '@/public/icons/downloadIcon.svg'
import shareIcon from '@/public/icons/shareIcon.svg'

import bajajAllianz_logo from '@/public/policyLogos/bajajAllianz_logo.webp'
import icici_logo from '@/public/policyLogos/icici_logo.webp'
import tataAIG_logo from '@/public/policyLogos/tataAIG_logo.webp'
import newIndiaAssurance_logo from '@/public/policyLogos/newIndiaAssurance_logo.webp'
import hdfcErgo_logo from '@/public/policyLogos/hdfcErgo_logo.webp'

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
      <DashboardCard
        talkExpert="himani"
        activeMenu="1"
      >
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
          {/*<AddPolicyButton />*/}
          <p className='title-14 text-black mt-4 text-center d-none d-md-block'>Please select at least 3 to compare</p>
          <PolicyCompareButton
            href="/quote_comparison"
          />
        </PolicyCompare>
        <QuoteCompareCard
          title="Director's & Officer's Liability Insurance"
          jurisdiction="Worldwide Jurisdiction"
          territory="Worldwide Territory"
          limitIndemnity="15 Cr"
        >
          <Row className="g-3 g-md-4">
            <Col>
              <Row className="g-3 g-md-4">
                <Col md={10} xl={7}>
                  <ReminderCard
                    days="45"
                    description="Depending on the change in the market circumstances and the insurance company's underwriting guidelines the quote may change."
                  >
                    <ProgressBar now={10} />
                  </ReminderCard>
                </Col>
              </Row>
            </Col>
            <Col md="auto">
              <div className="text-md-end">
                <div className='d-flex align-items-center justify-content-end'>
                  <div className={`hdrDrpdwn ${headerStyle.hdrDrpdwn} ${headerStyle.hdrTalkDrpdwn}`}>
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="talk-expert" className={`btnCommon yellowBtn ${headerStyle.btnBig}`}>
                        <span>Talk to an expert</span>
                        <i className='ms-2'>
                          <DropdownArrow width="11" height="7" />
                        </i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className={headerStyle.hdrDrpMenu}>
                        <div>
                          <ul>
                            <li>
                              <i>
                                <Image src="/icons/whatsapp_icon.svg" width="18" height="19" alt="Whatsapp" />
                              </i>
                              <div>
                                <span>WhatApp us:</span>
                                <a href="https://wa.me/9036554785" target="_blank">+91 9036554785</a>
                              </div>
                            </li>
                            <li>
                              <i>
                                <Image src="/icons/call_fill_icon.svg" width="13" height="13" alt="Call" />
                              </i>
                              <div>
                                <span>Call us for Liability:</span>
                                <a href="tel:9036554785">+91 9036554785</a>
                              </div>
                            </li>
                            <li>
                              <i>
                                <Image src="/icons/call_fill_icon.svg" width="13" height="13" alt="Call" />
                              </i>
                              <div>
                              <span>Call us for P&C:</span>
                                <a href="tel:9035492594">+91 9035492594</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
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
                </div>
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
