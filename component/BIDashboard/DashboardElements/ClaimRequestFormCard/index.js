import React from 'react'

import style from './style.module.css'

export default function ClaimRequestFormCard(props) {
  const {children} = props;

  return (
    <>
      <div className={`${style.claimCardCol}`}>
        {children}
      </div>
    </>
  )
}
