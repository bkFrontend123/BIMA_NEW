import React, { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css'; // import the styles
import Banner from '../component/Product/Banner'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import WhatsApp from '../component/Icons/WhatsApp'
import OurBlog from '../component/Product/OurBlog'
import Review from '../component/Product/Review'
import BestBacked from '../component/Product/BestBacked'
import HowGetStarted from '../component/Home/HowGetStarted'
import FAQ from '../component/Product/FAQ'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, animateScroll as scroll } from "react-scroll";

export default function cyberInsurance() {
    const navbarExample2Ref = useRef(null);
    const [activeC, setActiveC] = useState(1);
    useEffect(() => {

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });

    });

    const ProductList = [
        { id: "1", list: "Who" },
        { id: "2", list: "Why" },
        {
            id: "3", list: "Coverage ",
            svg: "/icons/start.svg",
            svgActive: "/icons/startYellow.svg",
            uId: 'sep4'
        },
    ]

    const activeList = (val) => {
        setActiveC(val)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollspyHeading4 = document.getElementById('sep4');
            if (scrollspyHeading4.classList.contains('active')) {
                // Update internal CSS of navbarExample2Ref.current when scrollspyHeading4 is active
                navbarExample2Ref.current.classList.add('nav-yellow');
            } else {
                // Reset internal CSS of navbarExample2Ref.current when scrollspyHeading4 is not active
                navbarExample2Ref.current.classList.remove('nav-yellow');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup event listener when component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Navbar />
            <div>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <div className='container px-3'>
                        <div className='row'>
                            <div className='col-md-10 mx-auto px-3 px-md-0'>
                                <Banner
                                    customclassName=""
                                    title="Cyber Insurance"
                                    description="Shield your business form the most fundamental risks"
                                    yourName=""
                                    companyName=""
                                    phone=""
                                    email=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* product banner end */}

                {/* product banner start */}
                <div className='aboutProdMain text-white'>
                    <div className='container'>
                        <div className='aboutProduct'>
                            <div className='row aboutProductNavbar'>
                                <div className='col-md-12'>
                                    <nav ref={navbarExample2Ref} className="navbar @justify-content-end ">
                                        <ul className="nav nav-pills aboutProductList ">
                                            {ProductList.map((item) => {
                                                return (<li className={`nav-item ${activeC == item.id ? "activeList" : ""}`} onClick={() => activeList(item.id)}>
                                                    <Link
                                                        activeClass="active"
                                                        className='nav-link text-blueGray'
                                                        to={`scrollspyHeading${item.id}`}
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500}
                                                        id={item?.uId && item?.uId}
                                                    >
                                                        {item.svg
                                                            ?
                                                            <>
                                                                <img className='svg' src={item.svg} />
                                                                <img className='svgActive' src={item.svgActive} />
                                                            </>
                                                            :
                                                            null
                                                        }
                                                        {item.list}
                                                    </Link>
                                                </li>)
                                            }
                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='aboutProductNavbar-content'>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example " tabindex="0">
                                    {/* <div id="scrollspyHeading1" className='aboutProductSec pt-0'>
                                        <div className='row'>
                                            <div className='col-md-7'>
                                                <div className='aboutProductSec-left'>
                                                    <h2 className='aboutProductSec-leftSubTitle title-24 font-secondary font-weight-400 opacity-75' >What is</h2>
                                                    <h3 className='aboutProductSec-leftTitle title-36 font-secondary font-weight-600 text-yellow'>Directors & Officers Liability Insurance?</h3>
                                                    <p className='aboutProductSec-leftDecrip title-20 mb-0 text-blueGray font-weight-500 mt-5'>Also known as Directors Liability Insurance (or simply D&O Insurance), this policy is designed to cover the legal liabilities of directors, CXOs and board members in case they get indicted over the decisions they make to manage the business. Essentially, the D&O policy protects the personal assets of the  company’s directors and officers, and compensates for settlements  and legal expenses that result from the covered claims.</p>
                                                </div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='aboutProductSec-right' >
                                                    <h2 className='aboutProductSec-rightTitle title-24 font-secondary font-weight-400 opacity-0'>dummy</h2>
                                                    <p className='aboutProductSec-rightDescrip font-secondary title-24 font-primaryNormal font-weight-400 pe-lg-5 mb-4'>
                                                        Directors and Officers Liability  Insurance Policy covers the  following exposures:
                                                    </p>
                                                    <div className='aboutProductSec-rightIcoCard d-flex align-items-center mb-3' >
                                                        <img src='/Icons/shieldWarning.svg' />
                                                        <p className='ms-3 mb-0 font-primaryNormal font-weight-500 title-18 text-blueGray'>Breaches of Fiduciary Duties</p>
                                                    </div>
                                                    <div className='aboutProductSec-rightIcoCard d-flex align-items-center mb-3' >
                                                        <img src='/Icons/shieldWarning.svg' />
                                                        <p className='ms-3 mb-0 font-primaryNormal font-weight-500 title-18 text-blueGray'>Misrepresented Allegations</p>
                                                    </div>
                                                    <div className='aboutProductSec-rightIcoCard d-flex align-items-center mb-3'>
                                                        <img src='/Icons/shieldWarning.svg' />
                                                        <p className='ms-3 mb-0 font-primaryNormal font-weight-500 title-18 text-blueGray'>Regulatory Actions</p>
                                                    </div>
                                                    <div className='aboutProductSec-rightIcoCard d-flex align-items-center mb-3'>
                                                        <img src='/Icons/shieldWarning.svg' />
                                                        <p className='ms-3 mb-0 font-primaryNormal font-weight-500 title-18 text-blueGray'>Securities Litigation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className='secDivider bg-primary w-100 '></div> */}
                                    <div id="scrollspyHeading1" className='aboutProductSec  pt-0'>
                                        <div className='row'>
                                            <div className='col-md-7'>
                                                <div className='aboutProductSec-left' >
                                                    <h2 className='aboutProductSec-leftSubTitle title-24 font-secondary font-weight-400 opacity-75'>Who Needs</h2>
                                                    <h3 className='aboutProductSec-leftTitle title-36 font-secondary font-weight-600 text-yellow'>Cyber Insurance?</h3>
                                                    <p className='aboutProductSec-leftDecrip title-20 mb-0 text-blueGray mt-md-5'>
                                                        Given US data breaches cost an average of $4 million, companies of all sizes should consider cybersecurity a top priority. Cybercriminals scout businesses with fractured processes and technology, executing sophisticated multi-tiered attacks to infiltrate the company’s network. Loads of personal identifiable information (PII) are stolen every year, resulting in third-party lawsuits, plus fines and penalties from regulators.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='aboutProductSec-right'>
                                                    <p className='aboutProductSec-rightDescrip font-secondary title-24 font-primaryNormal font-weight-400 pe-lg-5 mb-3 mb-md-4 mt-4 mt-md-0'>
                                                        However Cyber Insurance is particularly important for the following industries:
                                                    </p>
                                                    <h4 className='title-24 font-secondary mb-md-4'>Healthcare</h4>
                                                    <p className='title-18 text-blueGray'>Hundreds of thousands of patients relying on you to protect their personal identifiable information</p>
                                                    <h4 className='title-24 font-secondary mb-md-4'>Financial Services</h4>
                                                    <p className='title-18 text-blueGray'>The average cost of a data breach is mounting $4 million, and financial services are first on most cybercriminals’ agenda.</p>
                                                    <h4 className='title-24 font-secondary mb-md-4'>SaaS</h4>
                                                    <p className='title-18 text-blueGray'>Notification costs, lost income, and cyber extortion losses equal a tough rebound for this industry.</p>
                                                    <h4 className='title-24 font-secondary mb-md-4'>Ecommerce</h4>
                                                    <p className='title-18 text-blueGray'>The damage to your reputation alone could cause your company to shutter after a cyberattack.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='secDivider bg-primary w-100 '></div>
                                    <div id="scrollspyHeading2" className='aboutProductSec '>
                                        <div className='row '>
                                            <div className='col-md-7'>
                                                <div className='aboutProductSec-left'>
                                                    <h2 className='aboutProductSec-leftSubTitle title-24 font-secondary font-weight-400 opacity-75'>Why Get</h2>
                                                    <h3 className='aboutProductSec-leftTitle title-36 font-secondary font-weight-600 text-yellow'>Errors & Omissions Insurance?</h3>
                                                    {/* <h4 className='title-24 font-secondary mt-5 '>In March 2021, Apple lost an early round in a discrimination lawsuit brought in the U.S. by a female engineer from India.</h4> */}
                                                    <p className='aboutProductSec-leftDecrip title-20 mb-0 text-blueGray mt-3'>
                                                        Cyber attacks are on the rise worldwide. Unfortunately, over half of these vicious attacks happen because of employee mistakes, making the breaches and subsequent losses avoidable. Cyber insurance is an evolving policy that helps protect companies against the damages sustained in a cyber attack.<br />
                                                        Consider the cost of data restoration, credit monitoring, and reimbursement for income lost and payroll spent — it’s astronomical. However, this policy is designed to cover these specific damages.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='aboutProductSec-right'>
                                                    <p className='aboutProductSec-rightDescrip font-secondary title-24 font-primaryNormal font-weight-400 pe-lg-5 mb-3 mb-md-5 mt-4 mt-md-0'>
                                                        Reasons  to get <span className='d-none d-lg-inline'><br /></span> Errors & Omissions Insurance:
                                                    </p>
                                                    <div className='aboutProductSec-rightIcoCard d-flex align-items-center mb-3 mb-md-5' >
                                                        <img src='/icons/shieldWarning.svg' />
                                                        <p className='ms-3 mb-0 font-primaryNormal font-weight-500 title-18 text-blueGray'>Protects against financial loss <br />and notification expenses</p>
                                                    </div>
                                                    <div className='aboutProductSec-rightIcoCard d-flex align-items-center mb-3 mb-md-5' >
                                                        <img src='/icons/shieldWarning.svg' />
                                                        <p className='ms-3 mb-0 font-primaryNormal font-weight-500 title-18 text-blueGray'>Covers forensic investigations <br />and data recovery</p>
                                                    </div>
                                                    <div className='aboutProductSec-rightIcoCard d-flex align-items-center mb-md-5'>
                                                        <img src='/icons/shieldWarning.svg' />
                                                        <p className='ms-3 mb-0 font-primaryNormal font-weight-500 title-18 text-blueGray'>Helps cover legal costs <br />and lawsuit settlements</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="scrollspyHeading3" className='aboutProductSec pt-0 aboutProductSec-yellow'>
                                        <div className='row '>
                                            <div className='col-md-7'>
                                                <div className='aboutProductSec-left aboutProductSec-leftYellow'>
                                                    <h2 className='aboutProductSec-leftSubTitle title-24 font-secondary font-weight-400 opacity-75'>* Coverages in</h2>
                                                    <h3 className='aboutProductSec-leftTitle title-36 font-secondary font-weight-600 text-black'>Cyber Insurance</h3>
                                                    <h4 className='title-20 text-primary font-secondary mt-4 '>
                                                        You will have to consult your policy documents to confirm exactly what coverage your Cyber insurance provides but here are a few scenarios that typically would and would not be covered. You can read more about what cyber insurance covers here.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='aboutProductSec-right position-relative h-100'>
                                                    <h2 className='aboutProductSec-rightTitle title-24 font-secondary font-weight-400 opacity-0'>dummy</h2>

                                                    {/* <h4 className='title-24 font-secondary text-black mb-5'>It’s important to note that General Liability Insurance covers:</h4> */}
                                                    <Swiper
                                                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                                        arrows={true}
                                                        navigation={{
                                                            nextEl: ".caverage-button-next",
                                                            prevEl: ".caverage-button-prev",
                                                            disabledClass: "swiper-button-disabled"
                                                        }}
                                                        className={``}
                                                        spaceBetween={50}
                                                        infinite={true}
                                                        loop={true}
                                                        speed={1000}
                                                        // autoplay={{
                                                        //     delay: 2000,
                                                        //     disableOnInteraction: false
                                                        // }}
                                                        breakpoints={{
                                                            // when window width is >= 640px
                                                            1399: {
                                                                slidesPerView: 1,
                                                            },
                                                            1200: {
                                                                slidesPerView: 1,
                                                            },
                                                            992: {
                                                                slidesPerView: 1,
                                                            },
                                                            0: {
                                                                slidesPerView: 1,
                                                            },

                                                        }}
                                                    >

                                                        <SwiperSlide>
                                                            <div className="aboutProductSec-yellowSlider ">
                                                                <h4 className='title-24 font-secondary text-primary mb-3'><img className='me-2' src="/icons/que.svg" />Reputation Damage</h4>
                                                                <p className='title-18 text-blueGray text-primary font-weight-500'>A data breach can severely damage your firm’s reputation. So, some policies cover the costs you incur for marketing and public relations to protect your company’s reputation following a data breach. This coverage is sometimes referred to as Crisis Management.</p>
                                                            </div>
                                                            {/* <div className="aboutProductSec-yellowSlider display-hidden">
                                                                <h4 className='title-24 font-secondary text-primary mb-3'><img className='me-2' src="/icons/que.svg" /> Property damage</h4>
                                                                <p className='title-18 text-blueGray text-primary font-weight-500'>Maybe you visit your client’s new space bringing housewarming gifts of coffee & muffins. On your way through the office, you accidentally spill the coffee onto some high-end computers and monitors, not to mention the brand new carpet.</p>
                                                            </div> */}
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="aboutProductSec-yellowSlider">
                                                                <h4 className='title-24 font-secondary text-primary mb-3'><img className='me-2' src="/icons/que.svg" />Reputation Damage</h4>
                                                                <p className='title-18 text-blueGray text-primary font-weight-500'>A data breach can severely damage your firm’s reputation. So, some policies cover the costs you incur for marketing and public relations to protect your company’s reputation following a data breach. This coverage is sometimes referred to as Crisis Management.</p>
                                                            </div>
                                                            {/* <div className="aboutProductSec-yellowSlider display-hidden">
                                                                <h4 className='title-24 font-secondary text-primary mb-3'><img className='me-2' src="/icons/que.svg" />Property damage</h4>
                                                                <p className='title-18 text-blueGray text-primary font-weight-500'>Maybe you visit your client’s new space bringing housewarming gifts of coffee & muffins. On your way through the office, you accidentally spill the coffee onto some high-end computers and monitors, not to mention the brand new carpet.</p>
                                                            </div> */}
                                                        </SwiperSlide>
                                                        {/* <SwiperSlide>
                                                            <div className="aboutProductSec-yellowSlider">
                                                                <h4 className='title-24 font-secondary text-primary mb-3'><img className='me-2' src="/icons/que.svg" /> Cyber Threats</h4>
                                                                <p className='title-18 text-blueGray text-primary font-weight-500'>Data breaches and cyber attacks are covered in a separate policy <Link href=""> (check Cyber Insurance)</Link></p>
                                                            </div>
                                                            <div className="aboutProductSec-yellowSlider">
                                                                <h4 className='title-24 font-secondary text-primary mb-3'><img className='me-2' src="/icons/que.svg" /> Cyber Threats</h4>
                                                                <p className='title-18 text-blueGray text-primary font-weight-500'>Professional Services Claims</p>
                                                            </div>
                                                        </SwiperSlide> */}

                                                    </Swiper>
                                                    <div className='d-flex caverage-button position-relative mt-180'>
                                                        <div className='caverage-button-prev' >
                                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.9648 6.41016L1.66173 6.41016" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.50391 1.11572L1.65971 6.41016" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.50781 11.7051L1.66362 6.41064" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>


                                                        </div>
                                                        <div className='caverage-button-next '>
                                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.28516 6.41016L12.5883 6.41016" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M7.74609 1.11572L12.5903 6.41016" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M7.74609 11.7051L12.5903 6.41064" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <AboutProduct /> */}
                    {/* product banner end */}



                </div>

                {/* --------claim example start---------- */}
                <div className='container'>
                    <div className='prodContainer claimExample'>
                        <div className='row '>
                            <div className='col-md-7'>
                                <div className='aboutProductSec-left '>
                                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-500 '>Some Examples</div>
                                    <h3 className='aboutProductSec-leftTitle title-64 font-secondary font-weight-600 text-primary'>Cyber Claims<br />Examples</h3>
                                    <h4 className='title-24 text-black font-secondary mt-4 '>Augue elit leo ut laoreet. Et erat in elementum justo aliquet enim dolor iaculis quis.</h4>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='aboutProductSec-right position-relative h-100'>

                                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-500 opacity-0 d-none d-md-block'>Some Examples</div>
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                        arrows={true}
                                        navigation={{
                                            nextEl: ".caverage-button-next2",
                                            prevEl: ".caverage-button-prev2",
                                            disabledClass: "swiper-button-disabled"
                                        }}
                                        className={``}
                                        spaceBetween={50}
                                        infinite={true}
                                        loop={true}
                                        speed={1000}
                                        // autoplay={{
                                        //     delay: 2000,
                                        //     disableOnInteraction: false
                                        // }}
                                        breakpoints={{
                                            // when window width is >= 640px
                                            1399: {
                                                slidesPerView: 1,
                                            },
                                            1200: {
                                                slidesPerView: 1,
                                            },
                                            992: {
                                                slidesPerView: 1,
                                            },
                                            0: {
                                                slidesPerView: 1,
                                            },

                                        }}
                                    >

                                        <SwiperSlide>
                                            <div className="claimSlider">
                                                <h3 className='title-20 font-gray text-gray mb-2 mt-3 mt-md-0'> Incident 1</h3>
                                                <h4 className='title-24 font-secondary text-primary mb-4 font-weight-600'>Accident from Driverless Vehicle</h4>
                                                <h5 className='title-24 font-secondary text-black mb-1 font-weight-600'> Incident</h5>
                                                <p className='title-18 text-blueGray' >A hacker is able to gain access to the systems of a startup providing an AI enabled text adventure gaming service. The hacker is able to obtain user content from some users’ adventures, scenarios, posts and comments, including those which were not published. It also contains the associated usernames.</p>
                                                <h5 className='title-24 font-secondary text-black mb-1 font-weight-600'> Resolution</h5>
                                                <p className='title-18 text-blueGray' >The cyber policy provides coverage for a computer forensic firm to investigate the breach and fix the issue, as well as the cost to notify relevant parties pursuant to the EU’s General Data Protection Regulation.</p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="claimSlider">
                                                <h3 className='title-20 font-gray text-gray mb-2'> Incident 1</h3>
                                                <h4 className='title-24 font-secondary text-primary mb-4 font-weight-600'>Accident from Driverless Vehicle</h4>
                                                <h5 className='title-24 font-secondary text-black mb-1 font-weight-600'> Incident</h5>
                                                <p className='title-18 text-blueGray' >A hacker is able to gain access to the systems of a startup providing an AI enabled text adventure gaming service. The hacker is able to obtain user content from some users’ adventures, scenarios, posts and comments, including those which were not published. It also contains the associated usernames.</p>
                                                <h5 className='title-24 font-secondary text-black mb-1 font-weight-600'> Resolution</h5>
                                                <p className='title-18 text-blueGray' >The cyber policy provides coverage for a computer forensic firm to investigate the breach and fix the issue, as well as the cost to notify relevant parties pursuant to the EU’s General Data Protection Regulation.</p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="claimSlider">
                                                <h3 className='title-20 font-gray text-gray mb-2'> Incident 1</h3>
                                                <h4 className='title-24 font-secondary text-primary mb-4 font-weight-600'>Accident from Driverless Vehicle</h4>
                                                <h5 className='title-24 font-secondary text-black mb-1 font-weight-600'> Incident</h5>
                                                <p className='title-18 text-blueGray' >A hacker is able to gain access to the systems of a startup providing an AI enabled text adventure gaming service. The hacker is able to obtain user content from some users’ adventures, scenarios, posts and comments, including those which were not published. It also contains the associated usernames.</p>
                                                <h5 className='title-24 font-secondary text-black mb-1 font-weight-600'> Resolution</h5>
                                                <p className='title-18 text-blueGray' >The cyber policy provides coverage for a computer forensic firm to investigate the breach and fix the issue, as well as the cost to notify relevant parties pursuant to the EU’s General Data Protection Regulation.</p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="claimSlider">
                                                <h3 className='title-20 font-gray text-gray mb-2'> Incident 1</h3>
                                                <h4 className='title-24 font-secondary text-primary mb-4 font-weight-600'>Accident from Driverless Vehicle</h4>
                                                <h5 className='title-24 font-secondary text-black mb-1 font-weight-600'> Incident</h5>
                                                <p className='title-18 text-blueGray' >A hacker is able to gain access to the systems of a startup providing an AI enabled text adventure gaming service. The hacker is able to obtain user content from some users’ adventures, scenarios, posts and comments, including those which were not published. It also contains the associated usernames.</p>
                                                <h5 className='title-24 font-secondary text-black mb-1 font-weight-600'> Resolution</h5>
                                                <p className='title-18 text-blueGray' >The cyber policy provides coverage for a computer forensic firm to investigate the breach and fix the issue, as well as the cost to notify relevant parties pursuant to the EU’s General Data Protection Regulation.</p>
                                            </div>
                                        </SwiperSlide>

                                    </Swiper>
                                    <div className='d-flex caverage-button position-relative'>
                                        <div className='caverage-button-prev2 ' >
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.9648 6.41016L1.66173 6.41016" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.50391 1.11572L1.65971 6.41016" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.50781 11.7051L1.66362 6.41064" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>


                                        </div>
                                        <div className='caverage-button-next2 '>
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.28516 6.41016L12.5883 6.41016" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M7.74609 1.11572L12.5903 6.41016" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M7.74609 11.7051L12.5903 6.41064" stroke="#0E2B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* --------claim example end---------- */}


                <div className='productStartup '>
                    <div className='container '>
                        <div className='prodContainer'>
                            <div className='row text-center'>
                                <div className='col-md-12'>
                                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-500 '>Our Products</div>
                                    <h3 className='aboutProductSec-leftTitle title-64 font-secondary font-weight-600 text-primary'>Business Protection for Startups & SMEs</h3>
                                    <h4 className='title-24 text-black font-weight-500 mt-4 mb-0'>Secure the business & stakeholders against lawsuit expenses - Legal + Settlement</h4>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-md-12'>
                                    <div className='commnHeading'>
                                        <h4 className='title-36 text-primary font-secondary font-weight-600 mt-4 '>Liability Insurance</h4>
                                        <div className='productStartup-divider bg-gray w-100 mt-3'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup1.svg" />
                                            <h4 className='title-24 text-primary ms-3 mb-0 '>Directors & Officers Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Venenatis at at magna ut vestibulum odio sed at faucibus. Ultrices facilisis laoreet sed porta id duis sapien et. Enim sem facilisis suscipit.</p>
                                    </div>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup3.svg" />
                                            <h4 className='title-24 text-primary ms-3 mb-0 '>Cyber Crime  Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Diam at sit scelerisque nam. Vestibulum nunc gravida sed quisque. Nunc id diam non neque porttitor sed fermentum. Eu justo quis maecenas.</p>
                                    </div>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup5.svg" />
                                            <h4 className='title-24 text-primary ms-3 mb-0 '>Crime/Fidelty Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Non enim maecenas purus aliquet tincidunt arcu. Lacus mi ullamcorper bibendum sed risus eget. Orci facilisis sit sodales nibh purus sed habitant.</p>
                                    </div>
                                </div>
                                <div className='col-md-2'></div>
                                <div className='col-md-5'>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup2.svg" />
                                            <h4 className='title-24 text-primary ms-3 mb-0 '>Errors & Omissions Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Pulvinar nunc in sed malesuada congue. Dignissim sed aliquet vehicula facilisis natoque in ut. Urna ultrices vivamus quam vitae quam tortor.</p>
                                    </div>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup4.svg" />
                                            <h4 className='title-24 text-primary ms-3 mb-0 '>General Liability Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Morbi velit in quisque commodo enim penatibus. Dui posuere purus duis turpis integer ullamcorper. Arcu dignissim ultrices eu sapien.</p>
                                    </div>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup6.svg" />
                                            <h4 className='title-24 text-primary ms-3 mb-0 '>Product Liability Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Lorem ipsum dolor sit amet consectetur. In quam euismod vestibulum in commodo. Massa tellus sit interdum pulvinar. Mus imperdiet scelerisque.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-n5'>
                                <div className='col-md-12'>
                                    <div className='commnHeading mt-0'>
                                        <h4 className='title-36 text-primary font-secondary font-weight-600  '>Asset Insurance</h4>
                                        <div className='productStartup-divider bg-gray w-100 mt-3'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-md-5'>
                                <div className='col-md-5'>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup1.svg" />
                                            <h4 className='title-24 text-primary  ms-3 mb-0 '>Fire Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Ullamcorper massa quam nunc lectus eu tristique morbi nam. Egestas id aliquam diam odio aliquam nisl dictumst iaculis. Nunc ligula.</p>
                                    </div>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup3.svg" />
                                            <h4 className='title-24 text-primary  ms-3 mb-0 '>Marine Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Faucibus imperdiet bibendum suspendisse vel enim. Purus malesuada feugiat eleifend felis ac. Eu lacus magna id libero. Et sapien placerat eget.</p>
                                    </div>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup5.svg" />
                                            <h4 className='title-24 text-primary  ms-3 mb-0 '>Machine Breakdown</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Laoreet sed adipiscing mus aliquam hac porta ultricies molestie. Enim egestas neque lectus sed augue id. Id est sit diam ante viverra. Sed varius.</p>
                                    </div>
                                </div>
                                <div className='col-md-2'></div>
                                <div className='col-md-5'>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup2.svg" />
                                            <h4 className='title-24 text-primary  ms-3 mb-0 '>Contractors All Risk</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Ullamcorper elementum interdum pulvinar ut eget elit. Massa nibh eget morbi malesuada massa sed id sodales. Bibendum ipsum et a.</p>
                                    </div>
                                    <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup4.svg" />
                                            <h4 className='title-24 text-primary ms-3 mb-0 '>Erection All Risk</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Faucibus at tristique sed placerat elit. Massa purus blandit amet a eget. Enim interdum libero faucibus donec augue cras ut. Egestas netus.</p>
                                    </div>

                                    {/* <div className='productStartup-card'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/icons/prodStartup6.svg" />
                                            <h4 className='title-24 text-primary font-secondary ms-3 mb-0 '>Product Liability Insurance</h4>
                                        </div>
                                        <p className='title-18 text-blueGray mt-2'>Lorem ipsum dolor sit amet consectetur. In quam euismod vestibulum in commodo. Massa tellus sit interdum pulvinar. Mus imperdiet scelerisque.</p>
                                    </div> */}
                                </div>

                                <div className={`row productStartup-bottom mt-4 mt-md-0`}>
                                    <div className={`col text-center`}>
                                        <div className="d-flex justify-content-center flex-column flex-sm-row" >
                                            <a className="btnCommon btnBorder border-primary  text-primary me-lg-5 text-decoration-none" type="submit"> <img className='me-2' src='/icons/calender.svg' width="22px" /> <span> Schedule a call </span> </a>
                                            {/* <a className="btnCommon yellowBtn text-primary text-decoration-none mt-4 mt-sm-0" type="submit"> <img className='me-1' src='/icons/whatsapp.svg' width="22px"/><span> WhatsApp us</span></a> */}
                                            <a className="btnCommon yellowBtn text-primary text-decoration-none mt-4 mt-sm-0" type="submit">
                                                <WhatsApp iconColor="primary" height="23" width="23" />
                                                <span className='ms-2'> WhatsApp us</span>
                                            </a>
                                        </div>
                                        <p className='title-15 mt-5 mb-0 text-blueGray font-weight-500 '> Say hello to a spam-free zone! We respect your privacy and <span className='d-sm-inline d-none'> <br></br></span> won't bombard you with unwanted calls. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* --------productStartup end---------- */}
                    <OurBlog />

                    <Review />
                    <BestBacked />
                    <FAQ />
                    <HowGetStarted />

                    <div className="d-none d-md-block" style={{ height: "280px" }}></div>
                    <div className="d-blok d-md-none" style={{ height: "60px" }}></div>

                </div>
            </div>
            <Footer />

            <style jsx scope>
                {`
         
        .aboutProdMain{
            background: rgb(7,22,57);
            background: linear-gradient(180deg, rgba(7,22,57,1) 69.5%, rgba(255,180,0,1) 69.5%);
        }
        .container{
            max-width: 1580px;
        }
        .title-36{
            font-size: 36px;
            line-height: 42px;
        }
        .aboutProduct{
            padding: 105px 120px 0 0 ;
            position: relative;
        }
        .aboutProduct::before{
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            background: #ddd;
            width: 1px; 
            height: 100%;
        }
        
        .aboutProductNavbar{
            
            position: sticky;
            top: 0;
            z-index: 222;
        }
        .aboutProductNavbar .navbar{
            background: #071639;
            border-left: 1px solid #ddd;
            padding: 20px 0;
        }
        .aboutProductNavbar-content, .prodContainer {
        padding-left: 150px;
        margin-top: 120px;           
    }
        .prodContainer {
        padding-right: 120px;      
    }
        .aboutProductSec-left{
            padding-right: 10px;
        }
        .aboutProductSec-leftDecrip{
            padding-right: 90px;
            margin-top: 40px;
        }
        .aboutProductSec-left::before{
            position: absolute;
            content: "";
            left: -7px;
            background: var(--vt-c-yellow);
            width: 15px;
            height: 15px;
            margin-top: 7px;
        }
        .aboutProductSec-leftYellow::before{
            position: absolute;
            content: "";
            left: -7px;
            background: var(--vt-c-blue);
            width: 15px;
            height: 15px;
            margin-top: 7px;
        }
        .aboutProductSec-leftSubTitle{
            margin-bottom: 4px;
        }
        .aboutProductSec{
            padding: 118px 0;
        }
        .aboutProductSec-yellow{
            padding-top: 90px !important;
        }
        .aboutProductList li{
            margin-right: 20px;
            position: relative;
        }
        .aboutProductList li a{             
            font-weight: 400;             
            font-size: 18px;
            padding: 0 10px;
            display: flex;
            align-items: center;            
        }
        .aboutProductList li a.active{
            background-color: transparent;
        }
        .aboutProductList li a img{
            height: 16px;
            margin-right: 5px;         
        }
        .aboutProductList li a img.svgActive{
            display: none;
        }
        .aboutProductList li a.active img.svgActive{
            display: inline;
        }
        .aboutProductList li a.active img.svg{
            display: none;
        }
        
         
        .aboutProductList li a.active::after {
            position: absolute;
            content: "";
            height: 1px;
            bottom: -18px;
            background: #ddd;
            left: 0;
            width: 100%; 
        }
        .aboutProductList li a:hover,
        .aboutProductList li a.active {
            color: var(--vt-c-yellow);
            opacity: 1;
        }
        .secDivider{
            height: 1px;
        }
         .aboutProductSec-right{
             padding-left: 50px; 
         }
         .aboutProductSec-rightIcoCard p{
             
         }
         
         .aboutProductSec-yellow .aboutProductSec-right img{
             height: 30px;
             width: 30px;
         }
         .caverage-button{
             position: absolute;
             bottom: 0;
         }
         .caverage-button > div,
         .caverage-button > div{
             font-size: 18px;
             color: #0e2b72;
             border: 2px solid #0e2b72;
             width: 35px;
             height: 35px;
             display: flex;
             align-items: center;
             justify-content: center;
             cursor: pointer;  
             margin-bottom: 40px;
            }
            .caverage-button-next, .caverage-button-next2 {
                margin-left: 64px;
            }
            
            .claimExample{
                margin: 120px 0;
                min-height: 700px;
            }
            .claimExample  .aboutProductSec-left::before{
                display:none;
            }
            .claimExample  .caverage-button{
                margin-top: 90px;
            }

            .productStartup .commnHeading{
                margin-top: 86px;
            }
            .productStartup-divider{
                height: 1px;
                margin-bottom: 60px;
             }
             .productStartup-card{
                 margin-bottom: 80px;
                 padding: 0 25px;
                }
                .productStartup-card p{
                    font-weight: 500;
                }
             .productStartup-assetRow{
                 margin-top: -30px;
                }
                .productStartup-bottom{
                    margin-bottom: 180px;
                }

         .title-64 {
             font-size: 64px;
             line-height: 78px;
           }
           
           .title-60 {
             font-size: 60px;
             line-height: 80px;
           }
           
           .title-48 {
             font-size: 48px;
             line-height: 60px;
           }
           
           .title-32 {
             font-size: 32px;
             line-height: 48px;
           }
           
           .title-30 {
             font-size: 30px;
             line-height: 44px;
           }
           
           .title-25 {
             font-size: 25px;
             line-height: 33px;
           }
           
           .title-24 {
             font-size: 24px;
             line-height: 33px;
           }
           
           .title-22 {
             font-size: 22px;
             line-height: 32px;
           }
           .title-21 {
            font-size: 21px;
            line-height: 31.5px;
          }
           .title-20 {
             font-size: 20px;
             line-height: 30px;
           }
           
           .title-18 {
             font-size: 18px;
             line-height: 28px;
           }
           
           .title-16 {
             font-size: 16px;
             line-height: 20px;
           }
           
           .title-14 {
             font-size: 14px;
             line-height: 20px;
           }
           
           .title-12 {
             font-size: 12px;
             line-height: 18px;
           }

           .mt-180 {
            margin-top: 180px;
           }

           @media only screen and (max-width: 1450px) {
               .aboutProduct{
                   padding: 75px 100px 0 0;
                }
                .aboutProductSec{
                    padding: 80px 0;
                }
                .aboutProductSec-right{
                    padding-left: 20px;
                }
                .aboutProductNavbar-content{
                    padding-left: 150px;
                    margin-top: 120px;                       
                }
                .title-64 {
                    font-size: 52px;
                    line-height: 64px;
                }
            }
            @media only screen and (max-width: 575px) {
                .aboutProduct{
                    padding: 50px 0 0 0;
                }
                .aboutProduct::before{
                    display: none;
                }
                .aboutProductNavbar-content{
                    padding-left: 0;
                }
                .aboutProductSec-left:before{
                    display: none;
                }
                .title-64{
                    font-size: 36px;
                    line-height: 38px;
                }
                .title-36{
                    font-size: 30px;
                    line-height: 
                }
                .aboutProductSec-leftDecrip{
                    padding-right: 0;
                    font-size: 15px;
                    line-height: 23px;
                }
                .aboutProductSec-right{
                    padding: 0;
                }
                .aboutProductSec-rightDescrip{
                    font-size: 15px;
                    line-height: 23px; 
                }
                .aboutProduct .navbar {
                    width: 100%;
                    border: 0;
                }
                .aboutProductList {
                    justify-content: space-between;
                    width: 100%;
                }
                .aboutProductList li:last-child{
                    margin-right: 0;
                }
                .aboutProductList li a{
                    padding: 0 5px;
                    font-size: 15px;
                }
                .navbar .aboutProductList  li a:after{
                    background: var(--vt-c-yellow);
                }
                .aboutProductSec-rightIcoCard1st img{
                    height: 30px;
                }
                .aboutProductSec-rightIcoCard1st .title-18{
                    font-size: 12px;
                    line-height: 18px;
                }
                .aboutProductNavbar-content{
                    margin-top: 40px;
                }
                .aboutProductSec{
                    padding: 40px 0;
                }
                .claimExample{
                    margin: 50px 0;
                }
                .prodContainer{
                    padding: 0;
                }
                .aboutProdMain{
                    background: linear-gradient(180deg, rgba(7,22,57,1) 74%, rgba(255,180,0,1) 74%);
                }
                .caverage-button{
                    position: relative;
                    margin-top: 20px;
                }
                .aboutProductSec-leftYellow{
                    margin-top: 50px;
                }
                .claimExample  .caverage-button{
                    margin-top: 30px;
                }
                /******/
                /******/
                .aboutProductNavbar{
                    top: 20px;
                }
                .aboutProductNavbar .navbar{
                    padding-inline: 35px;
                    // padding-left: 10px;
                    // padding-right: 10px;
                }
                .aboutProductList li{
                    margin-right: 10px;
                }
                .container{
                    padding-left: 30px;
                    padding-right: 30px;
                }
                .title-24{
                    font-size: 15px;
                    line-height: 22px;
                }
                .title-20{
                    font-size: 15px;
                    line-height: 22px;
                    font-weight: 400;
                }
                .title-21 {
                    font-size: 15px;
                    line-height: 22px;
                    font-weight: 400;
                  }
                .title-18{
                    font-size: 12px;
                    line-height: 18px;
                    font-weight: 400;
                }
                .title-15 {
                    font-size: 12px;
                    line-height: 18px;
                }
                .aboutProductList li a.active::after {
                    bottom: -8px;
                }
                 .aboutProductNavbar-content{
                    margin-top: 25px;
                }
                .aboutProductSec-leftDecrip{
                    margin-top: 10px;
                }
                .list-group-item{
                    font-size: 12px;
                    line-height: 18px;
                }
                .aboutProductSec-yellow{
                    margin-top: 0;
                }
                .productStartup .prodContainer {
                    margin-top: 64px;
                }
                .productStartup .prodContainer > .row{
                    text-align: left !important;
                }
                .claimExample .title-24{
                    font-size: 18px;
                    line-height: 27px;
                }
                .caverage-button-prev2,
                .caverage-button-next2{
                    margin-bottom: 0;   
                }

                /*******
                 * new
                *******/
                .productStartup-card{
                    margin-bottom: 20px;
                    padding: 0px;
               }
               .productStartup-bottom{
                margin-bottom: 150px;
                }
                .productStartup .commnHeading{
                    margin-top: 35px;
                }
                .productStartup-divider{
                    height: 1px;
                    margin-bottom: 25px;
                }
                .productStartup .title-36{
                    font-size: 21px;
                    line-height: 29px;
                    margin-bottom: -10px !important;
                }
                .claimSlider h4{
                    font-size: 21px !important;
                    line-height: 29px !important;
                }
                .claimSlider h5{
                    font-size: 15px !important;
                    line-height: 21px !important;
                }
                .aboutProductSec-yellow {
                    padding-bottom: 0px;
                }
                .aboutProductSec-yellow{
                    padding-bottom: 50px !important;
                }
                .productStartup-card h4{
                    font-weight: 600
                }
            }
            @media only screen and (min-width: 1450px) {
                .productStartup-listSec{
                    max-width: 1200px;
                    margin: auto;
                }
                .aboutProduct{
                    padding: 75px 0px 0 0;
                }
            }
            @media only screen and (max-width: 370px) {
                .aboutProductNavbar{
                    top: 0px
                }
                .aboutProdMain{
                    background: linear-gradient(180deg, rgba(7,22,57,1) 73%, rgba(255,180,0,1) 73%);
                }
            }
            @media only screen and (min-width: 1360px) and (max-width: 1370px){
                .aboutProdMain{
                    background: rgb(7,22,57);
                    background: linear-gradient(180deg, rgba(7,22,57,1) 72%, rgba(255,180,0,1) 72%);
                }
            }
            @media (min-width: 1300px){
                
                .aboutProdMain .container {
                    max-width: 1170px !important;
                  }
            }
            @media (min-width: 1399px){
                .container {
                  max-width: 1280px !important;
                }
                .aboutProdMain .container {
                    max-width: 1280px !important;
                  }
            }
            @media (min-width:1600px) {
                .container {
                  max-width: 1420px !important;
                }
                .aboutProdMain .container {
                    max-width: 1420px !important;
                  }
            }
            @media (min-width:1650px) {
                .container {
                  max-width: 1500px !important;
                }
                .aboutProdMain .container {
                    max-width: 1500px !important;
                  }
            }
            }

     `}
            </style>
        </>
    )
}
