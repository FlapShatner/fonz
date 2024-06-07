import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { getCustomer, createCustomerAccessToken } from '../storefront-api/customer'
import { customerAccessTokenAtom, customerAtom } from '../state/atoms'

export function useCustomer() {
 const [customer, setCustomer] = useAtom(customerAtom)
 const [customerAccessToken, setCustomerAccessToken] = useAtom(customerAccessTokenAtom)

 const getCustomerData = async (creds: { email: string; password: string }) => {
  try {
   const token = await createCustomerAccessToken(creds)
   setCustomerAccessToken(token.accessToken)
   const customerData = await getCustomer(token.accessToken)
   setCustomer(customerData)
   console.log('customer:', customerData)
  } catch (error) {
   console.log('error:', error)
  }
 }

 useEffect(() => {
  if (customer.id === '') {
   if (customerAccessToken === '') {
    console.log('no customer or token')
    return
   }
   const getCustomerData = async () => {
    try {
     const customerData = await getCustomer(customerAccessToken)
     setCustomer(customerData)
     console.log('customer:', customerData)
    } catch (error) {
     console.log('error:', error)
    }
   }
   getCustomerData()
   return
  }
 }, [customer, customerAccessToken])

 const exists = customer.id !== ''

 return { customer, exists, getCustomerData }
}
