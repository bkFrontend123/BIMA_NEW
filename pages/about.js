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
                        <div className={`col-md-8 mx-auto`}>
                            <div className='commnHeading text-start text-md-center'>
                                <div className='polyBox border-primary bg-blueLight mb-md-4 mb-2 text-primary title-12 text-uppercase font-weight-700'>About Us</div>
                                <div className='title-60 font-secondary mb-md-3 mb-2 text-primary font-weight-700'> Get to Know Our  <span className='text-yellow fst-italic'> Amazing Team</span></div>
                                <p className='title-22 font-weight-500 text-black px-0 px-lg-5 mb-0'>Diverse, from different backgrounds, cultures & fields; Team BimaKavach represents what it means to be inherently Indian!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container aboutUs-teamCards pt-0`}>
                    <div className={`row `}>
                        <div className={`col-md-9 mx-auto px-md-5`}>
                            <div className={`row gx-md-5`}>
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
                <div className={`aboutBestBacked  `}>
                    <BestBacked />
                </div>
 
                <div className={`founder bg-yellow `}>
                    <div className={`container-fluid `}>
                        <div className={`row `}>
                            <div className={`col-lg-7 mx-auto `}>
                                <div className={`row `}>
                                    <div className={`col-lg-7 pe-xxl-5 `}>
                                        <h4 className='founderSubtitle title-21 font-secondary font-weight-600 text-primaryDark'>Notes from</h4>
                                        <h4 className='founderTitle title-36 font-secondary font-weight-600 text-primaryDark'>Our Founder</h4>
                                        <p className='founderDescrip title-21 font-weight-500 text-black pe-xxl-5 '>
                                            With over 8+ years of expertise in both B2C and B2B insurance, he specializes in Liability insurance. He has been leading strategic initiatives, directing business development, and insurance product development at BimaKavach.
                                        </p>
                                        <div className=''>
                                            <h5 className='title-18 font-secondary font-weight-500 text-white mb-0'>
                                                Tejas Jain
                                            </h5>
                                            <h6 className='title-18 font-secondary font-weight-400 text-white '>
                                                CEO
                                            </h6>
                                        </div>
                                    </div>
                                    <div className={`col-lg-4 offset-lg-1 d-none d-md-block`}>
                                        <Image
                                            className='founderImg'
                                            // loader={myLoader}
                                            src="/team/ceo.png"
                                            alt="CEO | Bimakavach"
                                            width={335}
                                            height={336}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        padding: 120px 0;
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
                            padding: 0 40px;
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
                        .title-22 {
                          font-size: 18px;
                          line-height: 27px;
                        }
                        .aboutUs-teamCards {
                            padding-bottom: 0;
                        }
                    }
                   
                `}
            </style>
        </>
    )
}
