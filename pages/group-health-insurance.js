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

import Footer from '../component/Footer'

import ProductBanner from '../component/Product/ProductBanner'
import TalkExpert from '../component/TalkExpert'
import RatingCard from '../component/RatingCard'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import ProductStartup from '../component/Product/ProductStartup'
import BestBacked from '../component/Product/BestBacked'
import HowGetStarted from '../component/Home/HowGetStarted'
import Accordion from '../component/Accordion'

import form from '@/assets/css/form.module.css'
import productStyle from '@/assets/css/product.module.css'
import talkExpert from '../component/TalkExpert/style.module.css'

import EmployerIcon from '@/component/Icons/Employer'
import EmployeeIcon from '@/component/Icons/Employee'

import productImage from '@/public/productImages/productImg1.webp'
import expertImg from '../public/shrutiImg.webp'

export default function GroupHealth_InsuranceOld() {
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

    useEffect(() => {
        const btns = document.querySelectorAll('#bnftTabBtn');
        const tabs = document.querySelectorAll('[data-bnfttab]');

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
        router.push('/group-health-flow-intro');
    };
    return (
        <>
            <Head>
                <title>Group Health Insurance | BimaKavach Insurance for Group Health</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <div className={`productPage ${productStyle.productPage} ${productStyle.productPageNew}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Group Health Insurance"
                        description="Enhance your team's well-being with group health insurance. Enjoy premium benefits for your employees while enjoying tax advantages as an employer."
                        insuranceWorth="50 Lakhs"
                        insuranceAmount="7,000"
                        productImgSrc={productImage}
                        form="true"
                        formHeading="GHI Insurance"
                        customClass="grpHlthBnr"
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
                            <Form.Group className="floatFormGroup floatPhoneIconGroup mb-4">
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
                                        name="Shruti Vishnoi"
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
                                name="Shruti Vishnoi"
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Health Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Group Health Insurance is an insurance policy tailored for a collective of employees within the same company. This plan encompasses an extensive array of medical expenses, from ambulance services, medications, to specialist consultations. Under this policy, the coverage begins the moment an employee joins the company and persists until their departure. Premiums for these group medical insurance plans are borne by the employer. Such plans are typically procured by companies or organizations as a value-added benefit, ensuring medical coverage for their workforce.</p>
                                    </div>
                                </Container>
                                <div className={`${productStyle.borderOuter} ${productStyle.lightYellowSec}`}>
                                    <Container>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Features of Group Health Insurance Plan</h3>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>The primary intent of this policy is to grant medical benefits to employees. Extended coverage can also be provided for spouses, children, and dependent parents as additional beneficiaries.</li>
                                            <li>Many plans accommodate pre-existing health conditions and maternity care provisions.</li>
                                            <li>Cashless hospitalization is generally facilitated at affiliated network hospitals.</li>
                                            <li>Provisions exist in some plans to compensate specialists and various medical practitioners for post-hospitalization consultations.</li>
                                            <li>A distinctive feature of group health insurance, as opposed to individual health plans, is the lack of a prerequisite for medical screenings.</li>
                                        </ul>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading2" className={`${productStyle.whoNeed}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Who Needs</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Health Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Business owners with an official registration can consider offering health insurance to their employees. Regardless of the business size, from startups to large enterprises, ensuring your team has health coverage promotes well-being and health security for all members of the organization.</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li><span className='font-weight-600'>Early Stage Startups</span> <span className='d-block'></span>Investing in a group personal accident insurance policy for your team can accelerate growth by both attracting and retaining top-notch talent.</li>
                                            <li><span className='font-weight-600'>SMEs</span> <span className='d-none d-lg-block'></span>Group health insurance aids SME employees in navigating healthcare expenses and obtaining quality healthcare services. SMEs have the opportunity to purchase tailored healthcare plans and simultaneously enjoy tax benefits.</li>
                                            <li><span className='font-weight-600'>Large Organizations</span> <span className='d-block'></span>It's customary for large organizations to extend group health insurance to their employees. Such policies offer uniform coverage to all members, independent of age, gender, or hierarchical position. Here at BimaKavach, we present a spectrum of benefits tailored for sizable enterprises.</li>
                                        </ul>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Health Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Corporate health insurance stands as a pivotal strategy to attract and retain premier talent within your organization. An exhaustive health insurance policy alleviates the burden of hefty hospital bills, bestowing peace of mind upon employees. This not only curtails turnover but also fosters a nurturing workplace environment.</p>
                                    </div>
                                </Container>
                                <div className={`${productStyle.benefits}`}>
                                    <Container>
                                        <div className={`${productStyle.tabWhatHeading}`}>
                                            <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0 text-center'>Benefits of Group Health Insurance</h3>
                                        </div>
                                        <div className={`py-lg-3`}>
                                            <div className={`tabContainer text-center my-4 my-lg-5 ${productStyle.bnftTab}`}>
                                                <span id='bnftTabBtn' className="tabLink title-22 transition-all active"><i style={{verticalAlign: 'text-bottom'}}><EmployerIcon /></i> For Employers</span>
                                                <span id='bnftTabBtn' className="tabLink title-22 transition-all"><i style={{verticalAlign: 'text-bottom'}}><EmployeeIcon /></i> For Employees</span>
                                            </div>
                                        </div>
                                        <div className={`overflow-hidden ${productStyle.bnftTabPanel}`}>
                                            <div data-bnfttab className="place-content-center">
                                                <div className={`${productStyle.bnftRow}`}>
                                                    <Row className='justify-content-center g-0'>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/taxBenefitsIcon.svg' width="160" height="160" alt="Tax Benefits" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Tax Benefits</div>
                                                                    <div className={`title-18 text-dark`}>Comparable to other business insurance premiums, the expenditure on Group health insurance premiums is tax-deductible as a legitimate business expense.</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/fosteringHealthyIcon.svg' width="160" height="160" alt="Fostering a Healthy Workplace Culture & Amplifying Productivity" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Fostering a Healthy Workplace Culture & Amplifying Productivity</div>
                                                                    <div className={`title-18 text-dark`}>A comprehensive insurance plan underscores your commitment to your employees' health and welfare. The more palpable your care, the healthier and more efficient your workforce becomes.</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                 <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/employeeRetentionIcon.svg' width="160" height="160" alt="Employee Retention" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Employee Retention</div>
                                                                    <div className={`title-18 text-dark`}>In an age where companies are extending myriad  benefits, retaining talent poses a formidable challenge. Group Health Insurance acts as a strong incentive, enhancing employee loyalty.</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                            <div data-bnfttab className="hidden place-content-center">
                                                <div className={`${productStyle.bnftRow}`}>
                                                    <Row className='justify-content-center g-0'>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/immediateCoverageIcon.svg' width="160" height="160" alt="Immediate Coverage for Pre-existing  Conditions" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Immediate Coverage for Pre-existing  Conditions</div>
                                                                    <div className={`title-18 text-dark`}>Unlike retail policies, group health insurance often covers pre-existing ailments from the first day of an employee's tenure.</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/comprehensiveDiseaseIcon.svg' width="160" height="160" alt="Comprehensive Disease Coverage" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Comprehensive Disease Coverage</div>
                                                                    <div className={`title-18 text-dark`}>Corporate health insurance plans tend to be more inclusive, covering a wider array of illnesses compared to individual plans.</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/negotiatedRatesIcon.svg' width="160" height="160" alt="Negotiated Rates" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Negotiated Rates</div>
                                                                    <div className={`title-18 text-dark`}>Insurance providers broker favorable rates with medical institutions for both the employer and employees. These preferential rates, more often than not, are substantially lower than what an individual would typically incur, facilitating tangible savings.</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/extensiveMaternityIcon.svg' width="160" height="160" alt="Extensive Maternity Benefits" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Extensive Maternity Benefits</div>
                                                                    <div className={`title-18 text-dark`}>When opting for maternity benefits, many plans cover both cesarean and natural births. A few even extend coverage to newborns without the conventional 90-day waiting period.</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading4" className={`${productStyle.coverage}`}>
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
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Group Health Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Coverage  for pre-existing diseases</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A pre-existing disease is a medical condition or illness that an individual already has before seeking insurance coverage. Group health insurance coverage starts to cover pre-existing diseases from the very day an employee joins the company. Usually, there is no waiting period as such for any pre-existing disease.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Maternity coverage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Group Health Insurance policy offers financial protection for childbirth-related expenses for both C-sections and normal deliveries. Usually, there is no waiting period for maternity coverage in these policies. However, some providers may have a 9-month waiting period. Expenses covered may include hospitalization for childbirth, room charges, nursing fees, operation theater charges, and other medical services specific to the delivery. The policy may have a specified sub-limit for such expenses. Group Health Insurance policies often cover pre and postnatal care expenses as well.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Newborn baby coverage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>New-born babies are covered from the moment they are born. The coverage includes medical expenses incurred for the baby during the coverage period. This can include hospitalization expenses, consultations with pediatricians, vaccinations, diagnostic tests, medications, and any necessary medical treatments related to the baby's health. However, such expenses may have certain limits and sub-limits.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Ambulance costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The insured can claim the cost of a road ambulance to travel to the hospital or from the hospital to the place of residence under this cover. The policy may cover both emergency and non-emergency ambulance services. The policy specifies the criteria for availing ambulance coverage, which can include the distance of transportation, the severity of the medical condition, and the recommendation of a medical professional. A defined coverage limit is usually set for ambulance expenses.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Pre and post-hospitalization expenses</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The policy specifies a predefined period of pre and post-hospitalization coverage, typically ranging from 30 to 90 days before and after the hospitalization. The coverage may include the costs related to diagnostic tests, consultations, medications, and other medical services directly linked to the hospitalization, within this specified period. It may also include follow-up consultations, rehabilitation services, and other necessary treatments after hospitalization.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Expenses for domiciliary and daycare</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Domiciliary coverage refers to the reimbursement of medical expenses incurred for treatment received at home when hospitalization is either not possible or not medically necessary. The policy specifies the criteria for availing of such coverage, which may include the need for continuous medical supervision and the recommendation of a medical professional. Similarly, daycare treatment refers to medical operations that do not require 24-hour hospitalization. These include cataract surgery, tonsillitis surgery, and others.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Medical practitioners and specialist’s fees</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This policy offers financial protection for the fees charged by doctors and specialists for in-patient hospitalization, outpatient consultations, and treatments. However, the policy may specify a maximum limit on the coverage for such fees.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Certain standard exclusions exist:</div>
                                                </Col>
                                            </Row>
                                            <ul className={`text-black title-20 ${productStyle.listData}`}>
                                                <li>Some policies might exclude employee's parents, but extensions are available for parent coverage.</li>
                                                <li>Non-allopathic treatments like homeopathy or ayurveda aren't covered.</li>
                                                <li>The policy's validity is restricted to the employee's tenure with the company.</li>
                                                <li>Treatments for AIDS, and congenital defect-related conditions usually aren't covered.</li>
                                                <li>Alcohol or drug abuse-linked complications and illnesses aren't included.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
                {/* product main end */}
                
                {/* product most popular extensions start */}
                <div className={`${productStyle.borderOuter} ${productStyle.mostPopular}`}>
                    <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Most Popular Extensions:</h3>
                    <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Upon purchasing group health insurance, employers can opt for enhanced coverages:</p>
                    <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                        <li>Immediate maternity cover, devoid of waiting periods.</li>
                        <li>Newborn coverage within the maternity limit.</li>
                        <li>Optional OPD (Outpatient Department) coverage.</li>
                        <li>A corporate buffer, in case an employee's existing sum assured is depleted and further funds are needed.</li>
                    </ul>
                </div>
                {/* product most popular extensions end */}

                {/* --------claim example start---------- */}
                <div className={`${productStyle.claimSec}`}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className={`${productStyle.ProductSecLeft}`}>
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Group Health Insurance Claims Example</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={`mt-4 mt-lg-5 overflow-hidden ${productStyle.inciTabPanel}`}>
                                    <div data-incitab className={`${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-dark mb-4'>Claim for Medical Expenses Cover</div>
                                                    <div className='mb-4'>
                                                        <div className='title-18 font-weight-500 text-black m-0'>An electrical cable manufacturer in Gurgaon, with a workforce of 100+ members, procured a Group Health Insurance Policy. Mr. Rajiv, an employee, unfortunately, suffered a heart attack. Post-angioplasty, cardiologists inserted a stent. Owing to the company's insurance policy, Mr. Rajeev was granted a lump sum payout per the policy stipulations. This aided in offsetting his medical charges and offered financial support during his convalescence and rehabilitation.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/ghi_incident1.webp' />
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Group Health Insurance Policy</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What is the difference between group mediclaim and retail health insurance?"
                                content="The primary distinction between group health insurance and individual health insurance is that the former provides coverage shared among a group of individuals connected under specific conditions. In contrast, individual health insurance exclusively covers the individual policyholder."
                            />
                            <Accordion
                                title="Is medical insurance part of employees' expense?"
                                content="In most scenarios, yes. The medical insurance premium that the company pays on the employee's behalf typically factors into the CTC (cost to company) structure presented to the employees when they join."
                            />
                            <Accordion
                                title="How does claim admissibility vary by room type?"
                                content="For group mediclaim policies, claim admissibility might differ based on the room type selected by the insured during hospitalization. Sub-limits (specific percentages of the sum insured amount) often apply to various hospital expenses, like room rent. Therefore, policyholders are advised to adhere to the room rent limit to ensure hassle-free claim admissibility."
                            />
                            <Accordion
                                title="Is group health insurance for employees mandatory?"
                                content="On 15 April 2020, the Ministry of Home Affairs issued an order (No. 40-3/2020-DM-I (A)), where point no. 5 in the associated Standard Operating Procedure (SOP) mandates medical insurance for all employees."
                            />
                            <Accordion
                                title="What determines the premium of group health insurance?"
                                content={[<>
                                    <span>Premiums in group health insurance are derived from several factors assessing the risk of covering a group. These factors typically include:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Number of individuals in the group</li>
                                        <li>Gender distribution within the group</li>
                                        <li>Average age of group members</li>
                                        <li>Family composition of the employees</li>
                                        <li>The occupation or industry nature of the group members</li>
                                        <li>Specified coverage limits for the group policy</li>
                                        <li>Chosen additional benefits</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What is group insurance room rent capping?"
                                content="Group mediclaim policies often establish sub-limits or caps for diverse hospital expenses, including room rent. Claim admissibility might differ based on the room type an insured selects during hospitalization. Policyholders are advised to adhere to the room rent limit to facilitate smooth claim admissibility."
                            />
                            <Accordion
                                title="How does group health insurance offer maternity benefits?"
                                content={[<>
                                    <span>Group health insurance generally provides maternity benefits as follows:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Pre and post-natal expenses: Coverage often extends to 60 days before and 90 days post-hospitalization.</li>
                                        <li>In-patient hospitalization: Hospitalization costs, such as doctor consultation fees, surgeries, and room rent, are covered.</li>
                                        <li>Type of delivery: Both delivery types (natural and C-section) are included.</li>
                                        <li>Vaccination costs: Expenses for baby vaccinations post-birth, aligned with the WHO schedule, are covered</li>
                                    </ul>
                                    <span className='mt-3'>Lawful pregnancy termination: Costs related to legal terminations fall under the maternity coverage. It's crucial to review the insurance policy comprehensively to grasp the exact maternity benefits offered.</span>
                                </>]}
                            />
                            <Accordion
                                title="Do we require a pre-existing disease waiver?"
                                content="A pre-existing disease waiver within group health insurance can be invaluable. It ensures coverage for treatments and costs related to pre-existing conditions from the policy's outset, devoid of specific waiting periods or exclusions. Such a waiver guarantees immediate medical treatment and services access for any pre-existing conditions."
                            />
                            <Accordion
                                title="What distinguishes a cashless claim from a reimbursement claim in Group Health Insurance?"
                                content="In a cashless claim, policyholders visit a network-affiliated hospital, where the insurer authorizes an initial amount and settles the rest post-treatment. In contrast, a reimbursement claim involves the policyholder paying hospital bills post-treatment and subsequently seeking approval from the insurer by submitting these bills and any related medical documents."
                            />
                            <Accordion
                                title="How do you file a cashless claim for Group Health Insurance?"
                                content={[<>
                                    <span>To initiate a cashless claim in group health insurance, adhere to the steps below:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Complete a pre-authorization form at the TPA counter during admission and notify your insurance company beforehand for ultimate approval.</li>
                                        <li>Present necessary documents at the TPA counter, such as the cashless healthcare card from your insurer and KYC document copies for verification.</li>
                                        <li>The insurance company, upon reviewing these documents, provides cashless approval for your hospitalization and retains all treatment-related documentation.</li>
                                        <li>It's prudent to procure a personal copy of these documents for your records. Retain all medical reports, test outcomes, discharge summaries, etc., as they are pivotal for seamless claim processing and future referencing.</li>
                                        <li>Cashless hospitalization enables the insurer to bear your treatment costs, with the policyholder accountable for any charges not covered per insurance guidelines.</li>
                                    </ul>
                                </>]}
                            />
                        </div>
                    </Container>
                </div>
                {/* --------FAQ end---------- */}

                {/* --------productStartup start---------- */}
                <ProductStartup />
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
