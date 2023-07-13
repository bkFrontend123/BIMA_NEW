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
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import WhatsApp from '../component/Icons/WhatsApp'
import IndustryBlock from '../component/IndustryBlock'
import ProductSchedule from '../component/Product/ProductSchedule'
import BestBacked from '../component/Product/BestBacked'
import HowGetStarted from '../component/Home/HowGetStarted'
import Accordion from '../component/Accordion'

import form from '@/assets/css/form.module.css'
import productStyle from '@/assets/css/product.module.css'

export default function WorkmensCompensation_Insurance() {
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
        router.push('/workmens-compensation-flow');
    };
    return (
        <>
            <Head>
                <title>Workmen Compensation Policy | BimaKavach Insurance for Workmen Compensation</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Workmen Compensation Policy"
                        description="A key requirement to ensure your business's compliance with labor laws, this policy is designed to provide financial coverage for your employees in case of workplace injuries or illnesses. It covers costs related to medical treatments, offers disability benefits, and, if necessary, provides death benefits. 
                        This policy keeps your business compliant and forms an essential safety net around your employees' futures.
                        Evaluate your business vulnerability. Secure the optimal policy in just 10 minutes. Avail professional guidance at every step."
                        insuranceWorth="3 Crore"
                        insuranceAmount=""
                        form="true"
                        formHeading="Analyse your Business Risk. Buy the right Policy within 10 Minutes"
                        customClass="wrkmnCmpBnr"
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
                            </div>
                        </Form>
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Workmen Compensation Policy?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Workmen Compensation Insurance, serves as a financial safeguard for employees encountering work-related injuries. According to the Employees’ State Insurance Act of 1948, all employers in India, particularly those managing manufacturing units with over 20 employees, are legally required to hold such an assurance policy.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>In case of a work accident resulting in injury or death, Employee Protection Assurance provides financial aid to both the employee and their family. It caters to employees who sustain injuries or become disabled due to mishaps at work locations such as construction zones, factories, plantations, mines, and more.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Features of Workmen Compensation Policy</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-4 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/compensationCalculationIcon.svg' width="80" height="80" alt="Compensation Calculation" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Compensation Calculation</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>This policy considers factors like the employee's age, role, and average monthly wage for compensation calculation.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/fixedRatesIcon.svg' width="80" height="80" alt="Fixed Rates" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Fixed Rates</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Fixed minimum and maximum compensation rates apply for death and disability cases, subject to periodic reviews.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/dependentCompensationIcon.svg' width="80" height="80" alt="Dependent Compensation" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Dependent Compensation</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>In the unfortunate event of an employee's death, their dependents become eligible for compensation from the employer.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/employeeProtectionIcon.svg' width="80" height="80" alt="Employee Protection" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Employee Protection</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>The enforcement of the Employee Protection Assurance policy falls under the purview of the 'Social Security Division' of the Ministry of Labour & Employment.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/implementationAssuranceIcon.svg' width="80" height="80" alt="Implementation Assurance" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Implementation Assurance</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Each state government appoints Compensation Commissioners dedicated to the effective implementation of this assurance policy.</p>
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Workmen Compensation Policy?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Companies with a workforce of more than 20 employees are mandated by law to possess this form of assurance. As per the Employees' State Insurance Act of 1948, employers are obligated to extend insurance benefits to their employees. Claims under this assurance can be categorized into four types, namely accidental death, permanent total disability, permanent partial disability, and temporary total disability.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>This policy is primarily designed to offer financial security to workers and their families in case of adverse workplace incidents.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-black mb-0'>You can raise a claim under WC insurance policy by following these steps:</h3>
                                        <ol className={`text-black title-20 mt-4 mt-xl-5 ${productStyle.listOrderData}`}>
                                            <li>Start by notifying the factory inspector promptly if  an accident occurs on your premises.</li>
                                            <li>Follow this up by formally informing the insurance company in writing about the worker's disability or unfortunate demise.</li>
                                            <li>The insurance company will deploy a professional investigator  to confirm the veracity of the claim.</li>
                                            <li>Ensure that you provide any documents requested by the  insurance company for further validation of the claim.</li>
                                            <li>If you receive a notice from the workmen's compensation commissioner, promptly forward it to your insurance company.</li>
                                            <li>Meanwhile, submit the claim form along with all necessary documentation to your insurance provider.</li>
                                        </ol>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Workmen Compensation Policy?</div>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>Financial coverage for employees who suffer injuries while on duty, ensuring their wellbeing and financial stability.</li>
                                            <li>Most workmen's compensation policies include coverage for not only permanent staff but also for temporary and contract workers, extending the protective umbrella to all your employees.</li>
                                            <li>Acquiring this insurance helps maintain legal compliance within your organization, ensuring you meet all regulatory requirements.</li>
                                            <li>If an injury leaves a worker incapacitated and unable to perform their duties, this policy assures them a consistent monthly income, allowing them to focus on recovery without financial distress.</li>
                                            <li>In the unfortunate event of a work-related fatality, workmen's compensation insurance steps in to provide death benefits, offering essential support to the bereaved family.</li>
                                            <li>Investing in workmen's compensation insurance can shield your business from hefty fines and penalties, promoting financial security and reputation preservation.</li>
                                        </ul>
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
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Workmen Compensation Policy</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Workmen's compensation insurance facilitates employers to offset the financial responsibilities related to their employees' work-related injuries or illnesses. Here's an overview of the principal protections provided by a standard Workmen's Compensation Insurance policy in India:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Medical Expenses Coverage:</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The policy covers medical costs stemming from work-related injuries or illnesses. This includes charges for hospital stays, doctors' consultations, diagnostic tests, medications, surgeries, and other necessary medical treatments. Immediate medical needs, like ambulance services or emergency care, are typically included. The policy may also extend to rehabilitation costs like physical therapy, vocational training, and necessary aids that assist the employee's recovery and return to work.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Physical Injury Coverage:</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The policy includes coverage for physical injuries sustained by employees in the course of their employment. This comprises injuries occurring on the employer's premises, during work-related activities, or while traveling for work. The policy also covers associated medical costs, including hospitalization, doctors' fees, diagnostic tests, medications, surgeries, and rehabilitation services.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Death or Disability Coverage:</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The policy provides benefits for death or disability resulting from work-related accidents or occupational diseases. Compensation is extended to the dependents or nominees of a deceased employee. If an employee suffers from permanent or temporary disability due to a work-related incident, the policy provides compensation aligned with the degree of disability. It may also cover rehabilitation costs for disabled employees, including medical treatments, physical therapy, vocational training, and assistive devices.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Occupational Diseases Coverage:</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The policy extends coverage for occupational diseases as outlined in the Workmen's Compensation Act, 1923 and its amendments. To claim this coverage, the employee must provide medical evidence verifying that the disease is a direct result of their occupation or workplace environment. Upon confirmation, the policy covers the relevant medical costs, including hospital stays, doctors' fees, diagnostic tests, medications, surgeries, and other necessary treatments.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Workmen compensation insurance policies come with certain exclusions, which may vary depending on the insurance provider and the specific policy terms. Some commonly encountered exclusions in these policies in India are:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col>
                                                    <ul className={`text-black title-20 ${productStyle.listData}`}>
                                                        <li>Assumed liabilities of the insured.</li>
                                                        <li>Injuries caused by war, foreign invasion, or mutiny.</li>
                                                        <li>Employees not classified as workers according to the Workmen Compensation Act.</li>
                                                        <li>Penalties or interests imposed on an employee due to legal complications.</li>
                                                        <li>Accidents or death caused by self-inflicted harm or intentional aggravation of an injury.</li>
                                                        <li>Health issues or accidents occurring while the employee was under the influence of drugs or alcohol.</li>
                                                        <li>Liabilities pertaining to the employees of contractors.</li>
                                                    </ul>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Workman's Compensation Examples</h3>
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
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Claim for dead employee in manufacturing company</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>ABC Manufacturing is a large industrial company that employs hundreds of workers. To protect their employees and comply with legal requirements, they have a workers' compensation insurance policy in place. Unfortunately, one of their workers died because of a mishap in the production unit. As ABC company has an WC insurance in place, the insurer agrees to indemnify the workers family for the accident.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/workmen_incident1.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Claim for injured employee in construction company</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>A 35 yr old young entrepreneur runs an e-commerce store exporting wallets to customers worldwide, using a third-party courier for shipping. Regrettably, the entrepreneur didn't secure marine insurance, resulting in lost goods during transit. This loss led to financial difficulties and dissatisfied customers. With an appropriate insurance policy in place, the entrepreneur might have been able to recover the losses from the misplaced shipments.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/workmen_incident2.png' />
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Workmen Compensation Policy</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What is the workmen compensation act in simple words?"
                                content="The Workmen's Compensation Act, 1923 is an Indian law that provides financial protection to workers who suffer injuries or disabilities while performing their job duties. The Act ensures that employees receive compensation for any injury, disability, or death arising out of and during the course of their employment. Under the Act, if a worker sustains an injury or dies due to an accident at the workplace, the employer is liable to pay compensation to the worker or their dependents. The compensation amount is determined based on the nature of the injury, the worker's monthly wages, and other factors. Since 2010, this Act has been known as the Employee's Compensation Act."
                            />
                            <Accordion
                                title="What is the difference between workmen's compensation and employee compensation?"
                                content="There is no significant difference in the legal provisions or the purpose of the Indian law. Both 'Workmen's Compensation' and 'Employees' Compensation' essentially refer to the same concept of providing financial protection and compensation to workers who suffer injuries, disabilities, or death in the course of their employment."
                            />
                            <Accordion
                                title="What are the salient features of the workmen's compensation act?"
                                content={[<>
                                    <span>Here are some of the key features of the Act:</span>
                                    <ul className={`mt-4 ${productStyle.listData}`}>
                                        <li>The Act covers employees across industries, including factories, mines, construction sites and more.</li>
                                        <li>The Act imposes a statutory liability on employers to compensate workers for injuries, disabilities, or death arising out of and during the course of their employment.</li>
                                        <li>It establishes a formula for calculating compensation based on the nature and extent of the injury or disability.</li>
                                        <li>It covers the reimbursement of medical expenses incurred by the worker for treatment related to the work-related injury or illness.</li>
                                        <li>The Act also requires employers to obtain insurance policies to cover their liability for compensation.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="How is workman's compensation calculated in India?"
                                content={[<>
                                    <span>The calculation of workmen's compensation in India, as per the provisions of the Workmen's Compensation Act, involves considering several factors. The key elements used in determining the compensation amount include:</span>
                                    <ul className={`mt-4 ${productStyle.listData}`}>
                                        <li>Monthly wages of the injured worker</li>
                                        <li>The extent and nature of the injury or disability suffered by the worker</li>
                                        <li>The age of the worker at the time of the injury</li>
                                        <li>Compensation Formula, as provided in the Act</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What are the rules of workmen’s compensation?"
                                content={[<>
                                    <span>The rules governing workmen's compensation in India are outlined under the Workmen's Compensation Act and its associated regulations. While the specific rules may vary between states, here are some common aspects and provisions:</span>
                                    <ul className={`mt-4 ${productStyle.listData}`}>
                                        <li>The Act establishes the employer's liability to provide compensation for work-related injuries, disabilities, or death.</li>
                                        <li>Employers are required to report any work-related accidents resulting in death or serious injuries to the appropriate authorities within the specified time frame.</li>
                                        <li>Employers are mandated to obtain insurance policies to cover their liability for compensation.</li>
                                        <li>It establishes a formula for calculating compensation based on the nature and extent of the injury or disability.</li>
                                        <li>It covers the reimbursement of medical expenses incurred by the worker for treatment related to the work-related injury or illness.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Who is eligible for workman's compensation?"
                                content={[<>
                                    <span>The Workmen's Compensation Act or Employees Compensation Act applies to the following entities:</span>
                                    <ul className={`mt-4 ${productStyle.listData}`}>
                                        <li>Employees working in mines, docks factories, plantations, oilfields, construction establishments, and other establishments listed in Schedule II of the Act.</li>
                                        <li>Persons recruited for working abroad and those employed outside India, as mentioned in Schedule II of the Act.</li>
                                        <li>Person recruited as the helper, mechanic, cleaner, driver or others in connection with a motor vehicle and to the members of the crew of an aircraft.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Where is workmen’s compensation applicable?"
                                content={[<>
                                    <span>The Workmen's Compensation Act is applicable to the following entities:</span>
                                    <ul className={`mt-4 ${productStyle.listData}`}>
                                        <li>Employees working in mines, docks factories, plantations, oilfields, construction establishments, and other establishments listed in Schedule II of the Act.</li>
                                        <li>Persons recruited for working abroad and those employed outside India, as mentioned in Schedule II of the Act.</li>
                                        <li>Person recruited as the helper, mechanic, cleaner, driver, or others in connection with a motor vehicle and to the members of the crew of an aircraft.</li>
                                        <li>Please note that this act does not apply to the members of the armed forces & workmen covered under the ESI Act.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What is the process of WC claims?"
                                content={[<>
                                    <span>The following process must be followed:</span>
                                    <ul className={`mt-4 ${productStyle.listData}`}>
                                        <li>The insured must immediately notify the insurance provider of the occurrence of the incident.</li>
                                        <li>If the accident occurs at a manufacturing facility, the factory inspector must be notified promptly.</li>
                                        <li>The claim must subsequently be put forward in writing, together with all appropriate documents.</li>
                                        <li>A representative from the insurance provider verifies the claim.</li>
                                        <li>Depending on the outcome of the verification, the insurer may approve or refuse the claim.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="What can be the maximum claim in WC policy?"
                                content="The maximum claim amount under a Workmen's Compensation policy in India can vary depending on the terms and conditions of the insurance policy and the specific provisions of the insurance company. The compensation limit for workmen's compensation in India is determined by the Employees' Compensation Act, which sets the maximum amounts for different types of injuries and disabilities"
                            />
                            <Accordion
                                title="Is workmen policy compulsory?"
                                content="Yes, workmen's insurance, also known as workers' compensation insurance, is compulsory in India for certain categories of employers. This requirement is specified under the Employees' Compensation Act, which makes it mandatory for employers to provide compensation to their employees in the event of work-related injuries, disabilities, or death."
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
                                    <Image src="/prdct_SDT_icon.svg" width="272" height="272" alt="Simple Digital & Transparent" />
                                </div>
                            </div>
                            <div className={`mt-5 ${productStyle.productStartupBottom}`}>
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
            <Footer
                starContent="true"
            />

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
