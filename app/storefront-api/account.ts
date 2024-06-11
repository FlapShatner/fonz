import { getCustomer } from './customer'

export const getCurrentCustomerData = async (token: string) => {
 try {
  const customerData = await getCustomer(token)
  console.log('customer:', customerData)
  return customerData
 } catch (error) {
  console.log('error:', error)
 }
}
