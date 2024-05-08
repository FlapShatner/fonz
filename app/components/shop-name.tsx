'use client'
import React from 'react'
import { Shop } from '@shopify/hydrogen-react/storefront-api-types'

function ShopName({ shop }: { shop: Shop }) {
 return <div className='p-2 border border-border'>{shop && shop.name}</div>
}

export default ShopName
