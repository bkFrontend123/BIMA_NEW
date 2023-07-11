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

export default function product() {
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
                <title>Contractor’s All Risk Policy | BimaKavach Policy for Contractor’s All Risk</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Contractor’s All Risk Policy"
                        description="Contractor's all risk Insurance is a type of coverage that protects contractors, architects, engineers, and financiers involved in construction projects. It covers unexpected accidents and damage to construction equipment, machinery, and even third-party claims. Basically, this insurance acts as a shield for contractors, safeguarding them from financial losses caused by theft or accidents that can happen at construction sites."
                        customClass="cntrctrBnr"
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
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>What Is</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Contractor’s All Risk Policy?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>A contractor's all risk insurance policy, also known as CAR insurance, is like a safety net for construction projects. It protects against unexpected problems and covers things like damage to construction equipment, machinery, as well as third-party claims arising from bodily injury and property damage. This insurance is important because it helps keep construction projects on track and prevents financial losses, making sure they finish on time and within budget.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Features of Contractor’s All Risk Policy</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-3 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Insurance coverage is applicable for civil engineering projects where the value of civil works is more than 50% of the total contract value.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It operates during storage, erection/construction till completion.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Loss, damage, or destruction of property incurred due to any cause other than those excluded in the policy is covered.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It is widely demanded by construction firms and financiers involved in construction projects.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading2" className={`${productStyle.whoNeed}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Who Needs</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Contractor’s All Risk Policy?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The contractor’s all risk insurance can be availed by those who are involved in any way in the construction business such as:</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>Contractors</li>
                                            <li>Purchaser or owner</li>
                                            <li>Companies financing the project</li>
                                            <li>Firms commissioned to carry out the work, including subcontractors</li>
                                        </ul>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>You can also cover all participants under a single insurance contract for the whole project to avoid gaps in coverage.</p>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Contractor’s All Risk Policy?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The contractor's all risk policy is a special type of insurance that helps protect construction workers from the unfortunate event of damage or destruction to their projects. It covers everything from small projects like offices, buildings, hospitals, and shopping complexes, to larger projects such as highways, dams, and tunnels. This policy provides coverage for accidental damage to the projects themselves, as well as any equipment or machinery owned by the contractors. In simple terms, it ensures that if something goes wrong during construction, the insurance will help cover the costs of repairs or replacements.</p>
                                    </div>
                                </Container>
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
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Contractor’s All Risk Policy</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Here are the common elements that are typically covered in a CAR policy in India</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Construction material damage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It provides protection from physical loss or damage to construction materials and equipment used in the construction process due to a covered peril. It may also cover the cost of demolition and removal of damaged materials and cleanup of debris.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Third-party liability</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Under this policy, the insured is protected from legal liability for accidental damage or loss to a third party's property arising from construction work. It also covers the legal liability for non-fatal and fatal injuries caused to a third person due to the construction of the property</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Negligence and human errors</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>CAR insurance policies often include coverage for loss originating from negligence and errors in the design, planning, or supervision of the construction project. If negligence or human errors result in third-party injuries or property damage, a CAR insurance policy may provide coverage for liability claims as well. This includes legal defense costs and any settlements or judgments against the insured party due to their negligence or errors.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Water damage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A CAR insurance policy typically covers accidental water damage that occurs during the construction process. The policy may provide coverage for the resulting damage to the insured property or construction materials. It may also cover loss or damage arising from the entry of water into the construction site or the insured property due to heavy rainfall, storms, or other external factors.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Collapse</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A CAR insurance policy covers both partial and total collapse of the insured structure during the construction phase. The policy will provide coverage for the repair or reconstruction costs associated with the collapse, up to the policy limits and deductibles.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Faults in construction</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage can be provided as an extension or add-on cover. If a fault occurs due to design or engineering errors, resulting in damage or loss, a CAR insurance policy may provide coverage.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Fire, explosion, lightning, and aircraft damage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This cover refers to the protection provided for losses or damage that occur at the construction site, because of these specific perils. It includes damage to the construction site, materials, equipment, and structures due to fire-related incidents and explosions. This may be caused by factors such as gas leaks and chemical reactions, damage due to lightning-induced fires, electrical surges, and incidents where aircraft collide with the construction site, equipment, or structures, causing damage or destruction. The policy will cover the cost of repairing or replacing the damaged property.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Storms, floods, cyclones, earthquakes, and allied perils</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A CAR insurance policy generally covers losses or damages to the construction site, materials, equipment, or structures resulting from storms, overflowing rivers, heavy rainfall, or other flood-related events, cyclonic events, tremors, other earthquake-related factors, and other related perils. It may also provide coverage for the cost of repairs, reconstruction, or replacement necessitated by the covered perils mentioned above.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Here are some common exclusions typically found in contractors all risk insurance policies in India:</div>
                                                </Col>
                                            </Row>
                                            <ul className={`text-black title-20 ${productStyle.listData}`}>
                                                <li>Nuclear threats, war, or war-like activity</li>
                                                <li>Partial/total cessation of work</li>
                                                <li>A willful act or willful negligence of the insured</li>
                                                <li>Defective material or bad workmanship</li>
                                                <li>Contractual liabilities</li>
                                                <li>Normal wear and tear</li>
                                                <li>Damage caused by terrorism</li>
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
                                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title12 text-uppercase font-weight-600'>Some Examples</div>
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Contractor’s All Risk Policy Examples</h3>
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
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Repairing Cost Claim for Flood Damaged Property</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Let us suppose a construction company has undertaken a project to build a residential complex. A flood occurs during the construction phase and the floodwaters have caused significant damage to the construction site, including partially built structures, materials, equipment, and other property involved in the project.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>If the company has obtained a CAR insurance policy to protect its project from various risks, including flood damage, the policy would reimburse the insured company for the cost of repairing the damaged property. It would also provide coverage for debris removal expenses, which would help the contractor bear the cost of clearing and disposing of debris caused by the flood.</div>
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
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Insurance Claim for Manufacturing Business</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Mr. Ravikant's cable manufacturing business in Noida suffered a devastating setback when a fire broke out in his godown. The blaze resulted in the destruction of 60% of his inventory and damage to the building.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Thanks to his foresight in securing fire insurance, Mr. Ravikant was able to file a claim and receive compensation from the insurance company. The compensation covered the costs of repairing or rebuilding the godown and replacing the lost inventory, up to the policy limits. Without fire insurance, Mr. Ravikant would have been solely responsible for these expenses, which could have been crippling for his business.</div>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Contractor’s All Risk Policy</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="Who can purchase the contractor’s all risk insurance?"
                                content={[<>
                                    <span>Contractor's All Risk insurance is available to everyone engaged in the construction industry, including:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Purchaser or owner</li>
                                        <li>Contractors</li>
                                        <li>Companies that are funding the project</li>
                                        <li>Companies hired to execute the work, including subcontractors</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What is the method of calculating risk used by insurance companies?"
                                content="An insurance company examines several aspects while calculating risks and quoting the premium for the contractor's all-risk insurance policy. These criteria include the scope, location, cost, and time frame for the construction work."
                            />
                            <Accordion
                                title="How do I claim a contractor all risk policy?"
                                content={[<>
                                    <span>To file a claim under the contractor's all-risk policy, please follow the steps below:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Inform your broker right away to report the damage/loss. He will assist you in the entire claim settlement process.</li>
                                        <li>Following phone notification, the insurer must be notified in writing of the damage or incidence of a loss. The severity of property damage must be included in the written notification.</li>
                                        <li>If the loss or damage is the result of a burglary or theft, the insured should notify the police immediately.</li>
                                        <li>The insurer sends a surveyor to conduct the survey.</li>
                                        <li>The insured must now submit the completed claim form together with the accompanying documentation to the insurance company.</li>
                                    </ul>
                                    <span className='mt-3 d-block'>The following documents may be required-</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>The written statement of the claim, with information on the loss or damage to the property.</li>
                                        <li>Technical damage report for machine claims.</li>
                                        <li>Purchase invoices or delivery receipts.</li>
                                        <li>A police report, if filed.</li>
                                        <li>Estimate for repair or replacement.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Is it mandatory for contractors to have an all risk policy?"
                                content="Though there is no specific law or regulation that mandates contractors to have an All Risk Insurance (CAR insurance) policy, in various cases the financier and the project assigner do ask the contractor to have a CAR policy in place before the project work inception. So, it is often recommended that contractors obtain CAR insurance. Construction projects involve various risks, including damage to the site, materials, and third-party liabilities. It can provide financial protection to the contractor in the event of accidents, natural disasters, theft, or other unforeseen circumstances during the construction process."
                            />
                            <Accordion
                                title="Why is contractor all risk policy important?"
                                content={[<>
                                    <span>Construction projects involve significant investments in materials, equipment, and labor. The CAR policy provides financial protection to contractors and project owners by covering the potential losses or damages that can occur during the construction phase. It helps mitigate the financial risks associated with accidents, natural disasters, theft, vandalism, and other unforeseen events. Thus, this policy can provide contractors with peace of mind, knowing that their project is protected in the event of an accident or damage. This can help contractors to focus on their work and avoid worrying about the financial implications of such incidents.</span>
                                    <span className='mt-3 d-block'>Many clients may require contractors to have a CAR policy in place before they will award a contract. This is because they want to ensure that their project is protected in the event of an accident or damage"</span>
                                </>]}
                            />
                            <Accordion
                                title="What does a cross liability mean in a contractor all-risk policy?"
                                content="In a Contractor's All Risk (CAR) insurance policy, a 'cross liability' provision is a key feature that addresses the potential legal liability of different parties involved in a construction project. It ensures that each party is individually protected against claims made by other parties covered under the same policy."
                            />
                            <Accordion
                                title="What is covered in the construction all-risk policy?"
                                content={[<>
                                    <span>Here are the common elements that are typically covered in a CAR policy in India-</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Construction material damage</li>
                                        <li>Third-party liability</li>
                                        <li>Fire and allied perils</li>
                                        <li>Collapse</li>
                                        <li>Faults in construction</li>
                                        <li>Negligence and human errors</li>
                                        <li>Earthquake</li>
                                        <li>Water damage</li>
                                        <li>Storms, floods, cyclones, and tempests</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="In which risks does contractor's all risk policy not apply?"
                                content={[<>
                                    <span>The contractor's All Risk Policy (CAR) does not typically apply to the following risks. However, some of these perils can be covered under certain conditions with an additional premium.</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Nuclear risks like nuclear radiation or other nuclear incidents.</li>
                                        <li>War risks like damage caused by war, invasion, acts of foreign enemy, terrorism, etc</li>
                                        <li>Damage caused by pollution or contamination.</li>
                                        <li>Fines or penalties imposed by law.</li>
                                        <li>Professional errors or omissions.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Is theft covered under the contractor’s all-risk policy?"
                                content="Yes. The contractor’s all-risk policy covers theft that may happen in the project or construction site."
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
                                <h3 className={`title-42 font-secondary font-weight-600 text-primary mb-0 ${productStyle.ProductSecLeftTitle}}`}>Business Protection for SMEs & Startups</h3>
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
