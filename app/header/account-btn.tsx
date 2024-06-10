'use client'
import React from 'react'
import Avatar from '../icons/avatar'
import { useRouter } from 'next/navigation'
import AccountForm from '../account/account-form'
import { useCustomer } from '../hooks/useCustomer'
import { useAtom } from 'jotai'
import { formIsOpenAtom } from '../state/atoms'

function AccountBtn() {
 const { customer, exists } = useCustomer()
 const router = useRouter()

 const handleClick = () => {
  router.push('?modal=account&formType=signIn')
 }

 return (
  <>
   <div
    onClick={handleClick}
    className='cursor-pointer'>
    {exists ? <Avatar /> : 'Sign In'}
   </div>
  </>
 )
}

export default AccountBtn
