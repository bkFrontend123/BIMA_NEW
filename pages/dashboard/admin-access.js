import React from 'react'
import Head from 'next/head'

import {Row, Col, Form, FloatingLabel} from 'react-bootstrap';

import DashboardCard from '@/component/BIDashboard/DashboardCard'
import DashboardHeadingItem from '@/component/BIDashboard/DashboardHeading'
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import form from '@/assets/css/form.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function AdminAccess() {

  return (
    <>
      <Head>
        <title>Admin Access | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <DashboardCard
        talkExpert="himani"
        activeMenu="7"
      >
        <Row className="g-0 g-md-4 align-items-center justify-space-between mb-4">
          <Col md>
            <DashboardHeadingItem
              title="Admin Access"
            />
          </Col>
          <Col md="auto">
            
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className={`greyForm ${form.commonForm} ${form.greyForm}`}>
              <Form>
                <Form.Group className="floatFormGroup mb-4">
                    <FloatingLabel controlId="companyName" label="Your Company Name">
                        <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="floatFormGroup mb-4">
                    <FloatingLabel controlId="name" label="Your Name">
                        <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="floatFormGroup mb-4">
                    <FloatingLabel controlId="phoneNumber" label="Your Phone Number">
                        <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="floatFormGroup mb-4">
                    <FloatingLabel controlId="workEmail" label="Your Work Email Address">
                        <Form.Control className={`${form.formInput}`} type="email" placeholder="&nbsp;" />
                    </FloatingLabel>
                </Form.Group>
                <div className={`${form.fromButtonDiv}`}>
                    <ButtonItem
                      title="Update Details"
                      type="submit"
                      customClass={`m-0 px-2 ${buttonStyle.minWidth3} ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                    />
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </DashboardCard>
    </>
  )
}