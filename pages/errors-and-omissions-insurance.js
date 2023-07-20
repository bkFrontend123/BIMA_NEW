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

import productImage from '@/public/productImages/productImg3.png'
import expertImg from '../public/himaniImg.png'

export default function EAndO_Insurance() {
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
        router.push('/errors-and-omissions-flow');
    };
    return (
        <>
            <Head>
                <title>E&O Insurance | BimaKavach Insurance for Errors & Omissions</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Errors & Omissions Insurance"
                        description="Errors and Omissions Insurance protects companies from claims related to negligence or errors in professional services."
                        insuranceWorth="50 Lakhs"
                        insuranceAmount="20,000"
                        productImgSrc={productImage}
                        form="true"
                        formHeading="E&O Insurance"
                        customClass="eAndoBnr"
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Errors & Omissions Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Errors & Omissions Insurance acknowledges the inherent risk in offering expert services: the risk of making a mistake or failing to meet a client's expectations.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The unique value of E&O Insurance lies in its coverage of claims arising from your professional services (or tech product). Whether it's an oversight in a contract, copyright infringement, a missed deadline, an error in a financial analysis, or alleged negligence, E&O Insurance can cover the cost of defending your business in court, as well as any settlements or judgments you're required to pay.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Facing a claim without E&O Insurance can drain your time, resources, and focus from serving your clients. With an E&O policy, your insurer takes on much of the burden of a claim, allowing you to continue your work with minimal disruption.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>E&O insurance provides coverage for errors such as:</h3>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>Copyright infringement</li>
                                            <li>Defamation</li>
                                            <li>Errors, mistakes, or oversights incurred during the course of work</li>
                                            <li>Failure to meet a deadline or deliver a specific service promised to a client</li>
                                            <li>Professional negligence</li>
                                            <li>Failure to meet a specific standard of care, especially if outlined by a given profession</li>
                                        </ul>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading2" className={`${productStyle.whoNeed}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Who Needs</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Errors & Omissions Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>If your company performs a professional service, you run the risk of your client claiming that they suffered financial loss due to a faulty tech product or failure in your service. Errors & Omissions insurance is designed for companies that sell tech products and professional services.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The types of businesses that need professional liability coverage to mitigate their risk include:</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>SaaS, PaaS, IaaS</li>
                                            <li>Banks, NBFCs, Fintech</li>
                                            <li>Edtech</li>
                                            <li>E-commerce</li>
                                            <li>IT services</li>
                                            <li>B2B consulting</li>
                                            <li>Media & advertising</li>
                                            <li>Doctors, lawyers, architects, etc</li>
                                        </ul>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>The highest number of E&O claims in India are filed against architects, engineers, and lawyers.</p>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Errors & Omissions Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>In a tech company, the majority of work involves creating software, developing applications, managing data, and providing professional services. These activities come with inherent risks that can lead to financial losses and legal disputes. Errors and Omissions insurance is vital for your tech company because it provides protection against:</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Claims from Clients: <span className='d-block'></span>Despite your best efforts, errors, software bugs, or unintentional omissions can occur, potentially causing harm to your clients' businesses. E&O insurance provides coverage for claims arising from financial losses, property damage, or business interruptions caused by your products, services, or advice.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Legal Defense: <span className='d-block'></span>Defending your tech company against claims or lawsuits can be financially burdensome. E&O insurance not only covers settlements but also includes legal defense costs. This means you'll have the necessary resources to hire legal experts who specialize in technology-related litigation, ensuring a robust defense for your business.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Professional Services Coverage: <span className='d-block'></span>If your tech company provides professional services, such as consulting or implementation support, E&O insurance can protect you from claims related to errors, delays, or inadequate performance. This coverage ensures that your clients are financially compensated for any harm caused by mistakes or shortcomings in your professional services.</p>
                                    </div>
                                </Container>

                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Why is Errors & Omissions Insurance essential?</h3>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Cases involving allegations of copyright infringement, negligence in work, and defamation have increased by more than 50% in India in the recent years.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>As clients challenge any deficiency in service delivery mechanisms, the risk of facing financial loss claims is on the rise. Regardless of the quality of your offering, mistakes and dissatisfied customers are a part of doing business.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Errors & Omissions (E&O) insurance provides financial security, preserves your reputation, and instills confidence in clients. With E&O insurance, you can focus on delivering exceptional service without worrying about potential legal repercussions.</p>

                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mt-4 mt-xl-5 mb-0'>Key Factors to Consider When Purchasing E&O Insurance:</h3>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>Business size and risk exposure: Larger businesses typically face greater risks and should prioritize acquiring E&O insurance.</li>
                                            <li>Litigation-prone industries: If you operate in an industry with a high likelihood of legal disputes, securing E&O coverage is particularly essential.</li>
                                            <li>High-value clients and shipments: When dealing with clients who require a superior level of service or handling high-value shipments, having E&O insurance may be expected.</li>
                                            <li>Geographic location: If your business operates in an area with a high incidence of lawsuits, it is advisable to obtain E&O insurance coverage as soon as possible.</li>
                                        </ul>

                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mt-4 mt-xl-5 mb-0'>Discover the advantages of Errors & Omissions (E&O) insurance coverage:</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-4 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/legalCostsIcon.svg' width="80" height="80" alt="Legal Representation Costs" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Legal Representation Costs</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>E&O insurance safeguards you from the financial burden of legal representation expenses when facing lawsuits. Whether in court or negotiating with regulators, this coverage ensures you have the support you need,including the cost of settlements.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/employeeDishonestyIcon.svg' width="80" height="80" alt="Employee Dishonesty" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Employee Dishonesty</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Protect your business from third-party claims resulting from frauds or dishonest acts conducted by your employees. E&O insurance covers investigation costs, legal fees, and damages caused by their actions.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/subsidiaryCoverageIcon.svg' width="80" height="80" alt="Automatic Subsidiary Coverage" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Automatic Subsidiary Coverage</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Newly created or acquired subsidiaries will be seamlessly incorporated into the policy, requiring only a minimal amount of additional paperwork. However, this inclusion is contingent upon the acquired company being not more than one-fourth the size of the company implementing the policy.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/errorServiceIcon.svg' width="80" height="80" alt="Error in Service" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Error in Service</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>If an employee makes an error while providing a service then E&O insurance covers resulting claims.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/mitigationCostsIcon.svg' width="80" height="80" alt="Mitigation Costs" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Mitigation Costs</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>In case of errors and omissions, you might need to take steps to reduce or prevent further damage or loss. The policy can help cover the cost of repairs, replacements, and other expenses incurred in such cases</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/courtFeesIcon.svg' width="80" height="80" alt="Court Attendance Fees" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Court Attendance Fees</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Cover losses for attending court due to an E&O lawsuit, including lawyer's fees, travel expenses, and lost wages.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/lossDocumentIcon.svg' width="80" height="80" alt="Loss of Document" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Loss of Document</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>In case of a lawsuit alleging loss or destruction of important documents, this policy will cover the legal and claim charges</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/professionalEnquiryIcon.svg' width="80" height="80" alt="Professional Inquiry Investigation" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black mb-2'>Professional Inquiry Investigation</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'> If an investigation or inquiry is conducted by a professional regulatory body, such as an industry association or government agency, this coverage indemnifies the loss incurred by the insured. It covers the costs of legal fees, settlements, fines, or judgments that may arise from such an investigation.</p>
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
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Errors & Omissions Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Experience the convenience of Errors & Omissions (E&O) insurance with these key features:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Automatic Subsidiary Coverage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Newly created or acquired subsidiaries will be seamlessly incorporated into the policy, requiring only a minimal amount of additional paperwork. However, this inclusion is contingent upon the acquired company being not more than one-fourth the size of the company implementing the policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Professional Inquiry Investigation</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If an investigation or inquiry is conducted by a professional regulatory body, such as an industry association or government agency, this coverage indemnifies the loss incurred by the insured. It covers the costs of legal fees, settlements, fines, or judgments that may arise from such an investigation.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Mitigation Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>In case of errors and omissions, you might need to take steps to reduce or prevent further damage or loss. The policy can help cover the cost of repairs, replacements, and other expenses incurred in such cases</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Court Attendance Fees</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Cover losses for attending court due to an E&O lawsuit, including lawyer's fees, travel expenses, and lost wages.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Loss of Documents</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>In case of a lawsuit alleging loss or destruction of important documents, this policy will cover the legal and claim charges</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Error in Service</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If an employee makes an error while providing a service then E&O insurance covers resulting claims.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Employee Dishonesty</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Protect your business from third-party claims resulting from frauds or dishonest acts conducted by your employees. E&O insurance covers investigation costs, legal fees, and damages caused by their actions.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Legal Representation Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>E&O insurance safeguards you from the financial burden of legal representation expenses when facing lawsuits. Whether in court or negotiating with regulators, this coverage ensures you have the support you need,including the cost of settlements.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Important exclusions to note in Errors & Omissions (E&O) insurance:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Malicious Acts & Intentional Wrongdoing</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This insurance doesn't pay for any losses or damages if you purposely do something wrong or harmful. For example, if you lie about something important (that's called "intentional misrepresentation"), steal something (that's "theft"), or cheat in some way (that's "fraud"), and these actions cause harm or loss, the insurance won't cover it. These are considered intentional or malicious acts, which means you did them on purpose knowing they could cause harm.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Directors & Officers (D&O) Claims</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Claims related to breaches of fiduciary duty, mismanagement, or any other wrongful acts committed by your company's directors and officers are not covered under this policy. It is recommended to consider a separate Directors & Officers (D&O) insurance policy to safeguard against such claims.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Employee Illness or Injury</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>The policy does not extend to claims arising from bodily injury or illness sustained by an employee. To ensure protection against such claims, a dedicated Workers' Compensation insurance policy might be necessary.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Cyber Threats</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>E&O policy does not cover claims resulting from cyber risks, such as data breaches and cyber-attacks. This is covered separately when you purchase Cyber insurance.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Fines & Contractual Penalties</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Claims related to fines, penalties levied by a court or governmental agency, or arising from contractual breaches or negligence on part of the insured are not covered under this policy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Bodily Injury to Third Parties</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This policy does not provide coverage for any third-party bodily injury claims arising from alleged or actual negligence during the provision of your business services.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='title-20 font-weight-500 text-black mt-4'>Be aware of these exclusions to ensure your coverage aligns with your specific needs and risks.</p>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Errors & Omissions Examples</h3>
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
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Design Drawings Errors by Insured Result in Flawed Fabrication due to Drawings Errors</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insured provided multiple inaccurate design drawings, leading to improper fabrication and consequently necessitating re-fabrication. The principal incurred additional expenses and was required to employ extra manpower to address these issues.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insurer demonstrated a proactive approach by assuming control of the situation and successfully proving that the policyholder was not responsible for all the errors. This strategic intervention allowed for a substantial reduction in the damages ultimately borne by the policyholder and the compensation was paid by the Insurer.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/eAndO_incident1.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Medical Negligence Allegations Against Policyholder</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The claimant sought treatment from the gynecologist during her pregnancy. On the delivery date, it became apparent that the unborn baby was too large, necessitating a cesarean section to prevent complications. Despite this, the claimant experienced inadequate post-pregnancy care, and the doctor's ongoing negligence contributed to complications resulting in kidney failure.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insurer actively assumed control of the litigation, appointing attorneys to defend the doctor and covering all defense costs under the policy and the compensation was paid by the insurer</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/eAndO_incident2.png' />
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Errors & Omissions Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What is the jurisdiction/territory of the claim?"
                                content="The jurisdiction limit of a claim indicates that the policy will cover only claims lodged in the courts of the listed countries. The territorial limit relates to the location where the act, error, or omission takes place."
                            />
                            <Accordion
                                title="What limits do you need?"
                                content="An insured business can opt for any limit of E&O coverage depending on its needs, business model, and financial position. Some factors that can influence the limit include the size of the business, financial background, time spent in the business, risk appetite, and so on."
                            />
                            <Accordion
                                title="Do I need E&O if I already have D&O, general liability, and product liability insurance?"
                                content="The necessity of Errors and Omissions (E&O) insurance can depend on various factors, even if you already have Directors and Officers (D&O), general liability, and product liability insurance. For businesses operating in the financial services sector, including venture capital firms, private equity groups, and investment advisors, it's common to amalgamate both E&O and D&O insurance into a single policy. This combined coverage provides a comprehensive safeguard against claims stemming from either category of risk. Furthermore, if your business involves investors, operates within a regulated industry, or belongs to a sector frequently subject to management litigation, the need for D&O insurance becomes more pronounced."
                            />
                            <Accordion
                                title="Is errors and omissions insurance required by law?"
                                content="Errors and omissions insurance is not mandatory by law in India. However, some professional bodies and regulatory authorities may require certain professionals to carry this type of insurance as a condition of their membership or licensing. For example, the Institute of Chartered Accountants of India (ICAI) recommends its members to carry professional indemnity insurance. Similarly, the Insurance Regulatory and Development Authority of India (IRDAI) mandates insurance brokers to have professional indemnity insurance."
                            />
                            <Accordion
                                title="What are the most common reasons for claims in E&O policies?"
                                content={[<>
                                    <ul className={`${productStyle.listData}`}>
                                        <li>Some of the most common reasons for E&O claims are as follows:</li>
                                        <li>Breach of Confidentiality</li>
                                        <li>Breach of Privacy</li>
                                        <li>Defamation, Libel, and Slander</li>
                                        <li>IPR Infringement</li>
                                        <li>Breach of Contract</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Does E&O cover negligence?"
                                content="Yes, E&O insurance typically covers negligence on the part of professionals in the services they provide to clients. Negligence here is a legal term that refers to the failure to exercise reasonable care or skill in the performance of one's duties or responsibilities. E&O insurance provides protection to insured professionals against claims of negligence, errors, or mistakes that result in financial losses to their clients."
                            />
                            <Accordion
                                title="Is E&O insurance paid monthly or yearly?"
                                content="E&O insurance premiums are payable only on an annual basis. Monthly payment options are not available for this type of insurance."
                            />
                            <Accordion
                                title="Is E&O insurance tax deductible?"
                                content="Yes, E&O insurance premiums paid by professionals in India are generally tax-deductible as a business expense. This means that the premiums paid for E&O insurance can be claimed as a deduction against the income earned by the professional, thereby reducing their taxable income and lowering their tax liability."
                            />
                            <Accordion
                                title="Does E&O insurance have a deductible?"
                                content="Yes, E&O insurance policies typically have a deductible during the claim.which is the amount that the policyholder must pay out of pocket before the insurance coverage kicks in. The amount of the deductible can vary depending on the policy and the insurer, and it may be expressed as a specific rupee amount or as a percentage of the coverage limit. Generally, higher deductibles will result in lower premiums."
                            />
                            <Accordion
                                title="What are the two types of limits offered in E&O policies?"
                                content={[<>
                                    <span>The two types of limits offered in E&O policies are:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Aggregate limit: This is the total amount your insurance provider will cover for the policy term (normally one year).</li>
                                        <li>Per occurrence limit: This is the amount your provider will cover in a single claim.</li>
                                    </ul>
                                </>]}
                            />
                            <Accordion
                                title="Does E&O insurance cover breach of contract?"
                                content="No insurance policy can protect you if you knowingly breach a business contract. However, a breach of contract caused by your error or oversight may be protected by errors and omissions insurance (E&O). E&O insurance can cover breach of contract claims involving errors and omissions at work, services that have not been delivered, missed deadlines, budget overruns, incomplete work, and negligence allegations."
                            />
                            <Accordion
                                title="When should E&O claims be reported?"
                                content="You should report claims to your provider in writing as soon as you become aware of the situation. Include any pertinent paperwork with your written report or chronological account of the occurrence. Notify the provider if you receive a summons or other legal process notice. Also, notify them if you receive a written demand, a written demand for money or services, or if you are asked to produce a recorded statement or documentation."
                            />
                            <Accordion
                                title="Why do insurance claims get rejected?"
                                content={[<>
                                    <span>Insurance claims may get rejected for several reasons, including:</span>
                                    <ul className={`mt-3 ${productStyle.listData}`}>
                                        <li>Policy exclusions</li>
                                        <li>Non-disclosure of material information</li>
                                        <li>Inadequate documentation</li>
                                        <li>Failure to meet policy conditions</li>
                                        <li>Non-payment of premiums</li>
                                        <li>Fraud or misrepresentation</li>
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
            <Footer
                starContent="true"
            />

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
