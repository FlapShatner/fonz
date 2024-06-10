import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { getCustomer, createCustomerAccessToken, createCustomer } from '../storefront-api/customer'
import { customerAccessTokenAtom, customerAtom, customerErrorAtom } from '../state/atoms'
import type { NewCustomer } from '../state/atoms'

export function useCustomer() {
 const [customer, setCustomer] = useAtom(customerAtom)
 const [customerAccessToken, setCustomerAccessToken] = useAtom(customerAccessTokenAtom)

 const getCustomerTokenAndData = async (creds: { email: string; password: string }) => {
  try {
   const token = await createCustomerAccessToken(creds)
   setCustomerAccessToken(token.accessToken)
   if (token.customerUserErrors.length > 0) {
    if (token.customerUserErrors[0].code === 'UNIDENTIFIED_CUSTOMER') {
     console.log('customer not found')
    }
    return { error: true, message: token.customerUserErrors[0].message, code: token.customerUserErrors[0].code }
   }
   const customerData = await getCustomer(token.accessToken)
   setCustomer(customerData)
   console.log('customer:', customerData)
  } catch (error) {
   console.log('error:', error)
  }
 }

 const getCurrentCustomerData = async (token: string) => {
  try {
   const customerData = await getCustomer(token)
   setCustomer(customerData)
   console.log('customer:', customerData)
  } catch (error) {
   console.log('error:', error)
  }
 }

 const createNewCustomer = async (customerData: NewCustomer) => {
  try {
   const newCustomer = await createCustomer(customerData)
   if (newCustomer.customerUserErrors.length > 0) {
    if (newCustomer.customerUserErrors[0].code === 'CUSTOMER_DISABLED') {
     return { error: false, message: newCustomer.customerUserErrors[0].message, code: newCustomer.customerUserErrors[0].code }
    }
   }
   setCustomer(newCustomer)
   console.log('new customer:', newCustomer)
  } catch (error) {
   console.log('error:', error)
  }
  return
 }

 const exists = customer.id !== ''

 return { customer, exists, getCurrentCustomerData, getCustomerTokenAndData, createNewCustomer }
}
