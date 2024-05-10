'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { reqUrl } from './lib/customerAccess'
import { getShop } from './storefront-api/shop'
import { getProduct } from './storefront-api/product'
import { DevTools } from 'jotai-devtools'
import FonzApp from './fonz/fonz-app'
import { useAtom } from 'jotai'
import { productAtom } from './state/product-atoms'
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
  const fetchProduct = async () => {
   const product = await getProduct()
   setProduct(product)
   console.log('product:', product)
  }
  fetchProduct()
  getUrl()
  fetchShop()
 }, [])

 return (
  <main className='h-full'>
   <DevTools />
   <FonzApp />
  </main>
 )
}
