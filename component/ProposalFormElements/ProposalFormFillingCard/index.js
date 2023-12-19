import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem";
import TalkExpert from '@/component/TalkExpert';

import ArrowForwardIcon from '@/component/Icons/ArrowForward';
import FasterIcon from '@/component/Icons/Faster';
import ProgressIcon from '@/component/Icons/Progress';

import onlineIcon from '@/public/proposalForm/onlineIcon.svg'
import offlineIcon from '@/public/proposalForm/offlineIcon.svg'
import expertImg from '@/public/himaniImg.png'
import expertImg1 from '@/public/shrutiImg.png'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import talkExpertStyle from '@/component/TalkExpert/style.module.css'
import style from './style.module.css'

export default function ProposalFormFillingCard(props) {
    const { customClass, cardType } = props;
    const router = useRouter();
    const goToOnlineProposalPage = () => {
        router.push('/proposal-form/online');
    };
    const goToOfflineProposalPage = () => {
        router.push('/proposal-form/offline');
    };
    const goToOnlineAssistancePage = () => {
        router.push('/proposal-form/online/assistance');
    };
    const goToOfflineAssistancePage = () => {
        router.push('/proposal-form/offline/assistance');
    };
    const handleProposalClick = () => {
        if (cardType === 'Online') {
            goToOnlineProposalPage();
        } else if (cardType === 'Offline') {
            goToOfflineProposalPage();
        }
    };
    const handleAssistanceClick = () => {
        if (cardType === 'Online') {
            goToOnlineAssistancePage();
        } else if (cardType === 'Offline') {
            goToOfflineAssistancePage();
        }
    };
    return (
        <>
            <div className={`${style.prpslFrmFlngCol} ${customClass}`}>
                {cardType === 'Online' ? (
                    <div className={`${style.faster}`}>
                        <i><FasterIcon /></i> Faster!
                    </div>
                ) : (
                    null
                )}
                <div className={`${style.prpslFrmFlngHdr}`}>
                    <i>
                        {cardType === 'Online' ? (
                            <Image src={onlineIcon} width={48} height={40} alt="Online Icon" />
                        ) : (
                            cardType === 'Offline' && (
                            <Image src={offlineIcon} width={48} height={40} alt="Offline Icon" />
                            )
                        )}
                    </i>
                    <h3 className='font-secondary'>{cardType == 'Online' ? 'Online' : null} {cardType == 'Offline' ? 'Offline' : null} Form Filling</h3>
                    {cardType === 'Online' ? (
                        <>
                            <h5><ProgressIcon /> Filled, Submitted and Approved in: <strong>1 Hour</strong></h5>
                            <p>Open, fill and submit the form digitally in a swift and efficient manner.</p>
                        </>
                    ) : (
                        cardType === 'Offline' && (
                        <>
                            <h5><ProgressIcon /> Filled, Submitted and Approved in: <strong>2 - 3 Business Days</strong></h5>
                            <p>Easily complete your form offline at your own convenience.</p>
                        </>
                        )
                    )}
                </div>
                <div className={`${style.prpslFrmFlngBody}`}>
                    <div className={`${style.prpslFrmFlngList}`}>
                        {cardType === 'Online' ? (
                            <ul>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                    </svg> Fast & Convenient</li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                    </svg> Digital Process</li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                    </svg> On-Call Assistance Available</li>
                            </ul>
                        ) : (
                            cardType === 'Offline' && (
                            <ul>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                    </svg> Traditional & Secure</li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                    </svg> Fill as per Convenience</li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                    </svg> On-Call Assistance Available</li>
                            </ul>
                            )
                        )}
                    </div>
                    <div className={`${style.prpslFrmFlngHow}`}>
                        <h5>How?</h5>
                        {cardType === 'Online' ? (
                            <ul>
                                <li>Open, fill and submit the form digitally in a swift and efficient manner</li>
                                <li>Fill the proposal form and mandate letter digitally</li>
                                <li>Verify that your information is accurate</li>
                                <li>Submit the form</li>
                            </ul>
                        ) : (
                            cardType === 'Offline' && (
                            <ul>
                                <li>Click below and sign in using the credentials sent to your email</li>
                                <li>Download and print the proposal form and mandate letter</li>
                                <li>Fill and sign the form and the letter</li>
                                <li>Scan the documents and upload</li>
                            </ul>
                            )
                        )}
                    </div>
                    <ButtonItem
                        title={`Fill Proposal Form ${cardType === 'Online' ? ( 'Online' ) : ( cardType === 'Offline' && ( 'Offline' ) )}`}
                        type="button"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig}`}
                        onClick={handleProposalClick}
                    >
                        <ArrowForwardIcon />
                    </ButtonItem>
                </div>
                <div className={`${style.prpslFrmFlngFtr}`}>
                    <p>Need help with {cardType == 'Online' ? 'online' : ''} {cardType == 'Offline' ? 'offline' : 'null'} form filling? Schedule a call with our experts for assistance.</p>
                    <div className={`${style.prpslFrmFlngFtrBtn}`}>
                        <ButtonItem
                            title="Fill Form with Assistance"
                            type="button"
                            iconPosition="right"
                            customClass={`w-100 m-0 px-2 ${buttonStyle.btnBorder} ${buttonStyle.btnBig}`}
                            onClick={handleAssistanceClick}
                        >
                            <ArrowForwardIcon />
                        </ButtonItem>
                    </div>
                    {cardType === 'Online' ? (
                        <TalkExpert
                            size={`${talkExpertStyle.extraSmall}`}
                            imgSrc={expertImg}
                            name="Himani Doshi"
                            designation="Insurance Expert"
                        />
                    ) : (
                        cardType === 'Offline' && (
                        <TalkExpert
                            size={`${talkExpertStyle.extraSmall}`}
                            imgSrc={expertImg1}
                            name="Shruti Vishnoi"
                            designation="Insurance Expert"
                        />
                        )
                    )}
                </div>
            </div>
        </>
    )
}
