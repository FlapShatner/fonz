import { client } from '../lib/storefront-api-client'
import { customerAccessTokenCreateMutation, customerCreateMutation } from './mutations'
import { getCustomerQuery } from './queries'

type CustomerAccessTokenCreateInput = {
 email: string
 password: string
}

type CustomerCreateInput = {
 email: string
 firstName: string
 id: string
 lastName: string
 acceptsMarketing: boolean
 displayName: string
}

export const createCustomerAccessToken = async (inputArgs: CustomerAccessTokenCreateInput) => {
 const { data, errors, extensions } = await client.request(customerAccessTokenCreateMutation, {
  variables: {
   inputArgs,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 console.log('data:', data)
 return await data.customerAccessTokenCreate
}

export const createCustomer = async (inputArgs: CustomerCreateInput) => {
 const { data, errors, extensions } = await client.request(customerCreateMutation, {
  variables: {
   inputArgs,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 console.log('data:', data)
 return await data.customerCreate
}

export const getCustomer = async (customerAccessToken: string) => {
 const { data, errors, extensions } = await client.request(getCustomerQuery, {
  variables: {
   customerAccessToken: customerAccessToken,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 console.log('data:', data)
 return await data.cart
}
