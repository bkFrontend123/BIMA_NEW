import React from 'react'
import Link from 'next/link'

import ArrowRightSmall from '../Icons/ArrowRightSmall'
export default function IconText(props) {
    return (
        <>
            <div className={`iconText ${props.customClass} ${props.themeColor} `}>
                <div className='iconText-top '>
                    <div className='d-flex flex-column flex-md-row align-items-start align-items-md-center'>
                        <span>{props.children}</span>
                        <span className='title-36 mb-0 iconText-title d-block'>{props.title}</span>
                    </div>
                </div>
                <div className='iconText-bottom '>
                    <Link className='title-18  text-decoration-none ' href={`${props.btnLink}`} >
                        <div className='iconText-bottomLink position-relative d-inline '>
                            <span className='me-1 title-18'>Learn More </span>
                            <div className='yellowSVG svgArrow'><ArrowRightSmall iconColor="black" height="16" width="20" /></div>
                            <div className='blueSVG svgArrow'><ArrowRightSmall iconColor="white" height="16" width="20" /></div>                            
                        </div>
                    </Link>
                </div>
            </div>


            <style jsx scope>
                {`         
                
                .title-36 {
                    font-size: 36px;
                    line-height: 38px;
                }
                .title-18 {
                    font-size: 18px;
                    line-height: 28px;
                }
                .iconText{
                    margin-bottom: 138px;
                }
                .iconText-bottom{
                    margin-top: 40px;
                }
                .iconText-bottomLink{
                    padding: 0 10px;
                }
                .iconText-bottomLink::before{
                        position: absolute;
                        content: "";
                        left: 0;
                        bottom: -10px;
                        background: var(--vt-c-black);
                        width: 100%;
                        height: 2px;
                }
                .iconText-topIco{
                    margin-left: 20px;
                }
                .iconText-title{
                    margin-left: 18px;
                }
                .svgArrow{
                    display: none;
                    transition: 0.3s;
                }
                .iconText:hover .svgArrow{
                    margin-left: 3px;
                }
                .yellow .yellowSVG{
                    display: inline;
                }
                .blue .blueSVG{
                    display: inline;
                }
                .blue .iconText-bottomLink::before,
                .blue .iconText-bottomLink::before{
                    background: var(--vt-c-white);
                }
                 @media only screen and (max-width: 575px) {
                    
                    .title-36{
                        font-size: 18px;
                        line-height: 27px;
                    }
                    .title-18 {
                        font-size: 12px;
                        line-height: 18px;
                    } 
                     .iconText-title{
                        margin-left: 0;
                    }
                     .iconText{
                        margin-bottom: 50px;
                    }
                    .iconText-bottomLink::before{
                        height: 1px;    
                    }
                   
                }
            `}
            </style>

        </>
    )
}
