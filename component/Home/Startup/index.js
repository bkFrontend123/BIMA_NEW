import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsApp from '../../Icons/WhatsApp'
function Startup(props) {


    const liabilityInsurance = [
        { id: "s1", titleLink: "", img: "/startup1.svg", title: "Directors & Officers Insurance" },
        { id: "s1", titleLink: "", img: "/startup4.svg", title: "General Liability Insurance" },
        { id: "s1", titleLink: "", img: "/startup2.svg", title: "Errors & Omissions Insurance" },
        { id: "s1", titleLink: "", img: "/startup5.svg", title: "Crime/Fidelty Insurance" },
        { id: "s1", titleLink: "", img: "/startup3.svg", title: `Cyber  Insurance` },
        { id: "s1", titleLink: "", img: "/startup6.svg", title: "Product Liability Insurance" },
    ]
    const assetInsurance = [
        { id: "s1", titleLink: "", img: "/startup7.svg", title: "Fire Insurance" },
        { id: "s1", titleLink: "", img: "/startup8.svg", title: "Marine Insurance" },
        { id: "s1", titleLink: "", img: "/startup9.svg", title: "Machinery Breakdown" },
        { id: "s1", titleLink: "", img: "/startup10.svg", title: "ContractorsAll Risk" },
        { id: "s1", titleLink: "", img: "/startup11.svg", title: `Erection All Risk` },
    ]

    const startupDivider = {
        flex: "0 0 90px",
        maxWidth: "90px"
    };
    return (
        <div className={`startup`} id={props.id}>
            <div className={`container `}>
                <div className={``}>
                    <div className={`row `}>
                        <div className={`text-center`}>
                            <h3 className='startupMainTitle title-48 font-secondary text-primary font-weight-600 mb-md-4'>Business Protection for <span className='text-yellow fst-italic'> Startups & SMEs</span></h3>
                            <p className='startupMainDescrip title-24  text-primary font-weight-500 '> Secure the business & stakeholders against lawsuit  expenses <span className='d-none d-xl-block'></span> Legal + Settlement</p>
                        </div>
                    </div>
                    <div className={`row startupCols`}>
                        <div className={`col-lg-9 mx-auto px-4 pt-1`}>
                            <div className='startupTitle  '>
                                <a className='title24 text-primary  text-decoration-none font-weight-700'>
                                    Liability Insurance
                                </a>
                            </div>
                            <div className='row '>
                                {liabilityInsurance.map((item) =>
                                    <div className='col-md-4 col-6 startupCols-cardCol onhoverAnimation'>
                                        <div className='startupCols-cardBox d-flex flex-column flex-md-row align-items-center'>
                                            <Image
                                                // loader={myLoader}
                                                src={item.img}
                                                alt="Bimakavach"
                                                width={77}
                                                height={64}
                                            />
                                            <div className='startupCols-cardBoxTitle title-18 text-primary font-weight-600'>
                                                <Link className='text-decoration-none text-primary' href={item.titleLink}>{item.title}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='row startupDivider'>
                                <div className={`col-12 d-none d-sm-block`} >
                                    <div className='h-1 bg-grayLight w-100'></div>
                                </div>
                            </div>
                            <div className='startupTitle  '>
                                <a className='title24 text-primary  text-decoration-none font-weight-700'>
                                    Asset Insurance
                                </a>
                            </div>
                            <div className='row '>
                                {assetInsurance.map((item) =>
                                    <div className='col-md-4 col-6 startupCols-cardCol startupCols-cardCol-Asset onhoverAnimation'>
                                        <div className='startupCols-cardBox d-flex flex-column flex-md-row  align-items-center'>
                                            <Image
                                                // loader={myLoader}
                                                src={item.img}
                                                alt="Bimakavach"
                                                width={77}
                                                height={64}
                                            />
                                            <div className='startupCols-cardBoxTitle title-18 text-primary font-weight-600'>
                                                <Link className='text-decoration-none text-primary' href={item.titleLink}>{item.title}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                        {/* <div className={`col-auto d-none d-sm-block`} style={startupDivider}>
                    <div className=' h-100'>
                        <div className='bg-black startupDivider h-100' style={{width: "1px"}} ></div>
                    </div>
                </div>
                <div className={`col-sm pt-1`}>
                    <div className='startupTitle text-center text-sm-start'>
                        <a className='title20 text-primary text-decoration-none font-weight-600'>
                            <i>Asset Insurance</i>
                        </a>
                    </div>
                        <div className='bg-primary divider mx-auto mx-sm-0 mt-1 mb-2'></div>
                        <div className='row pt-4'>
                        {assetInsurance.map((item)=>           
                                <div className='col-4 startupCols-cardCol onhoverAnimation'>
                                    <div className='startupCols-cardBox pe-md-3 mb-5'>
                                    <Image
                                        // loader={myLoader}
                                        src={item.img}
                                        alt="Bimakavach"
                                        width={77}
                                        height={64} 
                                    />                  
                                        <div className='startupCols-cardBoxTitle title16 text-primary mt-3 font-weight-600'>{item.title}</div>
                                    </div>
                                </div>
                            )}
                            
                            
                        </div>
                   
                </div> */}

                    </div>
                    <div className={`row startUp-bottom`}>
                        <div className={`col text-center`}>
                            <div className="d-flex justify-content-center flex-column flex-sm-row" >
                                <a className="btnCommon btnBorder border-2 border-primary  text-primary me-lg-5 text-decoration-none" type="submit"> <img className='me-2' src='/icons/calender.svg' width="22px" /> <span> Schedule a call </span> </a>
                                {/* <a className="btnCommon yellowBtn text-primary text-decoration-none mt-4 mt-sm-0" type="submit"> <img className='me-1' src='/icons/whatsapp.svg' width="22px"/><span> WhatsApp us</span></a> */}
                                <a className="btnCommon yellowBtn text-primary text-decoration-none mt-4 mt-sm-0" type="submit">
                                    <WhatsApp iconColor="primary" height="23" width="23" />
                                    <span className='ms-2'> WhatsApp us</span>
                                </a>
                            </div>
                            <p className='title15 mt-5 mb-0 text-blueGray font-weight-500 '> Say hello to a spam-free zone! We respect your privacy and <span className='d-sm-inline d-none'> <br></br></span> won't bombard you with unwanted calls. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block" style={{ height: "130px" }}></div>
            <div className="d-blok d-md-none" style={{ height: "80px" }}></div>

            <style jsx scope>
                {`
                
                .startupCols-cardCol:nth-child(3) .startupCols-cardBoxTitle {
                 
                }
                .startupMainTitle{
                    margin-bottom: 20px;
                 }
                 .startupMainDescrip{
                    margin-bottom: 44px;
                 }
                 .startupDivider{
                    margin-bottom: 64px;
                 }
                .startupTitle{
                    margin-bottom: 32px;
                }
                .startupTitle a{
                    position: relative;
                }
                .startupTitle a::before{
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    width: 100%;
                    height: 2px;
                    content: "";    
                    background: var(--vt-c-blue);                 
                }
                .startupCols-cardBox{
                    margin-bottom: 70px;
                }
                .startupCols-cardBoxTitle{
                    margin-left: 15px;
                    padding-right: 10px;
                }
                .startupCols-cardCol:nth-child(5) .startupCols-cardBoxTitle{
                    padding-right: 40px;
                }
                .startupCols-cardCol.startupCols-cardCol-Asset:nth-child(1) .startupCols-cardBoxTitle{
                    padding-right: 70px;
                }
                .startupCols-cardCol-Asset .startupCols-cardBoxTitle{
                    padding-right: 40px;
                }
                .startUp-bottom{
                  margin-top: 20px;
                }
                .startUp-bottom .btnCommon.yellowBtn{
                    padding-left: 48px; 
                    padding-right: 48px; 
                }
                .title15{
                    font-size: 15px;
                    line-height: 22px
                }

                @media screen and (max-width: 1399px) {
                     .startupCols-cardBoxTitle{
                        margin-left: 12px;
                        padding-right: 0;
                    }
                }
                @media screen and (max-width: 575px) {
                    .title-48 {
                        font-size: 30px;
                        line-height: 36px;
                    }
                    .title-24 {
                        font-size: 18px;
                        line-height: 27px;
                    }
                    .title-18 {
                        font-size: 12px;
                        line-height: 18px;
                    }
                     .startup .startupMainDescrip{
                        color: black !important;
                    }
                    .startupCols-cardBox{
                        margin-bottom: 40px;
                    }
                    .startupTitle{
                        text-align: center;
                    }
                    .startupCols-cardBoxTitle{
                        padding: 0;
                        margin: 0;
                    }
                    .startupCols-cardCol.startupCols-cardCol-Asset .startupCols-cardBoxTitle,
                    .startupCols-cardCol.startupCols-cardCol-Asset:nth-child(1) .startupCols-cardBoxTitle{
                        padding-right: 0;
                    }


                    .title15{
                        font-size: 14px;
                        line-height: 22px
                    }
                }
            `}
            </style>
        </div>
    )
}




export default Startup