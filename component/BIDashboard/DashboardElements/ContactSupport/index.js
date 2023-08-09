import React from 'react'
import Link from 'next/link'

import style from './style.module.css'

export default function ContactSupport(props) {
  const {title, link, value, customClass, children} = props;

  return (
    <>
      <div className={`d-flex align-items-center ${style.contSprtCol} ${customClass}`}>
        <span>{children}</span>
        <div className={`${style.contSprtInfo}`}>
          <h5>{title}</h5>
          <p><Link href={link} className={`${style.contLink}`}>{value}</Link></p>
        </div>
      </div>
    </>
  )
}
