import React from "react";

import style from './style.module.css'

export default function DashboardLoginHeading(props) {
  const {title} = props;
  
  return (
    <>
      <div className={`${style.loginHeading}`}>
        <h2 className="font-secondary">{title}</h2>
      </div>
    </>
  )
}