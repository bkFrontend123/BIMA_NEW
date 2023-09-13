import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import {Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import DashboardLoginCard from '@/component/BIDashboard/DashboardLogin'
import LinkItem from '@/component/BIDashboard/DashboardElements/LinkItem';

import loginLayoutStyle from '@/assets/css/loginLayout.module.css'
import form from '@/assets/css/form.module.css'

import SubscribeArrow from '@/component/Icons/SubscribeArrow';

export default function OTP() {

  const router = useRouter();
  const goToDashboardPage = () => {
      router.push('/dashboard/quotes');
  };
  
  return (
    <>
      <Head>
        <title>OTP | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <HeaderPlain
        scheduleCall="true"
      />
      <DashboardLoginCard
        loginText="Please enter 6 digit OTP sent on your email address"
      >
        <div className={`${loginLayoutStyle.loginForm} ${form.commonForm}`}>
          <Form>
            <Form.Group className="floatFormGroup mb-4">
              <FloatingLabel controlId="otp" label="Enter OTP">
                  <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" />
              </FloatingLabel>
            </Form.Group>
          </Form>
          <div className={`${loginLayoutStyle.loginButton}`}>
            <Row className='align-items-center'>
              <Col md>
                <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={goToDashboardPage}>
                  <span className='me-2'>Confirm OTP</span>
                  <SubscribeArrow iconColor="black stroke" width="21" height="16" />
                </Button>
              </Col>
              <Col md>
                <LinkItem
                  title="Change email"
                  href="/dashboard/login"
                  center="true"
                />
              </Col>
            </Row>
          </div>
          <div className={`mt-3 ${loginLayoutStyle.loginInfoText}`}>
            <p>Didn't receive the OTP yet? <Link href="" className={`${loginLayoutStyle.loginInfoLink}`}>Resend OTP</Link></p>
          </div>
        </div>
      </DashboardLoginCard>
    </>
  )
}