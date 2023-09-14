import React, {useState} from 'react'
import Image from 'next/image'

import {Row, Col, Dropdown} from 'react-bootstrap';

import copy from "copy-to-clipboard";

import GetHelp from '@/component/BIDashboard/DashboardElements/GetHelp';

import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";
import CopyIcon from "@/component/BIDashboard/Icons/IconCopy";
import DownloadIcon from "@/component/BIDashboard/Icons/IconDownload";

import style from './style.module.css'
import downloadStyle from '@/assets/css/downloadDropdown.module.css';

export default function PolicyCardNew(props) {
  const {icon, title, statusType, expireDays, insurerLogo, insurerName, category, limitLiability, policyPremium, policyNumber, policyPeriod, children} = props;

  const [isActive, setActive] = useState(true);
  const handleClick = () => {
    setActive(!isActive);
  };

  const [copyText, setCopyText] = useState('');
 
  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  }
  
  const copyToClipboard = () => {
    copy(policyNumber);
    alert(`You have copied policy number "${policyNumber}"`);
}

  return (
    <>
      <div className={`${style.policyCardCol} ${statusType == 'expired' ? style.expirePolicyCardCol : ''}`}>
        <div className={`${style.policyCardTtl}`} onClick={handleClick}>
          <div className={`${style.insurerLogo}`}>
            <Image className={`${style.insurerLogoIcon}`} src={insurerLogo} width={180} height={30} alt={insurerName} />
          </div>
          <div className={`${style.policyStatus} ${statusType == 'pending' || statusType == 'expiring' || statusType == 'confirm' ? style.activeStatus : ''} ${statusType == 'expired' ? style.expiredStatus : ''}`}>
            {statusType === 'pending' || statusType === 'expiring' || statusType === 'confirm' ? (
              <span>Active</span>
            ):(
              null
            )}
            {statusType === 'expired' ? (
              <span>Expired</span>
            ):(
              null
            )}
          </div>
          <div className={`d-md-flex align-items-start ${style.policyTitle}`}>
            <span className={`d-none me-2 ${style.policyCardArrow} ${!isActive ? style.active : ''}`}><DropdownArrowIcon /></span>
            <div className={`d-flex gap-2 align-items-start`}>
              <span><i><Image className={`${style.policyLogoIcon}`} src={icon} width={40} height={40} alt={title} /></i></span>
              <div>
                <h3>{title}</h3>
                <h4>BimaKavach Technologies Pvt Ltd</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.mblPolicyCardInfo} ${!isActive ? style.show : ''}`}>
          <div className={`d-flex gap-2 align-items-start justify-content-between`}>
            {category === 'liability' ? (
              <div className={`${style.policyCardCat} ${style.liabilityCat}`}>Liability Insurance</div>
            ):(
              null
            )}
            {category === 'asset' ? (
              <div className={`${style.policyCardCat} ${style.assetCat}`}>Asset Insurance</div>
            ):(
              null
            )}
            <div className={`${style.policyStatusTtl} ${statusType == 'pending' ? style.pendingStatus : ''} ${statusType == 'expiring' ? style.expiringStatus : ''} ${statusType == 'confirm' ? style.confirmStatus : ''}`}>
              {statusType === 'pending' ? (
                <span>Policy Under Issuance</span>
              ):(
                null
              )}
              {statusType === 'expiring' ? (
                <span>Policy expires in: {expireDays} Days</span>
              ):(
                null
              )}
              {statusType === 'confirm' ? (
                <span>Policy Issued</span>
              ):(
                null
              )}
            </div>
          </div>
          <hr className="my-3" />
          <div className={`${style.policyCardList}`}>
            <ul>
              <li>
                <p><strong>INR {limitLiability}</strong> Limit of Liability</p>
              </li>
              <li>
                <p><strong>{policyPeriod}</strong> Policy Period</p>
              </li>
              <li>
                <p><strong>₹{policyPremium}</strong> Policy Premium</p>
              </li>
              {statusType === 'pending' ? (
                null
              ):(
                <li>
                  <p><strong>{policyNumber} <span onClick={copyToClipboard}><CopyIcon /></span></strong> Policy Number</p>
                  <input type="hidden" value={copyText} onChange={handleCopyText} />
                </li>
              )}
            </ul>
          </div>
          <div className={`${style.policyCardDwnload}`}>
            <Row className='g-3'>
              <Col>
                <Dropdown className={`dwnldDropdown ${downloadStyle.dwnldDropdown}`}>
                  <Dropdown.Toggle variant="" id="dropdown-download" className={`${downloadStyle.dwnldDropButton}`}>
                    <DownloadIcon /> Download
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${downloadStyle.dwnldDropMenu}`}>
                    <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Quote</Dropdown.Item>
                    <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Risk Held Letter</Dropdown.Item>

                    {statusType === 'expiring' || statusType === 'expired' || statusType === 'expired' || statusType === 'confirm' ? (
                      <>
                        <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Policy Copy</Dropdown.Item>
                        <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Tax Invoice</Dropdown.Item>
                        <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Endorsement Copy</Dropdown.Item>
                      </>
                    ):(
                      null
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col lg="auto">
                <GetHelp />
              </Col>
            </Row>
          </div>
          {statusType === 'pending' || statusType === 'expiring' ? (
            <div className={`${style.policyCardInfo}`}>
              <hr className="mt-0 mb-3" />
              {children}
            </div>
          ):(
            null
          )}
        </div>
      </div>
    </>
  )
}
