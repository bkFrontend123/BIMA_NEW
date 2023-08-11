import React, {useState} from 'react'
import Image from 'next/image'

import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";

import style from './style.module.css'

export default function PolicyCard(props) {
  const {title, purchaseDate, statusType, insurerLogo, insurerName, policyPeriod, children} = props;

  const [isActive, setActive] = useState(true);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={`${style.policyCardCol}`}>
        <div className={`d-flex gap-2 align-items-start justify-content-between ${style.policyCardTtl}`} onClick={handleClick}>
          <div className={`d-flex align-items-start ${style.policyTitle}`}>
            <span className={`d-md-none me-2 ${style.policyCardArrow} ${!isActive ? style.active : ''}`}><DropdownArrowIcon /></span>
            <div>
              <h3>{title}</h3>
              <h5>Policy purchase date: {purchaseDate}</h5>
            </div>
            <div className={`${style.policyStatus} ${statusType == 'pending' ? style.pendingStatus : ''} ${statusType == 'process' ? style.processStatus : ''} ${statusType == 'confirm' ? style.confirmStatus : ''}`}><i className="d-none d-md-inline-block">Policy status:</i>
              {statusType === 'pending' ? (
                <span>Proposal form pending</span>
              ):(
                null
              )}
              {statusType === 'process' ? (
                <span>In Process</span>
              ):(
                null
              )}
              {statusType === 'confirm' ? (
                <span>Confirmed</span>
              ):(
                null
              )}
            </div>
          </div>
          <div className={`${style.policyLogo}`}>
            <Image className={`${style.policyLogoIcon}`} src={insurerLogo} alt={insurerName} />
          </div>
        </div>
        <div className={`${style.mblPolicyCardInfo} ${!isActive ? style.show : ''}`}>
          <div className={`${style.policyCardList}`}>
            <ul>
              <li>
                <p><strong>Insurer Name:</strong> {insurerName}</p>
              </li>
              <li>
                <p><strong>Policy Period:</strong> {policyPeriod}</p>
              </li>
            </ul>
          </div>
          <div className={`${style.policyCardInfo}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
