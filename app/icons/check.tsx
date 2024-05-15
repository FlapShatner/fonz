import React from 'react'

function Check({ className = '' }) {
 return (
  <div className={className}>
   <svg
    fill='none'
    height='16'
    width='16'
    shapeRendering='geometricPrecision'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='4'
    viewBox='0 0 24 24'>
    <path d='M20 6L9 17l-5-5'></path>
   </svg>
  </div>
 )
}

export default Check
