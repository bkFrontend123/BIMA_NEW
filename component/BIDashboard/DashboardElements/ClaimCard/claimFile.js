import React, {useState} from 'react'
import Image from 'next/image'

import ClaimCardItem from "@/component/BIDashboard/DashboardElements/ClaimCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import ClaimFileModal from '@/component/BIDashboard/DashboardElements/Modal/ClaimFileModal'
import ClaimFileThankModal from '@/component/BIDashboard/DashboardElements/Modal/ClaimFileThankModal'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

export default function ClaimFile(props) {

  const [showClaimFile, setShowClaimFile] = useState(false);

  const handleCloseClaimFile = () => setShowClaimFile(false);
  const handleShowClaimFile = () => setShowClaimFile(true);

  const [showClaimFileThank, setShowClaimmFileThank] = useState(false);

  const handleCloseClaimFileThank = () => setShowClaimmFileThank(false);
  const handleShowClaimFileThank = () => {
    setShowClaimmFileThank(true);
    setShowClaimFile(false);
  };

  return (
    <>
      <ClaimCardItem
        title="No claims found"
      >
        <ButtonItem
          title="File a new claim"
          type="button"
          iconPosition="right"
          customClass={`m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
          onClick={handleShowClaimFile}
        >
          <ArrowPrimaryIcon />
        </ButtonItem>
      </ClaimCardItem>
      <ClaimFileModal
        show={showClaimFile}
        handleClose={handleCloseClaimFile}
        onClick={handleShowClaimFileThank}
      />
      <ClaimFileThankModal
        show={showClaimFileThank}
        handleClose={handleCloseClaimFileThank}
      />
    </>
  )
}
