import React from 'react'

import Accordion from '@/component/Accordion'

import style from './style.module.css'

export default function ClaimFaq(props) {

  return (
    <>
      <Accordion
        title="Why do I need insurance for my business?"
        content="Every business needs to protect its assets, legal liabilities, and employees from potential harm. Business insurance protects them against unforeseen events like legal issues, accidents, and natural disasters. It is essential to safeguard your business against potential risks and financial losses."
      />
      <Accordion
        title="How can BimaKavach help me in buying insurance for my business?"
        content="BimaKavach offers the convenience of an online platform for quick comparisons and purchase of business insurance policies. We have picked the best coverages for your industry so your crucial risks are covered and our algorithms generate the best price from multiple insurance companies. There is no need to wait days and weeks to get quotes anymore. We welcome any discussions or questions you may have before you purchase the policies."
      />
    </>
  )
}
