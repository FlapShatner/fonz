import { createStorefrontApiClient } from '@shopify/storefront-api-client'

const client = createStorefrontApiClient({
 storeDomain: process.env.PUBLIC_STORE_DOMAIN as string,
 publicAccessToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
 apiVersion: '2024-04',
})
