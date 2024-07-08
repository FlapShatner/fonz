'use client'
import { useEffect, useState } from 'react'
import { reqUrl } from './lib/customerAccess'
import { getShop } from './storefront-api/shop'
import FonzApp from './ui/fonz-app'
import { Toaster } from 'react-hot-toast'
import { useAtomsDebugValue } from 'jotai-devtools'
import { useWS } from './hooks/useWS'
import { useAtom } from 'jotai'
import RecsModal from './ui/recs/recs-modal'
import { shopAtom, customerAccessTokenAtom, customerAtom } from './state/atoms'
export default function Home({ params, searchParams }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } }) {
 const [url, setUrl] = useState<string>('')
 const [shop, setShop] = useAtom(shopAtom)
 const [customer, setCustomer] = useAtom(customerAtom)
 const [customerAccessToken, setCustomerAccessToken] = useAtom(customerAccessTokenAtom)
 const { modal } = searchParams
 useWS()
 useEffect(() => {
  const fetchShop = async () => {
   const shop = await getShop()
   setShop(shop)
   //  console.log('shop:', shop)
  }
  const getUrl = async () => {
   const url = await reqUrl()
   setUrl(url.reqUrl)
   //  console.log(url)
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
   <Toaster />
   <FonzApp />
   <DebugAtoms />
   {modal === 'recs' && <RecsModal />}
  </main>
 )
}
