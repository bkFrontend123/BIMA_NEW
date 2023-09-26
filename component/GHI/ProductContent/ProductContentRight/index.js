import React from 'react'

import ProductInfoCard from '@/component/GHI/ProductContent/ProductInfoCard';
import icon1 from '@/public/ghi/icons/answersIcon.svg';
import icon2 from '@/public/ghi/icons/quotesIcon.svg';
import icon3 from '@/public/ghi/icons/healthIcon.svg';

import style from './style.module.css'

export default function ProductContentRight(props) {
    const { onClick } = props;
    return (
        <>
            <div className={`${style.prdctCntntRghtCol}`}>
                <ProductInfoCard
                    title="Answer a few Simple Questions"
                    icon={icon1}
                    width={165}
                    height={196}
                    onClick={onClick}
                />
                <ProductInfoCard
                    title="Get curated Quotes
                    in Minutes"
                    icon={icon2}
                    width={129}
                    height={209}
                    onClick={onClick}
                />
                <ProductInfoCard
                    title="Secure your Health
                    Comprehensively"
                    icon={icon3}
                    width={165}
                    height={162}
                    onClick={onClick}
                />
            </div>
        </>
    )
}
