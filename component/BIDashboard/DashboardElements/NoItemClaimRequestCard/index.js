import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import {Row, Col} from 'react-bootstrap';

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import NoItemIcon from '@/component/BIDashboard/Icons/IconNoItem';
import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import style from './style.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function NoItemClaimRequestCard(props) {
  const {customClass, title, imgSrc, width, height, description, button} = props;

  const router = useRouter();
  const goToShopCoveragePage = () => {
      router.push('/dashboard/shop-coverages');
  };

  return (
    <>
      <div className={`${style.noItemDiv} ${customClass}`}>
        <h3><i><NoItemIcon /></i>{title}</h3>
        <div className={`${style.noItemBody}`}>
          <Image src={imgSrc} width={width} height={height} alt={title} />
        </div>
        <div className={`${style.noItemFtr}`}>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}
