import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPaginate from 'react-paginate';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState, useEffect } from 'react';

export default function Questions() {

    const partner1 = [
        { id: "s1", que: "Who are we?", ans: "We helps you make better decisions when buying insurance. That's it. That's all we do." },
        { id: "s2", que: "But what exactly do you do?", ans: "We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call." },
        { id: "s3", que: "Is it free?", ans:"Yes, it's free." },
        { id: "s4", que: "But what exactly do you do?", ans: "We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call." },
        { id: "s5", que: "Who are we?", ans: "We helps you make better decisions when buying insurance. That's it. That's all we do." },
        { id: "s6", que: "Is it free?", ans:"Yes, it's free." },
        { id: "s7", que: "Who are we?", ans: "We helps you make better decisions when buying insurance. That's it. That's all we do." },
        { id: "s8", que: "But what exactly do you do?", ans: "We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call." },
        { id: "s9", que: "Is it free?", ans:"Yes, it's free." },
        { id: "s10", que: "Why Choose Us?", ans: "We helps you make better decisions when buying insurance. That's it. That's all we do." },
        { id: "s11", que: "Is it free?", ans:"Yes, it's free." },
        { id: "S12", que: "But what exactly do you do?", ans: "We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call." },
        { id: "s13", que: "Who are we?", ans: "We helps you make better decisions when buying insurance. That's it. That's all we do." },
        { id: "S15", que: "Why Choose Us?", ans: "We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call." },
        { id: "s16", que: "Is it free?", ans:"Yes, it's free." },
    ]
    //const pageCount = Math.ceil(partner1.length/3);
    const [partner, Setpartner] = useState([])
    const [pageCount, SetpageCount] = useState(0)
    const [limit, SetLimit] = useState(3)
    //let partner = [partner1[0],partner1[1],partner1[2]];
    useEffect(() => {
        handlePageClick({ selected: 0 });
    }, [])
    const handlePageClick = (data) => {

        //response= axios.get(https://www.rentdigi.com:8081/api-v2/property/getAllPropertiesWithPagination/?page=(data.selected+1)&limit=3)
        //or
        //response = axios.post("/api",{
        //page: data.selected+1,
        //limit :limit
        //})
        //SetpageCount(Math.ceil(response.totalcount/limit))
        //Setpartner(response.data)


        //response= {
        //data : [],
        //totalCount : 12
        //}
        //SetpageCount(Math.ceil(response.totalcount/limit))
        //Setpartner(response.data)



        Setpartner(partner1.slice(data.selected * 3, data.selected * 3 + 3))
        SetpageCount(Math.ceil(partner1.length / limit))
    }

    return (
        <div className='popularQue mx-auto'>
            <div className='row'>
                <div className=' text-center@ text-xl-start@ '>
                    <div className='row'>
                        <div className='col-12 text-start text-md-center'>
                            <div className='title48 font-secondary mb-4 text-primary mb-xl-4 mb-3 font-weight-600'>Before You Even Ask</div>
                            {/* <div className='text-primary font-weight-600 title16 mb-5 mb-xl-0'>Our customers trust us.</div> */}
                        </div>
                    </div>

                    <div className='row w-100 mt-md-5'>
                        <div className='col-xl-8 ms-0 ms-xl-5'>
                            <div className='popularQue-list'>
                                {partner.map((item) =>
                                    <div key={item.id} className='popularQue-listBox text-black mb-4'>
                                        {/* <span className='title20 '>{item.id}</span> */}
                                        <p className='title24 font-weight-600 mb-1 font-primary'>{item.que}</p>
                                        <p className='title18 text-blueGray font-weight-500 mb-0'>{item.ans}</p>
                                    </div>

                                )}
                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <div className='d-flex align-items-end justify-content-center justify-content-xl-between paginationMain'>
                                <div className='commnHeading'>
                                    <div className="pagination-list blogPagination ">
                                        {/* <Items currentItems={currentItems} /> */}
                                        <ReactPaginate
                                            breakLabel=""
                                            nextLabel=""
                                            onPageChange={handlePageClick}
                                            pageRangeDisplayed={3}
                                            pageCount={pageCount}
                                            previousLabel=""
                                            renderOnZeroPageCount={null}
                                            containerClassName={"pagination m-0"}
                                            pageClassName={"page-item"}
                                            pageLinkClassName={"page-link "}
                                            // previousClassName={"page-item"}
                                            // nextClassName={"page-item"}
                                            // previousLinkClassName={"page-link"}
                                            // nextLinkClassName={"page-link"}                                        
                                            activeClassName={"active"}
                                        />
                                    </div>
                                </div>
                                <div className='d-none d-xl-block mb-2 text-center'>
                                    <Link className='title20 text-gray text-decoration-none' href="/" >Need more answers? </Link>
                                    <div className='d-flex mt-2'>
                                        <a className="btnCommon btnBorder border-primary border2  text-primary me-2 text-decoration-none" type="submit">  <img className='me-1' src='/icons/calender.svg' width="18px" /><span>  Schedule a call  </span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="d-none d-md-block" style={{ height: "200px" }}></div>
            <div className="d-blok d-md-none" style={{ height: "80px" }}></div>

            <style jsx scope>
                {`
                    .paginationMain{
                        margin-left: 38px;
                    }
                    @media only screen and (max-width: 575px){
                        .paginationMain{
                            margin-left: 0;
                        }
                    }
                `}
            </style>
        </div>
    )
}
