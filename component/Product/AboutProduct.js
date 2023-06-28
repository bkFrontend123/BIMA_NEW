import React, {useState} from 'react'

export default function AboutProduct() {
    const [activeC, setActiveC] = useState(1);
    const ProductList = [
        { id: "1", list: "What" },
        { id: "2", list: "Who" },
        { id: "3", list: "Why" },
        { id: "4", list: "Coverage" },

    ]
    const activeList = (val) => {
        setActiveC(val)
    }
    return (
        <div className='bg-primaryDark aboutProduct mb-5 p-5 text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <nav id="navbar-example2" className="navbar px-3">
                            <ul className="nav nav-pills aboutProductList">
                                {ProductList.map((item) =>
                                    {return(<li className={`nav-item ${activeC == item.id?"activeList":""}`} onClick={()=>activeList(item.id)}>
                                        <a className="nav-link " href={`#scrollspyHeading${activeC}`}>{item.list}</a>
                                    </li>)}
                                )}
                            </ul>
                        </nav>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                            <div id="scrollspyHeading1" className='aboutProduct-scrollify px-4'>
                               <h2 className='title24 font-secondary font-weight-400 opacity-75'>What is</h2>
                               <h3 className='title36 font-secondary font-weight-600 text-yellow'>Directors & Officers Liability Insurance?</h3>
                               <p className='title20 mb-0 text-blueGray mt-5'>Also known as Directors Liability Insurance (or simply D&O Insurance), this policy is designed to cover the legal liabilities of directors, CXOs and board members in case they get indicted over the decisions they make to manage the business. Essentially, the D&O policy protects the personal assets of the  company’s directors and officers, and compensates for settlements  and legal expenses that result from the covered claims.</p>
                            </div>
                            <div id="scrollspyHeading2" className='vh-100'>
                                <p>
                                    222222222222 his is some placeholder content for the scrollspy page. <br></br> <br></br> Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy <br></br><br></br> herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy her
                                </p>

                            </div>

                        </div>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                            <div id="scrollspyHeading3" className='vh-100'>
                                <p>
                                    his is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy her
                                </p>

                            </div>
                            <div id="scrollspyHeading4" className='vh-100'>
                                <p>
                                    222222222222 his is some placeholder content for the scrollspy page. <br></br> <br></br> Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy <br></br><br></br> herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy herhis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy her
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <style jsx scope>
                {`
                    .title36{
                        font-size: 36px;
                        line-height: 42px;
                    }
                    .aboutProductList li a{
                        color: white;
                        font-weight: 400;
                        opacity: .6;
                        font-size: 18px;
                    }
                    .aboutProductList li a.active{
                        background-color: transparent;

                    }
                    .aboutProductList li{
                        position: relative;
                    }
                    
                    .aboutProductList li.activeList::after {
                        position: absolute;
                        content: '';
                        height: 2px;
                        bottom: -4px;
                        background: #ddd; 
                    }
                    .aboutProductList li a:hover,
                    .aboutProductList li.activeList a{
                        color: var(--vt-c-yellow);
                        opacity: 1;
                    }
                    .aboutProduct-scrollify{
                        
                    }
                `}
            </style>
        </div>
    )
}
