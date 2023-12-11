import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import ButtonItem from "@/component/BIDashboard/DashboardElements/ButtonItem";

import ArrowForwardIcon from '@/component/Icons/ArrowForward';
import dashUnlockIcon from '@/public/proposalForm/dashUnlockIcon.svg'
import dashUnlockImg from '@/public/proposalForm/dashUnlockImg.svg'

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import style from './style.module.css'

export default function DashboardUnlockCard(props) {
    const { customClass } = props;
    const router = useRouter();
    const goToDashboardPage = () => {
        router.push('/dashboard/your-quotes');
    };
    return (
        <>
            <div className={`${style.dashUnlckCol} ${customClass}`}>
                <div>
                    <div className={`${style.dashUnlckHdr}`}>
                        <div className={`${style.dashUnlckHdrTtl}`}>
                            <i>
                                <Image src={dashUnlockIcon} width={24} height={24} alt="Dashboard Unlocked Icon" />
                            </i>
                            <h4 className='font-secondary'>Dashboard Unlocked!</h4>
                        </div>
                        <div className={`${style.dashUnlckHdrMedia}`}>
                            <i>
                                <Image src={dashUnlockImg} width={91} height={85} alt="Dashboard Unlocked Image" />
                            </i>
                        </div>
                    </div>
                    <div className={`${style.dashUnlckCntnt}`}>
                        <p>To keep track of your policies and stay informed about their status, you can access your dashboard. It's your hub for managing and monitoring all your insurance information. We're here to provide you with a seamless experience.</p>
                        <div className={`${style.dashUnlckBtn}`}>
                            <ButtonItem
                                title="Access Dashboard"
                                type="button"
                                iconPosition="right"
                                customClass={`w-100 m-0 px-2 ${buttonStyle.btnBlue} ${buttonStyle.btnBig}`}
                                onClick={goToDashboardPage}
                            >
                                <ArrowForwardIcon />
                            </ButtonItem>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
