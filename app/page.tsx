'use client'
import { useEffect, useState } from 'react'
import { reqUrl } from './lib/customerAccess'
import { getShop } from './storefront-api/shop'
import FonzApp from './ui/fonz-app'
import { useAtomsDebugValue } from 'jotai-devtools'
export default function Home() {
 const [shop, setShop] = useState(null)
 const [url, setUrl] = useState<string>('')

 useEffect(() => {
  const fetchShop = async () => {
   const shop = await getShop()
   setShop(shop)
   console.log('shop:', shop)
  }
  const getUrl = async () => {
   const url = await reqUrl()
   setUrl(url.reqUrl)
   console.log(url)
  }
  getUrl()
  fetchShop()
 }, [])

 const DebugAtoms = () => {
  useAtomsDebugValue()
  return null
 }

 return (
  <main className='h-app'>
   <FonzApp />
   <DebugAtoms />
  </main>
 )
}
