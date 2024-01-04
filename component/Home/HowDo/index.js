import React, { useRef } from "react";
import Image from 'next/image'
import { TinderLikeCard } from 'react-stack-cards'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from 'swiper';

export default function HowDo() {
  const tinderRef = useRef(null);
  const data = [
    { title: "Select from the products", description: "Choose the policy for your business requirements.", imgSrc: "/howWorks/howWorkImg1.webp", btnText: 'Next: Digital' },
    { title: "Tell us about the business.", description: "Answer a few simple questions about your business ", imgSrc: "/howWorks/howWorkImg2.webp", btnText: 'Next: Digital' },
    { title: "Compare quotes", description: "Get instant quotes from top insurance companies", imgSrc: "/howWorks/howWorkImg3.webp", btnText: 'Next: Digital' },
    { title: "Talk to an expert", description: "Consult with our experts and make payment", imgSrc: "/howWorks/howWorkImg4.webp", btnText: 'Next: Digital' },
    { title: "All-in-one digital platform", description: "Manage everything on a single dashboard", imgSrc: "/howWorks/howWorkImg5.webp", btnText: 'Next: Digital' },
  ]
  const onSwipeDown = (e) => {
    console.log("e  eeeeee", e)
    console.log("tinderRef.current", tinderRef)
    if (tinderRef.current) {
      tinderRef.current.swipe();
    }
  };
  const getCards = (i) => {
    const arr = []
    let arr1 = []
    console.log(arr1)
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < data.length; j++) {
        // let ti = data[j].btnText;
        let div = card(data[j].title, data[j].description, data[j].imgSrc, data[j].btnText, j);
        arr1 = arr1.concat(div)
      }
    }
    return (
      arr1
    )
  }
  function card(title, description, imgSrc, btnText, index) {
    return (
      <>
        <div className={`bg-primary howDo-sliderBox @radius-15 position-relative d-flex flex-column justify-content-md-between active`}>
          <Image className="howDo-sliderBoxImg position-absolute" src={imgSrc} width={549} height={616} alt={title} loading="lazy" />
          <div className="row mb-5">
            <div className="col-md-7">
              <div className="howDo-sliderBoxText text-white">
                <div className="howDo-sliderBox-index d-flex align-items-center justify-content-start title16 mb-4 mb-md-0">{index + 1}</div>
                <div className="title60 howDo-sliderBoxText-title font-secondary font-weight-600">{title}</div>
                <div className="title22 font-weight-400 mt-2 mt-md-0">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="my-0" style={{ margin: "250px 0" }}>
        <div className="howDo d-none d-lg-block container">
          <div className={`row text-center `}>
            <div className={`col-md-12 mx-auto`}>
              <div className='commnHeading'>
                <div className='howDoTitle title-36 font-secondary text-primary font-weight-700'><span className="text-yellow fst-italic">How</span> it works</div>
                <p className='howDoSubTitle title-22 text-primary font-weight-500 mb-0'>Simple 5-step process to get your comprehensive business insurance</p>
              </div>
            </div>
          </div>
          <div className={`row  `}>
            <div className={`@col-md-10 howDoDesktopSlider mx-auto position-relative`}>
              <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next'>
                <a className=' text-white d-flex align-items-center title20 font-weight-400 ps-0 text-decoration-none' onClick={(e) => onSwipeDown(e)} >
                  <span className="me-2  d-md-inline me-3">Next</span>
                  <Image src="/icons/arrowRight-white.svg" width={37} height={18} alt="Arrow Right" loading="lazy" />
                </a>
              </div>
              <TinderLikeCard
                images={getCards()}
                width="1100"
                height="800"
                direction="swipeDown"
                duration={400}
                ref={tinderRef}
                className="tinder"
              >
                {getCards().map(i => <div key={i}>{i}</div>)}
              </TinderLikeCard>
            </div>
          </div>
        </div>
      </div>
      {/* ========= Mobile version ======== */}
      <div className="howDo d-lg-none d-block">
        <div className={`container `}>
          <div className={`row text-center `}>
            <div className={`col-md-11 mx-auto`}>
              <div className='commnHeading'>
                <div className='howDoTitle title-36 font-secondary text-primary font-weight-600'><span className="text-yellow fst-italic">How</span> it works</div>
                <p className='howDoSubTitle title-22 text-primary font-weight-500 mb-0'>Simple process to buy the most complex business insurance policies -<br />developed by experts.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`container howDoSliderBox `}>
          <div className="row howDoSliderBox-row">
            <div className="howDo-slider px-0 mt-0 col-12 mx-auto">
              <div className="my-5">
                {/* <HowDoSlider /> */}
              </div>
              <Swiper
                navigation={{
                  nextEl: ".howDoswiper-button-next",
                  prevEl: ".howDoswiper-button-prev",
                  disabledClass: "swiper-button-disabled"
                }}
                slidesPerView={1.1}
                spaceBetween={10}
                loop="false"
                modules={[Navigation, Pagination]}
                className="howDo-swiper @px-5"
              >
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <Image className="howDo-sliderBoxImg position-absolute" src="/howWorks/howWorkMblImg1.webp" width={301} height={278} alt="Select from the products" loading="lazy" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">01</div>
                            <div className="title60 font-secondary font-weight-600">Select from the products</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Choose the policy for your business requirements.</div>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <Image src="/icons/arrowRight-white.svg" width={37} height={18} alt="Arrow Right" loading="lazy" />
                        </a>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <Image className="howDo-sliderBoxImg position-absolute" src="/howWorks/howWorkMblImg2.webp" width={301} height={278} alt="Tell us about the business." loading="lazy" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">02</div>
                            <div className="title60 font-secondary font-weight-600">Tell us about the business.</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Answer a few simple questions about your business</div>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next'>
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <Image src="/icons/arrowRight-white.svg" width={37} height={18} alt="Arrow Right" loading="lazy" />
                        </a>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <Image className="howDo-sliderBoxImg position-absolute" src="/howWorks/howWorkMblImg3.webp" width={301} height={278} alt="Compare quotes" loading="lazy" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">03</div>
                            <div className="title60 font-secondary font-weight-600">Compare quotes</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Get instant quotes from top insurance companies</div>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <Image src="/icons/arrowRight-white.svg" width={37} height={18} alt="Arrow Right" loading="lazy" />
                        </a>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <Image className="howDo-sliderBoxImg position-absolute" src="/howWorks/howWorkMblImg4.webp" width={301} height={278} alt="Talk to an expert" loading="lazy" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">04</div>
                            <div className="title60 font-secondary font-weight-600">Talk to an expert</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Consult with our experts and make payment</div>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <Image src="/icons/arrowRight-white.svg" width={37} height={18} alt="Arrow Right" loading="lazy" />
                        </a>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <Image className="howDo-sliderBoxImg position-absolute" src="/howWorks/howWorkMblImg5.webp" width={301} height={278} alt="All-in-one digital platform" loading="lazy" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">05</div>
                            <div className="title60 font-secondary font-weight-600">All-in-one digital platform</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Manage everything on a single dashboard
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <Image src="/icons/arrowRight-white.svg" width={37} height={18} alt="Arrow Right" loading="lazy" />
                        </a>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="d-none d-md-block" style={{ height: "400px" }}></div>
          <div className="d-blok d-md-none" style={{ height: "0" }}></div>
          <style jsx scope>
            {`
             .howDo-slider{
                  max-width: 1286px;
              }
              .howDo .commnHeading p{
                  max-width: 900px;
                  margin: auto;
              }
              .howDoTitle{
                margin-bottom: 16px;
              }
              .howDo .howDo-swiper{
                height: 702px;
              }
              .howDo-slider{
                margin-top: 70px;
              }
              .howDo-sliderBox{
                 min-height: 702px;
                 padding: 140px 100px;
                 border: 1px solid #ddd;
              }
              @media (max-width: 575px) {
                .howDo {
                  padding-bottom: 60px;
                }
                .title-36 {
                  font-size: 32px;
                  line-height: 36px;
                }
                .title-22 {
                  font-size: 18px;
                  line-height: 27px;
                }
              }
          `}
          </style>
        </div>
      </div>
    </>
  );
}
