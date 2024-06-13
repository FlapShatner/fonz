import { client } from '../lib/storefront-api-client'
import { productQuery, productVariantQuery } from '../storefront-api/queries'

export const getProduct = async (handle: string) => {
 const { data, errors, extensions } = await client.request(productQuery, {
  variables: {
   identifiers: [
    { namespace: 'custom', key: 'isgrid' },
    { namespace: 'custom', key: 'aspectratio' },
    { namespace: 'custom', key: 'idcode' },
   ],
   handle: handle,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  console.log('errors:', errors)
  throw new Error(errors.message)
 }
 //  console.log('data:', data)
 return await data.product
}

export const getProductVariant = async (id: string) => {
 const { data, errors, extensions } = await client.request(productVariantQuery, {
  variables: {
   id: id,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  console.log('errors:', errors)
  throw new Error(errors.message)
 }
 //  console.log('data:', data)
 return await data.node
}
