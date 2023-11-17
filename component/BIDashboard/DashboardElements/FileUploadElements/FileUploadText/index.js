import React from 'react'

import UploadIcon from "@/component/BIDashboard/Icons/IconUpload";

import style from './style.module.css'

export default function FileUploadText(props) {
  const { children } = props;

  return (
    <>
      <div className={`${style.fileUpldText}`}>
        <p>Click to upload xls</p>
        <p><span>choose xls, xlsx, csv, xlsm, xlsb</span></p>
        <div className={`${style.fileSlctBtn}`}>
          <label>
            <input type="file" />
            Upload <UploadIcon />
          </label>
        </div>
        {children}
    </div>
    </>
  )
}
