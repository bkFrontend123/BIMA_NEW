import React from 'react'

import ProductInfoCard from '@/component/GHI/ProductContent/ProductInfoCard';
import icon1 from '@/public/ghi/icons/answersIcon.svg';
import icon2 from '@/public/ghi/icons/quotesIcon.svg';
import icon3 from '@/public/ghi/icons/healthIcon.svg';

import style from './style.module.css'

export default function ProductContentRight(props) {
    const { onClick } = props;

    const coverageData = ([
        {
          id: "1",
          icon: "/productIcons/liability/dAndO_icon.svg",
          title: "Answer a few Simple Questions",
          description: "Directors and officers (D&O) liability insurance is insurance coverage intended to protect individuals from personal losses.",
          link: "/directors-and-officers-insurance",
          flowLink: "/directors-and-officers-flow"
        },
        {
          id: "2",
          icon: "/productIcons/liability/eAndO_icon.svg",
          title: "Errors & Omissions Insurance",
          description: "Errors and omissions (E&O) insurance is a type of professional liability insurance that protects companies, their workers.",
          link: "/errors-and-omissions-insurance",
          flowLink: "/errors-and-omissions-flow"
        },
        {
          id: "3",
          icon: "/productIcons/liability/cyber_icon.svg",
          title: "Cyber Insurance",
          description: "A cyber insurance coverage policy can provide companies with protection from losses resulting from a data breach.",
          link: "/cyber-insurance",
          flowLink: "/cyber-flow"
        },
    ])

    return (
        <>
            <div className={`${style.prdctCntntRghtCol}`}>
                {coverageData.map((data, index) =>
                    <ProductInfoCard
                        title="Answer a few Simple Questions"
                        icon={icon1}
                        width={165}
                        height={196}
                        onClick={onClick}
                        key={index}
                        {...data}
                    />
                )}
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
