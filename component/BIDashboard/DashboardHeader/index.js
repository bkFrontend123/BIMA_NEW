import React, { useState, useEffect, Children } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

import {Row, Col, Form, Dropdown} from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import NotificationItem from "@/component/BIDashboard/DashboardElements/NotificationCard";
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem";
import WelcomeModal from '@/component/BIDashboard/DashboardElements/Modal/WelcomeModal'
import AlertModal from '@/component/BIDashboard/DashboardElements/Modal/AlertModal'

import LogoIcon from "@/component/BIDashboard/Icons/IconLogo";
import BusinessIcon from '@/component/BIDashboard/Icons/IconBusiness';
import BellIcon from '@/component/BIDashboard/Icons/IconBell';
import MenuIcon from "@/component/BIDashboard/Icons/IconMenu";
import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import mainLogo from '@/public/logo-main.svg'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function DashboardHeader(props) {
  const {click} = props;

  const [businessSelectValue, setBusinessSelectValue] = useState('3');
  const businessSelectOptions = [
      {name: 'View All Businesses', value: '1'},
      {name: 'BimaKavach Bengaluru', value: '2'},
      {name: 'BimaKavach Indore', value: '3'},
      {name: 'BimaKavach Mumbai', value: '4'},
      {name: 'BimaKavach Varodhara', value: '5'},
  ];

  const notificationData = ([
    {
      id: "1",
      date: "27 Aug 23",
      title: "Proposal form pending.",
      subtitle: "Directors & Officers",
      description: "Bimakavach Technologies Pvt Ltd",
    },
    {
      id: "2",
      date: "27 Aug 23",
      title: "Quotes are expiring in 39 days.",
      subtitle: "Directors & Officers",
      description: "Bimakavach Technologies Pvt Ltd",
    },
  ])

  const router = useRouter();
  const goToProfile = () => {
    router.push('/dashboard/profile');
  };

  const goToSettings = () => {
    router.push('/dashboard/settings');
  };

  const [showLogout, setShowLogout] = useState(false);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  const goToLogout = () => {
    router.push('/dashboard/login');
  };

  return (
    <>
      <div className={`${dashLayoutStyle.dashboardHeader}`}>
        <Row className='g-2 g-md-3 align-items-center'>
          <Col>
            <div className={`d-none d-md-block ${dashLayoutStyle.dashHdrLogo}`}>
              <Link href="/" className={`${dashLayoutStyle.dashHdrLogoLink}`}>
                <Image src={mainLogo} width="200" height="30" alt="Bimakavach Logo" />
              </Link>
            </div>
            <div className={`d-md-none ${dashLayoutStyle.mblLogo}`}>
              <Link href="/" className={`${dashLayoutStyle.mblLogoLink}`}>
                <LogoIcon />
              </Link>
            </div>
          </Col>
          <Col xs="auto">
            <div className='d-flex align-items-center gap-3'>
              <Form.Group className={`selectDropDiv selectBusinessDropDiv ${!businessSelectValue == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                  options={businessSelectOptions}
                  name="businessSelect"
                  placeholder="&nbsp;"
                  onChange={setBusinessSelectValue}
                  value={businessSelectValue}
                />
                <label>Select your Business</label>
                <i><BusinessIcon /></i>
              </Form.Group>
              <Dropdown className={`${dashLayoutStyle.dHdrDrop} ${dashLayoutStyle.dHdrNotiDrop}`}>
                <Dropdown.Toggle variant="" id="notification-dropdown" className={`${dashLayoutStyle.dashHdrDropBtn}`}>
                  <BellIcon />
                </Dropdown.Toggle>
                <Dropdown.Menu className={`${dashLayoutStyle.dHdrDropMenuDiv}`}>
                  {notificationData.map((item) =>
                    <NotificationItem
                      date={item.date}
                      title={item.title}
                      subtitle={item.subtitle}
                      description={item.description}
                      key={item.id}
                    >
                      <ButtonItem
                        title="Fill Proposal Form"
                        type="button"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnYellowBorder}`}
                      >
                        <ArrowPrimaryIcon />
                      </ButtonItem>
                    </NotificationItem>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={`${dashLayoutStyle.dHdrDrop}`}>
                <Dropdown.Toggle variant="" id="profile-dropdown" className={`${dashLayoutStyle.dashHdrDropBtn}`}>
                  <span>TJ</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className={`${dashLayoutStyle.dHdrDropMenuDiv}`}>
                  <Dropdown.Item href="#" onClick={goToProfile} className={`${dashLayoutStyle.dHdrDropMenu}`}>Company Profile</Dropdown.Item>
                  <Dropdown.Item href="#" onClick={goToSettings} className={`${dashLayoutStyle.dHdrDropMenu}`}>Settings</Dropdown.Item>
                  <Dropdown.Divider className={`${dashLayoutStyle.dHdrDropDvdr}`} />
                  <Dropdown.Item href="#" onClick={handleShowLogout} className={`${dashLayoutStyle.dHdrDropMenu}`}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className={`d-lg-none ${dashLayoutStyle.mblMenu}`} onClick={click}>
                <MenuIcon />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <WelcomeModal />
      <AlertModal
        title="Are you sure you want to logout?"
        show={showLogout}
        handleClose={handleCloseLogout}
      >
        <ButtonItem
          title="Yes"
          type="button"
          customClass={`m-0 px-2 ${buttonStyle.minWidth} ${buttonStyle.btnYellowBorder}`}
          onClick={goToLogout}
        />
      </AlertModal>
    </>
  )
}
