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

import productImage from '@/public/productImages/productImg2.png'
import expertImg from '../public/shrutiImg.png'

export default function GroupPersonalAccident_InsuranceOld() {
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
        router.push('/group-personal-accident-flow-intro');
    };
    return (
        <>
            <Head>
                <title>Group Personal Accident Insurance | BimaKavach Insurance for Group Personal Accident</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <div className={`productPage ${productStyle.productPage} ${productStyle.productPageNew}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Group Personal Accident Insurance"
                        description="Secure your employees' futures with Group Personal Accident (GPA) Insurance—your staff's safety net against accidental impairments or death."
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Personal Accident Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>A Group Personal Accident (GPA) Insurance policy helps protect you and your family financially in case you suffer an accident that results in death or disability. It compensates policyholders in events such as accidental death, loss of limbs or eyes, permanent partial disability, and permanent total disability. Whether your group is large or small, customizable GPA policies can meet the needs of all members. Additionally, discounts are available based on the group's size.</p>
                                    </div>
                                </Container>
                                <div className={`${productStyle.borderOuter} ${productStyle.lightYellowSec}`}>
                                    <Container>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Features of Group Personal Accident (GPA)</h3>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>Small to large organizations can avail themselves of GPA Insurance for their employees and board members.</li>
                                            <li>Coverage includes medical expenses, hospitalization costs, disability benefits, and death.</li>
                                            <li>In cases of permanent disability or death, an educational fund may be available for dependent children.</li>
                                            <li>Policy tenures generally last one year.</li>
                                        </ul>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading2" className={`${productStyle.whoNeed}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Who Needs</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Personal Accident Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Registered entities such as companies, associations, educational institutions, and government agencies should have GPA insurance for their employees.</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li><span className='font-weight-600'>Early Stage Startups</span> <span className='d-block'></span>Even small startup teams can purchase GPA insurance, an effective tool for attracting and retaining top talent.</li>
                                            <li><span className='font-weight-600'>SMEs</span> <span className='d-none d-lg-block'></span>As your company expands, managing insurance and employee benefits becomes increasingly complex. GPA insurance helps you offer excellent medical coverage to your employees.</li>
                                            <li><span className='font-weight-600'>Large Organizations</span> <span className='d-block'></span>Large organizations commonly provide GPA insurance to their employees. BimaKavach offers various benefits for such organizations, covering all members uniformly, regardless of age, gender, or position.</li>
                                        </ul>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Personal Accident Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Accidents are unfortunate events that can financially strain families, especially if the primary breadwinner is involved. GPA insurance provides financial support in such scenarios. It can deliver a lump-sum payment or income replacement, helping cover medical bills, lost wages, or other expenses resulting from the accident. For employers, offering this insurance underlines your commitment to employee well-being and financial security.</p>
                                    </div>
                                </Container>

                                <div className={`${productStyle.benefits}`}>
                                    <Container>
                                        <div className={`${productStyle.tabWhatHeading}`}>
                                            <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0 text-center'>Benefits of Group Personal Accident Insurance</h3>
                                        </div>
                                        <div className={`overflow-hidden mt-4 mt-lg-5 pt-lg-3 ${productStyle.bnftTabPanel}`}>
                                            <div data-bnfttab className="place-content-center">
                                                <div className={`${productStyle.bnftRow}`}>
                                                    <Row className='justify-content-center g-0'>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/employeeFinancialStabilityIcon.svg' width="160" height="160" alt="Employee Financial Stability" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Employee Financial Stability</div>
                                                                    <div className={`title-18 text-dark`}>Protect your team members from unpredictable life events by offering GPA insurance.</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <div className={`${productStyle.bnftCard}`}>
                                                                <div className={`${productStyle.bnftCardImg}`}>
                                                                    <Image className={`${productStyle.bnftCardIcon}`} src='/icons/employeeWellBeingIcon.svg' width="160" height="160" alt="Employee Well-being" />
                                                                </div>
                                                                <div className={`${productStyle.bnftCardInfo}`}>
                                                                    <div className='title-26 text-dark font-weight-600 mb-2 font-secondry'>Employee Well-being</div>
                                                                    <div className={`title-18 text-dark`}>Providing benefits like GPA insurance fosters a sense of belonging among your team, which in turn increases  productivity and creativity.</div>
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
                                                                    <div className={`title-18 text-dark`}>In an age where companies are extending myriad  benefits, retaining talent poses a formidable challenge. Group Personal Accident Insurance acts as a strong incentive, enhancing employee loyalty.</div>
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
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Accidental Death</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If the insured person dies in an accident, the insurer pays the sum insured to the nominee.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Permanent Partial Disability</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>An employee who becomes partially disabled due to an injury will receive a sum assured, usually ranging from 2% to 60%, depending on the policy terms and conditions.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Permanent Total Disability</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If an employee suffers an accident resulting in permanent disability, or a disability lasting at least a month, the employee is entitled to compensation from the insurer. This compensation can be up to the sum insured.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Educational Benefits</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Should an employee suffer permanent disability or death, the insurance company will cover the educational expenses for his/her dependent children.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Ambulance Charges</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>These cover the expenses associated with transporting the injured employee from the accident scene to a medical facility.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Weekly Benefits</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A company pays weekly compensation if an employee is fully disabled due to an accident.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Transport of Mortal Remains</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The policy reimburses the cost of transporting the deceased from the accident site to a hospital, residence, or crematory.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Bone Fractures</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A lump sum payment is made for incidents involving bone fractures. The policy clearly states which types of broken bones are covered.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Generally, GPA insurance does not cover:</div>
                                                </Col>
                                            </Row>
                                            <ul className={`text-black title-20 ${productStyle.listData}`}>
                                                <li>Natural death</li>
                                                <li>Injuries caused by alcohol or drugs</li>
                                                <li>Acts of law violation</li>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Group Personal Accident Claims Example</h3>
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
                                                    <div className='title-32 font-secondary font-weight-600 text-dark mb-4'>Medical Expense Claim due to Accident at Workplace</div>
                                                    <div className='mb-4'>
                                                        <div className='title-18 font-weight-500 text-black m-0'>ABC Manufacturing Pvt. Ltd., a company with a workforce of 200 employees in Bangalore, opted for group personal accident insurance for its staff. Mr. Vasisth, an employee, unfortunately suffered a severe workplace accident resulting in partial disability. Thanks to the company's GPA insurance policy, Mr. Vasisth received a lump-sum payment per the policy terms, aiding in his medical expenses and financial support during his recovery and rehabilitation.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/gpa_incident1.png' />
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Group Personal Accident Insurance Policy</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="Is GPA Insurance tax deductible?"
                                content="Yes. According to Section 80D of the Income Tax Act, taxpayers are eligible for a deduction on the premiums paid (up to an annually specified limit) for group personal accident insurance plans."
                            />
                            <Accordion
                                title="How are GPA premiums determined?"
                                content={[<>
                                    <span>Premiums in group personal accident insurance are determined based on several factors that help assess the associated risk of providing coverage to a group. These factors typically include:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Number of individuals in the group</li>
                                        <li>Age distribution among group members</li>
                                        <li>Nature of the group members' occupation or industry</li>
                                        <li>Risks associated with their jobs</li>
                                        <li>Chosen coverage limits for the group policy</li>
                                        <li>Optional additional benefits</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What are the additional benefits of GPA Insurance?"
                                content={[<>
                                    <span>Group Personal Accident (GPA) policies often include benefits beyond basic coverage for accidental death and bodily injury, such as:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Accidental disability benefits</li>
                                        <li>Reimbursement for medical expenses (e.g., hospitalization, surgery, medication)</li>
                                        <li>Temporary total disability benefits</li>
                                        <li>Permanent total disability benefits</li>
                                        <li>Funeral expenses coverage</li>
                                        <li>Repatriation benefits</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Do GPA members need to undergo pre-policy medical exams?"
                                content="Generally, GPA policies do not require individual members to undergo pre-policy medical check-ups. The underwriting process is often simplified and does not require extensive medical evaluations. However, it's crucial to disclose any pre-existing medical conditions or specific health concerns during the application process."
                            />
                            <Accordion
                                title="Does GPA insurance cover all types of injuries?"
                                content="No, GPA insurance provides coverage only for accidental injuries or death. It does not cover natural deaths, illnesses, self-inflicted injuries, or injuries/deaths caused by alcohol consumption, among other exclusions."
                            />
                            <Accordion
                                title="What documents are required to claim GPA coverage?"
                                content={[<>
                                    <span>For a death claim, you'll need:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Duly filled claim form</li>
                                        <li>Police FIR or panchanama</li>
                                        <li>Coroner’s report or post-mortem report</li>
                                        <li>Death certificate</li>
                                        <li>Salary slip</li>
                                        <li>Notarized affidavit or succession certificate confirming legal heir status</li>
                                        <li>A letter from the organization's HR</li>
                                    </ul>
                                    <span className='mt-3 d-block'>For a disability claim, the required documents include:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Duly filled claim form</li>
                                        <li>Police report (if the accident was reported to the police)</li>
                                        <li>Medical reports, pathology reports, X-ray reports, etc.</li>
                                        <li>Disability certificate from a reputable surgeon or government office (for permanent disability)</li>
                                        <li>Sick leave certificate from the employer (for permanent total disability)</li>
                                        <li>Statement from the attending physician</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Are minor injuries covered by this policy?"
                                content="Yes, minor injuries resulting from accidents are covered. The policy does not assess the extent of the injuries or the severity of the accident."
                            />
                            <Accordion
                                title="Are there any territorial restrictions when availing of this policy?"
                                content="Yes, territorial restrictions may apply. The coverage territory specifies the geographical area where the policy provides coverage. These restrictions can vary among insurance providers and policy options."
                            />
                            <Accordion
                                title="What is the process for initiating a claim under group personal accident insurance?"
                                content={[<>
                                    <span>To initiate a claim, follow these steps:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Immediately notify BimaKavach after the accident; we will assist throughout the claim settlement process.</li>
                                        <li>Submit the policy documents and the duly filled-in claim form.</li>
                                        <li>Provide any other necessary documents, such as death or disability certificates.</li>
                                        <li>The insurer will conduct an investigation to verify the claim.</li>
                                        <li>If approved, the funds will be deposited into your account. Additional clarifications and documents may be requested, and incomplete documentation could lead to claim rejection.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="How much does a GPA plan cost?"
                                content={[<>
                                    <span>For GPA insurance, premiums are calculated based on several factors that help assess the risk associated with providing coverage to a group of individuals. Hence, the following factors may influence the cost:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Number of group members</li>
                                        <li>Age distribution among group members</li>
                                        <li>Nature of the group members' occupation or industry</li>
                                        <li>Chosen coverage limits</li>
                                        <li>Optional additional benefits</li>
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
