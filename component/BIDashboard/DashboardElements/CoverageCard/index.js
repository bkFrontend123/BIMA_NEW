import React, {useState} from 'react'
import Image from 'next/image'

import LinkItem from '@/component/BIDashboard/DashboardElements/LinkItem';

import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";
import InfoIcon from '@/component/BIDashboard/Icons/IconInfo';

import style from './style.module.css'

export default function CoverageCard(props) {
  const {icon, title, description, link, children} = props;

  const [isActive, setActive] = useState(true);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={`${style.shopCovrgCol}`}>
        <div className={`d-md-flex gap-2 align-items-start justify-content-between ${style.shopCovrgTtl}`} onClick={handleClick}>
          <div className={`d-md-flex align-items-start`}>
            <div className={`d-none me-2 ${style.shopCovrgArrow} ${!isActive ? style.active : ''}`}><DropdownArrowIcon /></div>
            <div className={`d-flex d-md-block gap-2 align-items-start`}>
              <span><i><Image src={icon} width={70} height={70} alt={title} /></i></span>
              <h3 onClick={handleClick}>{title}</h3>
            </div>
          </div>
          <div className={`${style.shopActnBtn}`}>
            {children}
          </div>
        </div>
        <div className={`${style.mblShopCovrgInfo} ${!isActive ? style.show : ''}`}>
          <p>{description}</p>
          <div className={`d-none d-md-block ${style.shopCovrgBtns}`}>
            <LinkItem
              title={<>Learn more about {title} <span className='ms-1'><InfoIcon /></span></>}
              href={link}
              customClass={style.shopCovrgLink}
            />
          </div>
          <div className={`d-md-none ${style.shopCovrgBtns}`}>
            <LinkItem
              title={<>Learn More <span className='ms-1'><InfoIcon /></span></>}
              href={link}
              customClass={style.shopCovrgLink}
            />
          </div>
        </div>
      </div>
    </>
  )
}
