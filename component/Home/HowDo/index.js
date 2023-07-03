import React, { useEffect, useRef, useState } from "react";
import { ToggleCard, TinderLikeCard, StackCard } from 'react-stack-cards'
import { Swiper, SwiperSlide } from "swiper/react";
// import Card from "../ThreeD/Card";
// import Carousel from "../ThreeD/Carousel";
import HowDoSlider from '../HowDoSlider'
import "swiper/css";
// import "swiper/css/scrollbar";
// import 'swiper/css/pagination';
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/effect-cards";
import { Navigation, Pagination, EffectCards, Autoplay } from 'swiper';

export default function HowDo() {

  const tinderRef = useRef(null);
  const data = [
    { title: "Choose your policy", direction: "Call or message us if you need help", btnText: 'Next: Digital' },
    { title: "Choose your policy", direction: "Call or message us if you need help", btnText: 'Next: Digital'},
    { title: "Choose your policy", direction: "Call or message us if you need help", btnText: 'Next: Digital' },
  ]
  const onSwipeDown = (e) => {
    console.log("e  eeeeee",e)
    console.log("tinderRef.current",tinderRef)
    if (tinderRef.current) {
      tinderRef.current.swipe();
    }
  }; 
  const getCards = (i) => {
    const first =
      "https://www.worldatlas.com/r/w728-h425-c728x425/upload/46/cb/e1/shutterstock-252338818.jpg";
    const second =
      "https://draxe.com/wp-content/uploads/2018/12/KetoFruitHeader.jpg";
    const third =
      "https://media.mnn.com/assets/images/2017/03/strawberries-basket.jpg.653x0_q80_crop-smart.jpg";
    const fourth =
      "https://cdn.pixabay.com/photo/2017/05/06/21/19/strawberry-2290969_960_720.jpg";
    const arr = []

    let arr1 = []
    console.log(arr1)
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < data.length; j++) {
        // let ti = data[j].btnText;
        let div = card(data[j].title, data[j].direction, data[j].btnText, j);
        arr1 = arr1.concat(div)
      }
    }


    return (
      arr1
    )

  }
  function card(title, direction, btnText, index) {
    return (
      <>
        <div className={`bg-primary howDo-sliderBox @radius-15 position-relative d-flex flex-column justify-content-md-between active`}>
          <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
          <div className="row mb-5">
            <div className="col-md-7">
              <div className="howDo-sliderBoxText text-white">
                <div className="howDo-sliderBox-index d-flex align-items-center justify-content-start title16 mb-4 mb-md-0">{index + 1}</div>
                <div className="title60 howDo-sliderBoxText-title font-secondary font-weight-600">{title}</div>
                <div className="title22 font-weight-400 mt-2 mt-md-0">{direction}</div>
              </div>
            </div>
          </div>
        </div>

      </>
      //   <>
      //  {data.map((item,index) => <div className="bg-primary howDo-sliderBox @radius-15 position-relative d-flex flex-column justify-content-md-between">
      //     <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
      //     <div className="row mb-5">
      //       <div className="col-md-12">
      //         <div className="howDo-sliderBoxText text-white">
      //           <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">02</div>
      //           <div className="title64 font-secondary font-weight-500">{item.title}</div>
      //           <div className="title20 font-weight-500 mt-2 mt-md-0">{item.direction}</div>
      //         </div>
      //       </div>
      //     </div>
      //     <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next'>
      //       <a className='btnCommon ps-0 text-decoration-none '>
      //         <span className="me-2 font-weight-500 d-md-inline "> {item.btnText} </span>
      //         <img src="/icons/arrowRight-white.svg" />
      //       </a>
      //     </div>
      //   </div>)}

      //   </>



    )
  }

  return (
    <>
      <div className="my-0" style={{ margin: "250px 0" }}>
        <div className="howDo d-none d-lg-block container">
          <div className={`row text-center `}>
            <div className={`col-md-12 mx-auto`}>
              <div className='commnHeading'>
                <div className='polyBox border-primary bg-blueLight text-primary title12 text-uppercase font-weight-600 mb-3'>hassle free</div>
                <div className='howDoTitle title-36 font-secondary text-primary font-weight-700'><span className="text-yellow fst-italic">How</span> it Works</div>
                <p className='howDoSubTitle title-22 text-primary font-weight-500 mb-0'>Simple process to buy the most complex business insurance policies -<br/>developed by experts.</p>
              </div>
            </div>
          </div>
          <div className={`row  `}>
            <div className={`@col-md-10 howDoDesktopSlider mx-auto position-relative`}>
              {/* <button onClick={(e) => onSwipeDown(e)}>Swipe Down</button> */}

              <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next'>
                <a className=' text-white d-flex align-items-center title20 font-weight-400 ps-0 text-decoration-none' onClick={(e) => onSwipeDown(e)} >
                  <span className="me-2  d-md-inline me-3">Next</span>
                  <img src="/icons/arrowRight-white.svg" />
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
                <div className='polyBox border-primary bg-blueLight text-primary title12 text-uppercase font-weight-600 mb-3'>hassle free</div>
                <div className='howDoTitle title-36 font-secondary text-primary font-weight-600'><span className="text-yellow fst-italic">How</span> it works</div>
                <p className='howDoSubTitle title-22 text-primary font-weight-500 mb-0'>Simple process to buy the most complex business insurance policies -<br/>developed by experts.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`container howDoSliderBox `}>
          {/* <div className='howDoTitle title36 font-secondary text-primary font-weight-600 text-center bg-blueExtraLight py-5'>This Section is <span className="text-yellow d-block fst-italic">In Progress</span> </div> */}
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
                loop={true}
                modules={[Navigation, Pagination]}
                className="howDo-swiper @px-5"
              >
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">01</div>
                            <div className="title60 font-secondary font-weight-600">Choose your policy</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Call or message us if you need help</div>
                          </div>
                        </div>
                      </div>
                      {/* <button onClick={(e) => onSwipeDown(e)}>Swipe Down</button> */}
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <img src="/icons/arrowRight-white.svg" />
                        </a>
                      </div>
                    </div>

                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">02</div>
                            <div className="title60 font-secondary font-weight-600">Choose your policy</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Call or message us if you need help</div>
                          </div>
                        </div>
                      </div>
                      {/* <button onClick={(e) => onSwipeDown(e)}>Swipe Down</button> */}
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next'>
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <img src="/icons/arrowRight-white.svg" />
                        </a>
                      </div>
                    </div>

                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">03</div>
                            <div className="title60 font-secondary font-weight-600">Choose your policy</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Call or message us if you need help</div>
                          </div>
                        </div>
                      </div>
                      {/* <button onClick={(e) => onSwipeDown(e)}>Swipe Down</button> */}
                      
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <img src="/icons/arrowRight-white.svg" />
                        </a>
                      </div>
                    </div>

                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">03</div>
                            <div className="title60 font-secondary font-weight-600">Choose your policy</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Call or message us if you need help</div>
                          </div>
                        </div>
                      </div>
                      {/* <button onClick={(e) => onSwipeDown(e)}>Swipe Down</button> */}
                      
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <img src="/icons/arrowRight-white.svg" />
                        </a>
                      </div>
                    </div>

                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">03</div>
                            <div className="title60 font-secondary font-weight-600">Choose your policy</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Call or message us if you need help</div>
                          </div>
                        </div>
                      </div>
                      {/* <button onClick={(e) => onSwipeDown(e)}>Swipe Down</button> */}
                      
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <img src="/icons/arrowRight-white.svg" />
                        </a>
                      </div>
                    </div>

                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <div className="bg-primary p-0 howDo-sliderBox howDo-sliderBox-mob @radius-15 position-relative d-flex flex-column justify-content-md-between">
                      <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                      <div className="row mb-5">
                        <div className="col-md-4">
                          <div className="howDo-sliderBoxText text-white">
                            <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">03</div>
                            <div className="title60 font-secondary font-weight-600">Choose your policy</div>
                            <div className="title20 font-weight-500 mt-2 mt-md-0">Call or message us if you need help</div>
                          </div>
                        </div>
                      </div>
                      {/* <button onClick={(e) => onSwipeDown(e)}>Swipe Down</button> */}
                      
                      <div className='d-flex text-white howDo-sliderBox-btn howDoswiper-button-next' >
                        <a className='btnCommon ps-0 text-decoration-none ' >
                          <span className="me-2 font-weight-500 d-none d-md-inline ">  Next: Digital  </span>
                          <img src="/icons/arrowRight-white.svg" />
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
