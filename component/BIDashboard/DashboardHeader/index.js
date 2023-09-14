import React, { useState, useEffect, Children } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

import {Row, Col, Dropdown} from 'react-bootstrap';

import NotificationItem from "@/component/BIDashboard/DashboardElements/NotificationCard";
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem";
import WelcomeModal from '@/component/BIDashboard/DashboardElements/Modal/WelcomeModal'
import AlertModal from '@/component/BIDashboard/DashboardElements/Modal/AlertModal'

import LogoIcon from "@/component/BIDashboard/Icons/IconLogo";
import BellIcon from '@/component/BIDashboard/Icons/IconBell';
import MenuIcon from "@/component/BIDashboard/Icons/IconMenu";
import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import mainLogo from '@/public/logo-main.svg'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function DashboardHeader(props) {
  const {click} = props;

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

  const [showLogout, setShowLogout] = useState(false);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  const router = useRouter();
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
                  <Dropdown.Item href="/dashboard/profile" className={`${dashLayoutStyle.dHdrDropMenu}`}>Company Profile</Dropdown.Item>
                  <Dropdown.Item href="#/settings" className={`${dashLayoutStyle.dHdrDropMenu}`}>Settings</Dropdown.Item>
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
