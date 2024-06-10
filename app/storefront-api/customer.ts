import { client } from '../lib/storefront-api-client'
import { customerAccessTokenCreateMutation, customerActivateMutation, customerCreateMutation } from './mutations'
import { getCustomerQuery } from './queries'

type CustomerAccessTokenCreateInput = {
 email: string
 password: string
}

export type CustomerCreateInput = {
 email: string
 password: string
 firstName?: string
 lastName?: string
 acceptsMarketing?: boolean
}

export const createCustomerAccessToken = async (inputArgs: CustomerAccessTokenCreateInput) => {
 const { data, errors, extensions } = await client.request(customerAccessTokenCreateMutation, {
  variables: {
   input: {
    email: inputArgs.email,
    password: inputArgs.password,
   },
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
  variables: { input: inputArgs },
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

export const activateCustomer = async (activationUrl: string, password: string) => {
 const { data, errors, extensions } = await client.request(customerActivateMutation, {
  variables: {
   activationUrl: activationUrl,
   password: password,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 console.log('data:', data)
 return await data.customerActivateByUrl
}
