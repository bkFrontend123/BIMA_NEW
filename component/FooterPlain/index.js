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
                                <p>BimaKavach Insurance Brokers Private Limited | CIN: U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44, Indore - 122001 Contact Us | Legal and Admin Policies</p>

                                <p>BimaKavach is now registered as a Direct Broker | Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024, License category- Direct Broker (Life & General) | Visitors are hereby informed that their information submitted on the website may be shared with insurers. Product information is authentic and solely based on the information received from the insurers.</p>

                                <p>+Disclaimer: The premium of Rs. 23,600/year (inclusive of GST) is the starting price for a sum insured of Rs 3 Crore that may vary depending on the business activity and services rendered, company turnover, shareholder percentage, number of employees, the geographical split of turnover and employees, the geographical spread of products and services and financials of the company. STANDARD TERMS AND CONDITIONS APPLY. For more details on risk factors, terms and conditions, please read the sales brochure carefully before concluding a sale. Policybazaar Insurance Brokers Private Limited | CIN: U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44, Gurgaon, Indore – 122001 | Registration No. 742, Valid till 09/06/2024, License category Direct Broker (Life & General).</p>
                                <p>© Copyright 2008-2023 <Link href="/">bimakavach.com</Link>. All Rights Reserved.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
