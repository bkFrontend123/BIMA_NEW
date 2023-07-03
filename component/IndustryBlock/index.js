import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function IndustryBlock() {
  const liabilityInsurance = [
    { id: "l1", titleLink: "/directors-and-officers-insurance", img: "/productIcons/liability/dAndO_icon.png", title: "Directors &", subtitle: "Officers Insurance" },
    { id: "l2", titleLink: "/errors-and-omissions-insurance", img: "/productIcons/liability/eAndO_icon.png", title: "Errors & Omissions", subtitle: "Insurance" },
    { id: "l3", titleLink: "/general-liability-insurance", img: "/productIcons/liability/generalLiability_icon.png", title: "General Liability", subtitle: "Insurance" },
    //{ id: "l4", titleLink: "/fidelity-insurance", img: "/productIcons/liability/fidelity_icon.png", title: "Fidelity", subtitle: "Insurance" },
    { id: "l5", titleLink: "/product-liability-insurance", img: "/productIcons/liability/productLiability_icon.png", title: "Product Liability", subtitle: "Insurance" },
    //{ id: "l6", titleLink: "/workmens-compensation-insurance", img: "/productIcons/liability/workman_icon.png", title: "Workman’s", subtitle: "Compensation" },
    { id: "l7", titleLink: "/commercial-crime-insurance", img: "/productIcons/liability/crime_icon.png", title: "Crime", subtitle: "Insurance" },
    { id: "l8", titleLink: "/cyber-insurance", img: "/productIcons/liability/cyber_icon.png", title: "Cyber", subtitle: "Insurance" },
  ]
  const assetInsurance = [
    { id: "a1", titleLink: "/fire-and-burglary-insurance", img: "/productIcons/asset/fire_icon.png", title: "Fire", subtitle: "Insurance" },
    //{ id: "a2", titleLink: "/", img: "/productIcons/asset/officePackage_icon.png", title: "Office", subtitle: "Package" },
    //{ id: "a3", titleLink: "/", img: "/productIcons/asset/shopOwner_icon.png", title: "Shop", subtitle: "Owner’s" },
    //{ id: "a4", titleLink: "/", img: "/productIcons/asset/restaurant_icon.png", title: "Restaurant", subtitle: "Hotels & Cafes" },
    //{ id: "a5", titleLink: "/", img: "/productIcons/asset/educational_icon.png", title: "Educational", subtitle: "Institutes" },
    //{ id: "a6", titleLink: "/", img: "/productIcons/asset/hospitals_icon.png", title: "Hospitals", subtitle: "Clinics" },
  ]
  const engineeringInsurance = [
    { id: "e1", titleLink: "/contractor-all-risk-policy", img: "/productIcons/engineering/contractorsAllRisk_icon.png", title: "Contractors", subtitle: "All Risk" },
    { id: "e2", titleLink: "/erection-all-risk-insurance", img: "/productIcons/engineering/erectionAllRisk_icon.png", title: "Erection", subtitle: "All Risk" },
    { id: "e3", titleLink: "/contractor-plant-and-machinery-insurance", img: "/productIcons/engineering/contractorsPlant_icon.png", title: "Contractors Plant", subtitle: "& Machinery" },
  ]
  const employeeBenefits = [
    { id: "eb1", titleLink: "/group-personal-accident-insurance", img: "/productIcons/employeeBenefits/groupPersonal_icon.png", title: "Group Personal", subtitle: "Accident" },
    { id: "eb2", titleLink: "/group-health-insurance", img: "/productIcons/employeeBenefits/groupHealth_icon.png", title: "Group Health", subtitle: "Insurance" },
  ]
  
  const marineInsurance = [
    { id: "m1", titleLink: "/marine-cargo-insurance", img: "/productIcons/marine/marine_icon.png", title: "Marine Transit", subtitle: "Policy" },
  ]
  return (
    <>
      <div className='homeBannerProduct container bg-white'>
        <div className='row'>
          <div className={`col-12`} >
            <div className='homeBannerProduct-heading d-md-flex align-items-center'>
              <div className='col-auto homeBannerProduct-headingText title24 text-primary text-decoration-none font-weight-600'>Liability Insurance</div>
              <div className='homeBannerProduct-headingDivider ms-4 h-1 bg-grayLight w-100'></div>
            </div>
          </div>
        </div>
        <div className='row g-4 g-lg-5 liabilityInsurance'>
          {liabilityInsurance.map((item) =>
            <div key={item.id} className="col-lg-3 col-6">
              <div className='onhoverAnimation'>
                <div className={`homeBannerProduct-card d-lg-flex w-100 align-items-center ${item.class}`}>
                  <Image
                    // loader={myLoader}
                    src={item.img}
                    alt="Bimakavach"
                    width={52}
                    height={52}
                  />
                  <div className='ms-lg-3 mt-3 mt-lg-0 title-20 text-black font-weight-500'>
                    <Link className='text-decoration-none text-black' href={item.titleLink}>{item.title} <br/>{item.subtitle}</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='row'>
          <div className={`col-12`} >
            <div className='homeBannerProduct-heading d-md-flex align-items-center mt-4 mt-xl-5'>
              <div className='col-auto homeBannerProduct-headingText title24 text-primary text-decoration-none font-weight-600'>Asset Insurance</div>
              <div className='homeBannerProduct-headingDivider ms-4 h-1 bg-grayLight w-100'></div>
            </div>
          </div>
        </div>
        <div className='row g-4 g-lg-5 assetInsurance'>
          {assetInsurance.map((item) =>
            <div key={item.id} className="col-lg-3 col-6">
              <div className='onhoverAnimation'>
                <div className='homeBannerProduct-card d-lg-flex w-100 align-items-center'>
                  <Image
                    // loader={myLoader}
                    src={item.img}
                    alt="Bimakavach"
                    width={52}
                    height={52}
                  />
                  <div className='ms-lg-3 mt-3 mt-lg-0 title-20 text-black font-weight-500'>
                    <Link className='text-decoration-none text-black' href={item.titleLink}>{item.title} <br/>{item.subtitle}</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/*<div className='row'>
          <div className={`col-12`} >
            <div className='homeBannerProduct-heading d-md-flex align-items-center mt-4 mt-xl-5'>
              <div className='col-auto homeBannerProduct-headingText title24 text-primary text-decoration-none font-weight-600'>Engineering Insurance</div>
              <div className='homeBannerProduct-headingDivider ms-4 h-1 bg-grayLight w-100'></div>
            </div>
          </div>
        </div>
        <div className='row g-4 g-lg-5 engineeringInsurance'>
          {engineeringInsurance.map((item) =>
            <div key={item.id} className="col-lg-3 col-6">
              <div className='onhoverAnimation'>
                <div className='homeBannerProduct-card d-lg-flex w-100 align-items-center'>
                  <Image
                    src={item.img}
                    alt="Bimakavach"
                    width={52}
                    height={52}
                  />
                  <div className='ms-lg-3 mt-3 mt-lg-0 title-20 text-black font-weight-500'>
                    <Link className='text-decoration-none text-black' href={item.titleLink}>{item.title} <br/>{item.subtitle}</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='row'>
          <div className={`col-12`} >
            <div className='homeBannerProduct-heading d-md-flex align-items-center mt-4 mt-xl-5'>
              <div className='col-auto homeBannerProduct-headingText title24 text-primary text-decoration-none font-weight-600'>Employee Benefits</div>
              <div className='homeBannerProduct-headingDivider ms-4 h-1 bg-grayLight w-100'></div>
            </div>
          </div>
        </div>
        <div className='row g-4 g-lg-5 employeeBenefits'>
          {employeeBenefits.map((item) =>
            <div key={item.id} className="col-lg-3 col-6">
              <div className='onhoverAnimation'>
                <div className='homeBannerProduct-card d-lg-flex w-100 align-items-center'>
                  <Image
                    src={item.img}
                    alt="Bimakavach"
                    width={52}
                    height={52}
                  />
                  <div className='ms-lg-3 mt-3 mt-lg-0 title-20 text-black font-weight-500'>
                    <Link className='text-decoration-none text-black' href={item.titleLink}>{item.title} <br/>{item.subtitle}</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>*/}

        <div className='row'>
          <div className={`col-12`} >
            <div className='homeBannerProduct-heading d-md-flex align-items-center mt-4 mt-xl-5'>
              <div className='col-auto homeBannerProduct-headingText title24 text-primary text-decoration-none font-weight-600'>Marine Insurance</div>
              <div className='homeBannerProduct-headingDivider ms-4 h-1 bg-grayLight w-100'></div>
            </div>
          </div>
        </div>
        <div className='row g-4 g-lg-5 marineInsurance'>
          {marineInsurance.map((item) =>
            <div key={item.id} className="col-lg-3 col-6">
              <div className='onhoverAnimation'>
                <div className='homeBannerProduct-card d-lg-flex w-100 align-items-center'>
                  <Image
                    // loader={myLoader}
                    src={item.img}
                    alt="Bimakavach"
                    width={52}
                    height={52}
                  />
                  <div className='ms-lg-3 mt-3 mt-lg-0 title-20 text-black font-weight-500'>
                    <Link className='text-decoration-none text-black' href={item.titleLink}>{item.title} <br/>{item.subtitle}</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
      <style jsx scope>
          {`
            .homeBanner {
              margin-top: 100px;
              padding-bottom: 20px;
            }
            .homeBannerTextTitle {

            }
            .BannerDescription{
              font-size: 24px;
              line-height: 36px;
              margin-bottom: 35px;
            }
            .homeBannerText{
              padding-left: 35px;
            }
            .homeBannerText-bottom{
              display: flex;
              align-items: end;
              gap: 0 80px;
            }
            .homeBannerText-bottomCard{
              border-bottom: 4px solid var(--vt-c-yellow)
            }
            .homeBannerText-bottomCard-descrip{
              margin-top: -5px;
            }
          
            .homeBannerText-bottomCard-last {
              display: flex;
              border: 0;
              padding: 0;
              padding-right: 30px;
              max-width: 272px; 
              height: 100%;
              margin-top: -230px;
            }
            .homeBannerText-bottomCard-last  .title-24 {
              line-height: 28px;
            }
            
            .homeBannerProduct{
              margin-top: 85px;
              padding: 85px;
              box-shadow: 0px 10px 40px 0px #D9D9D9;
              border: 4px dashed var(--vt-c-yellow);
            }
            .homeBannerProduct-heading{
              margin-bottom: 30px;
            }
            .homeBannerProduct-headingText{
              // width: 350px;
            }
            .homeBannerProduct-card img{
              width: 52px;
            }
            .homeBannerText-bottomCard-title{
              line-height: 36px;
            }
            .heroPlay {
                padding-top: 112px;
            }
            .homeBannerBtn a{
                padding: 20px 41px;
                box-shadow: 5px 10px 10px rgba(14, 43, 114, 0.1);
            }
            @media (min-width: 1300px){
              .container {
                max-width: 1170px !important;
              }
            }
            @media (min-width: 1399px){
              .container {
                max-width: 1300px !important;
              }
            }
            @media (min-width:1600px) {
              .container {
                max-width: 1460px !important;
              }
            }
            @media (min-width:1650px) {
              .container {
                max-width: 1548px !important;
              }
            }
            @media only screen and (max-width: 1650px) {
              .homeBannerText-bottomCard-last{
                max-width: 220px;
              }
            }
            @media only screen and (max-width: 1450px) {   
              .homeBannerProduct{
                padding: 60px;
              }
                .BannerDescription{
                  font-size: 22px;
                  line-height: 34px;
                  margin-bottom: 30px;
                }
                .homeBannerBtn a{
                  padding: 16px 28px;
                }
                .heroPlay {
                    padding-top: 40px;
                }

                .title-18 {
                    font-size: 16px;
                    line-height: 24px;
                }
            }
            @media only screen and (max-width: 1398px) {
              .homeBannerProduct {
                padding: 50px;
              }
              .title-20 {
                font-size: 18px;
                line-height: 26px;
              }
              .homeBannerProduct-card > div  br {
                display: none;
              }
            }
            @media only screen and (max-width: 1200px) {
                .HomeBannerStyle{
                    max-width: 100%;
                }
                .homeBannerProduct {
                  margin-top: 60px;
                }
                .heroPlay {
                    padding-top: 50px;
                }
                
            }
            @media only screen and (max-width: 992px) {
              .homeHero {
                margin-top: 0;
                padding-top: 0;
                // height: 92vh;
              } 
              .homeHero:before {
                background-position: 0 -5%;
                background-size: cover;
              }
              .homeBannerText-bottomCard-descrip{
                margin-top: 0;
              }
              .homeBannerContainer{
                text-align: center;
              }
              .HomeBannerStyle{
                
                  max-width: 100%;
                  display: block;
                  margin-top: 0;
              }
              .homeBannerText{
                padding-left: 0;
              }
              .homeBannerText-bottom{
                flex-wrap: wrap;
              }
              .homeBannerProduct{
                padding: 24px;
              }
              
              .homeBannerText-bottomCard{
                  margin-bottom: 20px;
              }
                .BannerDescription{
                    font-size: 18px;
                    line-height: 24px;
                }
                .homeBannerBtn{
                    width: 92%;
                    justify-content: center;
                    margin: 0 auto;
                    margin-top: 60px;
                }
                .heroPlay {
                  padding-top: 32px;
                }
                
                .homeBannerBtn a{
                    padding: 14px 18px;
                    width: 100%;
                    justify-content: center;
                }

                .title64 {
                    font-size: 40px;
                    line-height: 48px;
                }
                .title24 {
                    font-size: 18px;
                    line-height:26px;
                }
                
            }

            @media only screen and (max-width: 575px) {
              .HomeBannerStyle{
                padding: 40px 0 0;
              }
              .homeBannerTextTitle br {
                display: none;
              }
              .homeBannerText-bottomCard {
                margin-bottom: 10px;
              }
              .homeBannerText-bottomCard-title {
                font-size: 20px;
                line-height: 30px;
              }
              .homeBannerText-bottomCard-descrip {
                font-size: 16px;
                line-height: 22px;
              }
              .homeBannerText-bottomCard-last {
                margin-top: 0;
              }
              .homeBannerProduct {
                width: calc(100% - 40px);
                margin-top: 40px;
                padding: 16px;
                border-style: solid;
              }
              .homeBannerProduct-headingText {
                text-align: center;
                font-size: 24px;
                line-height: 30px;
                font-style: italic;
              }
              .homeBannerProduct-headingDivider {
                display: none;
              }
              .homeBannerProduct-card {
                text-align: center;
                
              }
              .homeBannerProduct-card .title-20 {
                font-size: 15px;
                line-height: 20px;
              }
              
            }
          `}
        </style>
    </>

  )
}
