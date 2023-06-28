import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'


export default function Users(props) {
  const { iconColor, height, width, customClass } = props
  return (

    <svg width={width} height={height} className={`${customClass}`} viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={iconColor} d="M14.45 19.1997C13.85 19.1997 13.1 18.8997 13.1 18.2997C13.1 17.6997 13.85 17.8497 14.45 16.7997C14.45 16.7997 17.15 9.44971 11.75 9.44971C6.35 9.44971 9.05 16.7997 9.05 16.7997C9.65 17.8497 10.4 17.6997 10.4 18.2997C10.4 18.8997 9.65 19.1997 9.05 19.1997C8.15 19.3497 7.4 19.1997 6.5 20.0997V28.6497H14C14.3 26.0997 15.05 20.8497 15.65 19.4997L15.8 19.3497C15.5 19.1997 15.05 19.1997 14.45 19.1997Z" fill="#0E2B72" />
      <path className={iconColor} d="M30.5 18.9C29.45 17.7 28.55 17.85 27.5 17.7C26.75 17.55 25.85 17.4 25.85 16.65C25.85 15.9 26.75 16.2 27.5 14.85C27.5 14.85 30.65 6 24.2 6C17.6 6.15 20.75 15 20.75 15C21.5 16.2 22.4 16.05 22.4 16.65C22.4 17.4 21.5 17.55 20.75 17.7C19.4 17.85 18.2 17.7 17 19.95C16.4 21.3 15.5 28.65 15.5 28.65H30.5V18.9Z" fill="#0E2B72" />
    </svg>


  )
}



