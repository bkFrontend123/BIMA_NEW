import React, { useState, useEffect } from 'react'
import Toggle from '../Icons/Toggle'
import Link from 'next/link'
import Image from 'next/image'
import {Dropdown} from 'react-bootstrap';
import AOS from 'aos';

import CalendyModal from '../Modal/CalendyModal'

import WhatsApp from '../Icons/WhatsApp'
import DropdownArrow from '../Icons/DropdownArrow'

import headerStyle from '../HeaderPlain/style.module.css'

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false)
  const [menuToggleList, setMenuToggleList] = useState("")
  const menuToggleHandle = () => {
    // alert("hdjasbh1111")
    setMenuToggle(!menuToggle)
    menuToggleList == "" ? setMenuToggleList("menuActive") : setMenuToggleList("")
  }
  // useEffect(() => {
  //   setMenuToggleList("")
  // }, [window.location.pathname])

  console.log(menuToggle)

  const LiabiltyInsurance = [
    { id: "l1", link: "/directors-and-officers-insurance", img: "/productIcons/liability/dAndO_icon.svg", title: "Directors & Officers Insurance" },
    { id: "l2", link: "/errors-and-omissions-insurance", img: "/productIcons/liability/eAndO_icon.svg", title: "Errors & Omissions Insurance" },
    { id: "l3", link: "/general-liability-insurance", img: "/productIcons/liability/generalLiability_icon.svg", title: "General Liability Insurance" },
    //{ id: "l4", link: "/", img: "/productIcons/liability/fidelity_icon.svg", title: "Fidelity Insurance" },
    { id: "l5", link: "/product-liability-insurance", img: "/productIcons/liability/productLiability_icon.svg", title: "Product Liability Insurance" },
    { id: "l8", link: "/cyber-insurance", img: "/productIcons/liability/cyber_icon.svg", title: "Cyber Insurance" },
    { id: "l7", link: "/commercial-crime-insurance", img: "/productIcons/liability/crime_icon.svg", title: "Crime Insurance" },
    { id: "l6", link: "/workmens-compensation-insurance", img: "/productIcons/liability/workman_icon.svg", title: "Workmen’s Compensation" },
  ]
  const AssetInsurance = [
    { id: "a1", link: "/fire-and-burglary-insurance", img: "/productIcons/asset/fire_icon.svg", title: "Fire Insurance" },
    //{ id: "a2", link: "/", img: "/productIcons/asset/officePackage_icon.svg", title: "Office Package" },
    //{ id: "a3", link: "/", img: "/productIcons/asset/shopOwner_icon.svg", title: "Shop Owner’s" },
    //{ id: "a4", link: "/", img: "/productIcons/asset/restaurant_icon.svg", title: "Restaurant, Hotels & Cafes" },
    //{ id: "a5", link: "/", img: "/productIcons/asset/educational_icon.svg", title: "Educational Institutes" },
    //{ id: "a6", link: "/", img: "/productIcons/asset/hospitals_icon.svg", title: "Hospitals & Clinics" },
  ]
  const EngineeringInsurance = [
    { id: "e1", link: "/contractor-all-risk-policy", img: "/productIcons/engineering/contractorsAllRisk_icon.svg", title: "Contractor's All Risk" },
    { id: "e2", link: "/erection-all-risk-insurance", img: "/productIcons/engineering/erectionAllRisk_icon.svg", title: "Erection All Risk" },
    { id: "e1", link: "/contractor-plant-and-machinery-insurance", img: "/productIcons/engineering/contractorsPlant_icon.svg", title: "Contractor's Plant & Machinery" },
  ]
  const EmployeeInsurance = [
    { id: "eb1", link: "/group-personal-accident-insurance", img: "/productIcons/employeeBenefits/groupPersonal_icon.svg", title: "Group Personal Accident" },
    { id: "eb2", link: "/group-health-insurance", img: "/productIcons/employeeBenefits/groupHealth_icon.svg", title: "Group Health Insurance" },
  ]
  const MarineInsurance = [
    { id: "m1", link: "/marine-cargo-insurance", img: "/productIcons/marine/marine_icon.svg", title: "Marine Transit Policy" },
  ]
  const industryTechnology = [
    { id: "it1", link: "/industry", title: "E-Commerce" },
    { id: "it2", link: "/industry", title: "Ed-Tech" },
    { id: "it3", link: "/industry", title: "E-Sports" },
    { id: "it4", link: "/industry", title: "Fintech" },
    { id: "it5", link: "/industry", title: "MSPs" },
    { id: "it6", link: "/industry", title: "SAAS" },
    { id: "it7", link: "/industry", title: "Startups" },
  ]
  const industryTraditional = [
    { id: "ita1", link: "/industry", title: "Financial Services" },
    { id: "ita2", link: "/industry", title: "Financial Services" },
    { id: "ita3", link: "/industry", title: "Manufacturing" },
    { id: "ita4", link: "/industry", title: "Media & Advertising" },
  ]
  const industryEmerging = [
    { id: "ie1", link: "/industry", title: "Blockchain" },
    { id: "ie2", link: "/industry", title: "Cannabis" },
    { id: "ie3", link: "/industry", title: "Cryptocurrency" },
    { id: "ie4", ink: "/industry", title: "Influencers" },
    { id: "ie5", link: "/industry", title: "Electric Mobility" },
    { id: "ie6", link: "/industry", title: "On-Demand Delivery" },
    { id: "ie7", link: "/industry", title: "Robotics" },
  ]
  const Resources = [
    { id: "r1", link: "https://www.bimakavach.com/blog/", title: "More Blogs" },
    //{ id: "r2", link: "/", title: "Webinars" },
    //{ id: "r3", link: "/", title: "Resource Hub" },
    //{ id: "r4", link: "/", title: "White Papers" },
  ]
  const handleMouseEnter = () => {
    document.body.classList.add('DropdownOverlay');
  }
  const handleMouseLeave = () => {
    document.body.classList.remove('DropdownOverlay');
  }
  // ------ Dropdown ------
  const [productToggle, setProductToggle] = useState(false)
  const ProductMenuToggle = () => {
    (productToggle == false ? setProductToggle(true) : setProductToggle(false))
    setResourceToggle(false);
    setIndusToggle(false);

  }
  const [indusToggle, setIndusToggle] = useState(false)
  const IndusMenuToggle = () => {
    (indusToggle == false ? setIndusToggle(true) : setIndusToggle(false));
    setProductToggle(false);
    setResourceToggle(false);
  }
  const [ResourceToggle, setResourceToggle] = useState(false)
  const ResourceMenuToggle = () => {
    (ResourceToggle == false ? setResourceToggle(true) : setResourceToggle(false))
    setProductToggle(false);
    setIndusToggle(false);

  }

  const [showCalendy, setShowCalendy] = useState(false);
  const handleCloseCalendy = () => setShowCalendy(false);
  const handleShowCalendy = () => setShowCalendy(true);

  return (

    <>
      <div className={`navbar-main bg-yellowLight`} id="backToTop">
        <nav className={`navbar p-0 mainMenu  navbar-expand-xl bg-body-tertiary homeNavbar`}>
          <div className='container'>
            <div className="nabbarStrip position-relative">
              <Link className="navbar-brand" href="/"><img src='/logo-main.svg' /></Link>
              <button className="navbar-toggler p-0" type="button" onClick={menuToggleHandle}>
                <span className="navbar-toggler-icon"><Toggle /></span>
              </button>
              <div className={`collapse navbar-collapse ${menuToggleList}`} >
                <ul className="navbar-nav mb-2 mt-4 m-xl-0 menu-container" >
                  <li className={`nav-item menu-containerList ${productToggle ? "active" : ""}`} onClick={ProductMenuToggle}>
                    <Link className="nav-link menu-trigger arrowHide" href="" >
                      Products
                      <span className='ms-1'>
                        {productToggle 
                        ?
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#ffb400" strokeWidth="1.5" strokeLinejoin="bevel" />
                        </svg>
                      :  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="black" strokeWidth="1.5" strokeLinejoin="bevel"/>
                        </svg>  
                      }
                      </span>
                    </Link>
                    {productToggle
                      ?
                      <div className='mega-menu productMega-menu'>
                        <div className='mega-menuBox'>
                          <div className='container'>
                            <div className='row justify-content-center'>
                              <div className='col-md-11'>
                                <div className='row'>
                                  {/* -------Liability Insurance------- */}
                                  <div className='col-md-4'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary fst-italic'>Liability Insurance</div>
                                      <hr className='bg-gray mb-md-3 my-2'/>
                                    </div>
                                    <div className='startupColsList'>
                                      {LiabiltyInsurance.map((item) =>
                                        <div className='startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 '>
                                            <div className='d-flex align-items-center'>
                                              <Image
                                                // loader={myLoader}
                                                src={item.img}
                                                alt="Bimakavach"
                                                width={48}
                                                height={48}
                                                className='d-none d-md-block'
                                                loading="lazy"
                                              />
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none text-primary @mt-md-3 font-weight-600 ms-md-2'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {/* -------Asset Insurance------- */}
                                  <div className='col-md-4'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary fst-italic'>Asset Insurance</div>
                                      <hr className='bg-gray mb-md-3 my-2' />
                                    </div>
                                    <div className='startupColsList'>
                                      {AssetInsurance.map((item) =>
                                        <div className='startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 '>
                                            <div className='d-flex align-items-center'>
                                              <Image
                                                // loader={myLoader}
                                                src={item.img}
                                                alt="Bimakavach"
                                                width={48}
                                                height={48}
                                                className='d-none d-md-block'
                                                loading="lazy"
                                              />
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none text-primary font-weight-600 ms-md-2'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className='mega-menuBox-title mt-4'>
                                      <div className='title-24 font-weight-600 text-primary fst-italic'>Engineering Insurance</div>
                                      <hr className='bg-gray mb-md-3 my-2' />
                                    </div>
                                    <div className='startupColsList'>
                                      {EngineeringInsurance.map((item) =>
                                        <div className='startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 '>
                                            <div className='d-flex align-items-center'>
                                              <Image
                                                src={item.img}
                                                alt="Bimakavach"
                                                width={48}
                                                height={48}
                                                className='d-none d-md-block'
                                                loading="lazy"
                                              />
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none text-primary font-weight-600 ms-md-2'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className='col-md-4'>
                                    {/*<div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary fst-italic'>Employee</div>
                                      <hr className='bg-gray mb-md-3 my-2' />
                                    </div>
                                    <div className='startupColsList'>
                                      {EmployeeInsurance.map((item) =>
                                        <div className='startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 '>
                                            <div className='d-flex align-items-center'>
                                              <Image
                                                src={item.img}
                                                alt="Bimakavach"
                                                width={48}
                                                height={48}
                                                className='d-none d-md-block'
                                                loading="lazy"
                                              />
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none text-primary font-weight-600 ms-md-2'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>*/}
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary fst-italic'>Marine</div>
                                      <hr className='bg-gray mb-md-3 my-2' />
                                    </div>
                                    <div className='startupColsList'>
                                      {MarineInsurance.map((item) =>
                                        <div className='startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 '>
                                            <div className='d-flex align-items-center'>
                                              <Image
                                                // loader={myLoader}
                                                src={item.img}
                                                alt="Bimakavach"
                                                width={48}
                                                height={48}
                                                className='d-none d-md-block'
                                                loading="lazy"
                                              />
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none text-primary font-weight-600 ms-md-2'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      : ""}
                  </li>
                  {/*<li className={`nav-item menu-containerList ${indusToggle ? "active" : ""}`} onClick={IndusMenuToggle}>
                    <a className="nav-link menu-trigger arrowHide" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Industries
                      <span className='ms-1'>
                        {indusToggle 
                        ? <span style={{ }} >
                          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#ffb400" strokeWidth="1.5" strokeLinejoin="bevel" />
                          </svg>
                        </span> 
                        :  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="black" strokeWidth="1.5" strokeLinejoin="bevel"/>
                        </svg>
                        
                        }
                      </span>
                    </a>
                    {indusToggle
                      ?
                      <div className='mega-menu industriesMega-menu '>
                        <div className='mega-menuBox'>
                          <div className='container'>
                            <div className='row'>

                              <div className='col-md-7 offset-md-4'>
                                <div className='row'>
                                  {* -------Technology------- *}
                                  <div className='col-md-4'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary'>Technology</div>
                                      <hr className='bg-gray mb-md-4 my-2' />
                                    </div>
                                    <div className='row'>
                                      {industryTechnology.map((item) =>
                                        <div key={item.id} className='col-md-12 startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                            <div className='d-none d-md-block '>
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {* -------Traditional------- *}
                                  <div className='col-md-4'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary'>Technology</div>
                                      <hr className='bg-gray mb-md-4 my-2' />
                                    </div>
                                    <div className='row'>
                                      {industryTraditional.map((item) =>
                                        <div key={item.id} className='col-md-12 startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                            <div className='d-none d-md-block '>
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {* -------Emerging------- *}
                                  <div className='col-md-4'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary'>Emerging</div>
                                      <hr className='bg-gray mb-md-4 my-2' />
                                    </div>
                                    <div className='row'>
                                      {industryEmerging.map((item) =>
                                        <div key={item.id} className='col-md-12 startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                            <div className='d-none d-md-block '>
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                </div>
                                <div className='row mt-5'>
                                  {* -------Emerging------- *}
                                  <div className='col-md-4'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary'>Emerging</div>
                                      <hr className='bg-gray mb-md-4 my-2' />
                                    </div>
                                    <div className='row'>
                                      {industryEmerging.map((item) =>
                                        <div className='col-md-12 startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                            <div className='d-none d-md-block '>
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {* -------Technology------- *}
                                  <div className='col-md-4'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary'>Technology</div>
                                      <hr className='bg-gray mb-md-4 my-2' />
                                    </div>
                                    <div className='row'>
                                      {industryTechnology.map((item) =>
                                        <div key={item.id} className='col-md-12 startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                            <div className='d-none d-md-block '>
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {* -------Traditional------- *}
                                  <div className='col-md-4'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary'>Technology</div>
                                      <hr className='bg-gray mb-md-4 my-2' />
                                    </div>
                                    <div className='row'>
                                      {industryTraditional.map((item) =>
                                        <div key={item.id} className='col-md-12 startupCols-cardCol'>
                                          <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                            <div className='d-none d-md-block '>
                                              <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      : ""}
                  </li>*/}
                  {/*<li className={`nav-item menu-containerList ${ResourceToggle ? "active" : ""}`} onClick={ResourceMenuToggle}>
                    <a className="nav-link menu-trigger arrowHide" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Resources
                      <span className='ms-1'>
                        {ResourceToggle ? 
                          <span style={{ }} >
                          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#ffb400" strokeWidth="1.5" strokeLinejoin="bevel" />
                          </svg>
                        </span> 
                        :  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="black" strokeWidth="1.5" strokeLinejoin="bevel"/>
                          </svg>  
                        }
                      </span>
                    </a>
                    {ResourceToggle
                      ?
                      <div className='mega-menu industriesMega-menu '>
                        <div className='mega-menuBox'>
                          <div className='container'>
                            <div className='row'>
                              <div className='col-md-10 offset-md-1'>
                                <div className='row'>
                                  {* -------Technology------- *}
                                  <div className='col-md-12'>
                                    <div className='mega-menuBox-title'>
                                      <div className='title-24 font-weight-600 text-primary'>Insights</div>
                                      <hr className='bg-gray mb-md-4 my-2 w-25 d-none d-md-block' />
                                    </div>
                                    <div className='row d-none d-md-flex'>
                                      <div className='col-md-3'>
                                        <div className='row'>
                                          {Resources.map((item) =>
                                            <div key={item.id} className='col-md-12 startupCols-cardCol'>
                                              <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                                <div className='d-none d-md-block'>
                                                  <Link target='_blank' href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                                </div>
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <div className='col-md-9 '>
                                        <div className=' row  mb-md-2'>
                                          <div className='d-none d-md-block col-md-6'>
                                            <img className='w-100  ' src="/ourBlogAds.jpg" />
                                          </div>
                                          <div className='d-none d-md-block col-md-6'>
                                            <h3 className='title-36 mt-3 mb-0 mb-md-1 text-primary font-secondary font-weight-600'>Different Types of Insured</h3>
                                            <p className='title-18 text-yellow3 font-weight-500 mb-md-0 mb-4'>April 4, 2023 • 5 MINS READ</p>

                                          </div>
                                        </div>
                                        <div className=' row mt-5 d-none d-md-flex '>
                                          <div className='col-md-6'>
                                            <div className=''>
                                              <div className='mb-md-5'>
                                                <div className='me-4'>
                                                  <img className='' src="/ourBlogSlide.jpg" />
                                                </div>
                                                <div className='text-start mt-3'>
                                                  <p className='title-18 ourBlogsSlide-title text-primary font-weight-600 mb-0 '>What is an Insured in Business Insurance?</p>
                                                  <p className='title-12 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>May 6, 2023 • 3 MINS READ</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className='col-md-6'>
                                            <div className=''>
                                              <div className='mb-md-5'>
                                                <div className='me-4'>
                                                  <img className='' src="/ourBlogSlide.jpg" />
                                                </div>
                                                <div className='text-start mt-3'>
                                                  <p className='title-18 ourBlogsSlide-title text-primary font-weight-600 mb-0 '>What is an Insured in Business Insurance?</p>
                                                  <p className='title-12 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>May 6, 2023 • 3 MINS READ</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      : ""}
                  </li>*/}

                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle menu-trigger arrowHide" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='/dropdown.svg' />
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Resources 1</a></li>
                      <li><a className="dropdown-item" href="#">Resources 2</a></li>
                      <li><a className="dropdown-item" href="#">Resources 3</a></li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">About Us</Link>
                  </li>
                  {/*<li className="nav-item">
                    <a className="nav-link" href="">Sign In</a>
                  </li>*/}
                </ul>
                <div className="nabbarStrip-btns d-flex flex-sm-row flex-column ms-auto" >
                  <a className="btnCommon scheduleCallBtn me-md-4 btnBorder border-primary text-primary mb-2 mb-md-0 text-decoration-none bg-white" onClick={handleShowCalendy}> <img className='me-2' src='/icons/calender.svg' width="16px" /> <span> Schedule a call </span></a>
                  <div className={`hdrDrpdwn ${headerStyle.hdrDrpdwn} ${headerStyle.hdrTalkDrpdwn}`}>
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="talk-expert" className={`btnCommon yellowBtn ${headerStyle.btnSmall}`}>
                        <i className="me-2">
                          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.40898 5.75924L6.24938 7.23365C6.65292 7.80971 7.11198 8.35878 7.62652 8.87338C8.14112 9.38791 8.69018 9.84698 9.26625 10.2505L10.7407 9.09091L14.6666 10.3024V13.2954C14.6641 13.8466 14.4219 14.3695 14.0031 14.728C13.6569 15.0242 13.2153 15.1919 12.7605 15.1635C9.89445 14.9844 7.07972 13.8 4.88978 11.6101C2.69986 9.42018 1.51542 6.60547 1.33636 3.73937C1.30796 3.28463 1.47563 2.84302 1.7719 2.49686C2.13035 2.07805 2.65325 1.83585 3.20452 1.83331H6.19748L7.40898 5.75924ZM11.0155 10.5711L13.3333 11.2863V13.2914C13.3319 13.4544 13.26 13.609 13.1361 13.715C13.0216 13.813 12.9129 13.8371 12.8437 13.8328C10.2893 13.6732 7.78405 12.6188 5.83258 10.6673C3.88112 8.71585 2.82669 6.21062 2.6671 3.65623C2.66278 3.58697 2.68689 3.47832 2.78487 3.36385C2.89094 3.23992 3.04545 3.16802 3.2085 3.16665H5.21356L5.92881 5.48443L4.58926 7.18758L5.1573 7.99858C5.60513 8.63791 6.11409 9.24651 6.68372 9.81618C7.25338 10.3858 7.86198 10.8948 8.50132 11.3426L9.31232 11.9106L11.0155 10.5711Z" fill="currentColor"></path>
                          </svg>															
                        </i>
                        <span>Talk to an expert</span>
                        <i className='ms-2'>
                          <DropdownArrow width="11" height="7" />
                        </i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className={headerStyle.hdrDrpMenu}>
                        <div>
                          <ul>
                            <li>
                              <i>
                                <Image
                                  src="/icons/whatsapp_icon.svg"
                                  width={18}
                                  height={19}
                                  alt="Whatsapp"
                                  loading="lazy"
                                />
                              </i>
                              <div>
                                <span>WhatApp us:</span>
                                <a href="https://wa.me/9036554785" target="_blank">+91 9036554785</a>
                              </div>
                            </li>
                            <li>
                              <i>
                                <Image
                                  src="/icons/call_fill_icon.svg"
                                  width={13}
                                  height={13}
                                  alt="Call"
                                  loading="lazy"
                                />
                              </i>
                              <div>
                                <span>For Liability Insurance:</span>
                                <a href="tel:9036554785">+91 9036554785</a>
                              </div>
                            </li>
                            <li>
                              <i>
                                <Image
                                  src="/icons/call_fill_icon.svg"
                                  width={13}
                                  height={13}
                                  alt="Call"
                                  loading="lazy"
                                />
                              </i>
                              <div>
                                <span>For P&C Insurance:</span>
                                <a href="tel:9035492594">+91 9035492594</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav >
      </div >
      <CalendyModal
        calendyLink="tejas"
        show={showCalendy}
        handleClose={handleCloseCalendy}
      />
      <style jsx scope>
        {`
           .mega-menuBox  a{
            text-decoration: none;
          }
          .startupCols-cardBox{
            margin-bottom: 16px;
          }
          @media only screen and (max-width: 1450px) {
            .title-36{
              font-size: 30px;
              line-height: 40px;
          
            }
          }
          @media only screen and (max-width: 992px) {
            .mega-menu{
              position: relative; 
            }
            .mainMenu.navbar .navbar-nav li{              
              text-align: left;
            }
            .mega-menu .mega-menuBox{
              padding: 15px;
              box-shadow: none;
              margin-top: 0;
              text-align: left;
            }
            .mega-menu .mega-menuBox .container{
              padding: 0;
            }
            .startupCols-cardBox{
              margin-bottom: 10px; 
            }
            .startupCols-cardBox a{
              text-align: left;
              color: #000;
            }
            .title-24 {
              font-size: 20px;
              line-height: 26px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navbar