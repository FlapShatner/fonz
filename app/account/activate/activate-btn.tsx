import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Suspense } from 'react'
import { useCustomer } from '@/app/hooks/useCustomer'

type ActivateBtnProps = {
 password: string
}

function ActivateBtn({ password }: ActivateBtnProps) {
 const { activateExistingCustomer } = useCustomer()

 const router = useRouter()
 const pathname = usePathname()
 const searchParams = useSearchParams()
 const activationUrl = searchParams.get('activation_url')

 const handleClick = async () => {
  if (activationUrl && password) {
   const customer = await activateExistingCustomer(activationUrl, password)
   if (customer) {
    router.push('/')
   }
  }
 }
 return (
  <div
   onClick={handleClick}
   className='bg-accent cursor-pointer text-bg-secondary text-center p-1 rounded-md font-semibold'>
   Activate
  </div>
 )
}

export default ActivateBtn
