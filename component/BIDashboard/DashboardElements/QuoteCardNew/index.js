import React, {useState} from 'react'
import Image from 'next/image'
import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";

import style from './style.module.css'

export default function QuoteCardNew(props) {
  const {icon, title, dateTime, category, statusType, limitLiability, industry, turnover, employees, children} = props;

  const [isActive, setActive] = useState(true);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={`${style.quoteCardCol}`}>
        <div className={`d-md-flex gap-2 align-items-start justify-content-between ${style.quoteCardTtl}`} onClick={handleClick}>
          <div className={`d-flex align-items-start`}>
            <span className={`d-none me-2 ${style.quoteCardArrow} ${!isActive ? style.active : ''}`}><DropdownArrowIcon /></span>
            <div>
              <span><i><Image src={icon} width={40} height={40} alt={title} /></i></span>
              <h3>{title}</h3>
              <h4>BimaKavach Technologies Pvt Ltd</h4>
              <h5>Last updated: {dateTime}</h5>
              {category === 'liability' ? (
                <div className={`${style.quoteCardCat} ${style.liabilityCat}`}>Liability Insurance</div>
              ):(
                null
              )}
              {category === 'asset' ? (
                <div className={`${style.quoteCardCat} ${style.assetCat}`}>Asset Insurance</div>
              ):(
                null
              )}
            </div>
          </div>
          <div className={`${style.quoteStatus} ${statusType == 'progress' ? style.progressStatus : ''} ${statusType == 'offline' ? style.progressStatus : ''}`}>
            {statusType === 'progress' || statusType === 'offline' ? (
              <span>In Progress</span>
            ):(
              null
            )}
          </div>
        </div>
        <div className={`${style.mblQuoteCardInfo} ${!isActive ? style.show : ''}`}>
          <hr className="my-3" />
          <div className={`${style.quoteCardList}`}>
            <p><strong>Limit of Liability required</strong>INR {limitLiability}</p>
            <p><strong>Industry</strong>{industry}</p>
            <ul>
              <li>
                <p><strong>Annual Turnover</strong>{turnover}</p>
              </li>
              <li>
                <p><strong>Number of Employees</strong>{employees}</p>
              </li>
            </ul>
          </div>
          <div className={`${style.quoteCardInfo}`}>
            <hr className="mt-0 mb-3" />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
