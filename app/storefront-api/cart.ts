import { client } from '../lib/storefront-api-client'
import { createCartMutation } from '../storefront-api/mutations'
import { getCartQuery } from './queries'

type CartInput = {
 merchandiseId: string
 quantity: number
}

export const createCart = async (input: CartInput) => {
 const inputData = {
  input: {
   lines: [
    {
     merchandiseId: input.merchandiseId,
     quantity: input.quantity,
    },
   ],
   attributes: { key: 'cart_attribute', value: 'This is a cart attribute' },
  },
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
