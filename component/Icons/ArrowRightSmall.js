
import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'



export default function ArrowRightSmall(props) {
    const { iconColor, height, width, customClass, Style } = props
    return (

        <svg width={width} height={height} className={customClass} style={{Style}}  viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={iconColor} fillRule="evenodd" clipRule="evenodd" d="M10.2197 14.2803C10.5126 14.5732 10.9874 14.5732 11.2803 14.2803L17.5303 8.03033C17.8232 7.73744 17.8232 7.26256 17.5303 6.96967L11.2803 0.71967C10.9874 0.426777 10.5126 0.426777 10.2197 0.71967C9.92678 1.01256 9.92678 1.48744 10.2197 1.78033L15.1893 6.75L0.75 6.75C0.335786 6.75 0 7.08579 0 7.5C0 7.91421 0.335786 8.25 0.75 8.25L15.1893 8.25L10.2197 13.2197C9.92678 13.5126 9.92678 13.9874 10.2197 14.2803Z" fill="#191308" />
        </svg>
    )
}



