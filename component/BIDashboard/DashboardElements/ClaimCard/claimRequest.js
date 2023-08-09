import React, {useState} from 'react'
import Image from 'next/image'

import ClaimCardItem from "@/component/BIDashboard/DashboardElements/ClaimCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

export default function ClaimRequest(props) {

  return (
    <>
      <ClaimCardItem
        title="Add request"
      >
        <ButtonItem
          title="Add request"
          type="button"
          iconPosition="right"
          customClass={`m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
        >
          <ArrowPrimaryIcon />
        </ButtonItem>
      </ClaimCardItem>
    </>
  )
}
