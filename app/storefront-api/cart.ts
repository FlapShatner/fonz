import { client } from '../lib/storefront-api-client'
import { createCartMutation } from '../storefront-api/mutations'
import { getCartQuery } from './queries'

type Attribute = {
 key: string
 value: string
}

type CartInput = {
 merchandiseId: string
 quantity: number
 attributes?: Attribute[]
}

export const createCart = async (inputArgs: CartInput) => {
 const inputData = {
  lines: [
   {
    merchandiseId: inputArgs.merchandiseId,
    quantity: inputArgs.quantity,
    attributes: inputArgs.attributes,
   },
  ],
 }

 const { data, errors, extensions } = await client.request(createCartMutation, {
  variables: {
   input: inputData,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 console.log('data:', data)
 return await data.cartCreate.cart
}

export const getCart = async (id: string) => {
 const { data, errors, extensions } = await client.request(getCartQuery, {
  variables: {
   id: id,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 console.log('data:', data)
 return await data.cart
}
