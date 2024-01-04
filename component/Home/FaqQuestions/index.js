import React from 'react'
import productStyle from '@/assets/css/product.module.css'
import Accordion from '../../Accordion'

export default function FaqQuestions() {
    return (
        <div className='homeFaqBlock container'>
            <div className={`row text-center`}>
                <div className={`col-md-10 mx-auto`}>
                    <div className='commnHeading'>
                        <div className={`title-36 font-secondary mb-md-4 text-primary font-weight-700`}>Frequently Asked <span className="text-yellow fst-italic">Questions</span></div>
                    </div>
                    <div className='mt-4'>
                        <Accordion
                            title="Why do I need insurance for my business?"
                            content="Every business needs to protect its assets, legal liabilities, and employees from potential harm. Business insurance protects them against unforeseen events like legal issues, accidents, and natural disasters. It is essential to safeguard your business against potential risks and financial losses."
                        />
                        <Accordion
                            title="How can BimaKavach help me in buying insurance for my business?"
                            content="BimaKavach offers the convenience of an online platform for quick comparisons and purchase of business insurance policies. We have picked the best coverages for your industry so your crucial risks are covered and our algorithms generate the best price from multiple insurance companies. There is no need to wait days and weeks to get quotes anymore. We welcome any discussions or questions you may have before you purchase the policies."
                        />
                        <Accordion
                            title="Is it safe to buy insurance online?"
                            content={[<>
                                <span>Buying insurance online is usually safe but it is important to adhere to the following best practices:</span>
                                <ul className={`mt-3 ${productStyle.listData}`}>
                                    <li>Always purchase from IRDAI-registered insurance brokers like BimaKavach</li>
                                    <li>Make sure that your broker has the right expertise and claims support available. A lot of claims are rejected because of mistakes that happen during the purchase process.</li>
                                    <li>Always ensure that the online platform has secure payment gateways and maintains strict data privacy standards.</li>
                                </ul>
                            </>]}
                        />
                        <Accordion
                            title="How does pricing work for insurance policies?"
                            content={[<>
                                <div>Pricing is determined by the nature and quantum of risks. Different insurance companies view risks differently and may have different pricing structures. A competitive insurance broker will be able to understand the nature of risks in your business, recommend the right policies and coverages, and then fetch you the best price from multiple insurers.</div>
                                <div className='mt-3'>While this process can be quite cumbersome, BimaKavach has simplified it by creating the best coverages for your industry in advance. Hence, we are able to provide battle-tested and reliable recommendations along with pricing quotes in a fraction of the time.</div>
                            </>]}
                        />
                        <Accordion
                            title="Who is responsible for getting my claims processed?"
                            content="A competent insurance broker will handle claims for you. However, significant underwriting experience and proactiveness are required to handle claims properly. BimaKavach has 24x7 claims support which you can trust to handle the most complex of cases. We get the right information and documentation from you and liaison with the insurance company on your behalf. You may be surprised to know that most business insurance claims are rejected because of missing coverages, underinsurance, or errors made while filling out the policy proposal forms. BimaKavach’s digital process and strong industry expertise ensure that no errors happen and that your policy includes the coverages crucial for your business."
                        />
                        <Accordion
                            title="I already have existing business insurance policies. How can BimaKavach help me?"
                            content="It is really good that you have taken the right step towards business longevity. BimaKavach provides a complementary risk assessment service to audit your current policies and highlight any missing coverages, avenues to save costs and policy errors. With our focused expertise in business insurance, our insurance experts have strengthened our client’s policies and reduced costs at the same time."
                        />
                        <Accordion
                            title="How does BimaKavach ensure data privacy?"
                            content="Customer data privacy is paramount to us. We implement rigorous security measures and protocols to protect your data. For detailed information, you can refer to our Privacy Policy. "
                        />
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block" style={{ height: "90px" }}></div>
            <div className="d-blok d-md-none" style={{ height: "70px" }}></div>
            <style jsx scope>
                {`
                @media (max-width:575px) {
                    .title-36 {
                        font-size: 30px;
                        line-height: 36px;
                    }
                } 
                `}
            </style>
        </div>
    )
}
