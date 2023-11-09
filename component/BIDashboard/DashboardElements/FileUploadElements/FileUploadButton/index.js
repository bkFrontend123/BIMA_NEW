import React from 'react'

import { Button } from "react-bootstrap";

import CheckIcon from "@/component/BIDashboard/Icons/IconCheck";

import style from './style.module.css'

export default function FileUploadButton(props) {
  const {title, status, onClick} = props;

  return (
    <>
      <Button className={`${style.fileUpldBtn} ${status === 'filled' ? style.filled : ''} ${status === 'active' ? style.active : ''}`} type="button" onClick={onClick}> 
        {title}
        {status === 'filled' ? (
          <i><CheckIcon /></i>
        ):(
          null
        )}
      </Button>
    </>
  )
}
