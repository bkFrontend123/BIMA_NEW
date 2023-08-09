import React from 'react'

import style from './style.module.css'

export default function DashboardHeading(props) {
  const {title} = props;

  return (
    <>
      <div className={`${style.dashHdngDiv}`}>
        <h3>{title}</h3>
      </div>
    </>
  )
}
