import React from 'react'
import Style from '../BlogListCard/style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ArrowSend from '../Icons/ArrowSend'

function BlogListCard(props) {
    const { title, label, dateTime, blogByName, blogByPosition, linking, handleChildClick } = props;
    return (
        <div className='BlogList-card '>
            <div className='BlogList-cardBox row align-items-center flex-column flex-row-reverse@ gx-3'>
                <div className='col-md-12 col' onClick={handleChildClick}>
                    <div className={`position-relative p-4 pt-4  BlogListCardBox ${Style.ListCardBox}`} style={{ background: "url(/blog1.webp) no-repeat center center/cover" }}>
                        <div className='BlogList-cardOverlay d-none'></div>
                        <div className='polyBox border-primary bg-blueLight text-primary  title16 font-weight-600 d-none'>{label}</div>
                        <div className='BlogList-cardLink  mt-2 title-30 d-block BlogList-cardTitle font-secondary text-capitalize  font-weight-600 @w-75'>
                            <Link href={linking} className='text-primarySky text-decoration-none'>{title}</Link>
                        </div>
                        <div className='blogBy position-absolute d-md-flex d-none  align-items-center '>
                            <Image
                                // loader={myLoader}
                                src="/blogBy.webp"
                                alt="Picture of the author"
                                width={40}
                                height={40}
                                loading="lazy"
                            />
                            <div className='ms-2'>
                                <div className='text-black title-12 font-weight-600' >{blogByName}</div>
                                <div className='text-black title-10 font-weight-600'>{blogByPosition}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col mt-md-3 mt-2'>
                    <div className='BlogList-cardBottom '>
                        <div className='row align-items-center'>
                            <div className='col'>
                                <Link href={linking} className='text-decoration-none  BlogList-cardTitle font-weight-500 title24'>{title}</Link>
                                <div className='BlogList-cardDate mt-1 mt-md-0 title16 text-yellow3'>{dateTime}
                                    {/* <Link href="" className='text-uppercase text-decoration-none text-yellow3 ms-1'>Read</Link> */}
                                </div>
                            </div>
                            <div className='BlogList-cardArrow col-auto d-none @d-md-block'>
                                <Link href="" className='text-uppercase text-decoration-none text-yellow3 ms-1' onClick={handleChildClick}>
                                    <ArrowSend width="20px" height="20px" iconColor="" />
                                </Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='blogBy blogByBottom mt-3 d-md-none d-flex  align-items-center '>
                                <Image
                                    // loader={myLoader}
                                    src="/blogBy.webp"
                                    alt="Picture of the author"
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                />
                                <div className='ms-2'>
                                    <div className='text-black' style={{ fontSize: "10px" }}>{blogByName}</div>
                                    <div className='text-black' style={{ fontSize: "8px" }}>{blogByPosition}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx scope>
                {`
                    .title-30 {
                        font-size: 30px;
                        line-height: 36px;
                    }
                    .title-10{
                         font-size: 10px;
                            line-height: 18px;
                    }
                    .BlogList-cardLink a{
                        color: inherit;
                    }

                    @media only screen and (max-width: 1450px) {
                        .BlogList-cardBox  .BlogList-cardTitle  {
                            font-size: 24px;
                            line-height: 30px;
                        }
                        .BlogList-cardBox {
                            
                        }
                    }
                    @media only screen and (max-width: 1399px) {
                    }
                    @media only screen and (max-width: 575px) {
                        .BlogList-cardBox  .BlogList-cardTitle  {
                            font-size: 16px;
                            line-height: 24px;
                            font-weight: 600;
                        }
                        .BlogListCardBox{
                            display: flex;
                            align-items: center;
                        }
                        .BlogList-cardTitle{
                           line-height: 14px;
                           display: -webkit-box;
                           overflow: hidden;
                           -webkit-line-clamp: 2;
                           -webkit-box-orient: vertical;
                           max-width: 62%;
                        }
                        .BlogListCard-col {
                            margin-bottom: 80px;
                         }
                        
                       
                    }
               `}
            </style>

        </div>
    )
}

export default BlogListCard