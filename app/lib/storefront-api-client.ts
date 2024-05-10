import { createStorefrontApiClient } from '@shopify/storefront-api-client'

export const client = createStorefrontApiClient({
 storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN as string,
 publicAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN,
 apiVersion: '2024-04',
})
