import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/pagination';
import "swiper/css/navigation";


export default function Companies() {
  const review = ([
    { id: "s1", text: `"Hamri dost ki truck ko aag lag gayi toh hum bahaut ghabra gaye. Magar Tejas aur BhimaKavach ke log humko kuch mobile mein click karwaya, abh hamko paisa nehi dena parega agar humra truck ko aaj lagi. Ab hamri paisa sirf  bidi pe jate hai. Hum bahaut khus hai"`, name: "Rishabh Bhaumik", position: "Truck Driver, Kishanganj", img: "review.svg" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Rishabh Bhaumik", position: "Truck Driver, Kishanganj", img: "review.svg" },
    { id: "s1", text: `"Hamri dost ki truck ko aag lag gayi toh hum bahaut ghabra gaye. Magar Tejas aur BhimaKavach ke log humko kuch mobile mein click karwaya, abh hamko paisa nehi dena parega agar humra truck ko aaj lagi. Ab hamri paisa sirf  bidi pe jate hai. Hum bahaut khus hai"`, name: "Rishabh Bhaumik", position: "Truck Driver, Kishanganj", img: "review.svg" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Rishabh Bhaumik", position: "Truck Driver, Kishanganj", img: "review.svg" },
    { id: "s1", text: `"Hamri dost ki truck ko aag lag gayi toh hum bahaut ghabra gaye. Magar Tejas aur BhimaKavach ke log humko kuch mobile mein click karwaya, abh hamko paisa nehi dena parega agar humra truck ko aaj lagi. Ab hamri paisa sirf  bidi pe jate hai. Hum bahaut khus hai"`, name: "Rishabh Bhaumik", position: "Truck Driver, Kishanganj", img: "review.svg" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Rishabh Bhaumik", position: "Truck Driver, Kishanganj", img: "review.svg" },
    { id: "s1", text: `"Hamri dost ki truck ko aag lag gayi toh hum bahaut ghabra gaye. Magar Tejas aur BhimaKavach ke log humko kuch mobile mein click karwaya, abh hamko paisa nehi dena parega agar humra truck ko aaj lagi. Ab hamri paisa sirf  bidi pe jate hai. Hum bahaut khus hai"`, name: "Rishabh Bhaumik", position: "Truck Driver, Kishanganj", img: "review.svg" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Rishabh Bhaumik", position: "Truck Driver, Kishanganj", img: "review.svg" },

  ])
  // const reviewImg = ([
  //   { id: "s1", img: "/backBest1.png" },

  // ])

  return (
    <>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
   
      <div className='companyReview'>
        <div className='container'>
          <div className={`row text-center`}>
            <div className={`col-md-9 mx-auto`}>
              <div className='commnHeading'>
                <div className='title64 font-secondary mb-4 text-primary font-weight-600'>Trusted by the Most Innovative Companies in India</div>
                {/* <div className=' text-primary font-weight-600 title16' >Our customers trust us.</div> */}
              </div>
            </div>
          </div>

          <div className={`row companyReview-slider align-items-center`}>
            <div className={`col-lg-2`}>
              <div className='image-swiper-button-prev' >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.28516 6.41016L12.5883 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.74609 1.11572L12.5903 6.41016" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.74609 11.7051L12.5903 6.41064" stroke="#0E2B72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
            </div>
            <div className={`col-lg-8`}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}                
                scrollbar={{ draggable: true, dragSize: 118   }}
                // arrows={true}
                // navigation={true}
                navigation={{
                  nextEl: ".image-swiper-button-next",
                  prevEl: ".image-swiper-button-prev",
                  disabledClass: "swiper-button-disabled"
                }}
                className={`companyReview-sliderBox`}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}

              >
                {review.map((item) =>
                  <SwiperSlide>
                    <div className='companyReview-card'>
                      <div className='d-flex align-items-center mb-5'>
                        <div className='me-4'>
                          <img src={item.img} />
                        </div>
                        <div className='text-start'>
                          <p className='title36 companyReview-cardName text-black font-weight-600 mb-0'>{item.name}</p>
                          <p className='title16 companyReview-cardPosition text-gray font-weight-500 mb-md-0 mb-4'>{item.position}</p>
                        </div>
                      </div>
                      <p className='title24 companyReview-cardText font-weight-500 mb-4 text-start'>{item.text}</p>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
            <div className={`col-lg-2`}>
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

        <div className="d-none d-md-block" style={{ height: "250px" }}></div>
        <div className="d-blok d-md-none" style={{ height: "80px" }}></div>
        <style jsx scope>
          {`
                
                  .companyReview .commnHeading{
                    margin-bottom: 90px;
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
                      max-width: 1280px;
                      margin: auto;
                    }
                  }

                `}
        </style>
      </div>
    </>
  )
}
