import React from 'react'

import {Container,Row, Col} from 'react-bootstrap';

import style from './style.module.css'

export default function FooterPlain(props) {
    const {customClass, starContent } = props;
    return (
        <>
            <footer className={`sectionPadding ${style.ftrBlock} ${customClass}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={12} xxl={11}>
                            {starContent == 'true' ? (
                               <div className={`mb-4 ${style.ftrCntnt}`}>
                                    <p className={style.yellow}>*The estimated premium mentioned above is calculated under ideal conditions. The actual pricing will vary based on the specific information provided by the insured.</p>
                                </div>
                            ): (
                                null
                            )
                            }
                            <div className={style.ftrCntnt}>
                                <p>BimaKavach Insurance Broking Pvt. Ltd. | CIN- U66010MP2022PTC059393 | Registered  Office- Flat No 201, Classic Avenue,184 Shrinagar Main, Indore Madhya Pradesh India- 452018 | Phone No.- 9036554785 | Email- support@bimakavach.com </p>
                                <p>BimaKavach is registered as a Direct Broker | Registration No. 901, Registration Code No.  IRDAI / DB 985/ 2022, Valid till 25/06/2026, License category- Direct Broker (General).</p>
                                <p>Visitors are being informed that BimaKavach Insurance Broking Pvt. Ltd. holds the right to share the information submitted by you on the website with Insurers. Product information is genuine and exclusively based on information obtained from insurers.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
