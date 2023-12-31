import React from 'react'
import Image from 'next/image'

function Business() {
    const businessInsurance = ([
        {
            id: "b1", title: "Apply in 10 minutes or less", checkBoxData: [
                {
                    id: "b1-1",
                    isCheckbox: true
                },
                {
                    id: "b1-2",
                    isCheckbox: true
                },
                {
                    id: "b1-3",
                    isCheckbox: true
                }
            ]
        },
        {
            id: "b2", title: "Same day policy delivery", checkBoxData: [
                {
                    id: "b2-1",
                    isCheckbox: false
                },
                {
                    id: "b2-2",
                    isCheckbox: true
                },
                {
                    id: "b2-3",
                    isCheckbox: true
                }
            ]
        },
        {
            id: "b3", title: "Exclusive coverages tailored for your business", checkBoxData: [
                {
                    id: "b3-1",
                    isCheckbox: false
                },
                {
                    id: "b3-2",
                    isCheckbox: false
                },
                {
                    id: "b3-3",
                    isCheckbox: true
                }
            ]
        },
        {
            id: "b4", title: "AM Best rating of A (Excellent)", checkBoxData: [
                {
                    id: "b4-1",
                    isCheckbox: false
                },
                {
                    id: "b4-2",
                    isCheckbox: false
                },
                {
                    id: "b4-3",
                    isCheckbox: true
                }
            ]
        },
        {
            id: "b5", title: "One on one claim support", checkBoxData: [
                {
                    id: "b5-1",
                    isCheckbox: false
                },
                {
                    id: "b5-2",
                    isCheckbox: false
                },
                {
                    id: "b5-3",
                    isCheckbox: true
                }
            ]
        },

    ])
    return (
        <div className={`businessInsurance  `}>
            <div className={`container `}>
                <div className={`row text-center`}>
                    <div className={`col-md-8 mx-auto`}>
                        <div className='commnHeading'>
                            <div className='title-36 font-secondary mb-3 text-primary font-weight-700'>Why <span className='text-yellow fst-italic'>BimaKavach</span></div>
                            <p className='title-22 font-weight-500 text-primary px-0 px-lg-5 mb-0 mb-lg-5 pb-xxl-4'>Get Quotes and Policies in Minutes, not Weeks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container px-3`}>
                <div className={`row@ mt-5 d-none@ d-md-block`}>
                    <div className='border-primary  businessInsurance-box table-responsive ' style={{ border: "2px solid" }}>
                        <div className="table-responsive d-none">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className='title24 pb-4 font-weight-600 text-primary text-center' scope="col"></th>
                                        <th className='title24 pb-4 font-weight-600 text-primary text-center' scope="col">
                                            <Image src="/logo-white.svg" width={195} height={25} alt='Bimakavach Logo' loading="lazy" />
                                        </th>
                                        <th className='title24 pb-4 font-weight-600 text-primary text-center' scope="col">Offline Brokers</th>
                                        <th className='title24 pb-4 font-weight-600 text-primary text-center' scope="col">Digital Brokers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {businessInsurance.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className='businessInsurance-colBox title24 font-weight-500'>
                                                    {item.title}
                                                </div>
                                            </td>
                                            {item.checkBoxData.map((obj) => (
                                                <td className='text-center businessInsurance-col' key={obj.id}>
                                                    <div className='businessInsurance-colBox'>
                                                        <Image src={obj.isCheckbox ? "/tickTrans.svg" : "/crossTrans.svg"} width={43} height={44} alt={obj.isCheckbox ? "Check Icon" : "Cross Icon"} loading="lazy" />
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <table className="table table-borderless align-middle">
                            <thead className='py-5'>
                                <tr>
                                    <th className='title24 pb-4 font-weight-600 text-primary text-center' scope="col"></th>
                                    <th className='title24 pb-4 font-weight-600 text-primary text-center' scope="col">
                                        <Image src="/logoTextWhite.svg" width={195} height={25} alt='Bimakavach Logo' loading="lazy" />
                                    </th>
                                    <th className='title24 pb-4 font-weight-600 text-primary text-center' scope="col">Offline Brokers</th>
                                    <th className='title24 pb-4 font-weight-600 text-primary text-center' scope="col">Digital Brokers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='businessInsurance-colBox title24 text-primary font-weight-500'>
                                            Quick Insurance Quotes
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickWhiteTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='businessInsurance-colBox title24 text-primary font-weight-500'>
                                            24*7 Customer Support
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickWhiteTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='businessInsurance-colBox title24 text-primary font-weight-500'>
                                            1-on-1 Session with Product Experts
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickWhiteTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='businessInsurance-colBox title24 text-primary font-weight-500'>
                                            Best-in-industry Pricing
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickWhiteTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='businessInsurance-colBox title24 text-primary font-weight-500'>
                                            Fast Payment and Policy Delivery
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickWhiteTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='businessInsurance-colBox title24 text-primary font-weight-500'>
                                            All-in-one Digital Platform
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickWhiteTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/crossTrans.svg' width={43} height={44} alt="Cross Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                    <td className='businessInsurance-col title24 font-weight-500 text-center'>
                                        <div className='businessInsurance-colBox'><Image src='/tickTrans.svg' width={43} height={44} alt="Check Icon" loading="lazy" /><span className='opacity-0 d-inline d-md-none height-0'>businessInsurance-col</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="d-none d-xl-block" style={{ height: "160px" }}></div>
            <div className="d-block d-xl-none" style={{ height: "70px" }}></div>
            <style jsx scope>
                {`
                    .businessInsurance .businessInsurance-box{
                        padding: 75px 100px 50px 100px;    
                    }
                     .title24 {
                        font-size: 22px;
                     }
                     .height-0 {
                        height: 0;
                     }
                     @media (max-width:1650px) {
                         .businessInsurance .businessInsurance-box{
                             padding: 65px 60px 40px 60px;
                            }
                            .businessInsurance table td.businessInsurance-col:last-child::after{
                                height: 400px;
                                top: -170px;
                            }
                            .title24 {
                                font-size: 22px;
                                line-height: 30px;
                            }
                        }
                        @media (max-width:1450px) {
                            .businessInsurance .businessInsurance-box{
                                padding: 60px 60px 40px 100px;
                            }
                            .businessInsurance table td.businessInsurance-col:last-child::after{
                                height: 380px;
                                top: -160px;
                            }
                            .businessInsurance table th:nth-child(2){
                                width: 23%;
                            }
                            .title24{
                                font-size: 22px;
                                line-height: 30px;
                            }
                        }
                        @media (max-width:1399px) {
                            .businessInsurance table td.businessInsurance-col:last-child::after{
                                height: 370px;
                                top: -152px;
                            }
                            .businessInsurance .businessInsurance-box{
                                padding: 55px 50px 35px 90px;
                            }
                            .businessInsurance .businessInsurance-box .title24{
                                font-size: 20px;
                                line-height: 28px;
                            }
                        }
                    @media (min-width:1299px) {
                        .businessInsurance .businessInsurance-box{
                            overflow: visible;
                        }
                    }
                    @media (min-width:1750px) {
                        .container {
                          max-width: 1730px !important;
                        }
                      }
                    @media (max-width:575px) {
                        .businessInsurance-box{
                            padding: 35x;
                        }
                        .businessInsurance-box{
                            overflow-y: hidden;
                         }
                        .businessInsurance table th,
                        .businessInsurance table td{
                            padding-left: 10px;
                            padding-right: 10px;
                        }
                        .businessInsurance table th:nth-child(1) {
                            min-width: 160px;
                        }
                        .businessInsurance table th:nth-child(2) {
                            width: 25%;
                        }
                        .businessInsurance table th:nth-child(3) {
                            width: 25%;
                        }
                        .businessInsurance table th:nth-child(4) {
                            width: 25%;
                        }
                        .businessInsurance .businessInsurance-box{
                            padding: 16px 12px;
                        }
                        .title-36{
                            font-size: 26px;
                            line-height: 32px;
                        }
                        .title-22{
                            font-size: 18px;
                            line-height: 24px;
                        }
                        .businessInsurance .businessInsurance-box .title24{
                            font-size: 15px;
                            line-height: 22px;
                        }  
                    }
                `}
            </style>
        </div>
    )
}
export default Business