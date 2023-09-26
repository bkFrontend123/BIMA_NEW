import React from 'react';

import PolicyAccordion from '../PolicyAccordion'

export default function GHIAccordianContent(props) {
    const accordionData = [
        {
            title: 'Why BimaKavach?',
            items: [
                { icon: '/ghi/accordianContentIcons/icon1.svg', content: 'Enjoy a tailored dashboard for easy employee management' },
                { icon: '/ghi/accordianContentIcons/icon2.svg', content: 'Secure a competitive premium policy that fits your budget' },
                { icon: '/ghi/accordianContentIcons/icon3.svg', content: 'Customize your policy with extras like wellness sessions, discounted medicines, OPD cover, dental care and more' },
                { icon: '/ghi/accordianContentIcons/icon4.svg', content: 'Receive expert guidance at every stage of your journey' },
                { icon: '/ghi/accordianContentIcons/icon5.svg', content: 'Benefit from round-the-clock claim support from our dedicated team' },
            ],
          },
          {
            title: 'More than just Health Insurance',
            items: [
                { icon: '/ghi/accordianContentIcons/icon6.svg', content: '1 Free GP Doctor Consultation followed by physical visit Top Up option' },
                { icon: '/ghi/accordianContentIcons/icon7.svg', content: 'Discounted Medicines 15% to 20%' },
                { icon: '/ghi/accordianContentIcons/icon8.svg', content: '1 Free Dental Check Up with 10% Discount on Treatment' },
                { icon: '/ghi/accordianContentIcons/icon9.svg', content: 'Discounted Diagnostics & Reports on App Mental Health Care Plans' },
            ],
          },
    ];
    return (
        <>
            {accordionData.map((data, index) => (
                <PolicyAccordion key={index} {...data} />
            ))}
        </>
    )
}
