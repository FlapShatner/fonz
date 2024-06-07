import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useCustomer } from '../hooks/useCustomer'
import SignIn from './sign-in'
import { useAtom } from 'jotai'
import { formIsOpenAtom } from '../state/atoms'

function AccountForm() {
 const [formIsOpen, setFormOpen] = useAtom(formIsOpenAtom)
 const { customer, exists } = useCustomer()
 const ref = useRef(null)
 useOnClickOutside(ref, () => {
  setFormOpen(false)
 })
 return (
  <>
   {formIsOpen && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
     <div
      ref={ref}
      className='flex flex-col gap-2 bg-bg-secondary text-white p-4 rounded-md'>
      <SignIn />
     </div>
    </dialog>
   )}
  </>
 )
}

export default AccountForm
