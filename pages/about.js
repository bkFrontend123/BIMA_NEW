import React,{useEffect} from 'react'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import TeamCard from '../component/TeamCard'
import BestBacked from '../component/Product/BestBacked'

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
            <Navbar />
            <div className='aboutUs'>
                <div className={`container `}>
                    <div className={`row `}>
                        <div className={`col-md-9 mx-auto px-md-5`}>
                            <div className='commnHeading text-start'>
                                <div className='polyBox border-primary bg-blueLight mb-md-4 mb-2 text-primary title-12 text-uppercase font-weight-700'>About Us</div>
                                <div className='title-60 font-secondary mb-md-3 mb-2 text-primary font-weight-700'>Bima, <span className='text-yellow fst-italic'>Simplified</span></div>
                                <p className='title-22 font-weight-500 text-primary mb-0'>We are committed to making Business Insurance Simple, Digital and Transparent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container aboutUs-teamCards pt-0`}>
                    <div className={`row `}>
                        <div className={`col-md-9 mx-auto px-md-5`}>
                            <div className={`row g-4 g-lg-5`}>
                                {TeamCardList.map((item) =>
                                    <div className={`col-lg-4`} key={item.id}>
                                        <TeamCard
                                            img={item.img}
                                            name={item.name}
                                            position={item.position}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className={`founder bg-yellow `}>
                    <div className={`container-fluid `}>
                        <div className={`row `}>
                            <div className={`col-lg-7 mx-auto `}>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`aboutBestBacked  `}>
                    <div className="d-none d-md-block" style={{height: "90px"}}></div>
                    <div className="d-blok d-md-none" style={{height: "50px"}}></div>
                    <BestBacked />
                </div>

            </div>
            <Footer />

            <style jsx scope>
                {`
                    
                    .aboutUs .commnHeading{
                        padding: 100px 0 80px 0;   
                    }
                    .aboutUs-teamCards{
                        padding-top: 110px 0;
                        padding-bottom: 110px;
                    }
                    .founder{
                        padding: 90px 0;
                    }
                    .founderSubtitle{
                        margin-bottom: 10px;
                    }
                    .founderTitle{
                        margin-bottom: 40px;
                    }

                    // .container{
                    //    max-width: 1520px;
                    // }
                    
                    

                    .title-64{
                        // font-size: 62px;
                    }
                    @media only screen and (max-width: 1450px) {
                        .aboutUs .commnHeading{
                            padding: 100px 0 80px 0;
                        }
                        .aboutUs-teamCards{
                            padding-top: 80px;
                            padding-bottom: 90px;
                        }
                        .title-60 {
                            font-size: 50px;
                            line-height: 70px;
                        }
                        .title-64 {
                            font-size: 50px;
                            line-height: 70px;
                        }
                      
                    }
                    @media only screen and (max-width: 992px) {
                        .container-fluid{
                            padding: 0 20px;
                        }
                        .title-60{
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-64 {
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .aboutBestBacked .title48{
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-24{
                            font-size: 18px;
                            line-height: 27px;
                        }
                        .title-20{
                            font-size: 16px;
                            line-height: 24px;
                        }
                        .title-21{
                            font-size: 15px;
                            line-height: 23px;
                        }
                        .title-18{
                            font-size: 15px;
                            line-height: 23px;
                        }
                        .title-16{
                            font-size: 12px;
                            line-height: 18px;
                        }


                        .founder{
                            padding: 46px 0;
                        }
                        .aboutUs .commnHeading{
                            padding-bottom: 50px;  
                            padding-top: 50px; 
                        }
                        .founderTitle{
                            margin-bottom: 20px;
                        }
                        .founderSubtitle{
                            margin-bottom: 0;
                        }
                        .founder .founderDescrip{
                            color: var(--vt-c-blueDark) !important;
                        }
                        .aboutUs-teamCards{
                            padding-bottom: 60px
                        }
                    }
                    @media (max-width: 575px) {
                        .aboutUs .commnHeading {
                            padding-bottom: 40px;
                            padding-top: 40px;
                        }
                        .title-22 {
                          font-size: 18px;
                          line-height: 27px;
                        }
                        .aboutUs-teamCards {
                            padding-bottom: 50px;
                        }
                    }
                   
                `}
            </style>
        </>
    )
}
