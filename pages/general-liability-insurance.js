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

export default function GeneralLiability_Insurance() {
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
                <title>General Liability Insurance | BimaKavach Insurance for General Liability</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="General Liability Insurance"
                        description="General Liability Insurance offers the most comprehensive liability coverage for your business. It protects against various liability claims for bodily injury, property damage, personal and advertising injuries. These claims could arise from your operations, your premises, your products, or your services.
                        It is also commonly referred to as Commercial General Liability (CGL) policy."
                        insuranceWorth="50 Lakhs"
                        insuranceAmount="5,000"
                        customClass="gnrlBnr"
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
                                        <div className='title-28 font-black font-weight-700 text-black'>General Liability Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Imagine you own a store, and a customer slips and falls, or your product somehow causes harm to a user - the costs of legal defense and potential settlements could be financially devastating. But with a CGL policy, you are protected against these risks. It can pay for immediate medical expenses in such cases, providing quick relief and potentially mitigating a larger claim. <span className='d-none d-lg-block'></span>It also covers personal and advertising injuries. This means if your business unintentionally infringes on someone else's copyright or is accused of libel or slander during advertising, your CGL policy has got you covered. <span className='d-none d-lg-block'></span>Because of its comprehensive nature, General Liability Insurance has your back. Without insurance, a single claim can be financially devastating to your business. But with the right CGL policy, you can focus on running your business and serving your customers, secure in the knowledge that you're protected against many of the risks you face every day.</p>
                                    </div>
                                    <div className={`mt-4 mt-xl-5 ${productStyle.tabChecklist}`}>
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary mb-4'>Features of General Liability Insurance</div>
                                        <Row className='g-3 g-lg-5'>
                                            <Col lg={4}>
                                                <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                    <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                        <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Works on Occurence Basis</h3>
                                                        <p className='title-18 font-weight-500 text-black m-0'>Claims can be made even after a policy expires given that the incident happened within the policy’s active period.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                    <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                        <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Start Date</h3>
                                                        <p className='title-18 font-weight-500 text-black m-0'>Claims cannot be filed for any incidents that occured prior to the date when the coverage of the policy begins.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                    <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                        <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Insurance Period</h3>
                                                        <p className='title-18 font-weight-500 text-black m-0'>Any incident that happens between the policy's effective date to the policy's expiration date are covered. Renewal before expiration date is essential to maintain coverage.</p>
                                                    </div>
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
                                        <div className='title-28 font-black font-weight-700 text-black'>General Liability Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>No matter what industry you're in or the size of business, having General Liability Insurance is a smart move. Because of its comprehensive nature, this insurance policy fits most businesses that have interactions with customers. From retail shops and tech startups to large manufacturers, this policy protects against legal and financial issues from third-party claims.</p>
                                    </div>
                                    <div className={`mt-4 mt-xl-5 ${productStyle.tabChecklist}`}>
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary mb-4 mb-xl-5'>General Liability insurance is necessary for various kinds of businesses:</div>
                                        <Row>
                                            <Col xl={10} className='mx-auto'>
                                                <Row className="g-4">
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/storeIcon.svg' width="80" height="80" alt="Retail store owners" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Retail store owners</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/cafesIcon.svg' width="80" height="80" alt="Restaurants and cafes" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Restaurants and cafes</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/constructionIcon.svg' width="80" height="80" alt="Contractors and construction companies" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Contractors and construction companies</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/yogaIcon.svg' width="80" height="80" alt="Fitness centers like gyms, yoga studios" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Fitness centers like gyms, yoga studios</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/cleanIcon.svg' width="80" height="80" alt="Cleaning services" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Cleaning services</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/planningIcon.svg' width="80" height="80" alt="Event planning companies" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Event planning companies</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/techStartupsIcon.svg' width="80" height="80" alt="Tech startups" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Tech startups</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/distributorsIcon.svg' width="80" height="80" alt="Manufacturers and distributors" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Manufacturers and distributors</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/eventPlannersIcon.svg' width="80" height="80" alt="Event planners" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Event planners</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/providersIcon.svg' width="80" height="80" alt="Professional service providers" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Professional service providers (consultants, lawyers, accountants)</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>General Liability Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>We all know that accidents can happen, even when you're doing everything right. In fact, 43% of small business owners have reported being threatened with or involved in a civil lawsuit. That's when General Liability Insurance becomes your go-to solution.It takes care of legal defense costs, settlements, and judgments that might come up from third-party claims, helping to keep your business secure. And it doesn't stop there; it also covers personal and advertising injury claims, ensuring your reputation stays intact. With General Liability Insurance, you can breathe easier knowing your business has a strong safety net in place for unexpected situations.</p>
                                    </div>
                                </Container>

                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>A General Liability Insurance policy addresses claims related to</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='gx-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/operationalAccidentsIcon.svg' width="80" height="80" alt="perational accidents" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Operational accidents</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It covers legal fees, settlements, or judgment costs for accidents, injuries, and damages arising from your business operations, products, or services.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/propertyDamageIcon.svg' width="80" height="80" alt="Third-party property damage" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Third-party property damage</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It safeguards your business in instances where your company or employees cause damage to a third party's property, whether through direct actions or negligence.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/bodilyInjuryIcon.svg' width="80" height="80" alt="Bodily injury" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Bodily injury</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It protects your business from claims related to bodily injuries resulting from accidents on your premises or due to your business operations</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/injuryIcon.svg' width="80" height="80" alt="Personal and advertising injury" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Personal and advertising injury</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It covers claims involving defamation, libel, slander, copyright infringement, or invasion of privacy associated with your business activities, including advertising efforts that may cause harm to others.</p>
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
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>General Liability Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>CGL insurance offers many benefits. Some of the major coverages in the insurance policy are given below -</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Legal Representation Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>These include defense expenses for providing documentation or information to investigators concerning incidents, property damage, bodily injury, or personal and advertising injury claims.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Public Relations Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It reimburses expenses for managing and mitigating any negative impact on your company's reputation due to covered claims.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Court Attendance Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It offers protection for reasonable costs and expenses incurred by attending court proceedings, hearings, trials, and depositions related to the defense of covered claims.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Crisis Communication Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It covers costs for hiring public relations or crisis management firms to advise on public communication strategies related to incidents, lawsuits, or allegations covered under the General Liability Insurance policy.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>CGL insurance offers many exclusions. Some of the major exclusions in the insurance policy are given below -</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Injuries to Employees</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If an employee is injured on the job, General Liability Insurance doesn't cover it. Instead, Workers' Compensation Insurance provides the necessary protection in these cases.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Professional Mistakes or Negligence</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>General Liability Insurance doesn't cover errors or omissions made by professionals in their line of work. For that, you'll need Professional Liability Insurance, also known as Errors and Omissions Insurance.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Damages to Business Property</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If your own business property gets damaged, General Liability Insurance won't provide coverage. You'll need Commercial Property Insurance to protect your assets in this situation.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Intentional or Fraudulent Acts</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Claims arising from deliberate or dishonest actions by you or your employees are not covered by General Liability Insurance. These types of situations are not protected under this policy.</div>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>General Liability Claims Examples</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={`tabContainer my-4 my-lg-5 ${productStyle.inciTab}`}>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all active">Incident 1</span>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all">Incident 2</span>
                                </div>
                                <div className={`pt-1 overflow-hidden ${productStyle.inciTabPanel}`}>
                                    <div data-incitab className={`${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Slip and Fall at Retail Store</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>A customer slipped on a wet floor in a store and got injured, needing medical treatment. This has caused bodily injury from an accident on the business premises.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insurer covered medical expenses and legal defense costs, saving the store owner from a big financial hit.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/sample.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Copyright Infringement in Advertising</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>A marketing agency used copyrighted images in a client's ad campaign without permission, leading to a lawsuit from the copyright holder.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insurer covered the legal defense costs and settlement, keeping the agency from going under financially.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/sample.png' />
                                            </Col>
                                        </Row>
                                    </div>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About General Liability Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What is the difference between Commercial General Liability and Commercial Umbrella Inusance?"
                                content="Commercial General Liability (CGL) insurance covers liability claims related to bodily injury, property damage, and personal and advertising injury. On the other hand, Commercial Umbrella Insurance provides excess liability coverage beyond the limits of primary insurance policies, such as CGL or professional liability insurance. For instance, if a business faces a liability claim that exceeds its CGL policy limits, an umbrella policy can offer additional coverage to help cover the costs of the claim."
                            />
                            <Accordion
                                title="What is General Liability Insurance for contractors?"
                                content="General Liability Insurance for contractors protects contractors and their businesses from financial losses due to liability claims. This insurance typically covers claims for bodily injury, property damage, and personal and advertising injury. It can also cover legal defense costs and any damages awarded to the claimant."
                            />
                            <Accordion
                                title="Does General Liability Insurance protect my store, office, or physical location?"
                                content="Yes. General Liability Insurance covers claims arising from third-party bodily injury or property damage occurring on your business premises. For example, if a customer slips and falls in your store, your General Liability Insurance may cover their medical expenses and any damages they may seek as a result of the injury."
                            />
                            <Accordion
                                title="What protection does General Liability Insurance provide against social media risks?"
                                content="General Liability Insurance can cover advertising injury claims, including certain types of claims related to social media use. For instance, if your business faces a libel or slander claim due to a social media post, your General Liability Insurance may cover legal defense costs and any damages awarded. Some policies may also offer additional coverage for claims related to hacked social media accounts or leaked personal information through social media channels."
                            />
                            <Accordion
                                title="How much General Liability Insurance do I need?"
                                content="The amount of General Liability Insurance you need depends on various factors, such as your business size, type, location, and the level of risk you're willing to assume. Consider these factors when calculating the insurance coverage you need."
                            />
                            <Accordion
                                title="Can I customize my Commercial General Liability Insurance policy?"
                                content="Yes, you can tailor your Commercial General Liability (CGL) Insurance policy to suit your specific business needs and risk profile. Common customizations include increasing policy limits, adding endorsements, removing exclusions, and adding additional insureds."
                            />
                            <Accordion
                                title="What happens if I have a claim that exceeds my Commercial General Liability Insurance coverage?"
                                content="If a claim exceeds your Commercial General Liability (CGL) Insurance coverage, you may need to pay the remaining amount out of pocket. This amount, called the 'coverage gap,' is not covered by your policy."
                            />
                            <Accordion
                                title="Does Commercial General Liability Insurance cover damages to my property?"
                                content="No, Commercial General Liability (CGL) Insurance doesn't cover damages to your property. CGL insurance protects your business from liability claims for bodily injury or property damage caused by you or your employees to others."
                            />
                            <Accordion
                                title="Does Commercial General Liability Insurance cover customer or client injuries?"
                                content="Yes, Commercial General Liability (CGL) Insurance covers bodily injury to customers or clients occurring on your business premises or as a result of your business operations. It also covers bodily injury caused by your products or services."
                            />
                            <Accordion
                                title="Does Commercial General Liability Insurance cover damages from my advertising?"
                                content="Yes, Commercial General Liability (CGL) Insurance covers damages resulting from your advertising. It includes coverage for personal and advertising injury, which refers to harm caused by offenses such as libel, slander, or copyright infringement in your advertising."
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
