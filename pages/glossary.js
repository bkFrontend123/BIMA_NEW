import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import Nav from 'react-bootstrap/Nav';
import Search from '../component/Icons/Search'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { GlossoryService } from '../services/GlossoryService'

export default function Glossary() {

    let alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const [checkedItems, setCheckedItems] = useState({});
    const [input, setInput] = useState();
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState([]);
    const [glossory, setGlossory] = useState([]);
    const [selected, setSelected] = useState("A")
    const [searchText, setSearchText] = useState("")
    // console.log(selected, glossory, 'category') 


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
    
    let loadData = async () => {
        let category = await GlossoryService.getAllCategories();
        setCategories(category.category)
        let result = await GlossoryService.getAll();
        setGlossory(result?.glossory)
    }

    useEffect(() => {
        loadData();
        document.body.classList.add("homePageBody")
    }, []);

    let getFilteredData = async() => {
        if(category?.length > 0){
            let result = await GlossoryService.getByCategory(category)
            setGlossory(result?.glossory)
        }else{
            loadData();
        }
    }

    useEffect(()=>{
        getFilteredData();
    },[category])

    let search = async () => {
        if (searchText) {
            const result = await GlossoryService.searchGlssory(searchText);
            setGlossory(result?.glossory)
        }else{
            loadData();
        }
    }

    useEffect(() => {
        search();
    }, [searchText])

    let handleClick = (e) => {
        setSelected(e)
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

    return (
        <>
            <Navbar />
            <div className='glossary'>
                <div className='glossaryHero'>

                    <div className='container '>
                        <div className='row '>
                            <div className='col-md-12'>
                                <div className='breadcrumb'>
                                    <Nav
                                        activeKey="/home"
                                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                                    >
                                        <Nav.Item>
                                            <Nav.Link className='text-blueGray px-0 text-uppercase title-15' href="/">Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className='text-blueGray px-2 text-uppercase title-15' eventKey="link-1" style={{ transform: "rotate(-90deg)" }}>
                                                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#9FAAC7" strokeWidth="1.5" strokeLinejoin="bevel" />
                                                </svg>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className=' text-blueGray px-0 text-uppercase title-15' eventKey="link-1">Glossary</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container '>
                        <div className='row '>
                            <div className='col-md-7'>
                                <h3 className='industryHero-title title-60 font-secondary font-weight-600 text-yellow mb-lg-4 mb-3'>Glossary</h3>
                                <p className='industryHero-descrip title-22 text-black font-weight-500 mb-0 pe-md-4'>Unlock technical jargon, put power in your hands. Elevate your insurance know-how with easy-to-use definitions, and never miss a beat!</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* =========== companies types start ============= */}
                <div className='container glossaryForm'>
                    <div className='row'>
                        <div className='col-lg-7 d-none d-md-block'>
                            <div className='glossaryFormLeft d-flex flex-wrap pe-xl-5'>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary ${checkedItems.option1 ? "checkbox active" : "checkbox"}`}>
                                    <input type="checkbox" name="option1" checked={checkedItems.option1 || false} onChange={CardChecked}
                                    // className={`aa ${checkedItems.option1 ? "checkbox active" : "checkbox"}`}
                                    />
                                    <span className='glossaryFormLeft-cardText '>View All</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                {
                                    categories.map((c)=>(
                                        <label key={c._id} className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                            <input type="checkbox" name={`${c?._id}`} value={c?._id} checked={category.includes(c._id) ? true : false} onChange={handlecheck}
                                            />
                                            <span className='glossaryFormLeft-cardText '>{c?.title}</span>
                                            <span className="checkmark border border-primary"></span>
                                            <span className="glossaryFormLeft-cardActive"></span>
                                        </label>
                                    ))
                                }
                                {/* <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option2" checked={checkedItems.option2 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Aviation & Aerospace</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option3" checked={checkedItems.option3 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Cyber</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option4" checked={checkedItems.option4 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Indemnity</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option5" checked={checkedItems.option5 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Covers</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option6" checked={checkedItems.option6 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Deductibles</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option7" checked={checkedItems.option7 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Jurisdiction</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option8" checked={checkedItems.option8 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Premium</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option9" checked={checkedItems.option9 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Subsidiary</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option10" checked={checkedItems.option10 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Bond Cost</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label>
                                <label className={`glossaryFormLeft-card  py-2 px-3 me-3 border2 border-primary text-primary`}>
                                    <input type="checkbox" name="option11" checked={checkedItems.option11 || false} onChange={CardChecked}
                                    />
                                    <span className='glossaryFormLeft-cardText '>Bail</span>
                                    <span className="checkmark border border-primary"></span>
                                    <span className="glossaryFormLeft-cardActive"></span>
                                </label> */}
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className="form-group errorForm-search px-lg-4 px-md-0 d-none d-lg-block">
                                <div className="input-group border-primary border2" style={{ height: "50px" }}>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text pe-0 ps-4 h-100 bg-transparent border-0">
                                            <Search iconColor="primary" width="18" height="18" />
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent h-100 radius-0 border-0"
                                        placeholder="Search"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='container glossaryFiler-bottom'>
                    <div className='px-lg-5'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={selected}>
                        {/* defaultActiveKey={selected} */}
                            <div className='row'>
                                <div className=' col-lg-3 '>

                                    <div className='abcFilter bg-gray' variant="pills" >
                                        <Nav variant="pills" className="flex-md-column flex-nowrap flex-wrap">
                                            {
                                                alphabets.map((alpha, index)=>(
                                                    <Nav.Item>
                                                        <Nav.Link key={index} className='abcFilterBox font-secondary ms-md-2 ms-3' onClick={() => handleClick(alpha)} eventKey={alpha}><span>{alpha}</span></Nav.Link>
                                                    </Nav.Item>
                                                ))
                                            }
                                            {/* <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-1 ' eventKey="A"><span>A</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="B"><span>B</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="C"><span>C</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="D"><span>D</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="E"><span>E</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="F"><span>F</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="G"><span>G</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="H"><span>H</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="I"><span>I</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="J"><span>J</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="K"><span>K</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="L"><span>L</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="M"><span>M</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="N"><span>N</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="O"><span>O</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="P"><span>P</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="Q"><span>Q</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="R"><span>R</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="S"><span>S</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="T"><span>T</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="U"><span>U</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="V"><span>V</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="W"><span>W</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="X"><span>X</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="Y"><span>Y</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='abcFilterBox font-secondary ms-md-2 ms-3 ' eventKey="Z"><span>Z</span></Nav.Link>
                                            </Nav.Item> */}
                                        </Nav>
                                    </div>

                                    <div className="form-group errorForm-search d-block d-lg-none mt-4 " style={{ marginBottom: "75px" }}>
                                        <div className="input-group border-primary border2 " style={{ height: "50px" }}>
                                            <div className="input-group-prepend">
                                                <div className="input-group-text pe-0 ps-4 h-100 bg-transparent border-0">
                                                    <Search iconColor="primary" width="18" height="18" />
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control bg-transparent h-100 radius-0 border-0"
                                                placeholder="Search "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-9'>
                                    <Tab.Content>
                                        {
                                            alphabets.map((alpha, index)=>(
                                                <Tab.Pane eventKey={alpha} key={index}>
                                                    {
                                                        glossory?.length > 0 && 
                                                        glossory?.filter((g)=>g?.title?.substring(0, 1) === selected)
                                                        .map((g)=>(
                                                            <div key={g._id} className='row mb-5'>
                                                                <div className='col-lg-4'>
                                                                    <div className='title-24 font-weight-600'>{g?.title}Bond Cost  Cover for New Subsidiary </div>
                                                                    <div className='title-24 font-weight-500'>{`(${g?.subTitle})`}(Non-US and/or Financial institution)</div>
                                                                </div>
                                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                                    <div className='title-18'>{g?.description}</div>
                                                                    {/* <ul>
                                                                        <li className='title-18'>The new entity is based on or has any of its securities listed on any exchange in the USA </li>
                                                                        <li className='title-18'>It is a financial institution</li>
                                                                        <li className='title-18'>Such creation or acquisition increases the total consolidated assets of the principal company by more than 25% (as per the most recent audited, consolidated financial statements) </li>
                                                                    </ul> */}
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </Tab.Pane>
                                            ))
                                        }
                                        {/* <Tab.Pane eventKey="A">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Automatic Cover for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    <ul>
                                                        <li className='title-18'>The new entity is based on or has any of its securities listed on any exchange in the USA </li>
                                                        <li className='title-18'>It is a financial institution</li>
                                                        <li className='title-18'>Such creation or acquisition increases the total consolidated assets of the principal company by more than 25% (as per the most recent audited, consolidated financial statements) </li>
                                                    </ul>
                                                    <div className='title-18'>
                                                        For example, if a company creates or acquires a new subsidiary in Europe and meets the above-mentioned criteria for automatic coverage, this coverage will automatically provide protection for the new subsidiary from the date of the creation or acquisition.
                                                        The insured should give the insurer sufficient details so that the insurer can assess and evaluate the insurer’s potential increase in exposure after such creation or acquisition.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Automatic Cover for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    <ul>
                                                        <li className='title-18'>The new entity is based on or has any of its securities listed on any exchange in the USA </li>
                                                        <li className='title-18'>It is a financial institution</li>
                                                        <li className='title-18'>Such creation or acquisition increases the total consolidated assets of the principal company by more than 25% (as per the most recent audited, consolidated financial statements) </li>
                                                    </ul>
                                                    <div className='title-18'>
                                                        For example, if a company creates or acquires a new subsidiary in Europe and meets the above-mentioned criteria for automatic coverage, this coverage will automatically provide protection for the new subsidiary from the date of the creation or acquisition.
                                                        The insured should give the insurer sufficient details so that the insurer can assess and evaluate the insurer’s potential increase in exposure after such creation or acquisition.
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Aail and Aond Costs</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>
                                                        It covers the costs of securing bail and bond for the insured, which may be in connection with any criminal proceedings arising from their duties. It covers the reasonable premium for a financial instrument (but not collateral for the instrument) that guarantees the contingent obligation of the insured, for a specified amount required by a Court.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Aail and Aond Costs</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>
                                                        It covers the costs of securing bail and bond for the insured, which may be in connection with any criminal proceedings arising from their duties. It covers the reasonable premium for a financial instrument (but not collateral for the instrument) that guarantees the contingent obligation of the insured, for a specified amount required by a Court.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Arporate Manslaughter Cover</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>
                                                        If death happens in the workplace, a company can be sued by the family of the victim , alleging that the company’s  actions resulted in the death and the management failed to take reasonable care to prevent the death. In the event of such a claim, this coverage would provide protection for the costs associated with the legal defence, civil fines, penalties, reputation protection, crisis management and other related costs.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Arporate Manslaughter Cover</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>
                                                        If death happens in the workplace, a company can be sued by the family of the victim , alleging that the company’s  actions resulted in the death and the management failed to take reasonable care to prevent the death. In the event of such a claim, this coverage would provide protection for the costs associated with the legal defence, civil fines, penalties, reputation protection, crisis management and other related costs.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Aiscovery Period for Retired Directors & Officers</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>
                                                        This cover ensures that if a retired director is sued for a wrongful act that occurred during his tenure as a director, he can still make a claim under the D&O insurance policy for up to 7 years after the policy has expired. However, such claims should be for wrongful acts and inquiries that may have occurred prior to the effective date of policy termination or non-renewal.  No additional premium is required for such extended Reporting Period with respect to retired Directors & Officers , provided this policy is not renewed or replaced with any other policy that  gives them similar management liability cover
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Amergency Cost</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>
                                                        If the insurer’s written consent cannot reasonably be received before defence costs are incurred, the Insurer would agree to provide retrospective approval to cover such costs, till the time the insured can seek such written consent. This time limit is usually for a period of 30 days from the date of the claim and may vary from one insurer to another. Within this time, the insured shall give written intimation to the Insurer of the claim that was the subject of the emergency, along with reasons why the emergency existed.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Amergency Cost</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>
                                                        If the insurer’s written consent cannot reasonably be received before defence costs are incurred, the Insurer would agree to provide retrospective approval to cover such costs, till the time the insured can seek such written consent. This time limit is usually for a period of 30 days from the date of the claim and may vary from one insurer to another. Within this time, the insured shall give written intimation to the Insurer of the claim that was the subject of the emergency, along with reasons why the emergency existed.
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="B">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Bond Cost  Cover for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    <ul>
                                                        <li className='title-18'>The new entity is based on or has any of its securities listed on any exchange in the USA </li>
                                                        <li className='title-18'>It is a financial institution</li>
                                                        <li className='title-18'>Such creation or acquisition increases the total consolidated assets of the principal company by more than 25% (as per the most recent audited, consolidated financial statements) </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="C">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Cyber  Cover for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    <ul>
                                                        <li className='title-18'>The new entity is based on or has any of its securities listed on any exchange in the USA </li>
                                                        <li className='title-18'>It is a financial institution</li>
                                                        <li className='title-18'>Such creation or acquisition increases the total consolidated assets of the principal company by more than 25% (as per the most recent audited, consolidated financial statements) </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="D">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>Deductibles  Cover for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    <ul>
                                                        <li className='title-18'>The new entity is based on or has any of its securities listed on any exchange in the USA </li>
                                                        <li className='title-18'>It is a financial institution</li>
                                                        <li className='title-18'>Such creation or acquisition increases the total consolidated assets of the principal company by more than 25% (as per the most recent audited, consolidated financial statements) </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="E">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>EEEEEE for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="F">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>FFFF for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="G">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>GGGG for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="H">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>HHHH for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="I">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>IIII for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="J">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>JJJJJ for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="K">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>KKKKKKK for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="L">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>LLLLLLL for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="M">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>MMMMMMMM for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="N">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>NNNNNNN for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="O">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>OOOO for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="P">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>PPPPPPPP for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Q">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>QQQQQQ for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="R">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>RRRRRRRR for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="S">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>SSSSSS for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="T">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>TTTTTT for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="U">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>UUUUUUU for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="V">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>V V V V for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="W">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>W WW W for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="X">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>X X X X X for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Y">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>YYYYYY for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Z">
                                            <div className='row mb-5'>
                                                <div className='col-lg-4'>
                                                    <div className='title-24 font-weight-600'>ZZZZZZ for New Subsidiary </div>
                                                    <div className='title-24 font-weight-500'> (Non-US and/or Financial institution)</div>
                                                </div>
                                                <div className='col-lg-8 mt-3 mt-lg-0'>
                                                    <div className='title-18'>This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage This clause automatically provides protection to new subsidiaries of a company that are acquired or created during the policy period.   The automatic coverage will start with effect from the  date of such creation or acquisition except- </div>
                                                    
                                                </div>
                                            </div>
                                        </Tab.Pane> */}
                                    </Tab.Content>
                                </div>
                            </div>
                        </Tab.Container>
                    </div>
                </div>

                <div className='d-none d-lg-block' style={{ height: "100px" }}></div>
                <div className='d-block d-lg-none' style={{ height: "48px" }}></div>
            </div>
            <Footer />



            <style jsx scope>
                {`
          
            .glossaryHero{
                padding-top: 120px;
                padding-bottom: 180px;                  
            }
            .glossaryFormLeft .glossaryFormLeft-card.active span{
                
            }
            .glossaryFormLeft-card {
                display: block;
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
                    padding: 0 80px;
                }
                .abcFilter{
                    width: 1px;
                }
                .abcFilterBox{
                    position: relative;
                    cursor: pointer;
                }
                .abcFilterBox::after{
                    position: absolute;
                    content: "";
                    top: 16px;
                    left: -27.1px;
                    background: var(--vt-c-gray);
                    width: 8px;
                    height: 8px;
                }
               
                
                .abcFilterBox:hover::after,
                .abcFilterBox.active::after{
                    background-color: transparent;
                }
                .abcFilterBox:hover::after,
                .abcFilterBox.active::after{
                     background: var(--vt-c-yellow);
                }
                .abcFilterBox span{
                    font-size: 18px;
                    line-height: 40px;
                    color: var(--vt-c-gray)
                }
                .abcFilterBox:hover span,
                 .abcFilterBox.active span,
                .abcFilterBox:focus span{
                    font-size: 24px;
                    color:  var(--vt-c-yellow);
                }
           
              .title-48{              
                line-height: 72px;
              }
              

              @media only screen and (min-width: 1200px) {
                  .container{
                    // padding: 0 40px;
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
                    .glossaryFormLeft-card {
                        font-size: 16px;
                    }

                    .title-64 {
                        font-size: 52px;
                        line-height: 64px;
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
                    ::-webkit-scrollbar{
                        display: none;
                    }

                    .title-64 {
                        font-size: 36px;
                        line-height: 38px;
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
