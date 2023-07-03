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
            id: "4", list: "Coverages & Exceptions",
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
                <title>Fire Insurance | BimaKavach Insurance for Fire</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Fire Insurance"
                        description="Fire & Burglary insurance is one of the most common types of asset insurances. It provides coverage not only against fire and theft, but can also include riots, strikes, storms, floods, earthquakes, and other such situations. It provides a comprehensive cover for your building structure, office equipment, inventory, cash assets and valuable documents. Various types of costs like repairs, replacement, and reconstruction are included in this policy."
                        insuranceWorth="50 Lakhs"
                        insuranceAmount="1,453"
                        customClass="fireBnr"
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Fire & Burglary Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Fire & Burglary Insurance provides coverage for physical damage to your property. This damage can occur in a variety of situations like:</p>
                                    </div>
                                    <div className={`mt-4 mt-xl-5 ${productStyle.tabChecklist}`}>
                                        <Row>
                                            <Col xl={11} className='mx-auto'>
                                                <Row className="g-4">
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/retailIcon.svg' width="100" height="100" alt="Fire" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Fire</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/retailIcon1.svg' width="100" height="100" alt="Lightning" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Lightning</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/contractorsIcon.svg' width="100" height="100" alt="Explosions or Implosions" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Explosions or Implosions</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/fitnessIcon.svg' width="100" height="100" alt="Aircraft Damage" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Aircraft Damage</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/stormIcon.svg' width="100" height="100" alt="Storm, Cyclone, Typhoon, Tempest, Hurricane, Tornado, Flood and Inundation" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Storm, Cyclone, Typhoon, Tempest, Hurricane, Tornado, Flood and Inundation</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/eventIcon.svg' width="100" height="100" alt="Riot, Strike and Malicious Damage" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Riot, Strike and Malicious Damage</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/techIcon.svg' width="100" height="100" alt="Impact Damage" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Impact Damage</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/manufacturersIcon.svg' width="100" height="100" alt="Subsidence and Landslide including Rock slide" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Subsidence and Landslide including Rock slide</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/plannersIcon.svg' width="100" height="100" alt="Bursting and/or overflowing of Water Tanks, Apparatus and Pipes" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Bursting and/or overflowing of Water Tanks, Apparatus and Pipes</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/serviceIcon.svg' width="100" height="100" alt="Missile Testing Operations" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Missile Testing Operations</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/leakageIcon.svg' width="100" height="100" alt="Leakage from Automatic Sprinkler Installations" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Leakage from Automatic Sprinkler Installations</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/bushFireIcon.svg' width="100" height="100" alt="Bush Fire" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Bush Fire</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <p className='title-20 text-black font-weight-500 my-4 my-xl-5'>This insurance is designed to meet the needs of businesses of various sizes, with three coverage options available:</p>
                                        <Row>
                                            <Col xl={10} className='mx-auto'>
                                                <Row className='g-4'>
                                                    <Col lg={4}>
                                                        <div className={`${productStyle.productRateCard}`}>
                                                            <div className={`${productStyle.productRateHdr}`}>
                                                                <p>Sookshma Udyam Suraksha</p>
                                                            </div>
                                                            <div className={`${productStyle.productRateBody}`}>
                                                                <p>Asset Coverage</p>
                                                                <h3>Under ₹ 5Cr</h3>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`${productStyle.productRateCard}`}>
                                                            <div className={`${productStyle.productRateHdr}`}>
                                                                <p>Laghu Udyam Suraksha</p>
                                                            </div>
                                                            <div className={`${productStyle.productRateBody}`}>
                                                                <p>Asset Coverage</p>
                                                                <h3>₹ 5-50Cr</h3>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`${productStyle.productRateCard}`}>
                                                            <div className={`${productStyle.productRateHdr}`}>
                                                                <p>Standard Fire Special Perils - SFSP</p>
                                                            </div>
                                                            <div className={`${productStyle.productRateBody}`}>
                                                                <p>Asset Coverage</p>
                                                                <h3>Over ₹ 50Cr</h3>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Features of Fire & Burglary Insurance</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='gx-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <img src='/icons/prodUShield.svg' />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Coverage</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Protects against physical damage to a building or structure from fire or theft.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <img src='/icons/prodUShield.svg' />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Eligibility</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Requires you to provide a detailed description of the property you want to insure and show proof that you have a legitimate interest in insuring it.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <img src='/icons/prodUShield.svg' />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Direct Loss</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Covers immediate damage caused by the fire including destruction of buildings, equipment, furniture, inventory, and other physical assets within the property.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <img src='/icons/prodUShield.svg' />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Policy Duration</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>The policy term is typically one year, with annual renewal required.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 mt-lg-5 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <img src='/icons/prodUShield.svg' />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Customizable</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Coverage options may be customized to meet the specific needs of a business.</p>
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Fire & Burglary Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Companies that own or rent assets in the form of office premises, stock, machinery, cash, or other forms need comprehensive fire and burglary insurance policies.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>In addition to covering the office, retail, or factory premises, this policy also protects the contents inside the premises including electronic equipment like laptops, computers, and phones.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Fire & burglary insurance offers valuable coverage for businesses of all sizes and industries.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>A few common businesses that purchase fire insurance are:</p>
                                    </div>
                                    <div className={`mt-4 mt-xl-5 ${productStyle.tabChecklist}`}>
                                        <Row className='g-4 g-lg-5'>
                                            <Col lg={4}>
                                                <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                    <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                        <img src='/icons/prodUser.svg' />
                                                        <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Hotel Owners and Service Providers</h3>
                                                        <p className='title-18 font-weight-500 text-black m-0'>Guard against the financial consequences of fire damage  to your hospitality or service-based business.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                    <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                        <img src='/icons/prodUser.svg' />
                                                        <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Shop-keepers and Godown Owners</h3>
                                                        <p className='title-18 font-weight-500 text-black m-0 mt-2'>Protect your retail or storage space from the potential financial impact of a fire.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                    <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                        <img src='/icons/prodUser.svg' />
                                                        <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Manufacturing and Industrial Units</h3>
                                                        <p className='title-18 font-weight-500 text-black m-0 mt-2'>Safeguard your operations, vehicles, and equipment with fire insurance.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                    <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                        <img src='/icons/prodUser.svg' />
                                                        <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Medical Clinics</h3>
                                                        <p className='title-18 font-weight-500 text-black m-0 mt-2'>Protect your medical facility, equipment, and patient records from fire damage</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                    <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                        <img src='/icons/prodUser.svg' />
                                                        <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Banks and Other Institutions</h3>
                                                        <p className='title-18 font-weight-500 text-black m-0 mt-2'>Ensure the protection of your financial assets and operations with fire insurance.</p>
                                                    </div>
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Fire & Burglary Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Fire incidents are common causes of accidents in both residential and commercial sectors in India. In 2021, India recorded 1.6 million fire accidents.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Securing your assets is critical to your company's growth and stability. Fire & Burglary Insurance protects your property and its contents from a variety of occurrences, including fire, theft, natural disasters, and man-made events such as riots and terrorism.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The Insurance offers tailored protection options to suit your business requirements. You can select from specialized coverage choices such as Sookshma Udyam Suraksha, Laghu Udyam Suraksha, and Standard Fire Special Peril (SFSP)</p>
                                    </div>
                                </Container>

                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Benefits of a Fire Insurance Policy</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='gx-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <img src='/icons/prodUser.svg' />
                                                            <p className='title-18 font-weight-500 text-black m-0 mt-2'>Fire insurance offers protection against any harm or destruction from fire, fermentation, natural heating, or spontaneous combustion.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <img src='/icons/prodGlobe.svg' />
                                                            <p className='title-18 font-weight-500 text-black m-0 mt-2'>If a machine is damaged by fire, fire insurance covers the costs of repair or replacement.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <img src='/icons/prodUShield.svg' />
                                                            <p className='title-18 font-weight-500 text-black m-0 mt-2'>Fire insurance also covers the cost of reconstruction of the property as per the sum insured in the policy.</p>
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
                                            Coverages & Exceptions in
                                        </h3>
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Fire Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exceptions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Fire insurance protects your business and its assets, shielding them from potential losses caused by fires or thefts. It covers a range of incidents related to fire and break-ins.</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Loss to an adjacent property</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This insurance provides coverage in the case of a fire or burglary that damages or destroys the insured property while also causing damage to neighbouring property. It covers the costs of repairing or replacing the neighbouring property.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Fire-related loss</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Fire-related property losses to office buildings, machinery, furniture, and other items inside the premises, can result in severe financial damage. Fire and burglary insurance covers damage caused by fire, including the cost of repairing or replacing the damaged property.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Bush Fire</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Setting up a fire in the bush-grown area may damage the property. This incident is covered under the fire policy. Please note the forest fire incident is not covered directly. Additional payment is required to have coverage for forest fire incidents.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Natural Calamity</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This policy provides coverage for any harm or destruction that may occur to the insured property as a result of natural disasters like landslides, typhoons, thunder, lightning and other similar calamities.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Damage due to aircraft</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This policy provides coverage for any damage to property resulting from aircraft-related incidents such as dropped articles, airborne devices, or any other causes.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Explosion/Implosion</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Damage caused due to any explosion/implosion is covered under this policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Armed robbery</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The loss of items like money, jewellery, gadgets, and other stolen personal property may be covered by the policyholder's Fire & Burglary insurance in the event of an armed robbery. It may also cover any property damage incurred as a result of the heist, including broken or damaged windows, doors, or other sections of the building.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Violent and forceful entry</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>In the event of a covered risk, such as burglary or theft with evidence of violent and forced entrance, a fire and burglary insurance policy may cover both property damage and the value of stolen objects. If the break-in renders the property unusable, the insurance may pay for interim housing.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Business Interruption</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The Fire Loss of Profit policy (FLOP), also known as a Business Interruption (BI) policy, provides coverage for businesses that experience disruptions in their operations. This coverage includes compensation for the loss of income and the expenses incurred due to a fire or other perils that cause interruptions to the business. By paying a specified amount, the policy extends coverage for an extended period of time.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Damage to personal property</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Fire and burglary insurance offers coverage for expenses resulting from property damage due to fire or theft  including temporary renting costs. The policy may also cover the expense of storing personal belongings elsewhere temporarily.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>While fire insurance policy offers a broad coverage for businesses, it's important to note that there are certain incidents that may not be included. Here are some:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Deliberate or purposeful harm</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Any damage caused with intent or willful action is not covered under the policy. This includes situations where someone intentionally causes harm to the insured property.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Cold storage stock damage due to temperature fluctuations</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If damage occurs to stocks stored in cold storage facilities as a result of temperature changes, such as spoilage or deterioration, it may not be covered directly by the insurance policy. However, upon some additional payment you can avail the coverage.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>War, invasion, or war-like scenarios</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Damages arising from acts of war, invasion, or war-like situations are typically excluded from insurance coverage. This includes any losses caused directly or indirectly by such events.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Pollution or contamination</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Damages caused by pollution or contamination, such as environmental pollution or toxic substances, may not be directly covered by the insurance policy. However, upon some additional payment you can avail the coverage.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Lost or misplaced property</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If the insured property goes missing or is misplaced, it may not be covered under the policy. This applies to situations where the property cannot be located or accounted for.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Claim preparation expenses</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Any fees or expenses incurred while preparing or processing the insurance claim, such as documentation or legal costs, are generally not covered by the policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Consequential or indirect losses</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Indirect or consequential losses, which occur as a result of the insured event but are not directly caused by it, may not be covered by the insurance policy. This can include financial losses or damages that arise as a consequence of the initial incident.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Unoccupied building for more than 30 days</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If the insured building remains unoccupied for a period exceeding 30 days, certain types of damages or losses may not be covered by the policy. This typically applies to risks associated with unoccupied premises, such as increased vulnerability to theft or vandalism.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Electrical machinery damage or electricity leakage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Damages resulting from electrical machinery malfunctions or leakage of electricity may not be covered under the insurance policy. This includes situations where the insured property or equipment suffers electrical-related damages or losses.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className='title-32 font-secondary font-weight-600 text-yellow mb-4 mt-4 mt-xl-5'>Add-on Coverage</div>
                                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The policy provides extensive protection for the business and its assets. However, there are certain things that are not automatically included in the coverage.But depending on the relevance to the business the insured can obtain add-on coverage. Here are some:</p>
                                            <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                                <li>Debris</li>
                                                <li>Forest fire</li>
                                                <li>Earthquake</li>
                                                <li>Architects, Surveyors and Consulting Engineer Free</li>
                                                <li>Detoration of stocks in cold store due to temperature change</li>
                                                <li>Impact damage due to insured’s own rail/road vehicles, fork lifts, cranes, stackers and the like and articles dropped therefrom.</li>
                                                <li>Spontaneous combustion</li>
                                                <li>Leakage and contamination cover</li>
                                                <li>Temporary removal of stocks clause</li>
                                                <li>Loss of rent clause</li>
                                                <li>Insurance of additional expenses of rent for an alternative accommodation</li>
                                                <li>Start up Expenses</li>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Insurance Claim for Small Business</h3>
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
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Insurance Claim for Small Business</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Arvind, the owner of a small business that sells handmade wallets, has invested ₹40 lakhs into his venture, including buying a commercial space and stocking up on inventory. To safeguard his investment, he decides to get fire insurance. One day, a fire breaks out in the building where his business is located, causing damage to the building and destroying much of his inventory.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Thanks to his fire insurance policy, Arvind can file a claim and receive financial compensation for the losses caused by the fire, including lost inventory. Without the fire insurance, Arvind would have had to bear these costs himself, which could have been devastating for his business.</div>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Fire Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What type of property is covered by fire insurance?"
                                content="Fire insurance typically covers damage or loss to property caused by fire, lightning, explosions, and other similar perils. This can include a wide range of properties such as homes, businesses, vehicles, and personal belongings. However, the exact coverage and exclusions will depend on the specific policy and the insurance provider."
                            />
                            <Accordion
                                title="What are the major elements of fire insurance?"
                                content={[<>
                                    <span>The major elements of fire insurance include:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Coverage</li>
                                        <li>Premium</li>
                                        <li>Deductible</li>
                                        <li>Limits</li>
                                        <li>Conditions</li>
                                        <li>Exclusions</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Who is eligible for fire insurance?"
                                content="In general, anyone who owns or has a financial interest in property that is at risk of fire damage can be eligible for fire insurance. This includes homeowners, renters, and businesses that own or lease property. However, eligibility requirements and coverage options can vary depending on the insurance provider and the type of property being insured. Some insurance providers may have restrictions or limitations on coverage for properties that are deemed to be at a higher risk of fire damage, such as properties located in areas prone to wildfires."
                            />
                            <Accordion
                                title="What are the rules of fire insurance?"
                                content={[<>
                                    <span>The rules of fire insurance can vary depending on the specific policy and the insurance provider, but there are several common principles that apply to most fire insurance policies. Some of these include:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Disclosure of Information</li>
                                        <li>Insurable Interest</li>
                                        <li>Limits of Coverage</li>
                                        <li>Deductibles</li>
                                        <li>Duty to Mitigate Loss</li>
                                        <li>Premium Payments</li>
                                        <li>Exclusions</li>
                                    </ul>

                                </>]}
                            />
                            <Accordion
                                title="How is the claim calculated in case of a fire or burglary incident?"
                                content="In case of a fire or burglary, it is important for the insured to promptly inform their insurance company in order to initiate the claims process. They should provide a clear explanation of the damaged or stolen items and their corresponding value. The insurance company will assess the damage and determine the appropriate amount to be paid for the claim. They may send an inspector to evaluate the property and review the insurance policy to determine the coverage of items. Once they finish looking into everything and approve the claim, the insurance company will pay out the money, but they will also consider any deductibles or limits stated in the policy."
                            />
                            <Accordion
                                title="What is the first loss in fire & burglary insurance?"
                                content="First loss in fire and burglary insurance refers to a type of insurance policy that provides coverage for a specific amount, rather than for the full value of the insured property. Under a first loss policy, the policyholder selects a specific amount of coverage, known as the 'first loss limit.' This amount represents the maximum amount that the insurance company will pay out in the event of a covered loss, regardless of the actual value of the property. This type of policy is typically used for properties that are at lower risk of damage or theft, or for properties where it would be too expensive to insure for the full value."
                            />
                            <Accordion
                                title="What is the usual period of fire insurance?"
                                content="The period of fire insurance refers to the duration of time for which the insurance policy is in effect and provides coverage for the insured property. In most cases, fire insurance policies are issued for a fixed term, such as one year, and the policyholder is required to renew the policy at the end of the term in order to maintain coverage."
                            />
                            <Accordion
                                title="What is the total loss in the fire insurance policy?"
                                content="In a fire insurance policy, a total loss refers to a situation where the insured property is completely destroyed or damaged beyond repair due to fire. In this case, the insurance company is required to pay the policyholder the full amount of coverage specified in the policy, up to the policy limits. The amount of the total loss is typically determined by the insurance company through an assessment of the damage and an evaluation of the value of the insured property. If the total loss is confirmed, the insurance company will pay out the full amount of coverage specified in the policy, minus any applicable deductibles."
                            />
                            <Accordion
                                title="What are the biggest risks in fire safety?"
                                content={[<>
                                    <span>There are several key risks that can impact fire safety and insurance coverage related to fire damage. These include:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li><span>Property hazards:</span> Certain types of property hazards, such as the presence of flammable materials, outdated electrical systems, or improper storage of combustible materials, can increase the risk of fire damage</li>
                                        <li><span>Fire prevention measures:</span> Failure to implement adequate fire prevention measures, such as installing smoke detectors, maintaining fire extinguishers, or having a fire evacuation plan in place, can increase the risk of fire damage</li>
                                        <li>Natural disasters: Natural disasters, such as wildfires, earthquakes, and floods, can also pose a significant risk to property</li>
                                        <li><span>Arson and other intentional acts:</span> Arson and other intentional acts of fire damage can be difficult to prevent and may not be covered under standard fire insurance policies.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What is the key clause in burglary insurance?"
                                content={[<>
                                    <span>The key clause in burglary insurance is the burglary clause, which outlines the coverage provided by the policy in the event of theft or burglary. It typically specifies the terms and conditions of coverage, includingDefinition of burglary</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Coverage limits</li>
                                        <li>Deductibles</li>
                                        <li>Requirements for reporting</li>
                                        <li>Exclusions</li>
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
