import React from 'react';

import UploadIcon from "@/component/Icons/FileUpload";

import style from './style.module.css'

export default function ProposalUploadButton(props) {
  const { title, disable, btnText } = props;
  return (
    <>
      <div className={`${style.prpslFileUpldDiv}`}>
        {title ? (
          <p>{title}</p>
        ) : (
          null
        )}
        <div className={`${style.prpslFileUpldBtn} ${disable == 'true' ? style.inActive : ''}`}>
          {disable == 'true' ? (
            <label>
              {btnText} <UploadIcon />
            </label>
          ) : (
            <label>
              <input type="file" />
              {btnText} <UploadIcon />
            </label>
          )}
        </div>
    </div>
    </>
  )
}
