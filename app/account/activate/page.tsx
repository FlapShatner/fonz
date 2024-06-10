'use client'
import React, { useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

function Activate() {
 const router = useRouter()
 const pathname = usePathname()
 const searchParams = useSearchParams()
 const activationUrl = searchParams.get('activation_url')

 const handleClick = () => {
  // call activation endpoint
 }

 return (
  <div className='w-full h-full flex gap-2 flex-col justify-center items-center'>
   <div className='w-max flex flex-col gap-2'>
    <label>Enter your password to activate your email</label>
    <input
     className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm'
     type='password'
    />
    <div
     onClick={handleClick}
     className='bg-accent text-bg-secondary p-1 rounded-md font-semibold'>
     Activate
    </div>
   </div>
  </div>
 )
}

export default Activate
