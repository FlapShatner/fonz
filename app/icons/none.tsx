import React from 'react'

function NoneIcon({ className = '' }) {
 return (
  <svg
   className={className}
   width='20'
   height='20'
   viewBox='0 0 20 20'
   fill='none'
   xmlns='http://www.w3.org/2000/svg'>
   <path
    d='M16.0416 10.0026C16.0416 13.3394 13.3367 16.0443 9.99988 16.0443C6.6632 16.0443 3.95825 13.3394 3.95825 10.0026C3.95825 6.66589 6.6632 3.96094 9.99988 3.96094C13.3367 3.96094 16.0416 6.66589 16.0416 10.0026Z'
    stroke='currentColor'
    strokeWidth='1.25'
    strokeLinecap='round'
    strokeLinejoin='round'></path>
   <path
    d='M5.83325 5.83594L14.1666 14.1693'
    stroke='currentColor'
    strokeWidth='1.25'
    strokeLinecap='round'
    strokeLinejoin='round'></path>
  </svg>
 )
}

export default NoneIcon
