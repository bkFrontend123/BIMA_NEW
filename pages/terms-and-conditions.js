import React, { useEffect } from 'react'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import terms from '@/assets/css/terms.module.css'

export default function About() {
    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);
    return (
        <>
            <Navbar />
            <div className='infrmtnPage'>
                <div className={`container `}>
                    <div className={`row `}>
                        <div className={`col-md-6 offset-md-1`}>
                            <div className='commnHeading text-start'>
                                <div className='polyBox border-primary bg-blueLight mb-md-4 mb-2 text-primary title-12 text-uppercase font-weight-700'>TERMS & CONDITIONS</div>
                                <div className='title-60 font-secondary mb-md-3 mb-2 text-primary font-weight-700'>BimaKavach Insurance Broking Pvt. Ltd. Terms & Conditions</div>
                                <p className='title-16 font-weight-500 text-muted mb-0'>
                                    <span className='me-1'>
                                        <svg width="18" height="18" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.53333 1.03333C8.53333 0.738781 8.29455 0.5 8 0.5C7.70545 0.5 7.46667 0.738781 7.46667 1.03333V7.2124L4.22877 3.97451C4.02049 3.76623 3.68281 3.76623 3.47453 3.97451C3.26625 4.18279 3.26625 4.52047 3.47453 4.72875L6.71244 7.96667H0.533333C0.238782 7.96667 0 8.20545 0 8.5C0 8.79455 0.238782 9.03333 0.533333 9.03333H6.71244L3.47453 12.2712C3.26625 12.4795 3.26625 12.8172 3.47453 13.0255C3.68281 13.2338 4.0205 13.2338 4.22878 13.0255L7.46667 9.7876V15.9667C7.46667 16.2612 7.70545 16.5 8 16.5C8.29455 16.5 8.53333 16.2612 8.53333 15.9667V9.78756L11.7712 13.0255C11.9795 13.2338 12.3172 13.2338 12.5255 13.0255C12.7338 12.8172 12.7338 12.4795 12.5255 12.2712L9.2876 9.03333H15.4667C15.7612 9.03333 16 8.79455 16 8.5C16 8.20545 15.7612 7.96667 15.4667 7.96667H9.2876L12.5255 4.72877C12.7338 4.52049 12.7338 4.1828 12.5255 3.97452C12.3172 3.76624 11.9795 3.76624 11.7712 3.97452L8.53333 7.21244V1.03333Z" fill="#575757" />
                                        </svg>
                                    </span> Last updated: 2022-06-26 viz. June 26, 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container infrmtnCntntDiv pt-0`}>
                    <div className={`row `}>
                        <div className={`col-md-10 mx-auto`}>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0'>Introduction</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Visitors to this web site are bound by the following terms and conditions in addition to member-client agreement &amp; other such agreements executed by the client. It is important to understand that insurance is a subject matter of solicitation. It is the responsibility of the customer to understand the limitations of insurance policies and the risks involved and under no circumstances, do we take liability in such cases. Please read the following terms carefully before continuing to use this site.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Bimakavach Insurance Broking Private Limited maintains BimaKavach ( hereinafter referred to as the &quot;Website&quot; ) and owns, has the license to use or otherwise has the right to use, free of any pending or threatened liens, all content, graphics, HTML and CGI or other scripts displayed and used on the Website.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Bimakavach Insurance Broking Private Limited IRDAI licensed direct insurance broker, operating in general insurance.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Certain information on the Website is provided by our participating insurance companies. Therefore, although BimaKavach tries to ensure that all information and material, whether in relation to the products, services, facilities, offerings or otherwise (hereinafter &quot;Information&quot;) provided as part of this website is correct at the time of inclusion on the website, it does not guarantee the accuracy of the Information. Bimakavach Insurance Broking Private Limited and/or BimaKavach make no representations or warranties as to the completeness or adequacy or accuracy of Information and expressly disclaim liability for any errors or omissions or delays in updating this information.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Bimakavach Insurance Broking Private Limited and/or BimaKavach do not warrant or guarantee the Timelines, accuracy or completeness of the Website Information; or Quality of the results obtained from the use of the Website.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>To the maximum extent permitted by law, Bimakavach Insurance Broking Private Limited and/or BimaKavach have no liability in relation to or arising out of the Website Information and Website recommendations. You are responsible for the final choice of your product and you should take time to read through all information supplied before proceeding. If you are in any doubt regarding a product or its terms you should seek further advice from BimaKavach or the relevant participating provider before choosing your product.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>BimaKavach&nbsp; may pass on your personal information to the relevant participating provider if you apply to purchase a product through BimaKavach. However,&nbsp; BimaKavach does not guarantee when or if you will actually acquire the product that you have chosen. Bimakavach Insurance Broking Private Limited do not accept any liability arising out of circumstances where there is delay in you acquiring the product you have chosen.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The acceptance of the deposit as premium and final issuance of the policy is subject to the underwriting norms and discretion of the Insurer whose policy you have chosen to buy on which BimaKavach has no control. BimaKavach will ensure that the amount is refunded by the insurer in case there is no ultimate issuance of policy.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>By visiting our website and accessing the information, resources, services, products, and tools we provide, you understand and agree to accept and adhere to the following terms and conditions as stated in this policy (hereafter referred to as &lsquo;User Agreement&rsquo;), along with the terms and conditions as stated in our Privacy Policy (please refer to the Privacy Policy section for more information).</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>This agreement is in effect as of June, 26th 2023.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We reserve the right to change this User Agreement from time to time without notice. You acknowledge and agree that it is your responsibility to review this User Agreement periodically to familiarize yourself with any modifications. Your continued use of this site after such modifications will constitute acknowledgment and agreement of the modified terms and conditions.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Responsible Use and Conduct</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We would also draw your attention to that by visiting our website and accessing the information, resources, services, products, and tools we provide for you, either directly or indirectly (hereafter referred to as &#39;Resources&#39;), you agree to use these Resources only for the purposes intended as permitted by (a) the terms of this User Agreement, and (b) applicable laws, regulations and generally accepted online practices or guidelines.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'><b>Wherein, you understand that:</b></p>
                            <ul className={`text-black title-20 mt-4 ${terms.listData}`}>
                                <li>In order to access our Resources, you may be required to provide certain information about yourself (contact details) as part of the registration process, or as part of your ability to use the Resources. You agree that any information you provide will always be accurate, correct, and up to date.</li>
                                <li>You are responsible for maintaining the confidentiality of any login information associated with any account you use to access our Resources. Accordingly, you are responsible for all activities that occur under your account/s.</li>
                                <li>Accessing (or attempting to access) any of our Resources by any means other than through the means we provide, is strictly prohibited. You specifically agree not to access (or attempt to access) any of our Resources through any automated, unethical or unconventional means.</li>
                                <li>Engaging in any activity that disrupts or interferes with our Resources, including the servers and/or networks to which our Resources are located or connected, is strictly prohibited.</li>
                                <li>Attempting to copy, duplicate, reproduce, sell, trade, or resell our Resources is strictly prohibited.</li>
                                <li>You are solely responsible for any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.</li>
                                <li>We may provide various open communication tools on our website, such as blog comments, blog posts, public chat, forums, message boards, newsgroups, product ratings and reviews, various social media services, etc. You understand that generally we do not pre-screen or monitor the content posted by users of these various communication tools, which means that if you choose to use these tools to submit any type of content to our website, then it is your personal responsibility to use these tools in a responsible and ethical manner. By posting information or otherwise using any open communication tools as mentioned, you agree that you will not upload, post, share, or otherwise distribute any content that:
                                    <ul className={`text-black title-20 mt-4 ${terms.listData}`}>
                                        <li>
                                            Is illegal, threatening, defamatory, abusive, harassing, degrading, intimidating, fraudulent, deceptive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language;
                                        </li>
                                        <li>
                                            Infringes on any trademark, patent, trade secret, copyright, or other proprietary right of any party;
                                        </li>
                                        <li>
                                            Contains any type of unauthorized or unsolicited advertising;
                                        </li>
                                        <li>
                                            Impersonates any person or entity, including any BimaKavach &nbsp;employees or representatives.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We have the right at our sole discretion to remove any content that, we feel in our judgment does not comply with this User Agreement, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party copyrights or trademarks. We are not responsible for any delay or failure in removing such content. If you post content that we choose to remove, you hereby consent to such removal, and consent to waive any claim against us.</p>
                            <ul className={`text-black title-20 mt-4 ${terms.listData}`}>
                                <li>We do not assume any liability for any content posted by you or any other 3rd party users of our website. However, any content posted by you using any open communication tools on our website, provided that it doesn&rsquo;t violate or infringe on any 3rd party copyrights or trademarks, becomes the property of Bimakavach Insurance Broking Private Limited, and as such, gives us a perpetual, irrevocable, worldwide, royalty-free, exclusive license to reproduce, modify, adapt, translate, publish, publicly display and/or distribute as we see fit. This only refers and applies to content posted via open communication tools as described, and does not refer to information that is provided as part of the registration process, necessary in order to use our Resources. All information provided as part of our registration process is covered by our privacy policy.</li>
                                <li>You agree to indemnify and hold harmless Bimakavach Insurance Broking Private Limited and its parent company and affiliates, and their directors, officers, managers, employees, donors, agents, and licensors, from and against all losses, expenses, damages and costs, including reasonable attorneys&#39; fees, resulting from any violation of this User Agreement or the failure to fulfill any obligations relating to your account incurred by you or any other person using your account. We reserve the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this User Agreement. In such event, you shall provide us with such cooperation as is reasonably requested by us.</li>
                            </ul>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Trademarks and Copyrights</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>All content and materials available on BimaKavach including but not limited to text, graphics, website name, code, images and logos are the intellectual property of Bimakavach Insurance Broking Private Limited, and are protected by applicable copyright and trademark law. Any inappropriate use, including but not limited to the reproduction, distribution, display or transmission of any content on this site is strictly prohibited, unless specifically authorized by Bimakavach Insurance Broking Private Limited.&nbsp;</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Termination of Use</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>You agree that we may, at our sole discretion, suspend or terminate your access to all or part of our website and Resources with or without notice and for any reason, including, without limitation, breach of this User Agreement. Any suspected illegal, fraudulent or abusive activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities. Upon suspension or termination, your right to use the Resources we provide will immediately cease, and we reserve the right to remove or delete any information that you may have on file with us, including any account or login information.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Advertising Material</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Part of the Site will contain advertising and other material submitted to BimaKavach by third parties. Advertisers are responsible for ensuring that material submitted for inclusion on the Site complies with applicable International and National law. BimaKavach will not be responsible for any advertiser&#39;s claim, error, omission or inaccuracy in advertising material, and reserves the right to omit, suspend or change the position of any advertising material submitted for insertion. Acceptance of advertisements on the Site will be subject to BimaKavach terms and conditions which are available on request.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Data Protection</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>BimaKavach may send information and offers of products and services to you from time to time. The information and data are generic in nature. Our efforts are to offer unbiased, accurate and responsible data to the best of our ability. We are however, in no manner or form responsible for any discrepancies in the data published on our website. For further details relating to our policy relating to such offer please refer to our privacy statement.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>*E-mail messages sent to BimaKavach over the internet cannot be guaranteed to be completely secure. The integrity of such messages cannot be guaranteed by the internet and BimaKavach will not be responsible for any damages incurred by users due to messages sent or received by them to or from&nbsp; BimaKavach&nbsp;</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'><b>Do Not Disturb / Do Not Call</b></p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>To obtain further details on the features, terms, conditions and exclusions of the insurance products sold by BimaKavach&nbsp; you may call us on these numbers: <a href="tel:+919036554785">+91 9036554785</a>.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>It is mandatory to insert your preferred mobile number for us to contact you.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>You expressly understand, accept and agree that by entering your contact details (which includes your preferred telephone number) in the Quotation form, you are consenting to, and specifically authorizing&nbsp; BimaKavach&nbsp; to contact you on the mobile number you have provided in the Quotation form in relation to obtaining further details on and/or purchasing of the insurance products sold by&nbsp; BimaKavach . You further confirm and agree that you have completed your contact details voluntarily and under no duress and that this authorization you have provided to&nbsp; BimaKavach&nbsp; to contact you over your mobile number in relation to the insurance products sold by&nbsp; BimaKavach will continue to apply to all calls relating to the solicitation of the insurance products sold by BimaKavach to you even if this mobile number is presently or subsequently registered on the Provider Do Not Call/ Do Not Disturb Register or the National Do Not Call Register.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>BimaKavach does not send emails from other than domain names -&nbsp; &ldquo;bimakavach.com&rdquo;. Please do not respond to any mails other than email IDs with this domain name as same may be fraudulent/phishing emails.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Anti Fraud Policy:</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>BimaKavach is committed to transparency, integrity and accountability in all its affairs. It is determined to maintain a culture of honesty and strong opposition to fraud, and has strong anti fraud policies in place.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Protection of Privacy of Children/Minor(s)</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>If you are below 18 years of age, you shall not submit any personal information to us, except if you are submitting the information through or with the consent of your guardian.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Owing to the technical features of the Internet, only hard copies, which are formally released by BimaKavach can provide official and reliable information. BimaKavach does not endorse or accept any liability for the contents of linked Web Sites. The information and opinions contained in BimaKavach&rsquo;s Web site are for informational purposes only and subject to change without notice.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'><b>Disclaimer</b></p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>BimaKavach intends to provide clear information about insurance products and services. The information and data are generic in nature. Our efforts are to offer accurate and responsible data. We are not responsible for any sort of discrepancies.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>There is no purpose of violating any copyright or intellectual copyrights issue. All information provided on the website BimaKavach is subject to the discretion of the same and is likely to change without any notice. Though, any changes in public utility will be communicated immediately in our portal.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Employees, partners and associated staff of Bimakavach Insurance Broking Pvt. Ltd. and/or BimaKavach are not accountable for any loss, harm or damage occurring due to usage of information from the portal. Customers are advised to use their own discretion in such matters. It is important to understand that insurance is a subject matter of solicitation and market risks. It is the responsibility of the customer to understand the limitations of insurance policies and the risks involved, we take no liability in such cases.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Read the subject documents carefully. The information provided on the portal is of financial, insurance and legal purposes. It is a mutual understanding that customers association with the portal will be at the customer&#39;s preference and risk.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

            <style jsx scope>
                {`
                    .infrmtnPage {
                        padding: 100px 0;   
                    }
                    .infrmtnPage .commnHeading{
                        padding: 0 0 60px 0;   
                    }
                    .title-60 {
                        font-size: 52px;
                        line-height: 64px;
                    }
                    .title-32 {
                        font-size: 30px;
                        line-height: 48px;
                    }
                    .title-20 {
                        font-size: 18px;
                        line-height: 30px;
                    }
                    .title-16 span {
                        position: relative;
                        top: -3px;
                    }
                    @media only screen and (max-width: 1450px) {
                        .infrmtnPage {
                            padding: 80px 0;   
                        }
                        .infrmtnPage .commnHeading{
                            padding: 0 0 60px 0;
                        }
                        .title-60 {
                            font-size: 48px;
                            line-height: 60px;
                        }
                    }
                    @media only screen and (max-width: 992px) {
                        .infrmtnPage {
                            padding: 70px 0;   
                        }
                        .infrmtnPage .commnHeading{
                            padding: 0 0 50px 0;
                        }
                        .container-fluid {
                            padding: 0 20px;
                        }
                        .title-60 {
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-64 {
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-32{
                            font-size: 24px;
                            line-height: 32px;
                        }
                        .title-24{
                            font-size: 18px;
                            line-height: 27px;
                        }
                        .title-20{
                            font-size: 16px;
                            line-height: 24px;
                        }
                        .title-22 {
                            font-size: 18px;
                            line-height: 27px;
                        }
                        .title-18{
                            font-size: 15px;
                            line-height: 23px;
                        }
                        .title-16{
                            font-size: 12px;
                            line-height: 18px;
                        }
                    }
                    @media (max-width: 575px) {
                        .infrmtnPage {
                            padding: 50px 0;   
                        }
                        .infrmtnPage .commnHeading {
                            padding-bottom: 40px;
                        }
                        .title-22 {
                          font-size: 18px;
                          line-height: 27px;
                        }
                    }
                   
                `}
            </style>
        </>
    )
}
