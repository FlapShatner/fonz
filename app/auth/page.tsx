'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getToken, exchangeToken } from '../actions/token'
import { getCustomer } from '../actions/customer'
import Loading from '../common/loading'
import { Customer } from '../types/customer-types'

function Auth() {
 const [customer, setCustomer] = useState<Customer>()
 const [loading, setLoading] = useState(true)
 const searchParams = useSearchParams()
 const code = searchParams.get('code')

 console.log('code', code)
 useEffect(() => {
  setLoading(true)
  if (code) {
   const sendReq = async () => {
    const data = await getToken(code)
    if (data.status === 'success') {
     const result = await exchangeToken()
     if (result.status === 'success') {
      const customer = await getCustomer()
      if (customer.status === 'success') {
       console.log('customer success')
       setCustomer(customer.data?.customer as Customer)
       setLoading(false)
      }
     }
    }
   }
   sendReq()
  }
 }, [])

 return <div className='flex justify-center items-center h-96 w-full m-auto'>{loading ? <Loading /> : customer && `Signed in as ${customer.displayName}`}</div>
}

export default Auth
