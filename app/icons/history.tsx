import React from 'react'

function HistoryIcon({ className = '' }) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 48 48'
   className={className}>
   <path
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    fillRule='evenodd'
    d='M10.228 12H16v4H4V3.982h4v4.53C12.474 3.822 17.574 2 24 2c12.15 0 22 9.85 22 22s-9.85 22-22 22S2 36.15 2 24h4A18 18 0 1 0 24 6c-5.68 0-9.91 1.582-13.772 6M26 22h8v4H22V12h4z'></path>
  </svg>
 )
}

export default HistoryIcon
