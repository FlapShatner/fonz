import React from 'react'

function Home({ className = '' }) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   viewBox='0 0 24 24'
   height='100%'
   className={className}>
   <path
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    d='m20 8-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8zm-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75z'></path>
  </svg>
 )
}

export default Home
