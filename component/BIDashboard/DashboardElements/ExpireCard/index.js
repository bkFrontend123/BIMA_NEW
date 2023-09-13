import React from 'react'

import progress from '@/assets/css/progress.module.css'
import style from './style.module.css'

export default function ExpireCard(props) {
  const {days, children} = props;

  return (
    <>
      <div className={`${style.reminderCard}`}>
        <div className={`${style.reminderProgress}`}>
          <div className={`${progress.progressDiv} ${progress.bigProgress} ${progress.noLabel} ${progress.warning}`}>
            {children}
          </div>
        </div>
        <div className={`${style.reminderTtl}`}>
          <h4>Quote expires in: {days} Days</h4>
        </div>
      </div>
    </>
  )
}
