import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'



export default function Warning(props) {
    const { iconColor, height, width } = props
    return (
        
        <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={iconColor} d="M50.6666 8H13.3333C11.8605 8 10.6666 9.19391 10.6666 10.6667V27.1063C10.6666 46.7903 27.3977 54.2708 31.2261 55.7249C31.7334 55.9175 32.2665 55.9175 32.7738 55.7249C36.6022 54.2708 53.3333 46.7903 53.3333 27.1063V10.6667C53.3333 9.19391 52.1394 8 50.6666 8Z" stroke="#9FAAC7" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path className={iconColor} d="M36 40C36 42.2091 34.2091 44 32 44C29.7909 44 28 42.2091 28 40C28 37.7909 29.7909 36 32 36C34.2091 36 36 37.7909 36 40Z" fill="#9FAAC7" />
            <path className={iconColor} d="M32 29.333L32 18.6663" stroke="#9FAAC7" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


    )
}



