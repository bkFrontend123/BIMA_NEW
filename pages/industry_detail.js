import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import HowGetStarted from '../component/Home/HowGetStarted'
import Users from '../component/Icons/Users'
import ArrowRightSmall from '../component/Icons/ArrowRightSmall'
import OurBlog from '../component/Product/OurBlog'

export default function IndustryDetail() {


  useEffect(() => {
    document.body.classList.add("homePageBody")
  }, []);
  return (
    <>
      <Head>
        <title>Industry Detail | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <Navbar />
      <div className='industryDetail'>
        <div className='industryHero'>

          <div className='container '>
            <div className='row '>
              <div className='col-md-12'>
                <div className='breadcrumb'>
                  <ul

                  // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                  >
                    <li>
                      <a className='text-blueGray px-0 text-uppercase title-15' href="/">Home</a>
                    </li>

                    <li>
                      <a className='text-blueGray px-2 text-uppercase title-15 d-block' style={{ transform: "rotate(-90deg)" }}>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#9FAAC7" strokeWidth="1.5" strokeLinejoin="bevel" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className=' text-blueGray px-0 text-uppercase title-15' href="/industry">Industries</a>
                    </li>
                    <li>
                      <a className='text-blueGray px-2 text-uppercase title-15 d-block' style={{ transform: "rotate(-90deg)" }}>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#9FAAC7" strokeWidth="1.5" strokeLinejoin="bevel" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className=' text-blueGray px-0 text-uppercase title-15' >Ecommerce</a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <div className='container '>
            <div className='row '>
              <div className='col-md-8'>
                <h3 className='industryHero-title title-60 font-secondary font-weight-600 text-black mb-4'>ECommerce Insurance</h3>
                <h3 className='industryHero-title title-42 font-secondary font-weight-600 text-primary mb-0'>Overview</h3>
                <p className='industryHero-descrip title-21 text-black font-weight-500 mb-0'>The online retail industry has seen astronomical growth in the past decade, and with that raises unique challenges and risks. According to a study by BigCommerce and Square:</p>
                <div className='industryHero-descripList title-21 text-black font-weight-500  mb-1'>
                  <ul>
                    <li>96% of Americans with internet access have made an online purchase in their life.</li>
                    <li>69% of Americans shop online regularly.</li>
                    <li>E-commerce is growing 23% year-over-year, yet 46% of American small businesses do not have a website.</li>
                  </ul>
                </div>
                <p className='industryHero-descrip title-21 text-black font-weight-500 pt-4'>
                  These stats indicate a clear upward trajectory. The barrier to entry for those businesses who don't have a website has never been more permeable. User-friendly web design platforms have made it possible to launch an online store in a matter of hours.
                </p>
                <p className='industryHero-descrip title-21 text-black font-weight-500 mt-4 mb-0'>
                  Or, if companies don't want to go through the process of building an online presence, retailers like Amazon and Alibaba provide the marketplace for them (at a cost, of course). These e-commerce behemoths have been dominating the marketplace and there’s no sign of that stopping. Amazon might even claim the majority of all online sales in the near future.
                </p>

              </div>
              <div className='industryHero-cards'>
                <div className='row gx-5'>
                  <div className='col-md-6'>
                    <div className='industryHero-cardBox p-1 d-flex flex-md-row flex-column align-items-start align-items-md-center'>
                      <img src='/industryRavenue.png' />
                      <div className='industryHero-cardBoxTitle title-18  text-blueGray mt-2 mt-md-2'>Companies worldwide lose $3.5 trillion to fraudsters every year and the figures continue to devastate small and large businesses.</div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='industryHero-cardBox mt-4 mt-md-0  p-1 d-flex flex-md-row flex-column align-items-start align-items-md-center'>
                      <img src='/industryData.png' />
                      <div className='industryHero-cardBoxTitle title-18  text-blueGray mt-2 mt-md-2'>The average total cost of a data breach in 2020 was $3.86 million and the average cost per individual record that was lost was $150 (IBM).</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======= whyInsurance Start====== */}
        <div className="whyInsurance bg-primaryDark">
          <div className='container '>
            <div className='row '>
              <div className='industryDetail-titleCol col-xxl-8 '>
                <div className='whyInsurance-title font-secondary font-weight-600 text-yellow title-48'>Why is Insurance for E-commerce Organizations Important?</div>

              </div>
            </div>
            <div className='row '>
              <div className='col-md-8 pe-md-5'>
                <p className='title-21 text-blueGray mt-md-4 mt-2 mb-0 font-weight-500'>Think about the risks involved with e-commerce compared to traditional retail. Of course there are claims online retailers have to deal with that would rarely be faced by your average walk-in store, but some things never change.</p>
                <p className='title-21 text-blueGray mb-0 font-weight-500'>   Both e-commerce and brick-and-mortar retailers have to bear the risk of being a link in the supply chain of a product that could hurt somebody. Both have employees who need to be protected from injury and management who needs to be protected from shareholder lawsuits. But bodily injury claims like slip-and-falls are less likely in e-commerce. Alternatively, the chance of someone stealing customers’ sensitive information is a great deal higher for online stores.</p>
                <p className='title-21 text-blueGray mb-0 font-weight-500'>    The importance of computers and system integrity for e-commerce companies cannot be overstated, so let’s start with some of the risks insurance addresses. The theft of customers’ personal info — or worse yet, their financial info — is a looming threat for online retailers. Bad actors can wreak havoc by stealing data, encrypting your data and extorting you, or shutting you down with a DDoS attack. These challenges can cause lasting damage to a company who isn’t prepared to face them.</p>

              </div>
              <div className='col-md-4 d-none d-md-block ps-md-5'>                
                <img className='mt-md-4' src='/who-prod1.png' />
              </div>
            </div>
            <div className='row whyInsuranceCards '>
              <div className='col-md-4 '>
                <div className='whyInsuranceCardBox  font-secondary font-weight-600 text-white title-36'>
                  <div className='whyInsuranceCardBox-top d-flex align-items-center font-secondary'>
                    <Users
                      customClass="whyInsuranceCardBox-ico"
                      iconColor="white"
                      width="48"
                      height="48"
                    />
                    <span className=''>Data Breach</span>
                  </div>
                  <p className='whyInsuranceCardBox-descrip title-18 text-blueGray'>When sensitive information is data is copied, transmitted, viewed, stolen or used by an individual unauthorised to do so. The Equifax Breach in 2017 that leaked 145.5m customers accounts (including social security numbers) was due to a server security patch that was not implemented.</p>
                </div>
              </div>
              <div className='col-md-4 '>
                <div className='whyInsuranceCardBox font-secondary font-weight-600 text-white title-36'>
                  <div className='whyInsuranceCardBox-top d-flex align-items-center font-secondary'>
                    <Users
                      customClass="whyInsuranceCardBox-ico"
                      iconColor="white"
                      width="48"
                      height="48"
                    />
                    <span className=''>DDoS Attack</span>
                  </div>
                  <p className='whyInsuranceCardBox-descrip title-18 text-blueGray'>A Distributed Denial of Service (DDoS) attack occurs when cybercriminals overwhelm an online service from multiple sources (i.e., UDP or SYN flooding), making it unavailable. E-commerce operations can come to a screeching halt when faced with a DDoS attack. Lost income, server outages, and mounds of IT stress typically follow one of these vicious attacks.</p>
                </div>
              </div>
              <div className='col-md-4 '>
                <div className='whyInsuranceCardBox pe-2 font-secondary font-weight-600 text-white title-36'>
                  <div className='whyInsuranceCardBox-top d-flex align-items-center font-secondary'>
                    <Users
                       customClass="whyInsuranceCardBox-ico"
                      iconColor="white"
                      width="48"
                      height="48"
                    />
                    <span className=''>Property Damage</span>
                  </div>
                  <p className='whyInsuranceCardBox-descrip title-18 text-blueGray mb-0'>Many e-commerce platforms store their inventory at 3PLs and fulfillment centers, making it critical to protect your business personal property (BPP) while it’s not in your possession. Losing valuable BPP or experiencing severe damages could devastate an e-commerce operation.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* ======= whyInsurance End====== */}


        <div className="policyList bg-yellow">
          <div className='container '>
            <div className='industryDetail-titleCol col-xxl-6'>
              <div className=''>
                <div className='policyList-title text-black font-secondary font-weight-600 text-yellow title-48'>Recommended Policies for E-Commerce Companies</div>
                <p className='policyList-subTitle title-36 text-black mb-md-1 mb-2 font-secondary font-weight-600'>  Core Coverage</p>
                <p className='policyList-descrip title-21 text-primary mb-0 font-weight-500'>    These coverages form the foundation of any risk management program for ecommerce companies</p>
              </div>
              <div className='col-md-6 offset-md-1 '>
              </div>
            </div>
            <div className='row justify-content-between policyList-cards'>
              <div className='col-md-5 '>
                <div className='policyList-cardBox'>
                  <div className='policyList-cardBoxTop d-flex  align-items-center'>
                    <Users
                      customClass="policyList-cardBoxTop-ico"
                      iconColor="black"
                      width="48"
                      height="48"
                    />
                    <p className='policyList-cardBox-title title-36 text-black mb-0  font-weight-500'>General Liability</p>
                  </div>
                  <p className='title-18 text-primary mb-0 font-weight-500'> General liability offers broad protection against some of the most fundamental risks companies face. Known as “slip-and-fall” or “all-risk” insurance, this policy covers personal or property damage and bodily injury occurring on the business premises.</p>
                  <Link className='title-18  text-decoration-none ' href='' >
                    <div className=' position-relative d-flex align-items-center '>
                      <span className='me-md-2 me-1 title-18'>Learn More </span>
                      <ArrowRightSmall iconColor="black" height="16" width="20"  className="policyList-cardBoxLinkIco"/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='col-md-5 '>
                <div className='policyList-cardBox'>
                  <div className='policyList-cardBoxTop d-flex  align-items-center'>
                    <Users
                      customClass="policyList-cardBoxTop-ico"
                      iconColor="black"
                      width="48"
                      height="48"
                    />
                    <p className='policyList-cardBox-title title-36 text-black mb-0  font-weight-500'>Worker’s Compensation</p>
                  </div>
                  <p className='title-18 text-primary mb-0 font-weight-500'> When employees sustain work-related injuries, employers are typically responsible for their medical costs and lost wages. This policy covers these expenses, protecting employees while simultaneously keeping e-commerce companies running smoothly.</p>
                  <Link className='title-18  text-decoration-none ' href='' >
                    <div className=' position-relative d-flex align-items-center '>
                      <span className='me-md-2 me-1 title-18'>Learn More </span>
                      <ArrowRightSmall iconColor="black" height="16" width="20"  className="policyList-cardBoxLinkIco"/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='col-md-5 '>
                <div className='policyList-cardBox'>
                  <div className='policyList-cardBoxTop d-flex  align-items-center'>
                    <Users
                      customClass="policyList-cardBoxTop-ico"
                      iconColor="black"
                      width="48"
                      height="48"
                    />
                    <p className='policyList-cardBox-title title-36 text-black mb-0  font-weight-500'>Cyber Liability</p>
                  </div>
                  <p className='title-18 text-primary mb-0 font-weight-500'>When employees sustain work-related injuries, employers are typically responsible for their medical costs and lost wages. This policy covers these expenses, protecting employees while simultaneously keeping e-commerce companies running smoothly.</p>
                  <Link className='title-18  text-decoration-none ' href='' >
                    <div className=' position-relative d-flex align-items-center '>
                      <span className='me-md-2 me-1 title-18'>Learn More </span>
                      <ArrowRightSmall iconColor="black" height="16" width="20"  className="policyList-cardBoxLinkIco"/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='col-md-5 '>
                <div className='policyList-cardBox'>
                  <div className='policyList-cardBoxTop d-flex  align-items-center'>
                    <Users
                      iconColor="black"
                      width="48"
                      height="48"
                      customClass="policyList-cardBoxTop-ico"
                    />
                    <p className='policyList-cardBox-title title-36 text-black mb-0  font-weight-500'>Employment Practices Liability</p>
                  </div>
                  <p className='policyList-cardBox-descrip title-18 text-primary mb-0 font-weight-500'> Any company with employees faces the risks of allegations, such as discrimination, wrongful termination, breach of contract, etc. This coverage protects companies against lawsuits related to employment practice</p>
                  <Link className='title-18  text-decoration-none ' href='' >
                    <div className=' position-relative d-flex align-items-center '>
                      <span className='me-md-2 me-1 title-18'>Learn More </span>
                      <ArrowRightSmall iconColor="black" height="16" width="20"  className="policyList-cardBoxLinkIco"/>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* --------- divider --------- */}
          <div className='container '>
            <div className='row policyList-cardsDivider' >
              <div className='col-md-12 '>
                <div className='h-1 bg-black w-100'></div>
              </div>
            </div>
          </div>

          {/* ---------- divider---------- */}


          <div className='container '>
            <div className='row '>
              <div className='col-md-6 pe-md-0 '>
                <div className='policyList-title text-black font-secondary font-weight-600 text-yellow title-48'>Ecommerce Specific Coverage</div>
                <p className='title-21 text-primary mb-0 font-weight-500'>These policies are essential for or can be tailored to the needs of companies operating in the ecommerce space</p>

              </div>
              <div className='col-md-6 offset-md-1 '>
              </div>
            </div>

            <div className='row justify-content-between policyList-cards'>
              <div className='col-md-5 '>
                <div className='policyList-cardBox'>
                  <div className='policyList-cardBoxTop d-flex  align-items-center'>
                    <Users
                      iconColor="black"
                      width="48"
                      height="48"
                    />
                    <p className='policyList-cardBox-title title-36 text-black mb-0  font-weight-500'>Product Liability</p>
                  </div>
                  <p className='title-18 text-primary mb-0 font-weight-500'> Companies offering tangible products or services risk third-party lawsuits claiming bodily injury or property damage. Consider McDonald’s notorious “Hot Coffee” case in the 1990s, for example. No matter if the claims are grounded or not, this policy covers defense fees and settlements</p>
                  <Link className='title-18  text-decoration-none ' href='' >
                    <div className=' position-relative d-flex align-items-center '>
                      <span className='me-md-2 me-1 title-18'>Learn More </span>
                      <ArrowRightSmall iconColor="black" height="16" width="20"  className="policyList-cardBoxLinkIco"/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='col-md-5 '>
                <div className='policyList-cardBox'>
                  <div className='policyList-cardBoxTop d-flex  align-items-center'>
                    <Users
                      iconColor="black"
                      width="48"
                      height="48"
                    />
                    <p className='policyList-cardBox-title title-36 text-black mb-0  font-weight-500'>Property Insurance</p>
                  </div>
                  <p className='title-18 text-primary mb-0 font-weight-500'> Whether it’s a devastating fire, natural disaster, or burglary, property insurance responds.  This policy reimburses companies for direct  property losses, supporting recovery and momentum.</p>
                  <Link className='title-18  text-decoration-none ' href='' >
                    <div className=' position-relative d-flex align-items-center '>
                      <span className='me-md-2 me-1 title-18'>Learn More </span>
                      <ArrowRightSmall iconColor="black" height="16" width="20"  className="policyList-cardBoxLinkIco"/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='col-md-6 '>
                <div className='policyList-cardBox'>
                  <div className='policyList-cardBoxTop d-flex  align-items-center'>
                    <Users
                      iconColor="black"
                      width="48"
                      height="48"
                    />
                    <p className='policyList-cardBox-title title-36 text-black mb-0  font-weight-500'>Transit & Transportation Insurance</p>
                  </div>
                  <p className='title-18 text-primary mb-0 font-weight-500'>Logistic companies move goods by the ocean, air, and land, facing the risk of damaged goods, theft, and other liabilities. This policy protects from business property loss or damage when it’s in transit or stored offsite.</p>
                  <Link className='title-18  text-decoration-none ' href='' >
                    <div className=' position-relative d-flex align-items-center '>
                      <span className='me-md-2 me-1 title-18'>Learn More </span>
                      <ArrowRightSmall iconColor="black" height="16" width="20"  className="policyList-cardBoxLinkIco"/>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* =========== companies types start ============= */}
        <div className="companyTypes bg-primaryDark pb-md-0">
          <div className='container '>
            <div className='row '>
              <div className='col-md-8 mx-auto text-center'>
                <div className='companyTypes-title text-yellow font-secondary font-weight-600 text-yellow title-48'>Types of Ecommerce Companies that need Insurance</div>
              </div>
            </div>
            <div className='row '>
              <div className='col-md-4 text-center'>
                <div className='companyTypes-card'>
                  <img src="/icons/Shield_Warning_white.svg" />
                  <div className='companyTypes-cardTitle title-36 font-weight-500 text-white '>B2B</div>
                </div>
              </div>
              <div className='col-md-4 text-center'>
                <div className='companyTypes-card'>
                  <img src="/icons/Shield_Warning_white.svg" />
                  <div className='companyTypes-cardTitle title-36 font-weight-500 text-white '>Wholesaling</div>
                </div>
              </div>
              <div className='col-md-4 text-center'>
                <div className='companyTypes-card'>
                  <img src="/icons/Shield_Warning_white.svg" />
                  <div className='companyTypes-cardTitle title-36 font-weight-500 text-white '>Dropshipping</div>
                </div>
              </div>
              <div className='col-md-4 text-center'>
                <div className='companyTypes-card'>
                  <img src="/icons/Shield_Warning_white.svg" />
                  <div className='companyTypes-cardTitle title-36 font-weight-500 text-white '>Subscription <span className='d-none d-xl-block'></span> Ecommerce</div>
                </div>
              </div>
              <div className='col-md-4 text-center'>
                <div className='companyTypes-card'>
                  <img src="/icons/Shield_Warning_white.svg" />
                  <div className='companyTypes-cardTitle title-36 font-weight-500 text-white '>Direct to <span className='d-none d-xl-block'></span>Consumer</div>
                </div>
              </div>
              <div className='col-md-4 text-center'>
                <div className='companyTypes-card'>
                  <img src="/icons/Shield_Warning_white.svg" />
                  <div className='companyTypes-cardTitle title-36 font-weight-500 text-white '>Third-Party <span className='d-none d-xl-block'></span>Logistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =========== companies types end ============= */}


        {/* =========== companies types start ============= */}
        <div className="aboutCompany  pb-0">
          <div className='container '>
            <div className='row'>
              <div className='col-md-12 '>
                <div className='aboutCompany-title'>
                  <div className='polyBox border-primary bg-blueLight mb-md-4 mb-3 text-primary title16 font-weight-500 '>Frequently Answered Questions</div>
                  <h3 className=' title-60 font-secondary font-weight-600 text-primary'>About E-commerce Insurance</h3>
                </div>
              </div>
            </div>
            <div className='row '>
              <div className='col-md-6 '>
                <div className='aboutCompany-Description '>
                  <h4 className='title-24 text-black font-weight-600  '>What are Product Risks for E-Commerce?</h4>
                  <p className='title-18  font-weight-500 text-blueGray'>Food can make people sick, small objects can be swallowed by children, safety equipment can fail, machinery can malfunction and hurt the user…amazingly, baby powder can cause cancer. The list goes on and on. Bottom line, product liability exists regardless of where you are in the supply chain or whether you company has a storefront or not.</p>
                  <h4 className='title-24 text-black font-weight-600 mt-4 '>How much does Insurance for E-Commerce <span className='d-none d-xl-block'></span>Companies Cost?</h4>
                  <p className='title-18  font-weight-500 text-blueGray mb-0'>
                    The cost of insurance for e-commerce companies will depend on several things, including the company’s size and development stage. Other factors include:
                  </p>
                  <ul className='aboutCompany-DescriptionList'>
                    <li className='title-18  font-weight-500 text-blueGray'>Exposures: risks being insured</li>
                    <li className='title-18  font-weight-500 text-blueGray'>Company practices: views on safety, compliance, and risk management</li>
                    <li className='title-18  font-weight-500 text-blueGray'>Program structure: the amount of deductible and willingness for a company to assume more risk</li>
                    <li className='title-18  font-weight-500 text-blueGray'>Claims history: the type and amount of past claims against the company</li>
                  </ul>
                  <div className=' mt-5 aboutCompany-bottom d-flex flex-column justify-content-md-start justify-content-center'>
                    <Link className='title20 text-gray text-decoration-none' href="/" >Need more answers? </Link>
                    <div className='d-flex mt-2'>
                      <a className="btnCommon btnBorder border-primary border2  text-primary me-2 text-decoration-none" type="submit">  <img className='me-1' src='/icons/calender.svg' width="18px" /><span>  Schedule a call  </span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =========== companies types start ============= */}


        <div className='d-none d-lg-block' style={{ height: "180px" }}></div>
        <div className='d-block d-lg-none' style={{ height: "48px" }}></div>
        <OurBlog />
        <HowGetStarted />

      </div>
      <Footer />

      <style jsx scope>
        {`
            .industryDetail{
              margin-bottom: 260px;
            }
              .industryHero{
                padding-top: 120px;
                  padding-bottom: 180px;                  
              }
              .industryHero-descrip{
                 
              }
              .industryHero-cardBoxTitle{ 
                  padding-left: 15px;
                }
              .industryHero-cards{
                margin-top: 60px;
              }
              .whyInsurance{
                padding: 120px 0 110px 0;
              }
              .industryDetail-titleCol  {
                  // max-width: 80%;     
              }
              .whyInsuranceCards{
                margin-top: 70px;
              }
              .whyInsuranceCardBox{
                padding-right: 70px;
              }
              .whyInsuranceCardBox-top{
                margin-bottom: 20px;
              }
              .whyInsuranceCardBox-top span{
                margin-left: 20px;
              }

              /****/
              .policyList{
                padding: 120px 0 100px 0;
              }
              .policyList-cards{
                margin-top: 60px;
              }
              .policyList-cardBox{
                height: 100%; 
                margin-bottom: 60px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                        flex-direction: column;
                -webkit-box-align: start;
                -ms-flex-align: start;
                        align-items: flex-start;
              }
              .policyList-cardBoxTop{
                margin-bottom: 15px;
              }
              .policyList-cardBox-title{
                margin-left: 16px;
                line-height: 37px;
              }
              .policyList-cardBox-descrip{
                margin-bottom: 20px;
              }
              .policyList-cardBox-btn{
                margin-top: 20px;
              }
              
              .policyList-cardBox a{
                padding: 0 10px;
              }
              .policyList-cardBox a::after{
                position: absolute;
                content: "";
                left: 0;
                bottom: -10px;
                background: var(--vt-c-black);
                width: 100%;
                height: 2px;
              }
              .policyList-cardsDivider{
                margin: 60px 0 120px 0;
              }

              .companyTypes{
                padding: 120px 0;
              }
              .companyTypes-title{
                margin-bottom: 130px;
              }

              .companyTypes-card{
                margin-bottom: 120px;
              }
              .companyTypes-cardTitle {
                margin-top: 20px;
              }
              
              .aboutCompany{
                padding-top: 180px;
              }
              .aboutCompany-title{
                margin-bottom: 40px;
              }
             
              .policyList-subTitle{
                margin-top: 30px;                
              }

              .title-48{              
                line-height: 72px;
              }
              

              @media only screen and (min-width: 1200px) {
                  .container{
                    padding: 0 40px;
                  }
                }

              @media (min-width: 1300px){
                .container {
                  max-width: 1170px ;
                }
              }
              @media (min-width: 1399px){
                .container {
                  max-width: 1280px ;
                }
              }
              @media (min-width:1600px) {
                .container {
                  max-width: 1400px ;
                }
              }
              @media (min-width:1650px) {
                .container {
                  max-width: 1420px ;
                }
                .industryHero-cardBox{
                  padding-right: 40px;
                }
                .industryHero-cardBoxTitle{
                  padding-right: 48px;
                  padding-left: 24px;
                }
              }
                 
                  @media only screen and (max-width: 1600px) {
                    .whyInsuranceCardBox{
                      padding-right: 5px;
                    }
                    .title-36 {
                      font-size: 32px;
                      line-height: 44px;
                    }
                  }
                  @media only screen and (max-width: 1450px) {                    
                   
                    .title-64{
                      font-size: 56px;
                      line-height: 50px;
                    }
                    .title-60 {
                      font-size: 56px;
                      line-height: 50px;
                    }
                    .title-48{
                      font-size: 44px;
                      line-height: 60px;
                    }
                    .title-42{
                      font-size: 40px;
                      line-height: 52px;
                    }
                    .title-36 {
                      font-size: 28px;
                      line-height: 40px;
                    }
                    .title-21 {
                      font-size: 18px;
                      line-height: 27px;
                    }
                    .title-18 {
                      font-size: 16px;
                      line-height: 22px;
                    }
                    .industryHero{
                      padding-top: 70px;
                      padding-bottom: 120px;
                    }
                    .industryHero-cardBox img{
                      width: 55%;
                    }
                    .whyInsurance{
                      padding: 90px 0 80px 0;
                    }
                    .policyList{
                      padding: 90px 0 80px 0;
                    }
                    .policyList  .title-48{
                      font-size: 42px;
                      line-height: 50px;
                    }
                    
                  }
                  @media only screen and (max-width: 1399px) {
                    .industryHero-cardBox img{
                      width: 49%;
                    }
                    .industryHero-cardBoxTitle{
                      padding-left: 0;
                    }
                    .title-48{
                      font-size: 40px;
                      line-height: 52px;
                    }
                  }
                  @media only screen and (max-width: 575px) {
                    .industry{
                      padding: 0; 
                      padding-bottom: 48px;
                      margin-bottom: 46px;
                    }
                    .industryDetail-titleCol col-xxl-8{
                      max-width: 100%;
                    }
                    .industryIconText{
                      padding: 48px 0;
                    }
                    .industryIconText-title{
                      margin-bottom: 45px;
                    }


                    .title-64{
                        font-size: 36px;
                        line-height: 38px;
                    }
                    .title-60{
                      font-size: 30px;
                      line-height: 36px;
                    
                    .title-48{
                        font-size: 36px;
                        line-height: 38px;
                    }
                    .title-42{
                        font-size: 30px;
                        line-height: 36px;
                    }
                    .whyInsurance .title-48,
                    .companyTypes .title-48,
                    .policyList .title-48{
                      font-size: 24px;
                      line-height: 28px;
                    }
                    .companyTypes .companyTypes-title{
                      margin-bottom: 25px;
                    }
                    .whyInsurance .title-21 {
                      font-size: 15px;
                      line-height: 22px;
                    }
                    .whyInsurance .title-36 {
                      font-size: 15px;
                      line-height: 22px;
                    }
                    .policyList .title-36,
                    .companyTypes .title-36{
                        font-size: 21px;
                        line-height: 26px;
                    }
                    .title-21 {
                      font-size: 18px;
                      line-height: 27px;
                    }
                    .policyList .policyList-descrip.title-21 {
                      font-size: 15px;
                      line-height: 23px;
                    }
                    .title-18 {
                      font-size: 12px;
                      line-height: 18px;
                    }
                    .title-15{
                      font-size: 12px;
                      line-height: 18px;                    
                    }

                    .btnCommon{
                      font-size: 80px;
                      line-height: 27px;
                    }
                    .industryHero{
                      padding-top: 40px;
                      padding-bottom: 45px;
                                      
                    }
                    .industryHero-cardBox img{
                      width: 75%;
                    }
                    .whyInsurance{
                      padding: 46px 0;
                    }
                    .whyInsuranceCardBox{
                      padding-right: 0;
                    }
                    .whyInsuranceCardBox{

                    }
                    .whyInsuranceCardBox-top {
                      margin-bottom: 10px;
                    }
                    .whyInsuranceCardBox-top span{
                      margin-left: 10px;
                    }

                    .policyList{
                      padding: 48px 0 30px 0;
                    }
                    
                    .policyList-title,
                    .policyList-subTitle{
                      color: var(--vt-c-blueDark) !important;
                    }
                    .policyList-descrip{
                      color: var(--vt-c-black) !important;
                    }
                    .policyList-cardBox{
                      margin-bottom: 35px;
                    }
                    .policyList-cardBox-title{
                      margin-left: 0;
                      font-size: 18px;
                      line-height: 18px;
                    }
                    .policyList-cardBoxLinkIco{
                      
                    }
                    .policyList-cardsDivider{
                      margin: 30px 0 50px 0;
                    }

                    .companyTypes{
                      padding: 40px 0 25px 0 ;
                    }
                    .companyTypes-card img{
                      height: 48px;
                    }
                    .companyTypes-cardTitle{
                      margin-top: 10px;
                    }
                    .companyTypes-card{
                      margin-bottom: 30px;
                    }

                    .aboutCompany{
                      padding-top: 50px;
                    }
                    .aboutCompany .btnCommon{
                      font-size: 18px;
                      line-height: 27px;
                    }
                    .aboutCompany-title h3{
                      font-size: 30px;
                      line-height: 36px;
                    }
                     .aboutCompany .aboutCompany-Description .title-24{
                      font-size: 15px;
                      line-height: 22px;
                      color: var(--vt-c-blueDark) !important;
                    }
                    .aboutCompany-bottom {
                      text-align: center;
                    }
                    .aboutCompany-bottom .title20 {
                      font-size: 12px;
                    }
                    .aboutCompany-bottom .btnCommon{
                      width: 100%;
                      justify-content: center;
                    }
                    .title-22 {
                      font-size: 18px;
                      line-height: 27px;
                    }
                  }
                  @media only screen and (max-width: 575px) {
                    .whyInsurance .title-48{
                      font-size: 22px;
                      line-height: 28px;
                    }
                  }
                `}
      </style>
    </>
  )
}
