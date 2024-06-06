import React from 'react'
import { cn } from '@/app/utils'
type CartButtonProps = {
 children: React.ReactNode
 variant?: string
}

function CartButton({ children, variant }: CartButtonProps) {
 const isCheckout = variant === 'checkout'
 return (
  <button
   className={cn(
    'mt-4 border-2 border-accent group relative  overflow-hidden overflow-x-hidden rounded-md px-4 py-2 bg-bg-tertiary text-accent',
    isCheckout && 'bg-accent text-bg-primary hover:border-accent-bright transition-all duration-500'
   )}>
   <span className='relative z-10 text-2xl font-semibold'>{children}</span>
   <span className='absolute inset-0 overflow-hidden rounded-md'>
    <span
     className={cn(
      'absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150',
      isCheckout && 'bg-accent-bright'
     )}></span>
   </span>
  </button>
 )
}

export default CartButton
