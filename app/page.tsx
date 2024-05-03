'use client'
import { useState } from 'react'

export default function Home() {
 const [products, setProducts] = useState([])
 return (
  <main className='flex min-h-screen flex-col items-center justify-between p-24'>
   <h1 className='text-4xl font-bold'>HEYO!</h1>
   <div className='p-2 border border-border'>get 10 Products</div>
  </main>
 )
}
