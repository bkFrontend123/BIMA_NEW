import React from 'react'

import style from './style.module.css'

export default function NoItemCard(props) {
  const {customClass, children} = props;

  return (
    <>
      <div className={`${style.noItemDiv} ${customClass}`}>
        <h3>{children}</h3>
      </div>
    </>
  )
}
