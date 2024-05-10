import { client } from '../lib/storefront-api-client'

const productHandle = process.env.NEXT_PUBLIC_PRODUCT_HANDLE

const productQuery = `
query MyQuery($identifiers: [HasMetafieldsIdentifier!] = {namespace: "custom", key: ""}, $handle: String = "ai-designed-custom-decal") {
    product(handle: $handle) {
      handle
      title
      variants(first: 40) {
        edges {
          node {
            id
            title
            price {
              amount
            }
            metafields(identifiers: $identifiers) {
              id
              key
              value
            }
          }
        }
      }
      id
    }
  }
`

export const getProduct = async () => {
 const { data, errors, extensions } = await client.request(productQuery, {
  variables: {
   identifiers: [
    { namespace: 'custom', key: 'isgrid' },
    { namespace: 'custom', key: 'aspectratio' },
    { namespace: 'custom', key: 'idcode' },
   ],
   handle: productHandle,
  },
  apiVersion: '2024-04',
 })

 if (errors) {
  console.log('errors:', errors)
  throw new Error(errors.message)
 }
 console.log('data:', data)
 return await data.product
}
