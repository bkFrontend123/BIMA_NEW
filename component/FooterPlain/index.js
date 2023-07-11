import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Container,Row, Col} from 'react-bootstrap';

import style from './style.module.css'

export default function FooterPlain(props) {
    const {customClass } = props;
    return (
        <>
            <footer className={`sectionPadding ${style.ftrBlock} ${customClass}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11}>
                            <div className={style.ftrCntnt}>
                                <p>BIMAKAVACH INSURANCE BROKING PVT. LTD. |CIN- U66010MP2022PTC059393 | REGISTERED OFFICE- FLAT NO 201, CLASSIC AVENUE,184 SHRINAGAR MAIN, INDORE MADHYA PRADESH INDIA- 452018 | PHONE NO.- 9036554785 | EMAIL- SUPPORT@BIMAKAVACH.COM</p>

                                <p>BIMAKAVACH IS REGISTERED AS A DIRECT BROKER | REGISTRATION NO. 901, REGISTRATION CODE NO. IRDAI / DB 985/ 2022, VALID TILL 25/06/2026, LICENSE CATEGORY- DIRECT BROKER (GENERAL).</p>

                                <p>VISITORS ARE BEING INFORMED THAT BIMAKAVACH INSURANCE BROKING PVT. LTD. HOLDS THE RIGHT TO SHARE THE INFORMATION SUBMITTED BY YOU ON THE WEBSITE WITH INSURERS. PRODUCT INFORMATION IS GENUINE AND EXCLUSIVELY BASED ON INFORMATION OBTAINED FROM INSURERS.</p>
                                <p>© 2023 BimaKavach Insurance Broking Pvt. Ltd. All Rights Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
