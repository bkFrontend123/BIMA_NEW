import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import {Container, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap';
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
import TalkExpert from '../component/TalkExpert'
import RatingCard from '../component/RatingCard'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import IndustryBlock from '../component/IndustryBlock'
import ProductSchedule from '../component/Product/ProductSchedule'
import BestBacked from '../component/Product/BestBacked'
import HowGetStarted from '../component/Home/HowGetStarted'
import Accordion from '../component/Accordion'

import form from '@/assets/css/form.module.css'
import productStyle from '@/assets/css/product.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'

import productImage from '@/public/productImages/productImg2.png'
import expertImg from '../public/himaniImg.png'

export default function GroupPersonalAccident_Insurance() {
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
        router.push('/group-personal-accident-flow');
    };
    return (
        <>
            <Head>
                <title>Group Personal Accident Insurance | BimaKavach Insurance for Group Personal Accident</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Group Personal Accident Insurance"
                        description="Group personal accident (GPA) insurance offers extensive accident coverage, taking care of all related expenses. This insurance protects employees and their families from financial hardships caused by accidental disabilities or death. If the insured person, unfortunately, passes away due to an accident, their chosen beneficiary receives the full coverage amount. Group personal accident insurance serves as a safety net for the employee and their legatee."
                        insuranceWorth="50 Lakhs"
                        insuranceAmount="7,000"
                        productImgSrc={productImage}
                        form="true"
                        formHeading="GPA Insurance"
                        customClass="grpPrsnlBnr"
                    >
                        <Form>
                            <Form.Group className="floatFormGroup mb-4">
                                <FloatingLabel controlId="companyName" label="Your Company Name">
                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="floatFormGroup mb-4">
                                <FloatingLabel controlId="name" label="Your Name">
                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="&nbsp;" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="floatFormGroup mb-4">
                                <FloatingLabel controlId="phoneNumber" label="Your Phone Number">
                                    <Form.Control className={`${form.formInput}`} type="number" placeholder="&nbsp;" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="floatFormGroup mb-4">
                                <FloatingLabel controlId="workEmail" label="Your Work Email Address">
                                    <Form.Control className={`${form.formInput}`} type="email" placeholder="&nbsp;" />
                                </FloatingLabel>
                            </Form.Group>
                            <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button">
                                    <span className='me-2'>Buy Now</span>
                                    <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                </Button>
                                <div className='d-none d-md-block'>
                                    <TalkExpert
                                        size={`${talkExpert.extraSmall}`}
                                        imgSrc={expertImg}
                                        name="Himani Doshi"
                                        designation="Insurance Expert"
                                    />
                                </div>
                            </div>
                        </Form>
                    </ProductBanner>
                </div>
                {/* product banner end */}

                {/* product rating start */}
                <div className={`${productStyle.productRating}`}>
                    <Container>
                        <div className='d-md-none mb-4'>
                            <TalkExpert
                                background={`${talkExpert.yellow}`}
                                size={`${talkExpert.extraSmall}`}
                                imgSrc={expertImg}
                                name="Himani Doshi"
                                designation="Insurance Expert"
                                customClass={`mt-4 ${talkExpert.tlkExprtMobile}`}
                            />
                        </div>
                        <RatingCard
                            background="true"
                        />
                    </Container>
                </div>
                {/* product rating end */}

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
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>What Is</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Personal Accident Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>A group personal accident policy, also known as GPA Insurance, is a type of insurance that helps protect you and your family financially if you have an accident that causes accidental death or disability. It compensates a policyholder in the event of accidental death, loss of limbs, eyes, permanent partial disability, and permanent total disability. No matter how big or small your group is, you can purchase a customizable group personal accident policy to meet the needs of all group members. It also offers discounts based on the number of members in your group.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Features of Group Personal Accident (GPA)</h3>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>From small to big organizations, everyone can avail of GPA insurance for their employees and board members.</li>
                                            <li>In the event of an accident, it covers medical expenses, hospitalization costs, disability benefits, and death benefits.</li>
                                            <li>If the insured is permanently disabled or dies, it may provide an education fund for their dependent children.</li>
                                            <li>The tenure of these policies is generally one year.</li>
                                        </ul>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading2" className={`${productStyle.whoNeed}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Who Needs</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Personal Accident Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>If you are a registered entity, you should have group personal accident insurance for your employees. Some examples are - companies, associations, educational institutions, government agencies, etc. insurance buying journey simple and straightforward.</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>GPA for Start-ups <span className='d-block'></span>A group personal accident insurance policy can be purchased even for a small team in a start-up. It will help you attract and retain great talent.</li>

                                            <li>GPA for SMEs <span className='d-block'></span>As your company grows, managing insurance and employee benefits becomes more challenging. It will help you provide your employees with great medical coverage.</li>

                                            <li>GPA Large Organizations <span className='d-block'></span>A group personal accident insurance policy for your large organization can be purchased at BimaKavach. Our team of insurance experts offers customized solutions to make your GPA </li>
                                        </ul>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Personal Accident Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Accidents are unfortunate events that can cause a lot of difficulties, especially if the person who supports their family gets hurt. This insurance helps protect against unexpected accidents by giving financial support. It can give a lump sum of money or replace the person's income, which can help pay for medical bills, cover lost wages, or handle other expenses caused by the accident. If you're an employer, providing this insurance shows that you care about your employees' well-being and their financial security. It means you don't have to worry if any of your employees have an accident while working because you have a special insurance plan to help them.</p>
                                    </div>
                                </Container>

                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Group Personal Accident Insurance Benefits</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-3 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Employee financial stability</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>As accidents are unpredictable, you can provide financial stability for your team members by delivering GPA Insurance Policy.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Employee Retention</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>When you provide GPA Insurance to employees, they lead organizations to become responsible market leaders, according to HR leaders.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Maintains employee well-being</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Your team feels belonged when you provide benefits like GPA insurance. Happy minds are fertile minds, after all.</p>
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
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Group Personal Accident Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Here are some incidents covered under the policy</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Transport of mortal remains</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The policy reimburses the cost of transporting mortal remains from the accident site to a hospital, residence, or crematory.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Bone fractures</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A lump sum payment is made for incidents like fractures of the bone. The policy clearly states which broken bones are covered.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Ambulance Charges</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>These cover the expenses associated with the transportation of an injured employee from the accident scene to the hospital or medical facility.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Weekly Benefits</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A company pays weekly compensation if an employee is completely disabled by an accident.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Permanent Total Disability</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If an employee of the insured meets with an accident that causes permanent disability and that continues for one month, then the employee is entitled to compensation from the insurer. This compensation can be up to the sum insured.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Permanent Partial Disability</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>An employee who has become partially disabled due to injury will receive a sum assured usually ranging from 2% to 60% depending on the policy term and conditions.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Educational Benefits</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If the employee suffers a permanent disability or dies unexpectedly, the insurance company pays for the children's education.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Accidental Death</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>When the insured dies in an accident, the insurer pays the sum insured to the nominee.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Usually, group personal accident insurance does not offer coverage in the following cases :</div>
                                                </Col>
                                            </Row>
                                            <ul className={`text-black title-20 ${productStyle.listData}`}>
                                                <li>Natural death</li>
                                                <li>Injuries caused by alcohol or drugs</li>
                                                <li>An act of violating the law</li>
                                                <li>War and nuclear perils</li>
                                                <li>Pregnancy or childbirth</li>
                                                <li>Ionizing radiation or radioactivity</li>
                                            </ul>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Group Personal Accident Insurance Examples</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className='g-4'>
                            <Col lg={7}>
                                <div className='title-32 font-secondary font-weight-600 text-yellow mb-4 mt-3 mt-xxl-4'>Medical Expense Claim due to Accident at Workplace</div>
                                <div className='mb-4'>
                                    <div className='title-18 font-weight-500 text-black m-0'>ABC manufacturing pvt. ltd. is a company with a workforce of 200 employees in Bangalore. The company decided to implement a group personal accident Insurance policy for its employees. Mr. Vasisth, one of the employees of this organization, unfortunately, met with a severe accident at the workplace. It resulted in a partial disability that prevented him from returning to work. Thanks to the group personal accident Insurance policy of this employer, Mr. Vasisth received a lump sum payment as per the policy terms, helping him cover his medical expenses and providing financial support during his recovery and rehabilitation.</div>
                                </div>
                            </Col>
                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                <img src='/sample.png' />
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Group Personal Accident Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="Is GPA Insurance tax deductible?"
                                content="Yes. Under section 80D of the Income Tax Act, taxpayers are qualified for a deduction on the premium paid (up to a certain limit specified annually) for group personal accident insurance plans."
                            />
                            <Accordion
                                title="How are GPA premiums determined?"
                                content={[<>
                                    <span>In group personal accident insurance, premiums are calculated based on several factors that help assess the risk associated with providing coverage to a group of individuals. The following factors are typically considered:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>The number of individuals included in the group</li>
                                        <li>Age distribution of the group members</li>
                                        <li>The nature of the occupation or industry of the group members</li>
                                        <li>Risks associated with their jobs</li>
                                        <li>The chosen coverage limits for the group policy</li>
                                        <li>Additional benefits or riders opted for</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What are the additional benefits of GPA Insurance?"
                                content={[<>
                                    <span>Group personal accident (GPA) policies often offer other benefits beyond the basic coverage for accidental death and bodily injury. Some of these are-</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Accidental disability benefit</li>
                                        <li>Medical expenses reimbursement (such as hospitalization costs, surgical expenses, and medication costs)</li>
                                        <li>Temporary total disability benefit</li>
                                        <li>Permanent total disability benefit</li>
                                        <li>Funeral expenses coverage</li>
                                        <li>Repatriation benefit</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Do GPA members need to undergo pre-policy medical exams?"
                                content="Generally, group personal accident (GPA) policies do not require individual members to undergo pre-policy medical checkups. They often have simplified underwriting processes and do not involve extensive medical evaluations for each insured member. However, it's important to note that if an individual member has a pre-existing medical condition or a specific health concern, it should be disclosed during the application process."
                            />
                            <Accordion
                                title="Is GPA insurance able to cover all types of injuries?"
                                content="No. A group personal accident insurance only provides coverage for accidental injuries or death. It doesn't include natural deaths, illnesses and self-inflicted injuries, deaths or injuries due to suicide, alcohol consumption, etc."
                            />
                            <Accordion
                                title="To claim GPA coverage, what documents are required?"
                                content={[<>
                                    <span>While filing a death claim, you need the following standard documents:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Claim Form</li>
                                        <li>Police panchanama or police FIR</li>
                                        <li>Coroner’s Report or Post-mortem report</li>
                                        <li>Death Certificate</li>
                                        <li>Salary slip</li>
                                        <li>When the payment is given to the beneficiary - a notarized affidavit or succession certificate certifying the legal inheritor status.</li>
                                        <li>A letter from the HR of the organization</li>
                                    </ul>
                                    <span className='mt-3 d-block'>While filing a disability claim, you need the following documents -</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Claim Form</li>
                                        <li>A police report should be filed if the accident is reported to the police.</li>
                                        <li>Medical reports, pathology reports, X-ray reports, etc.</li>
                                        <li>In case of permanent disability claims - the disability certificate is given by the reputed surgeon or government/municipality office.</li>
                                        <li>In the case of permanent total disability claims, the employer provides the sick leave certificate.</li>
                                        <li>The attending physician made the statement.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Are minor injuries covered by this policy?"
                                content="Yes. Minor injuries arising from accidents are covered: A GPA insurance policy doesn't check the extent of injuries or severity of an accident."
                            />
                            <Accordion
                                title="Do you have any territorial restrictions when availing of the plan?"
                                content="Yes, territorial restrictions may apply when availing of a GPA insurance policy. The coverage territory specifies the geographical area within which the insurance policy provides coverage. The territorial restrictions can vary between insurance providers and policy options."
                            />
                            <Accordion
                                title="What is the process for claiming personal accident insurance for a group?"
                                content={[<>
                                    <span>Policyholders must follow the steps outlined below:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>After the accident, immediately notify the broker, he will help you throughout the entire claim settlement process</li>
                                        <li>Provide and submit the policy documents along with the duly filled-in claim form.</li>
                                        <li>Submit any other documents necessary by the case, such as death, partial disability, total disability, and so on.</li>
                                        <li>The insurer then undertakes an investigation to determine the legitimacy of the claim.</li>
                                        <li>If you are authorized, the company will deposit the funds into your account.</li>
                                        <li>If the claim is refused, the company may seek additional papers, and if it is still not satisfied, it may reject the claim.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="How much would the GPA plan cost me if I wanted to take advantage of the plan's benefits?"
                                content={[<>
                                    <span>In GPA Insurance, premiums are calculated based on several factors that help assess the risk associated with providing coverage to a group of individuals. Hence, the following factors may influence the cost of such a policy:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>The number of individuals included in the group</li>
                                        <li>Age distribution of the group members</li>
                                        <li>The nature of the occupation or industry of the group members</li>
                                        <li>The chosen coverage limits for the group policy</li>
                                        <li>Additional benefits or riders opted for</li>
                                        <li>Past claim experience of the group</li>
                                        <li>Underwriting guidelines of the insurer</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What all documents are required for group personal accident policy claim settlement?"
                                content={[<>
                                    <span>Documents Required for Death Claim -</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Claim form</li>
                                        <li>Police FIR copy</li>
                                        <li>Coroner’s report or Post-mortem report</li>
                                        <li>Death certificate</li>
                                        <li>Salary slip</li>
                                        <li>When the payment is given to the beneficiary - a notarized affidavit or succession certificate certifying the legal inheritor status.</li>
                                        <li>A letter from the HR of the organization</li>
                                    </ul>
                                    <span className='mt-3 d-block'>Essential Documents for Disablement Claim</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Claim Form</li>
                                        <li>A police report should be filed if the accident is reported to the police.</li>
                                        <li>Pathology, x-ray, and other medical reports, etc.</li>
                                        <li>In permanent disability claims - the disability certificate is given by the reputed surgeon or government/municipality office.</li>
                                        <li>In the case of permanent total disability claims - the sick leave certificate is provided by the employer.</li>
                                        <li>Attending physician statements.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What are the claims procedure in GPA policy?"
                                content={[<>
                                    <span>To file a GPA Insurance claim, follow the steps below.</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Inform your broker and submit details as instructed, he will hand help you through the entire process of claim settlement.</li>
                                        <li>If the claim documents are incomplete, the policyholder is notified via SMS, email, telephone call, or any other means possible.</li>
                                        <li>When your documents are complete, you will receive the compensation. If the claim is rejected, the claim settlement team will send a rejection letter to the insured/concerned point of contact/beneficiary/HR of the organization.</li>
                                    </ul>
                                </>]}
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
                                <h3 className={`title-42 font-secondary font-weight-700 text-primary mb-0 ${productStyle.ProductSecLeftTitle}}`}>Business Protection for SMEs & Startups</h3>
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
                .title-20 {
                    font-size: 18px;
                    line-height: 30px;
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
                        font-size: 22px;
                        line-height: 34px;
                    } 
                }
                @media only screen and (max-width: 992px) {
                    .title-42 {
                        font-size: 26px;
                        line-height: 38px;
                    }
                    .title-36 {
                        font-size: 28px;
                        line-height: 34px;
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
