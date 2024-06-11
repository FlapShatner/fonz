import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { customerAtom, customerAccessTokenAtom, customerDefault } from '../state/atoms'

function SignOut() {
 const [customer, setCustomer] = useAtom(customerAtom)
 const [, setCustomerAccessToken] = useAtom(customerAccessTokenAtom)
 const router = useRouter()
 const pathname = usePathname()
 const handleClick = () => {
  setCustomer(customerDefault)
  setCustomerAccessToken({ accessToken: '', expiresAt: '' })
  router.push(pathname)
 }
 return (
  <div className='flex flex-col gap-2'>
   {customer && customer.id !== '' ? <div className='text-center'>Signed in as {customer.email}</div> : <div className='text-center'>Signed Out</div>}
   <div
    onClick={handleClick}
    className='px-4 py-2 cursor-pointer rounded-md bg-accent font-semibold text-bg-secondary text-center mt-2'>
    Sign Out
   </div>
  </div>
 )
}

export default SignOut
