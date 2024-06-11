'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useCustomer } from '../../hooks/useCustomer'

function Activate() {
 const [password, setPassword] = useState('')
 const router = useRouter()
 const pathname = usePathname()
 const searchParams = useSearchParams()
 const activationUrl = searchParams.get('activation_url')
 const { activateExistingCustomer } = useCustomer()

 const handleClick = async () => {
  if (activationUrl && password) {
   const customer = await activateExistingCustomer(activationUrl, password)
   if (customer) {
    router.push('/')
   }
  }
 }

 return (
  <div className='w-full h-full flex gap-2 flex-col justify-center items-center'>
   <div className='w-max flex flex-col gap-2'>
    <label>Enter your password to activate your email</label>
    <input
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm'
     type='password'
    />
    <div
     onClick={handleClick}
     className='bg-accent cursor-pointer text-bg-secondary text-center p-1 rounded-md font-semibold'>
     Activate
    </div>
   </div>
  </div>
 )
}

export default Activate
