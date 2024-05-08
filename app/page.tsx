'use client'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { Shop } from '@shopify/hydrogen-react/storefront-api-types'
import { useRouter } from 'next/navigation'
import { reqUrl } from './lib/auth'
export default function Home() {
 const [codeVerifier, setCodeVerifier] = useLocalStorage('code_verifier', '')
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
   setCodeVerifier(url.verifier)
   console.log(url)
  }
  getUrl()
  fetchShop()
 }, [])

 return (
  <main className='flex min-h-screen flex-col items-center justify-between p-24'>
   <h1 className='text-4xl font-bold'>HEYO!</h1>
   <div onClick={() => router.push(url)}>Sign in</div>
   <div className='p-2 border border-border'>{shop && shop.name}</div>
  </main>
 )
}
