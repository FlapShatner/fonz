import React from 'react'
import Image from 'next/image'

function Logo() {
 return (
  <Image
   src='/img/fonzie-lg-sbtitle.png'
   alt='Fonzie'
   width='175'
   height='50'
   className='mx-auto relative'
  />
 )
}

export default Logo
