import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import formStyle from '@/assets/css/form.module.css'

export default function ProductBanner(props) {
    const { title, description, customClass, insuranceWorth, insuranceAmount, noInsurer, productImgSrc, form, formHeading, children } = props;
    return (
        <>
            <div className={`ProductBanner ${customClass}`}>
                <div className='ProductBannerBox'>
                    <div className='container p-lg-0'>
                        <div className='row justify-content-between g-4'>
                            <div className='col-lg-7 col-xl-6'>
                                <div className='ProductBannerText'>
                                    <h1 className='title-60 ProductBannerTextTitle text-primary font-weight-700 font-secondary'>{title}</h1>
                                    <p className='ProductBannerTextDescrip title20 text-black font-primaryNormal font-weight-500'>
                                        {description}
                                    </p>
                                    <div className='ProductBannerRibbonOuter position-relative'>
                                        <div className='ProductBannerRibbonInner'>
                                            <div className='ProductBannerRibbonImg'>
                                                <span>
                                                    <i>
                                                        <Image src={productImgSrc} width="auto" height={300} alt="Product Image" />
                                                    </i>
                                                </span>
                                            </div>
                                            <div className='ProductBannerRibbon d-flex align-items-center position-relative'>
                                                <div className={`ProductBannerRibbon-left ProductBannerRibbonCol bg-white ${noInsurer === 'true' ? 'fill' : null}`}>
                                                    <div className='ProductBannerRibbonBox'>
                                                        {noInsurer === 'true' ? (
                                                            null
                                                        ):(
                                                            <>
                                                                {/*<img src='/icons/barcode.svg' />*/}
                                                                <div className='title-16 font-weight-500'>Coverage worth</div>
                                                                <div className='title-32 font-weight-600 mt-n2'>₹ {insuranceWorth}</div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='ProductBannerRibbon-right ProductBannerRibbonCol'>
                                                    {noInsurer === 'true' ? (
                                                        null
                                                    ):(
                                                        <>
                                                            <div className='ProductBannerRibbonBox'>
                                                                <img className='ribbonProduct' src='/icons/bimaTick.svg' />
                                                                <div className='title-16 text-yellow fst-italic font-weight-400'>at just</div>
                                                                <div className='title-48 text-yellow font-weight-600 mt-n2'>₹ {insuranceAmount}<sup>*</sup></div>
                                                                <div className='bg-yellow h-3 mt-1'></div>
                                                                <div className='title-16 text-yellow fst-italic font-weight-400'>annually</div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-xl-5'>
                                {form === 'true' ? (
                                    <div className={`${formStyle.whiteFormBox} ${formStyle.commonForm}`}>
                                        <p className='ProductBanner-formTopHeading title-20 font-primaryNormal text-primary font-weight-700 mb-4'>
                                            <i>
                                                <Image
                                                    src="/icons/getBusinessIcon.svg"
                                                    alt={[<>Get {formHeading} Business Insurance in Minutes</>]}
                                                    width={30}
                                                    height={36}
                                                />
                                            </i> Get {formHeading} in Minutes
                                        </p>
                                        <div className='ProductBanner-formBox'>
                                            {children}
                                        </div>
                                    </div>
                                ):(
                                    null
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx scope>
                {`
                    .ProductBanner{
                        background-color: var(--whiteBg);
                        padding: 80px 0;
                        background-repeat: no-repeat;
                        background-position: center left;
                        background-size: cover;
                        margin-top: -119px;
                        padding-top: 119px;
                        position: relative;
                    }
                    .dAndoBnr {
                        //background-image: url(/productBanners/dAndO_banner.jpg);
                    }
                    .eAndoBnr {
                        //background-image: url(/productBanners/eAndO_banner.jpg);
                    }
                    .gnrlBnr {
                        //background-image: url(/productBanners/general_liability_banner.jpg);
                    }
                    .fdltyBnr {
                        //background-image: url(/productBanners/fidelity_banner.jpg);
                    }
                    .prdctLlbtyBnr {
                        //background-image: url(/productBanners/product_liability_banner.jpg);
                    }
                    .wrkmnCmpBnr {
                        //background-image: url(/productBanners/workmen_banner.jpg);
                    }
                    .crimeBnr {
                        //background-image: url(/productBanners/commercial_crime_banner.jpg);
                    }
                    .cybrBnr {
                        //background-image: url(/productBanners/cyber_banner.jpg);
                    }
                    .fireBnr {
                        //background-image: url(/productBanners/fire_banner.jpg);
                    }
                    .ofcPckgBnr {
                        //background-image: url(/productBanners/office_package_banner.jpg);
                    }
                    .shopBnr {
                        //background-image: url(/productBanners/shop_insurance_banner.jpg);
                    }
                    .rstrntBnr {
                        //background-image: url(/productBanners/restaurant_banner.jpg);
                    }
                    .edctnlBnr {
                        //background-image: url(/productBanners/educational_banner.jpg);
                    }
                    .hsptlsClncsBnr {
                        //background-image: url(/productBanners/hospitals_clinics_banner.jpg);
                    }
                    .cntrctrBnr {
                        //background-image: url(/productBanners/contractor_risk_banner.jpg);
                    }
                    .erctnBnr {
                        //background-image: url(/productBanners/erection_banner.jpg);
                    }
                    .cntrctrPlantBnr {
                        //background-image: url(/productBanners/contractor_plant_banner.jpg);
                    }
                    .grpPrsnlBnr {
                        //background-image: url(/productBanners/group_personal_banner.jpg);
                    }
                    .grpHlthBnr {
                        //background-image: url(/productBanners/group_health_banner.jpg);
                    }
                    .marineBnr {
                        //background-image: url(/productBanners/marine_banner.jpg);
                    }
                    .ProductBannerBox{
                        margin-top: 50px;
                    }
                    .ProductBannerTextTitle{
                        margin-bottom: 12px;
                    }
                    .title-60 {
                        font-size: 32px;
                        line-height: 40px;
                    }
                    .ProductBannerTextDescrip{
                        margin-bottom: 30px;
                    }
                    .ProductBanner-formTop {
                        margin-bottom: 48px;
                    }
                    .ProductBanner-formBox a.btnCommon {
                        padding: 21px 70px;
                        box-shadow: 0 0 25px 0 rgb(0 0 0 / 15%);
                     }
                    .ProductBanner-formTopHeading {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;
                        justify-content: center;
                    }
                    .ProductBannerRibbonOuter {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .ProductBannerRibbonInner {
                        transform: skew(-12deg);
                    }
                    .ProductBannerRibbonImg {
                        margin-bottom: -1px;
                        margin-top: 36px;
                    }
                    .ProductBannerRibbonImg span {
                        border-radius: 12px;
                        border: 2px solid var(--vt-c-blueDark1);
                        border-radius: 12px 12px 0 0;
                        border-bottom: 0;
                        display: block;
                        text-align: center;
                    }
                    .ProductBannerRibbonImg span i {
                        transform: skew(12deg);
                        margin-top: -40px;
                        margin-left: -40px;
                        display: block
                    }
                    .ProductBannerRibbon{
                        height: 100px;
                    }
                    .ProductBannerRibbonCol{
                        padding: 0 20px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                    .ProductBannerRibbon-left{
                        border: 2px dashed var(--vt-c-blueDark1);
                        margin-right: -2px;
                    }
                    .ProductBannerRibbon-left.fill {
                        background: var(--vt-c-blueDark1) !important;
                        border-radius: 5px 0 0 5px;
                    }
                    .ProductBannerRibbon-right{
                        padding-right: 40px;
                        padding-left: 12px;
                        background-color: var(--vt-c-blueDark1);
                        position: relative;
                        border-radius: 0 5px 5px 0;
                        min-width: 180px;
                        z-index: 1;
                    }
                    .ProductBannerRibbon-right::before {
                        background: var(--vt-c-blueDark1);
                        position: absolute;
                        content: "";
                        left: -12px;
                        top: 0;
                        bottom: 0;
                        width: 23px;
                        transform: skew(12deg);
                        z-index: -1;
                    }
                    .ProductBannerRibbonBox {
                        transform: skew(12deg);
                        min-width: 120px;
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
                        font-size: 28px;
                        line-height: 32px;
                        color: var(--vt-c-blueDark1);
                    }
                    .ProductBannerRibbonCol .title-48{
                        line-height: 40px;
                        font-size: 40px;
                        position: relative;
                        display: inline-block;
                    }
                    .ProductBannerRibbonCol .title-48 sup {
                        position: absolute;
                        right: -10px;
                        top: 10px;
                        font-size: 24px;
                        font-weight: 400;
                    }
                    .ribbonProduct{
                        position: absolute;
                        right: -36px;
                        bottom: -6px;
                        width: 36px;
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
                        .ProductBanner-formBox{
                            padding: 0;
                        }
                    }
                    @media only screen and (max-width: 1199px) {
                        .title-64, .title-60 {
                            font-size: 42px;
                            line-height: 48px;
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
                            padding: 68px 0 300px 0;
                            margin-top: -135px;
                        }
                        .dAndoBnr {
                            background-position: -832px;
                            padding-bottom: 320px !important;
                        }
                        .eAndoBnr {
                            //background-position: -755px;
                            //padding-bottom: 300px !important;
                        }
                        .gnrlBnr {
                            background-position: -740px;
                            padding-bottom: 320px !important;
                        }
                        .fdltyBnr {
                            //background-position: -832px;
                            //padding-bottom: 320px !important;
                        }
                        .prdctLlbtyBnr {
                            //background-position: -570px;
                            //padding-bottom: 350px !important;
                        }
                        .wrkmnCmpBnr {
                            //background-position: -410px 120px;
                            //padding-bottom: 300px !important;
                        }
                        .crimeBnr {
                            //background-position: -640px;
                            //padding-bottom: 320px !important;
                        }
                        .cybrBnr {
                            //background-position: -720px;
                            //padding-bottom: 320px !important;
                        }
                        .fireBnr {
                            //background-position: -650px;
                            //padding-bottom: 300px !important;
                        }
                        .ofcPckgBnr {
                            //background-position: -50px;
                            //padding-bottom: 300px !important;
                        }
                        .shopBnr {
                            //background-position: -505px;
                            //padding-bottom: 300px !important;
                        }
                        .rstrntBnr {
                            //background-position: -520px;
                            //padding-bottom: 260px !important;
                        }
                        .edctnlBnr {
                            //background-position: 0 100px;
                            //padding-bottom: 300px !important;
                        }
                        .hsptlsClncsBnr {
                            //background-position: -50px 100px;
                            //padding-bottom: 300px !important;
                        }
                        .cnstrnBnr {
                            //background-position: -500px;
                            //padding-bottom: 300px !important;
                        }
                        .erctnBnr {
                            //background-position: -340px 80px;
                            //padding-bottom: 320px !important;
                        }
                        .cntrctrBnr {
                            //background-position: -880px;
                            padding-bottom: 300px !important;
                        }
                        .grpPrsnlBnr {
                            //background-position: -832px;
                            //padding-bottom: 320px !important;
                        }
                        .grpHlthBnr {
                            //background-position: -832px;
                            //padding-bottom: 320px !important;
                        }
                        .marineBnr {
                            //background-position: -620px;
                            //padding-bottom: 300px !important;
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
                            padding: 0 18px;
                        }
                        .ProductBannerRibbon-left {
                            padding-right: 20px;
                        }
                        .ProductBannerRibbon-right {
                            padding-right: 30px;
                            padding-left: 10px;
                        }
                        .ProductBannerRibbon-right::before {
                            left: -10px;
                            width: 20px;
                        }
                        .ribbonProduct {
                            width: 24px;
                            right: -25px;
                            bottom: -4px
                        }
                        .ProductBannerRibbonCol .title-20 {
                            font-size: 15px;
                            line-height: 20px;
                        }
                        .ProductBannerRibbonCol .title-18 {
                            font-size: 16px;
                        }
                        .ProductBannerRibbonCol .title-48 {
                            font-size: 26px;
                            line-height: 30px;
                        }
                        .ProductBannerRibbonCol .title-32 {
                            font-size: 22px;
                        }
                         .ProductBanner-formBox {
                            padding: 0 105px;
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
                            .ProductBanner-formBox{
                                padding: 0 0px !important;
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
