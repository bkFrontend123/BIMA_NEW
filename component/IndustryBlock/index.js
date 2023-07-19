import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function IndustryBlock() {
  const liabilityInsurance = [
    { id: "l1", titleLink: "/directors-and-officers-insurance", img: "/productIcons/liability/dAndO_icon.svg", title: "Directors &", subtitle: "Officers Insurance" },
    { id: "l2", titleLink: "/errors-and-omissions-insurance", img: "/productIcons/liability/eAndO_icon.svg", title: "Errors & Omissions", subtitle: "Insurance" },
    { id: "l3", titleLink: "/general-liability-insurance", img: "/productIcons/liability/generalLiability_icon.svg", title: "General Liability", subtitle: "Insurance" },
    //{ id: "l4", titleLink: "/fidelity-insurance", img: "/productIcons/liability/fidelity_icon.svg", title: "Fidelity", subtitle: "Insurance" },
    { id: "l5", titleLink: "/product-liability-insurance", img: "/productIcons/liability/productLiability_icon.svg", title: "Product Liability", subtitle: "Insurance" },
    { id: "l6", titleLink: "/cyber-insurance", img: "/productIcons/liability/cyber_icon.svg", title: "Cyber", subtitle: "Insurance" },
    { id: "l7", titleLink: "/commercial-crime-insurance", img: "/productIcons/liability/crime_icon.svg", title: "Crime", subtitle: "Insurance" },
    { id: "18", titleLink: "/workmens-compensation-insurance", img: "/productIcons/liability/workman_icon.svg", title: "Workmen’s", subtitle: "Compensation" },
  ]
  const assetInsurance = [
    { id: "a1", titleLink: "/fire-and-burglary-insurance", img: "/productIcons/asset/fire_icon.svg", title: "Fire", subtitle: "Insurance" },
    //{ id: "a2", titleLink: "/", img: "/productIcons/asset/officePackage_icon.svg", title: "Office", subtitle: "Package" },
    //{ id: "a3", titleLink: "/", img: "/productIcons/asset/shopOwner_icon.svg", title: "Shop", subtitle: "Owner’s" },
    //{ id: "a4", titleLink: "/", img: "/productIcons/asset/restaurant_icon.svg", title: "Restaurant", subtitle: "Hotels & Cafes" },
    //{ id: "a5", titleLink: "/", img: "/productIcons/asset/educational_icon.svg", title: "Educational", subtitle: "Institutes" },
    //{ id: "a6", titleLink: "/", img: "/productIcons/asset/hospitals_icon.svg", title: "Hospitals", subtitle: "Clinics" },
  ]
  const engineeringInsurance = [
    { id: "e1", titleLink: "/contractor-all-risk-policy", img: "/productIcons/engineering/contractorsAllRisk_icon.svg", title: "Contractors", subtitle: "All Risk" },
    { id: "e2", titleLink: "/erection-all-risk-insurance", img: "/productIcons/engineering/erectionAllRisk_icon.svg", title: "Erection", subtitle: "All Risk" },
    { id: "e3", titleLink: "/contractor-plant-and-machinery-insurance", img: "/productIcons/engineering/contractorsPlant_icon.svg", title: "Contractors Plant", subtitle: "& Machinery" },
  ]
  const employeeBenefits = [
    { id: "eb1", titleLink: "/group-personal-accident-insurance", img: "/productIcons/employeeBenefits/groupPersonal_icon.svg", title: "Group Personal", subtitle: "Accident" },
    { id: "eb2", titleLink: "/group-health-insurance", img: "/productIcons/employeeBenefits/groupHealth_icon.svg", title: "Group Health", subtitle: "Insurance" },
  ]
  
  const marineInsurance = [
    { id: "m1", titleLink: "/marine-cargo-insurance", img: "/productIcons/marine/marine_icon.svg", title: "Marine Transit", subtitle: "Policy" },
  ]
  return (
    <>
      <div className='homeBannerProductOuter container'>
        <div className='homeBannerProduct bg-white'>
          <div className='getBusinessHdng title-26 text-primary text-decoration-none font-weight-700 mb-4'>
            <i>
              <Image
                src="/icons/getBusinessIcon.svg"
                alt="Get Business Insurance in Minutes"
                width={30}
                height={36}
              />
            </i> Get Business Insurance in Minutes</div>
          <div className='row'>
            <div className={`col-12`}>
              <div className='homeBannerProduct-heading d-md-flex align-items-center'>
                <div className='col-auto homeBannerProduct-headingText title24 text-primary text-decoration-none font-weight-700'>Liability Insurance</div>
                <div className='homeBannerProduct-headingDivider ms-4 h-1 bg-grayLight w-100'></div>
              </div>
            </div>
          </div>
          <div className='row g-4 liabilityInsurance'>
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
            <div className={`col-12`}>
              <div className='homeBannerProduct-heading d-md-flex align-items-center mt-4 mt-xl-5'>
                <div className='col-auto homeBannerProduct-headingText title24 text-primary text-decoration-none font-weight-700'>Asset Insurance</div>
                <div className='homeBannerProduct-headingDivider ms-4 h-1 bg-grayLight w-100'></div>
              </div>
            </div>
          </div>
          <div className='row g-4 assetInsurance'>
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
          <div className='row g-4 engineeringInsurance'>
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
            <div className={`col-12`}>
              <div className='homeBannerProduct-heading d-md-flex align-items-center mt-4 mt-xl-5'>
                <div className='col-auto homeBannerProduct-headingText title24 text-primary text-decoration-none font-weight-700'>Marine Insurance</div>
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
      </div>
      <style jsx scope>
          {`
            .homeBannerProduct{
              margin-top: 85px;
              padding: 50px;
              box-shadow: 0px 10px 40px 0px #D9D9D9;
              border: 4px dashed var(--vt-c-yellow);
            }
            .getBusinessHdng {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;
            }
            .homeBannerProduct-heading {
              margin-bottom: 24px;
            }
            .homeBannerProduct-card img {
              width: 52px;
            }
            .homeBannerText-bottomCard-title {
              line-height: 36px;
            }
            .title24 {
              font-size: 22px;
              line-height: 30px;
            }
            .title-20 {
              font-size: 17px;
              line-height: 26px;
            }
            @media (min-width: 1200px){
              
            }
            @media (min-width: 1499px){
              
            }
            @media (min-width:1700px) {
              
            }
            @media only screen and (max-width: 1699px) {
              
            }
            @media only screen and (max-width: 1399px) {   
              .homeBannerProduct{
                padding: 60px;
              }
                .title-20 {
                  font-size: 17px;
                  line-height: 26px;
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
            }
            @media only screen and (max-width: 992px) {
              .homeBannerContainer {
                text-align: center;
              }
              .HomeBannerStyle {
                  max-width: 100%;
                  display: block;
                  margin-top: 0;
              }
              .homeBannerText {
                padding-left: 0;
              }
              .homeBannerText-bottom {
                flex-wrap: wrap;
              }
              .homeBannerProduct {
                padding: 24px;
              }
              .title64 {
                font-size: 40px;
                line-height: 48px;
              }
              .title-26 {
                font-size: 20px;
                line-height: 28px;
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
                padding: 16px;
                border-style: solid;
              }
              .homeBannerProduct-headingText {
                text-align: center;
                font-size: 22px;
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
