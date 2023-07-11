import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'

export default function CheckYellow(props) {
    const { iconColor, height, width } = props
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" fill="#FFB400"/>
            <path d="M5 10.5455L7.72727 13.2727L15 6" stroke="white" strokeWidth="1.5"/>
        </svg>
    )
}