import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import ProposalFormProgress from '@/component/ProposalFormElements/ProposalFormProgress'
import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem";

import ArrowForwardIcon from '@/component/Icons/ArrowForward';
import onlineIcon from '@/public/proposalForm/onlineIcon.svg'
import FasterIcon from '@/component/Icons/Faster';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import style from './style.module.css'

export default function OnlineFillingCard(props) {
    const { customClass } = props;
    const router = useRouter();
    const goToOnlineProposalPage = () => {
        router.push('/dashboard/your-quotes');
    };
    return (
        <>
            <div className={`${style.onlineFlngFrmCol} ${customClass}`}>
                <div className={`${style.faster}`}>
                    <i><FasterIcon /></i> Faster!
                </div>
                <div className={`${style.onlineFlngFrmHdr}`}>
                    <i>
                        <Image src={onlineIcon} width={24} height={20} alt="Online Icon" />
                    </i>
                    <h4 className='font-secondary'>Online Form Filling</h4>
                </div>
                <ProposalFormProgress
                    title="Filled, Submitted and Approved in: 1 Hour"
                    now={40}
                />
                <div className={`${style.onlineFlngFrmBody}`}>
                    <p>Open, fill and submit the form digitally in a swift and efficient manner.</p>
                    <div className={`${style.onlineFlngFrmList}`}>
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
                    </div>
                    <ButtonItem
                        title="Do it Online Instead"
                        type="button"
                        iconPosition="right"
                        customClass={`w-100 m-0 px-2 ${buttonStyle.btnBlue} ${buttonStyle.btnBig}`}
                        onClick={goToOnlineProposalPage}
                    >
                        <ArrowForwardIcon />
                    </ButtonItem>
                </div>
            </div>
        </>
    )
}
