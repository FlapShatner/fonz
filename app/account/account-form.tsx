'use client'
import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useCustomer } from '../hooks/useCustomer'
import SignIn from './sign-in'
import SentVerify from './sent-ver'
import SignUp from './sign-up'
import { useAtom } from 'jotai'
import { formIsOpenAtom, formTypeAtom, sentVerificationAtom } from '../state/atoms'
import SignOut from './sign-out'

function AccountForm() {
 const [sentVerification, setSentVerification] = useAtom(sentVerificationAtom)
 const router = useRouter()
 const searchParams = useSearchParams()
 const acct = searchParams.get('modal') == 'account'
 const formType = searchParams.get('formType')
 const pathname = usePathname()
 const ref = useRef(null)
 useOnClickOutside(ref, () => {
  router.push(pathname)
 })
 return (
  <>
   {acct && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
     <div
      ref={ref}
      className='flex flex-col gap-2 bg-bg-secondary text-white p-4 rounded-md'>
      {formType === 'signIn' ? <SignIn /> : formType === 'verify' ? <SentVerify /> : formType === 'signOut' ? <SignOut /> : <SignUp />}
     </div>
    </dialog>
   )}
  </>
 )
}

export default AccountForm
