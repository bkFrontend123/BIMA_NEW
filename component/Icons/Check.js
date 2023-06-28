import React from 'react'
// import '../icons/style.css'
// import '../../../assets/css/icons.css'

export default function Check(props) {
    const { iconColor, height, width } = props
    return (
        <svg width={width} height={height} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={iconColor} d="M16.2803 8.78033C16.5732 8.48744 16.5732 8.01256 16.2803 7.71967C15.9874 7.42678 15.5126 7.42678 15.2197 7.71967L9.25 13.6893L6.78033 11.2197C6.48744 10.9268 6.01256 10.9268 5.71967 11.2197C5.42678 11.5126 5.42678 11.9874 5.71967 12.2803L8.71967 15.2803C9.01256 15.5732 9.48744 15.5732 9.78033 15.2803L16.2803 8.78033Z" fill="currentColor"/>
            <path className={iconColor}  fillRule="evenodd" clipRule="evenodd" d="M11 0.5C4.92487 0.5 0 5.42487 0 11.5C0 17.5751 4.92487 22.5 11 22.5C17.0751 22.5 22 17.5751 22 11.5C22 5.42487 17.0751 0.5 11 0.5ZM1.5 11.5C1.5 6.25329 5.75329 2 11 2C16.2467 2 20.5 6.25329 20.5 11.5C20.5 16.7467 16.2467 21 11 21C5.75329 21 1.5 16.7467 1.5 11.5Z" fill="currentColor"/>
        </svg>
              
    )
}