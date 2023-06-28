import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'



export default function ArrowSend(props) {
  const { iconColor, height, width } = props
  return (

    <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={iconColor} d="M3.80078 12.8809L12.3529 4.32874" stroke="#FFB400" strokeWidth="2" strokeLinejoin="bevel" />
      <path className={iconColor} d="M5.43945 4.23779L12.4488 4.2323V10.8293" stroke="#FFB400" strokeWidth="2" strokeLinejoin="bevel" />
    </svg>


  )
}



