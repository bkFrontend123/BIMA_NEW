import React, {useState} from 'react'
import Image from 'next/image'


import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";

import style from './style.module.css'

export default function ClaimCard(props) {
  const {title, children} = props;

  return (
    <>
      <div className={`${style.claimNoCardCol}`}>
        <div>
          <h3>{title}</h3>
          <div className={`${style.claimNoCardBtn}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
