import React from 'react'

export default function DropdownArrow(props) {
  const { iconColor, height, width } = props
  return (
    <svg width={width} height={height} viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={iconColor} d="M1 1L5.5 5.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}



