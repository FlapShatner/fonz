'use client'
import { useEffect, useState } from 'react'
import { reqUrl } from './lib/customerAccess'
import { getShop } from './storefront-api/shop'
import { getProduct } from './storefront-api/products'
import FonzApp from './ui/fonz-app'
import { useAtom } from 'jotai'
import { useAtomsDebugValue } from 'jotai-devtools'
import { productAtom } from './state/product-atoms'
import Link from 'next/link'
export default function Home() {
 const [product, setProduct] = useAtom(productAtom)
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

 return (
  <main className='h-app'>
   <FonzApp />
   {/* <Link
    className='absolute left-5 bottom-5 border border-border'
    href='/viewer'>
    Viewer
   </Link> */}
  </main>
 )
}
