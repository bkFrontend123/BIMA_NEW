import React from 'react'

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import SupportIcon from "@/component/BIDashboard/Icons/IconSupportSmall";

import style from './style.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function GetHelp(props) {

  return (
    <>
      <ButtonItem
        title="Get Help"
        type="button"
        iconPosition="left"
        customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
      >
        <SupportIcon />
      </ButtonItem>
    </>
  )
}
