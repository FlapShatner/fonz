'use server'
import { cookies } from 'next/headers'
import { Customer } from '../types/customer-types'
export const getCustomer = async () => {
 const customerEndpoint = process.env.NEXT_PUBLIC_CUSTOMER_ENDPOINT as string
 const accessToken = cookies().get('customerAccessToken')
 const token = accessToken && accessToken.value
 //  console.log('accessToken:', accessToken)
 const response = await fetch(customerEndpoint, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Authorization: String(token),
  },
  body: JSON.stringify({
   query: `query { customer { emailAddress { emailAddress, marketingState }, displayName}}`,
   variables: {},
  }),
 })
 //  console.log('response:', response)
 const json = await response.json()
 const data = json.data as { customer: Customer }
 //  console.log('data:', json.data)
 if (response.status !== 200) {
  return { status: 'error' }
 }
 return { data: data, status: 'success' }
}
