'use client'
import { useEffect, useState } from 'react'
import { Shop } from '@shopify/hydrogen-react/storefront-api-types'
import { useRouter } from 'next/navigation'
import { reqUrl } from './lib/customerAccess'
import Header from './header'
import FonzApp from './fonz/fonz-app'
export default function Home() {
 const [shop, setShop] = useState<Shop | null>(null)
 const [url, setUrl] = useState<string>('')
 const router = useRouter()

 useEffect(() => {
  const fetchShop = async () => {
   const shop = await fetch('/api/shop')
   const json = await shop.json()
   //    console.log(json)
   setShop(json.data.shop)
  }
  const getUrl = async () => {
   const url = await reqUrl()
   setUrl(url.reqUrl)
   console.log(url)
  }
  getUrl()
  fetchShop()
 }, [])

 return (
  <main className='h-full'>
   <FonzApp />
  </main>
 )
}
