import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
// import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css'; // import the styles
import gsap from 'gsap';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import { Link, animateScroll as scroll } from "react-scroll";

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import ProductBanner from '../component/Product/ProductBanner'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import WhatsApp from '../component/Icons/WhatsApp'
import IndustryBlock from '../component/IndustryBlock'
import ProductSchedule from '../component/Product/ProductSchedule'
import BestBacked from '../component/Product/BestBacked'
import HowGetStarted from '../component/Home/HowGetStarted'
import Accordion from '../component/Accordion'

import form from '@/assets/css/form.module.css'
import productStyle from '@/assets/css/product.module.css'

export default function DAndO_Insurance() {
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
    useEffect(() => {
        const btns = document.querySelectorAll('#tabBtn');
        const tabs = document.querySelectorAll('[data-tab]');

        btns.forEach((btn, btnIndex, btnArr) => {
            btn.addEventListener('click', function () {
                tabs.forEach((tab, tabIndex) => {
                    if (btnIndex === tabIndex) {
                        if (!tab.classList.contains('hidden')) {
                            return;
                        } else {
                            tab.classList.remove('hidden');
                            gsap.from(tab, { opacity: 0, scale: 0.95 });
                        }
                    } else {
                        tab.classList.add('hidden');
                    }
                });

                btnArr.forEach((b, bi) => {
                    if (bi === btnIndex) {
                        b.classList.add('active');
                    } else {
                        b.classList.remove('active');
                    }
                });
            });
        });
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll('#inciTabBtn');
        const tabs = document.querySelectorAll('[data-incitab]');

        btns.forEach((btn, btnIndex, btnArr) => {
            btn.addEventListener('click', function () {
                tabs.forEach((tab, tabIndex) => {
                    if (btnIndex === tabIndex) {
                        if (!tab.classList.contains('hidden')) {
                            return;
                        } else {
                            tab.classList.remove('hidden');
                            gsap.from(tab, { opacity: 0, scale: 0.95 });
                        }
                    } else {
                        tab.classList.add('hidden');
                    }
                });

                btnArr.forEach((b, bi) => {
                    if (bi === btnIndex) {
                        b.classList.add('active');
                    } else {
                        b.classList.remove('active');
                    }
                });
            });
        });
    }, []);


    /**** accordion ***/

    useEffect(() => {
        const btns = document.querySelectorAll('#startupTabBtn');
        const tabs = document.querySelectorAll('[data-startup]');

        btns.forEach((btn, btnIndex, btnArr) => {
            btn.addEventListener('click', function () {
                tabs.forEach((tab, tabIndex) => {
                    if (btnIndex === tabIndex) {
                        if (!tab.classList.contains('hidden')) {
                            return;
                        } else {
                            tab.classList.remove('hidden');
                            gsap.from(tab, { opacity: 0, scale: 0.95 });
                        }
                    } else {
                        tab.classList.add('hidden');
                    }
                });

                btnArr.forEach((b, bi) => {
                    if (bi === btnIndex) {
                        b.classList.add('active');
                    } else {
                        b.classList.remove('active');
                    }
                });
            });
        });
    }, []);


    const [openIndex, setOpenIndex] = useState(null);

    // ------ Acrodion -------

    // ------ Acrodion End-------
    // const Accordion = [
    //     { title: "Simple1", content: "Answer a few simple questions to get instant recommendations.", btnText: 'Next: Digital' },
    //     { title: "Simple2", content: "22Answer a few simple questions to get instant recommendations.", btnText: 'Next: Digital'},
    //     { title: "Simple3", content: "33Answer a few simple questions to get instant recommendations.", btnText: 'Next: Digital' },
    // ]

    const ProductList = [
        { id: "1", list: "What" },
        { id: "2", list: "Who" },
        { id: "3", list: "Why" },
        {
            id: "4", list: "Coverages & Exclusions",
            svg: "/icons/start.svg",
            svgActive: "/icons/starYellow.svg",
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
                // navbarExample2Ref.current.classList.add('nav-yellow');
            } else {
                // navbarExample2Ref.current.classList.remove('nav-yellow');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup event listener when component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/directors_and_officers_form');
    };
    return (
        <>
            <Head>
                <title>D&O Insurance | BimaKavach Insurance for Directors and Officers</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Directors & Officers Liability Insurance"
                        description="Good insurance decisions for C-Suite Executives begin with an understanding of D&O insurance and what it covers."
                        insuranceWorth="50 Lakhs"
                        insuranceAmount="7,000"
                        customClass="dAndoBnr"
                    >
                        <div className={`${form.commonForm}`}>
                            <Form>
                                <Form.Group className="mb-4">
                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="Your Company Name" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control className={`${form.formInput}`} type="number" placeholder="Your Phone Number" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control className={`${form.formInput}`} type="email" placeholder="Your Work Email Address" />
                                </Form.Group>
                                <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                    <Button variant="primary" className='btnCommon yellowBtn' type="button">
                                        <span className='me-2'>Buy Now</span>
                                        <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </ProductBanner>
                </div>
                {/* product banner end */}

                {/* product main start */}
                <div className={`${productStyle.ProdMain}`}>
                    <div className={`${productStyle.ProductNavbar}`}>
                        <Container>
                            <nav ref={navbarExample2Ref} className={`bg-white ${productStyle.navbar}`}>
                                <ul className={`nav nav-pills ProductList ${productStyle.ProductList}`}>
                                    {ProductList.map((item) => {
                                        return (<li key={item.id} className={`nav-item ${activeC == item.id ? "activeList" : ""}`} onClick={() => activeList(item.id)}>
                                            <Link
                                                activeClass={`active ${productStyle.active}`}
                                                className='nav-link text-blueGray'
                                                to={`scrollspyHeading${item.id}`}
                                                spy={true}
                                                smooth={true}
                                                offset={-350}
                                                duration={500}
                                                id={item?.uId && item?.uId}
                                            >
                                                {item.svg
                                                    ?
                                                    <>
                                                        <img className={`me-2 ${productStyle.svg}`} src={item.svg} />
                                                        <img className={`me-2 ${productStyle.svgActive}`} src={item.svgActive} />
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
                        </Container>
                    </div>
                    <div className={`${productStyle.ProductNavbarContent} ${productStyle.ProductTab}`}>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                            <div id="scrollspyHeading1" className={`pt-0 ${productStyle.tabWhat}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>What is</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Directors & Officers Liability Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>A Director and Officers (D&O) policy protects directors, board members, and other individuals in management and supervisory positions from possible legal liability if they are indicted for decisions made to run a business. <span className='d-none d-lg-block'></span>This type of insurance protects the personal assets of the directors and officers along with their spouses and compensates them for any settlements or legal fees they incur as a result of lawsuits.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>The 3 Categories of D&O Insurance</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-3 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/sideA.svg' width="80" height="80" alt="Side A" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>1. Side A</h3>
                                                            <div className='title-22 font-weight-600 text-black mb-3'>Direct Indemnification</div>
                                                            <p className='title-18 font-weight-500 text-black m-0'>The D&O policy offers liability cover for company managers, officials, and directors to protect them from claims which may arise from the decisions and actions taken within the scope of their regular managerial duties.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/sideB.svg' width="80" height="80" alt="Side B" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>2. Side B</h3>
                                                            <div className='title-22 font-weight-600 text-black mb-3'>Company Reimbursement</div>
                                                            <p className='title-18 font-weight-500 text-black m-0'>When a company indemnifies (provides financial protection) its directors or officers for a covered claim under the policy, Side B Coverage ensures that the company is reimbursed for the expenses they've incurred during the process. In essence, it's an insurance policy that protects the company's financial interests by reimbursing them after they've supported their insured individuals in a legal matter.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/sideC.svg' width="80" height="80" alt="Side C" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>3. Side C</h3>
                                                            <div className='title-22 font-weight-600 text-black mb-3'>Coverage for Entity</div>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It is designed to protect the company as a whole from certain legal claims, regardless of whether the directors or officers are directly involved in the underlying dispute. This coverage typically addresses two main areas: Employment Disputes & Security Related Issues.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </div>
                                <Container>
                                    <div className={`mt-4 mt-xl-5 ${productStyle.tabChecklist}`}>
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Advantages of D&O Insurance</div>
                                        <Row className='g-lg-5'>
                                            <Col lg={6}>
                                                <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Offers protection to Directors & Officers</p>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                            <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Saves personal assets from lawsuits</p>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Important for both large and small-scale businesses.</p>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Helps attract & retain the best talent</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading2" className={`${productStyle.whoNeed}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Who Needs</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Directors & Officers Liability Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Any private or public company with corporate boards or advisory committees should have a D&O policy to protect their C-Suite executives. Today, company owners are vulnerable to lawsuits from regulators, shareholders, vendors, customers, competitors, employees, and government bodies. <span className='d-none d-lg-block'></span>It's one of those "must-have" policies for every company because it protects them in the event of an expensive lawsuit.</p>
                                    </div>
                                    <div className={`mt-4 mt-xl-5 ${productStyle.tabChecklist}`}>
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>What can influence the reasonable level of D&O coverage?</div>
                                        <Row>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Risk appetite</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Financial background</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Company size</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Past lawsuit history</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.tabChecklistCard}`}>
                                                    <img src='/icons/check.svg' />
                                                    <p className={`ms-3 mb-0 text-black font-weight-600 ${productStyle.tabChecklistCardTitle}`}>Business Age</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Directors & Officers Liability Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>A director or officer might face many types of financial risks as part of their job. D&O insurance provides an easy way to protect the interest of their senior officers and board members. The policy protects them from the following potential problems -</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>Allegations by other stakeholders or shareholders</li>
                                            <li>Allegations of sexual harassment, discrimination, and other employment violations</li>
                                            <li>Accounting mistakes & exposure to mergers & acquisitions</li>
                                            <li>Regulatory investigations initiated by the government, a professional, or a statutory body</li>
                                            <li>Corporate governance lapses</li>
                                        </ul>
                                    </div>
                                </Container>

                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Who can Sue the Directors or Officers of the organisation?</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-3 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`mb-3 mb-lg-4 ${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/suppliersIcon.svg' width="80" height="80" alt="Suppliers" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mt-2 mb-0'>Suppliers</h3>
                                                        </div>
                                                        <div className={`mb-3 mb-lg-4 ${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/employeesIcon.svg' width="80" height="80" alt="Employees" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mt-2 mb-0'>Employees</h3>
                                                        </div>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/competitorsIcon.svg' width="80" height="80" alt="Competitors" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mt-2 mb-0'>Competitors</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`mb-3 mb-lg-4 ${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/regulatoryBodiesIcon.svg' width="80" height="80" alt="Regulatory Bodie" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mt-2 mb-0'>Regulatory Bodies</h3>
                                                        </div>
                                                        <div className={`mb-3 mb-lg-4 ${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/clientsIcon.svg' width="80" height="80" alt="Clients" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mt-2 mb-0'>Clients</h3>
                                                        </div>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/shareholdersIcon.svg' width="80" height="80" alt="Shareholders" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mt-2 mb-0'>Shareholders</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`border-0 pb-0 ${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/stakeholdersIcon.svg' width="80" height="80" alt="Other Stakeholder" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mt-2 mb-0'>Other Stakeholders</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading4" className={`pt-0 ${productStyle.coverage}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-lg-4'>
                                            <span className='d-none d-lg-inline-block me-2'>
                                                <svg width="40" height="40" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.53333 1.03333C8.53333 0.738781 8.29455 0.5 8 0.5C7.70545 0.5 7.46667 0.738781 7.46667 1.03333V7.2124L4.22877 3.97451C4.02049 3.76623 3.68281 3.76623 3.47453 3.97451C3.26625 4.18279 3.26625 4.52047 3.47453 4.72875L6.71244 7.96667H0.533333C0.238782 7.96667 0 8.20545 0 8.5C0 8.79455 0.238782 9.03333 0.533333 9.03333H6.71244L3.47453 12.2712C3.26625 12.4795 3.26625 12.8172 3.47453 13.0255C3.68281 13.2338 4.0205 13.2338 4.22878 13.0255L7.46667 9.7876V15.9667C7.46667 16.2612 7.70545 16.5 8 16.5C8.29455 16.5 8.53333 16.2612 8.53333 15.9667V9.78756L11.7712 13.0255C11.9795 13.2338 12.3172 13.2338 12.5255 13.0255C12.7338 12.8172 12.7338 12.4795 12.5255 12.2712L9.2876 9.03333H15.4667C15.7612 9.03333 16 8.79455 16 8.5C16 8.20545 15.7612 7.96667 15.4667 7.96667H9.2876L12.5255 4.72877C12.7338 4.52049 12.7338 4.1828 12.5255 3.97452C12.3172 3.76624 11.9795 3.76624 11.7712 3.97452L8.53333 7.21244V1.03333Z" fill="#ffb400" />
                                                </svg>
                                            </span>
                                            <span className='d-lg-none me-1'>
                                                <svg width="32" height="32" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.53333 1.03333C8.53333 0.738781 8.29455 0.5 8 0.5C7.70545 0.5 7.46667 0.738781 7.46667 1.03333V7.2124L4.22877 3.97451C4.02049 3.76623 3.68281 3.76623 3.47453 3.97451C3.26625 4.18279 3.26625 4.52047 3.47453 4.72875L6.71244 7.96667H0.533333C0.238782 7.96667 0 8.20545 0 8.5C0 8.79455 0.238782 9.03333 0.533333 9.03333H6.71244L3.47453 12.2712C3.26625 12.4795 3.26625 12.8172 3.47453 13.0255C3.68281 13.2338 4.0205 13.2338 4.22878 13.0255L7.46667 9.7876V15.9667C7.46667 16.2612 7.70545 16.5 8 16.5C8.29455 16.5 8.53333 16.2612 8.53333 15.9667V9.78756L11.7712 13.0255C11.9795 13.2338 12.3172 13.2338 12.5255 13.0255C12.7338 12.8172 12.7338 12.4795 12.5255 12.2712L9.2876 9.03333H15.4667C15.7612 9.03333 16 8.79455 16 8.5C16 8.20545 15.7612 7.96667 15.4667 7.96667H9.2876L12.5255 4.72877C12.7338 4.52049 12.7338 4.1828 12.5255 3.97452C12.3172 3.76624 11.9795 3.76624 11.7712 3.97452L8.53333 7.21244V1.03333Z" fill="#ffb400" />
                                                </svg>
                                            </span>
                                            Coverages & Exclusions in
                                        </h3>
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Directors & Officers Liability Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>D&O insurance offers many benefits. Some of the major coverages in the insurance policy are given below -</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Bail and Bond Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>D&O policy covers the costs of securing bail and bond for directors and officers, which may be in connection with any criminal proceedings arising from their duties as directors or officers of the company.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Legal Representation Cover</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It includes defense costs incurred by an insured on account of the attendance and/or provision of documents or information to any investigation, as required by the investigator.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Public Relations cover</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This cover reimburses the costs associated with managing and mitigating the negative impact on the company's reputation, arising out of duties performed by the directors and officers on behalf of the company.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Extradition cover</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage protects a company if a director or officer is arrested or detained in a foreign country and the company needs to pay for the costs associated with his extradition back to the home country.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Court Attendance Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage provides protection from reasonable costs and expenses incurred by the insured due to required attendance at court proceedings, hearings, trials, and depositions related to the defense of a claim.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Kidnap and Ransom Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage provides relief from the costs associated with any event or connected series of events of kidnapping, seizing, or detaining an insured person by force or fraud, for the purpose of demanding a ransom.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Self-reporting Expenses Cover</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage helps to protect company directors and officers from the financial burden of expenses associated with self-reporting a potential violation or claim to the relevant Governmental, judiciary, or regulatory authorities.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Investigation Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It covers the reasonable fees, costs, and expenses incurred (with the insurer’s prior written consent) by or on behalf of an insured person, in relation to preparing for and attending an investigation.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Crisis Communication Cover</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It covers the reasonable costs, charges, fees, and expenses incurred by an organization, in attaining the services of any public relations firm or crisis management firm to advise the organization for managing public communication.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Dedicated additional limit for Non-Executive Directors and Officers</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>With this add-on cover, you get an extra layer of protection that is added to the overall coverage limit for non-executive directors and officers of a company.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Some of the major exclusions in the insurance policy are given below -</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>OFAC Sanction Clause</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>OFAC stands for Office of Foreign Assets Control and is a government agency of the US Treasury Department that enforces economic and trade sanctions against countries, organizations, and individuals. If a claim is made against a director or officer for something related to OFAC sanctions, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Product Liability</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The clause excludes any claims or losses that are related to product liability. Product liability refers to the legal responsibility of manufacturers, distributors, and sellers for any harm caused by a product they have produced or sold. If a claim is made against a director or officer for something related to product liability, they will not be covered.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>ERISA</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The Employee Retirement Income Security Act (ERISA) of 1974 establishes minimum standards for pension plans in the private industry under U.S. federal tax and labor laws. It regulates employee benefit plans, including retirement plans, health plans, and other types of benefits. <span className='d-none d-lg-block'></span>If a claim is made against a director or officer for something related to ERISA, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Opioids and Narcotics</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Opioids are a class of drugs that are used to relieve pain and include drugs such as fentanyl, oxycodone, and morphine. Narcotics are a class of drugs that are used to relieve pain and include drugs such as cocaine and heroin. This means that if a claim is made against a director or officer for losses arising because of their decisions related to opioids or narcotics, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Asbestos</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Asbestos is a naturally occurring mineral that has been used in various products, including construction materials and has been linked to various diseases such as lung cancer, mesothelioma, and asbestosis. If a claim is made for something related to asbestos, they will not be covered.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Financial Insolvency</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Financial insolvency refers to the inability of a company or individual to pay their debts as they come due. This means that if a claim is made against a director or officer for something related to the financial insolvency of the company, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>E-smoking Device</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>E-smoking Device Exclusions in Directors & Officers Insurance means exclusion for any claims or losses that are related to electronic smoking devices or e-cigarettes. If a claim is made for something related to electronic smoking devices, they will not be covered.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>War</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If a claim is made against a director or officer for something that happened as a result of war, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Future Offering of Securities (IPO)</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It refers to excluding any claims or losses that are related to initial public offerings (IPOs) of securities. This means that if a claim is made against a director or officer for something related to an IPO, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>No Cover for Auditors Qualification, Emphasis Matter, a Contingent Liability, if any</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If any claims or losses arise against the Director and Officer and the same is related to auditors' qualifications, emphasis matters, or contingent liabilities, they will not be covered.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Bribes and Commission</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Directors & Officers policy excludes claims and losses arising from bribes and commissions.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Money Laundering</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Money laundering is a process that criminals use to hide the illegal source of their income. If a claim is made against a director or officer for something related to money laundering, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
                {/* product main end */}

                {/* --------claim example start---------- */}
                <div className={`${productStyle.claimSec}`}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className={`${productStyle.ProductSecLeft}`}>
                                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title12 text-uppercase font-weight-600'>Some Examples</div>
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Directors & Officers Claims Examples</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={`tabContainer my-4 my-lg-5 ${productStyle.inciTab}`}>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all active">Incident 1</span>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all">Incident 2</span>
                                    {/*<span id='inciTabBtn' className="tabLink title-22 transition-all">Incident 3</span>*/}
                                </div>
                                <div className={`pt-1 overflow-hidden ${productStyle.inciTabPanel}`}>
                                    <div data-incitab className={`${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Employees claim unpaid contract</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Multiple employees initiated legal proceedings against the subsidiary of a policyholder in China claiming unpaid contractual benefits and economic compensation.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The litigation was in China and the Insurer appointed a law firm in China for translation and better defense strategy. The outcome of the litigation was favourable and only the defense cost was incurred which was reimbursed under the policy.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/dAndO_incident1.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>FIR Filed for Alleged Unfair Practices</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>FIR filed by ex-employee against 7 directors for cheating and unfair trade practices. The matter is in litigation before the Trial Court.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The law firm handling the litigation is appointed by the insurer to manage the defense of directors and all the defense costs are being borne by the insurer.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='incident/dAndO_incident2.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    {/*<div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Employees File Legal Proceedings in China</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Multiple employees initiated legal proceedings against the subsidiary of a policyholder in China claiming unpaid contractual benefits and economic compensation.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The litigation was in China and the Insurer appointed a law firm in China for translation and better defense strategy. The outcome of the litigation was favourable and only the defense cost was incurred which was reimbursed under the policy.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/dAndO_incident3.png' />
                                            </Col>
                                        </Row>
                                    </div>*/}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* --------claim example end---------- */}

                {/* --------FAQ start---------- */}
                <div className={`${productStyle.ProdFAQ}`}>
                    <Container>
                        <Row>
                            <Col md={8} lg={6}>
                                <div className={`${productStyle.ProductSecLeft}`}>
                                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title12 text-uppercase font-weight-600'>Frequently Answered Questions</div>
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Directors & Officers Liability Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What is the jurisdiction/territory of the claim?"
                                content="The jurisdiction limit of a claim indicates that the policy will cover only the claims lodged in the courts of the listed countries. The territorial limit relates to the location where the act, error, or omission takes place."
                            />
                            <Accordion
                                title="What limits do you need?"
                                content="An insured business can opt for any limit of the D&O liability insurance, depending on its needs, business model, and financial position. Some of the factors that can influence the limit include the size of the business, financial background, time spent in the business, risk appetite, and so on."
                            />
                            <Accordion
                                title="Does D&O insurance cover owners?"
                                content="Yes. The Side B Coverage in D&O insurance provides coverage for losses that the company (or the business owner) incurs as a result of paying for damages and defense costs for claims brought against its directors and officers. Here, the owner/ company is insured and its corporate assets are at risk."
                            />
                            <Accordion
                                title="As a director or officer can you become personally liable for your actions?"
                                content="Yes, as a director or officer of a company, you can become personally liable for your actions if you breach your fiduciary duties. If you breach this duty or engage in any illegal or fraudulent behavior, you may be held personally liable for any resulting damages or losses. In addition, you may be held personally liable for violations of various laws and regulations, such as environmental laws,  securities laws, and antitrust laws."
                            />
                            <Accordion
                                title="Are directors vs directors disputes covered?"
                                content="If one director sues another within the same organization, this is considered an 'insured v. insured' situation, and a D&O policy would typically not cover that dispute. However, there may be certain exceptions and these may vary from one insurance provider to another."
                            />
                            <Accordion
                                title="Are the subsidiary's board covered under the Officers & Directors liability insurance?"
                                content={[<>
                                    <span>Yes. D&O policy automatically protects new subsidiaries of an insured company that are acquired or created during the policy period. The automatic coverage will start with effect from the date of such creation or acquisition except-</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>The new entity is based on or has any of its securities listed on any exchange in the USA</li>
                                        <li>It is a financial institution</li>
                                        <li>Such creation or acquisition increases the total consolidated assets of the principal company by more than 25% (as per the most recent audited, consolidated financial statements)</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Who selects defense counsel for a covered D&O claim?"
                                content="D&O policies typically allow the defendant insureds to choose their preferred defense counsel, subject to the prior consent of the insurer. Insurers, of course, would seek to pay only reasonable and necessary defense costs. Therefore, an insured should select a counsel experienced in the field of law that is related to the concerned litigation and whom the insured trusts."
                            />
                            <Accordion
                                title="Does a small business need liability insurance for Directors and Officers?"
                                content="Yes. Being a small business does not necessarily make a small business immune to potential lawsuits. A costly lawsuit can have a severe impact on the personal fortunes of its employees in a decision-making position. When a potentially damaging lawsuit comes in the way, a small business may not quite have the financial ‘muscle power’ enjoyed by the larger companies to deal with it. This is why, in the case of a small business, protection from D&O insurance becomes even more essential."
                            />
                            <Accordion
                                title="What are the most common D&O claims?"
                                content={[<>
                                    <span>Some of the most common D&O insurance claims include:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Breach of fiduciary duty</li>
                                        <li>Misrepresentation</li>
                                        <li>Insider trading</li>
                                        <li>Failure to comply with laws or regulations</li>
                                        <li>Mismanagement</li>
                                        <li>Securities fraud</li>
                                        <li>Employment practices</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What are directors personally liable for?"
                                content={[<>
                                    <span>Directors can be held personally liable for a variety of actions or omissions in their roles, such as:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li><span className='font-weight-600'>Breach of fiduciary duty:</span><span className='d-block'></span>If the directors fail in their duty to act in the best interests of the company they can be held personally liable for any resulting financial damage.</li>
                                        <li><span className='font-weight-600'>Negligence:</span><span className='d-block'></span> If the directors fail to exercise reasonable care and skill in carrying out their duties, they can be held personally liable for any resulting financial damage.</li>
                                        <li><span className='font-weight-600'>Mismanagement:</span><span className='d-block'></span> Directors are responsible for overseeing the management of the company. If they fail to do so and this results in financial damage, they can be held personally liable.</li>
                                        <li><span className='font-weight-600'>Wrongful acts:</span><span className='d-block'></span> Directors can be held personally liable for any wrongful acts committed in their roles, such as fraud, misrepresentation, or insider trading.</li>
                                        <li><span className='font-weight-600'>Failure to comply with laws or regulations:</span><span className='d-block'></span> Directors are responsible for ensuring that the company complies with all applicable laws and regulations. If they fail to do so, they can be held personally liable for any resulting financial damage.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What is the difference between D&O and management liability?"
                                content={[<>
                                    <span>Certain differences between the two are as follows-</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li><span className='font-weight-600'>Coverage:</span> D&O insurance is specifically designed to protect directors and officers from claims arising from their roles in the company. Management liability insurance, on the other hand, provides broader coverage for claims against the company's management, including claims for employment practices liability, fiduciary liability, and crime.</li>
                                        <li><span className='font-weight-600'>Policy terms:</span> D&O insurance policies are often designed with specific limits for each insured person and may have separate limits for defense costs and indemnification. Management liability policies may have aggregate limits that apply to all insureds and may include sub-limits for specific types of claims.</li>
                                        <li><span className='font-weight-600'>Triggering of Claims:</span> D&O insurance is typically triggered by claims made against the directors and officers during the policy period. On the other hand,  management liability insurance can be triggered by a wider range of events, such as regulatory investigations or employee lawsuits.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Does Directors & Officers' liability insurance covers breach of contract?"
                                content="A breach of a contract (for example, one that is promised by the company to its client) does not fall under the coverage of a D&O policy. For example, if a company has a contract with a client that states that if there is any kind of a breach of contract, the company will be liable for Rs 10 lakh in compensation. If such a breach occurs, the D&O insurance provider is not obligated to pay the compensation amount."
                            />
                            <Accordion
                                title="Can a director of the company be sued for negligence?"
                                content="Yes. If the directors fail to exercise reasonable care and skill in carrying out their duties, they can be held personally liable for any resulting financial damage and can be sued for negligence. Negligence claims against directors can arise from other situations as well such as failure to properly oversee the management of the company, failure to comply with laws or regulations, failure to disclose material information to shareholders, or failure to act in the best interests of the company."
                            />
                            <Accordion
                                title="Who is insured in D&O insurance?"
                                content="The insured person is the individual or business entity that receives financial support after an insurance claim is filed and verified. He is covered under the policy. "
                            />
                        </div>
                    </Container>
                </div>
                {/* --------FAQ end---------- */}

                {/* --------productStartup start---------- */}
                <div className={`${productStyle.productStartup}`}>
                    <Container>
                        <div className={`${productStyle.prodContainer}`}>
                            <div className='commonHeading text-center'>
                                <div className='polyBox border-primary bg-blueLight mb-4 text-primary title12 text-uppercase font-weight-600'>Our Products</div>
                                <h3 className={`title-42 font-secondary font-weight-600 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Business Protection for Startups & SMEs</h3>
                                <h4 className='title-20 text-black font-weight-500 mt-3 mb-0'>Secure the business & stakeholders against lawsuit expenses - Legal + Settlement</h4>
                            </div>
                            <div className={`${productStyle.productStartupListSec}`}>
                                {/*<div className={`tabContainer my-4 my-lg-5 ${productStyle.productStartupTab}`}>
                                    <span id='startupTabBtn' className="tabLink title-22 transition-all active">Liability Insurance</span>
                                    <span id='startupTabBtn' className="tabLink title-22 transition-all">Asset Insurance</span>
                                </div>
                                <div className={`pt-1 overflow-hidden ${productStyle.inciTabPanel}`}>
                                    <div data-startup className={`${productStyle.inciTabPanelBox}`}>
                                        <div className={`${productStyle.productStartupAsset}`}>
                                            <Row className='g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup1.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Directors & Officers Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Venenatis at at magna ut vestibulum odio sed at faucibus. Ultrices facilisis laoreet sed porta id duis sapien et. Enim sem facilisis suscipit.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup2.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Cyber Crime  Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Diam at sit scelerisque nam. Vestibulum nunc gravida sed quisque. Nunc id diam non neque porttitor sed fermentum. Eu justo quis maecenas.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup3.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Crime/Fidelty Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Non enim maecenas purus aliquet tincidunt arcu. Lacus mi ullamcorper bibendum sed risus eget. Orci facilisis sit sodales nibh purus sed habitant.</p>
                                                    </div>
                                                </Col>
                                                <Col lg={2} className='d-none d-lg-inline-block'></Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup4.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Errors & Omissions Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Pulvinar nunc in sed malesuada congue. Dignissim sed aliquet vehicula facilisis natoque in ut. Urna ultrices vivamus quam vitae quam tortor.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup5.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>General Liability Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Morbi velit in quisque commodo enim penatibus. Dui posuere purus duis turpis integer ullamcorper. Arcu dignissim ultrices eu sapien.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup6.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Product Liability Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Lorem ipsum dolor sit amet consectetur. In quam euismod vestibulum in commodo. Massa tellus sit interdum pulvinar. Mus imperdiet scelerisque.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <div className={`${productStyle.productStartupAsset}`}>
                                            <Row className='g-4'>
                                                <Col md={5}>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup7.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Fire Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Venenatis at at magna ut vestibulum odio sed at faucibus. Ultrices facilisis laoreet sed porta id duis sapien et. Enim sem facilisis suscipit.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup8.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Marine Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Diam at sit scelerisque nam. Vestibulum nunc gravida sed quisque. Nunc id diam non neque porttitor sed fermentum. Eu justo quis maecenas.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup9.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Machine Breakdown</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Non enim maecenas purus aliquet tincidunt arcu. Lacus mi ullamcorper bibendum sed risus eget. Orci facilisis sit sodales nibh purus sed habitant.</p>
                                                    </div>
                                                </Col>
                                                <Col md={2}></Col>
                                                <Col md={5}>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup10.png" />
                                                            <h4 className='title-26 font-weight-600 text-primary font-secondary mb-0'>Contractors All Risk</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Ullamcorper elementum interdum pulvinar ut eget elit. Massa nibh eget morbi malesuada massa sed id sodales. Bibendum ipsum et a.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup11.png" />
                                                            <h4 className='title-26 font-weight-600 text-primary font-secondary mb-0'>Erection All Risk</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Morbi velit in quisque commodo enim penatibus. Dui posuere purus duis turpis integer ullamcorper. Arcu dignissim ultrices eu sapien.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>*/}
                                <IndustryBlock />
                                <div className={`${productStyle.productStartupIcon}`}>
                                    <div className='badgeIconCol'>
                                        <img className='badgeIcon' src="/icons/badgeIcon.svg" alt="Simple Digital & Transparent" />
                                        <img className='badgeActiveIcon' src="/icons/badgeActiveIcon.svg" alt="Simple Digital & Transparent" />
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-5 pt-xl-4 ${productStyle.productStartupBottom}`}>
                                <Row>
                                    <Col>
                                        <ProductSchedule />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
                {/* --------productStartup end---------- */}

                <BestBacked />

                <HowGetStarted />

                <div className="d-none d-md-block" style={{ height: "100px" }}></div>
                <div className="d-blok d-md-none" style={{ height: "40px" }}></div>
            </div>
            <Footer />

            <style jsx scope>
                {`
                .title-15 {
                    font-size: 15px;
                    line-height: 22.5px;
                }

                @media only screen and (max-width: 1699px) {
                    .title-42 {
                        font-size: 38px;
                        line-height: 52px;
                    }
                    .title-32 {
                        font-size: 28px;
                        line-height: 36px;
                    }
                    .title-24 {
                        font-size: 20px;
                        line-height: 32px;
                    } 
                }
                @media only screen and (max-width: 992px) {
                    .title-42 {
                        font-size: 28px;
                        line-height: 40px;
                    }
                    .title-36 {
                        font-size: 26px;
                        line-height: 38px;
                    }
                    .title-32 {
                        font-size: 26px;
                        line-height: 32px;
                    }
                    .title-28 {
                        font-size: 22px;
                        line-height: 30px;
                    }
                    .title-26 {
                        font-size: 22px;
                        line-height: 30px;
                    }
                    .title-24 {
                        font-size: 20px;
                        line-height: 26px;
                    }
                    .title-22 {
                        font-size: 18px;
                        line-height: 24px;
                    }
                    .title-20 {
                        font-size: 16px;
                        line-height: 24px;
                    }
                    .title-18 {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            `}
            </style>
        </>
    )
}
