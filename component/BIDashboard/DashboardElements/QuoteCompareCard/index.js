import React, {useState} from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import { Row, Col } from 'react-bootstrap';

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import style from './style.module.css'

import jurisdictionIcon from "@/public/icons/jurisdictionIcon.svg"
import territoryIcon from "@/public/icons/globeIcon.svg"
import indiaFlag from "@/public/icons/indiaFlag.png";

export default function QuoteCard(props) {
  const {title, jurisdiction, territory, limitIndemnity, children} = props;

  const router = useRouter();
  const goToYourQuotePage = () => {
    router.push('/dashboard/your-quotes');
  };

  return (
    <>
      <div className={`${style.quoteCompareCard}`}>
        <div className={`${style.quoteCompareCardHdr}`}>
          <Row className="g-3 g-md-4">
            <Col md>
              <div className={`${style.quoteCompareCardTtl}`}>
                <h2>{title}</h2>
              </div>
              <div className={`${style.quoteCompareCardList}`}>
                <ul>
                  <li><i className='me-2'><Image src={jurisdictionIcon} width={20} height={18} alt="jurisdiction icon" /></i> {jurisdiction}</li>
                  <li><i className='me-2'><Image src={territoryIcon} width={18} height={18} alt="territory icon" /></i> {territory}</li>
                  <li>Entity EPLI: <i className='ms-2'><Image src={indiaFlag} width={17} height={12} alt="india flag" /></i></li>
                </ul>
              </div>
              <div className={`${style.quoteCompareCardLimit}`}>
                <p>Limit of Indemnity:</p>
                <h4>₹{limitIndemnity}</h4>
              </div>
            </Col>
            <Col md="auto">
              <ButtonItem
                title="Edit details"
                type="button"
                customClass={`m-0 px-2 ${buttonStyle.minWidth3} ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                onClick={goToYourQuotePage}
              />
            </Col>
          </Row>
        </div>
        <div className={`${style.quoteCompareCardBody}`}>
          {children}
        </div>
      </div>
    </>
  )
}
