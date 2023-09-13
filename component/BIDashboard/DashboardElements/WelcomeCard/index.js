import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import style from './style.module.css'

export default function WelcomeCard(props) {
  const {title, icon, count, subtitle, link} = props;

  return (
    <>
      <div className={`${style.welcomeCard}`}>
        <h5>{title}</h5>
        <div className={`${style.welcomeCardMedia}`}>
          <Image className={`${style.welcomeCardIcon}`} src={icon} width={200} height={145} alt={title} />
        </div>
        <div className={`${style.welcomeCardBtm}`}>
          <div className={`${style.welcomeCardInfo}`}>
            <h3>{count}</h3>
            <p>{subtitle}</p>
          </div>
          <div className={`${style.welcomeCardBtn}`}>
              <Link href={link} className={`${style.welcomeCardBtnLink}`}>
                <ArrowPrimaryIcon />
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
