import { client } from '../lib/storefront-api-client'
import { formFactors } from '../data/form-factors'

const productQuery = `
query MyQuery($identifiers: [HasMetafieldsIdentifier!] = {namespace: "custom", key: ""}, $handle: String = "") {
  product(handle: $handle) {
    handle
    title
    options(first:40){
      id
      name
      values
    }
    variants(first: 36) {
      edges {
        node {
          id
          title
          selectedOptions {
            name
            value
          }
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
 console.log('data:', data)
 return await data.product
}
