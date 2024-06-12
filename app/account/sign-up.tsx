import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useCustomer } from '../hooks/useCustomer'
import { formTypeAtom, newCustomerAtom, sentVerificationAtom } from '../state/atoms'

function SignUp() {
 const [formError, setFormError] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [confirmPassword, setConfirmPassword] = useState('')
 const [phone, setPhone] = useState('')
 const [consent, setConsent] = useState(false)
 const [isLoading, setIsLoading] = useState(false)
 const [sentVerification, setSentVerification] = useAtom(sentVerificationAtom)
 const [name, setName] = useState({
  firstName: '',
  lastName: '',
 })
 const { createNewCustomer, getCustomerTokenAndData } = useCustomer()
 const router = useRouter()
 const pathname = usePathname()

 const verifyPassword = () => {
  if (password !== confirmPassword) {
   setFormError(formErrors.PASSWORDS)
   return false
  }
  return true
 }

 const handleClick = async () => {
  setIsLoading(true)
  const verified = verifyPassword()
  if (!verified) {
   setIsLoading(false)
   return
  }
  if (!email || !password) {
   alert('Email and password are required')
   setIsLoading(false)
   return
  }

  type NewCustomer = {
   email: string
   password: string
   firstName?: string
   lastName?: string
   phone?: string
   acceptsMarketing: boolean
  }

  let newCustomer: NewCustomer = {
   email,
   password,
   acceptsMarketing: consent,
  }
  if (name.firstName) {
   newCustomer.firstName = name.firstName
  }
  if (name.lastName) {
   newCustomer.lastName = name.lastName
  }
  if (phone !== '') {
   newCustomer.phone = phone
  }

  const result = await createNewCustomer(newCustomer)
  if (result) {
   setIsLoading(false)
   if (result.customer?.id !== '') {
    const creds = { email, password }
    const customerData = await getCustomerTokenAndData(creds)
    if (customerData) {
     router.push('/')
    }
   }
   if (result.code === 'CUSTOMER_DISABLED') {
    setSentVerification({ sent: true, message: result.message })
    router.push('?modal=account&formType=verify')
   }
   if (result.code === 'TAKEN') {
    setFormError(formErrors.TAKEN)
   }
  }
 }

 const formErrors = {
  TAKEN: 'Email is already associated with an account, please sign in or use a different email address.',
  PASSWORDS: 'Passwords do not match.',
 }

 const handleGoToSignIn = () => {
  router.push('?modal=account&formType=signIn')
 }

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormError('')
  const { name, value } = e.target
  switch (name) {
   case 'email':
    setEmail(value)
    break
   case 'password':
    setPassword(value)
    break
   case 'confirmPassword':
    setConfirmPassword(value)
    break
   case 'phone':
    setPhone(value)
    break
   default:
    break
  }
 }

 return (
  <div>
   <div className='flex flex-col gap-2 min-w-[50vw]'>
    <div>{formError}</div>
    <div className='flex flex-col'>
     <label htmlFor='email'>
      Email<span className='text-red-500'>*</span>
     </label>
     <input
      onChange={handleInputChange}
      value={email}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm '
      type='email'
      name='email'
      id='email'
     />
    </div>
    <div className='flex flex-col'>
     <label htmlFor='password'>
      Password<span className='text-red-500'>*</span>
     </label>
     <input
      onChange={handleInputChange}
      value={password}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm '
      type='password'
      name='password'
      id='password'
     />
    </div>
    <div className='flex flex-col'>
     <label htmlFor='confirmPassword'>
      Confirm Password<span className='text-red-500'>*</span>
     </label>
     <input
      onChange={handleInputChange}
      value={confirmPassword}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm '
      type='password'
      name='confirmPassword'
      id='confirmPassword'
     />
    </div>
    <div className='flex flex-col'>
     <label htmlFor='firstName'>First Name</label>
     <input
      onChange={(e) => setName({ ...name, firstName: e.target.value })}
      value={name.firstName}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm '
      type='text'
      name='firstName'
      id='firstName'
     />
    </div>
    <div className='flex flex-col'>
     <label htmlFor='lastName'>Last Name</label>
     <input
      onChange={(e) => setName({ ...name, lastName: e.target.value })}
      value={name.lastName}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm '
      type='text'
      name='lastName'
      id='lastName'
     />
    </div>
    {/* Format phone to  +16135551111. */}
    <div className='flex flex-col'>
     <label htmlFor='phone'>Phone #</label>
     <input
      onChange={handleInputChange}
      value={phone}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm '
      type='text'
      name='phone'
      id='phone'
     />
    </div>
    <div className='flex gap-4 justify-center '>
     <input
      onChange={() => setConsent(!consent)}
      value={consent ? 'checked' : 'unchecked'}
      checked={consent}
      className='bg-bg-tertiary border border-txt-secondary rounded-md p-1 text-sm cursor-pointer '
      type='checkbox'
      name='consent'
      id='consent'
     />
     <label htmlFor='consent'>I want to receive emails from Ink Monkey LLC</label>
    </div>
    <div
     onClick={handleClick}
     className='px-4 py-2 cursor-pointer rounded-md bg-accent font-semibold text-bg-secondary text-center mt-2'>
     Sign Up
    </div>
    <div
     onClick={handleGoToSignIn}
     className='cursor-pointer text-white underline text-center mt-4'>
     Sign in instead
    </div>
   </div>
  </div>
 )
}

export default SignUp
