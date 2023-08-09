import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import loginLayoutStyle from '@/assets/css/loginLayout.module.css'
import DashboardLoginHeading from "../DashboardLoginHeading";

export default function DashboardLogin(props) {
  const {loginText, children} = props;

  return (
    <>
      <div className={`${loginLayoutStyle.loginPage}`}>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl={11}>
              <Row className="align-items-center justify-content-between">
                <Col lg={6}>
                  <div className={`${loginLayoutStyle.loginLeft}`}>
                    <DashboardLoginHeading
                      title="Your business needs Insurance too"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${loginLayoutStyle.loginRight}`}>
                    <div className={`${loginLayoutStyle.loginRightInner}`}>
                      <p>{loginText}</p>
                      {children}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}