import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'



export default function subscribeArrow(props) {
    const { iconColor, height, width } = props
    return (

    <svg width={width} height={height} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={iconColor} d="M0 7L19 7" stroke={iconColor} strokeWidth="1.6" strokeLinejoin="bevel" />
        <path className={iconColor} d="M12.6211 1L19.0011 7.37L13.0011 13.37" stroke={iconColor} strokeWidth="1.6" strokeLinejoin="bevel" />
    </svg>

    )
}



