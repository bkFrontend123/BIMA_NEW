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

import productImage from '@/public/productImages/productImg4.png'
import expertImg from '../public/himaniImg.png'

export default function Cyber_Insurance() {
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
        router.push('/cyber-flow');
    };
    return (
        <>
            <Head>
                <title>Cyber Insurance - Get Instant Quotes for Business | BimaKavach</title>
                <meta name="description" content="Cyber Insurance protects individuals and organizations from losses from cyberattacks and data breaches. Get your customized insurance from BimaKavach." />
                <link rel="canonical" href="" />
            </Head>
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Cyber Insurance"
                        description="A vital tool in your risk management strategy and your shield against digital threats in an era of prevalent cyber-attacks."
                        insuranceWorth="1 Crore"
                        insuranceAmount="38,000"
                        productImgSrc={productImage}
                        form="true"
                        formHeading="Cyber Insurance"
                        customClass="cybrBnr"
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Cyber Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>A cyber insurance policy covers a broad range of risks such as credit card data leaks, data breaches, cyber-attacks, and other digital threats. Whether it's a data breach where sensitive customer information is exposed, a ransomware attack that holds your systems hostage, or a business email compromise that tricks your employees into wiring money to criminals, cyber insurance has you covered.</p>

                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Also referred to as 'cyber risk insurance' or 'cyber liability insurance', this policy can help cover the costs of responding, including legal fees, public relations efforts, and notifying affected customers. It not only covers damages caused by cyber assaults on bank accounts, credit and debit cards linked to your website, but also unintentional payments made using digital wallets.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>How to Spot a Cyber Attack:</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-4 g-lg-5'>
                                                <Col lg={3}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/fileIcon.svg' width="80" height="80" alt="File or program malfunctions" />
                                                            <p className='title-24 font-weight-600 text-black mt-2 mb-0'>File or program malfunctions</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={`${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/passwordIcon.svg' width="80" height="80" alt="Unauthorized password changes" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Unauthorized password changes</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/appearanceIcon.svg' width="80" height="80" alt="Appearance of unwanted software or spyware" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Appearance of unwanted software or spyware</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/pluginIcon.svg' width="80" height="80" alt="Difficulty installing plugins" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Difficulty installing plugins</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={`${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/scanningIcon.svg' width="80" height="80" alt="Random file scanning" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Random file scanning</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/browserIcon.svg' width="80" height="80" alt="Unusual toolbars on your internet browser" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Unusual toolbars on your internet browser</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/internetIcon.svg' width="80" height="80" alt="Persistent pop-ups while accessing the internet" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Persistent pop-ups while accessing the internet</h3>
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
                                        <div className='title-28 font-black font-weight-700 text-black'>Cyber Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>According to a report by Nordlocker, small businesses with an employee base of 500 are at the highest risk of ransomware attacks, accounting for around 54 percent of total attacks between Jan ‘20 to Jul ‘22.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>The top five sectors prone to cyber attacks in India are:</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-4 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/technologyIcon.svg' width="80" height="80" alt="Information Technology" />
                                                            <p className='title-24 font-weight-600 text-black mt-2 mb-0'>Information Technology</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/manufacturingIcon.svg' width="80" height="80" alt="Manufacturing" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Manufacturing</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/financeIcon.svg' width="80" height="80" alt="Finance" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Finance</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/energyIcon.svg' width="80" height="80" alt="Energy" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Energy</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/consumerIcon.svg' width="80" height="80" alt="Consumer service" />
                                                            <h3 className='title-24 font-weight-600 text-black mt-2 mb-0'>Consumer services</h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='title-20 mb-0 text-black font-weight-500 my-4 my-lg-5'>Almost every organization in today's digital age relies on technology in their everyday operations. Customers' names, addresses, and financial information are handled by a wide range of businesses, including IT services, product corporations, e-commerce companies, finance firms, real estate brokers, online marketplaces, restaurants, and many more. All such organizations must carry cyber liability insurance to safeguard themselves against the risk of internet fraud.</p>
                                            <h3 className='title-36 font-secondary font-weight-700 text-primary my-4 my-xl-5'>What happens after a cyber security breach?</h3>
                                            <Row className='g-4 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/damageIcon.svg' width="80" height="80" alt="Reputation damage" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Reputation damage</h3>
                                                            <p className='title-18 font-weight-500 text-black mt-2 mb-0'>A breach can harm your company's reputation, potentially leading to lost customers and decreased trust</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/finesIcon.svg' width="80" height="80" alt="Heavy fines" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>Heavy fines</h3>
                                                            <p className='title-18 font-weight-500 text-black mt-2 mb-0'>If sensitive financial information is compromised, you may face substantial fines from credit and debit card companies.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/transferIcon.svg' width="80" height="80" alt="False wire transfers" />
                                                            <h3 className='title-24 font-secondary font-weight-600 text-black my-2'>False wire transfers</h3>
                                                            <p className='title-18 font-weight-500 text-black mt-2 mb-0'>Cybercriminals may attempt to make false wire transfers using your clients' online banking credentials if your computer system is hacked.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Cyber Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>There are some shocking statistics related to cyber attacks in India reported by Cisco’s report titled ‘Cybersecurity for SMBs: Asia Pacific Businesses Prepare for Digital Defense’.</p>
                                        <ul className={`text-black title-20 mt-4 ${productStyle.listData}`}>
                                            <li>74% of SMEs suffered a cyber attack in 2021.</li>
                                            <li>62% of those attacked suffered a cost more than 3.5 crore.</li>
                                            <li>60% of small enterprises that face a cyberattack go out of business within six months.</li>
                                        </ul>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Such statistics push cyber security and insurance to the forefront of every business’s priorities.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Mitigating financial losses caused by cyber threats such as data breaches, system intrusions, and ransomware attacks is crucial for corporations to safeguard their operations and reputation.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Cyber insurance provides coverage for a range of costs associated with cybercrimes, including investigative charges, data restoration costs, and crisis management fees. By purchasing cyber risk insurance, corporations can ensure continued success in the face of ever-evolving cyber threats.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>The Cost of not Having Cyber Fraud Insurance:</h3>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='g-4 g-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/bLossIcon.svg' width="80" height="80" alt="Business loss compensation to clients" />
                                                            <p className='title-18 font-weight-500 text-black mt-2 mb-0'>Business loss compensation to clients</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/feesIcon.svg' width="80" height="80" alt="Ransom fees for restoring stolen data" />
                                                            <p className='title-18 font-weight-500 text-black mt-2 mb-0'>Ransom fees for restoring stolen data</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/forensicIcon.svg' width="80" height="80" alt="Cyber forensic investigation costs" />
                                                            <p className='title-18 font-weight-500 text-black mt-2 mb-0'>Cyber forensic investigation costs</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/legalIcon.svg' width="80" height="80" alt="Legal attorney fees" />
                                                            <p className='title-18 font-weight-500 text-black mt-2 mb-0'>Legal attorney fees</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol} ${productStyle.lightYellowSecCardColNew}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/monitoringIcon.svg' width="80" height="80" alt="Credit monitoring expenses" />
                                                            <p className='title-18 font-weight-500 text-black mt-2 mb-0'>Credit monitoring expenses</p>
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
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Cyber Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exclusions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Cyber insurance covers a wide range of costs that may occur in a cyber-attack. Here are some of the key coverages offered by cyber insurance policies:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Legal Representation Costs</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Provides policyholders with the resources necessary to hire a lawyer to represent their business in court, negotiations with regulators, and to cover the cost of any settlements or judgments.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Malware Attack</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>A malware attack can cause significant harm to a business's computer systems. In such case this coverage provides the resources necessary to restore the affected systems and defend any legal claims made by victims.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Identity Theft</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Provides financial protection in the event of identity theft, and covers the cost of legal representation and settlements, as well as the cost of prosecuting third-party claims and other expenses related to the theft.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Cyber Intrusion Losses</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Offers protection against financial losses due to cyber intrusions that result in unauthorized payments to third parties.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Phishing</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Protects businesses against the unauthorized access of sensitive information and covers financial losses due to the loss of such information.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Cyberstalking</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Provides protection for businesses that are stalked or harassed using electronic means, and covers the cost of legal representation in the event of a lawsuit.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Cyber Extortion</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Protects businesses that are the victims of an extortion attempt that involves the use of electronic means, such as email or the internet.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Data Breach or Privacy</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Provides legal expense coverage in the event of a data breach or invasion of privacy.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Computer Forensics</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>In the event of a data breach, the policy provides the resources necessary to hire computer forensics experts to identify the breach, control and prevent future damage, and investigate its cause and extent.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Reputational Damage</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Offers resources to help mitigate the public relations consequences of a data breach and covers the cost of brand aversion for a set period following the cyber incident.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Fines and Penalties</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Protects businesses from the financial penalties and fines imposed by government or regulatory bodies as a result of a cyber incident or data breach.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Extended Reporting Period</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If a policy is terminated or not renewed, this coverage provides an extended period for the insured to discover and report any claims by paying an additional premium.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Cyber insurance offers many exclusions. Some of the major exclusions in the insurance policy are given below -</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Email Spoofing and Phishing</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Some cyber insurance policies may not provide coverage for certain types of social engineering attacks. Instead, these attacks are typically included under commercial crime insurance policies. Examples of such attacks include email spoofing and phishing.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Physical Injury, Disease, Disability, Sickness, or Death</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Claims related to physical injury, disease, disability, sickness, or death are not covered under a cyber insurance policy. However, claims related to mental injury or anguish resulting from a breach of data protection law by the company are included.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Incidents/Litigations Prior to Policy Commencement</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Claims arising from incidents or acts committed before the policy's start date, such as cyberstalking, IT theft loss, malware damage to computer systems, phishing and email spoofing, cyber extortion, privacy breaches, and data breaches by third parties, are not covered.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Losses or Damages Caused by War or Government Actions</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This policy does not cover claims arising from war or warlike scenarios, including invasion, acts of foreign enemies, armed conflict, rebellion, revolution, civil war, government confiscation, or damage to property by authorities.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Dishonest or Improper Conduct</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Claims resulting from intentional non-compliance with a ruling, fraudulent acts by the policyholder, or criminal breaches of law or regulation committed by employees, outsourcers, or partners are excluded from coverage.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Contractual Liability</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Claims related to contractual and non-contractual incentives offered by the policyholder to customers or clients, such as service rebates, price reductions, credits, promotions, awards, or other incentives, are not covered under this policy.</div>
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Cyber Claims Examples</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={`tabContainer my-4 my-lg-5 ${productStyle.inciTab}`}>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all active">Incident 1</span>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all">Incident 2</span>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all">Incident 3</span>
                                </div>
                                <div className={`pt-1 overflow-hidden ${productStyle.inciTabPanel}`}>
                                    <div data-incitab className={`${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Ransomware Attack on Insured's Server</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insured experienced a ransomware attack on their server, resulting in encrypted files and a ransom note from the attackers. The insured claimed compensation for the costs of forensic investigation, credit monitoring, and business interruption.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insurer proactively assisted the insured in evaluating the severity of the data compromise and appointed a forensic investigator to assess and contain the threat.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/cyber_incident1.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Breach of Insured Customers’ Backup</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insured's customers experienced blocked accounts, altered credentials, and encrypted files due to a Maze Ransomware attack on their server. The attackers demanded a ransom of USD 1 Million to provide the decryption keys. The insured's backup was also compromised and encrypted.</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insurer appointed ransomware experts to manage the incident and effectively negotiated the ransom amount paid.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='incident/cyber_incident2.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Data Held Hostage By Ryuk Ransomware</div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Incident</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>An insured fell victim to the Ryuk ransomware, a highly destructive form of malware known for its high ransom demands. Before the attack, the insured was infected with a banking Trojan, allowing the attacker to access internal financial information. The ransom demanded exceeded $1.5 million, but the company chose not to pay. As a result, the attack made the company's data inaccessible..</div>
                                                    </div>
                                                    <div className='mb-4'>
                                                        <div className='title-26 font-weight-600 text-black m-0'>Resolution</div>
                                                        <div className='title-18 font-weight-500 text-black m-0'>The insurer hired professionals specialized in handling ransomware incidents and successfully facilitated productive negotiations regarding the amount of ransom to be paid.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/incident/cyber_incident2.png' />
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
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Cyber Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What is the jurisdiction/territory limit of the coverage/claim?"
                                content="The jurisdiction limit of a claim refers to the countries where the policy will cover claims filed in the courts. The territorial limit pertains to the location where the cyber attack took place."
                            />
                            <Accordion
                                title="How much cyber insurance coverage do I need?"
                                content="The amount of cyber insurance coverage a business requires will depend on its risk and exposure. Factors to consider include the size of the organization, type of business, amount of sensitive data, and potential costs of a cyber incident."
                            />
                            <Accordion
                                title="Is email spoofing/phishing covered under cyber insurance?"
                                content="No, email spoofing and phishing are covered under crime/fidelity insurance."
                            />
                            <Accordion
                                title="What would be the out-of-pocket cost for a cyberattack without cyber insurance?"
                                content="In the event of a cyberattack, policyholders may face several costs, including forensic investigation, notification to affected parties, credit monitoring services, and lost income or business interruption."
                            />
                            <Accordion
                                title="Is cyber insurance worth it for small businesses?"
                                content="Small businesses can still face cyberattacks and losses but with proper cyber insurance, they can compensate for these risks. As technology is becoming increasingly integrated into all types of businesses, even small companies can safeguard their financial losses from cyberattacks."
                            />
                            <Accordion
                                title="Are cyber insurance premiums tax deductible?"
                                content="Yes, cyber insurance premiums are tax-deductible as business expenses."
                            />
                            <Accordion
                                title="Does cyber insurance cover property damage?"
                                content="Yes, if a cyberattack causes damage to a policyholder's physical property, such as computer systems, the policy may provide coverage for the cost of repairing or replacing the damaged property."
                            />
                            <Accordion
                                title="Is it difficult to get cyber insurance?"
                                content="No, answering a few basic questions on the BimaKavach platform can provide you with customized quotes for cyber insurance policies within 10 minutes."
                            />
                            <Accordion
                                title="How do I file a cyber insurance claim?"
                                content="It's recommended to seek expert advice for both cyber insurance quotes and claim settlements. BimaKavach's executives can assist in the claim settlement process."
                            />
                            <Accordion
                                title="Is cyber insurance the same as professional liability insurance?"
                                content="Cyber Insurance helps companies recover from cyberattacks, while professional liability insurance protects against claims arising from alleged errors, omissions, or negligence in providing professional services."
                            />
                            <Accordion
                                title="What is cyber security?"
                                content="Cyber security involves protecting a business's assets and employees from cyberattacks. To get a cyber security quote, provide a few details about your company and a team member will contact you to discuss your needs. With BimaKavach, you can receive the best product recommendations for cyber insurance quotes from top insurers within 10 minutes."
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
