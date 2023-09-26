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

import productImage from '@/public/productImages/productImg1.png'
import expertImg from '../public/himaniImg.png'

export default function GroupHealth_Insurance() {
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
        router.push('/group-health-flow');
    };
    return (
        <>
            <Head>
                <title>Group Health Insurance | BimaKavach Insurance for Group Health</title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </Head>
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Group Health Insurance"
                        description="Group health insurance is a type of insurance that covers a bunch of people together, like employees in a company or members of a group. It helps them get health insurance at a cheaper price because the risk is shared among all the people in the group. Employers also get tax benefits for providing this kind of insurance to their employees."
                        insuranceWorth="50 Lakhs"
                        insuranceAmount="7,000"
                        productImgSrc={productImage}
                        form="true"
                        formHeading="GH Insurance"
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Health Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The term "Group Health Insurance" refers to an insurance policy that covers a group of employees under the same company. The plan covers a wide range of medical expenses, including ambulance rides, medicines, and specialist fees. The premiums of a group medical insurance plan are paid by the employer and they are purchased by companies or organizations as a perk to provide medical coverage to their employees</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Features of Group Health Insurance Plan</h3>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>It covers medical benefits for the employee primarily. The spouse, children, and dependent parents of the employee can be included as an add-on cover.</li>
                                            <li>Some policies have pre-existing illnesses and maternity care.</li>
                                            <li>Cashless hospitalization is available at hospitals, in most cases.</li>
                                            <li>Some plans reimburse specialists and other medical practitioners for following checkups.</li>
                                            <li>There is no requirement for medical screenings.</li>
                                            <li>Specialists and other medical practitioners may receive reimbursements for subsequent checkups.</li>
                                        </ul>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading2" className={`${productStyle.whoNeed}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Who Needs</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Health Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>If you own a business and have officially registered it, it's crucial to offer health insurance to your employees. This applies whether your business is small, just starting, or a large company. Providing health insurance ensures that everyone in your organization has access to medical coverage and can take care of their health needs. It's a beneficial practice for all involved.</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>Early Stage Startups <span className='d-block'></span>Buying a group personal accident insurance policy for your team will help you scale the organization faster by attracting & retaining great talents.</li>
                                            <li>SMEs <span className='d-none d-lg-block'></span>Group health insurance helps SME businesses manage their healthcare costs and ensure they can provide quality care to their employees. The proposition is even more attractive because it gives businesses the ability to customize healthcare plans and avail of tax benefits.</li>
                                            <li>Large Organizations <span className='d-block'></span>BimaKavach offers customized insurance solutions tailored to your needs. The policy covers all members uniformly regardless of their age, gender, or occupation. Our experts leave no stone unturned to make your insurance buying journey seamless.</li>
                                        </ul>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Group Health Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Nowadays, many companies are focusing more on their employees and providing them with corporate health insurance, which is a popular benefit. This insurance not only takes care of employees' medical needs but also makes them feel better about their company. It helps reduce the number of employees leaving the company and improves their productivity. Moreover, if employees choose to, their family members can also be covered by this insurance. Overall, both employees and employers gain advantages from this type of insurance.</p>
                                    </div>
                                </Container>

                                <div className={`bg-yellowLight3 ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Group Health Insurance Benefits for Employers</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-3 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Employee Retention</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>As several companies are offering a plethora of employee-associated benefits, employee retention has become increasingly challenging for an organization. Group Health Insurance encourages an employee to stay with the company, increasing employee retention</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Promotes Healthy Workplace Culture and Boosts Productivity</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>A comprehensive group insurance plan demonstrates how much you care for your employee's health and well-being. The more you care, the more productive and healthy your employees will be.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Tax Benefits</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Like all other business insurance premiums, Group health insurance premiums paid by employers are also tax-deductible as a business expense.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0 mt-4 mt-xl-5'>Group Health Insurance Benefits for Employees</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-3 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Pre-existing Disease is Covered From Day 1</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Unlike the retail policy, the Group Health Insurance policy may cover pre-existing illnesses and diseases from the moment an employee joins the organization.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Extensive Coverage With no Limit on Diseases</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Employee group health plans cover various ailments.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Larger Maternity Coverage</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>If opted for maternity cover, most of these plans cover both C-sections and normal deliveries, and some plans also provide coverage for newborns without a standard 90-day maternity period.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Negotiated Rates</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Insurance carriers negotiate rates with healthcare providers and facilities on behalf of the employer and employees. These negotiated rates are typically lower than what an individual would pay out-of-pocket, resulting in cost savings.</p>
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
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Coverage for pre-existing diseases</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A pre-existing disease is a medical condition or illness that an individual already has before seeking insurance coverage. Group health insurance coverage starts to cover pre-existing diseases from the very day an employee joins the company. There is no waiting period as such for any pre-existing disease.</div>
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
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>New-born babies are covered from the moment they are born. The coverage includes medical expenses incurred for the baby during the coverage period. This can include hospitalization expenses, consultations with pediatricians, vaccinations, diagnostic tests, medications and any necessary medical treatments related to the baby's health. However, such expenses may have certain limits and sub-limits.</div>
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
                                                    <div className='title-20 text-black mb-4'>There are a few standard exclusions among all these plans:</div>
                                                </Col>
                                            </Row>
                                            <ul className={`text-black title-20 ${productStyle.listData}`}>
                                                <li>Some policies may not cover the parents of an employee.</li>
                                                <li>The insurance does not cover non-allopathic treatments such as homeopathy, ayurveda, etc.</li>
                                                <li>A corporate health insurance policy is always limited in duration and is only valid during the employee's employment with the company.</li>
                                                <li>Expenses incurred in the treatment of AIDS and other diseases related to congenital defects.</li>
                                                <li>Alcohol or drug abuse-related illness or complications.</li>
                                            </ul>
                                            <div className='title-32 font-secondary font-weight-600 text-yellow mb-4 mt-4 mt-xl-5'>Add-on Extensions</div>
                                            <ul className={`text-black title-20 ${productStyle.listData}`}>
                                                <li>When purchasing group health insurance, companies can select extended coverages such as:</li>
                                                <li>The expenses associated with childbirth can be capped during maternity.</li>
                                                <li>There may be no waiting period for maternity cover. The insured members can receive coverage for maternity-related services from the inception of their health insurance policy.</li>
                                                <li>Within the maternity limit, newborn babies can be covered.</li>
                                                <li>OPD (Outpatient Department) coverage is also an option for employers.</li>
                                                <li>If the employee's existing sum assured is exhausted and they need more money to clear their dues, the employer can provide a corporate buffer.</li>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Group Health Insurance Examples</h3>
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
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Claim for Medical Expenses Cover</div>
                                                    <div className='mb-4'>
                                                        <div className='title-18 font-weight-500 text-black m-0'>An electrical cable manufacturing company with 100+ employees in Gurgaon decided to avail Group Health Insurance Policy. Mr. Rajiv, one of the employees of this organization, unfortunately, suffered a heart attack. The cardiologists placed a stent immediately after angioplasty. Thanks to the Group Health Insurance policy of this employer, Mr. Rajeev received a lump sum payment as per the policy terms, helping him cover his medical expenses and providing financial support during his recovery and rehabilitation.</div>
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
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Claim for Medical Expenses Cover</div>
                                                    <div className='mb-4'>
                                                        <div className='title-18 font-weight-500 text-black m-0'>An electrical cable manufacturing company with 100+ employees in Gurgaon decided to avail Group Health Insurance Policy. Mr. Rajiv, one of the employees of this organization, unfortunately, suffered a heart attack. The cardiologists placed a stent immediately after angioplasty. Thanks to the Group Health Insurance policy of this employer, Mr. Rajeev received a lump sum payment as per the policy terms, helping him cover his medical expenses and providing financial support during his recovery and rehabilitation.</div>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Group Health Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What is the difference between group Mediclaim and health insurance?"
                                content="The main difference between Group Health Insurance and Individual Health Insurance is that in a Group plan, the coverage is shared among a set of people related under a certain condition. Whereas an Individual health insurance policy covers only the individual policyholder."
                            />
                            <Accordion
                                title="Is medical insurance part of employees' CTC?"
                                content="Though it depends from company to company. But, mostly, the premium of Medical insurance provided by a company is usually a part of the CTC (cost to company) structure specified to the employees at the time of joining the company."
                            />
                            <Accordion
                                title="When it comes to claim admissibility, how does it differ by room type?"
                                content="In a group mediclaim policy, the claim admissibility may differ based on the room type chosen by the insured individual during their hospitalization. Usually, sub-limits (a specific percentage of the sum insured amount) are specified for different hospital expenses such as room rent. Thus, it is always advised to the policyholder to always stick to the room rent limit, to ensure smooth admissibility of his claim."
                            />
                            <Accordion
                                title="Is group health insurance mandatory for employees?"
                                content="If the employer has a Group Health Insurance policy in place, any new employee will automatically get covered by this policy"
                            />
                            <Accordion
                                title="What determines the premium for group health insurance?"
                                content={[<>
                                    <span>In Group Personal Health Insurance, premiums are calculated based on several factors that help assess the risk associated with providing coverage to a group of individuals.</span>
                                    <span className='mt-3 d-block'>The following factors are typically considered:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>The number of individuals included in the group</li>
                                        <li>Gender distribution of the group</li>
                                        <li>The average age of the group members</li>
                                        <li>Family composition of the employees</li>
                                        <li>The nature of the occupation or industry of the group members</li>
                                        <li>The chosen coverage limits for the group policy</li>
                                        <li>Additional benefits or riders opted for</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What is group insurance room rent capping?"
                                content="In a group mediclaim policy, sub-limits or caps (a specific percentage of the sum insured amount) are specified for different hospital expenses such as room rent. The claim admissibility may differ based on the room type the insured individual chose during the hospitalization. Thus, it is always advised to the policyholder to always stick to the room rent limit, to ensure smooth admissibility of his claim."
                            />
                            <Accordion
                                title="When it comes to group health insurance, how are preexisting conditions covered?"
                                content="In case you have a pre-existing disease, the insurance company might ask you to go for a medical check-up. The insurance premium will be based on the test results. The insurance company may refuse to offer a policy if the results are unfavorable. This is because, if you already have a pre-existing condition, the probability of claims rises."
                            />
                            <Accordion
                                title="How does group health insurance provide maternity benefits?"
                                content={[<>
                                    <span>Here's how group health insurance typically provides maternity benefits:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Pre and post-natal expenses - usually offer coverage 60 days before and 90 days after hospitalization.</li>
                                        <li>In-patient hospitalization - The cost of hospitalization (such as doctor's visit charges, surgeries, etc.) and room rent are covered.</li>
                                        <li>Type of delivery - Both types of deliveries (normal and c-section) are covered.</li>
                                        <li>Vaccination costs - The vaccinations for the baby begin soon after birth. Related costs are covered as per the WHO schedule.</li>
                                        <li>Lawful termination of pregnancy - The cost of legal termination is covered under the maternity Cover</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Do we need a pre-existing disease waiver?"
                                content="Pre-existing disease waiver in a Group Health Insurance Policy can be highly beneficial for insured members. It provides coverage for treatment and expenses related to pre-existing diseases from the inception of the policy, without imposing waiting periods or exclusions specific to those conditions. This will also ensure the employees can access necessary medical treatments and services for their pre-existing conditions without delay."
                            />
                            <Accordion
                                title="What is the difference between a cashless claim and a reimbursement claim in Group Health Insurance?"
                                content="In a cashless claim, you visit a hospital in your network and your health insurer approves some amount initially and pays the remaining amount after the treatment. Whereas, in a reimbursement claim you pay your hospital bills after treatment. In order for your claim to be approved, you must submit these bills and any other medical documents to your insurer."
                            />
                            <Accordion
                                title="How to make a reimbursement claim for Group Health Insurance?"
                                content={[<>
                                    <ul className={`${productStyle.listData}`}>
                                        <li>In the event of a hospitalization, inform the insurer as soon as possible.</li>
                                        <li>Within 7 days of discharge, submit the claim form and all required documents.</li>
                                        <li>Collect all bills, reports, and discharge summaries in original form.</li>
                                        <li>After checking the policy terms and conditions, the insurer will process the claim.</li>
                                        <li>Transfer the amount using a canceled cheque.</li>
                                        <li>The insurer will process the claim after checking the policy's terms and conditions.</li>
                                        <li>Transfer the amount using a canceled cheque.</li>
                                        <li>Within 15 days of receiving all the details, the insurer will transfer the funds.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="How to file a cashless claim for Group Health Insurance"
                                content={[<>
                                <ul className={`${productStyle.listData}`}>
                                    <li>Group health insurance cashless claims can be made by following the steps below.</li>
                                    <li>At the hospital, fill out a pre-authorization form.</li>
                                    <li>The TPA notifies the insurer that a pre-approval has been granted.</li>
                                    <li>The insurer approves the claim and provides some initial funds.</li>
                                    <li>The final settlement is made after the treatment has been completed according to the terms of the policy.</li>
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
