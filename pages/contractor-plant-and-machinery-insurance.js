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
import WhatsApp from '../component/Icons/WhatsApp'
import IndustryBlock from '../component/IndustryBlock'
import ProductSchedule from '../component/Product/ProductSchedule'
import BestBacked from '../component/Product/BestBacked'
import HowGetStarted from '../component/Home/HowGetStarted'
import Accordion from '../component/Accordion'

import form from '@/assets/css/form.module.css'
import productStyle from '@/assets/css/product.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'

import productImage from '@/public/productImages/productImg2.png'
import expertImg from '../public/ravikantImg.png'

export default function ContractorPlantAndMachinery_Insurance() {
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
        router.push('/contractor-plant-and-machinery-flow');
    };
    return (
        <>
            <Head>
                <title>Contractor's Plant and Machinery Insurance (CPM) | BimaKavach</title>
                <meta name="description" content="The Contractor's Plant and Machinery Insurance (CPM) safeguards the stakeholders from equipment damage, offering financial compensation. Get 24*7 claim support." />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Contractor's Plant and Machinery Insurance"
                        description="For machinery owners and contractors, this policy provides compensation against potential losses due to equipment damage.."
                        insuranceWorth="3 Crore"
                        insuranceAmount="15,000"
                        productImgSrc={productImage}
                        form="true"
                        formHeading="CPM Policy"
                        customClass="cntrctrPlantBnr"
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
                                <Button variant="primary" className={`btnCommon yellowBtn ${form.formBtn}`} type="button" onClick={goToNextPage}>
                                    <span className='me-2'>Buy Now</span>
                                    <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                </Button>
                                <div className='d-none d-md-block'>
                                    <TalkExpert
                                        size={`${talkExpert.extraSmall}`}
                                        imgSrc={expertImg}
                                        name="Ravikant Sawant"
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
                                name="Ravikant Sawant"
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Contractor’s Plant and Machinery Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Contractor's plant and machinery insurance (CPM) is a specialized insurance for contractors and construction companies. It protects against damage or loss to the machinery and equipment used in construction sites and factories. It covers a wide range of both owned and hired-in equipment such as:</p>
                                    </div>
                                    <div className={`mt-4 ${productStyle.tabChecklist}`}>
                                        <Row>
                                            <Col xl={10} className='mx-auto'>
                                                <Row className="g-4">
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/bulldozersIcon.svg' width="100" height="100" alt="Bulldozers" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Bulldozers</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/loadersIcon.svg' width="100" height="100" alt="Loaders" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Loaders</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/cranesIcon.svg' width="100" height="100" alt="Cranes" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Cranes</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/compressorsIcon.svg' width="100" height="100" alt="Compressors" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Compressors</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/generatorsIcon.svg' width="100" height="100" alt="Generators" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Generators</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                            <span>
                                                                <Image src='/icons/excavatorsIcon.svg' width="100" height="100" alt="Excavators" />
                                                            </span>
                                                            <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Excavators</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <p className='title-20 mb-0 text-black font-weight-500 mt-4'>It also covers third-party claims against property damage and bodily injury caused at the insured construction site during the tenure of the policy.</p>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Features of Contractor’s Plant and Machinery Insurance</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-3 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It is designed for covering loss or damage to various plants and machinery used on construction sites</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Most of the policies have the option to cover only selected machinery under the policy</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <p className='title-18 font-weight-500 text-black m-0'>The insurance premium depends on the type of equipment, use of equipment, location, and risk you are entailing</p>
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Contractor’s Plant and Machinery Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Anyone of the following parties can take CPM insurance, either individually or jointly</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>Contractors and construction companies</li>
                                            <li>Equipment rental companies</li>
                                            <li>Individual equipment owners</li>
                                            <li>Bank and financial institutions investing in the project</li>
                                        </ul>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Contractor’s Plant and Machinery Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Construction contractors rely heavily on machinery and equipment for their work. Some contractors choose to rent these machines, while others own them. However, if any of these machines get damaged or lost during construction, it can lead to a significant financial loss because these machines require a substantial investment.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>A CPM (Construction Plant and Machinery) policy provides insurance coverage for the damage or loss of construction equipment such as compressors, cranes, bulldozers, and excavators. This coverage applies to accidents caused by external events like fires, riots, strikes, vandalism, storms, floods, earthquakes, and so on. Whether the equipment is actively being used, undergoing maintenance, or simply at rest, this insurance policy protects against both partial and total damage.</p>
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
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Contractor’s Plant and Machinery Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Contractor’s plant and machinery (CPM) insurance provides coverage for the risks associated with machinery and equipment used by contractors in construction projects. Here are some common coverages typically included in this insurance policy:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Clearance and Removal of Debris</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>In the event of a covered loss, this add-on coverage provides reimbursement for the costs incurred in removing debris resulting from the damage to insured machinery and equipment.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Transit Coverage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage extends protection to the insured machinery and equipment during transit, including loading and unloading, between different project sites or locations.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Plant and Machinery Cover for Physical Damage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage protects the insured contractor against accidental physical loss or damage to the insured machinery and equipment. It includes coverage for covered perils such as fire, theft, flood, vandalism, accidental damage, and more. This coverage applies to items in use or at rest, or when they are being dismantled or cleaned, or when they are subsequently erected.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Some common exclusions typically found in contractor’s plant and machinery (CPM) insurance policies in India:</div>
                                                    <ul className={`text-black title-20 ${productStyle.listData}`}>
                                                        <li>Mechanical or electrical failure or breakdown.</li>
                                                        <li>Pre-existing flaws and damages.</li>
                                                        <li>Losses resulting from the explosion of a pressure container or boiler.</li>
                                                        <li>Vehicles developed and licensed for regular on-road use.</li>
                                                        <li>When the factories or machinery are located on public highways.</li>
                                                        <li>Deterioration of machinery owing to inactivity.</li>
                                                        <li>Replaceable accessories and parts, such as knives, bits, drills, saws, cutting edge parts, molds, and so on, which have a greater rate of depreciation or wear by default.</li>
                                                        <li>Crafts or vessels used on the water.</li>
                                                        <li>Damage or loss caused by partial or total immersion in tidal surges.</li>
                                                        <li>Nuclear threats, war, or war-like activity.</li>
                                                        <li>When the machine is being tested.</li>
                                                        <li>Underground machinery other than tunnel boring equipment.</li>
                                                        <li>Any type of indirect loss.</li>
                                                        <li>Damage caused by terrorism.</li>
                                                        <li>Negligence or deliberate behavior by the insured or his representatives</li>
                                                        <li>Any damage for which the supplier or manufacturer is accountable.</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <div class="title-32 font-secondary font-weight-600 text-yellow mb-4 mt-4 mt-xxl-5">Add-on Coverage</div>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Third-party Liability</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This add-on coverage protects the insured contractor against legal liabilities arising from bodily injury or property damage caused to third parties due to the insured machinery and equipment's operations. It includes coverage for legal defense costs and settlement amounts.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Express Freight Cover</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This add-on coverage compensates for the additional cost of express freight charges incurred to replace or repair insured machinery and equipment in the event of a covered loss. By providing this coverage, the policy ensures that the contractor can quickly obtain the necessary machinery or equipment to resume work and minimize project disruptions.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Escalation of Cost</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This add-on cover ensures that in the event of a covered loss, the insured contractor is reimbursed for the increased expenses of repairing or replacing damaged machinery or equipment. As a result of inflation or price changes on the market, project costs may escalate.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Air Freight</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This add-on coverage compensates the cost of transporting insured machinery and equipment by air in the event of a covered loss. A good example of this coverage is when time is of utmost importance and the quickest way to minimize delays is to transport the machinery or equipment by air.</div>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Contractor’s Plant and Machinery Insurance Examples</h3>
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
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Damaged Machinery Claim at BMRCL Site</div>
                                                    <div className='mb-4'>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Bangalore Metro Rail Corporation Limited (BMRCL) deployed nine Tunnel Boring Machines (TBM) last year to dig tunnels between Dairy Circle and Nagawara. Rudra, one of the Tunnel Boring Machines (TBMs) faced a huge pile of garbage which caught the cutter head of the machine, preventing it from moving. Luckily, 6 months later, the machine achieved a breakthrough and tunneled towards Langford Metro station.However, in such cases, there is a high probability that the machine can have severe damage. Not only this, there could be multiple instances such as landslides, earthquakes, or fire incidents which can also lead to damage to the heavy machinery used in construction projects. Here, the Contractor's Plant & Machinery (CPM) Insurance Policy comes to the rescue of the contractor. The policy covers the cost of repairs or replacement of the damaged machinery.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/CPM_incident1.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Third-Party Property Damage Claim</div>
                                                    <div className='mb-4'>
                                                        <div className='title-18 font-weight-500 text-black m-0'>Let’s suppose a crane placed at a construction site accidentally drops a stone and damages a third-party car. If the contractor has obtained a CPM insurance policy to protect its project from various risks, including third-party liability, the policy would cover the liability of the insured contractor for the damage caused to the third-party car by the crane. This could include the cost of repairs, replacement parts, or, in severe cases, the total loss of the vehicle.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/CPM_incident2.png' />
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Contractor’s Plant and Machinery Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What is the full form of CPM insurance?"
                                content="The full form of CPM insurance is Contractor Plant & Machinery Insurance. It is also known as Construction Plant and Machinery Insurance."
                            />
                            <Accordion
                                title="What is floater cover in CPM policy?"
                                content="The 'floater cover' typically refers to a type of coverage that provides protection for a contractor's movable machinery and equipment. This coverage is designed to safeguard the insured items located at different places against various risks and perils they may be exposed to."
                            />
                            <Accordion
                                title="What is the difference between peril and coverage?"
                                content={[<>
                                    <span>A peril refers to a specific event or circumstance that may cause damage, loss, or harm to the insured property or individual. Perils can include natural disasters like fire, flood, and earthquake, as well as human-caused events like theft, vandalism, or accidents.</span>
                                    <span className='mt-3 d-block'>Coverage, on the other hand, refers to the protection provided by an insurance policy against specific perils. It outlines the scope and extent of financial reimbursement or assistance that an insurance company will offer in the event of a covered loss or damage.</span>
                                </>]}
                            />
                            <Accordion
                                title="What perils are covered under the contractor’s plant and machinery insurance?"
                                content={[<>
                                    <span>The typical perils that may be covered under CPM insurance include:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Accidental damage</li>
                                        <li>Earthquake</li>
                                        <li>Fire and lightning</li>
                                        <li>Theft and burglary</li>
                                        <li>Flood and inundation</li>
                                        <li>Storms, cyclones, and tempests</li>
                                        <li>Damage caused by intentional acts of vandalism, sabotage, or malicious actions by third parties</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What is the duration of the contractor plant and machinery insurance policy?"
                                content="Typically, CPM insurance policies are issued for a specific period known as the policy term. Generally, this depends on how long the project will last, or how long the equipment and machinery will be in use. It can range from short-term policies that cover a specific small project over a specified time frame, to long-term policies that provide coverage for long-term projects/ contract periods."
                            />
                            <Accordion
                                title="Is plant and machinery a liability or asset?"
                                content="In general, plant and machinery are grouped into the category of assets, more precisely, tangible assets. The term tangible asset refers to an asset that has physical substance, including inventory, a building, rolling stock, manufacturing equipment, and office furniture."
                            />
                            <Accordion
                                title="Who can take the contractor's plant and machinery insurance policy?"
                                content="The policy can be taken by the Owner, Lessor, or Hirer (responsible either legally or through a leasing agreement) of the Machinery/Equipment. Banks and institutions investing on a construction project can also take this policy."
                            />
                            <Accordion
                                title="What are the additional add-ons one should purchase along with this policy?"
                                content={[<>
                                    <ul className={`${productStyle.listData}`}>
                                        <li>Owners surrounding property</li>
                                        <li>Third-party liability</li>
                                        <li>Escalation</li>
                                        <li>Removal of debris</li>
                                        <li>Inclusion of express freight, overhead charges, air freight charges, and overtime wages</li>
                                        <li>Additional customs duty</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Is it necessary to always update my insurance provider when my contact information changes?"
                                content="Yes. It is always important to inform the insurer of any changes in your contact information. This will ensure that you will receive all correspondence promptly."
                            />
                            <Accordion
                                title="How to make an insurance claim for Contractor’s Plant and Machinery?"
                                content={[<>
                                    <span>Please follow the steps mentioned below-</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Inform your broker instantly. They will handhold and guide you through the entire claim settlement process.</li>
                                        <li>Give the surveyor of the insurer your complete cooperation.</li>
                                        <li>Submit a completed claim form along with any necessary documents to show the financial loss caused by the accident.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Should I inform the company if my old machine/equipment is replaced by a new machine of the same type and model?"
                                content="Yes. When the CPM insurance is issued, the insured needs to provide the serial numbers of the machines at his disposal. If the machines are replaced, the insurer must be informed immediately."
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
