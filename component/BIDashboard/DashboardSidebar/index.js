import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

import LogoIcon from "@/component/BIDashboard/Icons/IconLogo";
import SwapIcon from "@/component/BIDashboard/Icons/IconSwap";
import SidebarLinkItem from "@/component/BIDashboard/DashboardSidebarLink";
import AlertModal from '@/component/BIDashboard/DashboardElements/Modal/AlertModal'
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import HomeIcon from '@/component/BIDashboard/Icons/IconHome';
import ShopIcon from '@/component/BIDashboard/Icons/IconShop';
import PolicyIcon from '@/component/BIDashboard/Icons/IconPolicy';
import ClaimIcon from '@/component/BIDashboard/Icons/IconClaim';
import RequestIcon from '@/component/BIDashboard/Icons/IconRequest';
import SupportIcon from '@/component/BIDashboard/Icons/IconSupport';
import ProfileIcon from '@/component/BIDashboard/Icons/IconProfile';
import LogoutIcon from '@/component/BIDashboard/Icons/IconLogout';
import TalkExpert from '@/component/TalkExpert'

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import talkExpert from '@/component/TalkExpert/style.module.css'

import expertImg from '@/public/himaniImg.png'

export default function DashboardSidebar(props) {
  const { activeMenu } = props;

  const router = useRouter();
  const goToLogout = () => {
    router.push('/dashboard/login');
  };

  const [showLogout, setShowLogout] = useState(false);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  return (
    <>
      {/*<div className={`mt-4 ${dashLayoutStyle.sdbrDropOuter}`}>
        <div className={`${dashLayoutStyle.sdbrDrop}`}>
          <div className={`${dashLayoutStyle.sdbrDropInput}`}>
            <input type="text" placeholder="" className={`${dashLayoutStyle.bInsurance}`} readonly="" value="Business Insurance" />
            <span><SwapIcon/></span>
          </div>
          <div className={`${dashLayoutStyle.sdbrDropInputSmall}`}><span>BI</span></div>
        </div>
      </div>*/}
      <div className={`${dashLayoutStyle.sdbrLnksList}`}>
        <SidebarLinkItem
          title="Your Quotes"
          icon={<HomeIcon/>}
          hot="true"
          href="/dashboard/quotes"
          customClass={activeMenu === '1' ? dashLayoutStyle.active : null}
        />
        <SidebarLinkItem
          title="Policies"
          icon={<PolicyIcon/>}
          href="/dashboard/policies"
          customClass={activeMenu === '2' ? dashLayoutStyle.active : null}
        />
        <SidebarLinkItem
          title="Claims"
          icon={<ClaimIcon/>}
          href="/dashboard/claims"
          customClass={activeMenu === '3' ? dashLayoutStyle.active : null}
        />
        <SidebarLinkItem
          title="Requests"
          icon={<RequestIcon/>}
          href="/dashboard/requests"
          customClass={activeMenu === '4' ? dashLayoutStyle.active : null}
        />
        <SidebarLinkItem
          title="Shop Coverages"
          icon={<ShopIcon/>}
          href="/dashboard/shop-coverages"
          customClass={activeMenu === '5' ? dashLayoutStyle.active : null}
        />
        <SidebarLinkItem
          title="Support"
          icon={<SupportIcon/>}
          href="/dashboard/support"
          customClass={activeMenu === '6' ? dashLayoutStyle.active : null}
        />
        <SidebarLinkItem
          title="Admin Access"
          icon={<ProfileIcon/>}
          href="/dashboard/admin-access"
          customClass={activeMenu === '7' ? dashLayoutStyle.active : null}
        />
        <SidebarLinkItem
          title="Logout"
          icon={<LogoutIcon/>}
          href=""
          onClick={handleShowLogout}
        />
      </div>
      <div className={`${dashLayoutStyle.sdbrHelpBox}`}>
        <p>Need Help?</p>
        <TalkExpert
          size={`${talkExpert.extraSmall}`}
          imgSrc={expertImg}
          name="Himani Doshi"
          designation="Insurance Expert"
        />
      </div>
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