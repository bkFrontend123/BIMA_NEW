import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import Search from '../component/Icons/Search'
import { CareerService } from '../services/CareerService'

export default function Career() {
    const [checkedItems, setCheckedItems] = useState({});
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState([]);
    const [careers, setCareers] = useState([])
    const [searchText, setSearchText] = useState("")
    console.log(careers, 'careers')

    let loadData = async () => {
        let category = await CareerService.getAllCategories();
        setCategories(category.category)
        let result = await CareerService.getAll();
        setCareers(result?.career)
    }

    let getFilteredData = async () => {
        if(category?.length > 0){
            let result = await CareerService.getByCategory(category)
            setCareers(result?.career)
        }else{
            loadData();
        }
    }

    let search = async () => {
        if (searchText) {
            const result = await CareerService.searchCareer(searchText);
            setCareers(result?.career)
        }else{
            loadData();
        }
    }

    useEffect(()=>{
        getFilteredData();
    },[category])

    useEffect(() => {
        search();
    }, [searchText])

    const CardChecked = (e) => {
        // console.log("checkboxValue", checkboxValue)
        const { name, checked } = event.target;
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [name]: checked,
        }));


        let allChecked = []
        if(e.target.checked){
            allChecked = categories.map((c)=>c._id)
            setCategory(allChecked)
        }else{
            setCategory(allChecked)
        }
    }
    

    let handlecheck = (event) => {
        let updatedList = [...category];
    
        if (event.target.checked) {
          updatedList = [...category, event.target.value];
        } else {
          updatedList.splice(category.indexOf(event.target.value), 1);
        }
        setCategory(updatedList);
    };

    useEffect(() => {
        loadData();
        document.body.classList.add("homePageBody")
    }, []);
    return (
        <>
            <Navbar />
            <div className='career'>
                <div className='glossaryHero'>


                    <div className='container '>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="polyBox border-primary bg-blueLight text-primary title16 font-weight-600 mb-4">Careers</div>
                                <h3 className='industryHero-title title-60 font-secondary font-weight-600 text-primary mb-lg-4 mb-3'> Join the Indian Growth Story’s <div className='text-yellow fst-italic'>Proudest Narrators</div></h3>
                                <p className='industryHero-descrip title-22 text-black font-weight-500 mb-0 pe-md-4'>The people of India are the architects of India's growth story. The saga <span className='d-none d-lg-block'></span> of BimaKavach is a single thread in this rich tapestry of stories.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =========== companies types start ============= */}
                <div className='container careerForm glossaryForm'>
                    <div className='row'>
                        <div className='col-lg-3 careerForm-left d-none d-md-block'>
                            <div className='title-24 mb-4 opacity-0'>Dummy</div>
                            <div className='glossaryFormLeft d-flex flex-column align-items-baseline pe-xl-5'>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary ${checkedItems.option1 ? "checkbox active" : "checkbox"}`}>
                                    <input type="checkbox" name="option1" checked={checkedItems.option1 || false} onChange={CardChecked}
                                    // className={`aa ${checkedItems.option1 ? "checkbox active" : "checkbox"}`}
                                    />
                                    <span className='glossaryFormLeft-cardText '>All Teams</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                {
                                    categories.map((c)=>(
                                        <label key={c._id} className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                            <input type="checkbox" name={`${c?._id}`} value={c?._id} checked={category.includes(c._id) ? true : false} onChange={handlecheck}
                                            />
                                            <span className='glossaryFormLeft-cardText '>{c?.title}</span>
                                            <span className="checkmark border border-primary"></span>
                                            <span className="glossaryFormLeft-cardActive"></span>
                                        </label>
                                    ))
                                }
                                {/* <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option2" checked={checkedItems.option2 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Business</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option3" checked={checkedItems.option3 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Corporate</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option4" checked={checkedItems.option4 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Sales</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option5" checked={checkedItems.option5 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Insurance</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option6" checked={checkedItems.option6 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Operations</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option7" checked={checkedItems.option7 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Product</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option8" checked={checkedItems.option8 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Creative</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option9" checked={checkedItems.option9 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Subsidiary</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-2 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option10" checked={checkedItems.option10 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Marketing</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label> */}
                            </div>
                        </div>
                        <div className='col-lg-9 careerForm-right '>
                            <div className="form-group errorForm-search ">
                                <div className='title-24 mb-4'>Location</div>
                                <div className="input-group border-primary border2" style={{ height: "50px" }}>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text pe-0 ps-4 h-100 bg-transparent border-0">
                                            <Search iconColor="primary" width="18" height="18" />
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent h-100 radius-0 border-0"
                                        placeholder="All Locations"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* =========careerForm-category============= */}
                            <div className='careerForm-category '>
                                {/* ----------category Box 1 ---------- */}
                                {
                                    careers?.length > 0 && careers?.map((career)=>(
                                        <div key={career._id} className='careerForm-categoryBox mt-5'>
                                            <div className='row align-items-center '>
                                                <div className='col-lg-4'>
                                                    <div className='title-36 font-weight-600 '>{career?.categoryDetail[0]?.title}</div>
                                                </div>
                                                <div className='col-lg-8'>
                                                    <hr className='' style={{ backgroundColor: "#3E558E", opacity: "100" }} />
                                                </div>
                                            </div>
                                            <div className='row align-items-center mt-5'>
                                                <div className='col-lg-12'>
                                                    {
                                                        career?.v?.length > 0 && career?.v?.map((vSub)=>(
                                                            <div className='careerForm-categoryCard'>
                                                                <div key={vSub._id} className='title-36 mb-4'>{vSub?.subCategory}</div>
                                                                {
                                                                    vSub?.careers?.length > 0 && vSub?.careers?.map((subc) => (
                                                                        <div key={subc._id} className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                                            <div className='title-24 mb-1'>{`${subc?.title} - ${subc?.role}`}</div>
                                                                            <div className='title-18'>{`${subc?.city}, ${subc?.state}`}</div>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* <div className='careerForm-categoryBox mt-5'>
                                    <div className='row align-items-center '>
                                        <div className='col-lg-4'>
                                            <div className='title-36 font-weight-600 '>Business</div>
                                        </div>
                                        <div className='col-lg-8'>
                                            <hr className='' style={{ backgroundColor: "#3E558E", opacity: "100" }} />
                                        </div>
                                    </div>
                                    <div className='row align-items-center mt-5'>
                                        <div className='col-lg-12'>
                                            <div className='careerForm-categoryCard'>
                                                <div className='title-36 mb-4'>Service Delivery</div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                            </div>
                                            <div className='careerForm-categoryCard'>
                                                <div className='title-36 mb-4'>Business Intelligence</div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* ----------category Box 2 ---------- */}
                                {/* <div className='careerForm-categoryBox mt-5'>
                                    <div className='row align-items-center '>
                                        <div className='col-lg-4'>
                                            <div className='title-36 font-weight-600 '>Creative</div>
                                        </div>
                                        <div className='col-lg-8'>
                                            <hr className='' style={{ backgroundColor: "#3E558E", opacity: "100" }} />
                                        </div>
                                    </div>
                                    <div className='row align-items-center mt-5'>
                                        <div className='col-lg-12'>
                                            <div className='careerForm-categoryCard'>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}

                                {/* ----------category Box 3 ---------- */}
                                {/* <div className='careerForm-categoryBox mt-5'>
                                    <div className='row align-items-center '>
                                        <div className='col-lg-4'>
                                            <div className='title-36 font-weight-600 '>Operations</div>
                                        </div>
                                        <div className='col-lg-8'>
                                            <hr className='' style={{ backgroundColor: "#3E558E", opacity: "100" }} />
                                        </div>
                                    </div>
                                    <div className='row align-items-center mt-5'>
                                        <div className='col-lg-12'>
                                            <div className='careerForm-categoryCard'>
                                                <div className='title-36 mb-4'>Service Delivery</div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                            </div>
                                            <div className='careerForm-categoryCard'>  
                                            
                                                <div className='title-36 mb-4'>Business Intelligence</div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                                <div className='bg-grayExtraLight px-5 py-4 mb-3'>
                                                    <div className='title-24 mb-1'>Job Title Name - Role</div>
                                                    <div className='title-18'>City, State</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-none d-lg-block' style={{ height: "132px" }}></div>
                <div className='d-block d-lg-none' style={{ height: "120px" }}></div>
            </div>
            <Footer />


            <style jsx scope>
                {`
            .careerForm-right {
                padding-left: 80px;
            }
            .glossaryHero{
                padding-top: 120px;
                padding-bottom: 220px;                  
            }
            .glossaryFormLeft .glossaryFormLeft-card.active span{
                
            }
            .glossaryFormLeft-card {
                display: inline;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 18px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .glossaryFormLeft-cardText {
                margin-left: 28px;
            }
            .careerForm-category{
                margin-top: 76px;
            }
            /* Hide the browser's default checkbox */
            .glossaryFormLeft-card input {
                position: absolute;
                cursor: pointer;
                height: 0;
                width: 0;
            }

            .glossaryFormLeft-card .checkmark {
                    position: absolute;
                    top: 50%;
                    left: 15px;
                    height: 22px;
                    width: 22px;
                    background-color: #fff;
                    border-radius: 50%;
                    transform: translateY(-50%);
            }
            /* When the checkbox is checked, add a blue background */
            .glossaryFormLeft-card input:checked ~ .checkmark {
                background-color: #fff;
            }
            
            .glossaryFormLeft-card .glossaryFormLeft-cardActive{
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: #0e2b72;
                z-index: -1;
            }
            .glossaryFormLeft-card input:checked ~ .glossaryFormLeft-cardText,
            .glossaryFormLeft-card.active ~ .glossaryFormLeft-card .glossaryFormLeft-cardText
            {
                color: white;
            }
            .glossaryFormLeft-card input:checked ~ .glossaryFormLeft-cardActive,
            .glossaryFormLeft-card.active ~ .glossaryFormLeft-card .glossaryFormLeft-cardActive
            {
                display: block;
            }

            /* Create the checkmark/indicator (hidden when not checked) */
            .checkmark:after {
                content: "";
                position: absolute;
                display: none;
            }

            /* Show the checkmark when checked */
            .glossaryFormLeft-card.active ~ .glossaryFormLeft-card .checkmark:after,
            .glossaryFormLeft-card input:checked ~ .checkmark:after {
                display: block;
            }

            /* Style the checkmark/indicator */
            .glossaryFormLeft-card .checkmark:after {
                left: 8px;
                top: 4px;
                width: 5px;
                height: 10px;
                border: solid #0e2b72;
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                
            }
            .glossary .glossaryFiler-bottom{
                margin-top: 190px;
                padding: 0 100px;
            }
            
        
            .title-48{              
            line-height: 72px;
            }
            

            @media only screen and (min-width: 1200px) {
                .container{
                
                }
            }

            @media (min-width: 1300px){
            .container {
                max-width: 1170px ;
            }
            }
            @media (min-width: 1399px){
            .container {
                max-width: 1280px ;
            }
            }
            @media (min-width:1600px) {
            .container {
                max-width: 1400px ;
            }
            }
            @media (min-width:1650px) {
                .container {
                    max-width: 1420px ;
                }
            }
                
                
                @media only screen and (max-width: 1450px) {
                .title-60 {
                    font-size: 52px;
                    line-height: 64px;
                }
                .title-64 {
                    font-size: 52px;
                    line-height: 64px;
                }
                .glossaryFormLeft-card {
                    font-size: 16px;
                }
                .title-24 {
                    font-size: 22px;
                    line-height: 30px;
                }
                }
                @media only screen and (max-width: 992px) {
                .glossaryHero{
                    
                    padding-bottom: 20px;
                }
                .glossary .glossaryFiler-bottom{
                    margin-top: 0;
                    padding: 0 40px;
                }
                
                .abcFilterBox::after{
                    display: none;
                }
                .abcFilter{
                    background-color: transparent !important;
                    display: flex;
                    overflow-x: auto;
                    width: 100%;
                }
                .abcFilterBox span{
                    font-size: 12px !important;
                    line-height: 12px !important;
                }
                .careerForm-right{
                    padding-left: calc(var(--bs-gutter-x) * .5);
                }
                ::-webkit-scrollbar{
                    display: none;
                }

                .title-64 {
                    font-size: 36px;
                    line-height: 36px;
                }
                .title-60 {
                    font-size: 30px;
                    line-height: 36px;
                }
                .title-24 {
                    font-size: 18px;
                    line-height: 26px;
                }
                .glossaryFiler-bottom .title-24.font-weight-600{
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 33px;

                }
                .glossaryFiler-bottom .title-24.font-weight-500 {
                    font-size: 15px;
                    line-height: 22px;
                }
                .title-18 {
                    font-size: 10px;
                    line-height: 15px;
                }
                }
                @media only screen and (max-width: 575px) {
                    .title-22 {
                        font-size: 18px;
                        line-height: 27px;
                      }
                }
                @media only screen and (max-width: 370px) {
                .abcFilter{
                    width: 270px;
                }
                }
            `}
            </style>
        </>
    )
}
