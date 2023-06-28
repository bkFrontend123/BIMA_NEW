import React from 'react'

export default function Heading(props) {
    const {label, title, subTitle} = props;
  return (
    <div>
        <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-600 '>{label}</div>
        <div className='mb-1 text-primary '>{title}</div>
        <p className='title24 mt-4  font-weight-500 text-primary px-0 px-lg-5 mb-4'>{subTitle}</p> 
    </div>
  )
}
