import React from 'react'

import style from './style.module.css'

export default function DashboardPageTitle(props) {
  const {title} = props;

  return (
    <>
      <div className={`${style.dashTtlDiv}`}>
        <h2>{title}</h2>
      </div>
    </>
  )
}
