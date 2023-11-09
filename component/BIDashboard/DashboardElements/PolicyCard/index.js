import React, {useState} from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import {Row, Col, Dropdown} from 'react-bootstrap';

import copy from "copy-to-clipboard";

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import GetHelp from '@/component/BIDashboard/DashboardElements/GetHelp';
import DeclarationModal from '@/component/BIDashboard/DashboardElements/Modal/DeclarationModal';
import CertificateModal from '@/component/BIDashboard/DashboardElements/Modal/CertificateModal';
import CertificateRadio from '@/component/BIDashboard/DashboardElements/CertificateRadio';

import DropdownArrowIcon from "@/component/BIDashboard/Icons/IconDropdownArrow";
import TooltipIcon from "@/component/BIDashboard/Icons/IconTooltip";
import CopyIcon from "@/component/BIDashboard/Icons/IconCopy";
import UploadIcon from "@/component/BIDashboard/Icons/IconUpload";
import ClockIcon from "@/component/BIDashboard/Icons/IconClock";
import DownloadIcon from "@/component/BIDashboard/Icons/IconDownload";

import style from './style.module.css'
import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import downloadStyle from '@/assets/css/downloadDropdown.module.css';

export default function PolicyCard(props) {
  const {icon, title, statusType, expireDays, insurerLogo, insurerName, productGroupName, sumInsured, valueOfSumInsured, policyPremium, policyNumber, policyPeriod, decalrationType, valueOfDecalration, statusOfDecalration, valueOfCD, statusOfCD, children} = props;

  const router = useRouter();
  
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

  const [showDeclaration, setShowDeclaration] = useState(false);
  const handleCloseDeclaration = () => setShowDeclaration(false);
  const handleShowDeclaration = () => setShowDeclaration(true);

  const goToRequestsPage = () => {
      router.push('/dashboard/requests');
  };

  const [showEndorsement, setShowEndorsement] = useState(false);
  const handleCloseEndorsement = () => setShowEndorsement(false);
  const handleShowEndorsement = () => setShowEndorsement(true);

  const [showCertificate, setShowCertificate] = useState(false);
  const handleCloseCertificate = () => setShowCertificate(false);
  const handleShowCertificate = () => setShowCertificate(true);

  const endorsementData = ([
    {
      id: "1",
      label: "Endorsement 1; 27 August 2023",
    },
    {
      id: "2",
      label: "Endorsement 2; 20 August 2023",
    },
    {
      id: "3",
      label: "Endorsement 3; 12 August 2023",
    },
    {
      id: "4",
      label: "Endorsement 4; 04 August 2023",
    },
    {
      id: "5",
      label: "Endorsement 5; 30 July 2023",
    },
    {
      id: "6",
      label: "Endorsement 6; 21 July 2023",
    },
    {
      id: "7",
      label: "Endorsement 7; 12 July 2023",
    },
    {
      id: "8",
      label: "Endorsement 8; 04 July 2023",
    },
    {
      id: "9",
      label: "Endorsement 9; 30 June 2023",
    },
    {
      id: "10",
      label: "Endorsement 10; 21 June 2023",
    },
    {
      id: "11",
      label: "Endorsement 1; 12 June 2023",
    },
    {
      id: "12",
      label: "Endorsement 2; 04 June 2023",
    },
    {
      id: "13",
      label: "Endorsement 3; 30 May 2023",
    },
    {
      id: "14",
      label: "Endorsement 4; 21 May 2023",
    },
    {
      id: "15",
      label: "Endorsement 5; 12 May 2023",
    },
    {
      id: "16",
      label: "Endorsement 6; 04 May 2023",
    },
    {
      id: "17",
      label: "Endorsement 7; 30 April 2023",
    },
    {
      id: "18",
      label: "Endorsement 8; 21 April 2023",
    },
    {
      id: "19",
      label: "Endorsement 9; 12 April 2023",
    },
    {
      id: "20",
      label: "Endorsement 10; 04 April 2023",
    },
  ])

  const [endorsementRadioValue, setEndorsementRadioValue] = useState();
  const handleChangeEndorsementRadio = event => {
    setEndorsementRadioValue(event.target.value);
  };

  const certificateData = ([
    {
      id: "1",
      label: "Certificate 1; 27 August 2023",
    },
    {
      id: "2",
      label: "Certificate 2; 20 August 2023",
    },
    {
      id: "3",
      label: "Certificate 3; 12 August 2023",
    },
    {
      id: "4",
      label: "Certificate 4; 04 August 2023",
    },
    {
      id: "5",
      label: "Certificate 5; 30 July 2023",
    },
    {
      id: "6",
      label: "Certificate 6; 21 July 2023",
    },
    {
      id: "7",
      label: "Certificate 7; 12 July 2023",
    },
    {
      id: "8",
      label: "Certificate 8; 04 July 2023",
    },
    {
      id: "9",
      label: "Certificate 9; 30 June 2023",
    },
    {
      id: "10",
      label: "Certificate 10; 21 June 2023",
    },
    {
      id: "11",
      label: "Certificate 1; 12 June 2023",
    },
    {
      id: "12",
      label: "Certificate 2; 04 June 2023",
    },
    {
      id: "13",
      label: "Certificate 3; 30 May 2023",
    },
    {
      id: "14",
      label: "Certificate 4; 21 May 2023",
    },
    {
      id: "15",
      label: "Certificate 5; 12 May 2023",
    },
    {
      id: "16",
      label: "Certificate 6; 04 May 2023",
    },
    {
      id: "17",
      label: "Certificate 7; 30 April 2023",
    },
    {
      id: "18",
      label: "Certificate 8; 21 April 2023",
    },
    {
      id: "19",
      label: "Certificate 9; 12 April 2023",
    },
    {
      id: "20",
      label: "Certificate 10; 04 April 2023",
    },
  ])

  const [certificateRadioValue, setCertificateRadioValue] = useState();
  const handleChangeCertificateRadio = event => {
    setCertificateRadioValue(event.target.value);
  };

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
            {productGroupName ? (
              <div className={`${style.policyCardCat} ${productGroupName == 'Liability Insurance' ? style.liabilityCat : null} ${productGroupName == 'Asset Insurance' ? style.assetCat : null} ${productGroupName == 'Marine Insurance' ? style.marineCat : null}`}>{productGroupName}</div>
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
            <Row>
              <Col xs={6}>
                <ul>
                  <li>
                    <p><strong>₹{sumInsured} <i><TooltipIcon /> <em>₹{valueOfSumInsured}</em></i></strong> Sum Insured</p>
                  </li>
                  <li>
                    <p><strong>{policyNumber} <span onClick={copyToClipboard}><CopyIcon /></span></strong> Policy Number</p>
                    <input type="hidden" value={copyText} onChange={handleCopyText} />
                  </li>
                  {decalrationType ? (
                    <li>
                      <p><strong>{decalrationType}</strong> Declaration</p>
                    </li>
                  ):(
                    null
                  )}
                  {valueOfDecalration ? (
                    <>
                      <li>
                        {statusOfDecalration === 'normal' ? (
                          <>
                            <p><strong className={`${statusOfDecalration === 'true' ? style.redText : null}`}>₹{valueOfDecalration}</strong> Delcation Value</p>
                          </>
                        ):(
                          null
                        )}
                        {statusOfDecalration === 'upload' ? (
                          <>
                            <p><strong className={`${style.redText}`}>₹{valueOfDecalration}</strong> Its time to upload your declaration value</p>
                            <ButtonItem
                              title="Upload"
                              type="button"
                              iconPosition="right"
                              customClass={`m-0 mt-2 ${buttonStyle.btnBlue} ${buttonStyle.btnDashCard} ${buttonStyle.smallWidth}`}
                              onClick={handleShowDeclaration}
                            >
                              <UploadIcon />
                            </ButtonItem>
                          </>
                        ):(
                          null
                        )}
                        {statusOfDecalration === 'pending' ? (
                          <>
                            <p><strong className={`${style.grayText}`}>₹{valueOfDecalration}</strong> Your declaration value will be updated shortly</p>
                            <ButtonItem
                              title="Check Status"
                              type="button"
                              iconPosition="right"
                              customClass={`m-0 mt-2 ${buttonStyle.btnSky} ${buttonStyle.btnDashCard} ${buttonStyle.minWidth}`}
                              onClick={goToRequestsPage}
                            >
                              <ClockIcon />
                            </ButtonItem>
                          </>
                        ):(
                          null
                        )}
                        {statusOfDecalration === 'success' ? (
                          <>
                            <p><strong className={`${style.greenText}`}>₹{valueOfDecalration}</strong> Last Updated on 20 August 2023 10:21 PM</p>
                          </>
                        ):(
                          null
                        )}
                      </li>
                    </>
                  ):(
                    null
                  )}
                </ul>
              </Col>
              <Col xs={6}>
                <ul>
                  <li>
                    <p><strong>₹{policyPremium} <small>+GST</small></strong> Policy Premium</p>
                  </li>
                  <li>
                    <p><strong>{policyPeriod}</strong> Policy Period</p>
                  </li>
                  {valueOfCD ? (
                    <li>
                      {statusOfCD === 'normal' ? (
                        <>
                          <p><strong className={`${statusOfDecalration === 'true' ? style.redText : null}`}>₹{valueOfCD}</strong> CD Balance</p>
                        </>
                      ):(
                        null
                      )}
                      {statusOfCD === 'topup' ? (
                        <>
                          <p><strong className={`${style.redText}`}>₹{valueOfCD}</strong> Your CD Balance is under 20% of total sum insured</p>
                          <ButtonItem
                            title="Top-up Now"
                            type="button"
                            iconPosition="right"
                            customClass={`m-0 mt-2 ${buttonStyle.btnBlue} ${buttonStyle.btnDashCard} ${buttonStyle.minWidth}`}
                            onClick={goToRequestsPage}
                          >
                            <ClockIcon />
                          </ButtonItem>
                        </>
                      ):(
                        null
                      )}
                      {statusOfCD === 'pending' ? (
                        <>
                          <p><strong className={`${style.grayText}`}>₹{valueOfCD}</strong> You have requested a Topup on your CD Balance</p>
                          <ButtonItem
                            title="Check Status"
                            type="button"
                            iconPosition="right"
                            customClass={`m-0 mt-2 ${buttonStyle.btnSky} ${buttonStyle.btnDashCard} ${buttonStyle.minWidth}`}
                            onClick={goToRequestsPage}
                          >
                            <ClockIcon />
                          </ButtonItem>
                        </>
                      ):(
                        null
                      )}
                      {statusOfCD === 'success' ? (
                        <>
                          <p><strong className={`${style.greenText}`}>₹{valueOfCD}</strong> Your top up request for is now live!</p>
                        </>
                      ):(
                        null
                      )}
                    </li>
                  ):(
                    null
                  )}
                </ul>
              </Col>
            </Row>
          </div>
          <div className={`${style.policyCardDwnload}`}>
            <hr className="mt-0 mb-3" />
            <Row className='g-3'>
              <Col>
                {statusType === 'expired' ? (
                  <Dropdown className={`dwnldDropdown ${downloadStyle.dwnldDropdown}`}>
                    <Dropdown.Toggle variant="" id="dropdown-download" className={`${downloadStyle.dwnldDropButton}`}>
                      <DownloadIcon /> Download Unavailable
                    </Dropdown.Toggle>
                  </Dropdown>
                ):(
                  <Dropdown className={`dwnldDropdown ${downloadStyle.dwnldDropdown}`}>
                  <Dropdown.Toggle variant="" id="dropdown-download" className={`${downloadStyle.dwnldDropButton}`}>
                    <DownloadIcon /> Download
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${downloadStyle.dwnldDropMenu}`}>
                    <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Quote</Dropdown.Item>
                    <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Risk Held Letter</Dropdown.Item>
                    <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Policy Copy</Dropdown.Item>
                    <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`}>Tax Invoice</Dropdown.Item>
                    <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`} onClick={handleShowEndorsement}>Endorsement Copy</Dropdown.Item>
                    <Dropdown.Item href="" className={`${downloadStyle.dwnldDropMenuItem}`} onClick={handleShowCertificate}>Certificate of Insurance</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                )}
              </Col>
              {/*<Col lg="auto">
                <GetHelp />
              </Col>*/}
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
      <DeclarationModal
        show={showDeclaration}
        handleClose={handleCloseDeclaration}
      />
      <CertificateModal
        title="Endorsement Copy"
        show={showEndorsement}
        handleClose={handleCloseEndorsement}
      >
        {endorsementData.map(data=>
          <CertificateRadio
            id={data.id}
            name="endorsement"
            label={data.label}
            value={data.id}
            checked={endorsementRadioValue === data.id}
            onChange={handleChangeEndorsementRadio}
            key={data.id}
          />
        )}
      </CertificateModal>
      <CertificateModal
        title="Certificate of Insurance"
        show={showCertificate}
        handleClose={handleCloseCertificate}
      >
        {certificateData.map(data=>
          <CertificateRadio
            id={data.id}
            name="certificate"
            label={data.label}
            value={data.id}
            checked={certificateRadioValue === data.id}
            onChange={handleChangeCertificateRadio}
            key={data.id}
          />
        )}
      </CertificateModal>
    </>
  )
}
