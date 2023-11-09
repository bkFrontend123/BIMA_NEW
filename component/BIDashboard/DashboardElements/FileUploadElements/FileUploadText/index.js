import React from 'react'

import style from './style.module.css'

export default function FileUploadText(props) {
  const { children } = props;

  return (
    <>
      <div className={`${style.fileUpldText}`}>
        <p>Click to upload xls</p>
        <p><span>choose xls, xlsx, csv, xlsm, xlsb</span></p>
        {children}
    </div>
    </>
  )
}
