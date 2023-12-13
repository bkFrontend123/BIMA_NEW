import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Offcanvas } from 'react-bootstrap';

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import faqIcon from '@/public/icons/faqIcon.svg'
import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';
import arrowRight_white from '@/public/icons/arrowRight-white.svg'

import style from './style.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import offcanvas from '@/assets/css/offcanvas.module.css'

export default function ClaimRequestFaqCard(props) {
  const { children } = props;

  const [showKnowMore, setKnowMoreShow] = useState(false);

  const handleKnowMoreClose = () => setKnowMoreShow(false);
  const handleKnowMoreShow = () => setKnowMoreShow(true);

  return (
    <>
      <div className={`${style.faqCardCol}`}>
        <div className={`d-flex align-items-center gap-2 ${style.faqCardTtl}`}>
          <i>
            <Image src={faqIcon} width={45} height={35} alt="Faq Icon" />
          </i>
          <h4>Frequently Asked Questions</h4>
        </div>
        <div className={`${style.faqCardInfo}`}>
          <p>Have any doubts regarding Claims & Requests. Click on the button below to see all the Frequently Asked Questions.</p>
        </div>
        <div className={`${style.faqCardBtn}`}>
          <ButtonItem
            title="View FAQ's"
            type="button"
            iconPosition="right"
            customClass={`m-0 ${buttonStyle.btnDark} ${buttonStyle.minWidth2}`}
            onClick={handleKnowMoreShow}
          >
            <ArrowPrimaryIcon />
          </ButtonItem>
        </div>
      </div>
      <Offcanvas show={showKnowMore} onHide={handleKnowMoreClose} placement="end" className={`${style.qCmprOffcanvasDiv} ${offcanvas.commonOffcanvasDiv}`}>
        <Offcanvas.Header className={`${offcanvas.commonOffcanvasHeaderDiv}`}>
          <div className={`${offcanvas.commonOffcanvasHeader}`}>
            <Link href="" className={`${offcanvas.commonOffcanvasClose}`} onClick={handleKnowMoreClose}>
              <Image src={arrowRight_white} /> Close
            </Link>
            <div className={`mt-4 ${offcanvas.commonOffcanvasHdrTtl}`}>
              <h4>Frequently Asked Questions</h4>
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className={`py-0 ${offcanvas.commonOffcanvasBodyDiv}`}>
          <div className={`${offcanvas.commonOffcanvasBody}`}>
            {children}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
