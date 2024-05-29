import React from 'react'

function CloseX({ className = '' }) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 512 512'
   className={className}>
   <path
    fill='currentColor'
    d='m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z'></path>
  </svg>
 )
}

export default CloseX
