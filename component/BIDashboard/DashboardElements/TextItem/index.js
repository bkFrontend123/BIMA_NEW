import React from 'react'

import style from './style.module.css'

export default function TextItem(props) {
  const {color, size, weight, customClass, children} = props;

  return (
    <>
      <p className={`${style.text} ${color} ${size} ${weight} ${customClass}`}>{children}</p>
    </>
  )
}
