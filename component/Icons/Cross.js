import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'



export default function Cross(props) {
  const { iconColor, height, width, customClass } = props 
  return (
  <svg width={width} height={height} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${customClass}`}>
    <path d="M14 29.3436L29.3438 14" stroke={iconColor} strokeWidth="4"/>
    <path d="M29 29.3436L13.6562 14" stroke={iconColor} strokeWidth="4"/>
  </svg>
  )
}



