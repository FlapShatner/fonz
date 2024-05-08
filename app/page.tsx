'use client'
import { useEffect, useState } from 'react'
import { Shop } from '@shopify/hydrogen-react/storefront-api-types'

export default function Home() {
 const [shop, setShop] = useState<Shop | null>(null)

 useEffect(() => {
  const fetchShop = async () => {
   const shop = await fetch('/api/shop')
   const json = await shop.json()
   console.log(json)
   setShop(json.data.shop)
  }
  fetchShop()
 }, [])

 return (
  <main className='flex min-h-screen flex-col items-center justify-between p-24'>
   <h1 className='text-4xl font-bold'>HEYO!</h1>
   <div className='p-2 border border-border'>{shop && shop.name}</div>
  </main>
 )
}
