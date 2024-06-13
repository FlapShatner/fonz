import { client } from '../lib/storefront-api-client'
import { createCartMutation, addCartLineMutation, updateCartLineMutation, removeCartLineMutation } from '../storefront-api/mutations'
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

type QuantityInput = {
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
 //  console.log('data:', data)
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
 //  console.log('data:', data)
 return await data.cart
}

export const addCartLine = async (cartId: string, inputArgs: CartInput) => {
 const { data, errors, extensions } = await client.request(addCartLineMutation, {
  variables: {
   cartId: cartId,
   lines: [
    {
     merchandiseId: inputArgs.merchandiseId,
     quantity: inputArgs.quantity,
     attributes: inputArgs.attributes,
    },
   ],
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 //  console.log('data:', data)
 return await data.cartLinesAdd.cart
}

export const updateCartLine = async (cartId: string, lineId: string, inputArgs: QuantityInput) => {
 const { data, errors, extensions } = await client.request(updateCartLineMutation, {
  variables: {
   cartId: cartId,
   lines: [
    {
     id: lineId,
     quantity: inputArgs.quantity,
     attributes: inputArgs.attributes,
    },
   ],
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 //  console.log('data:', data)
 return await data.cartLinesUpdate.cart
}

export const removeCartLine = async (cartId: string, lineId: string) => {
 const { data, errors, extensions } = await client.request(removeCartLineMutation, {
  variables: {
   cartId: cartId,
   lineIds: [lineId],
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  throw new Error(errors.message)
 }
 //  console.log('data:', data)
 return await data.cartLinesRemove.cart
}
