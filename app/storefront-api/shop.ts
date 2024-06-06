import { client } from '../lib/storefront-api-client'

const shopQuery = `
 query ShopQuery {
  shop {
    id
    name
    primaryDomain {
      url
    }
  }
}
`

export const getShop = async () => {
 const { data, errors, extensions } = await client.request(shopQuery)
 if (errors) {
  throw new Error(errors.message)
 }
 console.log('data:', data)
 return await data.shop
}
