import React from 'react'

import ProductInfoCard from '@/component/GHI/ProductContent/ProductInfoCard';

import icon1 from '@/public/ghi/icons/answersIcon.webp';
import icon2 from '@/public/ghi/icons/quotesIcon.webp';
import icon3 from '@/public/ghi/icons/healthIcon.webp';

import style from './style.module.css'

export default function ProductContentRight(props) {
    const { onClick } = props;

    const productInfoData = ([
        {
            icon: icon1,
            title: "Answer a few Simple Questions",
        },
        {
            icon: icon2,
            title: "Get curated Quotes in Minutes",
        },
        {
            icon: icon3,
            title: "Secure your Health Comprehensively",
        },
    ])

    return (
        <>
            <div className={`${style.prdctCntntRghtCol}`}>
                {productInfoData.map((data, index) =>
                    <ProductInfoCard
                        width={165}
                        height={196}
                        key={index}
                        {...data}
                        onClick={onClick}
                    />
                )}
            </div>
        </>
    )
}
