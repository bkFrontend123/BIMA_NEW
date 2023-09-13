import React from 'react'
import Head from 'next/head'

import {Row, Col} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import Text from "@/component/BIDashboard/DashboardElements/TextItem";
import ContactSupportItem from "@/component/BIDashboard/DashboardElements/ContactSupport";

import textStyle from '@/component/BIDashboard/DashboardElements/TextItem/style.module.css';

import WhatsappIcon from '@/component/BIDashboard/Icons/IconWhatsapp';
import MailIcon from '@/component/BIDashboard/Icons/IconMail';
import CallIcon from '@/component/BIDashboard/Icons/IconCall';

export default function Support() {

  return (
    <>
      <Head>
        <title>Support | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        talkExpert="himani"
        activeMenu="6"
      >
        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Support"
            />
          </Col>
        </Row>
        <Text
          color={textStyle.black}
          size={textStyle.font16}
          weight={textStyle.medium}
          customClass="m-0 pb-2"
        >Advisor can answer your insurance questions, provide guidance,<br/> and tailor coverages to your startup.</Text>
        <Row>
          <Col xs={12}>
              <ContactSupportItem
                title="WhatsApp"
                value="+91 8839107441"
                link="https://wa.me/8839107441"
                customClass="mt-4"
              >
                <WhatsappIcon />
              </ContactSupportItem>
              <ContactSupportItem
                title="Email"
                value="support@bimakavach.com"
                link="mailto:support@bimakavach.com"
                customClass="mt-4"
              >
                <MailIcon />
              </ContactSupportItem>
              <ContactSupportItem
                title="Call Us"
                value="+91 8839107441"
                link="https://wa.me/8839107441"
                customClass="mt-4"
              >
                <CallIcon />
              </ContactSupportItem>
          </Col>
        </Row>
      </DashboardCard>
    </>
  )
}