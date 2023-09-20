import React, {useState} from 'react'

import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";

import style from './style.module.css'

export default function QuoteCardOld(props) {
  const {title, dateTime, statusType, industry, turnover, employees, city, state, children} = props;

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
              <h3>{title}</h3>
              <h5>Last updated: {dateTime}</h5>
            </div>
          </div>
          <div className={`${style.quoteStatus} ${statusType == 'progress' ? style.progressStatus : ''} ${statusType == 'offline' ? style.offlineStatus : ''}`}><i className="d-none d-md-inline-block">Quote status:</i>
            {statusType === 'progress' ? (
              <span>In Progress</span>
            ):(
              null
            )}
            {statusType === 'offline' ? (
              <span>Offline quote</span>
            ):(
              null
            )}
          </div>
        </div>
        <div className={`${style.mblQuoteCardInfo} ${!isActive ? style.show : ''}`}>
          <hr className="mt-3 mb-0 d-md-none" />
          <div className={`${style.quoteCardList}`}>
            <ul>
              <li>
                <p><strong>Industry:</strong> {industry}</p>
              </li>
              <li>
                <p><strong>Turnover:</strong> {turnover}</p>
              </li>
              <li>
                <p><strong>Number of Employees:</strong> {employees}</p>
              </li>
              <li>
                <p><strong>City:</strong> {city}</p>
              </li>
              <li>
                <p><strong>State:</strong> {state}</p>
              </li>
            </ul>
          </div>
          <div className={`${style.quoteCardInfo}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
