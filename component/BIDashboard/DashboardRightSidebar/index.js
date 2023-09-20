import React from 'react'

import FaqCardItem from '@/component/BIDashboard/DashboardElements/ClaimRequestFaqCard'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'

export default function DashboardRightSidebar(props) {
  const { children } = props;
  return (
    <>
      <div className={`${dashLayoutStyle.rghtSdbrOuter}`}>
        <div className={`${dashLayoutStyle.rghtSdbrWidget}`}>
          <h5>What is intimate claim?</h5>
          <p>Your claim Intimation request is filed. In case of any queries reach out to support@bimakavach.com</p>
        </div>
        <div className={`${dashLayoutStyle.rghtSdbrWidget}`}>
          <h5>Process of claim Intimation.</h5>
          <ul>
            <li><span>1</span> Select the Policy</li>
            <li><span>2</span> Select the reason</li>
          </ul>
        </div>
        <div className={`${dashLayoutStyle.rghtSdbrWidget}`}>
          <FaqCardItem>
            {children}
          </FaqCardItem>
        </div>
      </div>
    </>
  )
}