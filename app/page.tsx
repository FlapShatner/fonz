'use client'
import { useState } from 'react'
import { client } from './lib/shopify-client'

export default function Home() {
 const [products, setProducts] = useState([])
 const getProducts = async () => {}
 return (
  <main className='flex min-h-screen flex-col items-center justify-between p-24'>
   <h1 className='text-4xl font-bold'>HEYO!</h1>
   <div
    onClick={getProducts}
    className='p-2 border border-border cursor-pointer'>
    get 10 Products
   </div>
  </main>
 )
}
