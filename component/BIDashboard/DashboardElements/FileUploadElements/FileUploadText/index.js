import React, { useState } from 'react';

import UploadIcon from "@/component/BIDashboard/Icons/IconUpload";

import style from './style.module.css'

export default function FileUploadText(props) {
  const { children, showText = true, title = "Upload" } = props;
  
  const [declarationValue, setDeclarationValue] = useState('');

  const handleInputChange = (event) => {
    setDeclarationValue(event.target.value);
  };

  return (
    <>
      <div className={`${style.fileUpldText}`}>
        {showText && <p>Click to upload xls</p>}
        {showText && <h5>In order to upload, please enter your declaration value first</h5>}
        {showText && (
          <p>
            <span>choose xls, xlsx, csv, xlsm, xlsb</span>
          </p>
        )}
        <div className={`${style.fileInputBtnDiv}`}>
          <div className={`${style.fileInputField}`}>
            <label>Enter Declaration Value</label>
            <div className={`${style.fileInputDiv} ${declarationValue ? style.fileInputFillDiv : null}`}>
              <input
                type="number"
                placeholder=""
                value={declarationValue}
                onChange={handleInputChange}
              />
              <span>INR</span>
            </div>
          </div>
          <div className={`${style.fileInputInfo}`}>
            <p>Please enter your total declaration value to upload</p>
          </div>
          <div className={`${style.fileSlctBtn} ${declarationValue ? null : style.inActive}`}>
            {declarationValue ? (
              <label>
                <input type="file" />
                {title} <UploadIcon />
              </label>
            ):(
              <label>
                {title} <UploadIcon />
              </label>
            )}
          </div>
        </div>
        {children}
    </div>
    </>
  )
}
