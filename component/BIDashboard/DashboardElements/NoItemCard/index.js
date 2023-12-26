import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import {Row, Col} from 'react-bootstrap';

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import GetHelp from '@/component/BIDashboard/DashboardElements/GetHelp';

import NoItemIcon from '@/component/BIDashboard/Icons/IconNoItem';
import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import style from './style.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function NoItemCard(props) {
  const {customClass, title, imgSrc, subTitle, width, height, description, button, buttonColor} = props;

  const router = useRouter();
  const goToShopCoveragePage = () => {
      router.push('/dashboard/shop-coverages');
  };

  return (
    <>
      <div className={`${style.noItemDiv} ${customClass} ${subTitle ? style.noItemClaimRequestDiv : ''}`}>
        <h3><i><NoItemIcon /></i>{title}</h3>
        <div className={`${style.noItemBody}`}>
          {imgSrc ? (
            <Image src={imgSrc} width={width} height={height} alt={title} />
          ) : (
            null
          )}
          {subTitle ? (
            <p>{subTitle}</p>
          ) : (
            null
          )}
        </div>
        <div className={`${style.noItemFtr}`}>
          {description ? (
            <p>{description}</p>
          ) : (
            null
          )}
          {button === 'true' ? (
            <Row className="g-3 justify-content-center">
              <Col xxl={12} xl={12} lg={12}>
                <ButtonItem
                  title="Explore Now"
                  type="button"
                  iconPosition="right"
                  customClass={`m-0 px-2 ${buttonColor ? buttonStyle.btnDark + ' ' + buttonStyle.minWidth3 : buttonStyle.btnBlue + ' w-100'} ${buttonStyle.btnBig}`}
                  onClick={goToShopCoveragePage}
                >
                  <ArrowPrimaryIcon />
                </ButtonItem>
              </Col>
            </Row>
          ):(
            null
          )}
        </div>
        {/*<div className={`${style.noItemBtm}`}>
          <GetHelp />
        </div>*/}
      </div>
    </>
  )
}
