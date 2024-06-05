import React from 'react'

function Add({ className = '' }) {
 return (
  <svg
   className={className}
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 48 48'>
   <path
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    d='M22 22V10h4v12h12v4H26v12h-4V26H10v-4z'></path>
  </svg>
 )
}

export default Add
