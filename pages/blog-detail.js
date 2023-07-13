import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import BlogListCard from '../component/BlogListCard'
import ArrowSliderNext from '@/component/Icons/ArrowSliderNext';
import ArrowSliderPrev from '@/component/Icons/ArrowSliderPrev';
import SubscribeArrow from '@/component/Icons/SubscribeArrow';
import { useRouter } from 'next/router';
import { BlogService } from '../services/BlogService';
import ReactAudioPlayer from 'react-audio-player';
import { Link as SocialLink, animateScroll as scroll } from "react-scroll";
import { Button } from 'react-bootstrap';

export default function BlogDetail() {
    const SocialRef = useRef(null);
    const [activeC, setActiveC] = useState("");

    const router = useRouter()
    const [blog, setBlog] = useState();
    const [similarTopic, setSimilarTopic] = useState([]);
    const [referenceShowLimit, setReferenceShowLimit] = useState(2);
    const [audio, setAudio] = useState('')
    console.log(blog)

    let speeck = () => {
        let utterance = new SpeechSynthesisUtterance(`${blog?.title}. ${blog?.textContentOne}. ${blog?.textContentTwo}. ${blog?.textContentThree}. ${blog?.textContentFour}. ${blog?.textContentFive}.`);
        speechSynthesis.speak(utterance);
    }

    let loadData = async (blogId) => {
        let blog = await BlogService.getBlogDetails(blogId)
        setBlog(blog.blogInfo)
        setAudio(blog.blogInfo.audio)
        if (blog.blogInfo.topic) {
            getSimilarTopic(blog.blogInfo.topic)
        }
    }

    let getSimilarTopic = async (topicId) => {
        let topic = await BlogService.getAllBlogByTopic(topicId)
        setSimilarTopic(topic.blogInfo)
    }

    useEffect(() => {
        let blogId = sessionStorage.getItem("blogId")
        if (blogId) {
            loadData(blogId)
        }
    }, [])

    let handleBlogClick = async (blogId) => {
        sessionStorage.setItem("blogId", blogId)
        window.location.reload();
        router.push('/blog-detail')
    }

    const bloglistCard = ([
        { id: "1", label: "Start-ups", title: "Insurable risk for start-ups", dateTime: "FEBRUARY 23, 2023 • 5 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "3", label: "Start-ups", title: "How to get a certificate of insurance", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "Insurance Agent or Broker?", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "1", label: "Start-ups", title: "Insurable risk for start-ups", dateTime: "FEBRUARY 23, 2023 • 5 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
    ])

    useEffect(() => {
        // document.body.classList.add("BlogDetailPageBody")
        document.querySelector(".mainMenu").classList.add("BlogDetailPageBody")
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const SocialM = document.getElementById('SocialMedia');
            if (SocialM.classList.contains('SocialActive')) {
                // Update internal CSS of navbarExample2Ref.current when scrollspyHeading4 is active
                SocialRef.current.classList.add('SocialFixed');
            } else {
                // Reset internal CSS of navbarExample2Ref.current when scrollspyHeading4 is not active
                SocialRef.current.classList.remove('SocialFixed');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup event listener when component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Navbar />
            <div className='blogList@ blogDetail '>
                <div className='bg-yellowLight2 blogListBg'>
                    <div className='container blogDetailHero pb-md-5 pb-4'>
                        <div className='d-none d-md-block' style={{ height: "130px" }}></div>
                        <div className='d-block d-md-none' style={{ height: "64px" }}></div>
                        {/* Start-ups */}
                        {/* Certificate of Insurance for business */}
                        {/* AUGUST 27, 2023 • 4 MIN READ */}
                        <div className='text-center '>
                            <span className='polyBox border-primary d-inline-block bg-blueLight text-primary  title16 font-weight-600 '>{blog?.categoryDetail[0]?.title}</span>
                            <h2 className='title-60 font-weight-600 font-secondary mt-4 px-md-5 mx-md-5'>{blog?.title}</h2>
                            <div topicsiv className='BlogList-cardDate mt-4 mt-md-0 title14 text-yellow3'>{`${blog?.time}, ${blog?.readingTime}`}</div>
                        </div>
                    </div>
                    <div className='container pb-5 mt-2 '>
                        <div className='bg-white@ py-5 blogDetailMediaCards pb-0'>
                            <div className='row text-center text-md-start justify-content-between '>
                                <div className='blogDetailMediaCards-top col col-md-5 mb-md-4 mb-5  text-center text-md-start align-items-center justify-content-md-center d-flex flex-column flex-md-row'>
                                    <Image
                                        // loader={myLoader}
                                        src="/blogBy.png"
                                        alt="Picture of the author"
                                        width={80}
                                        height={80}
                                    />
                                    <div className='mt-2 mt-md-0 ms-md-2 '>
                                        <div className='text-black title12 font-weight-400'>Written by</div>
                                        <div className='text-black title16 font-weight-600 my-1' >{`${blog?.author}`}</div>
                                        <div className='text-black title12 font-weight-500' > {`${blog?.designation}`}</div>
                                    </div>

                                </div>
                                <div className='blogDetailMediaCards-top col col-md-5 mb-md-4 mb-5  text-center text-md-start align-items-center justify-content-md-center d-flex flex-column flex-md-row'>
                                    <Image
                                        // loader={myLoader}
                                        src="/blogBy2.png"
                                        alt="Picture of the author"
                                        width={80}
                                        height={80}
                                    />
                                    <div className='mt-2 mt-md-0 ms-md-2'>
                                        <div className='text-black title12 font-weight-400' >Technically reviewed by</div>
                                        <div className='text-black title16 font-weight-600 my-1' >{`${blog?.reviewer}`}</div>
                                        <div className='text-black title12 font-weight-500' >{` ${blog?.reviewerDesignation}`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white@ py-5 pt-1 blogDetailCards '>
                            <div className='row justify-content-between'>
                                <div className='col-md-5 mb-5 mb-md-0'>
                                    <div className='bg-white blogDetailCard-box p-4'>
                                        <div className='blogDetailCards-title font-weight-600 text-black title12'>Fact-Checked</div>
                                        <div className='blogDetailCards-decrip text-black title12 font-weight-500' >
                                            Business insurance, also known as commercial insurance, focuses on insuring the risks of a business from various perils. The objective of business insurance is to reduce the financial strain on companies when the tangible and intangible assets are at loss or at risk of loss, directly or indirectly.
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-5'>

                                    <div className='bg-white blogDetailCard-box p-4'>
                                        <div className='blogDetailCards-title font-weight-600 text-black title12'>Up-to-date</div>
                                        <div className='blogDetailCards-decrip text-black title12 font-weight-500' >
                                            Business insurance, also known as commercial insurance, focuses on insuring the risks of a business from various perils. The objective of business insurance is to reduce the financial strain on companies when the tangible and intangible assets are at loss or at risk of loss, directly or indirectly.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container audioTracker'>
                    <div className="row">
                        <div className='col-12'>
                            <div className='bg-white audioTracker-box'>
                                {/* <h1 onClick={speeck}>Audio Track</h1> */}
                                <p className='font-weight-600'>Save time and listen to this article</p>
                                <ReactAudioPlayer
                                    src={`${process.env.NEXT_PUBLIC_File_Url}/${audio}`}
                                    autoPlay={false}
                                    controls={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* image 1 */}
                <div className='container mt-0 mt-md-5'>
                    <div className="row">
                        <div className='col-12'>
                            {/* <img src="/blogImg1.png" /> */}
                            <img className="w-100" src={`${process.env.NEXT_PUBLIC_File_Url}/${blog?.imageDocOne}`} />
                        </div>
                    </div>
                </div>

                <div className={`container mt-md-5 mt-4 SocialFixed`} ref={SocialRef} >
                    <SocialLink activeClass="SocialActive" to={"SocialMedia"} spy={true} duration={500} className={`row align-items-center`} id="SocialMedia"  >
                        <div className={`row align-items-center`}  >
                            <div className='col-lg-10'>
                                {/* CK Editor 1 */}
                                <div className='col'>
                                    <div
                                        className='mt-md-4 dangerousHtml'
                                        dangerouslySetInnerHTML={{
                                            __html: blog?.textContentOne,
                                        }}>
                                        {/* <p className='title25'>
                                        Business insurance, also known as commercial insurance, focuses on insuring the risks of a business from various perils. The objective of business insurance is to reduce the financial strain on companies when the tangible and intangible assets are at loss or at risk of loss, directly or indirectly.
                                        The situation could arise when a business falters or allegedly falters on the liabilities from the virtue of simply operating in a dynamic world, full of uncertainties.
                                        Business insurance has its origins in Great Britain, where it was formalized around 17th-century merchants who were transporting and trading goods overseas. Underwriting perils through a central organization and sharing the financial burden through fees (insurance premiums) minimized the risks of sailing; this included merchants' assets as well as their business risks.
                                        These assets and liabilities can vary from company to company and industry to industry. Over the years commercial insurance has become more sophisticated and attuned to the shift with the emerging industries and evolved risks.
                                        Here are the most common types of assets and liabilities business insurance:
                                    </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 d-none@ d-lg-block@ blogSocialSticky' >
                                <div className='blogSocial text-end '>
                                    <p className='title16 text-gray font-weight-600'>Share</p>
                                    <div className='blogSocialIco'><img src='/icons/blogTW.svg' /></div>
                                    <div className='blogSocialIco'><img src='/icons/blogIN.svg' /></div>
                                    <div className='blogSocialIco'><img src='/icons/link.svg' /></div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-end">
                            {/* image 2 */}
                            <div className='col-lg-10'>
                                {/* <div className='blogImg2 position-relative' style={{ background: `url(/blogImg2.png) no-repeat center top/cover` }}> */}
                                <div className='blogImg2 position-relative' style={{ background: `url(${process.env.NEXT_PUBLIC_File_Url}/${blog?.imageDocTwo}) no-repeat center top/cover` }}>
                                    {/* ${process.env.NEXT_PUBLIC_File_Url}/${blog?.imageDocTwo} */}
                                    {/* <div className='blogImg2-img' ></div> */}
                                    <div className='blogImg2-text'>
                                        {/* <div className='title48 font-weight-600 font-secondary'>Errors & Omissions</div> */}
                                        <div className='title48 font-weight-600 font-secondary'>{blog?.secondImgTitle}</div>
                                        {/* <p className='title20 pe-lg-5 mt-2'>Protect your business from potential errors and omissions.Get a quote, get insured and get going - all within minutes!</p> */}
                                        <p className='title20 pe-lg-5 mt-2'>{blog?.secondImgContent}</p>
                                        <div className={`d-flex`}>
                                            <a href={blog?.secondImgBtnLink} className='btnCommon getFreeBtn text-primary yellowBtn text-decoration-none'>
                                                {/* <span> Get Free Recommendations </span> */}
                                                <span> {blog?.secondImgBtnTitle} </span>
                                                <img className='ms-3' src='/icons/arrowRight.svg' />
                                            </a>

                                        </div>

                                    </div>
                                </div>

                                {/* CK Editor 2 */}
                                <div className=''>
                                    <div className='mt-5 dangerousHtml' dangerouslySetInnerHTML={{ __html: blog?.textContentTwo, }}>
                                        {/* <p className='title25'>
                                        Business insurance, also known as commercial insurance, focuses on insuring the risks of a business from various perils. The objective of business insurance is to reduce the financial strain on companies when the tangible and intangible assets are at loss or at risk of loss, directly or indirectly.
                                        The situation could arise when a business falters or allegedly falters on the liabilities from the virtue of simply operating in a dynamic world, full of uncertainties.
                                        Business insurance has its origins in Great Britain, where it was formalized around 17th-century merchants who were transporting and trading goods overseas. Underwriting perils through a central organization and sharing the financial burden through fees (insurance premiums) minimized the risks of sailing; this included merchants' assets as well as their business risks.
                                        These assets and liabilities can vary from company to company and industry to industry. Over the years commercial insurance has become more sophisticated and attuned to the shift with the emerging industries and evolved risks.
                                        Here are the most common types of assets and liabilities business insurance:
                                    </p> */}
                                    </div>
                                </div>

                            </div>


                            {/* image 3 */}
                            <div className='col-12 mt-5'>
                                {/* <img src="/blogImg3.png" /> */}
                                <img className='w-100' src={`${process.env.NEXT_PUBLIC_File_Url}/${blog?.imageDocThree}`} />
                            </div>

                            {/* CK Editor 3 start*/}
                            <div className='col-md-10'>
                                <div className='mt-5 dangerousHtml' dangerouslySetInnerHTML={{ __html: blog?.textContentThree, }}>
                                    {/* <p className='title25'>
                                    This is just scratching the surface really; as a company grows, all founders and the leadership team would agree that the systems get complex making businesses susceptible to loopholes & errors. Business insurance acknowledges the need to keep systems watertight to keep the company stay afloat.
                                </p>
                                <p className='title25'>
                                    This is just scratching the surface really; as a company grows, all founders and the leadership team would agree that the systems get complex making businesses susceptible to loopholes & errors. Business insurance acknowledges the need to keep systems watertight to keep the company stay afloat.
                                </p> */}
                                </div>
                            </div>
                            {/* CK Editor 3 end*/}
                            <div className='col-12 blogDetailSubcribe'>
                                <div className='mt-5 bg-primary font-secondary font-weight-600 p-md-4 p-5 text-white radius-10'>
                                    <p className='blogDetailSubcribe-title title32 m-0'>
                                        Everything you should know about business insurance
                                    </p>
                                    <p className='blogDetailSubcribe-descrp title20 w-75 w-xs-100 mt-md-0  font-primary font-weight-400 mt-3'>
                                        Sign up to receive daily email sleep tips and challenges, as well as our comprehensive Better Sleep Guidebook.eeeee
                                    </p>
                                    <div className="d-flex flex-md-row flex-column g-3 align-items-center ff">
                                        <input type="email" placeholder='Enter your email' className="form-control text-white bg-transparent radius-0 dddd" style={{ height: "40px" }} />
                                        <Link className='wwww btnCommon bg-white text-primary text-decoration-none border-primary border1 ms-md-3 px-4 px-md-4 ' href="" style={{ height: "40px" }}>
                                            <span className='me-2'>Subscribe</span>
                                            <SubscribeArrow iconColor="primary stroke" width="20px" height="18px" />
                                        </Link>
                                    </div>
                                    <div className="blogDetailSubcribe-policy text-white title12 font-weight-400 mt-md-3 mt-5 text-md-start text-center">
                                        Your <Link className='text-white' href="">privacy</Link> is important to us.
                                    </div>

                                </div>
                            </div>


                            {/* CK Editor 4 start*/}
                            <div className='col-md-10'>
                                <div className='mt-5 dangerousHtml' dangerouslySetInnerHTML={{ __html: blog?.textContentFour, }}>
                                    {/* <p className='title25'>
                                    This is just scratching the surface really; as a company grows, all founders and the leadership team would agree that the systems get complex making businesses susceptible to loopholes & errors. Business insurance acknowledges the need to keep systems watertight to keep the company stay afloat.
                                </p> */}
                                </div>
                            </div>
                            {/* CK Editor 4 end*/}

                            {/* Quote start*/}
                            <div className='col-md-10 mt-5 mt-md-0'>
                                <div className='blogQuote mt-5 p-md-5 p-4 pt-5  bg-grayExtraLight radius-10 position-relative'>
                                    <img className='position-absolute' src='/icons/quote.svg' />
                                    {/* <p className='title25 m-0'>For a business leader, insuring their business is ensuring the success of their business in good times and bad times.</p> */}
                                    <p className='title25 m-0'>{blog?.quoteText}</p>
                                </div>
                            </div>
                            {/* Quote end*/}

                            {/* CK Editor 5 start*/}
                            <div className='col-md-10 '>
                                <div className='mt-5 dangerousHtml' dangerouslySetInnerHTML={{ __html: blog?.textContentFive, }}>
                                    {/* <p className='title25'>
                                    Business insurance, also known as commercial insurance, focuses on insuring the risks of a business from various perils. The objective of business insurance is to reduce the financial strain on companies when the tangible and intangible assets are at loss or at risk of loss, directly or indirectly.
                                </p>
                                <p className='title25'>
                                    The situation could arise when a business falters or allegedly falters on the liabilities from the virtue of simply operating in a dynamic world, full of uncertainties.
                                </p> */}
                                </div>
                            </div>
                            {/* CK Editor 5 end*/}
                        </div>
                    </SocialLink>
                </div>
            </div>

            <div className='container mt-5'>
                {/* helpful start*/}
                <div className='blogHelpful my-5 p-md-5 px-5 py-4 bg-yellowLight text-center text-md-start'>
                    <div className='row align-items-center flex-column flex-md-row  justify-content-center'>
                        <div className='col'>
                            <p className='title25 font-weight-600 m-md-0 mt-2'>Was this article helpful?</p>
                        </div>
                        <div className='col-auto mb-md-0 mb-3'>
                            <div className='blogHelpful-btns d-flex'>
                                <Link className='btnCommon text-decoration-none text-primary border-primary border1 me-3' href=""> <img className='me-2' src='/icons/like.svg' /> Yes</Link>
                                <Link className='btnCommon text-decoration-none text-primary border-primary border1' href=""> <img className='me-2' src='/icons/dislike.svg' /> No</Link>
                            </div>
                        </div>

                    </div>
                </div>
                {/* helpful end*/}
                <div className='row'>
                    <div className='col-12'>
                        <h5 className='title25 font-weight-600'>{`References  (${blog?.referenceDetail?.length ? blog?.referenceDetail?.length : 0} Sources)`}</h5>
                    </div>
                    {
                        blog?.referenceDetail?.map((reference, index) => (
                            index <= referenceShowLimit && (
                                <div className='col-12 mb-md-5 mb-4 '>
                                    <p className='title25 m-0'>
                                        {reference?.textContent}
                                        <a href='reference?.link' target='_blank' className='text-yellow d-block'>{reference?.link}</a>
                                    </p>
                                </div>
                            )
                        ))
                    }
                    {/* <div className='col-12 mb-md-5 mb-4 '>
                        <p className='title25 m-0'>
                            The situation could arise when a business falters or allegedly falters on the liabilities from the virtue of simply operating in a dynamic world, full of uncertainties.
                            <a href='' className='text-yellow d-block'>The situation could arise when a business</a>
                        </p>
                    </div>
                    <div className='col-12 mb-md-5 mb-4 '>
                        <p className='title25 m-0'>
                            The situation could arise when a business falters or allegedly falters on the liabilities from the virtue of simply operating in a dynamic world, full of uncertainties.
                            <a href='' className='text-yellow d-block'>The situation could arise when a business</a>
                        </p>
                    </div> */}
                    {
                        ((blog?.referenceDetail?.length > 3) && (referenceShowLimit !== blog?.referenceDetail?.length)) && (
                            <div className='col-12 mb-md-5 mb-4 '>
                                <p className='title25 m-0'>
                                    <a
                                        href=''
                                        className='text-primary d-block font-weight-600 text-decoration-none'
                                        onClick={() => setReferenceShowLimit(blog?.referenceDetail?.length)}
                                    >See More</a>
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='container RelatedTopics mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h5 className='title25 font-weight-600 ms-md-5'>Related topics</h5>
                    </div>
                    <div className='col-12'>
                        <div className='row align-items-center'>
                            <div className='col-auto d-none d-md-block'>
                                <div className='blogDetail-swiper-button-prev '>
                                    <ArrowSliderPrev
                                        width="30px"
                                        height="30px"
                                    // iconColor="primary"
                                    />
                                </div>
                            </div>
                            <div className='col-md-10'>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                    // arrows={true}
                                    navigation={{
                                        nextEl: ".blogDetail-swiper-button-next",
                                        prevEl: ".blogDetail-swiper-button-prev",
                                        disabledClass: "swiper-button-disabled"
                                    }}
                                    className={`py-5 BlogDetail-card`}
                                    spaceBetween={50}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false
                                    }}
                                    breakpoints={{
                                        1399: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        0: {
                                            slidesPerView: 1,

                                        },

                                    }}
                                >
                                    {/* {bloglistCard.map((item) =>
                                        <SwiperSlide>
                                            <BlogListCard
                                                linking=""
                                                label={item.label}
                                                title={item.title}
                                                dateTime={item.dateTime}
                                                blogByName={item.blogByName}
                                                blogByPosition={item.blogByPosition}
                                            />
                                        </SwiperSlide>
                                    )} */}
                                    {similarTopic.map((item) =>
                                        <SwiperSlide>
                                            <BlogListCard
                                                linking=""
                                                label={item.categoryDetail[0]?.title}
                                                title={item.title}
                                                dateTime={`${item?.time}, ${item.readingTime}`}
                                                blogByName={item.author}
                                                blogByPosition={item.designation}
                                                handleChildClick={() => handleBlogClick(item._id)}
                                            />
                                        </SwiperSlide>
                                    )}
                                </Swiper>

                            </div>
                            <div className='col-auto d-none d-md-block'>
                                <div className='blogDetail-swiper-button-next'>
                                    <ArrowSliderNext
                                        width="30px"
                                        height="30px"
                                    // iconColor="primary"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container  mt-5'>
                <div className='row blogDetailSubcribe-bottom mt-md-5'>
                    <div className='col-12'>
                        <div className="d-flex g-3 align-items-center bg-yellow radius-10 p-5">
                            <div className="row align-items-center">
                                <div className='col-md-6'>
                                    <div className='title25 font-weight-600 text-white text-center text-md-start'>
                                        If you're ready for more, sign up to receive our email newsletter!
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='d-flex'>
                                        <div className="input-group p-md-3 mt-md-0 mt-5 radius-0 ">

                                            <input type="text" className="form-control bg-transparent text-white border-white radius-0 border2 ps-3" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" style={{ height: "50px", borderRight: "0" }} />
                                            <button className=" bg-transparent text-white border-white border1 title20 pe-3 d-flex align-items-center border2" type="button" id="button-addon2" style={{ height: "50px", borderLeft: "0" }}>
                                                Subscribe
                                                <img className="ms-2" src="/icons/subscribeArrow.svg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <style jsx scope>
                {`
                   .SocialActive{
                       transition: 1s;
                        
                   }
                    .SocialFixed .blogSocialSticky{
                        top: 10%;
                        position: fixed;
                        right: 0;
                        transition: 1s;
                    }
                    .audioTracker-box{
                        padding: 32px 40px;
                        box-shadow: 0 20px 20px 0 rgba(0,0,0,0.05);
                    }
                    

                    .container{
                        max-width: 1100px
                    }
                    .RelatedTopics.container{
                        max-width: 1180px

                    }
                   
                    .blogDetailCards{
                        margin-bottom: 65px;
                    }

                    .title-64 {
                        font-size: 64px;
                        line-height: 78px;
                    }
                    @media only screen and (max-width: 575px) {
                        .blogDetailCards{
                            margin-bottom: 50px;
                        }
                        .blogDetailCards .blogDetailCards-title{
                            font-size: 14px;
                            margin-bottom: 3px;                                
                        }                        
                        .container{
                            padding-left: 18px;
                            padding-right: 18px; 
                        }
                        .blogDetail .title25{
                            font-size: 20px;
                            line-height: 28px;
                        }
                       
                       .blogDetail .blogDetailHero .title-64,
                       .blogDetail .blogDetailHero .title-60 {
                            font-size: 30px;
                            line-height: 36px;
                            color: var(--vt-c-blue);
                        }
                    } 
                `}
            </style>
        </>
    )
}
