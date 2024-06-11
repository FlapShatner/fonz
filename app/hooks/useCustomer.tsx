import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { getCurrentCustomerData } from '../storefront-api/account'
import { createCustomerAccessToken, createCustomer, activateCustomer } from '../storefront-api/customer'
import { customerAccessTokenAtom, customerAtom, customerErrorAtom } from '../state/atoms'
import type { NewCustomer } from '../state/atoms'

export function useCustomer() {
 const [customer, setCustomer] = useAtom(customerAtom)
 const [customerAccessToken, setCustomerAccessToken] = useAtom(customerAccessTokenAtom)

 const getCustomerTokenAndData = async (creds: { email: string; password: string }) => {
  try {
   const tokenObj = await createCustomerAccessToken(creds)
   const token = tokenObj.customerAccessToken
   setCustomerAccessToken({ accessToken: token.accessToken, expiresAt: token.expiresAt })
   if (tokenObj.customerUserErrors.length > 0) {
    if (tokenObj.customerUserErrors[0].code === 'UNIDENTIFIED_CUSTOMER') {
     console.log('customer not found')
    }
    return { error: true, message: tokenObj.customerUserErrors[0].message, code: tokenObj.customerUserErrors[0].code }
   }
   const customerData = await getCurrentCustomerData(token.accessToken)
   console.log('customer:', customerData)
   setCustomer(customerData)
   return customerData
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
   return newCustomer
  } catch (error) {
   console.log('error:', error)
  }
  return
 }

 const activateExistingCustomer = async (activationUrl: string, password: string) => {
  try {
   const customer = await activateCustomer(activationUrl, password)
   console.log('customer:', customer)
   return customer
  } catch (error) {
   console.log('error:', error)
  }
 }

 return { getCurrentCustomerData, getCustomerTokenAndData, createNewCustomer, activateExistingCustomer }
}
