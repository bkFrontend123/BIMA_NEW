import React from 'react'
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import Form from 'react-bootstrap/Form';
import RatingCard from '../RatingCard'
import SubscribeArrow from '../Icons/SubscribeArrow';
import Building from '../Icons/Building';
import Clock from '../Icons/Clock';


export default function ProductBanner(props) {
    const { title, description, customClass, insuranceWorth, insuranceAmount, noInsurer, children } = props;
    return (
        <>
            <div className={`ProductBanner ${customClass}`}>
                <div className='ProductBannerBox'>
                    <div className='container'>
                        <div className='row justify-content-between g-4'>
                            <div className='col-lg-5 col-xl-5'>
                                {/*<div className='ProductBanner-form'>
                                    <div className='bg-white ProductBanner-formBg p-4 p-xl-5'>
                                        <p className='ProductBanner-formTopHeading title-20 font-primaryNormal font-weight-500'>Analyse your Business Risk. <span className='d-inlline d-md-none'><br></br></span>Buy the right Policy within 10 Minutes</p>
                                        {*<div className='row'>
                                            <div className='col-lg-12 mx-auto'>
                                                <div className='ProductBanner-formTop  d-flex flex-md-row flex-column '>
                                                    <p className=' title20 font-weight-500 me-4 mb-0 d-flex  align-items-center'>
                                                        <Building iconColor="green " width="20" height="21" />
                                                        <span className='ms-2 font-primaryNormal'>Trusted by 340 businesses</span>
                                                    </p>
                                                    <p className='title20 font-weight-500 me-4 mb-0 d-flex  align-items-center'>
                                                        <Clock iconColor="green stroke" width="20" height="21" />
                                                        <span className='ms-2 font-primaryNormal'>Policy in Minutes</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>*}
                                        <div className='ProductBanner-formBox'>
                                            {children}
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                            <div className='col-lg-7 col-xl-6'>
                                <div className='ProductBannerText'>
                                    <h1 className='title-60 ProductBannerTextTitle text-black font-weight-700 font-secondary'>{title}</h1>
                                    <p className='ProductBannerTextDescrip title20  text-primaryDark font-primaryNormal font-weight-500 pe-md-4'>
                                        {description}
                                        {/*<Link className="d-block text-primary" href="/">Read More...</Link>*/}
                                    </p>
                                    {noInsurer === 'true' ? (
                                        null
                                    ):(
                                        <div className='ProductBannerRibbon d-flex align-items-center position-relative'>
                                            <div className='ProductBannerRibbon-left ProductBannerRibbonCol bg-white'>
                                                <div className='ProductBannerRibbonBox'>
                                                    <img src='/icons/barcode.svg' />
                                                    <div className='title-18 font-weight-500'>Coverage worth</div>
                                                    <div className='title-32 font-weight-600 mt-n2'>₹ {insuranceWorth}</div>
                                                </div>
                                            </div>
                                            <div className='ProductBannerRibbon-right ProductBannerRibbonCol'>
                                                <div className='ProductBannerRibbonBox'>
                                                    <img className='ribbonProduct' src='/icons/bimaTick.svg' />
                                                    <div className='title-18 text-yellow fst-italic font-weight-400'>at just</div>
                                                    <div className='title-48 text-yellow font-weight-600 mt-n2'>₹ {insuranceAmount}</div>
                                                    <div className='bg-yellow h-3 mt-1'></div>
                                                    <div className='title-18 text-yellow fst-italic font-weight-400'>annually</div>
                                                </div>
                                            </div> 
                                        </div>
                                    )}
                                    
                                    <div className='mt-4'>
                                        <RatingCard
                                            reviews="450"
                                            stars="4.5"
                                            background="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx scope>
                {`
                    .ProductBanner{
                        padding: 125px 0 240px 0;
                        background-repeat: no-repeat;
                        background-position: center left;
                        background-size: cover;
                        margin-top: -165px;
                        padding-top: 165px;
                        position: relative;
                    }
                    .dAndoBnr {
                        background-image: url(/productBanners/dAndO_banner.jpg);
                    }
                    .eAndoBnr {
                        background-image: url(/productBanners/eAndO_banner.jpg);
                    }
                    .gnrlBnr {
                        background-image: url(/productBanners/general_liability_banner.jpg);
                    }
                    .fdltyBnr {
                        background-image: url(/productBanners/fidelity_banner.jpg);
                    }
                    .prdctLlbtyBnr {
                        background-image: url(/productBanners/product_liability_banner.jpg);
                    }
                    .wrkmnCmpBnr {
                        background-image: url(/productBanners/workmen_banner.jpg);
                    }
                    .crimeBnr {
                        background-image: url(/productBanners/commercial_crime_banner.jpg);
                    }
                    .cybrBnr {
                        background-image: url(/productBanners/cyber_banner.jpg);
                    }
                    .fireBnr {
                        background-image: url(/productBanners/fire_banner.jpg);
                    }
                    .ofcPckgBnr {
                        background-image: url(/productBanners/office_package_banner.jpg);
                    }
                    .shopBnr {
                        background-image: url(/productBanners/shop_insurance_banner.jpg);
                    }
                    .rstrntBnr {
                        background-image: url(/productBanners/restaurant_banner.jpg);
                    }
                    .edctnlBnr {
                        background-image: url(/productBanners/educational_banner.jpg);
                    }
                    .hsptlsClncsBnr {
                        background-image: url(/productBanners/hospitals_clinics_banner.jpg);
                    }
                    .cntrctrBnr {
                        background-image: url(/productBanners/contractor_risk_banner.jpg);
                    }
                    .erctnBnr {
                        background-image: url(/productBanners/erection_banner.jpg);
                    }
                    .cntrctrPlantBnr {
                        background-image: url(/productBanners/contractor_plant_banner.jpg);
                    }
                    .grpPrsnlBnr {
                        background-image: url(/productBanners/group_personal_banner.jpg);
                    }
                    .grpHlthBnr {
                        background-image: url(/productBanners/group_health_banner.jpg);
                    }
                    .marineBnr {
                        background-image: url(/productBanners/marine_banner.jpg);
                    }
                    .ProductBannerBox{
                        margin-top: 100px;
                    }
                    .ProductBannerText{
                        padding-left: 30px;
                    }
                    .ProductBannerTextTitle{
                        margin-bottom: 50px;
                    }
                    .ProductBannerTextDescrip{
                        margin-bottom: 50px;
                    }
                    .ProductBanner-formTop {
                        margin-bottom: 48px;
                    }
                    .ProductBanner-formBox a.btnCommon {
                        padding: 21px 70px;
                        box-shadow: 0 0 25px 0 rgb(0 0 0 / 15%);
                     }
                    .ProductBanner-formTopHeading{
                        margin-bottom: 20px
                    }
                    .ProductBannerRibbon{
                        height: 110px;
                        transform: skew(-12deg);
                        margin-left: 15px;
                    }
                    .ProductBannerRibbonCol{
                        padding: 0 25px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                    .ProductBannerRibbon-left{
                        border: 2px dashed var(--vt-c-blueDark1);
                        margin-right: -2px;
                    }
                    .ProductBannerRibbon-right{
                        padding-right: 60px;
                        /* -webkit-clip-path: polygon(100%0%,89%49%,100%100%,0 100%,0%50%,0 0); */
                        /* clip-path: polygon(100%0%,89%49%,100%100%,0 100%,0%50%,0 0); */
                        background-color: var(--vt-c-blueDark1);
                        position: relative;
                        border-radius: 0 5px 5px 0;
                        z-index: 1;
                    }
                    .ProductBannerRibbon-right::before {
                        background: var(--vt-c-blueDark1);
                        position: absolute;
                        content: "";
                        left: -11px;
                        top: 0;
                        bottom: 0;
                        width: 24px;
                        transform: skew(12deg);
                        z-index: -1;
                    }
                    .ProductBannerRibbonBox {
                        transform: skew(12deg);
                    }
                    .ProductBannerRibbonCol .title-18 {
                        line-height: 25px;
                    }
                    .ProductBannerRibbonCol .title-20 {
                        line-height: 25px;
                    }
                    .ProductBannerRibbonCol.ProductBannerRibbon-right .title-18 {
                        line-height: 22px;
                    }

                    .ProductBannerRibbonCol .title-32{
                        line-height: 32px;
                        color: var(--vt-c-blueDark1);
                    }
                    .ProductBannerRibbonCol .title-48{
                        line-height: 44px;
                    }
                    .ribbonProduct{
                        position: absolute;
                        right: -56px;
                        bottom: -7px;
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
                        .ProductBanner-form{
                            max-width: 665px;
                            margin-left: auto;
                        }
                      }
                      @media (min-width:1650px) {
                        .container {
                          max-width: 1548px !important;
                        }
                      }
                      @media only screen and (max-width: 1450px) {
                        .title-60 {
                            font-size: 54px;
                            line-height: 70px;
                        }
                    }
                     @media only screen and (max-width: 1650px) {
                        .ProductBanner-formTop p{
                            font-size: 18px; 
                            line-height: 27px;
                        }
                        .title-64{
                            font-size: 55px;
                            line-height: 55px;
                         }
                        .title20{
                            font-size: 18px;
                            line-height: 26px;
                         }
                     }
                     @media only screen and (max-width: 1399px){
                        .ProductBanner-form{
                            
                        }
                        .ProductBanner-formBox{
                            padding: 0;
                        }
                    }
                    @media only screen and (max-width: 1199px) {
                        .title-64, .title-60 {
                            font-size: 42px;
                            line-height: 48px;
                        }
                        .ProductBannerTextTitle{
                            margin-bottom: 30px;
                        }
                    }
                    @media only screen and (max-width: 991px) {
                        .title-64, .title-60 {
                            font-size: 34px;
                            line-height: 42px;
                        }
                    }
                     @media only screen and (max-width: 767px) {
                        .ProductBanner{
                            padding: 48px 0 300px 0;
                        }
                        .dAndoBnr {
                            background-position: -832px;
                            padding-bottom: 320px !important;
                        }
                        .eAndoBnr {
                            background-position: -755px;
                            padding-bottom: 300px !important;
                        }
                        .gnrlBnr {
                            background-position: -740px;
                            padding-bottom: 320px !important;
                        }
                        .fdltyBnr {
                            background-position: -832px;
                            padding-bottom: 320px !important;
                        }
                        .prdctLlbtyBnr {
                            background-position: -570px;
                            padding-bottom: 350px !important;
                        }
                        .wrkmnCmpBnr {
                            background-position: -410px 120px;
                            padding-bottom: 300px !important;
                        }
                        .crimeBnr {
                            background-position: -640px;
                            padding-bottom: 320px !important;
                        }
                        .cybrBnr {
                            background-position: -720px;
                            padding-bottom: 320px !important;
                        }
                        .fireBnr {
                            background-position: -650px;
                            padding-bottom: 300px !important;
                        }
                        .ofcPckgBnr {
                            background-position: -50px;
                            padding-bottom: 300px !important;
                        }
                        .shopBnr {
                            background-position: -505px;
                            padding-bottom: 300px !important;
                        }
                        .rstrntBnr {
                            background-position: -520px;
                            padding-bottom: 260px !important;
                        }
                        .edctnlBnr {
                            background-position: 0 100px;
                            padding-bottom: 300px !important;
                        }
                        .hsptlsClncsBnr {
                            background-position: -50px 100px;
                            padding-bottom: 300px !important;
                        }
                        .cnstrnBnr {
                            background-position: -500px;
                            padding-bottom: 300px !important;
                        }
                        .erctnBnr {
                            background-position: -340px 80px;
                            padding-bottom: 320px !important;
                        }
                        .cntrctrBnr {
                            background-position: -880px;
                            padding-bottom: 300px !important;
                        }
                        .grpPrsnlBnr {
                            background-position: -832px;
                            padding-bottom: 320px !important;
                        }
                        .grpHlthBnr {
                            background-position: -832px;
                            padding-bottom: 320px !important;
                        }
                        .marineBnr {
                            background-position: -620px;
                            padding-bottom: 300px !important;
                        }
                        .ProductBannerTextTitle{
                            margin-bottom: 10px;
                            font-size: 34px;
                            line-height: 42px;
                        }
                        .ProductBannerText{
                            padding: 50px 0 0 0;
                        }
                        .ProductBannerTextDescrip{
                            margin-bottom: 34px;
                        }
                        .ProductBannerRibbon {
                            height: 90px;
                        }
                        .ProductBannerRibbonCol {
                            padding: 0 16px;
                        }
                        .ProductBannerRibbon-right {
                            padding-right: 40px;
                        }
                        .ProductBannerRibbon-right::before {
                            left: -8px;
                            width: 20px;
                        }
                        .ribbonProduct {
                            width: 24px;
                            right: -36px;
                            bottom: -4px;
                        }
                        .ProductBannerRibbonCol .title-20 {
                            font-size: 16px;
                            line-height: 20px;
                        }
                        .ProductBannerRibbonCol .title-18 {
                            font-size: 16px;
                        }
                        .ProductBannerRibbonCol .title-48 {
                            font-size: 27px;
                            line-height: 30px;
                        }
                        .ProductBannerRibbonCol .title-32 {
                            font-size: 22px;
                        }
                        .ProductBanner-form {
                            padding: 0;                            
                         }
                         .ProductBanner-formBox {
                            padding: 0 105px;
                        }
                         .ProductBanner-formBg {
                            padding: 30px;
                            padding-bottom: 60px;
                         }
                         .ProductBanner-form .title20{
                            font-size: 15px;
                            line-height: 20px;
                            margin-bottom: 4px;
                         }
                         .ProductBanner-formTop {
                             max-width: 85%;
                             justify-content: center;

                         }
                         .ProductBanner-formTop p{
                                padding: 0;
                                margin: 0 !important;
                            }
                            .ProductBanner-formTop p svg{
                                width: 16px;
                            }
                            .ProductBanner-formBox{
                                padding: 0 !important;
                            }
                            .ProductBanner-formBox input{
                                height: 54px; 
                            }
                            .ProductBanner-formBox a.btnCommon {
                                padding: 22px 70px;
                                width: 100%;
                                justify-content: center;
                            }
                        }
                        @media only screen and (max-width: 420px) {
                            
                        } 
                      
                        @media only screen and (max-width: 370px) {
                            .ProductBanner-form{
                                padding: 0 0px !important;
                            }
                            .ProductBanner-formBox{
                                padding: 0 0px !important;
                            }
                            .ProductBanner-formBg{
                                padding: 30px 21px;
                                padding-bottom: 70px;
                            }
                            .ProductBanner-form .title20{
                                font-size: 14px;
                            }
                        }
                     
                     
               `}
            </style>
        </>
    )
}
