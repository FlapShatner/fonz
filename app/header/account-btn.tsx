'use client'
import React from 'react'
import Avatar from '../icons/avatar'
import AccountForm from './account-form'
import { useCustomer } from '../hooks/useCustomer'
import { useAtom } from 'jotai'
import { formIsOpenAtom } from '../state/atoms'

function AccountBtn() {
 const [formIsOpen, setFormOpen] = useAtom(formIsOpenAtom)
 const { customer, exists } = useCustomer()

 const handleClick = async () => {
  setFormOpen(!formIsOpen)
 }

 return (
  <>
   <div
    onClick={handleClick}
    className='cursor-pointer'>
    {exists ? <Avatar /> : 'Sign In'}
   </div>
   <AccountForm />
  </>
 )
}

export default AccountBtn
