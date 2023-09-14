import React from 'react'

import style from './style.module.css'

export default function NotificationCard(props) {
  const {date, title, subtitle, description, children} = props;

  return (
    <>
      <div className={`${style.notiCard}`}>
        <span>{date}</span>
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{description}</p>
        <div className={`${style.notiCardBtn}`}>
          {children}
        </div>
      </div>
    </>
  )
}
