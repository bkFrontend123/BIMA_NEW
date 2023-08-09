import React, {useState} from 'react'
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
import SupportIcon from '@/component/BIDashboard/Icons/IconSupport';
import ProfileIcon from '@/component/BIDashboard/Icons/IconProfile';
import LogoutIcon from '@/component/BIDashboard/Icons/IconLogout';

import dashLayoutStyle from '@/assets/css/dashboardLayout.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function DashboardSidebar(props) {

  const router = useRouter();
  const goToLogout = () => {
    router.push('/dashboard/login');
  };

  return (
    <>
      <div className={`${dashLayoutStyle.sdbrLogo}`}>
        <Link href="/" className={`${dashLayoutStyle.sdbrLogoLink}`}>
          <span><LogoIcon/></span>
        </Link>
      </div>
      <div className={`mt-4 ${dashLayoutStyle.sdbrDropOuter}`}>
        <div className={`${dashLayoutStyle.sdbrDrop}`}>
          <div className={`${dashLayoutStyle.sdbrDropInput}`}>
            <input type="text" placeholder="" className={`${dashLayoutStyle.bInsurance}`} readonly="" value="Business Insurance" />
            <span><SwapIcon/></span>
          </div>
          <div className={`${dashLayoutStyle.sdbrDropInputSmall}`}><span>BI</span></div>
        </div>
      </div>
      <div className={`${dashLayoutStyle.sdbrLnksList}`}>
        <SidebarLinkItem
          title="Your Quotes"
          icon={<HomeIcon/>}
          href="/dashboard/your-quotes"
        />
        <SidebarLinkItem
          title="Your Policies"
          icon={<PolicyIcon/>}
          href="/dashboard/your-policies"
        />
        <SidebarLinkItem
          title="Claims & Requests"
          icon={<ClaimIcon/>}
          href="/dashboard/claims-and-requests"
        />
        <SidebarLinkItem
          title="Shop Coverages"
          icon={<ShopIcon/>}
          href="/dashboard/shop-coverages"
        />
        <SidebarLinkItem
          title="Support"
          icon={<SupportIcon/>}
          href="/dashboard/login"
        />
        <SidebarLinkItem
          title="Profile"
          icon={<ProfileIcon/>}
          href="/dashboard/login"
        />
        <SidebarLinkItem
          title="Logout"
          icon={<LogoutIcon/>}
          href="/"
		  onClick={goToLogout}
        />
      </div>
    </>
  )
}