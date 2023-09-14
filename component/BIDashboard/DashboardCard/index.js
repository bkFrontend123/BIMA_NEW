import React, { useState } from 'react'

import DashboardSidebar from "@/component/BIDashboard/DashboardSidebar";
import DashboardHeader from "@/component/BIDashboard/DashboardHeader";
import HideArrowIcon from "@/component/BIDashboard/Icons/IconHideArrow";

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'

export default function DashboardCard(props) {
  const { activeMenu, children } = props;

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };
  return (
    <>
      <section className={`${dashLayoutStyle.dashboardOuter} ${dashLayoutStyle.dashboardOuterMedium} ${isActive ? dashLayoutStyle.dashboardOuterSmall : ''}`}>
        <DashboardHeader
          click={handleClick}
        />
        <div className={`${dashLayoutStyle.dashSidebar}`}>
          <div className={`${dashLayoutStyle.sdbrClosebtn}`} onClick={handleClick}>
            <button type="button" className="btn-close text-reset"></button>
          </div>
          <DashboardSidebar
            activeMenu={activeMenu}
          />
        </div>
        <div className={`${dashLayoutStyle.dashboardMainCard}`}>
          <div className={`${dashLayoutStyle.hideSidebarBtn}`}>
            <div className={`${dashLayoutStyle.hideBtn}`} onClick={handleClick}>
              <span>
                <HideArrowIcon /> 
              </span>
            </div>
          </div>
          <div className={`${dashLayoutStyle.dashboardBody}`}>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
