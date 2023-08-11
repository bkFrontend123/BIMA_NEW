import React, {useState} from 'react'
import Image from 'next/image'

import ClaimCardItem from "@/component/BIDashboard/DashboardElements/ClaimCard";
import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import ClaimRequestModal from '@/component/BIDashboard/DashboardElements/Modal/ClaimRequestModal'
import ClaimRequestThankModal from '@/component/BIDashboard/DashboardElements/Modal/ClaimRequestThankModal'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

export default function ClaimRequest(props) {

  const [showClaimRequest, setShowClaimRequest] = useState(false);

  const handleCloseClaimRequest = () => setShowClaimRequest(false);
  const handleShowClaimRequest = () => setShowClaimRequest(true);

  const [showClaimRequestThank, setShowClaimRequestThank] = useState(false);

  const handleCloseClaimRequestThank = () => setShowClaimRequestThank(false);
  const handleShowClaimRequestThank = () => {
    setShowClaimRequestThank(true);
    setShowClaimRequest(false);
  };

  return (
    <>
      <ClaimCardItem
        title="Add request"
      >
        <ButtonItem
          title="Add request"
          type="button"
          iconPosition="right"
          customClass={`m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
          onClick={handleShowClaimRequest}
        >
          <ArrowPrimaryIcon />
        </ButtonItem>
      </ClaimCardItem>
      <ClaimRequestModal
        show={showClaimRequest}
        handleClose={handleCloseClaimRequest}
        onClick={handleShowClaimRequestThank}
      />
      <ClaimRequestThankModal
        show={showClaimRequestThank}
        handleClose={handleCloseClaimRequestThank}
      />
    </>
  )
}
