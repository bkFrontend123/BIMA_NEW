import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem";

import mandateLetterImg from '@/public/proposalForm/mandateLetterImg.svg'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import style from './style.module.css'

export default function MandateLetterCard(props) {
    const { customClass, cardType, children } = props;
    const router = useRouter();
    const goToOnlineProposalPage = () => {
        router.push('/dashboard/your-quotes');
    };
    return (
        <>
            <div className={`${style.mndtLtrOuter} ${customClass}`}>
                {cardType === 'Online' ? (
                    null
                ) : (
                    cardType === 'Offline' && (
                    <h2 className='font-secondary'>Offline Mandate Letter Signing</h2>
                    )
                )}
                <div className={`${style.mndtLtrCol}`}>
                    <div className={`${style.mndtLtrInfo}`}>
                        <h3 className='font-secondary'>Final Step:<span></span>
                        {cardType === 'Online' ? (
                            'Send us Your Autograph'
                        ) : (
                            cardType === 'Offline' && (
                            'Sign the Mandate Letter'
                            )
                        )}
                        </h3>
                        {cardType === 'Online' ? (
                            <p>Take the last lap to secure your insurance policies: Downloading the mandate letter, then carefully sign it, and finally, upload the signed document. Your coverage is just a signature away!</p>
                        ) : (
                            cardType === 'Offline' && (
                            <p>Finish the last step: Download the mandate letter, sign it, and upload the signed letter below. Once completed, these details will be shared with your insurance company and your policy document will be issued.</p>
                            )
                        )}
                        <div className={`${style.mndtLtrBtn}`}>
                        <ButtonItem
                            title="Download Mandate Letter"
                            type="button"
                            customClass={` m-0 px-2 ${buttonStyle.btnBlue} ${buttonStyle.btnBig}`}
                            onClick={goToOnlineProposalPage}
                        />
                        </div>
                        <div className={`${style.mndtLtrUpld}`}>
                            {children}
                        </div>
                    </div>
                    <div className={`${style.mndtLtrMedia}`}>
                        <Image src={mandateLetterImg} width={450} height={390} alt="Mandate Letter Image" />
                    </div>
                </div>
            </div>
        </>
    )
}
