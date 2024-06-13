import React, { useState } from 'react'
import { useCustomer } from '../hooks/useCustomer'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

function SignIn() {
 const { getCustomerTokenAndData } = useCustomer()
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const router = useRouter()
 const pathname = usePathname()

 const handleSignIn = async () => {
  const result = await getCustomerTokenAndData({
   email: email,
   password: password,
  })
  // console.log('result:', result)
  if (result && result.error) {
   if (result.code === 'UNIDENTIFIED_CUSTOMER') {
    alert('Customer not found')
   }
  }
  router.push(pathname)
 }

 const handleGoToSignUp = () => {
  router.push('?modal=account&formType=signUp')
 }

 return (
  <div>
   <form className='flex flex-col gap-2'>
    <div className='flex flex-col'>
     <label htmlFor='email'>Email</label>
     <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm '
      type='email'
      name='email'
      id='email'
     />
    </div>
    <div className='flex flex-col'>
     <label htmlFor='password'>Password</label>
     <input
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm '
      type='password'
      name='password'
      id='password'
     />
    </div>
    <div
     onClick={handleSignIn}
     className='cursor-pointer px-4 py-2 text-center rounded-md bg-accent font-semibold text-bg-secondary mt-2'>
     Sign In
    </div>
    <div
     onClick={handleGoToSignUp}
     className='cursor-pointer text-white underline text-center mt-4'>
     Sign up instead
    </div>
   </form>
  </div>
 )
}

export default SignIn
