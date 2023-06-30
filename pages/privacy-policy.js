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
                                <div className='polyBox border-primary bg-blueLight mb-md-4 mb-2 text-primary title-12 text-uppercase font-weight-700'>PRIVACY POLICY</div>
                                <div className='title-60 font-secondary mb-md-3 mb-2 text-primary font-weight-700'>BimaKavach Technologies Privacy Policy</div>
                                <p className='title-22 font-weight-500 text-muted mb-0'>
                                    <span className='me-2'>
                                        <svg width="24" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We, Bimakavach Insurance Broking Private Limited, its associate concerns, directors and employees ( hereinafter jointly and severally referred to as BimaKavach) maintain, operate and own the web site accessible at the www.bimakavach.com. Respecting the privacy and choices of our clients and visitors is important for us. We hope that the information provided below will address any concerns you may have about privacy issues.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Disclosure of Personal Information</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We at BimaKavach hereby acknowledge and accept that details collected to process transactions and to help us provide a better level of service to you, are kept confidential and would be used only in the manner which would be beneficial to you. We consider our relationship with you as invaluable and strive to respect and safeguard your right to privacy.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We may collect the following information:</p>
                            <ul className={`text-black title-20 mt-4 ${terms.listData}`}>
                                <li>Name and business information, preferences and interests</li>
                                <li>Contact information including mobile number and email address</li>
                                <li>Other information relevant to issue quote for insurance policies</li>
                            </ul>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We will protect the Information with the same degree of care, but no less than a reasonable degree of care, to prevent the unauthorized use, dissemination, or publication of this information as we protect our own confidential information of a like nature.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We would not disclose the personal information to third parties, except under the following circumstances:</p>
                            <ul className={`text-black title-20 mt-4 ${terms.listData}`}>
                                <li>We may use your personal information to improve our service to you and to keep you updated about our new product or information that may be of interest to you.</li>
                                <li>Your personal information may be used by BimaKavach and its Affiliates for the purpose of offering you products and/or services that may interest you and help you learn about products and/or services that are offered to the public by BimaKavach and its Affiliates.</li>
                                <li>We may disclose your personal information to companies that provide support services for processing your application and transactions and such disclosure would be limited to the performance of the specific service we have requested.</li>
                                <li>We may disclose your personal information in limited circumstances where disclosures have to be made under the various regulations of Indian Laws or to any governmental agency or regulatory bodies.</li>
                            </ul>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Provided that nothing contained herein shall be deemed to restrict our right to make available any information as may be procured by us to such a third party as may be consented to by you in writing</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We may also ensure that your personal information is protected by confidentiality agreement with third party whenever it is disclosed to a third party, so as to enable such a third party to provide you certain specified services.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Supplemental Information</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We may also record information about your computer hardware and software including information like your IP address, browser type, domain names, access times and referring Web site addresses etc that may be collected by website. This information may be used by us for the operation of the service, to maintain quality of the service, and to provide general statistics regarding the use of the website.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Links and Co-Branded Sites</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We encourage you to review the privacy statements of other Web sites to which links www.BimaKavach.com so that you are aware of the privacy policies of these web sites too. We are not responsible for the privacy statements or other content on web sites outside of those of <a href="www.bimakavach.com">www.bimakavach.com</a>.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Security Policy</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We ensure that the personal information given to us by you at the time of filling up the application form and the client agreement would be stored in a safe and secure place.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>User Names and Passwords</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>To ensure security of access to the personal information and transaction details, the access to the secured zone of our website is restricted by the unique login ID. You should be very careful in handling the ID and you should ensure that you do not reveal it to anybody, nor do you keep it in writing. You should keep changing your password periodically. As a matter of precaution, we always give the details of your last login each time you log on to our site. In case you feel that the detail is not matching with your last login profile, it should give you an indication that somebody has been able to crack your login and password and is having unauthorized access to your details. In such circumstance, you should immediately change the password and also inform us about it.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>To ensure safety of your trading access, our technology automatically logs you out of the site if no activity is registered for 15 minutes. However you should ensure that each time you leave your terminal you log yourself out. This prevents someone else from accessing your account if you leave your computer and your session has not &quot;timed out&quot;.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>COOKIES &amp; WEB BEACONS</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>To enhance your experience with our sites, many of our web pages use &#39;cookies&#39;. Cookies are text files we place in your computer&#39;s browser to store your preferences. Cookies, by themselves, do not tell us your e-mail address or other personally identifiable information unless you choose to provide this information to us by, for example, registering at one of our sites. However, once you choose to furnish the site with personally identifiable information, this information may be linked to the data stored in the cookie.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We use cookies to understand site usage and to improve the content and offerings on our sites. For example, we may use cookies to personalize your experience at our web pages (e.g., to recognize you by name when you return to our site), save your password in password-protected areas, and enable you to use shopping carts on our sites. We also may use cookies to offer you products, programs, or services</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>&quot;Web beacons&quot; or clear .gifs are small pieces of code placed on a web page to monitor the behavior and collect data about the visitors viewing a web page. For example, web beacons can be used to count the users who visit a web page or to deliver a cookie to the browser of a visitor viewing that page. We may use web beacons on this site from time to time for this and other purposes.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Third-Party Advertisement Servers:</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'><a href="http://www.bimakavach.com">www.bimakavach.com</a> engages the services of an outside advertisement company to display advertisement on the Web Site. These advertisements may contain cookies. While www.bimakavach.com<a href="http://www.way2wealth.com/"> </a>uses cookies in other parts of the Web Site, cookies received with banner advertisements are collected by the Advertisement Company, and www.bimakavach.com<a href="http://www.way2wealth.com/"> </a>does not have access to this information</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Individual Registration, Access and Exchange of Information</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>For certain services such as web pages, contests and accessing data, registration might be required. By registering, you agree to the following terms in addition to any other specific terms which shall be posted at an appropriate location of the Site. Each registration is for a single individual user only. To access these services, you will be asked to enter your individual User Name and Password. Therefore, we do not permit any of the following:-</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Any other person sharing your User Name and Password</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Any part of the Site being cached in proxy servers and accessed by individuals who have not registered with BimaKavach as users of the Site</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Access through a single User Name and Password is available to multiple users on a network. If we reasonably believe that a User Name and Password are being used in any of these ways, we reserve the right to cancel access rights immediately without notice, and block access to all users from that IP address.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>All information, data, text, software, music, sound, photographs, graphics, video, messages or other materials, whether publicly or privately transmitted/posted, is the sole responsibility of the person from where such content originated. You shall be solely responsible for all content that you upload, post or otherwise transmit.</p>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>You may also not indulge in cyber stalking become or create a nuisance for any person. You may not send, submit, post, or otherwise transmit, messages or material that contain software virus, or any other files that are designed to interrupt, destroy, and negatively affect in any manner whatsoever, any electronic equipment in connection with the use of this site, or other user&#39;s ability to engage in real time exchanges.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0 mt-4'>Change in Policy</h3>
                            <hr className='bg-gray mt-2' />
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'><a href="http://www.bimakavach.com">www.bimakavach.com</a> may at any time revise the Terms by updating the then-current version thereof posted on this web site. By using this web site, you agree to be bound by any such revisions and should therefore periodically visit this page of this web site to determine the most current version of the Terms to which you are bound. Changes could be made by us after the first posting to the Site and you will be deemed to have accepted any change if you continue to access the Site after that time. Certain provisions of the Terms may be superseded by expressly designated legal notices or terms located on particular pages at this web site. This Site reserves the right to modify, suspend/cancel, or discontinue any or all channels, or service at any time without notice, make modifications and alterations in any or all of the content, products and services contained on the site without prior notice.</p>
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
                        .title-32 {
                            font-size: 24px;
                            line-height: 34px;
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
