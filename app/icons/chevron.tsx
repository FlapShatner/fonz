import React from 'react'

function Chevron({ className = '' }) {
 return (
  <svg
   className={className}
   xmlns='http://www.w3.org/2000/svg'
   width='7'
   height='13'
   viewBox='0 0 7 13'>
   <path
    fill='currentColor'
    d='M6.60478 0.895085C6.30066 0.590961 5.81034 0.590961 5.50622 0.895085L0.348535 6.05277C0.106478 6.29482 0.106478 6.68584 0.348535 6.9279L5.50622 12.0856C5.81034 12.3897 6.30066 12.3897 6.60478 12.0856C6.90891 11.7815 6.90891 11.2911 6.60478 10.987L2.11121 6.48723L6.61099 1.98745C6.90891 1.68953 6.90891 1.193 6.60478 0.895085Z'
   />
  </svg>
 )
}

export default Chevron
