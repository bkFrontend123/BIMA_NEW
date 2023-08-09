import React from 'react'

import RupeeIcon from "@/component/BIDashboard/Icons/IconRupee";

import style from './style.module.css'

export default function PremiumField(props) {
  const {title, cost} = props;

  return (
    <>
      <div className={`${style.premiumFieldDiv}`}>
        <div className={`${style.premiumField}`}>
          <p>{title}</p>
          <span><i><RupeeIcon/></i>{cost}</span>
        </div>
      </div>
    </>
  )
}
