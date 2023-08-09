import React from 'react'

import style from './style.module.css'

export default function FilterButton(props) {
  const {title, icon, onClick, customClass, children} = props;

  return (
    <>
      <div className={`${style.fltrBtn} ${customClass}`} onClick={onClick}>
        {title}
        {icon == 'true' ? (
          <span>{children}</span>
        ):(
          null
        )}
      </div>
    </>
  )
}
