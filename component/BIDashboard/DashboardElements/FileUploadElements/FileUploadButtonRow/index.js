import React from 'react'

import style from './style.module.css'

export default function FileUploadButtonRow(props) {
  const { children} = props;

  return (
    <>
      <div className={`${style.fileUpldBtnDiv}`}>
          {children}
      </div>
    </>
  )
}
