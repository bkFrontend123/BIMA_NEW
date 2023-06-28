import React from 'react'
import Form from 'react-bootstrap/Form';
import SubscribeArrow from '../Icons/SubscribeArrow';

export default function ProductBanner(props) {
    const { title, description, yourName, companyName, email, phone, customClass } = props;
    return (
        <>
            <div className={`ProductBanner text-center ${customClass}`}>
                <div className='ProductBannerText'>
                    <h1 className='title-64 ProductBannerTextTitle font-weight-600 font-secondary'>{title}</h1>
                    <p className='title24 ProductBannerTextDescrip font-primaryNormal font-weight-500'>{description}</p>
                </div>
                <div className='ProductBanner-form'>
                    <div className='bg-white ProductBanner-formBg' >
                        <p className='title20 font-primaryNormal font-weight-500  mb-4'>Analyse your Business Risk. <span className='d-inlline d-md-none'><br></br></span>Buy the right Policy within 10 Minutes</p>
                        <div className='row'>
                            <div className='col-lg-10 mx-auto'>
                                <div className='ProductBanner-formTop mb-4 d-flex justify-content-center flex-md-row flex-column mx-auto'>
                                    <p className='title20 font-weight-500 me-4 d-flex  align-items-center'>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                        </svg>
                                        <span className='ms-2 font-primaryNormal'>Trusted by 340 businesses</span>
                                    </p>
                                    <p className='title20 font-weight-500 me-4 d-flex  align-items-center'>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                        </svg>
                                        <span className='ms-2 font-primaryNormal'>Policy in Minutes</span>
                                    </p>
                                    <p className='title20 font-weight-500 me-4 d-flex  align-items-center'>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                                        </svg>
                                        <span className='ms-2 font-primaryNormal'>Suspendisse pharetra</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='ProductBanner-formBox'>
                            {/*<Form className='row '>
                                <Form.Group className="mb-3 col-md-6">
                                    <Form.Control type="text" placeholder="Your Name" value={yourName} />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6">
                                    <Form.Control type="text" placeholder="Your Company Name" value={companyName} />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6">
                                    <Form.Control type="number" placeholder="Your Work Email Address" value={phone} />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6 notNo">
                                    <Form.Control type="email" placeholder="Your Phone Number" value={email} />
                                </Form.Group>

                                <div className={`d-flex justify-content-center mt-3`}>
                                    <a className='btnCommon text-primary box-shadow yellowBtn text-decoration-none'>
                                        <span className='me-2'> Buy Now </span>
                                        <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                        {* <img className='ms-3' src='/icons/subscribeArrow.svg' /> *}
                                    </a>
                                </div>
                            </Form>*/}
                        </div>

                    </div>
                </div>
            </div>

            <style jsx scope>
                {`
                    .ProductBanner{
                        padding: 125px 0 160px 0;
                    }
                    .ProductBannerTextTitle{
                        margin-bottom: 30px;
                    }
                    .ProductBannerTextDescrip{
                        margin-bottom: 30px;
                    }
                    .aboutProductNavbar{
                        margin-bottom: 120px;
                    }
                    .ProductBanner-form {
                        padding: 0 60px;                        
                     }
                     .ProductBanner-formBg{
                        padding: 32px 0 64px 0;
                     }
                     .ProductBanner-formBox{
                        padding: 0 130px ;
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
                            line-height: 18px;
                         }
                     }
                     @media only screen and (max-width: 1399px){
                        .ProductBanner-form{
                            
                        }
                        .ProductBanner-formBox{
                            padding: 0 105px;
                        }
                    }
                     @media only screen and (max-width: 575px) {
                        .ProductBanner{
                            padding: 48px 0;
                        }
                        .ProductBannerTextTitle{
                            margin-bottom: 10px;
                            font-size: 34px;
                            line-height: 38px;
                        }
                        .ProductBannerText{
                            padding: 0 40px;
                        }
                        .ProductBanner-form {
                            padding: 0 15px;                            
                         }
                         .ProductBanner-formBg{
                            padding: 30px;
                            padding-bottom: 60px;
                            border: 1px solid var(--vt-c-blue);
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
                            .ProductBannerText{
                                padding: 0 15px;
                            }
                        }
                     
                     
               `}
            </style>
        </>
    )
}
