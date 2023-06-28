import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'



export default function ArrowSlider(props) {
  const { iconColor, height, width } = props
  return (

    <svg width={width} height={height} viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={iconColor} d="M1.22437 30.449L15.4487 16.2246L1.22437 2.00024" stroke="#FFB400" strokeWidth="3" strokeLinejoin="bevel" />
    </svg>

  )
}



