import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'

import copy from "copy-to-clipboard";

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';

import CopyIcon from "@/component/BIDashboard/Icons/IconCopy";
import ArrowPrimaryIcon from "@/component/BIDashboard/Icons/IconArrowPrimary";

import buttonStyle from "@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css";
import style from './style.module.css'

export default function ClaimRequestCard(props) {
  const { icon, title, productGroupName, category, policyNumber, companyName, status, requestType, type, requestNumber, claimNumber } = props;

  const [copyText, setCopyText] = useState('');

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  }

  const copyToClipboard = () => {
    copy(policyNumber);
    //alert(`You have copied policy number "${policyNumber}"`);
  }

  const router = useRouter();
  const goToPolicies = () => {
    router.push('/dashboard/your-policies');
  };

  return (
    <>
      <div className={`${style.claimReqstCardCol} ${status == 'Expired' ? style.expireClaimReqstCardCol : ''}`} title={title}>
        <div className={`${style.claimReqstStatus} ${status == 'Active' ? style.activeStatus : ''} ${status == 'In Progress' ? style.progressStatus : ''} ${status == 'Expired' ? style.expiredStatus : ''}`}>
          <span>{status}</span>
        </div>
        <div className={`d-flex gap-2 align-items-start ${style.claimReqstCardTtl}`}>
          <span>
            <i>
              <Image className={`${style.policyLogoIcon}`} src={icon} width={32} height={32} alt={title} />
            </i>
          </span>
          <div>
            <h3>{title}</h3>
          </div>
        </div>
        <div className={`${style.claimReqstCardCmpny}`}>
          <h4>{companyName}</h4>
        </div>
        <div className={`${style.claimReqstCardInfo}`}>
          <div className={`${style.claimReqstCardCat} ${productGroupName == "Liability Insurance"
            ? style.liabilityCat
            : null
            } ${productGroupName == "Asset Insurance" ? style.assetCat : null
            } ${productGroupName == "Marine Insurance"
              ? style.marineCat
              : null
            }

            }`}
          >
            {productGroupName}
          </div>
          <div className={`${style.claimReqstCardList}`}>
            <p>
              <strong>{policyNumber} <span style={{ cursor: "pointer" }} onClick={() => copyToClipboard(policyNumber)}>
                <CopyIcon />
              </span></strong>
              {"Policy Number"}
            </p>
            {type == "claim" ? (
              <p>
                <strong>{claimNumber} <span style={{ cursor: "pointer" }} onClick={() => copyToClipboard(claimNumber)}>
                  <CopyIcon />
                </span></strong>
                {"Claim Id"}
              </p>
            ) : (
              <p>
                <strong>{requestNumber} <span style={{ cursor: "pointer" }} onClick={() => copyToClipboard(requestNumber)}>
                  <CopyIcon />
                </span></strong>
                {"Request Id"}
              </p>
            )}
            {type != "claim" ? (
              <p>
                <strong>{requestType}</strong>
                Request Type
              </p>
            ) : (
              null
            )}
          </div>
          {status == 'Active' || status == 'In Progress' ? (
            <div className={`${style.claimReqstCardBtn}`}>
              <ButtonItem
                title="See Policy Details"
                type="button"
                iconPosition="right"
                customClass={`m-0 ${buttonStyle.btnDark} ${buttonStyle.minWidth3} w-100`}
                onClick={() => {
                  router.push("/dashboard/your-policies");
                }}
              >
                <ArrowPrimaryIcon />
              </ButtonItem>
            </div>
          ) : (
            null
          )}
          {type != "claim" ? null : (
            <div className={`${style.claimReqstCardInfo}`}>
              <hr className="mt-0 mb-3" />
              <p>Your claim Intimation request is filed. In case of any queries reach out to support@bimakavach.com</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
