import React from 'react'
import Image from 'next/image'

import excelIcon from '@/public/Icons/excel_icon.png';

import style from './style.module.css'

export default function FileUploadCard(props) {
  const {title, fileName, uploadTime, description, status, children} = props;

  return (
    <>
      <div className={`${style.fileUpldCol} ${status === 'sucess' ? style.fileUpldSuccessCol : ''} ${status === 'error' ? style.fileUpldErrorCol : ''}`}>
        <div className={style.fileUpldHdr}>
            <h4><i><Image src={excelIcon} width={40} height={37} alt="Excel Icon" /></i> {title}</h4>
            <p>{description}</p>
        </div>
        <div className={style.fileUpldBody}>
          {fileName ? (
            <div className={style.fileUpldInfo}>
              <p>File Name</p>
              <h6>{fileName}</h6>
            </div>
          ):(
            null
          )}
          {uploadTime ? (
            <div className={style.fileUpldInfo}>
              <p>Upload Time</p>
              <h6>{uploadTime}</h6>
            </div>
          ):(
            null
          )}
          {children}
        </div>
      </div>
    </>
  )
}
