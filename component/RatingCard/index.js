import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.css'

import quesIcon from '@/public/icons/quesIcon.svg'
import likeIcon from '@/public/icons/likeIcon.svg'
import unlikeIcon from '@/public/icons/unlikeIcon.svg'

import starFull from '@/public/icons/ratingStarFull.svg'
import starHalf from '@/public/icons/ratingStarHalf.svg'

export default function RatingCard(props) {
    const {customClass, background, reviews, stars} = props;

    return (
        <>
            <div className={`${style.rateCol} ${customClass} ${background === 'true' ? style.rateBgCol : null}`}>
                <div className={`${style.rateTextDiv}`}>
                    <span>{reviews}500+</span>
                    <p>Companies trust us</p>
                </div>
                <div className={`${style.rateStarsDiv}`}>
                    <p>Our customers rate us</p>
                    <div className={`${style.rateStars}`}>
                        <i>
                            <Image src={starFull} width="32" height="32" alt="star icon" /> 
                        </i>
                        <i>
                            <Image src={starFull} width="32" height="32" alt="star icon" />
                        </i>
                        <i>
                            <Image src={starFull} width="32" height="32" alt="star icon" />
                        </i>
                        <i>
                            <Image src={starFull} width="32" height="32" alt="star icon" />
                        </i>
                        <i>
                            <Image src={starHalf} width="32" height="32" alt="star icon" />
                        </i>
                        {stars === '0.5' ? (
                            <>
                                <i>
                                    <Image src={starHalf} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '1' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '1.5' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                                <i>
                                    <Image src={starHalf} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '2' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '2.5' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starHalf} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '3' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '3.5' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starHalf} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '4' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '4.5' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starHalf} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                        {stars === '5' ? (
                            <>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" /> 
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                                <i>
                                    <Image src={starFull} width="32" height="32" alt="star icon" />
                                </i>
                            </>
                        ):(
                            null
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
