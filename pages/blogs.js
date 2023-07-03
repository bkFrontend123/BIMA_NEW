import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import Search from '../component/Icons/Search'
import BlogListCard from '../component/BlogListCard'
import ReactPlayer from 'react-player';
import ArrowSliderNext from '@/component/Icons/ArrowSliderNext';
import ArrowSliderPrev from '@/component/Icons/ArrowSliderPrev';
import Link from 'next/link';
import { BlogService } from '../services/BlogService'
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

export default function blogs() {

    const [blogCategories, setBlogCategories] = useState([])
    const [blogList, setBlogList] = useState([])
    const [searchText, setSearchText] = useState("")
    const router = useRouter()

    const bloglistCategory = ([
        { id: "1", title: "Start-ups" },
        { id: "1", title: "Finance" },
        { id: "1", title: "Technology" },
        { id: "1", title: "Insurance" },
        { id: "1", title: "Saas" },
        { id: "1", title: "Finance" },
        { id: "1", title: "Technology" },
        { id: "1", title: "Start-ups" },
        { id: "1", title: "Finance" },
        { id: "1", title: "Technology" },
        { id: "1", title: "Insurance" },
        { id: "1", title: "Saas" },
        { id: "1", title: "Finance" },
        { id: "1", title: "Technology" },
        { id: "1", title: "Start-ups" },
        { id: "1", title: "Finance" },
        { id: "1", title: "Technology" },
        { id: "1", title: "Insurance" },
        { id: "1", title: "Saas" },
        { id: "1", title: "Finance" },
        { id: "1", title: "Technology" },
        { id: "1", title: "Start-ups" },
        { id: "1", title: "Finance" },
        { id: "1", title: "Technology" },
        { id: "1", title: "Insurance" },
        { id: "1", title: "Saas" },
        { id: "1", title: "Finance" },
        { id: "1", title: "Technology" },
    ])
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
        { id: "1", label: "Start-ups", title: "Insurable risk for start-ups", dateTime: "FEBRUARY 23, 2023 • 5 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "3", label: "Start-ups", title: "How to get a certificate of insurance", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "Insurance Agent or Broker?", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "1", label: "Start-ups", title: "Insurable risk for start-ups", dateTime: "FEBRUARY 23, 2023 • 5 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "1", label: "Start-ups", title: "Insurable risk for start-ups", dateTime: "FEBRUARY 23, 2023 • 5 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "3", label: "Start-ups", title: "How to get a certificate of insurance", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "Insurance Agent or Broker?", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "1", label: "Start-ups", title: "Insurable risk for start-ups", dateTime: "FEBRUARY 23, 2023 • 5 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
        { id: "2", label: "Finance", title: "How to prevent DDoS Attacks", dateTime: "FEBRUARY 24, 2023 • 3 MINS READ", blogByName: "by Shruti Vishnoi", blogByPosition: "Customer Success Head" },
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

    //pagination
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogList.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogList?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogList?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, blogList]);
    //end of pagination

    let loadData = async () => {
        const _categories = await BlogService.getAllCategories();
        setBlogCategories(_categories?.blogCategory)
        const _blogs = await BlogService.getAllBlog();
        setBlogList(_blogs?.blogInfo)
    }

    let search = async () => {
        if (searchText) {
            const blog = await BlogService.searchBlog(searchText);
            setBlogList(blog.blogInfo)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        search();
    }, [searchText])

    let handleClick = async (categoryId) => {
        if (categoryId) {
            const _blogs = await BlogService.getAllBlogByCategory(categoryId)
            setBlogList(_blogs.blogInfo)
        }
    }

    let handleBlogClick = async (blogId) => {
        sessionStorage.setItem("blogId", blogId)
        router.push('/blog-detail')
    }

    return (
        <>
            <Navbar />
            <div className='blogList '>
                <div className='bg-yellowLight2 blogListBg'>
                    <div className=' pb-5'>
                        <div className='container '>
                            <div className='blogListHero  text-md-center d-flex justify-content-center flex-column'>
                                <h1 className='polyBox border-primary bg-blueLight text-primary mx-md-auto title16 font-weight-600 mb-4' style={{ maxWidth: "120px" }}>The blog </h1>

                                <h2 className='title64 font-weight-600 font-secondary'>Writings from our team</h2>
                                <h3 className='title20'>The latest industry news, interviews, technologies, and resources.</h3>
                            </div>
                            <div className='divider d-none d-md-block w-100 bg-grayLight opacity-25'></div>
                            <div className='divider d-block d-md-none w-100 bg-grayLight opacity-50'></div>
                        </div>
                        <div className='container pe-0'>
                            <div className='row py-md-5 py-3 pe-md-5 me-0'>
                                <div className='col-md-12'>
                                    <h4 className='title16 px-md-5 pe-md-0 pe-4 font-secondary font-weight-600 mb-lg-4 mt-2 mt-md-0  '>Choose the news from different genres</h4>
                                </div>
                                <div className='col-md-12'>
                                    <div className='bloglistCategory mb-3'>
                                        <div className='row align-items-center'>
                                            <div className='col-lg-8 pe-0 pe-lg-5'>
                                                <div className='px-md-5 pe-0 position-relative d-flex align-items-center'>
                                                    <div className='blog-swiper-button-next'>
                                                        <ArrowSliderNext
                                                            width="25px"
                                                            height="25px"
                                                        // iconColor="primary"
                                                        />
                                                    </div>
                                                    <div className='blog-swiper-button-prev'>
                                                        <ArrowSliderPrev
                                                            width="25px"
                                                            height="25px"
                                                        // iconColor="primary"
                                                        />
                                                    </div>
                                                    <Swiper
                                                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                                        // arrows={true}
                                                        navigation={{
                                                            nextEl: ".blog-swiper-button-next",
                                                            prevEl: ".blog-swiper-button-prev",
                                                            disabledClass: "swiper-button-disabled"
                                                        }}
                                                        // infinite={true}
                                                        // loop={true}
                                                        className={`blogListNews`}
                                                        // spaceBetween={25}
                                                        loop={true}
                                                        speed={1000}
                                                        // autoplay={{
                                                        //     delay: 1000,
                                                        //     disableOnInteraction: false
                                                        // }}
                                                        breakpoints={{
                                                            1399: {
                                                                slidesPerView: 5,
                                                                spaceBetween: 25
                                                            },
                                                            1200: {
                                                                slidesPerView: 5,
                                                                // centeredSlides: true,
                                                                spaceBetween: 25
                                                            },
                                                            992: {
                                                                slidesPerView: 3,
                                                            },
                                                            0: {
                                                                slidesPerView: 3,
                                                                centeredSlides: true,
                                                                spaceBetween: 15,

                                                            },

                                                        }}
                                                    >
                                                        {blogCategories.map((item) =>
                                                            <SwiperSlide key={item._id}>
                                                                <div className='polyBox border-primary bg-blueLight text-primary title16 font-weight-600 ' key={item._id} onClick={() => handleClick(item._id)}>{item.title}</div>
                                                            </SwiperSlide>
                                                        )}
                                                    </Swiper>
                                                </div>
                                            </div>
                                            <div className='col-lg-4 mt-4 mt-md-0'>
                                                <form>
                                                    <div className="form-group  bloglistCategorySearch px-md-0">
                                                        <div className="input-group border-primary">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text pe-0 ps-4 h-100 bg-transparent border-0">
                                                                    <Search iconColor="primary" width="12" height="12" />
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control bg-transparent h-100 radius-0 border-0"
                                                                placeholder="Search"
                                                                value={searchText}
                                                                onChange={(e) => setSearchText(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container '>
                            <div className='divider d-none d-md-block w-100 bg-grayLight opacity-25'></div>
                            <div className='divider d-block d-md-none w-100 bg-grayLight opacity-50'></div>
                            <div className='d-none d-md-block' style={{ height: "150px" }} ></div>
                            {/* <div className='d-flex align-items-center justify-content-between bg-yellowLight d-md-none my-4 mx-4 py-3 px-4'>
                            <p className='m-0 fon-weight-600 font-secondary' style={{ fontSize: "10px" }}>Liability Insurance</p>
                            <Link className='text-yellow text-decoration-none' href="" style={{ fontSize: "10px" }}>Explore more +</Link>
                        </div> */}
                        </div>
                    </div>
                </div>



                <div className='container blogListCard-container'>
                    <div className='row pb-md-5 gx-5 '>
                        {/* {currentItems?.map((item) =>
                            <div className='col-md-4 BlogListCard-col'>
                                <BlogListCard
                                    linking=""
                                    label={item.label}
                                    title={item.title}
                                    dateTime={item.dateTime}
                                    blogByName={item.blogByName}
                                    blogByPosition={item.blogByPosition}
                                />
                            </div>
                        )} */}
                        {currentItems?.map((item) =>
                            <div className='col-md-4 BlogListCard-col' key={item._id}>
                                <BlogListCard
                                    linking=""
                                    label={item.categoryDetail[0]?.title}
                                    title={item.title}
                                    dateTime={`${item?.time}, ${item.readingTime}`}
                                    blogByName={item.author}
                                    blogByPosition={item.designation}
                                    handleChildClick={() => handleBlogClick(item._id)}
                                />
                            </div>
                        )}
                    </div>
                    <div className="pagination-list blogPagination mb-5 pb-md-5">
                        <ReactPaginate
                            previousLabel={"Prev"}
                            nextLabel={"Next"}
                            breakLabel={". . ."}
                            containerClassName="pagination"
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName="active"
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
                <div className='container blogSubscribe text-center d-none'>

                    <div className='row'>
                        <div className='col-11 mx-auto px-0'>
                            <div className='bg-yellow p-4 py-5 mb-5'>
                                <h5 className='title25 font-primary font-weight-600 mb-4'>If you're ready for more, sign up to receive our email newsletter!</h5>
                                <form>
                                    <div className="form-group ">
                                        <input type="email" className="form-control bg-transparent" placeholder="Enter your email" />
                                    </div>
                                    <button className='btnCommon bg-primary text-white mt-4 mx-auto px-5 '>Subscribe <img className='ms-3' src='/icons/subscribeArrow.svg' /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx scoped>
                    {`
                        .container{
                            max-width: 1450px;
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
                        @media (min-width:1500px) {
                            .container {
                            max-width: 1450px !important;
                            }
                        }

                        @media only screen and (max-width: 600px) {
                            
                        }
                    `}
                </style>
            </div>
            <Footer />
        </>
    )
}
