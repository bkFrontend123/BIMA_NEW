import React from 'react'
import Image from 'next/image'

import ExperienceIcon from '@/component/GHI/Icons/IconExperience';
import InsuredIcon from '@/component/GHI/Icons/IconInsured';

import starIcon from '@/public/icons/starYellow.svg'

import style from './style.module.css'

export default function RatingSliderCard() {
  return (
    <>
      <div className={`${style.rateComboCol}`}>
        <div>
          <i>
            <ExperienceIcon />
          </i>
          <div>
            <p>Collective insurance exp</p>
            <h4><span>50 Years +</span></h4>
          </div>
        </div>
        <div>
          <Image src={starIcon} width={20} height={20} alt="Star Icon" />
        </div>
        <div>
          <i>
            <InsuredIcon />
          </i>
          <div>
            <p>Cumulative risks insured</p>
            <h4>₹ <span>5,000+ Cr</span></h4>
          </div>
        </div>
      </div>
    </>
  )
}