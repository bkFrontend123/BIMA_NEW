import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import {Form, FloatingLabel, Button} from 'react-bootstrap';

import HeaderPlain from '@/component/HeaderPlain'
import DashboardLoginCard from '@/component/BIDashboard/DashboardLogin'

import loginLayoutStyle from '@/assets/css/loginLayout.module.css'
import form from '@/assets/css/form.module.css'

import SubscribeArrow from '@/component/Icons/SubscribeArrow';

export default function Login() {

  const router = useRouter();
  const goToOtpPage = () => {
      router.push('/dashboard/otp');
  };
  
  return (
    <>
      <Head>
        <title>Login | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <HeaderPlain
        scheduleCall="true"
      />
      <DashboardLoginCard
        loginText="To sign in, please enter your email address"
      >
        <div className={`${loginLayoutStyle.loginForm} ${form.commonForm}`}>
          <Form>
            <Form.Group className="floatFormGroup mb-4">
              <FloatingLabel controlId="workEmail" label="Work email address">
                  <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" />
              </FloatingLabel>
            </Form.Group>
          </Form>
          <div className={`${loginLayoutStyle.loginButton}`}>
            <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={goToOtpPage}>
                <span className='me-2'>Sign In with OTP</span>
                <SubscribeArrow iconColor="black stroke" width="21" height="16" />
            </Button>
          </div>
        </div>
      </DashboardLoginCard>
    </>
  )
}