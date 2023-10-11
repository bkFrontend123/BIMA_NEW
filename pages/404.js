import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import Search from '../component/Icons/Search'
import ArrowRightSmall from '../component/Icons/ArrowRightSmall'

export default function Custom404() {

  const router = useRouter();

  useEffect(() => {
    const redirects = {
      '/commercial-crime': '/blog/commercial-crime-insurance-in-india/',
      '/director-and-officials': '/directors-and-officers-insurance',
      '/content/Other/privacypol.htm': '/privacy-policy',
      '/privacy-and-policy': '/privacy-policy',
      '/errors-and-omissions': '/errors-and-omissions-insurance',
      '/general-liability': '/general-liability-insurance',
      '/product-liability': '/product-liability-insurance',
      '/about-us': '/about',
      '/errors-and-omission': '/errors-and-omissions-insurance',
      '/contractor-all-risk-policy': '/contractor-all-risk-policy',
      '/contractor-plant-and-machinery-insurance': '/contractor-plant-and-machinery-insurance',
      '/erection-all-risk-insurance': '/erection-all-risk-insurance',
      '/workmens-compensation-insurance': '/workmens-compensation-insurance',
      '/blog/page/7': '/blog/understanding-the-doctrine-of-subrogation-in-fire-insurance/',
      '/blog-1': '/blog/',
    };

    const currentUrl = router.asPath;

    if (redirects[currentUrl]) {
      router.push(redirects[currentUrl]);
    }

    document.body.classList.add("homePageBody")
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found | BimaKavach</title>
        <meta name="description" content="Read the detailed blogs and explore more products at bimakavach.com" />
        <link rel="canonical" href="" />
      </Head>
      <Navbar />
      <div className='errorPage'>
        <div className={`container `}>
          <div className={`row errorPage-row`}>
            <div className={`col-md-6 mt-5 mt-md-0`}>
              <img src='/error.png' />
            </div>
            <div className={`col-md-6 pe-lg-5`}>
              <div className='commnHeading '>
                <div className='polyBox border-gray mb-md-4 mb-2 text-gray title-16 font-weight-500 '>Page Not Found</div>
                <div className='title-60 font-secondary mb-md-4 mb-2 text-primary font-weight-600'>This page seems to have gotten caught up in an exciting discussion.</div>
                <p className='errorPage-commnHeadingDescrip title-22 font-weight-500 text-black mt-2 '>But fret not! Feel free to browse our Home page, visit our Blog, or message us about your specific needs.<span className='d-block'></span>We are all ears and eager to help you!</p>
              </div>

              {/*<form className='errorForm'>
			  <div className="form-group errorForm-search">
                  <div className="input-group border-primary border2" style={{ height: "50px" }}>
                    <div className="input-group-prepend">
                      <div className="input-group-text pe-0 ps-4 h-100 bg-transparent border-0">
                        <Search iconColor="primary" width="18" height="18" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-transparent h-100 radius-0 border-0"
                      placeholder="Search our site"
                    />
                  </div>
			  </div>
			  
			  <div className='errorForm-result'>
                  <div className='errorForm-resultCard mb-md-5 mb-3'>
                    <div>
                      <Link className='errorForm-resultCardTitle title-24 font-weight-500 text-yellow text-decoration-none d-inline-block' href="">
                        <span className='d-flex px-lg-2 pe-2'>
                          <span className='me-2'>Glossary</span>
                          <ArrowRightSmall customClass="errorForm-resultCardSVG" iconColor="yellow" width="20" />
                        </span>
                        <div className='divider w-100 bg-yellow mt-2'></div>
                      </Link>
                    </div>
                    <div className=' title-18 font-weight-500 mt-3'>Can’t understand that term? We’ve got you covered</div>
                  </div>
                  <div className='errorForm-resultCard mb-md-5 mb-3'>
                    <div>
                      <Link className='errorForm-resultCardTitle title-24 font-weight-500 text-yellow text-decoration-none d-inline-block' href="">
                        <span className='d-flex px-lg-2 pe-2'>
                          <span className='me-2'>Our Blogs</span>
                          <ArrowRightSmall customClass="errorForm-resultCardSVG" iconColor="yellow" width="20" />
                        </span>
                        <div className='divider w-100 bg-yellow mt-2'></div>
                      </Link>
                    </div>
                    <div className=' title-18 font-weight-500 mt-3'>Read about what our technical experts have to stay</div>
                  </div>
                  <div className='errorForm-resultCard mb-md-5 mb-3'>
                    <div>
                      <Link className='errorForm-resultCardTitle title-24 font-weight-500 text-yellow text-decoration-none d-inline-block' href="">
                        <span className='d-flex px-lg-2 pe-2'>
                          <span className='me-2'>Talk to Us</span>
                          <ArrowRightSmall customClass="errorForm-resultCardSVG" iconColor="yellow" width="20" />
                        </span>
                        <div className='divider w-100 bg-yellow mt-2'></div>
                      </Link>
                    </div>
                    <div className=' title-18 font-weight-500 mt-3'>Contact Our Experts about anything related to our Products</div>
                  </div>

                </div>
              </form>*/}
            </div>
          </div>
        </div>




      </div>
      <Footer />

      <style jsx scope>
        {`
            .errorPage{
              padding-top: 100px;
            }
            .errorPage .commnHeading p{
              margin-bottom: 60px;
            }
            .errorForm-result{
              margin-top: 70px;
            }
            .errorForm-resultCard{

            }
            .title-60 {
                font-size: 60px;
                line-height: 68px;
            }

            @media (min-width:1600px) {
              .container {
                max-width: 1400px;
              }
              .errorPage-commnHeadingDescrip{
                max-width: 80%;
                padding-top: 6px;
              }
            }
            @media (max-width:1450px) {
              .title-60 {
                font-size: 56px;
                line-height: 62px;
              }
            }
            @media (max-width:575px) {
              .errorPage {
                padding-top: 60px;
              }
              .errorPage-row{
                flex-direction: column-reverse;
              }
              .title-60 {
                font-size: 26px;
                line-height: 36px;
              }
              .title-24 {
                font-size: 18px;
                line-height: 27px;
              }
              .title-22 {
                font-size: 18px;
                line-height: 27px;
              }
              .title-18 {
                font-size: 12px;
                line-height: 16px;
              }

              .errorPage .commnHeading p{
                margin-bottom: 25px;
              }
              

              
            }
            
        `}
      </style>
    </>
  )
}
