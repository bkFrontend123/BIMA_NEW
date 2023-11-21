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
            <input
              type="number"
              placeholder="Enter Declaration Value"
              value={declarationValue}
              onChange={handleInputChange}
            />
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
