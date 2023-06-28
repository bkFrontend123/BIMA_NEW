import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'



export default function Toggle(props) {
    const{iconColor, height, width} = props
  return (
    <svg width={width} height={height} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={iconColor} d="M0.5 1H18" stroke="#0E2B72"/>
    <path className={iconColor} d="M6 7L18 7" stroke="#0E2B72"/>
    <path className={iconColor} d="M0.5 13H18" stroke="#0E2B72"/>
    </svg>

    

  )
}



