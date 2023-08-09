import React from 'react'
import Image from 'next/image'

import progress from '@/assets/css/progress.module.css'
import style from './style.module.css'

import reminderIcon from "@/public/icons/reminderIcon.svg"

export default function ReminderCard(props) {
  const {days, children, description} = props;

  return (
    <>
      <div className={`${style.reminderCard}`}>
        <div className={`${style.reminderTtl}`}>
          <h3><i><Image src={reminderIcon} width={26} height={24} alt="reminder icon" /></i> Reminder!</h3>
          <h4>Your quote expires in {days} Days</h4>
        </div>
        <div className={`${style.reminderProgress}`}>
          <div className={`${progress.progressDiv} ${progress.bigProgress} ${progress.noLabel} ${progress.warning}`}>
            {children}
          </div>
        </div>
        <p>{description}</p>
      </div>
    </>
  )
}
