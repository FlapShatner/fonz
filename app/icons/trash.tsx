import React from 'react'

function Trash({ className = '' }) {
 return (
  <svg
   className={className}
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 48 48'>
   <path
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    d='M20 36a2 2 0 0 0 2-2V22a2 2 0 0 0-4 0v12a2 2 0 0 0 2 2m20-24h-8v-2a6 6 0 0 0-6-6h-4a6 6 0 0 0-6 6v2H8a2 2 0 0 0 0 4h2v22a6 6 0 0 0 6 6h16a6 6 0 0 0 6-6V16h2a2 2 0 0 0 0-4m-20-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h-8zm14 28a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V16h20zm-6-2a2 2 0 0 0 2-2V22a2 2 0 0 0-4 0v12a2 2 0 0 0 2 2'></path>
  </svg>
 )
}

export default Trash
