'use client'
import React from 'react'

function Bag({ className }: { className: string }) {
 return (
  <svg
   className={className}
   viewBox='0 0 19 22'>
   <g>
    <path
     fill='none'
     stroke='currentColor'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth='1.7px'
     d='m13.51,6.3v-1.45c0-1.06-.42-2.08-1.16-2.83-.74-.75-1.75-1.17-2.81-1.17s-2.06.42-2.81,1.17c-.74.75-1.16,1.77-1.16,2.83v1.45m11.33.24l1.31,12.19c.02.21,0,.43-.05.64s-.16.4-.29.57c-.13.17-.3.31-.49.41-.19.1-.39.17-.6.19H2.48c-.43,0-.84-.17-1.14-.48-.3-.3-.48-.72-.48-1.15,0-.06,0-.12,0-.18l1.32-12.19c0-.07.03-.13.08-.17.05-.04.11-.07.18-.06h14.19c.07,0,.13.02.18.06.05.04.08.11.08.17Z'></path>
   </g>
  </svg>
 )
}

export default Bag
