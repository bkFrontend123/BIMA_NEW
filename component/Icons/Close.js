import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'

export default function Close(props) {
    const { iconColor, height, width } = props
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={iconColor} d="M12 0.625C5.6625 0.625 0.625 5.6625 0.625 12C0.625 18.3375 5.6625 23.375 12 23.375C18.3375 23.375 23.375 18.3375 23.375 12C23.375 5.6625 18.3375 0.625 12 0.625ZM12 21.75C6.6375 21.75 2.25 17.3625 2.25 12C2.25 6.6375 6.6375 2.25 12 2.25C17.3625 2.25 21.75 6.6375 21.75 12C21.75 17.3625 17.3625 21.75 12 21.75Z" fill="currentColor"/>
            <path className={iconColor} d="M16.3875 17.6875L12 13.3L7.6125 17.6875L6.3125 16.3875L10.7 12L6.3125 7.6125L7.6125 6.3125L12 10.7L16.3875 6.3125L17.6875 7.6125L13.3 12L17.6875 16.3875L16.3875 17.6875Z" fill="currentColor"/>
        </svg>
              
    )
}