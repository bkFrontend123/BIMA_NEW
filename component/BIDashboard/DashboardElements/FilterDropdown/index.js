import React, {useState} from 'react'

import style from './style.module.css'

export default function FilterDropdown(props) {
  const {title, customClass, children} = props;

  return (
    <>
      <div className={`${style.fltrDropCard} ${customClass}`}>
        <span>{title}:</span>
        {children}
      </div>
    </>
  )
}
