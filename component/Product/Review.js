import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/pagination';
import "swiper/css/navigation";


export default function Companies(props) {
  const review = ([
    { id: "r1", text: `"BimaKavach understood the intricacies of our business and ensured we were covered adequately for our risks. We were run through in detail about the policy and got our policy the very next day of reaching out. Totally hassle free!`, name: "Vivek Prakash", position: "Codingal", img: "codingal.png" },
    { id: "r2", text: `"BimaKavach understood our risk exposure analysing all the complexities of our products. They ran us through the possible risk exposures and helped us cover the gaps. Our recommended policy is precise for our fintech offering and understands its differences from other businesses.`, name: "Naman Paithankar", position: "FinBox", img: "finBox.png" },
  ])
  // const reviewImg = ([
  //   { id: "s1", img: "/backBest1.png" },

  // ])

  return (
    <>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
   
      <div className={`companyReview ${props.customClass}`}>
        <div className='container'>
          <div className={`row text-start text-center`}>
            <div className={`col-md-12 mx-auto`}>
              <div className='commnHeading'>
                <div className='polyBox border-primary bg-blueLight text-primary title12 text-uppercase font-weight-600 mb-3'>Reviews by our Clients</div>
                <div className='title-36 font-secondary mb-0 text-primary font-weight-700'>Trusted by <span className='text-yellow fst-italic'>500 + Clients</span> Across India</div>
                {/* <div className=' text-primary font-weight-600 title16' >Our customers trust us.</div> */}
              </div>
            </div>
          </div>

          <div className={`row companyReview-slider align-items-center`}>
            <div className={`col-lg-2 d-none d-md-block`}>
              <div className='image-swiper-button-prev' >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.28516 6.41016L12.5883 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.74609 1.11572L12.5903 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.74609 11.7051L12.5903 6.41064" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
            </div>
            <div className={`col-lg-8  `}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}                
                scrollbar={{ draggable: true, dragSize: 118   }}
                // arrows="true"
                // navigation="true"
                navigation={{
                  nextEl: ".image-swiper-button-next",
                  prevEl: ".image-swiper-button-prev",
                  disabledClass: "swiper-button-disabled"
                }}
                className={`companyReview-sliderBox`}
                spaceBetween={200}
                slidesPerView={1}
                loop="true"
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}

              >
                {review.map((item) =>
                  <SwiperSlide key={item.id}>
                    <div className='companyReview-card'>
                      <div className='d-flex align-items-center mb-4 mb-xl-5'>
                        <div className='me-3 me-lg-4'>
                          <img src={item.img} />
                        </div>
                        <div className='text-start'>
                          <p className='title-30 companyReview-cardName text-black font-weight-700 mb-0'>{item.name}</p>
                          <p className='title-16 companyReview-cardPosition text-gray font-weight-500 mb-md-0 mb-4'>{item.position}</p>
                        </div>
                      </div>
                      <p className='title-22 companyReview-cardText font-weight-500 mb-4 text-start'>{item.text}</p>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
            <div className={`col-lg-2 `}>
              <div className='companyReview-sliderMobBtns d-flex justify-content-around justify-content-md-end' >
              <div className='image-swiper-button-prev d-flex d-md-none' >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.28516 6.41016L12.5883 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.74609 1.11572L12.5903 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.74609 11.7051L12.5903 6.41064" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
                <div className='image-swiper-button-next' >
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.28516 6.41016L12.5883 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.74609 1.11572L12.5903 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.74609 11.7051L12.5903 6.41064" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-md-block" style={{ height: "90px" }}></div>
        <div className="d-blok d-md-none" style={{ height: "60px" }}></div>
        <style jsx scope>
          {`
                .companyReview-sliderBox{
                  padding: 0 100px; 
                }
                  .companyReview .commnHeading{
                    margin-bottom: 70px;
                  }
                  .image-swiper-button-prev svg{
                    transform: rotate(180deg);
                  }
                  .image-swiper-button-prev,
                  .image-swiper-button-next{
                    font-size: 18px;
                    color: #0e2b72;
                    border: 2px solid #0e2b72;
                    width: 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;  
                    margin-bottom: 40px;
                  }
                  .image-swiper-button-next{
                    float: right;
                  }
                  
                  
                  @media (min-width:1600px) {
                    .companyReview-slider {
                      // max-width: 1280px;
                      // margin: auto;
                    }
                  }
                  @media (min-width:1200px) {
                    .container {
                      max-width: 1170px !important;
                    }
                  }
                  @media (min-width:1399px) {
                    .container {
                      max-width: 1280px !important;
                    }
                  }
                  @media (max-width:1650px) {
                     .title64 {
                        font-size: 52px;
                        line-height: 64px;
                      }
                      .homeReview .title-64{
                        font-size: 42px;
                        line-height: 52px;
                      }
                  }
                  @media (max-width:575px) {
                    .companyReview .commnHeading{
                      margin-bottom: 50px;
                    }
                    .homeReview .title-64{
                      font-size: 30px;
                      line-height: 36px;
                    }
                  
                   
                    .companyReview-card{
                      padding: 20px;
                    }
                    .companyReview-sliderMobBtns{
                      margin-top: -70px;
                      position: relative;
                      z-index: 999999999;
                      width: 110px;
                      margin-left: auto;
                      margin-right: auto;
                    }


                    .title-64{
                      font-size: 30px;
                      line-height: 36px;
                  }
                  .title-36{
                    font-size: 26px;
                    line-height: 32px;
                }
                  .title-30{
                      font-size: 22px;
                      line-height: 32px;
                  }
                  .title-24{
                      font-size: 15px;
                      line-height: 22px;
                  }
                  .title-20{
                      font-size: 18px;
                      line-height: 22px;
                      font-weight: 400;
                      
                  }
                  .title-22 {
                    font-size: 18px;
                    line-height: 28px;
                  }
                  .title-16{
                      font-size: 16px;
                      line-height: 24px;
                      
                  }
                  }

                `}
        </style>
      </div>
    </>
  )
}
