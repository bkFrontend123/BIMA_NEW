import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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
                            title="How does business insurance work?"
                            content="Business insurance shields you against unanticipated situations. It protects your company from legal battles, accidents, natural disasters, and other unforeseeable events. While buying business insurance might seem like a complex process, our experts at BimaKavach simplify the entire process, making it hassle-free for you. We'll walk you through every step, freeing you up to focus on what you do best: operating your business!"
                        />
                        <Accordion
                            title="How long does it take to get a business insurance quote via BimaKavach?"
                            content="BimaKavach offers fast and easy business insurance quotes that help you safeguard your business quickly and efficiently. By answering a few simple questions, you get the insurance quote you need in just a matter of minutes."
                        />
                        <Accordion
                            title="Can I buy insurance online?"
                            content="Yes, you can conveniently buy insurance online through various platforms, including BimaKavach, offering a seamless purchasing experience. Depending on the nature of your business, we involve the right experts to make sure that your business gets well-curated coverage."
                        />
                        <Accordion
                            title="Is it safe to buy online?"
                            content="Yes, buying online is generally safe, but it is recommended to choose an IRDAI-registered insurance broker like BimaKavach before purchasing any business insurance policy."
                        />
                        <Accordion
                            title="Is BimaKavach (really) cost-effective?"
                            content="Yes, we offer the most cost-effective quotes from top insurance companies in India. Because of our focus on technology and deep relationships with insurance companies, we are able to get the cheapest quotes for our clients."
                        />
                        <Accordion
                            title="Online or offline, which mode of buying insurance is easy?"
                            content="Buying insurance online is easy, as it offers convenience, quick comparisons, and a hassle-free documentation process, eliminating the need for physical visits or paperwork. However, please ensure that you buy from IRDAI-registered brokers that have expert underwriters to guide you through the process."
                        />
                        <Accordion
                            title="How can I renew my online insurance?"
                            content="Renewing your insurance online is a quick and hassle-free process. We kindly notify you about your policy renewal, ensuring you get all the benefits. You have the flexibility to make the payment using various convenient methods and effortlessly renew your policy."
                        />
                        <Accordion
                            title="How do I raise a claim?"
                            content="BimaKavach provides 24x7 claims support. Notify your account manager as soon as possible about the occurrence, and our team will get involved right away to ensure that you receive the claim as per your policy."
                        />
                        <Accordion
                            title="How does BimaKavach work?"
                            content="At BimaKavach, we believe in three key principles: simple, fast, and transparent. We genuinely care about our customers and provide customized insurance quotes that precisely suit their business needs."
                        />
                        <Accordion
                            title="Does BimaKavach maintain the privacy of data?"
                            content="Yes, we maintain the privacy of our customer data as it is our core value."
                        />
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block" style={{ height: "90px" }}></div>
            <div className="d-blok d-md-none" style={{ height: "60px" }}></div>

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
