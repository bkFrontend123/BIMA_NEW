import React,{useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'

import {Container, Row, Col} from 'react-bootstrap';

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import TeamCard from '../component/TeamCard'
import BestBacked from '../component/Product/BestBacked'

import arrowIcon from '../public/icons/abtArrowIcon.svg';

export default function About() {

    const TeamCardList = [
        { id: "t1", img: "/team/ceo.png", name: "Tejas Jain", position: "Founder & CEO" },
        { id: "t2", img: "/team/customer_chief.png", name: "Shruti Vishnoi", position: "Chief of Customer Success" },
        { id: "t3", img: "/team/operating_officer.png", name: "R.K Jain", position: "Chief Operating Officer" },
        { id: "t4", img: "/team/principle.png", name: "Milind Vitvekar", position: "Principal Officer" },
        { id: "t5", img: "/team/creative_director.png", name: "Vishal Sharma", position: "Chief Creative Director" },
        { id: "t6", img: "/team/chief_marketing.png", name: "Ankit Mittal", position: "Chief of Marketing" },
        { id: "t7", img: "/team/chief_staff.png", name: "Parthav Kidangoor", position: "Chief of Staff" },
        { id: "t8", img: "/team/mascot_officer.png", name: "Arya", position: "Chief Mascot Officer" },
        { id: "t9", img: "/team/marketing_officer.png", name: "Shravan Deshmukh", position: "Performance Marketing Officer" },
    ]
    useEffect(() => {
        document.body.classList.add("homePageBody")
      }, []);
    return (
        <>
            <Head>
                <title>About Us | BimaKavach</title>
                <meta name="description" content="BimaKavach is a direct business insurance broking firm catering to startups & SMEs in India. We are making commercial insurance simple, fast, and transparent." />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className='aboutUs'>
                <Container>
                    <Row>
                        <Col md={10} className={`mx-auto`}>
                            <div className='commnHeading text-start'>
                                <div className='title-60 font-secondary mb-md-3 mb-2 text-primary font-weight-700'>Bima, <span className='text-yellow fst-italic'>Simplified</span></div>
                                <p className='title-22 font-weight-500 text-primary mb-0'>We are committed to making Business Insurance Simple, Digital and Transparent</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className={`abtCntntBlock`}>
                    <Container>
                        <Row>
                            <Col md={10} className={`mx-auto`}>
                                <div className="abtCntntRow">
                                    <div className="abtCntntCol">
                                        <h3><span>Before <i><Image src={arrowIcon} width={6} height={11} alt="Arrow Icon" /></i></span>How We Began</h3>
                                        <p>With a clear aim, BimaKavach was established to simplify the complex process of business insurance. Our experience spanning four decades highlighted a significant issue - clients often felt overwhelmed by the extensive paperwork, confusing quote requirements, and the opaque nature of policy acquisition.</p>
                                        <p>In response, we devised a unique approach. We investigated various sectors, used our findings to create tailored insurance coverage, and developed standard policies that are customized to meet our client's specific needs. This ensures top-tier coverage for each client and allows us to leverage our partnerships with numerous insurance companies to secure the best prices.</p>
                                        <p>BimaKavach is built on trust. We have strong relationships with our clients and providers, underpinned by transparency and mutual respect. Our policies eliminate mis-spelling and streamline claims, establishing a trust-filled environment for all stakeholders.</p>
                                        <div className="abtCntntMedia">
                                            <i>
                                                <img src="/abtBeforeImg.png" alt="Before Image" />
                                            </i>
                                        </div>
                                    </div>
                                    <div className="abtCntntCol">
                                        <h3><span>Now <i><Image src={arrowIcon} width={6} height={11} alt="Arrow Icon" /></i></span>How We Are Going</h3>
                                        <p>Today, BimaKavach proudly serves over 500 companies nationwide, offering them comprehensive 24x7 claims support. Our diversified client base spans multiple sectors, including but not limited to manufacturing, trading, software, contracting, real estate, consulting, energy, education, and HR. From dynamic startups and ambitious SMEs to established listed companies, we accommodate the unique needs of businesses at all stages.</p>
                                        <p>Our portfolio now encompasses more than 17 meticulously curated business insurance policies, each customizable to protect your business's assets, liabilities, directors, and employees.</p>
                                        <p>We have a team of insurance experts working tirelessly to present the best insurance options for our clients. Our key focus is on simplicity, speed, and clarity, ensuring a seamless insurance experience for all our clients.</p>
                                        <div className="abtCntntMedia">
                                            <i>
                                                <img src="/abtNowImg.png" alt="Now" />
                                            </i>
                                        </div>
                                    </div>
                                    <div className="abtCntntCol">
                                        <h3><span>After <i><Image src={arrowIcon} width={6} height={11} alt="Arrow Icon" /></i></span>What Is Our Goal</h3>
                                        <p>At BimaKavach, we are driven by the vision of securing every Indian business with precisely the insurance coverage they require. As India forges its path as a global economic contender, its foundation relies heavily on the stability and continuity of Indian businesses. Our insurance policies are designed to shield these businesses from unforeseen circumstances, ensuring they thrive even in the face of adversity. We believe in bolstering India's economic growth and stability through well-insured businesses. At the core of our ethos are Simplicity, Speed, and Transparency. These values permeate everything we do:</p>
                                        <div className="abtInfoRow mt-4">
                                            <Row className="g-4">
                                                <Col lg={4}>
                                                    <div className="abtInfoCol">
                                                        <h4>Jargons, Simplified.</h4>
                                                        <p>We simplify the critical terminologies to make insurance easy to understand and purchase</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="abtInfoCol">
                                                        <h4>Efficiency at Every Step.</h4>
                                                        <p>We make the process of getting quotes and buying insurance as quick and easy as possible</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="abtInfoCol">
                                                        <h4>Transparent Trust.</h4>
                                                        <p>We offer competitive pricing and relevant coverages, so our customers know exactly what they're getting</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="abtCntntMedia">
                                            <i>
                                                <img src="/abtAfterImg.png" alt="After Image" />
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                <div className={`aboutUs-teamCards`}>
                    <Container>
                        <Row>
                            <Col md={10} className={`mx-auto`}>
                                <div className='title-26 font-secondary mb-md-3 mb-2 text-black font-weight-700'>Meet Our Amazing Enthusiasts</div>
                                <p className='title-18 font-weight-500 text-primary mb-4 mb-xl-5'>At the heart of BimaKavach is a vibrant team of professionals who share a passion for revolutionizing the insurance industry. Each team member brings a wealth of knowledge and a steadfast commitment to breaking down the complexities of insurance jargon, making the process more understandable for our clients.</p>
                                <Row className={`g-4 g-lg-5`}>
                                    {TeamCardList.map((item) =>
                                        <Col md={6} xl={4} key={item.id}>
                                            <TeamCard
                                                img={item.img}
                                                name={item.name}
                                                position={item.position}
                                            />
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
 
                <div className={`founder bg-yellow`}>
                    <Container>
                        <Row>
                            <Col md={10} className={`mx-auto`}>
                                <div className={`d-flex align-items-center gap-3 mb-4`}>
                                    <div>
                                        <Image
                                            className='founderImg'
                                            // loader={myLoader}
                                            src="/team/ceo.png"
                                            alt="CEO | Bimakavach"
                                            width={120}
                                            height={120}
                                        />
                                    </div>
                                    <div>
                                        <h4 className='founderSubtitle title-21 font-secondary font-weight-600 text-primaryDark mb-0'>Notes from</h4>
                                        <h4 className='founderTitle title-32 font-secondary font-weight-600 text-primaryDark  mb-0'>Our Founder</h4>
                                    </div>
                                </div>
                                <hr className='my-3 my-xxl-4 bg-black'></hr>
                                <p className='founderDescrip title-20 font-weight-500 text-black'>As the CEO of BimaKavach, I am dedicated to leading strategic initiatives, propelling business growth, and making business insurance more accessible for everyone. My passion lies in nurturing an inclusive corporate culture that values each member of our team and encourages their professional development.</p>

                                <p className='founderDescrip title-20 font-weight-500 text-black'>Our success rests on our responsiveness to our client's evolving needs. We strive not just to keep pace with the changing business landscape but to stay one step ahead, anticipating the challenges our clients might face. With my extensive experience in both B2B and B2C insurance, I am committed to delivering exceptional coverage that aligns with our client's unique requirements.</p>

                                <p className='founderDescrip title-20 font-weight-500 text-black'>I am proud of what we've accomplished so far, but I am even more excited about our future. We will continue to innovate, always seeking better ways to serve our clients and contribute positively to the insurance industry.</p>

                                <p className='founderDescrip title-20 font-weight-500 text-black'>At BimaKavach, our goal extends beyond offering insurance - we aim to provide peace of mind and build trust and security, one policy at a time.</p>

                                <p className='founderDescrip title-20 font-weight-500 text-black'>My heartfelt thanks to our dedicated team for their relentless efforts and to our clients for their trust in BimaKavach. Together, we will continue to forge a path toward a more secure future.</p>

                                <div className=''>
                                    <h5 className='title-21 font-secondary font-weight-700 text-primary mb-2'>
                                        Tejas Jain
                                    </h5>
                                    <h6 className='title-21 font-secondary font-weight-500 text-black'>
                                        CEO
                                    </h6>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`aboutBestBacked`}>
                    <div className="d-none d-md-block" style={{height: "80px"}}></div>
                    <div className="d-blok d-md-none" style={{height: "50px"}}></div>
                    <BestBacked />
                </div>

            </div>
            <Footer />

            <style jsx scope>
                {`
                    .aboutUs .commnHeading {
                        padding: 80px 0;   
                    }
                    .title-60 {
                        font-size: 50px;
                        line-height: 70px;
                    }
                    .title-64 {
                        font-size: 50px;
                        line-height: 70px;
                    }
                    .abtCntntCol + .abtCntntCol {
                        margin-top: 80px;
                    }
                    .abtCntntCol h3 {
                        font-size: 26px;
                        font-weight: 700;
                        color: var(--vt-c-blue);
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 16px;
                    }
                    .abtCntntCol h3 span {
                        background: var(--vt-c-yellow);
                        position: relative;
                        padding: 6px 12px;
                        font-size: 15px;
                        color: var(--black);
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                    }
                    .abtCntntCol h3 span i {
                        display: flex;
                        align-items: center;
                    }
                    .abtCntntCol p {
                        font-size: 18px;
                        font-weight: 500;
                        color: var(--black);
                        line-height: 28px;
                    }
                    .abtCntntMedia {
                        margin-top: 80px;
                        border: 3px;
                        border-style: solid;
                        border-color: transparent transparent var(--vt-c-yellow) transparent;
                        transition: all 0.3s ease 0s;
                    }
                    .abtCntntMedia:hover {
                        border-color: var(--vt-c-yellow);
                    }
                    .abtCntntMedia i {
                        position: relative;
                        //display: flex;
                        filter: grayscale(1);
                        height: 350px;
                        transition: all 0.3s ease 0s;
                        overflow: hidden;
                    }
                    .abtCntntMedia i img {
                        width: 100%;
                        //object-fit: cover;
                    }
                    .abtCntntMedia:hover i {
                        filter: grayscale(0);
                        height: 540px;
                    }
                    .abtInfoCol h4 {
                        font-size: 22px;
                        color: var(--gray);
                        font-weight: 600;
                        transition: all 0.3s ease 0;
                    }
                    .abtInfoCol p {
                        color: var(--gray) !important;
                        opacity: 0.5;
                        margin: 0;
                        transition: all 0.3s ease 0;
                    }
                    .abtCntntCol:hover .abtInfoCol h4 {
                        color: var(--vt-c-blueDark);
                    }
                    .abtCntntCol:hover .abtInfoCol p {
                        color: var(--vt-c-blue) !important;
                        opacity: 1;
                    }
                    .aboutUs-teamCards {
                        padding-top: 80px;
                        padding-bottom: 80px;
                    }
                    .founder {
                        padding: 80px 0;
                    }
                    .founderTitle {
                        margin-bottom: 40px;
                    }
                    .founderSubtitle {
                        margin-bottom: 10px;
                    }
                    .title-20 {
                        font-size: 18px;
                    }
                  
                    @media only screen and (max-width: 992px) {
                        .title-60 {
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-64 {
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .aboutBestBacked .title48 {
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-24 {
                            font-size: 18px;
                            line-height: 27px;
                        }
                        .title-20 {
                            font-size: 16px;
                            line-height: 24px;
                        }
                        .title-21 {
                            font-size: 16px;
                            line-height: 23px;
                        }
                        .title-18 {
                            font-size: 16px;
                            line-height: 24px;
                        }
                        .title-16 {
                            font-size: 12px;
                            line-height: 18px;
                        }
                        .aboutUs .commnHeading {
                            padding: 60px 0; 
                        }
                        .abtCntntCol + .abtCntntCol {
                            margin-top: 60px;
                        }
                        .abtCntntCol h3 {
                            font-size: 24px;
                        }
                        .abtCntntCol p {
                            font-size: 16px;
                            line-height: 24px;
                        }
                        .abtInfoCol h4 {
                            font-size: 20px;
                        }
                        .founder {
                            padding: 46px 0;
                        }
                        .founderTitle {
                            margin-bottom: 20px;
                        }
                        .founderSubtitle {
                            margin-bottom: 0;
                        }
                        .founder .founderDescrip {
                            color: var(--vt-c-blueDark) !important;
                        }
                        .aboutUs-teamCards {
                            padding: 60px 0;
                        }
                    }

                    @media (max-width: 767px) {
                        .aboutUs .commnHeading {
                            padding: 50px 0;
                        }
                        .abtCntntCol + .abtCntntCol {
                            margin-top: 50px;
                        }
                        .abtCntntCol h3 {
                            font-size: 22px;
                        }
                        .abtCntntMedia {
                            margin-top: 40px;
                        }
                        .abtCntntMedia i,
                        .abtCntntMedia i:hover {
                            height: auto;
                        }
                        .aboutUs-teamCards {
                            padding: 50px 0;
                        }
                        .title-22 {
                            font-size: 18px;
                            line-height: 27px;
                        }
                        .title-26 {
                            font-size: 22px;
                            line-height: 30px;
                        }
                    }
                    @media (max-width: 575px) {
                        
                    }
                   
                `}
            </style>
        </>
    )
}
