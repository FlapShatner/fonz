'use client'
import React, { useState, Suspense } from 'react'
import ActivateBtn from './activate-btn'

function Activate() {
 const [password, setPassword] = useState('')

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
    <Suspense fallback={<div>Activating...</div>}>
     <ActivateBtn password={password} />
    </Suspense>
   </div>
  </div>
 )
}

export default Activate
