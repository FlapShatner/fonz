import React from 'react'

function Info({ className = '' }) {
 return (
  <svg
   className={className}
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 48 48'>
   <g
    xmlns='http://www.w3.org/2000/svg'
    fill='none'>
    <path
     stroke='currentColor'
     strokeLinejoin='round'
     strokeWidth='4'
     d='M24 44a19.94 19.94 0 0014.142-5.858A19.94 19.94 0 0044 24a19.94 19.94 0 00-5.858-14.142A19.94 19.94 0 0024 4 19.94 19.94 0 009.858 9.858 19.94 19.94 0 004 24a19.94 19.94 0 005.858 14.142A19.94 19.94 0 0024 44z'></path>
    <path
     fill='currentColor'
     fill-rule='evenodd'
     d='M24 11a2.5 2.5 0 110 5 2.5 2.5 0 010-5'
     clipRule='evenodd'></path>
    <path
     stroke='currentColor'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth='4'
     d='M24.5 34V20h-2M21 34h7'></path>
   </g>
  </svg>
 )
}

export default Info
