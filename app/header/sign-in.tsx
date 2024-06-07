import React, { useState } from 'react'
import { useCustomer } from '../hooks/useCustomer'
import { useAtom } from 'jotai'
import { formIsOpenAtom } from '../state/atoms'
import { get } from 'http'

function SignIn() {
 const [formIsOpen, setFormOpen] = useAtom(formIsOpenAtom)
 const { getCustomerData, customer } = useCustomer()
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const handleClick = () => {
  getCustomerData({
   email: email,
   password: password,
  })
  setFormOpen(false)
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
    <button
     onClick={handleClick}
     className='px-4 py-2 rounded-md bg-accent font-semibold text-bg-secondary mt-2'>
     Sign In
    </button>
   </form>
  </div>
 )
}

export default SignIn
