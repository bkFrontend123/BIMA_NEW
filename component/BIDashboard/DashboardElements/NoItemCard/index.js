import React from 'react'
import { useRouter } from 'next/router';

import {Row, Col} from 'react-bootstrap';

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import GetHelp from '@/component/BIDashboard/DashboardElements/GetHelp';

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import style from './style.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function NoItemCard(props) {
  const {customClass, title, button, children} = props;

  const router = useRouter();
  const goToShopCoveragePage = () => {
      router.push('/dashboard/shop-coverages');
  };

  return (
    <>
      <div className={`${style.noItemDiv} ${customClass}`}>
        <h3>{title}</h3>
        {children}
        {button === 'true' ? (
          <Row className="g-3 justify-content-center">
            <Col xxl={10} xl={10} lg={12}>
              <ButtonItem
                title="Add New Quotes"
                type="button"
                iconPosition="right"
                customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                onClick={goToShopCoveragePage}
              >
                <ArrowPrimaryIcon />
              </ButtonItem>
            </Col>
          </Row>
        ):(
          null
        )}
        <div className={`${style.noItemBtm}`}>
          <GetHelp />
        </div>
      </div>
    </>
  )
}
