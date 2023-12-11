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
          {button === 'true' ? (
            <Row className="g-3 justify-content-center">
              <Col xxl={10} xl={10} lg={12}>
                <ButtonItem
                  title="Add New Quotes"
                  type="button"
                  iconPosition="right"
                  customClass={`w-100 m-0 px-2 ${buttonStyle.btnBlue} ${buttonStyle.btnBig}`}
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
