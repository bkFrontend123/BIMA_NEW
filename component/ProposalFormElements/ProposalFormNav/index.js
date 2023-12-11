import React from 'react'

import CheckIcon from '@/component/Icons/Check';

import style from './style.module.css'

export default function CheckoutNav(props) {
    const { customClass, page, mode } = props;

    return (
        <>
            <div className={`mb-4 mb-md-5 ${style.checkoutNav} ${customClass} ${page == '4' ? style.checkoutFilledNav : ''}`}>
                <ul>
                    <li className={`${page == '1' ? style.active : ''} ${page == '2' || page == '3' || page == '3.1.1' || page == '3.1.2' || page == '3.1.3' || page == '3.2.1' || page == '3.2.2' || page == '4' ? style.filled : ''}`}>
                        <span><CheckIcon width={16} height={16} /> Check out</span>
                    </li>
                    <li className={`${page == '2' ? style.active : ''} ${page == '3' || page == '3.1.1' || page == '3.1.2' || page == '3.1.3' || page == '3.2.1' || page == '3.2.2' || page == '4' ? style.filled : ''}`}>
                        <span><CheckIcon width={16} height={16} /> Payment</span>
                    </li>
                    {page == '1' || page == '2' || page == '3' || page == '3.1.1' || page == '3.1.2' || page == '3.1.3' || mode == 'online' ? (
                        <>
                            <li className={`${page == '3' || page == '3.1.1' ? style.active : ''} ${page == '3.1.2' ? style.disable : ''} ${page == '3.1.3' || page == '4' ? style.filled : ''}`}>
                                <span><CheckIcon width={16} height={16} /> Proposal Form</span>
                            </li>
                            <li className={`${page == '3.1.3' ? style.active : ''} ${page == '4' ? style.filled : ''}`}>
                                <span><CheckIcon width={16} height={16} /> Mandate Letter</span>
                            </li>
                        </>
                    ) : (
                        (page == '3.2.1' || page == '3.2.2' || mode == 'offline') && (
                            <>
                                <li className={`${page == '3.2.1' ? style.active : ''} ${page == '3.2.2' ? style.disable : ''} ${page == '4' ? style.filled : ''}`}>
                                    <span><CheckIcon width={16} height={16} /> Proposal Form & Mandate Letter</span>
                                </li>
                            </>
                        )
                    )}

                </ul>
            </div>
        </>
    )
}
