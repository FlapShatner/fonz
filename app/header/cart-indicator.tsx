'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { cartContentsAtom } from '../state/atoms'
import Bag from '../icons/bag'

function CartIndicator() {
 const [cartContents] = useAtom(cartContentsAtom)
 const cartCount = cartContents && cartContents.id ? cartContents.lines.edges.length : 0
 const router = useRouter()
 const handleCart = () => {
  router.push('?modal=cart')
 }
 return (
  <div
   onClick={handleCart}
   className='relative cursor-pointer'>
   {cartCount > 0 && (
    <div className='text-xs font-bold absolute -right-[6px] -top-[6px] bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center'>
     {cartCount}
    </div>
   )}
   <Bag className='w-5 text-accent cursor-pointer' />
  </div>
 )
}

export default CartIndicator
