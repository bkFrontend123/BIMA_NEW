import React from 'react'
import Link from 'next/link'

import style from './style.module.css'

export default function LinkItem(props) {
  const {title, center, big, href, icon, children} = props;

  return (
    <>
      <Link className={`${style.linkBtn} ${center == 'true' ? style.linkBtnCenter : ''} ${big == 'true' ? style.linkBigBtn : ''}`} href={href}>
        {icon === 'true' ? (
          <span>{children}</span>
        ):(
          null
        )}
         {title}
      </Link>
    </>
  )
}
