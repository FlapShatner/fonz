'use client'
import React, { use, useEffect } from 'react'
import Avatar from '../icons/avatar'
import { useRouter } from 'next/navigation'
import { isValidExpiry } from '../utils'
import { useCustomer } from '../hooks/useCustomer'
import { useAtom } from 'jotai'
import { formIsOpenAtom, customerAtom, customerAccessTokenAtom } from '../state/atoms'
import { access } from 'fs'

function AccountBtn() {
 const [customer] = useAtom(customerAtom)
 const router = useRouter()
 const signedIn = customer && customer.id !== ''

 const handleClick = () => {
  if (signedIn) {
   router.push('?modal=account&formType=signOut')
   return
  }
  router.push('?modal=account&formType=signIn')
 }

 return (
  <>
   <div
    onClick={handleClick}
    className='cursor-pointer'>
    {signedIn ? <Avatar className='w-6 h-6 text-accent' /> : <span className='text-accent'>Sign In</span>}
   </div>
  </>
 )
}

export default AccountBtn
