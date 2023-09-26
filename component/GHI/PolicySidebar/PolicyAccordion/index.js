import React, { useState } from 'react';
import Image from 'next/image'

import acdnArrowDown from '@/public/ghi/icons/acdnArrowDown.svg'
import acdnArrowUp from '@/public/ghi/icons/acdnArrowUp.svg'

import style from './style.module.css'

export default function PolicyAccordion(props) {
    const { title, items } = props;
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className={`${style.accrdnWdgt} ${isOpen ? style.accrdnActiveWdgt : null}`}>
                <div className={style.accrdnHdr} onClick={toggleAccordion}>
                    <h4>{title}</h4>
                    <span>
                        {isOpen ? (
                            <Image className={style.accrdnHdrIcon} src={acdnArrowUp} width={20} height={20} alt="Arrow Up" />
                        ) : (
                            <Image className={style.accrdnHdrIcon} src={acdnArrowDown} width={20} height={20} alt="Arrow Down" />
                        )}
                    </span>
                </div>
                {isOpen && (
                    <div className={style.accrdnCntnt}>
                        {items.map((item, index) => (
                            <div className={style.accrdnItemCol} key={index}>
                                <span>
                                    <Image className={style.accrdnItemIcon} src={item.icon} width={48} height={48} alt={title} />
                                </span>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
