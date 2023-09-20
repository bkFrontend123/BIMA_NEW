import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'

import copy from "copy-to-clipboard";

import CopyIcon from "@/component/BIDashboard/Icons/IconCopy";

import style from './style.module.css'

export default function ClaimRequestCard(props) {
  const { icon, title, category, policyNumber } = props;

  const [copyText, setCopyText] = useState('');

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  }

  const copyToClipboard = () => {
    copy(policyNumber);
    alert(`You have copied policy number "${policyNumber}"`);
  }

  const router = useRouter();
  const goToPolicies = () => {
    router.push('/dashboard/your-policies');
  };

  return (
    <>
      <div className={`${style.claimReqstCardCol}`}>
        <div className={`d-flex gap-2 align-items-start ${style.claimReqstCardTtl}`}>
          <span><i><Image className={`${style.policyLogoIcon}`} src={icon} width={32} height={32} alt={title} /></i></span>
          <div>
            <h3>{title}</h3>
            <h4>BimaKavach Technologies Pvt Ltd</h4>
          </div>
        </div>
        <div className={`${style.claimReqstCardInfo}`}>
          {category === 'liability' ? (
            <div className={`${style.claimReqstCardCat} ${style.liabilityCat}`}>Liability Insurance</div>
          ) : (
            null
          )}
          {category === 'asset' ? (
            <div className={`${style.claimReqstCardCat} ${style.assetCat}`}>Asset Insurance</div>
          ) : (
            null
          )}
          <div className={`d-flex gap-2 align-items-center justify-content-between ${style.claimReqstCardList}`}>
            <p><strong>{policyNumber} <span onClick={copyToClipboard}><CopyIcon /></span></strong> Policy Number</p>
            <input type="hidden" value={copyText} onChange={handleCopyText} />
            <Link className={`${style.claimReqstLink}`} href="#" onClick={goToPolicies}>See policy details</Link>
          </div>
          <div className={`${style.claimReqstCardInfo}`}>
            <hr className="mt-0 mb-3" />
            <p>Your claim Intimation request is filed. In case of any queries reach out to support@bimakavach.com</p>
          </div>
        </div>
      </div>
    </>
  )
}
